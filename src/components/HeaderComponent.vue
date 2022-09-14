<template>
  <div class="header_container">
    <section
      class="navbar d-flex flex-row justify-content-between align-items-center"
    >
      <div class="logo">
        <img src="../assets/images/gym_logo_1x.png" alt="gym_logo" />
      </div>
      <div class="header_list d-flex flex-row align-items-center">
        <ul class="d-flex flex-row">
          <li v-for="link in headerLinks" :key="link.text">
            <a :href="link.href"> {{ link.text }}</a>
          </li>
        </ul>
      </div>
      <div class="button">
        <a href=""><span class="join_today">JOIN TODAY</span></a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    headerLinks: Array,
  },
};
</script>

<style lang="scss" scoped>
.header_container {
  // background-color: #111315;
  background-image: url("../assets/images/home-banner.jpg");
  height: 1079px;
  .navbar{
    padding-inline: 75px;
    padding-top: 30px;
  }
}
ul {
  list-style: none;
  margin: 0%;
}
li {
    padding-inline: 40px;
  color: white;
  a {
    text-decoration: none;
    color: white;
  }
}
.button {
  a {
    padding: 17px 38px;
    background-color: #EE6059;
    text-decoration: none;
  }
}
.join_today {
  color: white;
}
</style>