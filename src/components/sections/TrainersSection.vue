<template>
  <section class="trainers">
    <div class="trainers_container">
      <h1>MEET OUR TRAINERS</h1>
      <div class="divider_container">
        <img src="../../assets/images/divider-xx-red.png" alt="divider" />
      </div>
      <div class="card_container d-flex">
        <div class="card card_main">
          <img
            src="../../assets/images/trainer1.jpg"
            class="card-img-top"
            alt="tr1"
          />
          <div class="card-body card_info">
            <h5 class="card-title card_name">Ann Baker</h5>
            <h5>Personal Trainer</h5>
            <p class="card-text text_trainer">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue
              nisl, onare volutpat.
            </p>
            <div class="icon_container">
              <a href=""
                ><font-awesome-icon icon="fa-brands fa-facebook-f"
              /></a>
              <a href=""><font-awesome-icon icon="fa-brands fa-twitter" /></a>
              <a href=""><font-awesome-icon icon="fa-brands fa-instagram" /></a>
            </div>
          </div>
        </div>
        <div class="card card_main">
          <img
            src="../../assets/images/trainer3.jpg"
            class="card-img-top"
            alt="tr1"
          />
          <div class="card-body card_info">
            <h5 class="card-title card_name">Anne Warren</h5>
            <h5>Personal Trainer</h5>
            <p class="card-text text_trainer">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue
              nisl, onare volutpat.
            </p>
            <div class="icon_container">
              <a href=""
                ><font-awesome-icon icon="fa-brands fa-facebook-f"
              /></a>
              <a href=""><font-awesome-icon icon="fa-brands fa-twitter" /></a>
              <a href=""><font-awesome-icon icon="fa-brands fa-instagram" /></a>
            </div>
          </div>
        </div>
        <div class="card card_main">
          <img
            src="../../assets/images/trainer4.jpg"
            class="card-img-top"
            alt="tr1"
          />
          <div class="card-body card_info">
            <h5 class="card-title card_name">Peter Rice</h5>
            <h5>Personal Trainer</h5>
            <p class="card-text text_trainer">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue
              nisl, onare volutpat.
            </p>
            <div class="icon_container">
              <a href=""
                ><font-awesome-icon icon="fa-brands fa-facebook-f"
              /></a>
              <a href=""><font-awesome-icon icon="fa-brands fa-twitter" /></a>
              <a href=""><font-awesome-icon icon="fa-brands fa-instagram" /></a>
            </div>
          </div>
        </div>
      </div>
      <a class="button" href=""><span>VIEW ALL TRAINERS</span></a>
    </div>
    <div class="sidiv"></div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.trainers {
  background-color: #1e2123;
  padding-top: 140px;
  padding-bottom: 140px;
}
.trainers_container {
  width: 1100px;
  margin: auto;
  h1 {
    color: white;
    font-weight: 700;
  }
}
.card_main {
  width: 30%;
  flex: none;
  border: none;
  border-radius: 0%;
  img {
    border-radius: 0%;
    width: 100%;
  }
}
.card_container {
  justify-content: space-between;
  margin-bottom: 100px;
}
.card_info {
  background-color: #25292b;
  color: white;
  text-align: start;
  padding-bottom: 50px;
  padding-left: 32px;
  .card_name {
    margin-top: 25px;
  }
  h5 {
    font-size: 15px;
    font-weight: 600;
  }
  p {
    color: rgb(124, 124, 124);
    font-size: 15px;
    margin-bottom: 25px;
    margin-top: 25px;
  }
}
.divider_container {
  margin-top: 45px;
  margin-bottom: 50px;
}
.icon_container {
  a {
    margin-right: 20px;
    padding: 12px;
    padding-inline: 17px;
    background-color: #1f2326;
    * {
      font-size: 16px;
      color: white;
    }
  }
}
.button {
  text-decoration: none;
  border: 1px solid rgb(124, 124, 124);
  color: rgb(124, 124, 124);
  // padding-top: 70px;
  padding: 18px 25px;
  font-size: 20px;
  margin-bottom: 140px;
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

  border-top: 30px solid #1e2123;
}
</style>