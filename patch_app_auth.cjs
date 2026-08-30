const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf-8');

const targetCatch = `        } catch (e) {
          console.warn("Could not load from Firestore, falling back to local storage.", e);
          data = {
            lang: localStorage.getItem(\`lang_\${user.uid}\`),
            nativeLang: localStorage.getItem(\`nativeLang_\${user.uid}\`),
            day: parseInt(localStorage.getItem(\`day_\${user.uid}\`) || '1'),
            hearts: parseInt(localStorage.getItem(\`hearts_\${user.uid}\`) || '5'),
            stars: parseInt(localStorage.getItem(\`stars_\${user.uid}\`) || '10'),
            unlocked: localStorage.getItem(\`unlocked_\${user.uid}\`) ? JSON.parse(localStorage.getItem(\`unlocked_\${user.uid}\`) as string) : [1],
            refill: localStorage.getItem(\`refill_\${user.uid}\`),
            correct: parseInt(localStorage.getItem(\`correct_\${user.uid}\`) || '0'),
            answers: parseInt(localStorage.getItem(\`answers_\${user.uid}\`) || '0'),
            attempts: parseInt(localStorage.getItem(\`attempts_\${user.uid}\`) || '0'),
            attemptDate: localStorage.getItem(\`attemptDate_\${user.uid}\`) || '',
            createdAt: Date.now()
          };
        }`;

const replacementCatch = `        } catch (e) {
          console.warn("Could not load from Firestore, falling back to local storage.", e);
          data = {
            lang: localStorage.getItem(\`lang_\${user.uid}\`),
            nativeLang: localStorage.getItem(\`nativeLang_\${user.uid}\`),
            day: parseInt(localStorage.getItem(\`day_\${user.uid}\`) || '1'),
            hearts: parseInt(localStorage.getItem(\`hearts_\${user.uid}\`) || '5'),
            stars: parseInt(localStorage.getItem(\`stars_\${user.uid}\`) || '10'),
            unlocked: localStorage.getItem(\`unlocked_\${user.uid}\`) ? JSON.parse(localStorage.getItem(\`unlocked_\${user.uid}\`) as string) : [1],
            refill: localStorage.getItem(\`refill_\${user.uid}\`),
            correct: parseInt(localStorage.getItem(\`correct_\${user.uid}\`) || '0'),
            answers: parseInt(localStorage.getItem(\`answers_\${user.uid}\`) || '0'),
            attempts: parseInt(localStorage.getItem(\`attempts_\${user.uid}\`) || '0'),
            attemptDate: localStorage.getItem(\`attemptDate_\${user.uid}\`) || '',
            createdAt: parseInt(localStorage.getItem(\`createdAt_\${user.uid}\`) || Date.now().toString()),
            isPro: localStorage.getItem(\`isPro_\${user.uid}\`) === 'true',
            subscriptionExpiresAt: parseInt(localStorage.getItem(\`subscriptionExpiresAt_\${user.uid}\`) || '0')
          };
        }`;

const targetCache = `          if (userDoc && userDoc.exists && userDoc.exists()) {
            data = userDoc.data();
          } else {
            // New user defaults in Firestore
            data = {
              day: parseInt(localStorage.getItem(\`day_\${user.uid}\`) || '1'),
              hearts: parseInt(localStorage.getItem(\`hearts_\${user.uid}\`) || '5'),
              stars: parseInt(localStorage.getItem(\`stars_\${user.uid}\`) || '10'),
              unlocked: localStorage.getItem(\`unlocked_\${user.uid}\`) ? JSON.parse(localStorage.getItem(\`unlocked_\${user.uid}\`) as string) : [1],
              refill: localStorage.getItem(\`refill_\${user.uid}\`),
              correct: parseInt(localStorage.getItem(\`correct_\${user.uid}\`) || '0'),
              answers: parseInt(localStorage.getItem(\`answers_\${user.uid}\`) || '0'),
              attempts: parseInt(localStorage.getItem(\`attempts_\${user.uid}\`) || '0'),
              attemptDate: localStorage.getItem(\`attemptDate_\${user.uid}\`) || '',
              createdAt: Date.now()
            };
            setDoc(doc(db, "users", user.uid), data, { merge: true }).catch(console.error);
          }`;

const replacementCache = `          if (userDoc && userDoc.exists && userDoc.exists()) {
            data = userDoc.data();
            // Cache to local storage
            if (data.createdAt) localStorage.setItem(\`createdAt_\${user.uid}\`, data.createdAt.toString());
            if (data.isPro !== undefined) localStorage.setItem(\`isPro_\${user.uid}\`, data.isPro.toString());
            if (data.subscriptionExpiresAt) localStorage.setItem(\`subscriptionExpiresAt_\${user.uid}\`, data.subscriptionExpiresAt.toString());
          } else {
            // New user defaults in Firestore
            data = {
              day: parseInt(localStorage.getItem(\`day_\${user.uid}\`) || '1'),
              hearts: parseInt(localStorage.getItem(\`hearts_\${user.uid}\`) || '5'),
              stars: parseInt(localStorage.getItem(\`stars_\${user.uid}\`) || '10'),
              unlocked: localStorage.getItem(\`unlocked_\${user.uid}\`) ? JSON.parse(localStorage.getItem(\`unlocked_\${user.uid}\`) as string) : [1],
              refill: localStorage.getItem(\`refill_\${user.uid}\`),
              correct: parseInt(localStorage.getItem(\`correct_\${user.uid}\`) || '0'),
              answers: parseInt(localStorage.getItem(\`answers_\${user.uid}\`) || '0'),
              attempts: parseInt(localStorage.getItem(\`attempts_\${user.uid}\`) || '0'),
              attemptDate: localStorage.getItem(\`attemptDate_\${user.uid}\`) || '',
              createdAt: Date.now()
            };
            setDoc(doc(db, "users", user.uid), data, { merge: true }).catch(console.error);
          }`;

if (content.includes(targetCatch) && content.includes(targetCache)) {
    content = content.replace(targetCatch, replacementCatch);
    content = content.replace(targetCache, replacementCache);
    content = content.replace(/reject\(new Error\("Timeout"\)\), 3000\)\);/, 'reject(new Error("Timeout")), 8000));');
    fs.writeFileSync('src/App.tsx', content);
    console.log("Patched App.tsx auth cache");
} else {
    console.log("Target not found");
}
