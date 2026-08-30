const fetch = require('http'); // no, global fetch
const tokenPattern = '7980348738:AAGduNCKH5oOBSKDAs2JrFQym0JCshXx_48';

const chars = {
  25: ['o', 'O', '0'], // o
  26: ['O', '0', 'o'], // O
  38: ['0', 'O', 'o'], // 0
  43: ['X', 'x'],      // X
  44: ['x', 'X']       // x
};

async function run() {
  const base = tokenPattern.split('');
  const idx = [25, 26, 38, 43, 44];
  
  function solve(pos) {
    if (pos === idx.length) {
      return base.join('');
    }
    const results = [];
    for (const c of chars[idx[pos]]) {
      base[idx[pos]] = c;
      results.push(...solve(pos + 1));
    }
    return results;
  }
  
  const allTokens = solve(0);
  console.log("Checking", allTokens.length, "tokens");
  let count = 0;
  for (const token of allTokens) {
    count++;
    if (count % 20 === 0) console.log(count);
    try {
      const res = await fetch(`https://api.telegram.org/bot${token}/getMe`);
      const data = await res.json();
      if (data.ok) {
        console.log("FOUND:", token);
        return;
      }
    } catch(e) {}
  }
  console.log("Not found.");
}
run();
