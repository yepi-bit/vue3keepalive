<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125"/>

    <div class="wrapper">
      <HelloWorld msg="You did it!"/>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/async">Async</RouterLink>
        <RouterLink to="/watch">Watch</RouterLink>
        <RouterLink to="/useData">useData</RouterLink>
        <RouterLink to="/useRefresh">useRefresh</RouterLink>
      </nav>
    </div>
  </header>

  <!--  <RouterView />-->
  <RouterView v-slot="{ Component, route }">
    <transition :name="transitionName" mode="out-in">
      <keep-alive v-if="route.meta.keepAlive">
        <component :is="Component" :key="route.path" class="w-full h-full"/>
      </keep-alive>
      <component :is="Component" v-else :key="route.path" class="w-full h-full"/>
    </transition>
  </RouterView>
</template>

<script setup lang="ts">
import {RouterLink, RouterView, useRouter} from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import {reactive, toRefs} from "vue";

let {transitionName} = toRefs(reactive({
  transitionName: 'slide-left'
}))

const router = useRouter()
router.beforeEach((to: any, from: any, next: any) => {
  console.log(to.meta.keepAlive,'keep')
  if (to.meta.index > from.meta.index) {
    transitionName.value = "slide-left"; // 向左滑动
  } else if (to.meta.index < from.meta.index) {
    // 由次级到主级
    transitionName.value = "slide-right";
  } else {
    transitionName.value = ""; // 同级无过渡效果
  }
  next();
});
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}

/*.slide-right-enter-active,*/
/*.slide-right-leave-active,*/
/*.slide-left-enter-active,*/
/*.slide-left-leave-active {*/
/*  height: 100%;*/
/*  will-change: transform;*/
/*  transition: all 500ms;*/
/*  position: absolute;*/
/*  backface-visibility: hidden;*/
/*}*/

/*.slide-right-enter {*/
/*  opacity: 0;*/
/*  transform: translate3d(-100%,0,0)*/
/*}*/

/*.slide-right-leave-active {*/
/*  opacity: 0;*/
/*  top: 0;*/
/*  transform: translate3d(100%,0,0)*/
/*}*/

/*.slide-left-enter {*/
/*  opacity: 0;*/
/*  transform: translate3d(100%,0,0)*/
/*}*/

/*.slide-left-leave-active {*/
/*  opacity: 0;*/
/*  transform: translate3d(-100%,0,0)*/
/*}*/
</style>
