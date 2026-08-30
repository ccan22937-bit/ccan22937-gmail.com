const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/screens/LessonScreen.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Bubble body
content = content.replace(/bg-white border-2 border-gray-200 rounded-2xl/g, 'bg-[#1A1A24] border border-white/20 rounded-2xl shadow-[0_0_15px_rgba(0,240,255,0.1)]');
// Bubble triangle (4-size)
content = content.replace(/bg-white border-l-2 border-b-2 border-gray-200/g, 'bg-[#1A1A24] border-l border-b border-white/20');
// Bubble text color
content = content.replace(/text-gray-800/g, 'text-white');
content = content.replace(/text-gray-700/g, 'text-gray-200');
content = content.replace(/text-gray-500/g, 'text-gray-400');
content = content.replace(/text-gray-400/g, 'text-gray-500');

// Option button inactive
content = content.replace(/bg-white border-2 border-b-4 border-gray-200/g, 'bg-[#1A1A24] border-2 border-b-4 border-white/20');
content = content.replace(/hover:bg-gray-50/g, 'hover:bg-white/5');
content = content.replace(/active:bg-gray-100/g, 'active:bg-white/10');

content = content.replace(/bg-white border-b-4 border-gray-200/g, 'bg-[#1A1A24] border-b-4 border-white/20');
content = content.replace(/bg-white border-gray-200 text-gray-500 opacity-50/g, 'bg-[#1A1A24] border-white/20 text-gray-600 opacity-50');
content = content.replace(/bg-white border-2 border-gray-200 text-gray-500 opacity-50/g, 'bg-[#1A1A24] border-2 border-white/20 text-gray-600 opacity-50');

// Audio buttons inside bubbles
content = content.replace(/text-\[#1cb0f6\] bg-blue-50 hover:bg-blue-100/g, 'text-[#00F0FF] bg-[#00F0FF]/10 hover:bg-[#00F0FF]/20');
content = content.replace(/text-\[#1cb0f6\] border-\[#1cb0f6\] bg-white hover:bg-blue-50/g, 'text-[#00F0FF] border-[#00F0FF] bg-[#1A1A24] hover:bg-[#00F0FF]/10');
content = content.replace(/text-\[#1cb0f6\] border-\[#1cb0f6\] hover:bg-blue-50/g, 'text-[#00F0FF] border-[#00F0FF]/50 hover:bg-[#00F0FF]/10');

// Option button selected
content = content.replace(/bg-blue-50 border-blue-400 border-b-4 text-blue-600/g, 'bg-[#00F0FF]/10 border-[#00F0FF] border-b-4 text-[#00F0FF]');
content = content.replace(/bg-blue-50 border-2 border-blue-400 border-b-4 text-blue-600/g, 'bg-[#00F0FF]/10 border-2 border-[#00F0FF] border-b-4 text-[#00F0FF]');

// Correct and wrong highlight in options
content = content.replace(/bg-green-50 border-green-500 border-b-4 text-green-700/g, 'bg-[#00FF66]/20 border-[#00FF66] border-b-4 text-[#00FF66]');
content = content.replace(/bg-red-50 border-red-500 border-b-4 text-red-700/g, 'bg-[#FF0055]/20 border-[#FF0055] border-b-4 text-[#FF0055]');

content = content.replace(/bg-\[#d7ffb8\] border-2 border-\[#58cc02\] border-b-4 text-\[#58cc02\]/g, 'bg-[#00FF66]/20 border-2 border-[#00FF66] border-b-4 text-[#00FF66]');
content = content.replace(/bg-\[#ffdfe0\] border-2 border-\[#ea2b2b\] border-b-4 text-\[#ea2b2b\]/g, 'bg-[#FF0055]/20 border-2 border-[#FF0055] border-b-4 text-[#FF0055]');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Replacements done!');
