<template>
  <div id="member-home-wrap">
    <div id="member-home-header">
      <a href="#">Sign In</a>
      <a href="#">Register</a>
    </div>
    <sign-up></sign-up>
  </div>
</template>

<script>
import SignUp from "@/components/member/SignUp";

export default {
  name: "MemberHome",
  components: {SignUp}
}
</script>

<style scoped lang="scss">
#member-home-wrap {
  margin-left: auto;
  margin-right: auto;
  width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  #member-home-header {
    display: flex;
    flex-direction: row;
    a {
      padding: 10px;
      background-color: #fafafa;
      border-radius: 30px;
      text-decoration: none;
      color: white;
    }

    a:visited {
      text-decoration: none;
      color: black;
    }

    a:active {
      background-color: hotpink;
    }
  }
}
</style>