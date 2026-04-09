# copilot-direct-fastlane

Minimalni MVP vedle orchestratoru: single-page web + jednoduche Supabase read/write + GitHub Pages publish.

## 1) Setup

1. Zkopiruj `.env.example` do `.env`
2. Vypln hodnoty pro GitHub a Supabase
3. Nainstaluj zavislosti

```bash
npm install
```

## 2) Local run

```bash
npm run dev
```

## 3) Check

```bash
npm run check
```

## 4) Supabase init + read/write test

1. Spust SQL v `supabase/init.sql` v Supabase SQL editoru.
2. Pak spust:

```bash
npm run db:init
```

Skript udela insert + read test do tabulky `mvp_items`.

## 5) Git push

```bash
npm run git:push -- "feat: first mvp"
```

## 6) Publish GitHub Pages

```bash
npm run publish
```

Workflow v `.github/workflows/pages.yml` nasadi obsah `dist` na GitHub Pages.
