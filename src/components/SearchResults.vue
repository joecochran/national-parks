<template>
  <div>
    <details
      v-for="result in results"
      :key="result.id"
    >
      <summary>{{ result.name }}</summary>
      <dl>
        <dt>Description</dt>
        <dd>{{ result.description }}</dd>
      </dl>
    </details>
  </div>
</template>

<script>
export default {
  name: 'SearchResult',
  computed: {
    results() {
      return this.$store.state.searchResults;
    },
  },
};
</script>
