<template>
  <div class="home">
    <div>页面跳转</div>
    <div @click="gotopage('work')">gotoWork</div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  data () {
    return {}
  },
  methods: {
    gotopage (routerVal) {
      // routerVal = 跳转的路由
      this.$router.push(routerVal)
    }
  }
}
</script>
