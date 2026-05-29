# EliteG2

## Datos locales en JSON

La aplicación ya no depende de Firebase para leer o escribir personajes, fotos, categorías ni puntuaciones.

- `data.json` es la semilla inicial de la base local. Ahí viven los nodos `perfiles`, `categorias`, `anonimo.galeria`, `arenaBattleState` y `arenaGlobalState`.
- Al abrir la app, primero se intenta cargar una copia editable desde `localStorage` (`eliteg3:json-db:v1`). Si no existe, se carga `data.json`.
- Las ediciones hechas desde la interfaz se guardan en `localStorage` para que el navegador pueda persistir cambios sin servidor.
- Si querés volver a leer la semilla de `data.json`, podés ejecutar en la consola del navegador: `window.localJsonDb.resetLocalCache()` y recargar.
- Para migrar datos existentes de Firebase, exportá el Realtime Database como JSON y pegá su contenido respetando la estructura de `data.json`.

## Comportamiento del visor de galería en móvil

- En móvil, cuando se abre el visor con autoplay, el reproductor intenta abrir en fullscreen nativo (API `requestFullscreen` y prefijos compatibles).
- Si fullscreen nativo falla o no está disponible, se aplica un fallback CSS de pantalla completa real (`position: fixed`, `inset: 0`, `width: 100vw`, `height: 100dvh`, `z-index` alto).
- Resultado esperado: **en móvil, autoplay abre en fullscreen completo; no en ventana emergente parcial**.
