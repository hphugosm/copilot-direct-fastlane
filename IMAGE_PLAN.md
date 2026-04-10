# Image Pipeline Plan

Goal: Fix only: remove sentence 'Hotovo jako upravena multipage sada...' from all root html pages, add real <img> tags with alt text using local files in public/assets/images, and mirror used photos into assets/images. Keep existing files and navigation.
Design mode: standard

## Local Images
- 1. public/assets/images/horni-namesti.jpg
  - alt: Horni namesti
  - suggested section: hero
  - rationale: Vizualizuje obsah bez inventování nových assetů.
- 2. public/assets/images/katedrala-sv-vaclava.jpg
  - alt: Katedrala sv vaclava
  - suggested section: cards/content
  - rationale: Vizualizuje obsah bez inventování nových assetů.
- 3. public/assets/images/olomouc-panorama.jpg
  - alt: Olomouc panorama
  - suggested section: cards/content
  - rationale: Vizualizuje obsah bez inventování nových assetů.
- 4. public/assets/images/orloj.jpg
  - alt: Orloj
  - suggested section: gallery
  - rationale: Vizualizuje obsah bez inventování nových assetů.
- 5. public/assets/images/sloup-nejsvetejsi-trojice.jpg
  - alt: Sloup nejsvetejsi trojice
  - suggested section: gallery
  - rationale: Vizualizuje obsah bez inventování nových assetů.

## Suggested Images (from asset plan)
- Bez dalších návrhů.

## Guardrails
- Referencuj pouze existující lokální soubory.
- Každý vložený obrázek musí mít alt text.
- Pokud lokální obrázky nejsou, neodkazuj neexistující assets.
