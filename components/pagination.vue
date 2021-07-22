<template>
  <v-row justify="center">
    <v-col cols="8">
      <v-container class="max-width">
        <v-pagination
          v-model="page"
          class="my-4"
          :length="10"
          @input="currentPage"
        ></v-pagination>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      page: 1
    };
  },

  methods: {
    currentPage() {
      this.$store.dispatch("GET_ALL_MOVIES", this.page);
      this.$router.push({ query: { page: this.page } });
    }
  },

  mounted() {
    this.$route.query?.page ? this.page = JSON.parse(this.$route.query?.page) : this.page = 1
  },
};
</script>

<style lang="scss">
  .v-pagination__item--active{
    background: blue !important;
  }
</style>
