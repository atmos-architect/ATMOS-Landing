# ATMOS Landing

Landing oficial de `app-atmos.com`. Estática: HTML + Tailwind por CDN y un
motor de idiomas propio en `i18n.js`.

## Estructura

| Archivo | Qué es |
|---|---|
| `index.html` | La landing. Todo el texto va con `data-i18n`; no hay copy incrustado. |
| `i18n.js` | Diccionario de los 9 idiomas, detección inicial y `dir="rtl"`. |
| `faq.html`, `galeria.html`, `privacidad.html`, `terminos.html`, `tutoriales.html` | Páginas secundarias, por ahora solo en español. |

## Idiomas

`en` · `es` · `de` · `fr` · `it` · `pt-BR` · `ja` · `zh-Hant` · `ar`

Orden de resolución del idioma:

1. `?lang=xx` en la URL (enlaces compartibles).
2. `localStorage["atmos-lang"]`.
3. `navigator.language`.
4. Inglés.

En árabe se aplica `dir="rtl"` al documento. La marca va con `direction: ltr`
y `unicode-bidi: isolate` para que no se invierta.

## Despliegue

Netlify sirve `app-atmos.com`. El sitio es estático puro: no hay build.

## Pendiente

- Las páginas secundarias (FAQ, galería, legal) siguen solo en español.
- El mockup del hero es una captura del render, no del teléfono: falta uno
  actualizado con la app 2.0.

## Imágenes

Los huecos están maquetados y apuntan a `assets/` con esta nomenclatura fija:

| Archivo | Dónde | Ratio |
|---|---|---|
| `hero-showcase.webp` | Hero | 16:9 |
| `workspace-floorplans.jpg` | Tarjeta Plantas | 16:10 |
| `workspace-masterplans.jpg` | Tarjeta Masterplans | 16:10 |
| `workspace-perspectives.jpg` | Tarjeta Perspectivas | 16:10 |
| `tech-photoreal.jpg` | Técnica fotorrealista | 1:1 |
| `tech-clay.jpg` | Técnica Clay | 1:1 |
| `tech-watercolor.jpg` | Técnica acuarela | 1:1 |
| `tech-sketch.jpg` | Técnica tinta | 1:1 |
| `gallery-1.jpg` … `gallery-4.jpg` | Galería | 4:3 |

Sustituir el archivo basta: el hueco tiene el ratio fijado con `aspect-*`, así
que una imagen de otra proporción se recorta con `object-fit: cover` y no
descoloca la página. Si el archivo falta, `onerror` retira la etiqueta y queda
el fondo del hueco, sin icono roto.
