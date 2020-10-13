<template>
  <div id="login-wrap">
    <div id="login-form">
      <div class="form-header">
        <h3>Sign In</h3>
      </div>
      <div class="form-group">
        <input type="text" class="form-input" placeholder="Enter ID">
      </div>
      <div class="form-group">
        <input type="text" class="form-input" placeholder="Enter Password">
      </div>
      <div class="form-group">
        <button class="form-button" type="submit">Sign In</button>
      </div>
      <div class="form-footer">
        <a href="#">Create Your Account</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login"
}
</script>

<style scoped lang="scss">
#login-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  #login-form {
    width: 350px;
    margin: 0 auto;
    border: 1px solid #ddd;
    background: #fafafa;
    padding: 2rem;
  }
}

.form-group {
  margin-bottom: 1rem;
  .form-input {
    background: #fafafa;
    border: 1px solid #eeeeee;
    padding: 10px;
    width: 100%;
  }
  .form-button {
    color: #fff;
    width: 100%;
    padding: 10px;
    background: #09203f;
    background: -webkit-linear-gradient(left, #09203f, #537895);
    text-transform: uppercase;
  }
}

.form-header {
  h3{
    color: hotpink;
  }
}

.form-footer {
  a {
    color: hotpink;
    text-decoration: none;
  }
}
</style>