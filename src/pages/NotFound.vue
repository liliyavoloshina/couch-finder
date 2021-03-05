<template>
  <section>
    <base-card>
      <h2>Page not found</h2>
      <p>
        Try another. Maybe check out
        <router-link :to="{ name: 'CoachList' }">coaches</router-link>?
      </p>
    </base-card>
  </section>
</template>