import { defineStore } from 'pinia'​
import { ref, watch } from 'vue'​
import type { noticia } from '../types/agencia'​

import { noticias as noticiasdev } from '../data/noticiasData'​
​
const CHAVE_STORAGE = 'agencia_noticias'​

export const useNoticiaStore = defineStore('noticia', () => {​
  const noticiasLS = localStorage.getItem(CHAVE_STORAGE)​
  const noticias = ref<noticia[]>(​
    noticiasLS ? JSON.parse(noticiasLS) : noticiasdev​
  )
  watch(​
    noticias,​
    (novasNoticias) => {​
      localStorage.setItem(CHAVE_STORAGE, JSON.stringify(novasNoticias))​
    },​
    { deep: true }​

  )​
  return {​
    noticias​
  }​
})​