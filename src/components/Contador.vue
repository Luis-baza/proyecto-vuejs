
<template>
  <p>{{ contador }}</p>
  
  <button @click="incrementar">Incrementar</button>
  <button @click="disminuir">Disminuir</button>
</template>

<script setup>
import { ref } from 'vue';

const contador = ref(0);

const incrementar = () =>{
  contador.value++;
}
const disminuir = () =>{
  contador.value--;
}



</script>


<style scoped>
p{ color: red;}
</style>
