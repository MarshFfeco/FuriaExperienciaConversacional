<script setup lang="ts">
  import { ref } from 'vue';

  const openSearch = ref(false)

  function ChangeSearch()
  {
    openSearch.value = !openSearch.value
  }
</script>

<template>
  <UModal 
    class="w-md"
    v-model:open="openSearch" 
    title="Receba Inteligência" 
    description="Descubra o universo competitivo de Counter-Strike com a FURIA!">

    <template #body>
      <ItemSearch v-on:select-chat="ChangeSearch" />
    </template>
  </UModal>

  <header class="fixed inset-x-0 bg-default drop-shadow">
    <Navigation v-on:open-search="ChangeSearch" />
  </header>

  <main>
    <UApp>
      <RouterView />
    </UApp>
  </main>

  <footer class="py-4 flex justify-center items-center">
    <h4 class="text-base text-pretty text-highlighted">Feito Com &#9829; Por <ULink class="cursor-pointer" target="_blank" to="https://github.com/MarshFfeco">MarshFfeco</ULink></h4>
  </footer>
</template>


<style>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(100px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-100px);
}
</style>