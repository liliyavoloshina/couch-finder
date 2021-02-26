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
    <!-- <template #end> </template> -->
  </Menubar>
</template>

<script>
export default {
  name: 'TheHeader'}
</script>