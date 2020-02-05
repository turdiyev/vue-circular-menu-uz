<template>
  <nav class="circular-menu">
    <div class="circle">
      <a href class="fa fa-home fa-2x"></a>
      <a href class="fa fa-facebook fa-2x"></a>
      <a href class="fa fa-twitter fa-2x"></a>
      <a href class="fa fa-linkedin fa-2x"></a>
      <a href class="fa fa-github fa-2x"></a>
      <a href class="fa fa-rss fa-2x"></a>
      <a href class="fa fa-pinterest fa-2x"></a>
      <a href class="fa fa-asterisk fa-2x"></a>
    </div>

    <a href="#" ref="menuButton" class="menu-button fa fa-bars fa-2x"></a>
  </nav>
</template>

<script>
export default {
  data: () => {},
  mounted() {
    const items = document.querySelectorAll(".circle a");

    for (var i = 0, l = items.length; i < l; i++) {
      items[i].style.left =
        (
          50 -
          35 * Math.cos(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)
        ).toFixed(4) + "%";

      items[i].style.top =
        (
          50 +
          35 * Math.sin(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)
        ).toFixed(4) + "%";
    }

    document.querySelector(".menu-button").onclick = function(e) {
      e.preventDefault();
      document.querySelector(".circle").classList.toggle("open");
    };
  }
};
</script>

<style scoped>
@import "https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css";

.circular-menu {
  width: 250px;
  height: 250px;
  margin: 0 auto;
  position: relative;
}

.circle {
  width: 250px;
  height: 250px;
  opacity: 0;
  border: 1px solid;
  border-radius: 50%;
  -webkit-transform: scale(0);
  -moz-transform: scale(0);
  transform: scale(0);
  -webkit-transition: all 0.4s ease-out;
  -moz-transition: all 0.4s ease-out;
  transition: all 0.4s ease-out;
}

.open.circle {
  opacity: 1;
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  transform: scale(1);
}

.circle a {
  text-decoration: none;
  /* color: white; */
  display: block;
  height: 40px;
  width: 40px;
  line-height: 40px;
  margin-left: -20px;
  margin-top: -20px;
  position: absolute;
  text-align: center;
}

.circle a:hover {
  color: #eef;
}

.menu-button {
  position: absolute;
  top: calc(50% - 30px);
  left: calc(50% - 30px);
  text-decoration: none;
  text-align: center;
  color: #444;
  border-radius: 50%;
  display: block;
  height: 40px;
  width: 40px;
  line-height: 40px;
  padding: 10px;
  background: #dde;
}

.menu-button:hover {
  background-color: #eef;
}
</style>