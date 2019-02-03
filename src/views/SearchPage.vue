<template>
  <div class="home">
    <h1>Search</h1>
    <SearchForm />
    <ul>
      <li
        v-for="result in results"
        :key="result.id"
      >
        {{ result.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import SearchForm from '../components/SearchForm.vue';

export default {
  name: 'SearchPage',
  components: {
    SearchForm,
  },
  computed: {
    results() {
      return this.$store.state.searchResults;
    },
  },
};
</script>
