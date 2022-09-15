<template>
  <section class="results">
    <div class="results_container">
      <h1>REAL WORLD RESULTS</h1>
      <div class="divider_container">
        <img src="../../assets/images/divider-xx-red.png" alt="divider" />
      </div>
      <div class="cards_container">
        <div class="row">
          <div class="col-sm-6 " v-for="result in results" :key="result.name">
            <div class="card card_results">
              <div class="row card-body">
                <img
                  class="col-sm-6"
                  :src="result.img"
                  alt="rev"
                />
                <div class="col-sm-6">
                  <p class="card-text"><em>
                    “{{result.text}}”</em>
                  </p>
                  <h5 class="card-title">- {{result.name}}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    data(){
        return{
            results : [{
                img: require("../../assets/images/review_1-compressor.jpg"),
                name: 'Tara Smith',
                text: '“The trainers at Avada Gym have helped me reach my fitness goals beyond anything I could of hoped for. I love it!”'
            },
            {
                img: require("../../assets/images/review_3-compressor-2.jpg"),
                name: 'Simon Chel',
                text: '“The atmosphere at Avada Gym is amazing, the people are even better. All in all, it is a great place to work out.”'
            },{
                img: require("../../assets/images/review_2-compressor.jpg"),
                name: 'Jen Wirth',
                text: '“The facilities at Avada Gym stood out to me the most. They are well maintained and have high quality equipment.”'
            },
            {
                img: require("../../assets/images/review_4-compressor-2.jpg"),
                name: 'Jeff Glum',
                text: '“No bad things to say about Avada Gym, they are top notch at every corner and truly take care of their customers.”'
            }]
        }
    }
};
</script>

<style lang="scss" scoped>
    h1{
        color: white;
        font-weight: 700;
    }
.results {
  background-color: #25292b;
  padding-bottom: 250px;
  .results_container {
    width: 1100px;
    margin: auto;
    margin-top: 125px;
  }
}
.card_results{
    padding: 15px;
    margin: 20px;
    background-color: #1E2123;
    border-radius: 0%;
    img{
        width: 150px;
        aspect-ratio: 150/150;
        padding: 0;
    }
    p{
        color: rgb(124, 124, 124);
        font-size: 14px;
    }
    h5{
        color: rgb(124, 124, 124);
    }
}
</style>