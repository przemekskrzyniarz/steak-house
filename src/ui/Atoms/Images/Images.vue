<template>
  <img :class="`images${className || ''}`" :src="require(`@/assets/${url}`)" />
</template>

<script>
export default {
  name: "Image",
  props: {
    url: String,
    className: String,
  },
};
</script>
<style lang="scss">
@import "./Images.scss";
</style>