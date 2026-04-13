# Summan AI Consulting Platform to Digital Twin — Visión End-to-End

> *De la evidencia cruda al informe ejecutivo: 7 Skills especializados que gobiernan el ciclo completo del Assessment de Preparación Digital.*

---

## El Problema Actual

Hoy en Summan cada consultor usa Gemini o ChatGPT de forma independiente, sin gobierno, sin estándares y sin trazabilidad. Cada quien carga su propia evidencia, itera a su manera y llega a conclusiones que dependen de su experiencia individual. **No hay un sistema centralizado que garantice consistencia, profundidad ni reutilización del conocimiento generado.**

---

## La Visión

Construir un ecosistema de **7 Skills de IA especializados** que acompañen al consultor Summan en cada fase del Assessment, desde la primera entrevista hasta la entrega del informe ejecutivo. Cada Skill es un agente experto con instrucciones precisas, reutilizable para cualquier cliente y cualquier industria.

---

## Fuentes de Evidencia (Artefactos de Recolección Summan)

La plataforma se alimenta de la metodología y herramientas propietarias de Summan:

| # | Artefacto de Recolección | Tipo de Evidencia |
|:---:|:---|:---|
| 1 | **Entrevistas presenciales / virtuales** | Transcripciones, notas de campo, grabaciones |
| 2 | **Recorridos de planta** | Fotos, videos, observaciones técnicas in situ |
| 3 | **NexoAI** | Logs de voz guiada con análisis de sentimiento |
| 4 | **Subasta de Incertidumbres (Miro)** | Frases autocompletadas: *"No podemos decidir X porque no tenemos Y"* |
| 5 | **ChatAI (Agent Builder)** | Respuestas estructuradas del chatbot de diagnóstico |
| 6 | **Documentación entregada por el cliente** | PDFs, Excel, manuales técnicos, P&IDs, reportes de producción |

---

## Mapa del Pipeline Completo

```
┌────────────────────────────────────────────────────────────────────────┐
│                      EVIDENCIA CENTRALIZADA                            │
│  Entrevistas │ Recorridos │ NexoAI │ Miro │ ChatAI │ Docs del Cliente │
└────────┬───────────────────────────────────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────┐
│  SKILL 1: DISCOVERY CONSULTANT     │
│  "El Explorador"                    │
│  Analiza evidencia, identifica      │
│  vacíos, sugiere preguntas clave    │
└────────┬────────────────────────────┘
         │ (Evidencia enriquecida)
         ▼
┌─────────────────────────────────────┐
│  SKILL 2: PROCESS MAPPER            │
│  "El Cartógrafo"                    │
│  Construye el Mapa Operacional      │
│  bloque por bloque                  │
└────────┬────────────────────────────┘
         │ (Mapa Operacional validado)
         ├──────────────────────────────────────┐
         ▼                                      ▼
┌─────────────────────────────────────┐  ┌─────────────────────────────────┐
│  SKILL 3: HOTSPOT TRIANGULATOR      │  │  SKILL 5: OT/IT & SYSTEMS       │
│  "El Detective"                     │  │  ANALYST — "El Ingeniero"       │
│  Descubre incertidumbres por        │  │  ISA-95, MES, ERP, Networks,    │
│  cada bloque del mapa               │  │  observabilidad del proceso     │
└────────┬────────────────────────────┘  └────────┬────────────────────────┘
         │ (Hotspots estructurados)               │ (Mapa de Instrumentación)
         ▼                                        │
┌─────────────────────────────────────┐           │
│  SKILL 4: SCORING PONDERADO         │◄──────────┘
│  "El Juez"                          │  (Data Readiness validado)
│  Filtra, pondera y prioriza         │
│  → Norte Analítico                  │
└────────┬────────────────────────────┘
         │ (Casos de Uso priorizados)
         ▼
┌──────────────────────────────────────────────────────────┐
│  SKILL 6: DIGITAL READINESS        │  SKILL 7: REPORT   │
│  ASSESSOR                          │  GENERATOR          │
│  "El Evaluador"                    │  "El Arquitecto"    │
│  Califica 6 dimensiones            │  Consolida todo     │
│  → Nivel de Madurez                │  → Informe Final    │
└─────────────────────────────────────┴────────────────────┘
```

---

## Detalle de Cada Skill

---

### SKILL 1: Discovery Consultant — *"El Explorador"*

**Propósito:** Ser el primer punto de contacto inteligente del consultor. Centraliza toda la evidencia capturada y actúa como un colega experto que ayuda a identificar qué información falta y qué preguntas críticas deben hacerse.

**Cuándo se usa:**
- Al inicio del Assessment, al cargar las primeras evidencias de los 6 artefactos de recolección.
- Después de cada ronda de entrevistas, para identificar vacíos informativos.

**Capacidades:**
- Ingesta multi-formato desde los 6 artefactos de Summan (Entrevistas, Recorridos, NexoAI, Miro, ChatAI, Documentación del cliente).
- Análisis de completitud: *"Tienes info de Operaciones y Calidad, pero no has entrevistado a Mantenimiento. Esto es crítico porque..."*
- Generador de guías de entrevista por rol: sugiere preguntas específicas según el perfil del entrevistado (Jefe de Mantenimiento vs. Analista de Calidad vs. Gerente de Planta).
- Detección de contradicciones entre fuentes: *"Operaciones dice que la línea 3 produce 15 ton/h, pero el Excel muestra un promedio de 11.2 ton/h."*

**Entrada:** Archivos crudos desde los 6 artefactos de recolección.
**Salida:** Evidencia enriquecida + Lista de vacíos + Guía de preguntas pendientes.

---

### SKILL 2: Process Mapper — *"El Cartógrafo"*

**Propósito:** Construir el Mapa Operacional del proceso productivo del cliente, bloque por bloque, describiendo la realidad funcional del proceso (no los dolores).

**Cuándo se usa:**
- Una vez que el Skill 1 confirma suficiente evidencia para mapear.
- Se itera con el cliente hasta validación del mapa.

**Capacidades:**
- Extrae la secuencia lógica del proceso (ej: Recepción → Molienda → Dosificación → Mezclado → Peletizado → Enfriamiento → Empaque).
- Por cada bloque: nombre, descripción funcional, variables clave, equipos involucrados, responsables.
- Identifica interconexiones y dependencias entre bloques.
- Genera el mapa en formato estructurado para validación con el cliente.

**Entrada:** Evidencia enriquecida del Skill 1.
**Salida:** Mapa Operacional validado (documento bloque por bloque).

---

### SKILL 3: Hotspot Triangulator — *"El Detective"*

**Propósito:** Analizar cada bloque del Mapa Operacional en profundidad para descubrir incertidumbres, fricciones y dolores operativos ocultos. El skill más analítico del pipeline.

**Cuándo se usa:**
- Después de que el Mapa Operacional (Skill 2) está validado.
- Se alimenta de TODA la evidencia acumulada.

**Capacidades:**
- Recorre bloque por bloque cruzando con todas las fuentes de evidencia.
- Clasifica por naturaleza: Operativo, Calidad, Mantenimiento, Cultura, Logístico.
- Triangulación semántica: agrupa hotspots que apuntan a la misma causa raíz.
- Genera fichas estructuradas: descripción, frecuencia, impacto, bloques afectados, fuente.

**Entrada:** Mapa Operacional (Skill 2) + Evidencia completa (Skill 1).
**Salida:** Lista estructurada de Hotspots con fichas y agrupaciones semánticas.

---

### SKILL 4: Scoring Ponderado de Viabilidad Analítica — *"El Juez"*

**Propósito:** Aplicar un modelo de Scoring Ponderado de Viabilidad Analítica para determinar cuáles problemas tienen la mayor probabilidad de ser resueltos con analítica avanzada usando la infraestructura actual del cliente.

**Cuándo se usa:**
- Después de validar hotspots (Skill 3) y el mapa de instrumentación (Skill 5).
- Es el momento de la verdad: aquí se define el Norte Analítico.

**Capacidades:**
- Evalúa contra 5 dimensiones ponderadas: Capacidad de Infraestructura, Impacto en Rendimiento, Alineación Analítica, Protección de Activos, y Madurez de Datos.
- Integra el Mapa de Instrumentación (Skill 5) para validar la dimensión "D" (Datos) con rigor técnico real, no solo con percepción.
- Genera ranking ponderado de Casos de Uso Analíticos de Alta Viabilidad.
- Produce la visualización del embudo (Universo → Filtro → Norte Analítico).

**Entrada:** Hotspots (Skill 3) + Mapa de Instrumentación (Skill 5).
**Salida:** Ranking priorizado + Norte Analítico.

---

### SKILL 5: OT/IT & Systems Analyst — *"El Ingeniero"*

**Propósito:** Proveer la expertise especializada en la convergencia de Tecnologías de Operación (OT) y Tecnologías de Información (IT). Evalúa si el ecosistema industrial (desde sensores hasta el ERP) es verdaderamente **observable** y si la infraestructura de red permite la adquisición masiva de datos para el Digital Twin.

**Cuándo se usa:**
- En paralelo con el Skill 3, una vez que el Mapa Operacional (Skill 2) está validado.
- Su salida es el insumo técnico fundamental para el Skill 4 (sAhI) y el Skill 6 (Readiness).

**Capacidades:**
- **Modelo ISA-95 Extendido:** Mapea e interconecta todos los niveles del cliente (Nivel 0-2: Planta, Nivel 3: MES/MOM, Nivel 4: ERP/Analytics).
- **Inventario de Sistemas de Información:** Identifica y evalúa sistemas **MOM (LIMS para Calidad, CMMS para Mantenimiento, WMS para Logística)**, ERP (SAP, Oracle) y herramientas de Analítica/BI existentes que consumen o generan datos del proceso.
- **Evaluación de Infraestructura Digital/Redes:** Analiza la topología de red, anchos de banda, protocolos (OPC, MQTT, SQL), seguridad y capacidades reales de adquisición y transporte de datos.
- **Identificación de Instrumentación & Sensórica:** Por cada bloque del Mapa Operacional, valida la existencia y estado de sensores, transmisores y actuadores críticos.
- **Matriz de Disponibilidad de Datos:** Determina si variables clave están siendo medidas, transmitidas y almacenadas con la frecuencia y calidad necesaria para analítica avanzada.
- **Guía para el Consultor:** Proporciona un checklist técnico para auditar salas de control, centros de datos y documentación técnica (P&IDs, arquitecturas de red, diccionarios de datos).

**Entrada:** Mapa Operacional (Skill 2) + Evidencia técnica (P&IDs, arquitecturas de red, manuales de sistemas, fotos de tableros).
**Salida:** Matriz de Madurez de Sistemas OT/IT + Evaluación de Observabilidad y Redes por bloque + Matriz de Señales Disponibles vs. Requeridas.

---

### SKILL 6: Digital Readiness Assessor — *"El Evaluador"*

**Propósito:** Aplicar la metodología propietaria de Summan para evaluar el nivel de preparación digital del cliente a través de 6 dimensiones transversales con 4 indicadores cada una.

**Cuándo se usa:**
- Después del mapeo de instrumentación (Skill 5), ya que varias dimensiones requieren esa información técnica.

**Capacidades:**
- Evalúa las 6 dimensiones de madurez digital de Summan:
  1. Cultura e Innovación
  2. Instrumentación y Sensórica
  3. Producción de Datos
  4. Comunicación de Datos
  5. Integración de Sistemas
  6. Gestión y Gobierno del Dato
- Califica cada dimensión con sus 4 indicadores (escala Summan).
- Genera puntaje total y lo compara contra benchmark.
- Identifica fortalezas y brechas por dimensión.

**Entrada:** Evidencia (Skill 1) + Mapa Operacional (Skill 2) + Mapa de Instrumentación (Skill 5).
**Salida:** Scorecard de Madurez Digital + Nivel del cliente + Fortalezas y brechas.

---

### SKILL 7: Report Generator — *"El Arquitecto del Entregable"*

**Propósito:** Consolidar todos los artefactos generados por los Skills anteriores en un informe ejecutivo profesional y coherente.

**Cuándo se usa:**
- Al final del Assessment, cuando todos los insumos están validados.

**Capacidades:**
- Compila los capítulos del informe desde los Skills 1-6.
- Genera narrativa ejecutiva conectando hallazgos con propuesta de valor.
- Adapta tono y profundidad según audiencia (Técnico vs. Directivo).
- Produce documento exportable (Markdown, PDF, presentación).

**Entrada:** Artefactos de los Skills 1-6.
**Salida:** Informe Ejecutivo de Assessment completo.

---

## Principios de Diseño de la Plataforma

| Principio | Descripción |
|:---|:---|
| **Gobierno centralizado** | Toda la evidencia y artefactos viven en un solo repositorio gobernado por Summan — no en chats individuales de cada consultor. |
| **Memoria persistente** | Cada Skill mantiene un archivo de memoria con los hallazgos clave, decisiones y contexto acumulado. Esto combate la "amnesia agéntica": si un agente pierde contexto o se reinicia, puede reconstruir su estado desde la memoria compartida. Los puntos clave nunca se pierden entre sesiones. |
| **Agnóstica a la industria** | Los Skills funcionan igual para alimentos, minería, petroquímica o manufactura. |
| **Iterativa por naturaleza** | Cada Skill permite ciclos de refinamiento (cargar más evidencia, validar con el cliente, volver a procesar). |
| **Trazable** | Cada conclusión puede rastrearse hasta su fuente original (transcripción, Excel, tablero de Miro, entrevista específica). |
| **Modular** | Cada Skill es independiente. Se puede usar uno solo o la cadena completa. |
| **Basada en Skills estándar** | Cada Skill sigue el estándar de construcción de Skills definido por Anthropic/Google (SKILL.md + resources/ + scripts/). |

---

## Entregable Final al Cliente

| # | Sección del Informe | Fuente (Skill) |
|:---:|:---|:---|
| 1 | Mapa Operacional del Proceso | Skill 2 (Process Mapper) |
| 2 | Mapa de Instrumentación Actual | Skill 5 (OT & Instrumentation Analyst) |
| 3 | Levantamiento de Necesidades (Hotspots) | Skill 3 (Hotspot Triangulator) |
| 4 | Calificación Summan — Nivel de Preparación Digital | Skill 6 (Digital Readiness Assessor) |
| 5 | Roadmap: Priorización del Objetivo de Optimización | Skill 4 (sAhI — Scoring Ponderado) |

---

*Powered by Summan