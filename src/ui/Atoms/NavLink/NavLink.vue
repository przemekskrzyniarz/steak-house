<template>
  <a
    href="#"
    :class="`nav-link ${logoClass || ''} ${
      activeName === name || activeUrl === url ? 'nav-link--active' : ''
    }`"
  >
    <Images v-if="url" :class="className" :url="url" :alt="alt"/>
    <span v-if="name" class="nav-link__title">{{ name }}</span>
  </a>
</template>

<script>
import Images from "../Images/Images.vue";
export default {
  name: "NavLink",
  props: {
    url: String,
    name: String,
    alt: String,
    className: String,
    logoClass: String,
    activeName: String,
    activeUrl: String,
  },
  components: {
    Images,
  },
};
</script>
<style lang="scss">
@import "./NavLink.scss";
</style>