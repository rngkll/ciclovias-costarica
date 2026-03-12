<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import L from 'leaflet'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => (route.params.locale as string) || 'es')
const reportUrl = computed(() => `/${locale.value}/reportar`)

const contributeSteps = computed(() => [
  {
    icon: '📍',
    title: t('map.contribute.steps.locate.title'),
    description: t('map.contribute.steps.locate.description'),
  },
  {
    icon: '📸',
    title: t('map.contribute.steps.capture.title'),
    description: t('map.contribute.steps.capture.description'),
  },
  {
    icon: '📝',
    title: t('map.contribute.steps.report.title'),
    description: t('map.contribute.steps.report.description'),
  },
])

const mapContainer = ref<HTMLDivElement | null>(null)
let map: L.Map | null = null

onMounted(() => {
  if (!mapContainer.value) return
  map = L.map(mapContainer.value, {
    center: [9.7489, -83.7534],
    zoom: 7,
    zoomControl: false,
    minZoom: 6,
    maxZoom: 17,
  })

  L.tileLayer('https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png', {
    attribution:
      '© <a href="https://www.cyclosm.org" target="_blank" rel="noreferrer">CyclOSM</a> · © <a href="https://www.openstreetmap.org" target="_blank" rel="noreferrer">OpenStreetMap</a>',
    maxZoom: 20,
  }).addTo(map)
})

onBeforeUnmount(() => {
  if (map) {
    map.remove()
    map = null
  }
})
</script>

<template>
  <div class="map-page">
    <section class="map-hero">
      <div class="map-hero__content">
        <p class="section-label">{{ t('nav.map') }}</p>
        <h1>{{ t('map.hero.title') }}</h1>
        <p class="subtitle">{{ t('map.hero.subtitle') }}</p>
        <p class="subtitle text-muted">{{ t('map.details.description') }}</p>
        <div class="hero-actions">
          <button class="hero-cta">{{ t('map.hero.cta') }}</button>
        </div>
      </div>
      <div class="map-hero__stats">
        <div class="stat-card">
          <p class="stat-number">1,240</p>
          <p class="stat-label">{{ t('map.stats.coverage') }}</p>
        </div>
        <div class="stat-card">
          <p class="stat-number">38</p>
          <p class="stat-label">{{ t('map.stats.municipalities') }}</p>
        </div>
        <div class="stat-card">
          <p class="stat-number">+22</p>
          <p class="stat-label">{{ t('map.stats.communities') }}</p>
        </div>
      </div>
    </section>

    <section class="map-panel">
      <div ref="mapContainer" class="map-canvas"></div>
      <aside class="map-sidebar">
        <p class="section-label">{{ t('map.details.title') }}</p>
        <p class="section-description">{{ t('map.details.description') }}</p>
        <div class="layer-list">
          <h3>{{ t('map.details.title') }}</h3>
          <ul>
            <li>
              <span class="badge existing"></span>
              {{ t('map.layers.existing') }}
            </li>
            <li>
              <span class="badge planned"></span>
              {{ t('map.layers.planned') }}
            </li>
            <li>
              <span class="badge community"></span>
              {{ t('map.layers.community') }}
            </li>
          </ul>
        </div>
        <div class="cta-card">
          <h4>{{ t('map.cta.title') }}</h4>
          <p>{{ t('map.cta.subtitle') }}</p>
          <button class="hero-cta ghost">{{ t('map.cta.button') }}</button>
        </div>
      </aside>
    </section>

    <section class="contribute-panel">
      <div class="contribute-panel__content">
        <p class="section-label">{{ t('map.contribute.label') }}</p>
        <h3>{{ t('map.contribute.heading') }}</h3>
        <p class="section-description">{{ t('map.contribute.subheading') }}</p>
        <div class="contribute-grid">
          <article v-for="step in contributeSteps" :key="step.title" class="contribute-step">
            <span class="contribute-icon" aria-hidden="true">{{ step.icon }}</span>
            <h4>{{ step.title }}</h4>
            <p>{{ step.description }}</p>
          </article>
        </div>
        <div class="hero-actions">
          <a :href="reportUrl" class="hero-cta">{{ t('map.contribute.cta') }}</a>
        </div>
        <p class="contribute-note">{{ t('map.contribute.note') }}</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.map-page {
  font-family: 'Space Grotesk', system-ui, sans-serif;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding: 2rem 1rem 3rem;
}

.map-hero {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  align-items: center;
  background: linear-gradient(135deg, #0f172a, #1d4ed8);
  color: white;
  padding: 2.5rem;
  border-radius: 1.5rem;
  box-shadow: 0 25px 50px rgba(15, 23, 42, 0.25);
}

.map-hero__content h1 {
  font-size: clamp(2.4rem, 3vw, 3.25rem);
  margin-bottom: 1rem;
}

.map-hero__content .subtitle {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.text-muted {
  color: rgba(255, 255, 255, 0.75);
}

.hero-actions {
  margin-top: 1.5rem;
}

.map-hero__stats {
  display: flex;
  gap: 1rem;
}

.stat-card {
  flex: 1;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  text-align: center;
}

.stat-number {
  font-size: 1.8rem;
  font-weight: 600;
}

.stat-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  margin-top: 0.2rem;
}

.map-panel {
  display: grid;
  grid-template-columns: minmax(0, 3fr) minmax(280px, 1fr);
  gap: 1.5rem;
}

.map-canvas {
  min-height: 500px;
  border-radius: 1.25rem;
  overflow: hidden;
  position: relative;
}

.map-sidebar {
  background: #fff;
  border-radius: 1.25rem;
  padding: 1.5rem;
  box-shadow: 0 15px 40px rgba(15, 23, 42, 0.08);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.layer-list ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.layer-list li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 600;
}

.badge {
  width: 16px;
  height: 16px;
  border-radius: 4px;
}

.badge.existing {
  background: #22c55e;
}

.badge.planned {
  background: #facc15;
}

.badge.community {
  background: #38bdf8;
}

.cta-card {
  padding: 1rem;
  border-radius: 1rem;
  border: 1px dashed #e2e8f0;
  background: #f8fafc;
}

.cta-card h4 {
  margin: 0;
  font-size: 1.2rem;
}

.section-label {
  text-transform: uppercase;
  letter-spacing: 0.4em;
  color: #0f172a;
  font-size: 0.65rem;
}

.section-description {
  margin: 0;
  color: #475569;
}

.hero-cta {
  padding: 0.85rem 1.6rem;
  border-radius: 999px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  background: #0f172a;
  color: white;
}

.hero-cta.ghost {
  background: transparent;
  border: 1px solid #0f172a;
  color: #0f172a;
}

.contribute-panel {
  background: #0f172a;
  color: white;
  border-radius: 1.25rem;
  padding: 2rem;
  box-shadow: 0 25px 50px rgba(15, 23, 42, 0.25);
}

.contribute-panel__content h3 {
  font-size: clamp(1.75rem, 2.5vw, 2.2rem);
  margin-top: 0.25rem;
}

.contribute-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
}

.contribute-step {
  background: rgba(15, 23, 42, 0.5);
  border-radius: 1rem;
  padding: 1rem;
  min-height: 140px;
}

.contribute-icon {
  font-size: 1.5rem;
}

.contribute-step h4 {
  margin-top: 0.5rem;
  margin-bottom: 0.4rem;
}

.contribute-note {
  margin-top: 1rem;
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.9rem;
}

.contribute-panel .hero-actions {
  margin-top: 1.5rem;
}

.contribute-panel .hero-cta {
  background: white;
  color: #0f172a;
}

@media (max-width: 900px) {
  .map-panel {
    grid-template-columns: 1fr;
  }

  .map-hero {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .hero-actions {
    flex-direction: column;
    align-items: flex-start;
  }

  .map-hero__stats {
    flex-direction: column;
  }
}
</style>
