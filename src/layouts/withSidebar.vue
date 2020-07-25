<template>
  <el-container style="height: 100%;">
    <el-aside width="auto">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
      >
        <el-menu-item>
          <i class="el-icon-menu" />
          <span slot="title">Navigator 1</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-s-tools" />
          <span slot="title">Navigator 2</span>
        </el-menu-item>

        <el-menu-item index="3" @click="toggle" id="bottom">
          <i class="el-icon-more" />
          <span slot="title">{{ getText }}</span>
        </el-menu-item>
      </el-menu>
    </el-aside>

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
  </el-container>
</template>

<script>
export default {
  name: "with-sidebar",
  data() {
    return {
      activeIndex: "/",
      isCollapse: false
    };
  },
  mounted() {
    const { name, path } = this.$route;
    if (name) this.activeIndex = path;
    else this.activeIndex = window.location.pathname;
  },
  computed: {
    getText() {
      return this.isCollapse ? "Expand" : "Collapse";
    }
  },
  methods: {
    toggle() {
      this.isCollapse = !this.isCollapse;
    }
  }
};
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}

.el-aside {
  border-right: 1px solid #e6e6e6;

  .el-menu {
    border-right: none;
  }
}
</style>
