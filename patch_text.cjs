const fs = require('fs');
let content = fs.readFileSync('src/screens/SubscriptionScreen.tsx', 'utf-8');

content = content.replace('"Telegram Stars / TON ile Öde"', '"Telegram TON ile Öde"');
content = content.replace('"Anında onay (300 ₺ / 500 Stars)"', '"Anında onay (300 ₺ / TON)"');

fs.writeFileSync('src/screens/SubscriptionScreen.tsx', content);
