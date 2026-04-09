# copilot-direct-fastlane

Moderní multi-page web o Olomouci s lokálními fotkami, přehlednými zdroji a deployem na GitHub Pages.

## Co projekt obsahuje

- `index.html`, `pamatky.html`, `zajimavosti.html`, `galerie.html`, `faq.html`, `sources.html`
- lokální fotky v `public/assets/images`
- sdílený styl v `src/styles.css`
- Pages workflow v `.github/workflows/pages.yml`

## Spuštění

1. Zkopíruj `.env.example` do `.env`
2. Dopln GitHub a Supabase údaje
3. Nainstaluj závislosti

```bash
npm install
```

4. Spusť web

```bash
npm run dev
```

## Check

```bash
npm run check
```

## Supabase read/write

1. Spusť SQL z `supabase/init.sql` v Supabase SQL editoru.
2. Pak spusť:

```bash
npm run db:init
```

Skript udělá insert a následný read test do tabulky `mvp_items`.

## GitHub Pages

```bash
npm run publish
```

Repo se buildí do `dist` a workflow nasazuje obsah na GitHub Pages.

Aktuální URL:

https://hphugosm.github.io/copilot-direct-fastlane/

## Obrázky

Použité fotografie jsou stažené z Wikimedia Commons a uložené lokálně v `public/assets/images`.

Zdrojový přehled je na stránce `sources.html`.
