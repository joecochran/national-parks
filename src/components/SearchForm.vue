<template>
  <form
    class="is-loading"
    @submit.prevent="search"
  >
    <label for="state">
      <span>State</span>
      <input
        id="state"
        type="search"
        :disabled="isLoading"
        name="state"
        list="states"
        maxlength="2"
      >
    </label>
    <datalist id="states">
      <option
        v-for="state in states"
        :key="state"
        :value="state"
      />
    </datalist>
    <button
      :disabled="isLoading"
    >
      Search
    </button>
  </form>
</template>

<script>
import states from '../util/states';

export default {
  name: 'SearchForm',
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    },
    states() {
      return states;
    },
  },
  methods: {
    search(event) {
      if (event.target.state) {
        this.$store.commit('setLoading', true);
        this.$store.dispatch('doSearch', event.target.state.value).then(() => {
          this.$store.commit('setLoading', false);
        });
      }
    },
  },
};
</script>
