<template>
  <div class="home">
    <NavBar />
    <swiper
      :autoplay="{ delay: 4000, disableOnInteraction: false }"
      :slides-per-view="1"
      :loop="true"
    >
      <swiper-slide><SwiperContent /></swiper-slide>
      <swiper-slide><SwiperContent /></swiper-slide>
      <swiper-slide><SwiperContent /></swiper-slide>
    </swiper>
    <swiper
      :autoplay="{ delay: 4000, disableOnInteraction: false }"
      :loop="true"
      :breakpoints="SWIPER_BREAKPOINTS"
      :loopFillGroupWithBlank="true"
      class="home__logo-slider"
    >
      <swiper-slide v-for="({url, alt}, index) in LOGO_LINKS" :key="url + index"
        ><Images :url="url" :alt="alt"
      /></swiper-slide>
    </swiper>
    <div class="home__banner">
      <AdBanner
        :title="'<p class=ad-banner__title>Zestaw dla 3 osób</p>'"
        :content="`<p class=ad-banner__content--first>Razem smakuje lepiej! Zamów zestawy obiadowy dla 3 osób już od <span class=ad-banner__content-bg-black>39 zł</span></p>`"
        :image="`dana-devolk-x2cNcfz_xXU-unsplash.png`"
      />

      <AdBanner
        :title="'<p class=ad-banner__title>UberEats</p>'"
        :content="'<p class=ad-banner__content--second>Zamawiaj w aplikacji <span class=ad-banner__content-bg-red>10% taniej.</span> Pobierz aplikację UberEats już dziś.</p>'"
        :image="`aplikacja.png`"
        :icons="icons"
      />
    </div>
  </div>
</template>

<script>
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperContent from "@/components/SwiperContent/SwiperContent.vue";
import NavBar from "@/ui/Molecules/NavBar/NavBar.vue";
import Images from "@/ui/Atoms/Images/Images.vue";
import AdBanner from "@/components/AdBanner/AdBanner.vue";
import { LOGO_LINKS, SWIPER_BREAKPOINTS, BANNER_ICONS } from "@/constants";
// Import Swiper styles
import "swiper/swiper-bundle.css";
SwiperCore.use([Autoplay]);
export default {
  name: "Home",
  components: {
    NavBar,
    Swiper,
    SwiperSlide,
    SwiperContent,
    Images,
    AdBanner,
  },
  data() {
    return {
      LOGO_LINKS,
      SWIPER_BREAKPOINTS,
      icons: BANNER_ICONS
    };
  },
};
</script>
<style lang="scss">
@import "@/ui/Templates/Home/Home.scss";
</style>