<template>
  <div class="alpha">

    <p class="section-1-header">Our core services</p>


    <div class="section-1">

      <div class="section-1-content">
        <!--        <img src="https://www.interactivebrokers.com/images/web/crd-low-cost.svg" alt="crd-low-cost" class="section-1-content-image">-->
        <img src="@/assets/wealth.png" alt="" class="section-1-content-image">
        <div class="section-1-content-text">
          <p class="section-1-content-text-1">Wealth Management</p>
          <p class="section-1-content-text-2">
            Wealth management involves the expertise of an advisor or advisory team in delivering a wide range of
            financial services and products to affluent clients through a consultative approach.
          </p>
        </div>
      </div>

      <div class="section-1-content">
        <!--        <img src="https://www.interactivebrokers.com/images/web/crd-global-access.svg" alt="crd-low-cost" class="section-1-content-image">-->
        <img src="@/assets/stocks.png" alt="" class="section-1-content-image">
        <div class="section-1-content-text">
          <p class="section-1-content-text-1">Stocks, Bonds & Mutual Funds</p>
          <p class="section-1-content-text-2">
            Although stocks are often perceived as higher-risk investments due to market volatility, they also offer
            the potential for significant returns. Let us help you adeptly manage your portfolio and offer valuable
            financial advice.
          </p>
        </div>
      </div>


      <div class="section-1-content">
        <!--        <img src="https://www.interactivebrokers.com/images/web/crd-vault-icon.svg" alt="crd-low-cost" class="section-1-content-image">-->
        <img src="@/assets/coll.png" alt="" class="section-1-content-image">
        <div class="section-1-content-text">
          <p class="section-1-content-text-1">Retirement & College Savings</p>
          <p class="section-1-content-text-2">
            Attaining financial balance is a crucial element of personal finance. It's essential to understand that
            saving for retirement and saving for college are not mutually exclusive objectives.
          </p>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "core",
  methods: {
    onPostClick() {
      this.$router.push("/register");
    },
  },
}
</script>

<style scoped>
.alpha{
  margin-bottom: 4%;
  padding-top: 2%;
  padding-bottom: 8%;
  background: #fff;
  background: -moz-linear-gradient(180deg,#fff 0,#e2e2e2 100%);
  background: -webkit-linear-gradient(180deg,#fff 0,#e2e2e2 100%);
  background: linear-gradient(180deg,#fff 0,#e2e2e2 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#e2e2e2",GradientType=1);
}
.section-1{
  display: flex;
  margin-right: 3%;
  margin-left: 3%;
  margin-top: 2.5%;
}
.section-1-header{
  text-align: center;
  font-size: 1.7rem;
  font-weight: 300;
  color: #071333;
  /*padding-bottom: 0.3rem;*/
  margin-top: 2.5%;
}
.section-1-content{
  display: block;
  box-shadow: 0 0 12px rgb(0, 147, 218, 0.1);
  background-color: #FFFFFF;
  align-content: center;
  align-items: center;
  margin-left: 3%;
  margin-right: 3%;
  padding: 50px 40px;
}

.section-1-content-text-1{
  font-weight: 600;
  color: #071333;
  margin-top: 0;
  font-size: 17px;
  margin-bottom: 3%;
}
.section-1-content-text-2{
  margin: 0;
  font-size: .9rem;
  color: #818a91;
  width: 90%;
  line-height: 1.4;
  padding-top: 1.5%;
}
.section-1-content-image{
  height: 90px;
  width: 90px;
  object-fit: cover;
  margin-bottom: 3%;
}



.btn{
  margin-top: 3%;
  margin-bottom: 3%;
  color: #124DA8;
  border: 1px solid #124DA8;
  padding: 13px 10px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  width: 10%;
  border-radius: 5px;
}

.btn:hover{
  background-color: #D23535;
  color: #ffff;
  border: 1px solid #D23535;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
  box-shadow: 0 0 5px rgba(20, 49, 89, 0.6);
}

@media (max-width: 1000px) {
  .section-1-content-text-2{
    font-size: .750rem;
    width: 95%;
  }

  .section-1-content-text-1{
    font-size: 16px;
  }
}

@media (max-width: 700px) {
  .section-1{
    display: block;
    margin: 2.5% 2% 2.5% 4%;
  }

  .section-1-content{
    margin-bottom: 4%;
  }

  .section-1-content-text-2{
    font-size: .875rem;
    width: 95%;
  }

  .section-1-content-text-1{
    font-size: 18px;
  }


}

@media (max-width: 500px) {

}
</style>