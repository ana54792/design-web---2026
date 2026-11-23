<script setup>
import { ref, onMounted } from 'vue'
const estados = ref([])
import CardPadrao from '@/components/CardPadrao.vue'

// async - porque essa função faz uma conexão externa e o valor pode demorar
async function buscarEstados() {
  try {
    const resposta = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    const dados = await resposta.json()
    estados.value = dados
  } catch (erro) {
    console.error('Erro ao buscar conexão:', erro)
  }
}

// onMounted - porque essa função ela vai ser executada quando o componente for montado
onMounted(buscarEstados)
</script>
<template>
  <div>
    <h2>Estados</h2>
    <div>
      <CardPadrao v-for="estado in estados" :key="estado.id" 
      :titulo="estado.nome" 
      :subtitulo="estado.sigla"
      :subtituloa="estado.regiao.nome"/>
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