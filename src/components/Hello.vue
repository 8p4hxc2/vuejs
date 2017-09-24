<template>
<div class="hello">
  <h1>{{ msg }}</h1>
  <h2>Essential Links</h2>
  <div>{{count}}</div>
  <div v-on:click="clickButton()" class="omg">Click</div>
  <input v-model="count" />
  <ul><li>hehe</li></ul>
</div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      hehe: 55
    }
  },
  computed: {
    count: {
      get() {
        return this.$store.state.count
      },
      set(value) {
        this.$store.dispatch("setCount", value)
      }
    }
  },
  methods: {
    clickButton: function(event) {
      this.$store.dispatch('increment')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.omg
{
  cursor:pointer;
  user-select: none;
}
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
  li {
    display: inline-block;
    margin: 0 10px;
    color:yellow;
  }
}

a {
  color: #42b983;
}
</style>
