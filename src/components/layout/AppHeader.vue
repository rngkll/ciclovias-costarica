<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute, RouterLink } from 'vue-router'
import LanguageSwitcher from './LanguageSwitcher.vue'

const { t } = useI18n()
const route = useRoute()

const currentLocale = computed(() => (route.params.locale as string) || 'es')

const navigationItems = computed(() => [
  { name: 'home', path: `/${currentLocale.value}`, label: t('nav.home') },
  { name: 'map', path: `/${currentLocale.value}/mapa`, label: t('nav.map') },
  { name: 'advocacy', path: `/${currentLocale.value}/advocacia`, label: t('nav.advocacy') },
  { name: 'status', path: `/${currentLocale.value}/estado`, label: t('nav.status') },
  { name: 'report', path: `/${currentLocale.value}/reportar`, label: t('nav.report') },
])
</script>

<template>
  <header class="bg-white shadow-sm border-b border-gray-200">
    <div class="container mx-auto px-4">
      <div class="flex items-center h-16 gap-8">
        <RouterLink :to="`/${currentLocale.value}`" class="flex items-center space-x-2">
          <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.409l-7-14z"
              />
            </svg>
          </div>
          <span class="text-xl font-bold text-gray-900">Ciclovías CR</span>
        </RouterLink>

        <nav class="hidden md:flex items-center space-x-8">
          <RouterLink
            v-for="item in navigationItems"
            :key="item.name"
            :to="item.path"
            class="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
            :class="{ 'text-blue-600 border-b-2 border-blue-600': route.path === item.path }"
          >
            {{ item.label }}
          </RouterLink>
        </nav>

        <div class="ml-auto flex items-center">
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  </header>
</template>
