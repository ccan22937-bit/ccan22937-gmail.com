const prefixes = ['7980348738:AAGduNCKH5'];
const m1 = ['o', 'O', '0'];
const m2 = ['o', 'O', '0'];
const middle = 'BSKDAs2JrFQym';
const m3 = ['o', 'O', '0'];
const suffix = 'JCsh';
const m4 = ['X', 'x'];
const m5 = ['x', 'X'];
const end = '_48';

async function run() {
  for (const c1 of m1) {
    for (const c2 of m2) {
      for (const c3 of m3) {
        for (const c4 of m4) {
          for (const c5 of m5) {
            const token = prefixes[0] + c1 + c2 + middle + c3 + suffix + c4 + c5 + end;
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
    }
  }
  console.log("Not found.");
}
run();
