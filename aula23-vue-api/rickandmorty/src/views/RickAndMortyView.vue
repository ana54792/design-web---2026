<script setup>
import { ref, onMounted } from 'vue'
const personagens = ref([])
import CardPadrao from '@/components/CardPadrao.vue'

// async - porque essa função faz uma conexão externa e o valor pode demorar
async function buscarPersonagens() {
  try {
    const resposta = await fetch('https://rickandmortyapi.com/api/character')
    const dados = await resposta.json()
    personagens.value = dados.results
  } catch (erro) {
    console.error('Erro ao buscar conexão:', erro)
  }
}

// onMounted - porque essa função ela vai ser executada quando o componente for montado
onMounted(buscarPersonagens)
</script>
<template>
  <div>
    <h2>Rick and Morty</h2>
    <div>
      <CardPadrao v-for="personagem in personagens" :key="personagem.id" 
      :titulo="personagem.name" 
      :subtitulo="personagem.species"
      :subtituloa="personagem.status"
      :subtitulob="personagem.gender"
      :subtituloc="personagem.url"
      :subtitulod="personagem.location.name"
      :subtituloe="personagem.episode.length"
      :imagem="personagem.image" />
    </div>
  </div>
</template>

<style scoped>
div {
  display: flex; 
  flex-wrap: wrap;
  justify-content: center;
}
</style>