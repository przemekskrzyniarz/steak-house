<template>
  <div class="content">
    <div class="content__title">
      <span class="title-bg">Rabat 10%</span> na pierwsze zamówienie!
    </div>
    <div class="content__title-content">
      Do 20 stycznia złóż zamówienie na stronie i skorzystaj z
      <span class="content__title-content content__title-content--bold"
        >promocji -10%.</span
      >
      Spiesz się, czas trwania promocji do końca lutego.
    </div>
    <Button name="Zamów online" className="button--content" />
    <div class="content__circles">
      <Images v-for="(url, index) in CONTENT_CIRLES" :key="url + index" :url="url" />
    </div>
  </div>
</template>
<script>
import Button from "@/ui/Atoms/Button/Button.vue";
import Images from "@/ui/Atoms/Images/Images.vue";
import { CONTENT_CIRLES } from '@/constants';
export default {
  name: "Content",
  components: { Button, Images },
    data() {
    return {
      CONTENT_CIRLES,
    };
  },
};
</script>
<style lang="scss">
@import "./Content.scss";
</style>