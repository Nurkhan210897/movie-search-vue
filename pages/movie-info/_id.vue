<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col cols="12" sm="6">
        <div class="movie_image">
          <v-img
            :lazy-src="movie.Poster"
            max-height="100%"
            max-width="100%"
            :src="movie.Poster"
          ></v-img>
        </div>
      </v-col>
      <v-col cols="12" sm="6">
        <div class="movie_info">
          <ul>
            <li>
              Title: <span class="b_text">{{ movie.Title }}</span>
            </li>
            <li>
              Year: <span class="b_text">{{ movie.Year }}</span>
            </li>
            <li>
              imdbRating: <span class="b_text">{{ movie.imdbRating }}</span>
            </li>
            <li>
              Actors: <span class="b_text">{{ movie.Actors }}</span>
            </li>
            <li>
              Awards: <span class="b_text">{{ movie.Awards }}</span>
            </li>
            <li>
              BoxOffice: <span class="b_text">{{ movie.BoxOffice }}</span>
            </li>
            <li>
              Country: <span class="b_text">{{ movie.Country }}</span>
            </li>
            <li>
              Language: <span class="b_text">{{ movie.Language }}</span>
            </li>
            <li>
              Plot: <span class="b_text">{{ movie.Plot }}</span>
            </li>
            <li>
              Runtime: <span class="b_text">{{ movie.Runtime }}</span>
            </li>
          </ul>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  async asyncData({ params }) {
    const movieId = params.id;
    const movie = await fetch(
      `http://www.omdbapi.com/?i=${movieId}&apikey=4ed03e49`
    ).then(res => res.json());
    return { movie };
  },

  mounted() {
    fetch(
      `http://www.omdbapi.com/?i=${this.$route.params.id}&apikey=4ed03e49`
    ).then(res => res.json());
  }
};
</script>

<style lang="scss">
.b_text {
  font-weight: bold;
}
.movie_info {
  padding: 20px;
  ul {
    padding: 0;
    margin: 0;
    li {
      list-style-type: none;
      margin-bottom: 10px;
      font-size: 17px;
    }
  }
}
</style>
