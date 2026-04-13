# Summan AI Consulting Pipeline: Journey to the Digital Twin

Este repositorio contiene la suite completa de habilidades (skills) de IA diseñadas para automatizar y estandarizar el **Assessment de Preparación Industrial (Etapa 1 del Journey to the Digital Twin)**.

## Arquitectura de Skills

El ecosistema está compuesto por un orquestador principal y 7 sub-agentes especializados:

1.  **Orquestador**: `summan-ai-dtw-consultants`
2.  **Skill 1 (Discovery)**: `summan-ingesting-client-context`
3.  **Skill 2 (Mapping)**: `summan-mapping-operational-process`
4.  **Skill 3 (Triangulation)**: `summan-triangulating-operational-hotspots`
5.  **Skill 4 (Viability)**: `summan-scoring-analytical-viability`
6.  **Skill 5 (Instrumentation)**: `summan-analyzing-ot-instrumentation`
7.  **Skill 6 (Readiness)**: `summan-assessing-digital-readiness`
8.  **Skill 7 (Reporting)**: `summan-generating-assessment-report`

## Instalación (Estándar 2026)

### Opción 1: Vía NPX (Instalación Instantánea)
La "magia" de `npx` es que descarga temporalmente el repositorio y ejecuta el instalador sin que tú tengas que clonarlo manualmente. 

**Para instalar desde GitHub sin clonar:**
```bash
npx github:lufermalgo/summan-ai-dtw-consultants --antigravity
```

**Para instalar localmente (si ya lo descargaste):**
```bash
npx . --antigravity
```

> [!TIP]
> Para lograr que funcione simplemente como `npx summan-ai-dtw-consultants`, el paquete debe ser publicado en el registro de **npm**. Una vez publicado, estará disponible para todo el mundo sin prefijos de GitHub.

### Opción 2: Instalación Manual
Crea un enlace simbólico de los skills en tu directorio de configuración de Antigravity:

```bash
ln -s /Users/lufermalgo/Proyectos/summan-ai-dtw-consultants/skills/* ~/.gemini/antigravity/skills/
```

## Uso

Inicia el proceso invocando al orquestador principal:

> "Activar skill `summan-ai-dtw-consultants` para iniciar el assessment del cliente [Nombre del Cliente]"

## Estándares de Salida
Todos los agentes están configurados para generar artefactos en formato Markdown dentro del directorio `<appDataDir>/brain/<conversation-id>/` y responder exclusivamente en **Español**.
