<script setup lang="ts">
    import { computed } from 'vue';
    import { Rules } from '../enums/Rules';
    import { useUserStore } from '../store/UserStore';

    const userStore = useUserStore()

    const Me = computed(() => userStore.name)

    const users = [
        {
            id: 0,
            name: "Usuario Furia",
            rule: 0
        },
        {
            id: 1,
            name: "Usuario Furia ADM",
            rule: 1
        },{
            id: 2,
            name: "Usuario Furia Pro",
            rule: 2
        }
    ]

    function SelectedUser(name: string, rule: number)
    {
        if(userStore.name == name) {
            userStore.$reset()
            return
        }

        userStore.name = name
        userStore.rule = rule
    }
</script>

<template>
    <div class="space-y-4">
        <div 
            v-for="user in users" 
            :key="user.id" class="flex space-x-2 border p-4 rounded-lg" 
            :class="[Me == user.name ? ' border-primary' : 'border-muted']"
            @click="SelectedUser(user.name, user.rule)">
            <UAvatar class="w-16 h-16" :alt="user.name" size="xl" />

            <div>
                <p>{{ user.name }}</p>
                <UBadge class="font-bold rounded-full">{{ Rules[user.rule] }}</UBadge>
            </div>
        </div>
    </div>
</template>