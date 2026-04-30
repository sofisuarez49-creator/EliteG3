# EliteG2

## Comportamiento del visor de galería en móvil

- En móvil, cuando se abre el visor con autoplay, el reproductor intenta abrir en fullscreen nativo (API `requestFullscreen` y prefijos compatibles).
- Si fullscreen nativo falla o no está disponible, se aplica un fallback CSS de pantalla completa real (`position: fixed`, `inset: 0`, `width: 100vw`, `height: 100dvh`, `z-index` alto).
- Resultado esperado: **en móvil, autoplay abre en fullscreen completo; no en ventana emergente parcial**.
