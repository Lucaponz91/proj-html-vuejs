<template>
  <div class="main_container">
    <section class="mission">
      <div class="mission_text d-flex flex-column align-items-center">
        <h2>WORLD CLASS Fitness</h2>
        <div class="divider">
          <img src="../../assets/images/divider-xx-red.png" alt="divider" />
        </div>
        <p>
          At Avada Gym, everything we do from top to bottom is of the highest
          quality to ensure we’re equipped to help you reach your goals of a
          healthy and fit lifestyle.
        </p>
      </div>
      <div class="sidiv"></div>
    </section>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .mission {
    padding-top: 130px;
    padding-bottom: 130px;
    position: relative;
    .divider {
      margin-top: 30px;
      margin-bottom: 30px;
    }
  }
  .mission_text {
    color: white;
    h2 {
      font-weight: 700;
    }
    p {
      color: rgb(124, 124, 124);
      width: 51%;
    }
  }
  .sidiv {
    position: relative;
    padding-left: 15px;
  }
  .sidiv:after {
    position: absolute;
    transform: translateX(-50%);
    bottom: -160px;
    left: 50%;
    content: "";

    width: 0px;
    height: 0px;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;

    border-top: 30px solid #25292b;
  }

</style>