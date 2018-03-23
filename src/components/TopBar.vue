<template>
<div id="topbar-container">
  <h1>
    <router-link to="/">
      England All-Stars
    </router-link>
  </h1>
  <div id="topbar">
    <router-link to="teams">Teams</router-link>
    <router-link to="players">Player</router-link>
    <router-link to="about">About</router-link>
  </div>
</div>
</template>

<script>
export default {
}
</script>

<style scoped>
h1 {
  text-align: center;
  font-weight: normal;
}

h1 a {
  text-decoration: none;
  color: black;
}

#topbar-container {
  padding-left: 150px;
  padding-right: 150px;
}

#topbar {
  display: flex;
  justify-content: space-around;
}

#topbar a{
  float: left;
  display: block;
  padding: 28px;

  text-decoration: none;
  color: black;
}

</style>
