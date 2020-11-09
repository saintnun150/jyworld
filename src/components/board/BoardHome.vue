<template>
<div id="board-home-wrap">
  <router-link to="/write">에디터 이동</router-link><p/>
  <router-link to="/viewer">뷰어 이동</router-link>
  <!--<ArticleForm></ArticleForm>>-->
  <router-view></router-view>
</div>
</template>

<script>
// import ArticleForm from "@/components/board/ArticleForm";
export default {
  name: "BoardHome",
  /*components: {
    ArticleForm,
  }*/
}
</script>

<style scoped>

</style>