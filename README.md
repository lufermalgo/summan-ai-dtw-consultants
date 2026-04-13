# 🚀 Summan AI Consulting Pipeline: De la Evidencia al Gemelo Digital

Este repositorio es el ecosistema de conocimiento y ejecución de la plataforma **Summan AI Consulting**. Aquí, la metodología industrial y la inteligencia artificial generativa se unen para orquestar la transformación digital de activos físicos.

---

## 🧭 Visión Estratégica (Norte Summan)

Para entender de manera orgánica cómo las habilidades (Skills) y la teoría se entrelazan, sigue este hilo conductor estratégico:

1. [1. El Motivador: Visión End-to-End](docs/summan-end-to-end-vision.md): El "Por qué" de los 7 agentes expertos y el flujo de valor.
2. [2. Journey to Digital Twin](docs/journey-to-digital-twin.md): El "Cómo" — el camino paso a paso desde el descubrimiento hasta el reporte.
3. [3. Digital Readiness Framework](docs/digital-readiness-framework.md): El marco técnico de evaluación de madurez.
4. [4. Industrial Hotspots Scoring](docs/industrial-hotspots-scoring.md): Metodología sAhI para priorizar dolores operativos.
5. [5. Norma ISA-95](docs/isa-95-technical-standards.md): Estándar técnico para la convergencia IT/OT.

---

## 🛠️ Instalación y Configuración Universal

El pipeline de Summan sigue el estándar de la comunidad para la gestión de habilidades. Una vez instalado globalmente, puedes usar el comando \`skills\` directamente.

### Instalación del CLI (Solo una vez)

```bash
npm install -g github:lufermalgo/summan-ai-dtw-consultants
```

### Comandos Estándar

```bash
# Instalar skills en un entorno específico
skills install --antigravity
skills install --claude

# Listar skills instalados por entorno
skills list --cursor
skills list --trae
```

```bash
# Antigravity / Gemini CLI
skills install --antigravity

# Claude Code / CLI
skills install --claude

# Cursor & Windsurf
skills install --cursor
skills install --windsurf

# Kiro & Trae & OpenAI Codex
skills install --kiro
skills install --trae
skills install --codex
```

### Inspección de Entorno

Si quieres saber qué habilidades tienes instaladas en un agente específico sin depender de herramientas externas:

```bash
# Ver skills en Antigravity
skills list --antigravity

# Ver skills en Claude
skills list --claude

# Ver skills en Cursor
skills list --cursor
```

### 📂 ¿Qué es el directorio `~/.agents`?

Es posible que veas un directorio llamado `~/.agents/skills`. Este es un estándar comunitario (utilizado por herramientas de Vercel/Anthropic) para compartir habilidades entre agentes. 

**Norte Summan** prefiere el orden y la especificidad. Por eso, te recomendamos usar siempre los flags específicos (`--claude`, `--cursor`, etc.) para mantener cada entorno aislado y profesional.

## 🚀 Manual del Consultor

Los agentes están diseñados para trabajar de forma autónoma siguiendo las reglas de negocio definidas en la documentación técnica.

### Cómo utilizar los Skills

Una vez instalados, puedes invocar al orquestador o a sub-agentes específicos mediante comandos naturales según tu IDE:

* "Analiza este proceso industrial usando el framework sAhI"
* "Genera el mapa de procesos para la línea de producción X"

### Gestión de Entregables

Todas las salidas (reportes, matrices, roadmaps) se centralizan automáticamente en:

* **Directorio**: `/outputs/`
* **Formato**: Markdown (.md) de alta fidelidad.

## ⚙️ Mantenimiento del Pipeline

El repositorio cuenta con una interfaz unificada para gestionar el ciclo de vida de los skills de forma remota:

| Comando | Descripción |
| :--- | :--- |
| `npx github:lufermalgo/summan-ai-dtw-consultants install` | Instala los skills en el entorno detectado (`--antigravity`, `--cursor`, etc). |
| `npx github:lufermalgo/summan-ai-dtw-consultants uninstall` | Remueve de forma segura los recursos instalados. |
| `npx github:lufermalgo/summan-ai-dtw-consultants catalog` | Sincroniza el catálogo global con las definiciones locales. |

> [!TIP]
> No es necesario clonar el repositorio para mantener tus skills actualizados. Los comandos anteriores funcionan directamente desde GitHub.

---

### Official Sources

- **[anthropics/skills](https://github.com/anthropics/skills)**: Official Anthropic skills repository - Document manipulation (DOCX, PDF, PPTX, XLSX), Brand Guidelines, Internal Communications.
- **[anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks)**: Official notebooks and recipes for building with Claude.
- **[remotion-dev/skills](https://github.com/remotion-dev/skills)**: Official Remotion skills - Video creation in React with 28 modular rules.
- **[vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills)**: Vercel Labs official skills - React Best Practices, Web Design Guidelines.
- **[openai/skills](https://github.com/openai/skills)**: OpenAI Codex skills catalog - Agent skills, Skill Creator, Concise Planning.
- **[supabase/agent-skills](https://github.com/supabase/agent-skills)**: Supabase official skills - Postgres Best Practices.
- **[microsoft/skills](https://github.com/microsoft/skills)**: Official Microsoft skills - Azure cloud services, Bot Framework, Cognitive Services, and enterprise development patterns across .NET, Python, TypeScript, Go, Rust, and Java.
- **[google-gemini/gemini-skills](https://github.com/google-gemini/gemini-skills)**: Official Gemini skills - Gemini API, SDK and model interactions.
- **[apify/agent-skills](https://github.com/apify/agent-skills)**: Official Apify skills - Web scraping, data extraction and automation.
- **[expo/skills](https://github.com/expo/skills)**: Official Expo skills - Expo project workflows and Expo Application Services guidance.
- **[huggingface/skills](https://github.com/huggingface/skills)**: Official Hugging Face skills - Models, Spaces, datasets, inference, and broader Hugging Face ecosystem workflows.
- **[neondatabase/agent-skills](https://github.com/neondatabase/agent-skills)**: Official Neon skills - Serverless Postgres workflows and Neon platform guidance.
- **[scopeblind/scopeblind-gateway](https://github.com/scopeblind/scopeblind-gateway)**: Official Scopeblind MCP governance toolkit - Cedar policy authoring, shadow-to-enforce rollout, and signed-receipt verification guidance for agent tool calls.

---

© 2026 Summan AI. Todos los derechos reservados.
