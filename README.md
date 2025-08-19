# Fondo continuo con gradientes radiales (Landing Dental)

Sistema de fondo global para transiciones suaves entre secciones: un aura fija con gradientes radiales sutiles y ruido ligero. Los bordes de cada sección se difuminan con máscaras para evitar cortes visibles.

## Cómo usar (drop‑in)
1. Añade `GradientBackground` en el layout global inmediatamente dentro de `<body>`.
2. Reemplaza fondos sólidos de secciones por superficies transparentes o translúcidas.
3. Envuelve cada bloque con `<Section />` y define `fade` y la "entrega" de blob con `blobFrom`/`blobTo`.
4. Ajusta el mapa de continuidad para que la luz aparente viajar entre secciones.

### Ejemplo
```tsx
<Section id="hero" fade="both" blobFrom="LL" blobTo="TL">...</Section>
<Section id="servicios" fade="both" blobFrom="TL" blobTo="TR">...</Section>
<Section id="innovacion" fade="both" blobFrom="TR" blobTo="BR">...</Section>
<Section id="proceso" fade="both" blobFrom="BR" blobTo="LL">...</Section>
<Section id="testimonios" fade="both" blobFrom="LL" blobTo="TL">...</Section>
<Section id="contacto" fade="both" blobFrom="TL" blobTo="TR">...</Section>
```

## Utilidades Tailwind
- `.edge-fade-top` — oculta el borde superior con `mask-image`.
- `.edge-fade-bottom` — oculta el borde inferior.
- `.edge-fade-both` — oculta ambos bordes.

## Fallback solo CSS (sin React)
- El fondo se pinta con `body::before` y el ruido con `body::after`.
- Las secciones pueden declarar atributos:
```html
<section data-fade="both" data-blob-from="LL">...</section>
```

## Accesibilidad y rendimiento
- Menos de 100KB de CSS adicional; sin imágenes pesadas.
- `prefers-reduced-motion` desactiva parallax/animaciones.
- Capa de fondo fija evita CLS y FOUC (primer color de fondo se establece en el body).

## Qué cambió y por qué
- Fondo global fijo con gradientes: continuidad visual entre secciones.
- Máscaras de borde (mask-image): ocultan uniones/solapes.
- Tokens de paleta OKLCH/HSL: fácil ajuste claro/oscuro y consistencia.
- Componente `Section`: superficies translúcidas y handoff de blobs entre secciones.
- `GradientBackground` fijo: una sola capa, sin saltos al hacer scroll.
