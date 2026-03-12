<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute, RouterLink } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => (route.params.locale as string) || 'es')
const mapUrl = computed(() => `/${locale.value}/mapa`)
const reportUrl = computed(() => `/${locale.value}/reportar`)

const metricCards = computed(() => [
  { value: '15+', label: t('advocacy.stats.groups') },
  { value: '8', label: t('advocacy.stats.regions') },
  { value: '120+', label: t('advocacy.stats.reports') },
])

const groupCards = computed(() => [
  {
    icon: '🚴‍♀️',
    title: t('advocacy.groups.urban.title'),
    location: t('advocacy.groups.urban.location'),
    description: t('advocacy.groups.urban.description'),
    link: 'https://www.reddeciudades.com',
    linkLabel: t('advocacy.groups.urban.linkLabel'),
  },
  {
    icon: '🌄',
    title: t('advocacy.groups.mountain.title'),
    location: t('advocacy.groups.mountain.location'),
    description: t('advocacy.groups.mountain.description'),
    link: 'https://www.cartagociclovias.org',
    linkLabel: t('advocacy.groups.mountain.linkLabel'),
  },
  {
    icon: '🌱',
    title: t('advocacy.groups.community.title'),
    location: t('advocacy.groups.community.location'),
    description: t('advocacy.groups.community.description'),
    link: 'https://www.movimientoverdecr.org',
    linkLabel: t('advocacy.groups.community.linkLabel'),
  },
])
</script>

<template>
  <div class="advocacy-page">
    <section class="advocacy-hero">
      <div class="hero-pill">{{ t('advocacy.hero.badge') }}</div>
      <h1>{{ t('advocacy.hero.title') }}</h1>
      <p class="hero-subtitle">{{ t('advocacy.hero.subtitle') }}</p>
      <div class="hero-actions">
        <RouterLink :to="mapUrl" class="hero-cta">
          {{ t('advocacy.hero.ctaMap') }}
        </RouterLink>
        <RouterLink :to="reportUrl" class="hero-cta secondary">
          {{ t('advocacy.hero.ctaReport') }}
        </RouterLink>
      </div>
      <div class="hero-stats">
        <article v-for="stat in metricCards" :key="stat.label">
          <p class="stat-number">{{ stat.value }}</p>
          <p class="stat-label">{{ stat.label }}</p>
        </article>
      </div>
    </section>

    <section class="groups-section">
      <div class="section-heading">
        <p class="section-label">{{ t('advocacy.groups.label') }}</p>
        <h2>{{ t('advocacy.groups.title') }}</h2>
        <p class="section-description">{{ t('advocacy.groups.description') }}</p>
      </div>
      <div class="groups-grid">
        <article v-for="group in groupCards" :key="group.title" class="group-card">
          <div class="group-card__header">
            <span class="group-icon" aria-hidden="true">{{ group.icon }}</span>
            <div>
              <p class="group-title">{{ group.title }}</p>
              <p class="group-location">{{ group.location }}</p>
            </div>
          </div>
          <p class="group-description">{{ group.description }}</p>
          <a :href="group.link" target="_blank" rel="noreferrer" class="group-link">
            {{ group.linkLabel }}
          </a>
        </article>
      </div>
    </section>

    <section class="advocacy-cta">
      <div class="cta-content">
        <h3>{{ t('advocacy.cta.title') }}</h3>
        <p>{{ t('advocacy.cta.description') }}</p>
        <div class="hero-actions">
          <RouterLink :to="reportUrl" class="hero-cta">
            {{ t('advocacy.cta.report') }}
          </RouterLink>
          <RouterLink :to="mapUrl" class="hero-cta secondary">
            {{ t('advocacy.cta.map') }}
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.advocacy-page {
  font-family: 'Space Grotesk', system-ui, sans-serif;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding: 2rem 1rem 3.5rem;
  background:
    radial-gradient(circle at top right, rgba(59, 130, 246, 0.15), transparent 45%),
    radial-gradient(circle at bottom left, rgba(14, 165, 233, 0.2), transparent 40%), #f8fafc;
}

.advocacy-hero {
  background: linear-gradient(135deg, #0f172a, #1d4ed8);
  color: white;
  padding: 3rem;
  border-radius: 1.5rem;
  box-shadow: 0 25px 60px rgba(15, 23, 42, 0.3);
  position: relative;
  overflow: hidden;
}

.advocacy-hero::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at top right, rgba(255, 255, 255, 0.35), transparent 40%);
  pointer-events: none;
}

.advocacy-hero > * {
  position: relative;
  z-index: 1;
}

.hero-pill {
  letter-spacing: 0.35em;
  font-size: 0.75rem;
  text-transform: uppercase;
  background: rgba(255, 255, 255, 0.2);
  display: inline-flex;
  padding: 0.4rem 1.25rem;
  border-radius: 999px;
  margin-bottom: 1rem;
}

.advocacy-hero h1 {
  font-size: clamp(2.5rem, 4vw, 3.6rem);
  margin-bottom: 1rem;
}

.hero-subtitle {
  font-size: 1.25rem;
  max-width: 640px;
  margin-bottom: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1.75rem;
}

.hero-cta {
  background: white;
  color: #0f172a;
  padding: 0.9rem 1.7rem;
  border-radius: 999px;
  font-weight: 600;
  text-decoration: none;
}

.hero-cta.secondary {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.65);
  color: white;
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1rem;
}

.stat-number {
  font-size: 1.75rem;
  font-weight: 700;
}

.stat-label {
  text-transform: uppercase;
  letter-spacing: 0.25em;
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.75);
}

.groups-section {
  background: white;
  border-radius: 1.5rem;
  box-shadow: 0 20px 50px rgba(15, 23, 42, 0.12);
  padding: 2.5rem;
}

.section-heading {
  max-width: 760px;
  margin-bottom: 1.75rem;
}

.section-label {
  text-transform: uppercase;
  letter-spacing: 0.4em;
  font-size: 0.7rem;
  color: #0f172a;
}

.section-heading h2 {
  font-size: clamp(2rem, 3vw, 2.7rem);
  margin: 0.5rem 0;
}

.section-description {
  color: #475569;
  line-height: 1.6;
}

.groups-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.25rem;
}

.group-card {
  border: 1px solid #e5e7eb;
  border-radius: 1.25rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}

.group-card__header {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.group-icon {
  font-size: 2rem;
}

.group-title {
  font-weight: 700;
  margin-bottom: 0.15rem;
}

.group-location {
  margin: 0;
  color: #64748b;
  font-size: 0.9rem;
}

.group-description {
  color: #475569;
  line-height: 1.5;
  flex: 1;
}

.group-link {
  font-weight: 600;
  color: #1d4ed8;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s;
}

.group-link:hover {
  border-color: #1d4ed8;
}

.advocacy-cta {
  background: linear-gradient(135deg, #fbbf24, #fb923c);
  border-radius: 1.5rem;
  padding: 2.5rem;
  color: #0f172a;
  box-shadow: 0 20px 40px rgba(251, 146, 60, 0.35);
}

.cta-content h3 {
  font-size: clamp(2rem, 3vw, 2.6rem);
  margin-bottom: 0.75rem;
}

.cta-content p {
  max-width: 640px;
  color: rgba(15, 23, 42, 0.8);
}

.advocacy-cta .hero-actions {
  margin-top: 1.5rem;
}

@media (max-width: 640px) {
  .advocacy-hero {
    padding: 2rem;
  }

  .groups-section {
    padding: 2rem;
  }
}
</style>
