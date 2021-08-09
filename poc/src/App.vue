<template>
  <div id="app">
    <h1>Parlamentsdienste Components Library - Icon Issue</h1>
    <pd-icon size="3" name="parlament" />
  </div>
</template>

<script>
import PdIcon from '@lambda-it/parlamentsdienste-component-library'

export default {
  name: 'App',
  components: {
    PdIcon
  }
}
</script>

<style>
html, body, #app {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
