# Olomouc — multi-page prezentační web

Moderní multi-page web o Olomouci s reálnými lokálními fotkami, FAQ a doloženými zdroji.

🔗 **Live:** https://hphugosm.github.io/copilot-direct-fastlane/

## Cíl

Vytvořit produkční ukázku AI-asistovaného web developmentu: z jednoho zadání vygenerovat kompletní vícestránkový web s konkrétním obsahem (žádné placeholder texty), lokálními fotkami s kredity a nasazením na GitHub Pages.

## Jak to funguje

- Stránky: `index` (hero, proč Olomouc, CTA) · `pamatky` · `zajimavosti` · `galerie` · `faq` · `sources`
- Fotky lokálně v `public/assets/images` s alt texty a kredity; přehled zdrojů na `sources.html`
- Vite build, deploy přes `.github/workflows/pages.yml`; volitelná Supabase vrstva (`supabase/init.sql`, `mvp_items`)
- Vygenerováno interní AI pipeline (plan → architect → build → review) a doladěno do produkce; dokumentační artefakty pipeline jsou v root/`docs`

## Použité nástroje

Vite · vanilla HTML/CSS/JS · Supabase (volitelně) · GitHub Actions/Pages

## Výsledky

- 6 obsahových stránek live na GitHub Pages
- Kompletní zdrojování obsahu i obrázků (sources.html)

## Lessons learned

- AI pipeline nechává v repu hodně dokumentačních artefaktů — příště je rovnou přesouvat do `docs/`.
- „Factual mode" s povinnými zdroji výrazně zvedá důvěryhodnost generovaného obsahu.
