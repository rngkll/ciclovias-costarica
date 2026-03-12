<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute, RouterLink } from 'vue-router'

const { t } = useI18n()
const route = useRoute()
const locale = (route.params.locale as string) || 'es'

const mapUrl = computed(() => `/${locale}/mapa`)
const reportUrl = computed(() => `/${locale}/reportar`)
const advocacyUrl = computed(() => `/${locale}/advocacy`)
</script>

<template>
  <div class="landing-page">
    <section class="hero">
      <div class="container">
        <p class="hero-pill">{{ t('home.hero.highlight') }}</p>
        <h1>{{ t('home.hero.title') }}</h1>
        <p class="hero-subtitle">{{ t('home.hero.subtitle') }}</p>
        <div class="hero-actions">
          <RouterLink :to="mapUrl" class="hero-cta">
            {{ t('home.hero.cta.map') }}
          </RouterLink>
          <RouterLink :to="reportUrl" class="hero-cta ghost">
            {{ t('home.hero.cta.report') }}
          </RouterLink>
        </div>
        <div class="hero-stats">
          <div>
            <p class="stat-number">9660</p>
            <p class="stat-label">{{ t('home.stats.law.title') }}</p>
          </div>
          <div>
            <p class="stat-number">1ro</p>
            <p class="stat-label">{{ t('home.stats.cartago.title') }}</p>
          </div>
          <div>
            <p class="stat-number">+15</p>
            <p class="stat-label">{{ t('home.stats.groups.title') }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="landing-stats">
      <div class="container">
        <div class="stats-grid">
          <article class="stat-card">
            <p class="stat-number">9660</p>
            <p class="stat-label">{{ t('home.stats.law.title') }}</p>
            <p class="stat-description">{{ t('home.stats.law.description') }}</p>
          </article>
          <article class="stat-card">
            <p class="stat-number">1ro</p>
            <p class="stat-label">{{ t('home.stats.cartago.title') }}</p>
            <p class="stat-description">{{ t('home.stats.cartago.description') }}</p>
          </article>
          <RouterLink :to="advocacyUrl" class="stat-card stat-card--link">
            <p class="stat-number">+15</p>
            <p class="stat-label">{{ t('home.stats.groups.title') }}</p>
            <p class="stat-description">{{ t('home.stats.groups.description') }}</p>
          </RouterLink>
        </div>
      </div>
    </section>

    <section class="mission">
      <div class="container">
        <p class="section-label">{{ t('home.mission.label') }}</p>
        <h2>{{ t('home.mission.title') }}</h2>
        <p class="section-description">{{ t('home.mission.description') }}</p>
      </div>
    </section>

    <section class="cta">
      <div class="container">
        <h2>{{ t('home.cta.title') }}</h2>
        <p class="section-description">{{ t('home.cta.subtitle') }}</p>
        <div class="hero-actions">
          <RouterLink :to="reportUrl" class="hero-cta">
            {{ t('home.hero.cta.report') }}
          </RouterLink>
          <RouterLink :to="mapUrl" class="hero-cta ghost">
            {{ t('home.hero.cta.map') }}
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.landing-page {
  font-family: 'Space Grotesk', system-ui, sans-serif;
}

.hero,
.mission,
.cta {
  padding: 5rem 0;
}

.hero {
  background: linear-gradient(135deg, #0f172a, #1e3a8a);
  color: white;
}

.container {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 1rem;
}

.hero-pill {
  display: inline-flex;
  padding: 0.3rem 1rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.15);
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 0.75rem;
  margin-bottom: 1rem;
}

.hero h1 {
  font-size: clamp(2.5rem, 4vw, 3.6rem);
  margin-bottom: 1rem;
}

.hero-subtitle {
  max-width: 600px;
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.9);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.hero-cta {
  padding: 0.85rem 1.8rem;
  border-radius: 999px;
  border: none;
  font-weight: 600;
  background: white;
  color: #0f172a;
  text-decoration: none;
}

.hero-cta.ghost {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.5);
  color: white;
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 2rem;
}

.stat-number {
  font-size: 1.75rem;
  font-weight: 700;
}

.stat-label {
  text-transform: uppercase;
  letter-spacing: 0.3em;
  font-size: 0.7rem;
  margin-top: 0.35rem;
  color: rgba(255, 255, 255, 0.7);
}

.landing-stats {
  padding: 2rem 0;
  background: #f8fafc;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.stat-card {
  background: white;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.08);
}

.stat-card--link {
  cursor: pointer;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.stat-card--link:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 35px rgba(15, 23, 42, 0.15);
}

.stat-description {
  margin-top: 0.5rem;
  color: #475569;
  line-height: 1.5;
}

.mission {
  background: #f1f5f9;
  text-align: center;
}

.mission h2 {
  font-size: clamp(2rem, 3vw, 2.5rem);
  margin-top: 0.5rem;
}

.section-label {
  text-transform: uppercase;
  letter-spacing: 0.35em;
  color: #475569;
  font-size: 0.75rem;
}

.section-description {
  margin-top: 1rem;
  color: #475569;
  max-width: 640px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

.cta {
  background: linear-gradient(135deg, #fbbf24, #fb923c);
  color: #0f172a;
  text-align: center;
}

.cta h2 {
  font-size: clamp(1.9rem, 3vw, 2.3rem);
}

.cta .hero-actions {
  justify-content: center;
  margin-top: 1.5rem;
}

@media (max-width: 640px) {
  .hero-stats {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .hero h1 {
    font-size: 2.2rem;
  }
}
</style>
