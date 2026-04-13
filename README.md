# Summan AI Consulting Pipeline: Journey to the Digital Twin

Este repositorio es el núcleo tecnológico del **Pipeline de Consultoría Summan AI**, una suite de agentes inteligentes diseñados para orquestar la transformación industrial hacia el **Gemelo Digital (Digital Twin)**.

## 📖 Visión Estratégica
El pipeline sigue la metodología propietaria de Summan para la evaluación de activos industriales, estructurada en fases de descubrimiento, diagnóstico y roadmapping.

- **Visión General**: [Consulting Platform to Digital Twin — Visión End-to-End](docs/Summan%20AI%20Consulting%20Platform%20to%20Digital%20Twin%20—%20Visión%20End-to-End.md)
- **Framework Metodológico**: [Framework Reutilizable para Scoring Analítico (sAhI)](docs/Framework%20Reutilizable%20para%20Scoring%20Analítico%20de%20Hotspots%20Industriales.md)
- **Matriz de Viabilidad**: [Scoring Analítico de Hotspots Industriales](docs/Scoring%20Analítico%20de%20Hotspots%20Industriales.md)

## 🛠️ Instalación y Configuración
El pipeline es portable y puede instalarse directamente desde GitHub en los principales entornos de agentes de IA.

### Instalación Rápida
Ejecuta el siguiente comando en la raíz de tu proyecto, usando el flag correspondiente a tu herramienta:

```bash
# Distribución principal (Antigravity / Gemini CLI)
npx github:lufermalgo/summan-ai-dtw-consultants --antigravity

# Otros entornos compatibles
npx github:lufermalgo/summan-ai-dtw-consultants --cursor      # Cursor AI
npx github:lufermalgo/summan-ai-dtw-consultants --claude      # Claude Code / CLI
npx github:lufermalgo/summan-ai-dtw-consultants --windsurf    # Windsurf
npx github:lufermalgo/summan-ai-dtw-consultants --opencode    # OpenCode
```

### Verificación de la Instalación
Puedes confirmar que los skills están disponibles revisando el catálogo generado:
```bash
cat CATALOG.md
```

## 🚀 Manual del Consultor
Los agentes están diseñados para trabajar de forma autónoma siguiendo las reglas de negocio definidas en la documentación técnica.

### Cómo utilizar los Skills
Una vez instalados, puedes invocar al orquestador o a sub-agentes específicos mediante comandos naturales según tu IDE:
- *"Analiza este proceso industrial usando el framework sAhI"*
- *"Genera el mapa de procesos para la línea de producción X"*

### Gestión de Entregables
Para mantener un entorno de trabajo limpio y profesional, todas las salidas (reportes, matrices, roadmaps) se centralizan automáticamente en:
- **Directorio**: `/outputs/`
- **Formato**: Markdown (.md) de alta fidelidad.

## ⚙️ Mantenimiento del Pipeline
El repositorio incluye una suite de comandos para gestionar el ciclo de vida de los skills:

| Comando | Descripción |
| :--- | :--- |
| `summan-install` | Actualiza o reinstala los skills desde el origen. |
| `summan-uninstall` | Elimina de forma segura todos los recursos instalados. |
| `summan-catalog` | Sincroniza el catálogo de habilidades con los metadatos de los skills. |

---
© 2026 Summan AI. Todos los derechos reservados.
