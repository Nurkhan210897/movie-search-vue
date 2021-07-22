<template>
  <form action="">
    <v-text-field v-model="value" label="Name" required @input="searchMovie"></v-text-field>
  </form>
</template>

<script>
export default {
  data: () => ({
    value: ""
  }),
  methods: {
    searchMovie() {
      this.$store.commit('SEARCH_DATA', this.value)
    }
  }
};
</script>

<style></style>
