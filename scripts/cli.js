#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

const args = process.argv.slice(2);
const command = args[0];
const remainingArgs = args.slice(1);

const COMMANDS = {
  'install': 'install.js',
  'uninstall': 'uninstall.js',
  'catalog': 'catalog.js',
  'list': 'list.js'
};

if (!command || !COMMANDS[command]) {
  console.log('--- Summan AI Skills CLI ---');
  console.log('Uso: skills <comando> [opciones]');
  console.log('');
  console.log('Comandos disponibles:');
  console.log('  install      Instala los skills en el entorno detectado.');
  console.log('  uninstall    Remueve los skills instalados.');
  console.log('  catalog      Genera el catálogo local (CATALOG.md).');
  console.log('  list         Lista los skills instalados en un entorno específico.');
  console.log('');
  console.log('Banderas de Entorno (IDEs soportados):');
  console.log('  --antigravity, --gemini, --cursor, --claude, --windsurf, --trae, --kiro, --opencode, --codex');
  console.log('');
  console.log('Ejemplos:');
  console.log('  skills list --claude');
  console.log('  skills install --cursor');
  process.exit(1);
}

const scriptPath = path.join(__dirname, COMMANDS[command]);

const child = spawn('node', [scriptPath, ...remainingArgs], {
  stdio: 'inherit'
});

child.on('exit', (code) => {
  process.exit(code);
});
