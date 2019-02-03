<template>
  <form
    class="is-loading"
    @submit.prevent="search"
  >
    <input
      type="search"
      :disabled="isLoading"
      name="query"
    >
    <button
      :disabled="isLoading"
      @click="search"
    >
      Search
    </button>
  </form>
</template>

<script>
export default {
  name: 'SearchForm',
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    },
  },
  methods: {
    search(event) {
      if (event.target.query) {
        this.$store.commit('setLoading', true);
        this.$store.dispatch('doSearch', event.target.query.value).then(() => {
          this.$store.commit('setLoading', false);
        });
      }
    },
  },
};
</script>
