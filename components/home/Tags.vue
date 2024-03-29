<script setup lang="ts">
defineProps<{
  tags: string
}>()
</script>

<template>
  <div class="tags">
    <Icon name="lucide:tags" />
    <span v-for="(tag, i) in tags.split(',')" :key="i">{{ tag }}</span>
  </div>
</template>

<style lang="scss" scoped>
.tags {
  margin-bottom: 1rem;

  span {
    border: 1px solid var(--gw-border-color);
    font-size: small;
    border-radius: 1rem;
    padding: 0.1rem 1rem;
    margin-right: 0.3rem;
  }
}

.icon {
  color: var(--gw-deep-color);
  font-size: 20px;
  margin-right: 0.3rem;
}
</style>
