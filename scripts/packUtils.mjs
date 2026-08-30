import fs from 'fs';
import path from 'path';

// TOPICS DEFINITION FOR EXACTLY 5,000 RICH, DISTINCT MASTER DIALOGUES
// 5 Sub-Packs x 1,000 items each = 5,000 total

// Sub-Pack 1: ID 2161 -> 3160 (İş, Mesai, Patron, Ofis, Yorgunluk, Dinlenme Zincirleri)
// Sub-Pack 2: ID 3161 -> 4160 (Günlük Rutinler, Sabah, Kahve, Yolda Olma, Ev Yaşamı)
// Sub-Pack 3: ID 4161 -> 5160 (Okul, Üniversite, Sınavlar, Ders Çalışma, Gelecek Planları)
// Sub-Pack 4: ID 5161 -> 6160 (Duygular, Ruh Halleri, Empati, Moral, Neşe, Stres, Motivasyon)
// Sub-Pack 5: ID 6161 -> 7160 (Sosyal Hayat, Arkadaşlar, Hafta Sonu, Doğal Günlük Türkçe & Deyişler)

function generatePack(startId, count, category, categoryLabel, topicName, themeData) {
  const items = [];
  let id = startId;
  const endId = startId + count - 1;

  for (let i = 0; i < count; i++) {
    const currentNumericId = id++;
    const theme = themeData[i % themeData.length];
    const variationIdx = Math.floor(i / themeData.length) + 1;

    const intentId = `master_sohbet_${currentNumericId}`;
    
    // Construct unique input & trigger set
    const mainInput = theme.getInput(variationIdx);
    const triggers = theme.getTriggers(variationIdx);
    const response = theme.getResponse(variationIdx);
    const followUps = theme.getFollowUps(variationIdx);

    items.push({
      numericId: currentNumericId,
      intentId,
      turkishInput: mainInput,
      turkishTriggers: triggers,
      turkishHumanResponse: response,
      category,
      categoryLabel,
      followUps
    });
  }

  return items;
}

// Generate the TypeScript file content
function serializeToTsFile(packName, exportRawName, exportTemplatesName, exportPairsName, category, categoryLabel, items) {
  const codeLines = [
    `import { UniversalMasterTemplate, DialoguePairDefinition } from '../localDialogueEngine';`,
    ``,
    `/**`,
    ` * ${packName} (#${items[0].numericId} - #${items[items.length - 1].numericId})`,
    ` * Toplam ${items.length} benzersiz, bağlamlı ve gerçekçi Türkçe master diyalog kaydı.`,
    ` */`,
    ``,
    `export const ${exportRawName} = [`
  ];

  for (const item of items) {
    codeLines.push(`  {`);
    codeLines.push(`    numericId: ${item.numericId},`);
    codeLines.push(`    intentId: ${JSON.stringify(item.intentId)},`);
    codeLines.push(`    turkishInput: ${JSON.stringify(item.turkishInput)},`);
    codeLines.push(`    turkishTriggers: ${JSON.stringify(item.turkishTriggers)},`);
    codeLines.push(`    turkishHumanResponse: ${JSON.stringify(item.turkishHumanResponse)}`);
    codeLines.push(`  },`);
  }

  codeLines.push(`];`);
  codeLines.push(``);
  codeLines.push(`export const ${exportTemplatesName}: UniversalMasterTemplate[] = ${exportRawName}.map((item, idx) => ({`);
  codeLines.push(`  id: \`master_\${item.intentId}\`,`);
  codeLines.push(`  category: ${JSON.stringify(category)},`);
  codeLines.push(`  categoryLabel: ${JSON.stringify(categoryLabel)},`);
  codeLines.push(`  intentId: item.intentId,`);
  codeLines.push(`  turkishInput: item.turkishInput,`);
  codeLines.push(`  turkishTriggers: item.turkishTriggers,`);
  codeLines.push(`  turkishHumanResponse: item.turkishHumanResponse,`);
  codeLines.push(`  followUpSuggestions: [`);
  codeLines.push(`    { turkishText: 'Aynen öyle, çok haklısın.', category: ${JSON.stringify(category)}, intentId: \`fu_\${item.intentId}_1\` },`);
  codeLines.push(`    { turkishText: 'Sen ne düşünüyorsun bu konuda?', category: ${JSON.stringify(category)}, intentId: \`fu_\${item.intentId}_2\` },`);
  codeLines.push(`    { turkishText: 'Teşekkür ederim, bana çok iyi geldi.', category: ${JSON.stringify(category)}, intentId: \`fu_\${item.intentId}_3\` }`);
  codeLines.push(`  ]`);
  codeLines.push(`}));`);
  codeLines.push(``);
  codeLines.push(`export const ${exportPairsName}: DialoguePairDefinition[] = ${exportTemplatesName}.map(t => ({`);
  codeLines.push(`  id: t.id,`);
  codeLines.push(`  category: t.category,`);
  codeLines.push(`  categoryLabel: t.categoryLabel,`);
  codeLines.push(`  intentId: t.intentId,`);
  codeLines.push(`  turkishInput: t.turkishInput,`);
  codeLines.push(`  turkishHumanResponse: t.turkishHumanResponse,`);
  codeLines.push(`  triggers: t.turkishTriggers,`);
  codeLines.push(`  counterparts: {`);
  codeLines.push(`    'Türkçe': {`);
  codeLines.push(`      text: t.turkishHumanResponse,`);
  codeLines.push(`      phonetic: t.turkishHumanResponse,`);
  codeLines.push(`      tr: t.turkishHumanResponse,`);
  codeLines.push(`      replies: t.followUpSuggestions.map(f => ({`);
  codeLines.push(`        target: f.turkishText,`);
  codeLines.push(`        romaji: f.turkishText,`);
  codeLines.push(`        native: f.turkishText,`);
  codeLines.push(`        category: f.category,`);
  codeLines.push(`        intentId: f.intentId`);
  codeLines.push(`      }))`);
  codeLines.push(`    }`);
  codeLines.push(`  }`);
  codeLines.push(`}));`);

  return codeLines.join('\n');
}

export { generatePack, serializeToTsFile };
