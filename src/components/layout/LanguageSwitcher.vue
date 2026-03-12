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

const onLocaleChange = (event: Event) => {
  const value = (event.target as HTMLSelectElement).value
  switchLocale(value)
}
</script>

<template>
  <div>
    <select
      class="text-sm px-3 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-600 font-semibold"
      :value="locale"
      @change="onLocaleChange"
    >
      <option v-for="item in locales" :key="item.code" :value="item.code">
        {{ item.label }}
      </option>
    </select>
  </div>
</template>
