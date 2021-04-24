<!--
 * @Description:movie detail
 * @Author: Lewis
 * @Date: 2021-04-20 00:08:06
 * @LastEditTime: 2021-04-20 14:14:53
 * @LastEditors: Lewis
-->
<template>
  <div class="movie-detail">
    <h2>{{ movie.Title }}</h2>
    <p>{{ movie.Year }}</p>
    <img :src="movie.Poster" alt="Movie Poster" class="featured-image" />
    <p>{{ movie.Plot }}</p>
  </div>
</template>

<script>
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import env from "@/env.js";
export default {
  name: "MovieDetail",
  setup() {
    const movie = ref({});
    const route = useRoute();

    onBeforeMount(() => {
      fetch(
        `http://www.omdbapi.com/?i=${route.params.id}&apikey=${env.apiKey}&pilot=full`
      )
        .then((res) => res.json())
        .then((data) => {
          movie.value = data;
        });
    });

    return {
      movie,
      route,
    };
  },
};
</script>

<style lang="scss" scoped>
.movie-detail {
  padding: 16px;
  h2 {
    color: #fff;
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 16px;
  }
  .featured-image {
    display: block;
    max-width: 200px;
    margin-bottom: 16px;
  }
  p {
    color: #fff;
    font-size: 18px;
    line-height: 1.4;
  }
}
</style>
