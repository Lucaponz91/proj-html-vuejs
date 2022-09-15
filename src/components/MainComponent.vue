<template>
  <div class="main_container">
    
    <MissionSection/>
    <SignupSection/>
    <ServicesSection/>
    <ResultsSection/>
    <FacilitiesSection/>

  </div>
</template>

<script>
import MissionSection from './sections/MissionSection.vue';
import SignupSection from './sections/SignupSection.vue';
import ServicesSection from './sections/ServicesSection.vue';
import ResultsSection from './sections/ResultsSection.vue';
import FacilitiesSection from './sections/FacilitiesSection.vue';
export default { components: { MissionSection, SignupSection, ServicesSection, ResultsSection, FacilitiesSection } };
</script>

<style lang="scss" scoped>
.main_container {
  background-color: #25292b;
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
}
</style>