<template>
  <section class="performance">
    <div class="performance_container">
      <h1>PERFORMANCE NEWS</h1>
      <div class="divider_container">
        <img src="../../assets/images/divider-xx-red.png" alt="divider" />
      </div>
      <!-- cards container -->
      <!-- <div class="performance_card_container"> -->
      <div
        class="
          card_container
          d-flex
          performance_card_container
          justify-content-between
        "
      >
        <!-- vertical row -->
        <div class="d-flex flex-column row_left row_cards">
          <!-- Card -->
          <div class="card card_main">
            <img
              src="../../assets/images/blog1-400x208.jpg"
              class="card-img-top"
              alt="tr1"
            />
            <div class="card-body card_info">
              <a href=""
                ><h5 class="card-title card_name">
                  Train with free weights or your body weight?
                </h5></a
              >
              <p class="card-text text_trainer">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                pretium, tortor vitae porttitor suscipit, sapien purus aliquet
                risus, eu finibus arcu ante nec risus. [...].
              </p>
            </div>
          </div>
          <!-- fine card -->
          <!-- Card -->
          <div class="card card_main">
            <img
              src="../../assets/images/blog4-400x289.jpg"
              class="card-img-top"
              alt="tr1"
            />
            <div class="card-body card_info">
              <a href=""
                ><h5 class="card-title card_name">
                  To be number one, train like you’re number two
                </h5></a
              >
              <p class="card-text text_trainer">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                pretium, tortor vitae porttitor suscipit, sapien purus aliquet
                risus, eu finibus arcu ante nec risus. [...].
              </p>
            </div>
          </div>
          <!-- fine card -->
        </div>
        <!-- end row -->
        <!-- vertical row -->
        <div class="d-flex flex-column row_mid row_cards">
          <!-- Card -->
          <div class="card card_main">
            <img
              src="../../assets/images/blog6-400x400.jpg"
              class="card-img-top"
              alt="tr1"
            />
            <div class="card-body card_info">
              <a href=""
                ><h5 class="card-title card_name">
                  Nutritional advice that will keep you training
                </h5></a
              >
              <p class="card-text text_trainer">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                pretium, tortor vitae porttitor suscipit, sapien purus aliquet
                risus, eu finibus arcu ante nec risus. [...].
              </p>
            </div>
          </div>
          <!-- fine card -->
          <!-- Card -->
          <div class="card card_main">
            <img
              src="../../assets/images/trainer3-400x297.jpg"
              class="card-img-top"
              alt="tr1"
            />
            <div class="card-body card_info">
              <a href=""
                ><h5 class="card-title card_name">
                  Top 5 mistakes every gym member makes
                </h5></a
              >
              <p class="card-text text_trainer">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                pretium, tortor vitae porttitor suscipit, sapien purus aliquet
                risus, eu finibus arcu ante nec risus. [...].
              </p>
            </div>
          </div>
          <!-- fine card -->
        </div>
        <!-- end row -->
        <!-- vertical row -->
        <div class="d-flex flex-column row_right row_cards">
          <!-- Card -->
          <div class="card card_main">
            <img
              src="../../assets/images/trainer4-400x297.jpg"
              class="card-img-top"
              alt="tr1"
            />
            <div class="card-body card_info">
              <a href=""
                ><h5 class="card-title card_name">
                  Simple principles for your next workout
                </h5></a
              >
              <p class="card-text text_trainer">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                pretium, tortor vitae porttitor suscipit, sapien purus aliquet
                risus, eu finibus arcu ante nec risus. [...].
              </p>
            </div>
          </div>
          <!-- fine card -->
          <!-- Card -->
          <div class="card card_main">
            <img
              src="../../assets/images/trainer1-400x297.jpg"
              class="card-img-top"
              alt="tr1"
            />
            <div class="card-body card_info">
              <a href=""
                ><h5 class="card-title card_name">
                  The myths of shedding body fat explored
                </h5></a
              >
              <p class="card-text text_trainer">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                pretium, tortor vitae porttitor suscipit, sapien purus aliquet
                risus, eu finibus arcu ante nec risus. [...].
              </p>
            </div>
          </div>
          <!-- fine card -->
        </div>
        <!-- end row -->
      </div>
      <!-- </div> -->
      <a class="button" href=""><span>READ ALL ARTICLES</span></a>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: white;
}
.performance {
  background-color: #25292b;
  padding-top: 140px;
}
.performance_container {
  width: 1100px;
  margin: auto;
  margin-bottom: 145px;
}
.performance_card_container {
  margin-bottom: 80px;
}
h5 {
  font-weight: 600;
  margin-top: 10px;
  transition: color 0.5s ease;
  &:hover {
    color: #ee6059;
  }
}
h1 {
  color: white;
  font-weight: 700;
}
p {
  color: rgb(124, 124, 124);
}
.row_cards {
  width: 30%;
}
.card_main {
  background-color: #1e2123;
  color: white;
  margin-top: 35px;
}
.card_info {
  text-align: start;
}
.row_mid {
  margin-inline: 35px;
}
.divider_container {
  margin-top: 45px;
  margin-bottom: 50px;
}
.button {
  text-decoration: none;
  border: 1px solid rgb(124, 124, 124);
  color: rgb(124, 124, 124);
  // padding-top: 70px;
  padding: 18px 25px;
  font-size: 20px;
  margin-bottom: 140px;
  transition: all 0.5s ease;
  &:hover {
    border: 1px solid white;
    color: white;
  }
}
</style>