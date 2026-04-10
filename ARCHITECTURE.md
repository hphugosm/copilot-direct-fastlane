# Architecture Draft

Goal: Fix only: remove sentence 'Hotovo jako upravena multipage sada...' from all root html pages, add real <img> tags with alt text using local files in public/assets/images, and mirror used photos into assets/images. Keep existing files and navigation.

## Direction
- Summary: Odstranit rušivou větu z root HTML stránek, doplnit reálné lokální obrázky s alt texty a zrcadlit použité fotky do assets/images bez zásahu do navigace.
- Decision: Upravit pouze root stránky: index.html, faq.html, galerie.html, pamatky.html.
- Decision: Použít lokální obrázky z public/assets/images přes skutečné <img> tagy.
- Decision: Zachovat existující soubory, strukturu i navigační odkazy beze změn.
- Decision: Zrcadlit použité fotografie do assets/images se stejnými názvy.
- Create: assets/images/horni-namesti.jpg
- Create: assets/images/katedrala-sv-vaclava.jpg
- Create: assets/images/olomouc-panorama.jpg
- Create: assets/images/orloj.jpg
- Create: assets/images/sloup-nejsvetejsi-trojice.jpg
- Modify: index.html
- Modify: faq.html
- Modify: galerie.html
- Modify: pamatky.html

## Builder file plan
- index.html (overwrite) - Update page with consistent navigation and iteration content
- sources.html (overwrite) - Update page with consistent navigation and iteration content
- faq.html (overwrite) - Update page with consistent navigation and iteration content
- project-update.html (overwrite) - Create new page in update-existing-project mode
- site-manifest.json (overwrite) - Site manifest for structured future iterations
