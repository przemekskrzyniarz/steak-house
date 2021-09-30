<template>
  <img :class="`images${className || ''}`" :src="require(`@/assets/${url}`)" :alt="alt"/>
</template>

<script>
export default {
  name: "Image",
  props: {
    url: String,
    className: String,
    alt: String
  },
};
</script>
<style lang="scss">
@import "./Images.scss";
</style>