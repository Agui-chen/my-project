
<template>
  <div>
    <el-container style="height: 770px; border: 1px solid #eee">
      <el-aside
        width="200px"
        style="background-color:#E4E7ED"
      >

        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#E4E7ED"
        >
          <el-menu-item style="text-align:center;font-size:18px;background-color: #b3c0d1">
            静在闹区后台系统
          </el-menu-item>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <router-link to="form">
                <el-menu-item index="1-1">
                  TODO实例
                </el-menu-item>
              </router-link>
              <router-link to="table">
                <el-menu-item index="1-2">
                  表单增删
                </el-menu-item>
              </router-link>
              <!-- <router-link to="user">
                <el-menu-item index="1-3">
                  User
                </el-menu-item>
              </router-link> -->
              <router-link to="tableTwo">
                <el-menu-item index="1-3">
                  测试表格
                </el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>导航二</span>
            </template>
            <el-menu-item-group>

              <router-link to="map">
                <el-menu-item index="2-1">
                  百度地图
                </el-menu-item>
              </router-link>
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
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px;">

          <el-dropdown>
            <i
              class="el-icon-setting"
              style="margin-right: 15px"
            ></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>王小虎</span>
          <span style="text-align:center;padding:5px">
            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
          </span>
        </el-header>

        <el-main>
          <div @show="show()">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    show() {
      this.$router.push({ name: 'table' })
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  mounted() {
    this.show();
  }
};
</script>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
  height: 770px;
}
.el-main {
  padding: 5px;
  height: 770px;
}
a {
  text-decoration: none;
}
.el-menu-vertical-demo {
  padding: 0;
}
</style>