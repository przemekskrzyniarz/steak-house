<template>
<div class="swiper-content">
<Content />
<Images url="Bitmapv.png"/>
</div>
</template>
<script>
import Images from '@/ui/Atoms/Images/Images.vue'
import Content from './Content/Content.vue'
export default {
name: "SwiperContent",
components: {
    Images,
    Content
  },
};
</script>
<style lang="scss">
@import "./SwiperContent.scss";
</style>