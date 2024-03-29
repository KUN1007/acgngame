<script setup lang="ts">
import type { DownloadLink } from '~/types/game'

defineProps<{
  links: DownloadLink[]
}>()
</script>

<template>
  <div class="download">
    <h2>游戏下载</h2>

    <div class="links" v-for="(link, index) in links" :key="index">
      <div class="type">
        <span>{{ link.name }}</span>
        <span class="status" v-if="link.status">链接正常</span>
      </div>

      <div class="source">
        <a :href="link.link" target="_blank">{{ link.link }}</a>
        <span>
          <span v-if="link.code !== '-1'">提取码: {{ link?.code }}</span>
          <span v-if="link.code === '-1'">无提取码</span>
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h2 {
  margin-bottom: 2rem;

  &::before {
    content: '#';
    color: var(--gw-deep-color);
    margin-right: 1rem;
  }
}

.download {
  display: flex;
  flex-direction: column;

  .links {
    margin-bottom: 2rem;
  }

  .type {
    border-left: 5px solid var(--gw-main-color);
    padding-left: 1rem;
    margin-bottom: 1rem;

    .status {
      margin-left: 1rem;
      font-size: small;
      color: var(--gw-deep-color);
    }
  }

  .source {
    a {
      margin-right: 1rem;
      color: var(--gw-deep-color);
      border-bottom: 2px solid transparent;

      &:hover {
        border-bottom: 2px solid var(--gw-main-color);
      }
    }
  }
}
</style>
