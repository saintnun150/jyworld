<template>
  <div id="main-contents-wrap">
    <BoardHome></BoardHome>
  </div>
</template>

<script>
import BoardHome from "@/components/board/BoardHome";
export default {
  name: "AppContents",
  components: {
    BoardHome,
  }
}
</script>

<style scoped lang="scss">
#main-contents-wrap{
  /*display: flex;
  flex: 1;
  justify-content: center;
  align-content: center;*/
}
</style>