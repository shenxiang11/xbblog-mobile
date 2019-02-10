<template>
  <header class="header">
    <img class="logo" src="@/assets/logo.png" />
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped lang="stylus">
.header {
  position: sticky;
  top: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48Px;
  background-color: #fff;
  box-shadow: 0 0 4Px 1Px #ebebeb;

  .logo {
    height: 30Px;
  }
}
</style>
