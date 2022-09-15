<template>
  <section class="facilities_section">
    <div class="facilities_container">
      <h1>HIGH PERFORMANCE FACILITIES</h1>
      <div class="divider_container">
        <img src="../../assets/images/divider-xx-red.png" alt="divider" />
      </div>
      <div class="img_container ">
        <div class="bg-image hover zoom col-4 img-fluid">
          <img src="../../assets/images/home-image1.jpg" class="" />
        </div>

        <div class="bg-image hover-zoom col-4 img-fluid">
          <img src="../../assets/images/home-image2.jpg" class="" />
        </div>

        <div class="bg-image hover-zoom col-4 img-fluid">
          <img src="../../assets/images/home-image3.jpg" class="" />
        </div>

        <div class="bg-image hover-zoom col-4 img-fluid">
          <img src="../../assets/images/home-image4.jpg" class="" />
        </div>

        <div class="bg-image hover-zoom col-4 img-fluid">
          <img src="../../assets/images/home-image54.jpg" class="" />
        </div>

        <div class="bg-image hover-zoom col-4 img-fluid">
          <img src="../../assets/images/home-image6.jpg" class="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.facilities_section {
  background-color: #25292b;
  margin: auto;
  .facilities_container{
    width: 1100px;
    margin: auto;
    h1{
        color: white;
        font-weight: 700;
    }
  }
}
.divider_container{
    margin-top: 45px;
    margin-bottom: 50px;
}
.img_container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: auto;
  row-gap: 42px;
  transition: transform 0.4s ease;
  :hover{
    transform: scale(1.05);
    transition: transform 0.4s ease;
    box-shadow: 0 4px 6px 0 rgba(22, 22, 26, 0.18);

  }
  img{
    width: 325px;
  }
}
</style>