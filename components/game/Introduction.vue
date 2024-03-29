<script setup lang="ts">
defineProps<{
  intro: string
}>()
</script>

<template>
  <div class="intro">
    <h2>游戏介绍</h2>
    <div v-html="intro"></div>
  </div>
</template>

<style lang="scss" scoped>
.intro {
  line-height: 1.5rem;

  :deep(h2) {
    margin-bottom: 2rem;

    &::before {
      content: '#';
      color: var(--gw-deep-color);
      margin-right: 1rem;
    }
  }

  :deep(p) {
    margin: 1rem 0;
  }

  :deep(img) {
    max-width: 100%;
  }
}
</style>
