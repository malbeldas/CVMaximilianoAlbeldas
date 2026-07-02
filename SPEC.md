# Spec — CV Web · Maximiliano Albeldas

> **Estado:** en desarrollo
> **Última actualización:** 2026-07-02
> **Autor:** Maximiliano Albeldas
> **Nivel de spec:** `mini` (sitio estático, 30–50h estimadas)

---

## 1. Qué es esto

Sitio web responsivo que funciona como CV interactivo y portfolio profesional de Maximiliano Albeldas. Diseño dark mode con glassmorphism y gradientes. Bilingüe ES/EN con toggle. Deployado en Vercel desde el repo `malbeldas/CVMaximilianoAlbeldas`. No tiene backend ni base de datos: todo el contenido es estático y vive en archivos de traducción.

---

## 2. Quién lo usa y para qué

| Actor | Para qué |
|---|---|
| Reclutador / hiring manager | Evalúa perfil, experiencia y stack técnico de Max |
| Potencial cliente / empresa | Conoce proyectos destacados y capacidades de liderazgo |
| Colega / contacto profesional | Accede a datos de contacto y LinkedIn |

---

## 3. Datos que persiste

Ninguno. El sitio es completamente estático. El contenido vive en archivos JSON/TS de traducciones (`es` / `en`). No hay base de datos, no hay servidor, no hay sesiones.

---

## 4. Endpoints / acciones del sistema

Ninguno. Next.js en modo static export (`output: 'export'`). No hay API routes. El toggle de idioma es client-side (estado local + `localStorage` para persistir preferencia).

---

## 5. Qué NO hace este sistema

- No tiene formulario de contacto (fase 2 si se necesita).
- No tiene blog ni sección de artículos.
- No tiene panel admin ni CMS.
- No autentica a nadie.
- No trackea analytics (fase 2 si se decide sumar Plausible/GA4).
- No tiene modo light (dark by default, sin toggle de tema).
- No expone endpoints consumibles por terceros.

---

## 6. Stack

- **Framework:** Next.js 15 (App Router, SSG nativo en Vercel — sin `output: 'export'`)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS v4
- **Animaciones:** Framer Motion
- **i18n:** solución propia liviana (JSON de traducciones + Context API), sin librería extra — el sitio es pequeño y sin routing por locale
- **Base de datos:** ninguna
- **Auth:** ninguna
- **Hosting:** Vercel (dominio `maximiliano-albeldas.vercel.app`)
- **Repo:** `github.com/malbeldas/CVMaximilianoAlbeldas`

---

## 7. Reglas hard del proyecto

1. **Dark mode permanente.** No hay toggle de tema. El fondo base es `#0a0a0f` o equivalente near-black con tinte azul/púrpura.
2. **Glassmorphism consistente.** Las cards y secciones usan `backdrop-blur` + fondo semitransparente. No mezclar con estilos flat sin glassmorphism.
3. **Bilingüe completo.** Todo texto visible al usuario existe en ambos locales (`es` y `en`). Ningún string hardcodeado en componentes.
4. **Foto real, no avatar ni placeholder en producción.** El slot de foto existe desde el inicio; se reemplaza con la imagen real antes del primer deploy público.
5. **Mobile-first.** Diseñado desde 375px hacia arriba. Ningún breakpoint agrega scroll horizontal.

---

## 8. Riesgos conocidos

- **i18n sin librería:** solución propia es más simple pero menos robusta ante plurales o interpolaciones complejas. Aceptable para la escala de este sitio.
- **SSG nativo en Vercel:** Next.js sin `output: 'export'` permite agregar funcionalidades server-side en el futuro (formulario de contacto, analytics SSR) sin cambiar la infra.
- **Foto de alta resolución:** si el usuario sube una imagen demasiado grande sin optimizar, el LCP puede sufrir. Mitigar con `next/image` y tamaño controlado.
- **Framer Motion bundle size:** en sitios estáticos simples puede ser overhead. Evaluar si las animaciones justifican el peso; alternativa ligera es CSS transitions puras.

---

## 9. Pendientes / preguntas abiertas

- Foto de perfil: el usuario confirmó que tiene una en alta resolución. Se agrega al repo como `public/photo.jpg` cuando esté disponible.
- Paleta de gradientes: se define durante la implementación (punto de partida: `#6366f1` → `#8b5cf6` → `#06b6d4`).

---

*Este documento es la fuente de verdad del proyecto. Si el código contradice este spec, gana el spec o se actualiza el spec. Cualquier cambio de alcance se actualiza acá antes de tocar código.*
