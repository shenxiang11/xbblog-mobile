<template>
  <div>
    <div class="placeholder"></div>
    <footer class="footer">
      <router-link to="/blog" class="menu">
        <i class="iconfont icon-daima" />
        <span class="menu-text">博客</span>
      </router-link>
      <router-link to="/guestbook" class="menu">
        <i class="iconfont icon-pinglun" />
        <span class="menu-text">留言</span>
      </router-link>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped lang="stylus">
.placeholder {
  height: 48Px;
}
.footer {
  position: fixed;
  bottom: 0;
  z-index: 2;
  background-color: #fff;
  box-shadow: 0 0 4Px 1Px #ebebeb;
  height: 48Px;
  width: 100%;
  display: flex;
  .menu {
    width: 0;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #999;
    &.router-link-active {
      color: #222;
    }
    .menu-text {
      font-size: 12Px;
      margin-top: 6Px;
    }
  }
}
</style>
