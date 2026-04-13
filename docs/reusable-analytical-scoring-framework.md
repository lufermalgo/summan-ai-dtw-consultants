# **Framework Reutilizable para Scoring Analítico de Hotspots Industriales**

Este documento es una herramienta técnica estandarizada (Framework) diseñada para evaluar, calificar y priorizar "puntos de dolor" u oportunidades operativas (hotspots) en clientes industriales. Su objetivo es identificar y seleccionar de forma objetiva qué problemas de planta tienen mayor viabilidad y generarán el mayor retorno de inversión (ROI) al aplicarles soluciones de Analítica Avanzada, Machine Learning o Gemelos Digitales (Fases de Prototipado o MVP).  
---

## **1\. Matriz de Scoring Ponderado de Viabilidad Analítica**

*Basada en la técnica reconocida de Weighted Scoring Models, adaptada por Summan para evaluar la viabilidad analítica de hotspots industriales.*  
El sistema de scoring exige calificar cada hotspot levantado con el cliente en una escala de **1 a 5** a través de cinco dimensiones críticas:

| Dimensión de Análisis | Criterio de Evaluación (Preguntas Guía a contrastar) | Peso Oportuno |
| :---- | :---- | :---: |
| **A. Match con la Propuesta Analítica (Fit)** | ¿El problema se resuelve o mitiga al construir los **entregables analíticos específicos** definidos en el alcance del proyecto (ej. modelos de anomalía, gemelos térmicos, regresores operacionales)? | **30%** |
| **B. Impacto en Eficiencia y Rendimiento (OEE)** | ¿Resolver esta variable permite agilizar "cuellos de botella" productivos? ¿Aumenta la tasa de conversión (toneladas/h, unidades/día) reduciendo tiempos muertos o de ciclo en el equipo crítico? | **20%** |
| **C. Estabilidad de Calidad y Conformidad** | ¿El entendimiento de esta condición previene desviaciones y variabilidad en el producto final (ej. granulometría, tolerancias químicas)? ¿Reduce los niveles de merma, desperdicio o reproceso orgánico de la planta? | **20%** |
| **D. Mantenimiento y Protección del Activo** | ¿Es un comportamiento que al modelarse permite anticipar fallas graves, atascamientos paralizantes, o sirve como "estado previo a falla" detectado a tiempo por el modelo y comunicado a SAP PM/Maximo? | **15%** |
| **E. Madurez Analítica (Data Readiness)** | *Check de viabilidad:* ¿Están fluyendo hoy los datos necesarios (parámetros de PLCs, SCADAs, MES, ERPs, sensores) o se trata de una "sensación o arte" del operario sin trazabilidad digital continua? | **15%** |

---

## **2\. Escala Numérica de Calificación**

Para otorgar los puntos de forma homogénea dentro del equipo de consultoría técnica:

| Puntaje | Significado y Condición |
| :---: | :---- |
| **1 \- 2** | **Nulo o Bajo:** El problema tiene poca o nula repercusión en este criterio particular, o los datos son inexistentes / no están integrados, haciendo que el ejercicio analítico naufrague en viabilidad. |
| **3** | **Moderado / Condicionado:** Existe relación teórica, pero el impacto no es "Core" o requiere inversión alta en sensorización para completarlo. |
| **4 \- 5** | **Alta Prioridad / Crítico:** El impacto es enorme y verificable en los estados financieros; exprime todo el potencial de la capacidad instalada actual. Existe instrumentación para capturar el patrón de las variables de forma confiable. |

---

## **3\. Ejemplo Tabular (Dashboard de Resultados)**

Al llevar la matriz de N problemas tabulados en un Excel/Herramienta, el resultado permitirá construir una visual simple parecida a esta:

| ID | Hotspot o Incertidumbre Documentada | A (x30%) | B (x20%) | C (x20%) | D (x15%) | E (x15%) | Score Final |
| :---- | :---- | :---: | :---: | :---: | :---: | :---: | :---: |
| 01 | Subjetividad y ajuste empírico en equipo XYZ | 5 | 4 | 5 | 2 | 4 | **4.20** 🔥 |
| 02 | Mermas por transiciones demoradas entre líneas | 4 | 5 | 2 | 1 | 5 | **3.50** |
| 03 | Desgaste ciego de motor de extrusora E-22 | 5 | 2 | 1 | 5 | 2 | **3.15** |
| 04 | Limpieza visual no instrumentada | 1 | 2 | 3 | 1 | 1 | **1.60** ❄️ |

---

## **4\. Guía Táctica del Arquitecto Analítico**

Al enfrentarse con un cliente para definir los primeros pasos:

1. **Ancla el Foco Técnico:** Antes de "scrorear", define el nombre de tus bloques técnicos (ej. *Modelador de Regímenes, Detector de Desgaste Mecánico*). Esta es tu referencia constante.  
2. **Prioriza el Match Perfecto:** Un Hotspot puede dolerle muchísimo al cliente, pero si no se alinea al gemelo digital (Criterio A) ni tiene Data Readiness (Criterio E), debes sacarlo sin piedad del "Rayo de Acción" y dejarlo como "Necesidad Corporativa IT tradicional".  
3. **Mata la Subjetividad:** Los modelos matemáticos nacen justamente para romper las operaciones basadas en la intuición de operadores con 20 años de experiencia. Todo hotspot que suene a: "el operador le baja carga a ojimetro porque la máquina tiembla", **es oro** para la analítica (Rellena A, B y C rápidamente).  
4. **Construye el Pitch Exponencial:** Escoge estrictamente los de puntaje mayor a 4.0. Tu narrativa de venta debe sonar contundente: *"De sus 50 brechas operativas detectadas, hemos depurado científicamente las 3 que conectan instantáneamente las capas PLCs y la reducción radical en variabilidad operativa e inestabilidad a través de la IA descriptiva/predictiva."*

