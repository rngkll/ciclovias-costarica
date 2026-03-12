<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="advocacy-page">
    <div class="container mx-auto px-4 py-8">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold mb-6">{{ t('nav.advocacy') }}</h1>
        <p class="text-xl text-gray-600 mb-8">
          {{ t('home.features.advocacy.description') }}
        </p>
        <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <div class="flex">
            <div class="ml-3">
              <p class="text-sm text-yellow-700">
                Esta página está en desarrollo. Pronto mostraremos información sobre grupos de
                advocacia ciclista en Costa Rica.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
