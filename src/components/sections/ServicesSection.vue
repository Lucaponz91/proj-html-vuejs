<template>
  <section class="services_section">
    <div
      class="card"
      style="width: 18rem"
      v-for="service in services"
      :key="service.name"
    >
      <div class="icon"></div>
      <font-awesome-icon :icon="service.image" />
      <div class="card-body">
        <h5 class="card-title">{{ service.name }}</h5>
        <p class="card-text">
          {{ service.text }}
        </p>
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
          divider: "../../assets/images/divider-x-red.png",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue nisl, ornare es volutpat etra us.",
        },
        {
          name: "Fitness & Cardio",
          image: ["fas", "bicycle"],
          divider: "../../assets/images/divider-x-red.png",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue nisl, ornare es volutpat etra us.",
        },
        {
          name: "Flexibility & Rest",
          image: ["fab", "skyatlas"],
          divider: "../../assets/images/divider-x-red.png",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue nisl, ornare es volutpat etra us.",
        },
        {
          name: "Health & Diet",
          image: ["fas", "heart-pulse"],
          divider: "../../assets/images/divider-x-red.png",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue nisl, ornare es volutpat etra us.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.card-text {
  // background-image: url(../../assets/images/divider-x-red.png);
}
</style>