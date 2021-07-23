<template>
  <form action="">
    <v-text-field
      v-model="searchValue"
      label="Name"
      required
      @input="searchMovie"
    ></v-text-field>
  </form>
</template>

<script>
export default {
  data: () => ({
    searchValue: ""
  }),
  methods: {
    searchMovie() {
      this.$store.commit("SEARCH_DATA", this.searchValue);
    }
  },

  watch: {
    $route(to, from) {
      this.searchValue = ''
    }
  }
};
</script>

<style></style>
