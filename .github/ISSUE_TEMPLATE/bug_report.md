name: Bug Report
description: Reporta un error para ayudarnos a mejorar.
labels: [bug]
body:
  - type: markdown
    attributes:
      value: |
        Gracias por tomarte el tiempo para reportar un error.
  - type: textarea
    id: reproduction
    attributes:
      label: Pasos para reproducir
      description: ¿Cómo encontraste el error?
      placeholder: |
        1. Ejecutar 'npm start'
        2. Hacer click en...
    validations:
      required: true
  - type: textarea
    id: expected
    attributes:
      label: Comportamiento esperado
      description: ¿Qué debería haber pasado?
  - type: textarea
    id: actual
    attributes:
      label: Comportamiento actual
      description: ¿Qué pasó realmente?
  - type: textarea
    id: context
    attributes:
      label: Contexto adicional
      description: Cualquier otra información útil (versión de node, SO, logs).
