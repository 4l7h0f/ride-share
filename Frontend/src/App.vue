<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="min-h-screen bg-grey-100 text-center antialiased">
    <main id="content" role="main" class="w-full  max-w-md mx-auto p-6">
      <RouterView />
    </main>
  </div>
</template>
