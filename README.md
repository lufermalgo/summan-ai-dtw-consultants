# Summan AI Consulting Pipeline: Manual de Usuario

Este repositorio contiene la suite oficial de **Skills de IA** para el ecosistema Summan, diseñados para automatizar el **Assessment de Preparación Industrial** (Etapa 1 del Journey to the Digital Twin).

## 🚀 Introducción

Estas habilidades permiten que agentes de IA (en Antigravity, Cursor, Claude, etc.) actúen como consultores expertos en procesos industriales, analizando datos del cliente, mapeando KPIs y detectando oportunidades tecnológicas de manera estandarizada y profunda.

## 🛠️ Requisitos Previos

- **Node.js**: Necesario para ejecutar el instalador automatizado.
- **Un IDE/CLI compatible**: Antigravity, Cursor, Claude Desktop, o Windsurf (versión 2026+).

## 📦 Instalación Automatizada

La forma recomendada de instalar estos skills es mediante `npx`, lo cual registra las habilidades directamente en la ruta que tu herramienta de IA utiliza para detectarlas.

### Para usuarios de Antigravity / Gemini

```bash
npx github:lufermalgo/summan-ai-dtw-consultants --antigravity
```

### Para usuarios de Cursor

```bash
npx github:lufermalgo/summan-ai-dtw-consultants --cursor
```

### Para otros entornos

- **Claude Desktop**: Usar flag `--claude`
- **Windsurf**: Usar flag `--windsurf`
- **Codex**: Usar flag `--codex`
- **OpenCode**: Usar flag `--opencode`

### Mantenimiento y Desinstalación

Si necesitas remover los skills o regenerar el catálogo:

- **Desinstalar**: `npx github:lufermalgo/summan-ai-dtw-consultants --uninstall` (o usa los flags de entorno para limpiar una ruta específica).
- **Ver Catálogo**: Consulta el archivo [CATALOG.md](./CATALOG.md) para ver la lista técnica actualizada de habilidades.
- **Regenerar Catálogo (Devs)**: `npm run generate-catalog` (si tienes el repo clonado).

---

## 📚 Documentación y Metodología

Este proyecto se basa en una metodología rigurosa para la transformación digital industrial. Para profundizar en la arquitectura y los modelos de datos, consulta los siguientes documentos:

- **[Visión End-to-End](./docs/Summan%20AI%20Consulting%20Platform%20to%20Digital%20Twin%20%E2%80%20Visi%C3%B3n%20End-to-End.md)**: El pilar estratégico de la plataforma Summan AI.
- **Metodología de Scoring (Viability & Hotspots)**:
  - [Framework Reutilizable para Scoring de Hotspots](./docs/Framework%20Reutilizable%20para%20Scoring%20Anal%C3%ADtico%20de%20Hotspots%20Industriales.md)
  - [Guía de Scoring Analítico de Hotspots](./docs/Scoring%20Anal%C3%ADtico%20de%20Hotspots%20Industriales.md)

---

## 📖 Catálogo de Skills (Pipeline)

Una vez instalados, tendrás acceso a los siguientes agentes especializados:

| Skill | Nombre en el Sistema | Función Principal |
| :--- | :--- | :--- |
| **Orquestador** | `summan-ai-dtw-consultants` | Gestiona el flujo completo del assessment. |
| **Discovery** | `summan-ingesting-client-context` | Analiza documentos RAW del cliente. |
| **Mapper** | `summan-mapping-operational-process` | Identifica flujos de proceso y KPIs. |
| **Hotspots** | `summan-triangulating-operational-hotspots` | Detecta cuellos de botella y riesgos. |
| **Viability** | `summan-scoring-analytical-viability` | Evalúa si los datos permiten analítica avanzada. |
| **Instrumentation** | `summan-analyzing-ot-instrumentation` | Evalúa el estado de sensores y redes OT. |
| **Readiness** | `summan-assessing-digital-readiness` | Mide la madurez digital del personal y procesos. |
| **Reporting** | `summan-generating-assessment-report` | Genera el informe final ejecutivo. |

---

## 🎯 Instrucciones de Uso

Para iniciar un nuevo assessment, abre tu herramienta de IA favorita y utiliza el siguiente comando:

> "Activar skill `summan-ai-dtw-consultants` para iniciar el assessment de preparación digital para el cliente [Nombre del Cliente]. Utiliza los documentos proporcionados en la carpeta del proyecto."

El orquestador invocará automáticamente a los sub-agentes necesarios según la fase del proyecto.

## 📝 Notas de Salida

- Todos los reportes se guardan en la carpeta `.brain/` o equivalente de tu entorno.
- Las respuestas se generarán **exclusivamente en Español**.

---

© 2026 Summan AI - Journey to the Digital Twin.
