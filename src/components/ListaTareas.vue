
<template>
    <div>
        <h2>LISTA DE TAREAS</h2>

        <div>
            <input type="text" v-model="nuevaTarea" @keyup.enter="addTarea">
            <ul>
                <li v-for="(tarea,index) in tareas" :key="index">{{ tarea }}<button @click="borrartarea">Borrar</button></li>
                
            </ul>
        </div>
    </div>
</template>

<script setup>

import { ref } from 'vue';



const tareas = ref([]);
const nuevaTarea = ref('');
const addTarea = ()=>{
    tareas.value.push(nuevaTarea.value);
    nuevaTarea.value ='';
}
const borrartarea = (index)=>{
    tareas.value.splice(index,1);
}

</script>

<style>
</style>