# Metodología de Scoring de Preparación Digital (Digital Readiness)

> *Instrumento técnico para cuantificar el cierre de brechas y la habilitación de Gemelos Digitales.*

---

## 1. Introducción al Scoring

El sistema de **Scoring de Preparación Digital** de Summan es una herramienta de evaluación objetiva que asigna un valor numérico a la madurez tecnológica y organizacional de una planta industrial. A diferencia de las encuestas de percepción, este scoring se basa en la **evidencia de datos y arquitectura**, permitiendo determinar la viabilidad real de implementar un **Mini Twin** o un **Gemelo Digital**.

## 2. Estructura de Calificación

La evaluación se compone de **6 dimensiones**, cada una con **4 indicadores** clave.

### 2.1. Escala de Evaluación (0-3)

Cada indicador se califica de forma binaria o graduada de la siguiente manera:

| Valor | Estado | Descripción |
| :---: | :--- | :--- |
| **0** | **Nulo** | No existe rastro de la capacidad; proceso 100% manual o ciego. |
| **1** | **Básico** | Existe la tecnología pero está aislada (silo), es inconsistente o manual en su mayoría. |
| **2** | **Intermedio** | Funciona correctamente para el día a día, pero tiene limitaciones de escala o integración. |
| **3** | **Avanzado** | Capacidad automatizada, centralizada y lista para alimentar modelos de IA. |

---

## 3. Matriz Detallada de Scoring

### Dimensión 1: Instrumentación y Sensores (Peso: 20%)

*Mide la capacidad de "ver" el proceso físico.*

| ID | Indicador | Criterio de Calificación (Ejemplo para 3 puntos) | Puntaje |
| :--- | :--- | :--- | :---: |
| 1.1 | **Cobertura Crítica** | 100% de las variables críticas (P, T, F) están instrumentadas. | 0 - 3 |
| 1.2 | **Relevancia Analítica** | Los sensores cubren tanto causas como efectos del problema. | 0 - 3 |
| 1.3 | **Calidad y Frecuencia** | Frecuencia de muestreo < 1 seg para fenómenos rápidos. | 0 - 3 |
| 1.4 | **Confiabilidad** | Plan de calibración vigente y rastro regular de mantenimiento. | 0 - 3 |

### Dimensión 2: Producción y Disponibilidad de Datos (Peso: 20%)

*Mide la persistencia y salud de la serie de tiempo.*

| ID | Indicador | Criterio de Calificación (Ejemplo para 3 puntos) | Puntaje |
| :--- | :--- | :--- | :---: |
| 2.1 | **Historización** | Centralizada en un Historian (PI System, Canary, InfluxDB). | 0 - 3 |
| 2.2 | **Latencia** | Datos disponibles en "Near Real-Time" (< 5 min de desfase). | 0 - 3 |
| 2.3 | **Continuidad** | < 1% de huecos (nulls) en las series de tiempo anuales. | 0 - 3 |
| 2.4 | **Buffer/Failover** | Capacidad de recuperación automática ante caídas de red. | 0 - 3 |

### Dimensión 3: Infraestructura de Comunicación (Peso: 15%)

*Mide la "tubería" por donde viaja el dato.*

| ID | Indicador | Criterio de Calificación (Ejemplo para 3 puntos) | Puntaje |
| :--- | :--- | :--- | :---: |
| 3.1 | **Ancho de Banda** | Red OT segmentada y optimizada para alto tráfico. | 0 - 3 |
| 3.2 | **Estabilidad** | Uptime de red industrial > 99.9%. | 0 - 3 |
| 3.3 | **Protocolos Modernos** | Uso nativo de OPC-UA, MQTT o API Rest. | 0 - 3 |
| 3.4 | **Ciberseguridad** | Capas de seguridad entre OT e IT (DMZ) definidas. | 0 - 3 |

### Dimensión 4: Integración y Consolidación (Peso: 15%)

*Mide la coherencia del ecosistema de software.*

| ID | Indicador | Criterio de Calificación (Ejemplo para 3 puntos) | Puntaje |
| :--- | :--- | :--- | :---: |
| 4.1 | **Convergencia ERP** | Cruce automático entre Lote (SAP) y Variables (OT). | 0 - 3 |
| 4.2 | **Estandarización (TAGS)** | Nomenclatura ISA-95 consistente en toda la planta. | 0 - 3 |
| 4.3 | **Trazabilidad** | Capacidad de reconstruir el "Genealogy" del producto. | 0 - 3 |
| 4.4 | **Capa Unificada** | Existencia de un Unified Namespace (UNS) o Data Broker. | 0 - 3 |

### Dimensión 5: Gestión Centralizada (Data Quality) (Peso: 15%)

*Mide la madurez del dato para ser consumido por la IA.*

| ID | Indicador | Criterio de Calificación (Ejemplo para 3 puntos) | Puntaje |
| :--- | :--- | :--- | :---: |
| 5.1 | **Acceso Analítico** | Datos en SQL o Cloud listo para querys de Python/IA. | 0 - 3 |
| 5.2 | **Limpieza Automática** | Tratamiento de outliers y ruidos antes de historizar. | 0 - 3 |
| 5.3 | **Capacidad de Visualización** | Dashboards operativos (PowerBI/Grafana) en uso real. | 0 - 3 |
| 5.4 | **Gobierno del Dato** | Diccionario de datos y dueños de proceso definidos. | 0 - 3 |

### Dimensión 6: Cultura y Capacidad de Cambio (Peso: 15%)

*Mide la capacidad humana para adoptar la tecnología.*

| ID | Indicador | Criterio de Calificación (Ejemplo para 3 puntos) | Puntaje |
| :--- | :--- | :--- | :---: |
| 6.1 | **Sponsoreo Alto Nivel** | Gerencia de Planta lidera el proyecto activamente. | 0 - 3 |
| 6.2 | **Apertura al Piloto** | Se han definido áreas "sandbox" para pruebas. | 0 - 3 |
| 6.3 | **Habilidades Digitales** | El equipo de planta entiende el valor de la analítica. | 0 - 3 |
| 6.4 | **Agilidad de Compra** | Presupuesto y procesos rápidos para servicios cloud/IA. | 0 - 3 |

---

## 4. Cálculo del Score Final

El puntaje total se obtiene sumando los puntos de los 24 indicadores (Máx 72). Sin embargo, para una visión estratégica, se promedia el cumplimiento por dimensión:

**Cálculo:** `(Puntaje Obtenido / Puntaje Máx Dimensión) * 100 = % de Preparación`

### Interpretación de Resultados

1. **< 30% (Inicial):** Prohibido iniciar Gemelo Digital. Foco en "Digital Basic Needs".
2. **31% - 50% (Básico):** Viable para pilotos de visualización simple. No predictivo.
3. **51% - 70% (Intermedio - GREEN LIGHT):** Viable para el primer Mini Twin.
4. **71% - 90% (Avanzado):** Preparada para despliegue masivo de IA.
5. **> 90% (Optimizado):** Planta líder de la industria (Lighthouse).

## 5. Guía de Justificación de Brechas (Benchmarks)

Para asegurar la repetibilidad del scoring, el consultor debe utilizar los siguientes ejemplos de referencia para justificar la puntuación (basado en casos tipo Solla):

### 5.1. Instrumentación (Dimensión 1)

* **Gap Nivel 1:** "El proceso depende de lecturas manuales en tablero local; no hay transmisión a sala de control."
* **Logro Nivel 3:** "Sensores con salida 4-20mA integrados a PLC, con redundancia en la zona de fuego o variables críticas de seguridad."

### 5.2. Continuidad e integridad (Dimensión 2)

* **Gap Nivel 0:** "La planta pierde datos cada vez que hay un micro-corte de energía o falla del servidor de IT."
* **Logro Nivel 3:** "Configuración Store-and-Forward activa; el PLC guarda datos localmente si la red cae y los sincroniza al volver."

### 5.3. Convergencia OT/IT (Dimensión 4)

* **Gap Nivel 1:** "Los operarios deben digitar manualmente en el ERP el consumo de energía que leen de un medidor físico."
* **Logro Nivel 3:** "El número de lote se inyecta desde el ERP al SCADA para contextualizar automáticamente las variables de proceso."

---

## 6. Recomendaciones Post-Evaluación

Basado en el score obtenido, Summan recomienda la siguiente hoja de ruta:

| Score (%) | Prioridad de Acción | Entregable Sugerido |
| :--- | :--- | :--- |
| **< 30%** | Estabilización de Capa Física | Plan de Instrumentación y Redes. |
| **31% - 50%** | Contextualización y Trazabilidad | Diseño de Arquitectura de Datos (MOM/MES). |
| **51% - 70%** | Piloto Gemelo Digital | **Mini Twin Operativo (Foco en 1 Hotspot).** |
| **> 71%** | Escalabilidad y Predicción | Full Digital Twin & Predictive Maintenance. |

---

*Powered by Summan.*
