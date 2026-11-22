<script setup lang="ts">​
import { useNoticiaStore } from '../stores/useNoticiaStore'​

const noticiaStore = useNoticiaStore()​
</script>​
<template>​
    <article>​
        <h2>Notícias</h2>​
        <ul>​
            <li v-for="noti in noticiaStore.noticias" :key="noti.id">​
                <h3>{{ noti.nome }}</h3>​
                <p>{{ noti.descricao }} - {{ noti.status }} </p>​
            </li>​
        </ul>​
       </article>​

</template>​