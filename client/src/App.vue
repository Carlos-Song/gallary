<template>
  <v-app style="background: #E3E3EE">
    <!-- 侧栏导航 -->
  <v-navigation-drawer app temporary fixed v-model="sideNav">
      <v-toolbar color="accent" dark flat>
        <v-toolbar-side-icon @click="toggleSideNav"></v-toolbar-side-icon>
        <router-link to="/" tag="span" style="cursor: pointer">
          <h1 class="title pl-3">SilverLight</h1>
        </router-link>
      </v-toolbar>

    <v-divider></v-divider>

    <!-- 侧栏链接 -->
    <v-list>
      <v-list-tile ripple v-for="item in sideNavItems" :key="item.title" :to="item.link">
        <v-list-tile-action>
          <v-icon>{{item.icon}}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          {{item.title}}
        </v-list-tile-content>
      </v-list-tile>
    </v-list>

  </v-navigation-drawer>
    <!-- 水平导航栏  -->
    <v-toolbar fixed color="primary" dark>
      <!-- App 标题 -->
      <v-toolbar-side-icon @click="toggleSideNav"></v-toolbar-side-icon>
      <v-toolbar-title class="hidden-xs-only">
        <router-link to="/" tag="span" style="cursor: pointer">
          SilverLight
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- 搜索输入框 -->
      <v-text-field flex prepend-icon="search" placeholder="搜索" color="accent"
       single-line hide-details></v-text-field>

      <v-spacer></v-spacer>

      <!-- 水平导航栏链接 -->

      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in horizontalNavItems" :key="item.title" :to="item.link">
          <v-icon class="hidden-sm-only" left>{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <!-- App 内容 -->
   <main>
      <v-container class="mt-4">
        <transition name="fade">
          <router-view/>
        </transition>
      </v-container>
    </main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      sideNav: false
    }
  },
  computed: {
    horizontalNavItems () {
      return [
        { icon: 'chat', title: '相片', link: '/posts'},
        { icon: 'lock_open', title: '登陆', link: '/signin'},
        { icon: 'create', title: '注册', link: '/signup'},
      ]
    },
    sideNavItems () {
      return [
        { icon: 'chat', title: '相片', link: '/posts'},
        { icon: 'lock_open', title: '登陆', link: '/signin'},
        { icon: 'create', title: '注册', link: '/signup'},
      ]
    }
  },
  methods: {
    toggleSideNav() {
      this.sideNav = !this.sideNav;
    }
  }
}
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.25s;
}

.fade-enter-active {
  transition-delay: 0.25s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
