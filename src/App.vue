<template>
  <HelloWorld />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from './components/HelloWorld.vue';

@Options({
  components: {
    HelloWorld
  }
})
export default class App extends Vue {}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
