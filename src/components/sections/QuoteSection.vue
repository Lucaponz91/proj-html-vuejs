<template>
  <section class="quote_section">
    <div class="quote">
      <p>
        “ I fear not the man who has practiced 10,000 kicks once, but I fear the
        man who has practiced one kick 10,000 times ”
      </p>
      <h3>BRUCE LEE • QUOTE OF THE DAY</h3>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
    .quote_section{
        position: relative;
        background-image: url('../../assets/images/home-testimonial-bg.jpg');
        height: 562px;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
        color: white;
        margin-top: 165px;
 

    }
    // .quote_section::before{
    //     content: '';
    // position: absolute;
    // top: 0;
    // left: 0;
    // right: 0;
    // bottom: 0;
    // display: block;
    // background: url('../../assets/images/home-testimonial-bg.jpg') top center;
    // background-size: cover;
    // transform: translateZ(-0.5px) scale(1.6);
    // z-index: -1;
    // }
    .quote{
        width: 1100px;
        margin: auto;
        padding-top: 165px;
        p{
            font-size: 28px;
            margin-bottom: 78px;
        }
        h3{
            font-size: 1.40em;
            font-weight: 600;
        }
        
    }

</style>