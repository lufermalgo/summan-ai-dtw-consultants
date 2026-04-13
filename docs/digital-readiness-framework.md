# 3. Digital Readiness Framework

> *Criterios técnicos para la habilitación de Mini Twins y Gemelos Digitales Industriales.*

---

## 1. Matriz de Evaluación de Preparación Digital

Este framework evalúa **6 dimensiones críticas** del ecosistema industrial. Cada dimensión se califica mediante **4 indicadores específicos**, utilizando una escala de **0 a 3 puntos**, para un puntaje máximo total de **72 puntos**.

| Dimensión | Enfoque Estratégico | Peso Sugerido |
| :--- | :--- | :---: |
| **1. Instrumentación y Sensores** | Capacidad de observación física del proceso. | 20% |
| **2. Producción y Disponibilidad** | Continuidad e integridad del flujo de datos. | 20% |
| **3. Infraestructura y Redes** | Capacidad y resiliencia del transporte de datos. | 15% |
| **4. Integración y Consolidación** | Coherencia entre fuentes OT (Control) e IT (Negocio). | 15% |
| **5. Gestión Centralizada (Data Quality)** | Calidad, gobierno y accesibilidad analítica. | 15% |
| **6. Cultura y Capacidad de Cambio** | Patrocinio, colaboración y disposición al piloto. | 15% |

---

## 2. Escala de Calificación por Indicador

Para garantizar la objetividad del consultor, se utiliza la siguiente leyenda de puntuación:

| Puntaje | Nivel de Madurez | Descripción Técnica |
| :---: | :--- | :--- |
| **0** | **Inexistente** | No se cuenta con la capacidad o no hay evidencia de su existencia. |
| **1** | **Básico / Limitado** | Capacidades mínimas, aisladas o manuales. No soportan por sí solas un Mini Twin. |
| **2** | **Moderado / Parcial** | Implementación funcional pero con restricciones de cobertura, latencia o calidad. |
| **3** | **Avanzado / Completo** | Capacidades sólidas, confiables y automatizadas; listas para escalar. |

---

## 3. Niveles de Preparación (Score Consolidado)

El puntaje total (0-72) clasifica a la planta en uno de los siguientes estadios:

| Puntaje | Nivel | Estado Analítico |
| :---: | :--- | :--- |
| **0 - 14** | **Nivel 1: Inicial** | Riesgo de ejecución muy alto. Requiere fase previa de habilitación digital profunda. |
| **15 - 28** | **Nivel 2: Básico** | Posibles oportunidades de Mini Twin, pero con alta fricción y silos de datos. |
| **29 - 43** | **Nivel 3: Intermedio** | **Punto de Entrada.** Viable para primer Mini Twin con alcance controlado. |
| **44 - 57** | **Nivel 4: Avanzado** | Preparada para escalamiento multivariable y despliegue rápido de Gemelos Digitales. |
| **58 - 72** | **Nivel 5: Optimizado** | Planta de Clase Mundial. Capacidad de simulación, predicción y autogestión de datos. |

---

## 4. Diccionario de Indicadores por Dimensión

### 4.1. Instrumentación y Sensores

1. **Cobertura Crítica:** ¿Están medidos los puntos clave (Flujo, Presión, Temperatura) del proceso evaluado?
2. **Relevancia Analítica:** ¿Las variables medidas permiten explicar las desviaciones de calidad o eficiencia?
3. **Calidad de Medición:** Precisión, resolución y frecuencia de captura acorde al fenómeno físico.
4. **Mantenibilidad:** Estado de calibración y confiabilidad de la sensórica en el tiempo.

### 4.2. Producción y Disponibilidad de Datos

1. **Continuidad de Captura:** Historización ininterrumpida de señales (historian centralizado).
2. **Oportunidad de Acceso:** Disponibilidad del dato en tiempo útil (latencia) para la toma de decisiones.
3. **Integridad Temporal:** Ausencia de huecos de información en las series de tiempo.
4. **Recuperabilidad:** Resiliencia del sistema ante fallas de transmisión (buffering/stor-and-forward).

### 4.3. Infraestructura de Comunicación

1. **Capacidad de Carga:** Ancho de banda suficiente para el volumen de datos industriales.
2. **Desempeño y Estabilidad:** Estabilidad de la red industrial (OT) y empresarial (IT).
3. **Resiliencia de Red:** Existencia de redundancia o failover en nodos críticos.
4. **Interoperabilidad:** Disponibilidad de drivers y protocolos modernos (OPC-UA, MQTT, SQL).

### 4.4. Integración y Consolidación de Datos

1. **Convergencia OT/IT:** Capacidad de cruzar datos de PLC/SCADA con ERP (SAP/Microsoft).
2. **Estandardización:** Uso de nombres de tags y unidades de medida consistentes en toda la planta.
3. **Trazabilidad Lineal:** Capacidad de relacionar consumos, lotes y variables en un solo flujo.
4. **Capa Unificada:** Existencia de una plataforma o broker de datos consolidado.

### 4.5. Gestión Centralizada de Datos (Data Quality)

1. **Repositorio Analítico:** Existencia de SQL, Data Lake o Cloud Bridge para explotación.
2. **Validación y Limpieza:** Procesos automáticos para detectar datos atípicos o erróneos.
3. **Explotación Analítica:** Capacidad instalada de BI o herramientas de análisis avanzado.
4. **Gobierno del Dato:** Reglas claras sobre quién es el dueño del dato y cómo se accede.

### 4.6. Cultura de Innovación y Cambio

1. **Patrocinio Ejecutivo:** Sponsoreo directo de la alta gerencia con presupuesto asignado.
2. **Colaboración Interáreas:** Apertura de mantenimiento, producción y TI para trabajar juntos.
3. **Agilidad en Pilotos:** Disposición para realizar pruebas controladas en equipos críticos.
4. **Gestión de Terceros:** Capacidad de trabajar con partners especializados e integradores.

---

## 5. Casos de Referencia (Benchmarks Industriales)

Para facilitar la evaluación, se presentan ejemplos basados en casos reales de la industria (ej. Evaluación Planta Solla):

### Brechas Comunes (Gap Analysis)

* **Instrumentación:** "Faltan variables críticas como flujo másico o calidad de vapor. El monitoreo de condición mecánica sigue siendo manual o tercerizado." (Puntaje Sugerido: 1)
* **Continuidad:** "Se detectan huecos de contexto; el paro se registra, pero el motivo sigue siendo ingresado manualmente por el operador." (Puntaje Sugerido: 2)
* **Resiliencia:** "No hay evidencia de redundancia o failover en nodos críticos de red industrial." (Puntaje Sugerido: 0)
* **Cultura:** "Alta apertura y capacidad real para trabajar con terceros especializados e integradores." (Puntaje Sugerido: 3)

---

## Navegación

[⬅️ Anterior: Journey to Digital Twin](journey-to-digital-twin.md) | [🏠 Inicio](../README.md) | [Siguiente: Industrial Hotspots Scoring ➡️](industrial-hotspots-scoring.md)

---

*Powered by Summan.*
