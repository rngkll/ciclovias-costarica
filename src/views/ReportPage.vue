<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="report-page">
    <div class="container mx-auto px-4 py-8">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold mb-6">{{ t('nav.report') }}</h1>
        <p class="text-xl text-gray-600 mb-8">Report issues with bike lanes and infrastructure.</p>
        <div class="bg-red-50 border-l-4 border-red-400 p-4">
          <div class="flex">
            <div class="ml-3">
              <p class="text-sm text-red-700">
                Esta página permitirá reportar problemas con ciclovías directamente a GitHub Issues.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
