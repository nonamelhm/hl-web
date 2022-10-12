<template>
  <div id="app">
    <nav>
      <h1 class="hl-center">HL-WEB前端工程化</h1>
      <div>
        <el-row class="tac">
          <el-col :span="5">
            <el-menu
              class="el-menu-vertical-demo"
              @select="handleSelect"
              :default-active="$route.path"
              unique-opened
              router
            >
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-document"></i>
                  <span>packages</span>
                </template>
                <el-menu-item index="/">breadCrumbs</el-menu-item>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-document"></i>
                  <span>src</span>
                </template>
                <el-menu-item-group>
                  <el-submenu index="2-1">
                    <template slot="title">mixins</template>
                    <el-menu-item index="/pagejs">page.js</el-menu-item>
                  </el-submenu>
                </el-menu-item-group>
              </el-submenu>
              <el-menu-item index="3">
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
              </el-menu-item>
            </el-menu>
          </el-col>
          <el-col :span="19">
            <router-view />
          </el-col>
        </el-row>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    handleSelect(index) {
      console.log(index);
    },
  },
};
</script>

<style lang="less" scoped>
#app {
  width: 100%;
  height: 100%;
  font-size: 14px;
  nav {
    a {
      font-weight: bold;
    }
    a.router-link-exact-active {
      color: #42b983;
    }
  }
  .hl-center {
    text-align: center;
    background-color: #3091f2;
    line-height: 70px;
    color: #fff;
  }
}
</style>
