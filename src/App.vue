<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import Terminal from './components/Terminal.vue'
</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->

  <div class="min-h-screen flex flex-col bg-zinc-900">
      <div class="relative container mx-auto max-w-5xl flex-grow">
        <Terminal></Terminal>
      </div>
  </div>

  <!-- <div class="absolute inset-0 flex justify-center items-center bg-zinc-600">
      <div class="flex flex-col w-full max-w-5xl h-96 bg-zinc-800 overflow-hidden shadow-xl rounded-lg">
          <div class="relative">
              <div class="absolute left-2 inset-y-0 flex items-center gap-1.5">
                  <div class="h-3 w-3 rounded-full bg-red-500">&nbsp;</div>
                  <div class="h-3 w-3 rounded-full bg-yellow-500">&nbsp;</div>
                  <div class="h-3 w-3 rounded-full bg-green-500">&nbsp;</div>
              </div>
              <div class="font-semibold text-white">connoreaves.com</div>
          </div>

          <div class="flex-grow relative overflow-hidden">
              <Terminal/>
          </div>
      </div>
  </div> -->

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
