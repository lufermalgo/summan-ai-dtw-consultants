#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');

const SKILLS_DIR = path.join(os.homedir(), '.gemini', 'antigravity', 'skills');
const LOCAL_SKILLS_PATH = path.join(process.cwd(), 'skills');

const FLAG_PATHS = {
  '--antigravity': path.join(os.homedir(), '.gemini', 'antigravity', 'skills'),
  '--gemini': path.join(os.homedir(), '.gemini', 'antigravity', 'skills'),
  '--cursor': path.join(os.homedir(), '.cursor', 'extensions', 'skills'),
  '--claude': os.platform() === 'darwin' 
    ? path.join(os.homedir(), 'Library', 'Application Support', 'Claude', 'skills')
    : path.join(os.homedir(), '.claude', 'skills'),
  '--windsurf': path.join(os.homedir(), '.windsurf', 'skills'),
  '--codex': path.join(os.homedir(), '.codex', 'skills')
};

const args = process.argv.slice(2);
let targetDir = FLAG_PATHS['--antigravity']; // Default

// Buscar si el usuario pasó algún flag conocido
for (const flag in FLAG_PATHS) {
  if (args.includes(flag)) {
    targetDir = FLAG_PATHS[flag];
    break;
  }
}

console.log('--- Summan AI Skills Installer ---');
console.log(`[i] Objetivo: ${targetDir}`);

if (!fs.existsSync(LOCAL_SKILLS_PATH)) {
  console.log('[!] Nota: Ejecutando desde instalación remota (npx).');
  // En este modo, npx ya descargó el repo en un directorio temporal de caché.
  // El script sigue funcionando porque LOCAL_SKILLS_PATH apuntará a ese caché.
}

if (!fs.existsSync(targetDir)) {
  console.log('Creando directorio de destino:', targetDir);
  fs.mkdirSync(targetDir, { recursive: true });
}

const skills = fs.readdirSync(LOCAL_SKILLS_PATH);

skills.forEach(skill => {
  const source = path.join(LOCAL_SKILLS_PATH, skill);
  const target = path.join(targetDir, skill);

  if (fs.lstatSync(source).isDirectory()) {
    if (fs.existsSync(target)) {
      console.log(`[!] El skill ${skill} ya existe. Sobrescribiendo link...`);
      fs.unlinkSync(target);
    }
    console.log(`[+] Vinculando skill: ${skill}...`);
    try {
      fs.symlinkSync(source, target, 'dir');
    } catch (e) {
      // Fallback a copia si los symlinks fallan (ej. Windows sin permisos)
      console.log(`[!] Symlink falló, copiando archivos para ${skill}...`);
      fs.cpSync(source, target, { recursive: true });
    }
  }
});

console.log('--- Instalación Completada con Éxito ---');
console.log('Reinicia tu entorno Antigravity para activar los nuevos skills.');
