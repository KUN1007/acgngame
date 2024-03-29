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
  </div>
</template>

<style lang="scss" scoped>
.root {
  margin-top: 1rem;
  padding: 3rem 0;
  width: 100%;
  background-color: var(--gw-deep-color);
  color: white;
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
    color: white;
  }

  .title {
    font-size: large;
    margin-bottom: 1rem;
  }
}
</style>
