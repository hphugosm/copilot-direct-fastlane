# Implementation TODO

Goal: Fix only: remove sentence 'Hotovo jako upravena multipage sada...' from all root html pages, add real <img> tags with alt text using local files in public/assets/images, and mirror used photos into assets/images. Keep existing files and navigation.

## Next Actions
- [ ] Odstranit text „Hotovo jako upravena multipage sada...“ ze všech root HTML souborů.
- [ ] Doplnit na stránky reálné obrázky z public/assets/images.
- [ ] Použít smysluplné alt texty a jednoduché figure/caption bloky.
- [ ] Zkopírovat použité obrázky do assets/images.
- [ ] Zkontrolovat, že navigace zůstala beze změn.
- [ ] Vytvorit index.html, sources.html, faq.html a assets/styles.css
- [ ] Rozšířit existující projekt o novou stránku a sjednotit navigaci
- [ ] Write index.html
- [ ] Write sources.html
- [ ] Write faq.html
- [ ] Write project-update.html
- [ ] Write site-manifest.json
- [ ] Opravit HTML jen v požadovaných čtyřech root stránkách.
- [ ] Odstranit doslovný target text ze všech výskytů včetně bloků s citátem.
- [ ] Doplnit <img> s alt na skutečné lokální fotky a otestovat zobrazení.
- [ ] Zkopírovat použité JPEGy do assets/images a zkontrolovat jejich existenci.
- [ ] Spustit grep na cílovou větu a ověřit nulový výskyt ve všech root HTML.
- [ ] Potvrdit, že navigace zůstala identická.

## Risks To Watch
- Report ukazuje, že cílová věta je stále přítomná v quote blocích, takže fix je zatím nekompletní.
- V write reportu jsou upravené i soubory mimo scope zadání (sources.html, project-update.html), což může rozbít očekávanou strukturu webu.
- V reportu chybí galerie.html a pamatky.html, takže skutečně požadované root stránky nebyly dotčeny.
- Binární kopie obrázků mohou být špatně umístěné, pokud se použije jiná relativní cesta než assets/images.
- Přepsání HTML může nechtěně změnit navigaci nebo CSS hooky, pokud se sáhne do příliš velké části šablony.
