<template>
  <div id="main-contents-wrap">
    <LoginPage></LoginPage>
  </div>
</template>

<script>
import LoginPage from "@/components/login/Login";
export default {
  name: "AppContents",
  components: {
    LoginPage

  }
}
</script>

<style scoped lang="scss">
#main-contents-wrap{
  display: flex;
  flex: 1;
  justify-content: center;
  align-content: center;
  margin-top: 100px;
}
</style>