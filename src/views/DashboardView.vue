<script setup lang="ts">
import ItemHeader from '../components/ItemHeader.vue';
import ItemBody from '../components/ItemBody.vue';
</script>

<template>
    <ItemHeader />

    <ItemBody id="comunidade"  />

    <div id="sobre" class="h-screen bg-inverted flex justify-center items-center">
        <article class="bg-default w-full pb-24 flex gap-4 justify-center items-center">
            <div class="lg:w-2/4 w-4/5">
                <img class="-mt-10 object-cover h-80 w-full rounded-lg" src="../assets/img/furia_img.png" alt="wallpepr FURIA">
            
                <div class="mt-12 px-4">
                    <h2 class="text-justify text-highlighted text-xl lg:text-2xl font-bold">
                        A FURIA é muito mais que uma organização de esports; é um movimento sociocultural. 
                        Desde a sua criação com o objetivo de representar o Brasil no CS, a equipe expandiu suas ligas, 
                        conquistou títulos e adotou novos desafios.
                    </h2>

                    <p class="mt-8 text-highlighted font-bold text-base">Quem Somos?</p>
                    <p class="text-base text-muted">FURIA</p>
                </div>
            </div>
        </article>
    </div>
</template>