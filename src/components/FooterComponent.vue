<template>
  <div class="footer_container">
    <div class="footer_top">
      <div class="card_container row justify-content-between">
        <div
          class="card_footer col-3 d-flex flex-column align-items-start find_us"
        >
          <h5>COME FIND US</h5>
          <h5>12345 North Main Street New York, NY 555555</h5>
          <p>
            Phone: <a href=""><span class="highlight">1.800.555.6789</span></a>
          </p>
          <p>
            Email: <a href=""><span class="highlight">info@your-domain.com</span></a>
          </p>
        </div>
        <div
          class="
            card_footer
            col-3
            d-flex
            flex-column
            align-items-start
            recent_posts
          "
        >
          <h5>RECENT POSTS</h5>
          <ul>
            <li>
              <a href=""> <span class="highlight">> Train with free weights or your body weight?</span></a>
            </li>
            <li>
              <a href=""><span class="highlight">> Nutritional advice that will keep you training</span></a>
            </li>
          </ul>
        </div>
        <div
          class="
            card_footer
            col-3
            d-flex
            flex-column
            align-items-start
            recent_posts
          "
        >
          <h5>OPENING TIMES</h5>
          <h5>Weekdays Monday - Friday</h5>
          <p>09:00 - 19:00</p>
          <h5>Weekends Saturday - Sunday</h5>
          <p>09:00 - 21:00</p>
        </div>
        <div
          class="card_footer col-3 d-flex flex-column align-items-start find_us"
        >
          <img src="../assets/images/gym_ad-compressor.jpg" alt="ad" />
        </div>
      </div>
    </div>
    <div
      class="footer_footer d-flex justify-content-between align-items-center"
    >
      <p>
        © Copyright 2015 | Avada Theme by ThemeFusion | All Rights Reserved |
        Powered by <a href=""><span class="highlight"> Boolean Classe70</span></a>
      </p>
      <div class="icon_container">
        <a id="fbicon" href=""><font-awesome-icon icon="fa-brands fa-facebook-f" /></a>
        <a href=""><font-awesome-icon icon="fa-brands fa-twitter" /></a>
        <a href=""><font-awesome-icon icon="fa-brands fa-instagram" /></a>
        <a href=""><font-awesome-icon icon="fa-brands fa-youtube" /></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
  .highlight{
    transition: color .5s ease;
    &:hover{
    color:#ee6059;
  }
  }
.footer_container {
  background: linear-gradient(180deg, #25292b 70%, #1e2123 30%);
  padding: 90px 0px;
  padding-bottom: 45px;
}
.footer_top {
  width: 1100px;
  margin: auto;
  color: rgb(124, 124, 124);
  img{
    transition: transform .5s ease;
  }
  img:hover{
    transform: scale(1.1);

  }
  
}
ul {
  list-style: none;
}
h5 {
  font-size: 1em;
  text-align: start;
}
p {
  font-size: 15px;
}
.recent_posts {
  li {
    margin-left: -30px;
  }
}
.recent_posts,
.find_us {
  text-align: start;
  a {
    text-decoration: none;
    color: white;
  }
}
.footer_footer {
  width: 1100px;
  margin: auto;
  padding-top: 130px;
  p {
    color: white;
  }
  a {
    text-decoration: none;
    color: white;
  }
}
.icon_container{
  font-size: 16px;
  a{
    padding: 12px;
    background-color: #ee6059;
    margin-inline: 5px;
    border-radius: 2px;
    transition: all .5s ease;
    &:hover{
      background-color: #1E2123;
    }
  }
}
#fbicon{
  padding-inline: 15px;
}
</style>