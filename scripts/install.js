#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');

const SKILLS_DIR = path.join(os.homedir(), '.gemini', 'antigravity', 'skills');
const LOCAL_SKILLS_PATH = path.join(__dirname, '..', 'skills');

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

const MANIFEST_NAME = '.summan-installed-skills.json';

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
}

if (!fs.existsSync(targetDir)) {
  console.log('Creando directorio de destino:', targetDir);
  fs.mkdirSync(targetDir, { recursive: true });
}

// Cargar o crear manifiesto
const manifestPath = path.join(targetDir, MANIFEST_NAME);
let manifest = {};
if (fs.existsSync(manifestPath)) {
  try {
    manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  } catch (e) {
    manifest = {};
  }
}

const skills = fs.readdirSync(LOCAL_SKILLS_PATH);
const installedSkills = [];

skills.forEach(skill => {
  const source = path.join(LOCAL_SKILLS_PATH, skill);
  const target = path.join(targetDir, skill);

  if (fs.lstatSync(source).isDirectory()) {
    if (fs.existsSync(target)) {
      console.log(`[!] El skill ${skill} ya existe. Sobrescribiendo...`);
      try {
        if (fs.lstatSync(target).isSymbolicLink()) {
          fs.unlinkSync(target);
        } else {
          fs.rmSync(target, { recursive: true, force: true });
        }
      } catch (e) {
        console.log(`[!] Error removiendo anterior: ${e.message}`);
      }
    }
    
    console.log(`[+] Instalando skill: ${skill}...`);
    try {
      // Intentamos symlink para desarrollo, pero si es npx (remoto) mejor copiar o hardlink
      // Para efectos de este installer, preferimos symlink si el source está disponible localmente
      // Si LOCAL_SKILLS_PATH es temporal (npx), entonces copiamos.
      const isRemote = !fs.existsSync(path.join(process.cwd(), 'package.json'));
      
      if (isRemote) {
        fs.cpSync(source, target, { recursive: true });
      } else {
        fs.symlinkSync(source, target, 'dir');
      }
      
      installedSkills.push(skill);
      manifest[skill] = {
        installedAt: new Date().toISOString(),
        path: target,
        version: '1.0.0' // Podríamos leerlo del SKILL.md o package.json
      };
    } catch (e) {
      console.log(`[!] Falló symlink, copiando archivos para ${skill}...`);
      fs.cpSync(source, target, { recursive: true });
      installedSkills.push(skill);
      manifest[skill] = {
        installedAt: new Date().toISOString(),
        path: target,
        version: '1.0.0'
      };
    }
  }
});

// Guardar manifiesto actualizado
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));

console.log('--- Instalación Completada con Éxito ---');
console.log(`[v] ${installedSkills.length} skills registrados en el manifiesto.`);
console.log('Reinicia tu entorno para activar los nuevos skills.');
