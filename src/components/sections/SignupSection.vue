<template>
  <section class="signup_section">
    <div class="container d-flex flex-row justify-content-between">
      <img src="../../assets/images/home_img-compressor.jpg" alt="signupimg" />
      <div class="signup_forms">
        <h3>Sign Up For A Free Training Session!</h3>
        <form class="d-flex flex-column align-items-start form_container">
          <div class="form-group">
            <span>Name</span>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Name"
            />
          </div>
          <div class="form-group">
            <span>Email</span>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Email"
            />
          </div>
        </form>
        <button type="submit" class=" btn_submit">START NOW!</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.signup_section {
  padding-top: 130px;
  padding-bottom: 130px;
  background-color: #1e2123;
}
.signup_forms {
  h3 {
    color: white;
    margin-bottom: 45px;
  }
}
.btn_submit {
  background-color: #ee6059;
  margin-top: 40px;
  width: 100%;
  border: none;
  color: white;
  height: 50px;
}
form {
  input {
    background-color: #222527;
    margin-top: 20px;
  }

  span {
    color: white;
    text-align: left;
    margin-top: 23px;
  }
}
.form_container {
  .form-group {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
}
</style>