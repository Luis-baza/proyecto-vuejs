import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {
      path: '/lista-de-tareas',
      name: 'lista de tareas',
      component: () => import('../components/ListaTareas.vue')
    },
    {
      path: '/contador',
      name: 'contador',
      // Lazy loading (carga la vista solo cuando se necesita)
      component: () => import('../components/Contador.vue')
    }
  ]
})

export default router