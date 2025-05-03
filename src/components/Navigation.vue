<script setup lang="ts">
  import type { NavigationMenuItem } from '@nuxt/ui'
  import { ref } from 'vue';
  import { useColorMode } from '@vueuse/core'
  import router from '../router';
  import ItemUsers from './ItemUsers.vue';

  const open = ref(false)
  const openUsers = ref(false)

  const mode = useColorMode()

  interface Emit {
    openSearch: []
  }

  const emit = defineEmits<Emit>()

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
        icon: 'iconamoon:search-bold',
        label: 'Pesquisar',
        class: "cursor-pointer my-2 text-base",
        onSelect: () => emit("openSearch")
      },
      {
        icon: mode.value === 'dark' ? 'iconamoon:mode-dark-duotone' : 'iconamoon:mode-light-duotone',
        class: "cursor-pointer",
        onSelect: ChangeMode
      }
    ]
  ])
  const itemsMenu = ref<NavigationMenuItem[][]>([
    [{
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
    }],
    [
      {
          icon: 'iconamoon:profile',
          label: 'Users',
          class: "cursor-pointer my-2 text-base",
          onSelect: OpenUsers
        },
    ]
  ])

  function ChangeMode()
  {
    mode.value = mode.value === 'dark' ? 'light' : 'dark'
    items.value[1][0].icon = mode.value === 'dark' ? 'iconamoon:mode-dark-duotone' : 'iconamoon:mode-light-duotone'
  }

  function ChangeMenu()
  {
    open.value = !open.value
  }

  function OpenUsers()
  {
    open.value = !open.value
    openUsers.value = !openUsers.value
  }

  function ToId(to: string)
  {
    ChangeMenu()
    router.push({hash: `#${to}`})
  }
</script>

<template>
  <UModal
      v-model:open="openUsers" 
      title="Escolha sua conta">
    <template #body>
      <ItemUsers />
    </template>
  </UModal>

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
