const fs = require('fs');
const path = require('path');
const os = require('os');

const FLAG_PATHS = {
  '--antigravity': path.join(os.homedir(), '.gemini', 'antigravity', 'skills'),
  '--gemini': path.join(os.homedir(), '.gemini', 'antigravity', 'skills'),
  '--cursor': path.join(os.homedir(), '.cursor', 'skills'),
  '--claude': path.join(os.homedir(), '.claude', 'skills'),
  '--windsurf': path.join(os.homedir(), '.codeium', 'windsurf', 'skills'),
  '--trae': path.join(os.homedir(), '.trae', 'skills'),
  '--kiro': path.join(os.homedir(), '.kiro', 'skills'),
  '--opencode': path.join(os.homedir(), '.config', 'opencode', 'skills'),
  '--codex': path.join(os.homedir(), '.openai', 'skills'),
  '--global': path.join(os.homedir(), '.agents', 'skills')
};

const args = process.argv.slice(2);
let targetDir = FLAG_PATHS['--antigravity']; // Default
let targetName = 'Antigravity';

for (const flag in FLAG_PATHS) {
  if (args.includes(flag)) {
    targetDir = FLAG_PATHS[flag];
    targetName = flag.replace('--', '').charAt(0).toUpperCase() + flag.slice(3);
    break;
  }
}

console.log(`--- Skills Instalados en ${targetName} ---`);
console.log(`Directorio: ${targetDir}\n`);

if (!fs.existsSync(targetDir)) {
  console.log('[!] El directorio no existe. No hay skills instalados para este entorno.');
  process.exit(0);
}

const items = fs.readdirSync(targetDir);
const skills = items.filter(item => {
  const fullPath = path.join(targetDir, item);
  return fs.lstatSync(fullPath).isDirectory() || fs.lstatSync(fullPath).isSymbolicLink();
}).filter(item => !item.startsWith('.'));

if (skills.length === 0) {
  console.log('No se encontraron skills en este entorno.');
} else {
  skills.forEach((skill, index) => {
    const skillPath = path.join(targetDir, skill);
    const isLink = fs.lstatSync(skillPath).isSymbolicLink();
    console.log(`${index + 1}. [${isLink ? 'LINK' : 'FILE'}] ${skill}`);
  });
}

console.log('\nPara instalar más skills, usa:');
console.log(`npx github:lufermalgo/summan-ai-dtw-consultants install --${targetName.toLowerCase()}`);
