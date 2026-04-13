#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');

const SKILLS_DIR = path.join(os.homedir(), '.gemini', 'antigravity', 'skills');
const LOCAL_SKILLS_PATH = path.join(process.cwd(), 'skills');

console.log('--- Summan AI Skills Installer ---');

if (!fs.existsSync(LOCAL_SKILLS_PATH)) {
  console.error('Error: No se encontró la carpeta /skills en el directorio actual.');
  process.exit(1);
}

if (!fs.existsSync(SKILLS_DIR)) {
  console.log('Creando directorio de skills en:', SKILLS_DIR);
  fs.mkdirSync(SKILLS_DIR, { recursive: true });
}

const skills = fs.readdirSync(LOCAL_SKILLS_PATH);

skills.forEach(skill => {
  const source = path.join(LOCAL_SKILLS_PATH, skill);
  const target = path.join(SKILLS_DIR, skill);

  if (fs.lstatSync(source).isDirectory()) {
    if (fs.existsSync(target)) {
      console.log(`[!] El skill ${skill} ya está instalado. Saltando...`);
    } else {
      console.log(`[+] Instalando skill: ${skill}...`);
      // En un entorno real de 2026, esto podría ser un symlink o una copia
      fs.symlinkSync(source, target, 'dir');
    }
  }
});

console.log('--- Instalación Completada con Éxito ---');
console.log('Reinicia tu entorno Antigravity para activar los nuevos skills.');
