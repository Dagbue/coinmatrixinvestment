<template>
  <div class="alpha">
    <div class="the-footer">

<!--      <bitcoin-prices/>-->
      <div class="livecoinwatch-widget-5" lcw-base="USD" lcw-color-tx="#999999" lcw-marquee-1="coins" lcw-marquee-2="movers" lcw-marquee-items="10" ></div>

      <div class="bottom">
        <div class="logo-container">
          <!--        <img src="@/assets/companylogo.svg" alt="logo" class="footer-img" />-->

          <div class="footer-link-container">
            <h3 class="footer-title">About Us</h3>
            <p class="footer-link width">
              Founded on September 7, 2018, Coin Matrix Investment is headquartered at 3902 W VALLEY #206 AUBURN DC, WASHINGTON,
              WA 98001, and holds official registration under company number 11557864. Renowned as a trusted and forward-thinking
              digital asset trading platform, our company caters to a global clientele, utilizing the cutting-edge technology of
              Bittrex. We take pride in delivering a secure and reliable platform that offers advanced solutions across various
              financial domains, including Financial Administration, Risk Management, Investment Services, and Return Provisioning.
              Our overarching mission is to empower our international customers with state-of-the-art tools and expertise,
              facilitating successful crypto trading and financial management.
            </p>
          </div>

          <div class="footer-link-container2">
            <h3 class="footer-title">Links</h3>
            <a  class="footer-link" @click="onPostClick">Home</a>
            <a  class="footer-link" @click="onPostClick2">Login</a>
            <a  class="footer-link" @click="onPostClick3">Register</a>
            <a  class="footer-link" @click="onPostClick4">F.A.Q</a>
            <a  class="footer-link" @click="onPostClick5">Contacts</a>
<!--            <a href="https://find-and-update.company-information.service.gov.uk/company/11557864" class="footer-link">Certifications</a>-->
          </div>

          <div class=" stay-connected">
            <h3 class="footer-title">Stay connected</h3>
            <div class="socials-container">
              <div class="social-logo">
                <div class="last-div">
                  <i class='bx bxs-phone' ></i>
                  <p class="last-div-para"><a href="https://wa.me/15614370598?text="  target="_blank">+1 (561) 437-0598</a></p>
                </div>
              </div>
              <div class="social-logo">
                <div class="last-div">
                  <i class='bx bxs-phone' ></i>
                  <p class="last-div-para"><a href="https://wa.me/15614370598?text="  target="_blank">+1 (352) 219-5904</a></p>
                </div>
              </div>
              <div class="social-logo">
                <div class="last-div">
                  <i class='bx bxs-map' ></i>
                  <p class="last-div-para">3902 W VALLEY #206 AUBURN DC, WASHINGTON, WA 98001</p>
                </div>
              </div>
              <div class="social-logo">
                <div class="last-div">
                  <i class='bx bx-mail-send' style='color:#ffffff'></i>
                  <p class="last-div-para"><a href="mailto:support@coinmatrixinvestment.com">support@coinmatrixinvestment.com</a></p>
                </div>
              </div>
            </div>
            <div class="social">
<!--              <div class="social-part-1">-->
<!--                <i class='bx bxl-facebook'></i>-->
<!--                <i class='bx bxl-twitter' ></i>-->
<!--                <i class='bx bxl-instagram' ></i>-->
<!--                <i class='bx bxl-youtube' ></i>-->
<!--              </div>-->
              <img src="@/assets/google-play.svg" alt="" class="google" />
            </div>
          </div>
        </div>
      </div>
      <hr/>
      <div class="copyright">
        <p>Coin Matrix Investment Trading LLC is part of Coin Matrix Investment.com Group of companies with broker entities
          that are authorised and regulated across multiple jurisdictions. Coin Matrix Investment.com Trading LLC has it's
          business address at United States.</p>
        <br/>
        <p>The objects of the Company are all subject matters not forbidden by International Business Companies
          (Amendment and Consolidation) Act, Chapter 149 of the Revised Laws of Saint Vincent and Grenadines,
          2009, in particular but not exclusively all commercial, financial, lending, borrowing, trading,
          service activities and the participation in other enterprises as well as to provide brokerage,
          training and managed account services in currencies, commodities, indexes, CFDs and leveraged financial
          instruments.</p>
      </div>
      <div class="section-part">

        <a href="">
          <img src="@/assets/bankwire.svg" />
        </a>

        <a href="">
          <img src="https://primexbt.com/_next/static/media/crystal.ce2c822d.svg" class="footer-partner" />
        </a>

        <a href="">
          <img src="https://primexbt.com/_next/static/media/devexperts.d29d2c72.svg" class="footer-partner"  />
        </a>

        <a href="">
          <img src="https://primexbt.com/_next/static/media/baksta.ccf05afe.svg" class="footer-partner"  />
        </a>

        <a href="">
          <img src="https://primexbt.com/_next/static/media/fireblocks.64d070a3.svg" class="footer-partner" />
        </a>


      </div>
      <div class="copyright">
        <p>CMI Markets is, depending on the context, a reference to CMI Markets Germany GmbH, CMI Markets UK plc or
          CMI Spreadbet plc. CMI Markets Germany GmbH is a company licensed and regulated by the Bundesanstalt für Finanzdienstleistungsaufsicht (BaFin) under registration number 154814. CMI Markets UK Plc and CMI Spreadbet plc are registered in the Register of Companies of the Financial Conduct Authority under registration numbers 173730 and 170627.</p>
        <br/>
        <p>Telephone calls and online chat conversations may be recorded and monitored. Apple, iPad, and iPhone
          are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of
          Apple Inc. Android is a trademark of Google Inc. This website uses cookies to obtain information about your
          general internet usage. Removal of cookies may affect the operation of certain parts of this website.
          Learn about cookies and how to remove them. Portions of this page are reproduced from work created and
          shared by Google and used according to terms described in the Creative Commons 3.0 Attribution License.</p>
      </div>
      <hr/>
      <div class="copyright">
        <p>All rights reserved. Copyright © 2024</p>
      </div>
    </div>
  </div>
</template>

<script>

// import BitcoinPrices from "@/components/baseComponents/bitcoinPrices.vue";

export default {
  name: 'footerHome',
  // components: {BitcoinPrices},
  methods: {
    onPostClick() {
      this.$router.push("/");
      window.scrollTo(0, 0);
    },
    onPostClick2() {
      this.$router.push("/login");
      window.scrollTo(0, 0);
    },
    onPostClick3() {
      this.$router.push("/register");
      window.scrollTo(0, 0);
    },
    onPostClick4() {
      this.$router.push("/faq");
      window.scrollTo(0, 0);
    },
    onPostClick5() {
      this.$router.push("/contact");
      window.scrollTo(0, 0);
    },
  },
  mounted() {
    let externalScript = document.createElement('script')
    externalScript.setAttribute('src', "https://www.livecoinwatch.com/static/lcw-widget.js")
    document.head.appendChild(externalScript)
  },
}
</script>

<style scoped>
.the-footer {
  background: #0f171c;
  color: #ccc;
  padding: 1.5vh  1vh;
  margin-top: 3%;
}

.logo-container {
  display: flex;
  justify-content: space-between;
  margin-left: 7%;
  margin-right: 7%;
  padding-top: 1%;
}

.footer-title {
  font-size: 20px;
  line-height: 20px;
}

.footer-link {
  display: block;
  font-size: 16px;
  line-height: 25px;
  opacity: 0.8;
  padding-top: 10px;
  color: #ffffff;
}

.bottom{
  margin-top: 2%;
}

.footer-link-container {
  /*margin-left: 5%;*/
  /*margin-right: 5%;*/
  width: 40%;
}

.footer-link-container2{
  /*padding-right: 5%;*/
}
.stay-connected{

}
.socials-container {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding-top: 20px;
  width: 100%;
}

hr {
  color: #ffffff;
  width: 100%;
  background-color: #ffffff;
  border: 0.5px solid #ffffff;
  opacity: 0.2;
  margin-top: 20px;
  margin-bottom: 20px;
}

.copyright {
  font-size: 13px;
  line-height: 19px;
  opacity: 0.75;
  margin-top: 10px;
  padding-bottom: 0;
  margin-bottom: 0;
  color: #ffffff;
  font-weight: 900;
  width: 65%;
  margin-left: 5%;
}
.footer-img {
  width: 22%;
}
a {
  text-decoration: none;
  color: #ffffff;
  transition: ease 0.3s;
}
a:hover{
  color: #ffffff;
  font-weight: 700;
}

.bit{
  margin-bottom: 25px;
}
.bx {
  font-size: 27px;
}
.bx-mail-send{
}
.last-div{
  display: flex;
  margin-bottom: 15px;
}
.last-div-para{
  font-size: 15px;
  padding-left: 10px;
  line-height: 1.3;
  color: #ffffff;
  width: 80%;
}
.footer-title{
  color: #ffffff;
  /*font-size: 30px;*/
  font-weight: bold;
}

.google{
  width: 45%;
  margin-left: 2%;
  margin-top: 3%;
}

.social-part-1 i {
  padding-right: 10px;
  margin-top: 1%;
}

img{
  width: 85%;
  padding-right: 20px;
}

a{
  width: 100%;
}

.section-part{
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding-top: 30px;
  padding-bottom: 15px;
  padding-left: 2%;
  background: #393939;
  margin-top: 2%;
  margin-bottom: 1.5%;
}

.footer-partner{
  width: 55%;
}


@media (max-width: 990px) {
  .footer-link-container {
    margin-left: 2%;
    margin-right: 3%;
    width: 80%;
  }
}
@media (max-width: 760px) {
  .bottom {
    display: block;
    align-content: center;
    text-align: center;
  }
  .footer-container {
    display: block;
    align-content: center;
    text-align: center;
  }
  .the-footer {
    margin-top: unset;
  }
  .footer-img {
    width: 50%;
    min-width: unset;
    border-radius: 20px;
    margin-bottom: 20px;
  }
  .footer-link-container {
    margin-left: unset;
    margin-right: unset;
    width: unset;

    margin-top: 3%;
  }
  .footer-link-container2 {
    margin-bottom: 10%;
    margin-top: 10%;
  }
  .last-div{
    margin-right: 10%;
    margin-bottom: unset;
  }
  .copyright{
    font-size: 17px;
  }

  .footer-partner{
    width: 35%;
  }
}
@media (max-width: 700px) {
  .last-div-para{
    text-align: left;
  }
  img{
    width: 100%;
    padding-bottom: 6%;
    padding-right: 20px;
  }
  h1{
    font-size: 25px;
  }
  .footer-link-container {
    margin-left: unset;
    margin-right: unset;
    width: unset;
  }
  .footer-link {
    display: block;
    font-size: 16px;
  }
  .footer-title {
    font-size: 21px;
    padding-bottom: unset;
  }

  .footer-img {
    width: 50%;
    display: block;
    margin-right: auto;
    margin-left: auto;
  }
  .copyright {
    font-size: 13px;
    opacity: 0.8;
    width: 90%;
  }
  .bx{
    font-size: 25px;
  }
  .last-div-para{
    font-size: 16px;
    padding-left: 8px;
  }
  .logo-container {
    display: flex;
    flex-direction: column;
    padding-top: 2%;
  }
  .google{
    width: 45%;
  }

}
@media (max-width: 500px) {
  .copyright{
    font-size: 12px;
  }
  img{
    width: 42%;
    display: block;
    margin-right: auto;
    margin-left: auto;
    padding-bottom: 6%;
  }

  .section-part{
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-left: unset;

  }
}
</style>