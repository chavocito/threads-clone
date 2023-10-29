<template>
  <MainLayout>
    <div id="IndexPage" class="w-full overflow-auto">
      <div class="mx-auto max-w-[500px] overflow-hidden">
        <div id="Posts" class="px-4 mx-auto max-w-[600px]">
          <div v-if="isPosts" v-for="post in posts" :key="post">
            {{ post }}
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from "~/layouts/MainLayout.vue";
</script>