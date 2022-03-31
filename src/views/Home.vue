<!--
 * @Descripttion:
 * @version:
 * @Author: chunwen
 * @Date: 2021-11-02 14:59:56
 * @LastEditors:
 * @LastEditTime: 2021-11-02 15:06:37
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App 1111111"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
};
</script>
