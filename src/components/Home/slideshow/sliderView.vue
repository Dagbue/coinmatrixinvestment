<template>
  <div>
  <div id="slider">
    <div class="arrowLeft" @click="arrowLeft()"></div>
    <Slides :image="images[chosenImage]" />
    <div class="arrowRight" @click="arrowRight()"></div>

  </div>
    <div class="bitcoin">
      <div class="livecoinwatch-widget-5"
           lcw-base="USD"
           lcw-color-tx="#999999"
           lcw-marquee-1="coins"
           lcw-marquee-2="movers"
           lcw-marquee-items="10" >
      </div>
    </div>
  </div>
</template>

<script>
import Slides from "./Slides.vue";
export default {
  name: "sliderView",
  components: {
    Slides,
  },

  data() {
    return {
      images: [
        {
          id: 0,
          url: "https://images.ctfassets.net/fawq95y6n8yp/1dny03bUTsbPHvPYNWHujY/49fb5811800d21ccd0d613583dba8fd4/3163_volatility.jpg?w=1200&h=800&q=85&fm=webp",
          title: "Explore cryptocurrency investment opportunities with seasoned traders.",
          title2: "Experience the power of our mirror trading platform, linking you to proficient cryptocurrency traders. " +
              "Replicate their proven strategies effortlessly and unlock the full potential of your investments.",
          para: "Get started",
          para2: "Login",
        },
        {
          id: 1,
          url: "https://images.ctfassets.net/fawq95y6n8yp/6H6gV92ODblr8YHsz8IYy7/355fbac3cd0a412f396afa596897218d/tick_trading.jpg?w=1100",
          title: "Select from a varied array of proficient traders.",
          title2: "Experience the ease of creating an account on our mirror trading platform, where you can effortlessly " +
              "replicate the strategies of seasoned traders. No prior trading knowledge is necessary.",
          para: "Get started",
          para2: "Login",
        },
        {
          id: 2,
          url: "https://images.ctfassets.net/fawq95y6n8yp/5Gsip42c6Hs9zJqYzUIIim/7bf7490c3fd787cdea88d82d5cb6bc3b/blockchain.png?w=1100",
          title: "Invest confidently by tracking and emulating the strategies of top financial leaders.",
          title2: "Participate in our mirror trading platform to engage with a diverse community of global investors," +
              " where you can exchange investment insights and strategies.",
          para: "Get started",
          para2: "Login",
        },
        {
          id: 3,
          url: "https://images.ctfassets.net/fawq95y6n8yp/3wX4cu2ZR3jo7dx03c7BMz/8391f6de52d87c43b04c9c6947718454/Week_6_DXY.jpg?w=1100",
          title: "Enhance your trading experience with Coin Matrix Investment.",
          title2: "Unprocessed spreads, instantaneous trade signals, and continuous support around the clock.",
          para: "Get started",
          para2: "Login",
        },
      ],
      chosenImage: 0,
      intervalObject: null,
    };
  },
  methods: {
    arrowLeft() {
      clearInterval(this.intervalObject);
      this.moveLeft();
      var self = this;
      this.intervalObject = setInterval(() => {
        self.moveLeft();
      }, 6000);
    },
    arrowRight() {
      clearInterval(this.intervalObject);
      this.moveRight();
      var self = this;
      this.intervalObject = setInterval(() => {
        self.moveRight();
      }, 6000);
    },
    moveLeft() {
      var flag = this.chosenImage;
      flag--;
      if (flag < 0) {
        flag = this.images.length - 1;
      }
      this.chosenImage = flag;
    },
    moveRight() {
      var flag = this.chosenImage;
      flag++;
      if (flag >= this.images.length) {
        flag = 0;
      }
      this.chosenImage = flag;
    },
  },
  created() {
    var self = this;
    this.intervalObject = setInterval(() => {
      self.moveLeft();
    }, 6000);
  },
};
</script>

<style>
#slider {
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  /*margin-top: 0.8%;*/
}
#slider .arrowLeft,
#slider .arrowRight {
  position: absolute;
  top: 50%;
  border: 20px solid transparent;
}
#slider .arrowLeft {
  border-right-color: #676767;
  z-index: 1;
}
#slider .arrowRight {
  right: 0;
  border-left-color: #676767;
}
#slider .squares div {
  height: 20px;
  width: 20px;
  margin-right: 10px;
  display: inline-block;
  background-color: #676767;
  border-radius: 50%;
  background-image: linear-gradient(
      to top, #000 30%, transparent
  );
}
.bitcoin{
  margin-left: 5%;
  margin-right: 5%;
}
@media (max-width: 700px){
  #slider .arrowLeft{
    display: none;
  }
  #slider .arrowRight{
    display: none;
  }
}
</style>
