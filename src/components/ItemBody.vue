<script setup lang="ts">
    const itemsBlog = [{
            title: 'FURIA DOMINA E GARANTE VITÓRIA CONTRA [TIME ADVERSÁRIO]',
            description: 'Em partida eletrizante, a equipe brasileira mostrou todo seu poder tático e individual para fechar a série [PLACAR]. Destaque para [JOGADOR] com [NÚMERO] kills.'
        },
        {
            title: "FURIA ENFRENTA [TIME] EM BUSCA DE VAGA PARA [CAMPEONATO]",
            description: `O confronto acontece neste [DIA] e promete ser um dos mais acirrados do torneio. Analistas dão ligeira vantagem para os brasileiros, mas alertam: "Será uma guerra".`
        },
        {
            title: "[NICK DO JOGADOR] É ELEITO MVP DO TORNEIO [NOME]",
            description: `Com estatísticas impressionantes, o jogador da FURIA brilhou com [NÚMERO] de kills, [NÚMERO] ADR e [NÚMERO]% de HS. "É fruto de muito trabalho", declarou o astro."`
        },
        {
            title: "FURIA ANUNCIA MUDANÇAS NO TIME DE CS:GO PARA 2024",
            description: `A organização confirmou a saída de [JOGADOR] e a chegada de [NOVO JOGADOR]. O técnico [NOME] afirmou que as mudanças visam "manter o time no topo mundial".`
        },
        {
            title: "[NICK DO JOGADOR] É ELEITO MVP DO TORNEIO [NOME]",
            description: `Com estatísticas impressionantes, o jogador da FURIA brilhou com [NÚMERO] de kills, [NÚMERO] ADR e [NÚMERO]% de HS. "É fruto de muito trabalho", declarou o astro."`
        },
        {
            title: "FURIA ANUNCIA MUDANÇAS NO TIME DE CS:GO PARA 2024",
            description: `A organização confirmou a saída de [JOGADOR] e a chegada de [NOVO JOGADOR]. O técnico [NOME] afirmou que as mudanças visam "manter o time no topo mundial".`
        }
    ]
</script>

<template>
    <UContainer class="min-h-screen flex flex-col space-y-20 py-4 justify-center items-center">
        <article class="text-center">
            <small class="text-primary text-base text-pretty font-semibold">Bastidores e Curiosidades</small>
            <h3 class="mt-2 text-highlighted lg:text-7xl text-5xl font-bold">Comunidade FURIA</h3>
            <p class="mt-8 lg:text-lg text-base text-muted">
                Junte-se ao nosso grupo oficial e conecte-se com outros fãs da FURIA! <br>Compartilhe notícias, 
                troque ideias e acompanhe tudo sobre o time em tempo real.
            </p>
        </article>

        <div class="w-full MyGrid" >
            <article v-for="item in itemsBlog" 
                class="border border-default hover:border-accented rounded-lg p-4 space-y-1">
                
                <h3 class="truncate text-base text-highlighted font-bold">
                    {{item.title}}
                </h3>

                <p class="truncate text-sm text-toned">
                    {{ item.description }}
                </p>

                <UButton class="cursor-pointer mt-4" color="primary" size="xl" icon="iconamoon:do-redo-fill">Acessar</UButton>
            </article>
        </div>
    </UContainer>
</template>

<style>
    .MyGrid {
        display: grid;

        grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));

        gap: 16px;
    }
</style>