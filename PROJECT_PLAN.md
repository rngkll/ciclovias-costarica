# Ciclovias Costa Rica - Project Plan

## Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | Vue 3 (Composition API) + TypeScript |
| **Build Tool** | Vite |
| **CSS** | Tailwind CSS |
| **Mapping** | Leaflet.js + CyclOSM tiles |
| **i18n** | vue-i18n (Spanish default, English, French) |
| **Hosting** | GitHub Pages (static `dist/` folder) |
| **CI/CD** | GitHub Actions (build + deploy to `gh-pages` branch) |
| **Data** | Static GeoJSON files, manually updated via a fetch script |

## Proposed File Structure

```
ciclovias-costarica/
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions: build & deploy to gh-pages
├── public/
│   └── data/
│       ├── ciclovias-gam.geojson   # Pre-fetched infrastructure data (GAM)
│       ├── ciclovias-cartago.geojson
│       └── advocacy-groups.json    # Structured data for the directory
├── scripts/
│   └── fetch-data.ts               # Manual script to pull data from SNIT/OSM
├── src/
│   ├── assets/                     # Images, icons, static assets
│   ├── components/
│   │   ├── map/
│   │   │   ├── MapView.vue         # Main Leaflet map wrapper
│   │   │   ├── MapControls.vue     # Zoom, layer toggles, legend
│   │   │   └── MapPopup.vue        # Popup for clicked features
│   │   ├── layout/
│   │   │   ├── AppHeader.vue       # Navigation bar + language switcher
│   │   │   ├── AppFooter.vue
│   │   │   └── AppLayout.vue       # Main layout shell
│   │   ├── advocacy/
│   │   │   ├── AdvocacyCard.vue    # Card for each organization
│   │   │   └── AdvocacyList.vue    # Grid/list of all organizations
│   │   └── common/
│   │       └── LanguageSwitcher.vue
│   ├── composables/
│   │   ├── use-map.ts              # Leaflet map state and helpers
│   │   └── use-geojson.ts          # GeoJSON loading and filtering
│   ├── i18n/
│   │   ├── index.ts                # vue-i18n setup
│   │   └── locales/
│   │       ├── es.json             # Spanish (default)
│   │       ├── en.json             # English
│   │       └── fr.json             # French
│   ├── router/
│   │   └── index.ts                # Vue Router with locale prefix
│   ├── types/
│   │   ├── bike-lane.ts            # BikeLane, Coordinates interfaces
│   │   └── advocacy.ts             # AdvocacyGroup interface
│   ├── utils/
│   │   ├── geo-utils.ts            # WGS84 validation, boundary checks
│   │   └── data-loader.ts          # Fetch static JSON/GeoJSON from public/
│   ├── views/
│   │   ├── MapPage.vue             # Interactive Map page
│   │   ├── AdvocacyPage.vue        # Advocacy Directory page
│   │   ├── AboutPage.vue           # About / Project Info + Ley 9660
│   │   ├── StatusPage.vue          # Infrastructure Status dashboard
│   │   └── ReportPage.vue          # Report an Issue (links to GitHub Issues)
│   ├── App.vue
│   └── main.ts
├── AGENTS.md
├── COSTA_RICA_INFRASTRUCTURE.md
├── PROJECT_PLAN.md
├── RESEARCH.md
├── index.html
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

## Implementation Phases

### Phase 1: Project Scaffolding

1. **Initialize Vue 3 + Vite + TypeScript** project with `npm create vue@latest`.
2. **Install dependencies:** `tailwindcss`, `vue-router`, `vue-i18n`, `leaflet`, `@types/leaflet`.
3. **Configure Tailwind CSS** with `tailwind.config.ts` and base styles.
4. **Configure vue-i18n** with `es.json`, `en.json`, `fr.json` locale files. Spanish is the default.
5. **Configure Vue Router** with locale-prefixed routes: `/es/mapa`, `/en/map`, `/fr/carte`.
6. **Implement `AppLayout.vue`** with header, footer, and `<router-view>`.
7. **Implement `LanguageSwitcher.vue`** in the header.

### Phase 2: GitHub Pages Deployment

8. **Configure `vite.config.ts`** with the correct `base` path for GitHub Pages (e.g., `/ciclovias-costarica/`).
9. **Create `.github/workflows/deploy.yml`** GitHub Action to:
   - Checkout code
   - Install dependencies
   - Run `npm run build`
   - Deploy `dist/` to the `gh-pages` branch

### Phase 3: Mapping

10. **Create `MapView.vue`** component wrapping Leaflet, initialized with CyclOSM tiles centered on Costa Rica (~9.9N, -84.1W).
11. **Create `use-map.ts`** composable to manage map state (zoom, center, layers).
12. **Create `use-geojson.ts`** composable to load and render GeoJSON layers from `public/data/`.
13. **Create `MapControls.vue`** with layer toggles (e.g., show/hide ciclovias, advocacy groups) and a legend.
14. **Create `MapPopup.vue`** to display feature metadata on click.
15. **Implement `geo-utils.ts`** with:
    - `isWithinCostaRica(lat, lng)` boundary check.
    - Coordinate formatting helpers per GeoJSON spec `[longitude, latitude]`.

### Phase 4: Static Data Pipeline

16. **Create `scripts/fetch-data.ts`** to:
    - Query the **Overpass API** for `highway=cycleway` within Costa Rica bounds.
    - Query **SNIT WFS** endpoints for official infrastructure layers.
    - Output optimized `.geojson` files to `public/data/`.
17. **Create `public/data/advocacy-groups.json`** structured from the research in `COSTA_RICA_INFRASTRUCTURE.md`.

### Phase 5: Views & Content

18. **`MapPage.vue`**: Full-screen interactive map with GeoJSON overlays and popups.
19. **`AdvocacyPage.vue`**: Renders `advocacy-groups.json` as a searchable card grid using `AdvocacyCard.vue`.
20. **`AboutPage.vue`**: Static content explaining the project, summarizing Ley 9660, and listing current challenges.
21. **`StatusPage.vue`**: A summary dashboard showing ciclovia coverage per region (GAM, Cartago, etc.) derived from the static GeoJSON data.
22. **`ReportPage.vue`**: A simple page that directs users to open a **GitHub Issue** using a pre-filled issue template URL (no backend needed).

### Phase 6: Testing & Polish

23. **Unit tests** for `geo-utils.ts` (boundary validation, coordinate formatting).
24. **Verify i18n** across all three languages for all views.
25. **Responsive testing** for mobile, tablet, and desktop.
26. **Accessibility audit** (keyboard navigation, ARIA labels on map controls).

## Report an Issue Strategy (No Backend)

Since the site is fully static, the "Report an Issue" feature will use **GitHub Issues** as its backend:
- The `ReportPage.vue` will contain a form-like UI that constructs a pre-filled GitHub Issue URL.
- Example: `https://github.com/rngkll/ciclovias-costarica/issues/new?title=...&body=...&labels=report`
- This keeps the project 100% static while still collecting community feedback.
