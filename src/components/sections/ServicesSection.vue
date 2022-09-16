<template>
  <section class="services_section">
    <div class="d-flex services_container flex-row justify-content-between">
      <div
        class="card services_card"
        style="width: 18rem"
        v-for="service in services"
        :key="service.name"
      >
        <div class="icon">
          <font-awesome-icon :icon="service.image" class="faw_icon" />
        </div>
        <div class="card-body">
          <h5 class="card-title service_name">{{ service.name }}</h5>
          <img class="text_divider" :src="service.divider" alt="divider" />
          <p class="card-text">
            {{ service.text }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          name: "Strength & Conditioning",
          image: ["fas", "link-slash"],
          divider: require("../../assets/images/divider-x-red.png"),
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue nisl, ornare es volutpat etra us.",
        },
        {
          name: "Fitness & Cardio",
          image: ["fas", "bicycle"],
          divider: require("../../assets/images/divider-x-red.png"),
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue nisl, ornare es volutpat etra us.",
        },
        {
          name: "Flexibility & Rest",
          image: ["fab", "skyatlas"],
          divider: require("../../assets/images/divider-x-red.png"),
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue nisl, ornare es volutpat etra us.",
        },
        {
          name: "Health & Diet",
          image: ["fas", "heart-pulse"],
          divider: require("../../assets/images/divider-x-red.png"),
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue nisl, ornare es volutpat etra us.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.services_section {
  background-image: url(../../assets/images/gym_bkgd_bw-compressor.jpg);
  background-position: center center;
  background-repeat: no-repeat;
}
.service_name {
  margin-top: 20px;
  font-size: 17px;
  font-weight: 600;
  color: white;
  transition: all .5s ease;
}
.services_card {
  background-color: rgba(245, 245, 245, 0);
  color: #ee6059;
  margin-top: 120px;
  margin-bottom: 120px;
  border: none;
}
.services_card:hover {
  .faw_icon {
    animation: pulse-red 2s; /* Animate for 1.5 seconds on hover */
    
  }
  .service_name{
    color:#ee6059
  }
}
.faw_icon {
  height: 40px;
  padding: 20px;
  border: 1px solid salmon;
  border-radius: 50%;
}
.text_divider {
  padding-top: 15px;
  padding-bottom: 15px;
}
.card-text {
  line-height: 30px;
  font-size: 14px;
  color: rgb(145, 145, 145);
  // background-image: url(../../assets/images/divider-x-red.png);
}
.services_container {
  width: 1100px;
  margin: auto;
}

@keyframes pulse-red {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0px rgba(255, 82, 82, 0.7);
  }
  
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 20px rgba(255, 82, 82, 0);
  }
  
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0px rgba(255, 82, 82, 0);
  }
}
</style>