const fs = require('fs');
let content = fs.readFileSync('src/main.tsx', 'utf-8');

const telegramInit = `
if (window.Telegram?.WebApp) {
  window.Telegram.WebApp.ready();
  window.Telegram.WebApp.expand();
}
`;

content = content.replace("import App from './App.tsx';", telegramInit + "\nimport App from './App.tsx';");
fs.writeFileSync('src/main.tsx', content);
