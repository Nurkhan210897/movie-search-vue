<template>
  <v-container v-cloak>
    <search/>
    <v-row>
      <v-col cols="3" sm="4" v-for="(movie, index) in allMovies" :key="index">
        <v-skeleton-loader class="mx-auto" type="card" :loading="show">
          <movie-card :movie="movie" />
        </v-skeleton-loader>
      </v-col>
    </v-row>
    <pagination v-if="allMovies.length"/>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    show: true
  }),
  computed: {
    allMovies() {
      if(this.$store.getters.searchData.length){
        return this.$store.getters.searchData;
      }else{
        return this.$store.getters.allMovies;
      }
    }
  },

  async mounted() {
    let currentPage = this.$route.query?.page
      ? JSON.parse(this.$route.query?.page)
      : 1;
    await this.$store.dispatch("GET_ALL_MOVIES", currentPage);
    this.show = false;
  }
};
</script>


<style lang="scss">
  [v-cloak]{
    display: none;
  }
</style>
