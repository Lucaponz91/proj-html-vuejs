<template>
  <div id="app">
    <HeaderComponent :headerLinks="headerLinks" />
    <MainComponent />
    <FooterComponent />
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import HeaderComponent from "./components/HeaderComponent.vue";
import MainComponent from "./components/MainComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    MainComponent,
    FooterComponent,
  },
  data() {
    return {
      headerLinks: [
        {
          text: "HOME",
          href: "noref",
          active: true
        },
        {
          text: "ABOUT US",
          href: "noref",
          active: false
        },
        {
          text: "FACILITIES",
          href: "noref",
          active: false
        },
        {
          text: "MEMBERSHIP",
          href: "noref",
          active: false
        },
        {
          text: "TESTIMONIALS",
          href: "noref",
          active: false
        },
        {
          text: "BLOG",
          href: "noref",
          active: false
        },
      ],
    };
  },
};
</script>

<style lang="scss">
#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
*{
  box-sizing: border-box;
}
</style>
