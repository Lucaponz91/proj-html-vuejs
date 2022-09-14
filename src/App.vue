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
        },
        {
          text: "ABOUT US",
          href: "noref",
        },
        {
          text: "FACILITIES",
          href: "noref",
        },
        {
          text: "MEMBERSHIP",
          href: "noref",
        },
        {
          text: "TESTIMONIALS",
          href: "noref",
        },
        {
          text: "BLOG",
          href: "noref",
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
</style>
