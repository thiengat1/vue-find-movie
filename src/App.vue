<!--
 * @Description: app
 * @Author: Lewis
 * @Date: 2021-04-19 11:43:51
 * @LastEditTime: 2021-04-24 10:37:41
 * @LastEditors: Lewis
-->
<template>
  <header>
    <h1><span>Vue</span>Movies</h1>
  </header>
  <router-view />
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Fira Sans", sans-serif;
  &::selection {
    background: transparentize(#42b883, 0.5);
  }
}

body {
  background-color: #35495e;
}
a {
  text-decoration: none;
}
header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  background-color: #2c3d4e;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
  h1 {
    color: #fff;
    font-size: 28px;
  }
  span {
    color: #42b883;
  }
}
</style>
