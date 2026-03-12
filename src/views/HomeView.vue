<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()

const currentLocale = computed(() => {
  const route = useRoute()
  return (route.params.locale as string) || 'es'
})

const mapUrl = computed(() => `/${currentLocale.value}/mapa`)
const advocacyUrl = computed(() => `/${currentLocale.value}/advocacia`)
const reportUrl = computed(() => `/${currentLocale.value}/reportar`)
</script>

<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl md:text-6xl font-bold mb-6">
            {{ t('home.hero.title') }}
          </h1>
          <p class="text-xl md:text-2xl mb-8 opacity-90">
            {{ t('home.hero.subtitle') }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <RouterLink
              :to="mapUrl"
              class="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                  clip-rule="evenodd"
                />
              </svg>
              {{ t('home.hero.cta.map') }}
            </RouterLink>
            <RouterLink
              :to="advocacyUrl"
              class="inline-flex items-center px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-400 transition-colors"
            >
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                />
              </svg>
              {{ t('home.hero.cta.advocacy') }}
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="stats py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="text-4xl font-bold text-blue-600 mb-2">9660</div>
            <div class="text-lg font-semibold mb-1">{{ t('home.stats.law.title') }}</div>
            <div class="text-gray-600">{{ t('home.stats.law.description') }}</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-green-600 mb-2">1ro</div>
            <div class="text-lg font-semibold mb-1">{{ t('home.stats.cartago.title') }}</div>
            <div class="text-gray-600">{{ t('home.stats.cartago.description') }}</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-purple-600 mb-2">+15</div>
            <div class="text-lg font-semibold mb-1">{{ t('home.stats.groups.title') }}</div>
            <div class="text-gray-600">{{ t('home.stats.groups.description') }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features py-20">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold mb-4">{{ t('home.features.title') }}</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            {{ t('home.features.subtitle') }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Interactive Map -->
          <RouterLink :to="mapUrl" class="feature-card">
            <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-2">{{ t('home.features.map.title') }}</h3>
              <p class="text-gray-600">{{ t('home.features.map.description') }}</p>
            </div>
          </RouterLink>

          <!-- Advocacy Groups -->
          <RouterLink :to="advocacyUrl" class="feature-card">
            <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-2">{{ t('home.features.advocacy.title') }}</h3>
              <p class="text-gray-600">{{ t('home.features.advocacy.description') }}</p>
            </div>
          </RouterLink>

          <!-- Report Issues -->
          <RouterLink :to="reportUrl" class="feature-card">
            <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div class="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-2">{{ t('home.features.report.title') }}</h3>
              <p class="text-gray-600">{{ t('home.features.report.description') }}</p>
            </div>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta bg-blue-600 text-white py-16">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-4">{{ t('home.cta.title') }}</h2>
        <p class="text-xl mb-8 opacity-90">{{ t('home.cta.subtitle') }}</p>
        <RouterLink
          :to="reportUrl"
          class="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
        >
          <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clip-rule="evenodd"
            />
          </svg>
          {{ t('home.cta.button') }}
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
    url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="bike" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="2" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23bike)"/></svg>');
}

.feature-card:hover {
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.5rem;
  }

  .hero p {
    font-size: 1.125rem;
  }
}
</style>
