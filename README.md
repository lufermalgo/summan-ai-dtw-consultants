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

Para instalar estas habilidades en tu entorno de Antigravity, clona este repositorio en tu directorio de proyectos y registra la ruta de los skills:

```bash
# Clonar el repositorio
git clone [URL-DEL-REPO] /Users/lufermalgo/Proyectos/summan-ai-dtw-consultants

# El entorno detectará automáticamente los skills dentro de la carpeta /skills/
```

## Uso

Inicia el proceso invocando al orquestador principal:

> "Activar skill `summan-ai-dtw-consultants` para iniciar el assessment del cliente [Nombre del Cliente]"

## Estándares de Salida
Todos los agentes están configurados para generar artefactos en formato Markdown dentro del directorio `<appDataDir>/brain/<conversation-id>/` y responder exclusivamente en **Español**.
