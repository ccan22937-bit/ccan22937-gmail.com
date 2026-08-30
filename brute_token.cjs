const prefixes = ['7980348738:AAGduNCKH5'];
const chars1 = ['oO', 'o0', '0O', '00', 'OO', 'O0', 'oo'];
const middle = 'BSKDAs2JrFQym';
const chars2 = ['O', '0', 'o'];
const suffix = 'JCsh';
const chars3 = ['Xx', 'xx', 'XX', 'xX'];
const end = '_48';

async function run() {
  for (const c1 of chars1) {
    for (const c2 of chars2) {
      for (const c3 of chars3) {
        const token = prefixes[0] + c1 + middle + c2 + suffix + c3 + end;
        try {
          const res = await fetch(`https://api.telegram.org/bot${token}/getMe`);
          const data = await res.json();
          if (data.ok) {
            console.log("FOUND TOKEN:", token);
            return;
          }
        } catch(e) {}
      }
    }
  }
  console.log("Not found.");
}
run();
