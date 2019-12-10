<template>
  <div class="home">
    <h1>{{ title }}</h1>
    <input type="text" @change="textchange">
    <h2>{{ count }}</h2>
    <button @click="increment">＋</button>
    <button @click="decrement">ー</button>
  </div>
</template>

<script>
export default {
  name: 'home',
  computed: {
    title() {
      return this.$store.state.title;
    },
    count() {
      return this.$store.state.count;
    },
  },
  methods: {
    increment() {
      this.$store.commit('increment');
    },
    decrement() {
      this.$store.commit('decrement');
    },
    textchange(e) {
      this.$store.commit('textchange', e.target.value);
    },
  },
};
</script>
