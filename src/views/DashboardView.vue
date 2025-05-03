<script setup lang="ts">
    import ItemHeader from '../components/ItemHeader.vue';
    import ItemBody from '../components/ItemBody.vue';
    import { useUserStore } from '../store/UserStore';
    import { computed } from 'vue';
    import ItemAbout from '../components/ItemAbout.vue';

    const userStore = useUserStore()
    const isAuth = computed(() => userStore.ICanAuthorization)
</script>

<template>
    <ItemHeader v-if="isAuth" />

    <ItemBody id="comunidade"  />

    <ItemAbout id="sobre" />
</template>