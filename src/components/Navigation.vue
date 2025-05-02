<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import { ref } from 'vue';
import { useColorMode } from '@vueuse/core'
import router from '../router';

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
      icon: 'iconamoon:home-bold',
      label: 'Dashboard',
      to: '/',
      class: "cursor-pointer my-2 text-base",
      onSelect: ChangeMenu,
    },
    {
      icon: 'iconamoon:share-1',
      label: 'Comunidade',
      class: "cursor-pointer my-2 text-base",
      onSelect: () => ToId("comunidade")
    },
    
    {
      icon: 'iconamoon:face-with-open-mouth-bold',
      label: 'Sobre',
      class: "cursor-pointer my-2 text-base",
      onSelect: () => ToId("sobre")
    },
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

function ToId(to: string)
{
  ChangeMenu()
  router.push({hash: `#${to}`})
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
