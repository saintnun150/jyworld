<template>
  <div id="app">
    <app-header></app-header>
    <app-contents></app-contents>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from "@/components/preset/AppHeader";
import AppFooter from "@/components/preset/AppFooter";
import AppContents from "@/components/preset/AppContents";

export default {
  name: 'App',
  components: {
    AppContents,
    AppHeader,
    AppFooter

  }
}
</script>

<style lang="scss">
*{
  box-sizing: border-box;
}
body {
  margin: 0;
  background-color: #e7eaf0;
  #app {
    display: flex;
    flex-direction: column;
    background-color: transparent;
    min-height: 100vh;
    /*flex footer 고정
      row : 자동 확장
      column : 컨테이너 높이를 지정해야함*/
  }
}

</style>
