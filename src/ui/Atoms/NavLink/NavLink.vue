<template>
  <a
    href="#"
    :class="`nav-link ${
      activeName === name || activeUrl === url ? 'nav-link--active' : ''
    }`"
  >
    <Images v-if="url" :class="className" :url="url" />
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
    className: String,
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