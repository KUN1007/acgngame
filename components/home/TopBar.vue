<script setup lang="ts"></script>

<template>
  <div class="top-bar">
    <div class="name">
      <NuxtImg src="/acgngame.png" />
    </div>

    <div class="search">
      <input type="text" />
      <button>搜索</button>
    </div>

    <div class="user">用户信息</div>
  </div>
</template>

<style lang="scss" scoped>
.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 4rem;
  padding: 0 4rem;
  box-shadow: 0 1px 7px var(--gw-main-color);

  .name {
    img {
      height: 2.5rem;
    }
  }
}
</style>
