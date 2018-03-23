<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

body {
  font-family: 'Open Sans', sans-serif;
  background: #f5f5f5;
}
.half-highlight {
    background-image: linear-gradient(to right, transparent 50%, #e2fc1b 50%);
    background-origin: 0;
    background-size: 200% 20%;
    background-repeat: repeat-x;
    background-position: 0 100%;
    transition: background-position 0.5s;
}

.half-highlight:hover {
  background-position: -100% 100%;
}
</style>
