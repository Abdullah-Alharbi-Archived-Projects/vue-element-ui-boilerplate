<template>
  <div class="default-layout">
    <el-container>
      <el-header>
        <el-menu
          :router="true"
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
        >
          <el-menu-item index="/">
            <i class="el-icon-s-home" />
            <span>Home</span>
          </el-menu-item>
          <el-menu-item index="/about">
            <i class="el-icon-s-custom" />
            <span>About</span>
          </el-menu-item>
        </el-menu>
      </el-header>

      <el-main>
        <slot />
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "default",
  data() {
    return {
      activeIndex: "/"
    };
  },
  mounted() {
    const { name, path } = this.$route;
    if (name) this.activeIndex = path;
    else this.activeIndex = window.location.pathname;
  }
};
</script>

<style lang="scss" scoped>
// default layout style goes here
.layout {
  background: #f5f7f9;
  position: relative;
  height: 100%;
}
</style>
