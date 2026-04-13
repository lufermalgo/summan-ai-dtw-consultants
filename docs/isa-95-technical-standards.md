# Guía Técnica: Estándares ISA-95 e ISA-88 para Consultoría Summan

Este documento proporciona el marco de referencia técnica para el análisis de sistemas OT/IT y la convergencia de datos en procesos industriales.

## 1. Modelo de Jerarquía Funcional (ISA-95)

La integración exitosa de un Gemelo Digital requiere claridad en el flujo de datos entre los niveles de la pirámide de automatización:

| Nivel | Descripción | Tecnologías Clave |
| :--- | :--- | :--- |
| **Nivel 4** | Gestión de Negocio (IT) | ERP (SAP, Oracle, MS Dynamics), BI, Analytics. |
| **Nivel 3** | Gestión de Operaciones (MOM) | MES, LIMS (Laboratorio), CMMS (Mantenimiento), WMS (Logística). |
| **Nivel 2** | Control Supervisorio (OT) | SCADA, HMI, Historians (Ignition, Canary, PI System). |
| **Nivel 1** | Control de Proceso | PLC, DCS, RTU. |
| **Nivel 0** | Producción Física | Sensores (Temp, Presión, Flujo), Actuadores. |

## 2. Sistemas MOM (Manufacturing Operations Management)

El análisis debe contemplar los sistemas específicos que gestionan la manufactura:

*   **LIMS (Laboratory Information Management System):** Gestión de calidad, trazabilidad de muestras y certificados de análisis.
*   **CMMS (Computerized Maintenance Management System):** Planes de mantenimiento, gestión de activos y registro de paros.
*   **WMS (Warehouse Management System):** Gestión de inventarios de materia prima y producto terminado en tiempo real.
*   **MES (Manufacturing Execution System):** Orquestación de órdenes de producción y captura de datos de piso en tiempo real.

## 3. Infraestructura y Redes (Conectividad)

Para habilitar un Gemelo Digital, la red debe garantizar:

*   **Capacidad de Adquisición:** Uso de protocolos modernos (OPC-UA, MQTT, SQL, API Rest).
*   **Segregación OT/IT:** Existencia de DMZ y firewalls industriales para ciberseguridad.
*   **Resiliencia:** Buffering (Store-and-Forward) para evitar pérdida de datos ante cortes de red.

## 4. Convergencia de Datos para el Gemelo Digital

El Gemelo Digital no es solo un modelo 3D; es la unión de:
1.  **Física (Niveles 0-1):** Qué está pasando.
2.  **Operaciones (Nivel 3):** Por qué está pasando (Contexto de Lote/Orden).
3.  **Negocio (Nivel 4):** Cuánto cuesta y qué impacto tiene.

---
*Referencia Estándar para Consultores de Summan AI.*
