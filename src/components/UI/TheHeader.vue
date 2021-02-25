<template>
  <Menubar :model="items">
    <template #start>
      <router-link to="/" custom v-slot="{ navigate }">
        <div class="p-d-flex p-ai-center p-mr-5" @click="navigate">
          <i class="pi pi-fw pi-compass"></i>
          <div class="p-ml-1 p-text-center p-text-bold">Find Your Coach!</div>
        </div>
      </router-link>
    </template>
    <template #end> </template>
  </Menubar>
</template>

<script>
import Menubar from 'primevue/menubar'
export default {
  name: 'TheHeader',
  components: { Menubar },
  data() {
    return {
      items: [
        {
          label: 'All Coaches',
          icon: 'pi pi-fw pi-users',
          to: '/requests',
          command: (e) => { console.log(e.item)}
        },
         {
          label: 'Requests',
          icon: 'pi pi-fw pi-envelope',
          to: '/requests'
        },
        {
          label: 'Users',
          icon: 'pi pi-fw pi-user'
        }
      ]
    }
  }
}
</script>

<style lang="css">
.pi.pi-fw.pi-compass {
  font-size: 2rem;
  color: blue;
}
</style>