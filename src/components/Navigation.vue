<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import { ref } from 'vue';
import { useColorMode } from '@vueuse/core'

const open = ref(false)
const mode = useColorMode()

defineShortcuts({
  m: ChangeMenu,
  d: ChangeMode
})

const items = ref<NavigationMenuItem[][]>([
  [
    {
      icon: 'iconamoon:menu-burger-horizontal',
      class: "cursor-pointer",
      onSelect: ChangeMenu
    }
  ],
  [
    {
      icon: mode.value === 'dark' ? 'iconamoon:mode-dark-duotone' : 'iconamoon:mode-light-duotone',
      class: "cursor-pointer",
      onSelect: ChangeMode
    }
  ]
])
const itemsMenu = ref<NavigationMenuItem[]>([
    {
      icon: 'iconamoon:home',
      label: 'Dashboard',
      class: "cursor-pointer",
      onSelect: ChangeMenu
    }
  ],
)

function ChangeMode()
{
  mode.value = mode.value === 'dark' ? 'light' : 'dark'
  items.value[1][0].icon = mode.value === 'dark' ? 'iconamoon:mode-dark-duotone' : 'iconamoon:mode-light-duotone'
}

function ChangeMenu()
{
  open.value = !open.value
}
</script>

<template>
  <UNavigationMenu
    :items="items"
    class="w-full px-8 pt-2"
    color="neutral" />

  <UDrawer
    v-model:open="open"
    direction="left" 
    inset
    title="Fúria"
    description="Chat para os fãs do time de CS da FURIA"
    :ui="{ container: 'w-96' }">

    <template #body>
      <UNavigationMenu
        orientation="vertical"
        :items="itemsMenu" />
    </template>
  </UDrawer>
</template>
