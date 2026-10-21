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
