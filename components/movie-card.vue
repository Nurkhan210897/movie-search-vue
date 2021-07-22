<template>
  <v-skeleton-loader type="article, actions">
    <md-card>
      <nuxt-link :to="`/movie-info/${movie.imdbID}`">
        <v-card class="mx-auto" max-width="400">
          <v-img
            class="white--text align-end"
            height="200px"
            :src="movie.Poster"
          >
          </v-img>
          <v-card-text class="text--primary">
            <div>{{ movie.Title }}</div>
          </v-card-text>
        </v-card>
      </nuxt-link>
    </md-card>
  </v-skeleton-loader>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true,
      default: {}
    }
  }
};
</script>

<style></style>
