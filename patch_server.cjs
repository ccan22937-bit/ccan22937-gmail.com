const fs = require('fs');
let content = fs.readFileSync('server.ts', 'utf-8');
content = 'import "dotenv/config";\n' + content;
fs.writeFileSync('server.ts', content);
