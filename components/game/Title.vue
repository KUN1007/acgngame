<script setup lang="ts">
import type { GameDetail } from '~/types/game'

defineProps<{
  game: GameDetail
}>()
</script>

<template>
  <div class="title">
    <h1>{{ game.title }}</h1>

    <div class="info">
      <HomeTags v-if="game.tags" :tags="game.tags" />

      <span class="views">
        <Icon name="lucide:eye" />
        <span>{{ game.views }}</span>
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
}

.info {
  display: flex;
  margin: 1rem 0;

  .views {
    margin-left: 3rem;
  }

  .icon {
    color: var(--gw-deep-color);
    font-size: 20px;
    margin-right: 0.3rem;
  }
}
</style>
