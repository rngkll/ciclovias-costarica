<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="status-page">
    <div class="container mx-auto px-4 py-8">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold mb-6">{{ t('nav.status') }}</h1>
        <p class="text-xl text-gray-600 mb-8">
          Infrastructure coverage dashboard by region - coming soon.
        </p>
        <div class="bg-blue-50 border-l-4 border-blue-400 p-4">
          <div class="flex">
            <div class="ml-3">
              <p class="text-sm text-blue-700">
                Esta página mostrará estadísticas regionales sobre cobertura de ciclovías en Costa
                Rica.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
