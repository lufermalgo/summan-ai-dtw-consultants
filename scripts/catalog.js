#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const SKILLS_DIR = path.join(process.cwd(), 'skills');
const CATALOG_PATH = path.join(process.cwd(), 'CATALOG.md');

console.log('--- Summan AI Catalog Generator ---');

if (!fs.existsSync(SKILLS_DIR)) {
  console.error('[!] Error: No se encontró el directorio skills/');
  process.exit(1);
}

const skills = fs.readdirSync(SKILLS_DIR).filter(f => fs.lstatSync(path.join(SKILLS_DIR, f)).isDirectory());

let catalogContent = `# Catálogo de Skills: Summan AI Consulting Pipeline

Este catálogo se genera automáticamente a partir de los archivos \`SKILL.md\` de cada componente.

| Skill | Rol | Etapa | Descripción |
| :--- | :--- | :--- | :--- |
`;

skills.forEach(skillName => {
  const skillPath = path.join(SKILLS_DIR, skillName, 'SKILL.md');
  if (fs.existsSync(skillPath)) {
    const content = fs.readFileSync(skillPath, 'utf8');
    
    // Extraer metadatos de la tabla
    const nameMatch = content.match(/\|\s*\*\*Name\*\*\s*\|\s*([^|]+)\|/);
    const roleMatch = content.match(/\|\s*\*\*Role\*\*\s*\|\s*([^|]+)\|/);
    const stageMatch = content.match(/\|\s*\*\*Stage\*\*\s*\|\s*([^|]+)\|/);
    
    // Extraer descripción del frontmatter o primer párrafo
    const descMatch = content.match(/description:\s*(.*)/) || content.match(/\n\n([^#|].*)/);
    
    const name = nameMatch ? nameMatch[1].trim() : skillName;
    const role = roleMatch ? roleMatch[1].trim() : 'N/A';
    const stage = stageMatch ? stageMatch[1].trim() : 'N/A';
    const desc = descMatch ? descMatch[1].trim().replace(/^"(.*)"$/, '$1') : 'Sin descripción';

    catalogContent += `| [${name}](./skills/${skillName}/SKILL.md) | ${role} | ${stage} | ${desc} | \n`;
  }
});

catalogContent += `
***
*Generado el: ${new Date().toLocaleDateString()}*
`;

fs.writeFileSync(CATALOG_PATH, catalogContent);
console.log(`[v] Catálogo generado con éxito: ${CATALOG_PATH}`);
