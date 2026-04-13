#!/usr/bin/env node

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

console.log('--- Summan AI Skills Uninstaller ---');
const manifestPath = path.join(targetDir, MANIFEST_NAME);

if (!fs.existsSync(manifestPath)) {
  console.error(`[!] No se encontró el manifiesto en: ${targetDir}`);
  console.log('[i] Intentando remover skills por nombre directo (si existen)...');
  // Podríamos intentar removerlos hardcoded si el manifiesto no existe
} else {
  try {
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    const skillNames = Object.keys(manifest);

    skillNames.forEach(skill => {
      const skillPath = path.join(targetDir, skill);
      if (fs.existsSync(skillPath)) {
        console.log(`[-] Removiendo skill: ${skill}...`);
        try {
          if (fs.lstatSync(skillPath).isSymbolicLink()) {
            fs.unlinkSync(skillPath);
          } else {
            fs.rmSync(skillPath, { recursive: true, force: true });
          }
        } catch (e) {
          console.error(`[!] Error removiendo ${skill}: ${e.message}`);
        }
      }
    });

    // Limpiar manifiesto
    fs.unlinkSync(manifestPath);
    console.log('[v] Manifiesto eliminado.');

  } catch (e) {
    console.error(`[!] Error procesando manifiesto: ${e.message}`);
  }
}

console.log('--- Desinstalación Completada ---');
