<template>
  <div
    :style="{ backgroundImage: 'url(' + require(`@/assets/${image}`) + ')' }"
    class="ad-banner"
  >
    <div v-html="title" />
    <div :class="`ad-banner__content ${icons ? 'ad-banner__content--with-icons' : ''}`" v-html="content" />
    <div v-if="icons" class="ad-banner__icons">
      <a class="icon" href="#" v-for="({url, alt}, index) in icons" :key="url + index">
        <Images :url="url" :alt="alt"/>
      </a>
    </div>
    <Button name="Zamów online" className="button--content"/>
  </div>
</template>
<script>
import Images from "@/ui/Atoms/Images/Images.vue";
import Button from "@/ui/Atoms/Button/Button.vue";
export default {
  name: "AdBanner",
  props: {
    title: String,
    content: String,
    icons: Array,
    button: String,
    image: String,
  },
  components: { Images, Button },
};
</script>
<style lang="scss">
@import "./AdBanner.scss";
</style>