<template>
  <div class="root">
    <ul>
      <li v-for="(d, idx) in routesArray" :key="idx">
        <router-link :to="d.to">
          {{ d.name }}
        </router-link>
      </li>
    </ul>
    <div class="body">
      <router-view></router-view>
    </div>
    <div class="scroll-top-wrapper" @click="handleScrollTop">
      <span>🔺</span>
    </div>
  </div>
</template>

<script>
import { routes } from '@/router'

export default {
  name: 'App',
  components: {},
  data() {
    return {}
  },
  computed: {
    routesArray() {
      return routes.map((d) => ({
        to: d.path,
        ...d,
      }))
    },
  },
  mounted() {},
  methods: {
    handleScrollTop() {
      window.scrollTo(0, 0)
    },
  },
}
</script>
<style lang="scss">
* {
  scroll-behavior: smooth;
}
.root {
  display: grid;
  grid-template-columns: 250px 1fr;
  ul {
    position: sticky;
    left: 0;
  }
}
.scroll-top-wrapper {
  position: fixed;
  right: 40px;
  bottom: 40px;
  cursor: pointer;
}
</style>
