<script setup lang="ts"></script>

<template>
  <div class="top-bar">
    <div class="name">
      <NuxtImg src="/acgngame.png" />
    </div>

    <div class="func">
      <div class="search">
        <input type="text" />
        <button>搜索</button>
      </div>

      <div class="user">用户信息</div>
    </div>
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

.func {
  display: flex;
  align-items: center;
  height: 4rem;

  .search {
    margin-right: 4rem;
  }

  input {
    border: 1px solid var(--gw-deep-color);
    padding: 0.5rem 1rem;
    border-radius: 1rem;

    &:focus {
      box-shadow: 0 0 0 1px var(--gw-deep-color);
      background-color: var(--gw-hover-color);
    }
  }

  button {
    cursor: pointer;
    background-color: transparent;
    border: none;
    font-size: medium;
    margin: 0.5rem 1rem;
    border-bottom: 2px solid transparent;

    &:hover {
      border-bottom: 2px solid var(--gw-deep-color);
    }
  }
}
</style>
