<template>
    <button :class="`button ${className}`">{{name}}</button>
</template>
<script>
export default {
  name: "Button",
    props: {
    name: String,
    className: String
  },
};
</script>
<style lang="scss">
@import "./Button.scss";
</style>