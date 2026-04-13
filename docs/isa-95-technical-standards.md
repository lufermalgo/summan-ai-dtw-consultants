# 5. Norma ISA-95: Estándares Técnicos para la Convergencia IT/OT

El éxito de un Gemelo Digital depende de la capacidad de integrar datos de piso de planta (OT) con sistemas de negocio (IT). En **Summan AI**, utilizamos el estándar **ISA-95** como el lenguaje universal para estructurar esta integración.

---

## 1. El Modelo de Niveles (Pirámide de Automatización)

Para que nuestros agentes de IA puedan navegar la información, clasificamos los activos según su nivel funcional:

*   **Nivel 0-2 (Piso de Planta):** Sensores, PLCs, SCADA. Datos crudos de proceso (presión, temperatura, estado de motor).
*   **Nivel 3 (Operaciones - MES):** Gestión de la producción, calidad y mantenimiento. Contexto de "qué producto estamos haciendo".
*   **Nivel 4 (Negocio - ERP):** Planificación, compras, finanzas. El impacto económico de la producción.

---

## 2. Definición de Activos (Equipamiento)

Nuestra jerarquía documental sigue la estructura ISA-95:
1.  **Enterprise (Empresa)**
2.  **Site (Planta/Sede)**
3.  **Area (Línea de producción/Célula)**
4.  **Work Center (Máquina/Equipo)**
5.  **Work Unit (Componente crítico)**

---

## 3. Criterios de Preparación Digital (Readiness)

Al evaluar una planta bajo este estándar, los consultores deben validar:
*   **Capacidad de Adquisición:** Uso de protocolos modernos (OPC-UA, MQTT, SQL, API Rest).
*   **Segregación OT/IT:** Existencia de DMZ y firewalls industriales para ciberseguridad.
*   **Resiliencia:** Buffering (Store-and-Forward) para evitar pérdida de datos ante cortes de red.

---

## 4. Convergencia de Datos para el Gemelo Digital

El Gemelo Digital no es solo un modelo 3D; es la unión de:
1.  **Física (Niveles 0-1):** Qué está pasando.
2.  **Operaciones (Nivel 3):** Por qué está pasando (Contexto de Lote/Orden).
3.  **Negocio (Nivel 4):** Cuánto cuesta y qué impacto tiene.

---

## Navegación

[⬅️ Anterior: Industrial Hotspots Scoring](industrial-hotspots-scoring.md) | [🏠 Inicio](../README.md)

---

*Powered by Summan.*
