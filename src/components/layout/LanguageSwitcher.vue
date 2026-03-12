<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const { locale } = useI18n()
const router = useRouter()

const locales = [
  { code: 'es', label: '🇨🇷 Español' },
  { code: 'en', label: '🇺🇸 English' },
  { code: 'fr', label: '🇫🇷 Français' },
]

const switchLocale = (code: string) => {
  locale.value = code
  const { params, name } = router.currentRoute.value
  router.push({ name, params: { ...params, locale: code } })
}

const currentLocaleLabel = computed(() => {
  const active = locales.find((item) => item.code === locale.value)
  return active?.label || '🇨🇷 Español'
})
</script>

<template>
  <div
    class="text-sm px-3 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-600 font-semibold"
  >
    {{ currentLocaleLabel }}
    <div class="mt-1 space-x-2">
      <button
        v-for="item in locales"
        :key="item.code"
        type="button"
        class="px-2 py-1 rounded text-blue-600 hover:bg-blue-100"
        @click="switchLocale(item.code)"
      >
        {{ item.label }}
      </button>
    </div>
  </div>
</template>
