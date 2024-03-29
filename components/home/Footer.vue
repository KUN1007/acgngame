<script setup lang="ts">
interface Link {
  name: string
  link?: string
  child?: Link[]
}

const links: Link[] = [
  {
    name: '相关页面',
    child: [
      {
        name: '论坛',
        link: 'https://bbs.acgngame.org/:'
      },
      {
        name: '旧版主站'
      }
    ]
  },
  {
    name: '关于'
  },
  {
    name: '技术支持',
    child: [
      {
        name: '邮箱',
        link: 'mailto:yukinoshita6464@gmail.com'
      }
    ]
  },
  {
    name: '账号操作'
  }
]
</script>

<template>
  <div class="root">
    <footer>
      <div class="link" v-for="(link, index) in links" :key="index">
        <span class="title">{{ link.name }}</span>
        <NuxtLink
          :to="child.link ?? '/'"
          target="_blank"
          v-for="(child, i) in link.child"
          :key="i"
        >
          {{ child.name }}
        </NuxtLink>
      </div>
    </footer>

    <div class="powered">
      由 <NuxtLink to="/">ACGNGAME</NuxtLink> &
      <a href="https://www.kungal.com" target="_blank"> 鲲 Galgame 论坛 </a>
      提供支持
    </div>
  </div>
</template>

<style lang="scss" scoped>
.root {
  margin-top: 1rem;
  padding: 3rem 0;
  width: 100%;
  background-color: var(--gw-deep-color);
  color: var(--gw-white);
}

footer {
  display: flex;
  justify-content: space-between;
  max-width: 64rem;
  margin: 0 auto;
}

.link {
  display: flex;
  flex-direction: column;

  a {
    font-size: small;
    margin-bottom: 0.5rem;
    color: var(--gw-white);
  }

  .title {
    font-size: large;
    margin-bottom: 1rem;
  }
}

.powered {
  width: 100%;
  max-width: 64rem;
  margin: 0 auto;
  margin-top: 3rem;
  display: flex;
  justify-content: center;

  a {
    color: var(--gw-white);
    margin: 0 0.5rem;
  }
}
</style>
