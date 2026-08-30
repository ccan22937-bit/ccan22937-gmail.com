const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf-8');

const target = `<meta name="viewport" content="width=device-width, initial-scale=1.0" />`;
const replacement = `<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />`;

if (content.includes(target)) {
    content = content.replace(target, replacement);
    fs.writeFileSync('index.html', content);
    console.log("Patched successfully");
} else {
    console.log("Target not found");
}
