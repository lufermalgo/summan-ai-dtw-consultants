# Summan AI Consulting Pipeline: Journey to the Digital Twin

Este repositorio es el núcleo tecnológico del **Pipeline de Consultoría Summan AI**, una suite de agentes inteligentes diseñados para orquestar la transformación industrial hacia el **Gemelo Digital (Digital Twin)**.

## 📖 Visión Estratégica

El pipeline sigue la metodología propietaria de Summan para la evaluación de activos industriales, estructurada en fases de descubrimiento, diagnóstico y roadmapping.

1. **Journey to Digital Twin**: [El punto de partida de la consultoría](docs/journey-to-digital-twin.md)
2. **Digital Readiness Framework**: [El marco técnico de evaluación](docs/digital-readiness-framework.md)
3. **Industrial Hotspots Scoring**: [La metodología de calificación de impactos](docs/industrial-hotspots-scoring.md)

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

* "Analiza este proceso industrial usando el framework sAhI"
* "Genera el mapa de procesos para la línea de producción X"

### Gestión de Entregables

Para mantener un entorno de trabajo limpio y profesional, todas las salidas (reportes, matrices, roadmaps) se centralizan automáticamente en:

* **Directorio**: `/outputs/`
* **Formato**: Markdown (.md) de alta fidelidad.

## ⚙️ Mantenimiento del Pipeline

El repositorio incluye una suite de comandos para gestionar el ciclo de vida de los skills:

| Comando | Descripción |
| :--- | :--- |
| `summan-install` | Actualiza o reinstala los skills desde el origen. |
| `summan-uninstall` | Elimina de forma segura todos los recursos instalados. |
| `summan-catalog` | Sincroniza el catálogo de habilidades con los metadatos de los skills. |

---

© 2026 Summan AI. Todos los derechos reservados.
