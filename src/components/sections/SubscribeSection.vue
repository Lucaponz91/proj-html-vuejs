<template>
  <section class="subscribe_section">
    <div
      class="
        subscribe_container
        d-flex
        justify-content-between
        align-items-center
      "
    >
      <div
        class="subscribe_text text-left d-flex flex-column align-items-start"
      >
        <h2>Achieve Your Fitness Goals</h2>
        <h5>
          Flexible membership packages to suit all levels of athlete and achive
          your fitness goals
        </h5>
      </div>
      <div class="subscribe_button">
        <a class="button" href=""><span>JOIN US</span></a>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.subscribe_section {
  background-image: url("../../assets/images/home-parallax.jpg");
  padding-top: 65px;
  padding-bottom: 65px;
  background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
}
.subscribe_container {
  width: 1100px;
  margin: auto;
}
.button {
  text-decoration: none;
  border: 1px solid rgb(207, 207, 207);
  color: rgb(207, 207, 207);
  // padding-top: 70px;
  padding: 18px 25px;
  font-size: 20px;
  margin-bottom: 140px;
  transition: all .5s ease;
  &:hover{
    border: 1px solid white;
  color: white;}
}
h5{
    color: white;
    font-size: 19px;
    font-weight: 400;
}
h2 {
  color: white;
  font-weight: 600;
}
</style>