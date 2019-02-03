<template>
  <div class="home">
    <h1>Search</h1>
    <SearchForm />
    <SearchResults />
  </div>
</template>

<script>
import SearchForm from '../components/SearchForm.vue';
import SearchResults from '../components/SearchResults.vue';

export default {
  name: 'SearchPage',
  components: {
    SearchForm,
    SearchResults,
  },
  computed: {
    results() {
      return this.$store.state.searchResults;
    },
  },
};
</script>
