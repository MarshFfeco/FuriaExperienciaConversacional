<script setup lang="ts">
  import Navigation from './components/Navigation.vue';
  import { useUserStore } from './store/UserStore';

  const useUser = useUserStore()
  useUser.name = 'Andersopn'
  useUser.rule = 0

  function CreateNewChat()
  {
    useUser.createChat('Historical Tech Pioneers', 'ghopper: Relay malfunction found. Cause: moth.')
  }
</script>

<template>
  <Uapp>
    <header class="fixed inset-x-0 backdrop-blur-sm">
      <Navigation />
    </header>

    <main>
      <RouterView  v-slot="{ Component }" >
        <Transition name="slide-up">
          <div class="main">
            <component :is="Component" />
          </div>
        </Transition>
      </RouterView>
    </main>

    <UButton @click="CreateNewChat" size="xl">Criar Chat</UButton>

    <footer class="py-4  flex justify-center items-center">
      <h4 class="text-base text-pretty text-highlighted">Feito Com &#9829; Por <ULink class="cursor-pointer" target="_blank" to="https://github.com/MarshFfeco">MarshFfeco</ULink></h4>
    </footer>
  </Uapp>
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