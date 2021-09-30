<template>
  <header class="nav-bar">
    <div class="nav-bar-container">
      <div class="nav-bar-container__content">
        <div @click="(activeName = ''), (activeUrl = LOGO_URL)">
          <NavLink
            :activeUrl="activeUrl"
            :activeName="activeName"
            :url="LOGO_URL"
          />
        </div>
        <div
          v-for="(name, index) in HEADER_LINK_NAMES"
          :key="name + index"
          @click="(activeName = name), (activeUrl = '')"
        >
          <NavLink
            :name="name"
            :activeName="activeName"
            :activeUrl="activeUrl"
          />
        </div>
      </div>
      <div class="nav-bar-container__content">
        <div
          v-for="({ url, name }, index) in LINKS_WITH_NAME"
          @click="(activeName = name), (activeUrl = url)"
          :key="name + index"
        >
          <NavLink
            :name="name"
            :url="url"
            :activeName="activeName"
            :activeUrl="activeUrl"
            :className="'images--svg'"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import NavLink from "@/ui/Atoms/NavLink/NavLink.vue";
import { LINKS_WITH_NAME, HEADER_LINK_NAMES, LOGO_URL } from "@/constants";

export default {
  name: "NavBar",
  components: {
    NavLink,
  },
  data() {
    return {
      activeName: "",
      activeUrl: "",
      LINKS_WITH_NAME,
      HEADER_LINK_NAMES,
      LOGO_URL,
    };
  },
};
</script>
<style lang="scss">
@import "./NavBar.scss";
</style>