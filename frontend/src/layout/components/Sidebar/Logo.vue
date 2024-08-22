<template>
  <div class="sidebar-logo-container" :class="{ collapse: collapse }">
    <transition name="sidebarLogoFade">
      <img src="../../../../public/logo.png" class="nkusidebar-logo" />
    </transition>
  </div>
</template>

<script>
export default {
  name: "SidebarLogo",
  props: {
    collapse: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.sidebar-logo-container {
  position: relative;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: #002140;
  text-align: center;
  overflow: hidden;
  .nkusidebar-logo {
    width: 160px;
    margin-top: -5px;
  }
}
</style>
