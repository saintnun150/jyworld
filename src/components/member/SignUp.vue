<template>
  <div class="sign-up-wrap">
    <div class="sign-up-form">
      <div class="form-header">
        <h3>Sign Up</h3>
      </div>
      <div class="form-group">
        <h4>아이디</h4>
        <input type="text" id="m-id" class="form-input" placeholder="Enter ID">
      </div>
      <div class="form-group">
        <h4>비밀번호</h4>
        <input type="text" id="m-password" class="form-input" placeholder="Enter Password">
      </div>
      <div class="form-group">
        <h4>이메일</h4>
        <input type="text" id="m-email" class="form-input" placeholder="Enter Email">
      </div>
      <div class="form-group">
        <button class="form-button" type="submit">Create</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignUp"
}
</script>

<style scoped lang="scss">
.sign-up-wrap {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  .sign-up-form {
    width: 500px;
    background-color: #fafafa;
    padding: 1rem;

    .form-group {
      h4 {
        margin: 0.5rem 0 0.5rem 0;
      }

      .form-input {
        width: 100%;
        height: calc(1.5em + .75rem + 2px);
        font-size: 1rem;
        border: 1px solid #ced4da;
        border-radius: .25rem;

        line-height: 1.5;
      }
      .form-button {
        color: #fff;
        width: 100%;
        margin-top: 10px;
        padding: 10px;
        background: #09203f;
        background: -webkit-linear-gradient(left, #09203f, #537895);
        text-transform: uppercase;
      }
    }
  }
}
</style>