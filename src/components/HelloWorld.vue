<template>
  <div class="hello">
<!--    {{ this.$store.state.count}}-->
    {{count}}
   <button @click="add">+2</button>


    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{todo.text}}
      </li>
    </ul>


    <ul>
      <li v-for="todo in doneTodos" :key="todo.id">
        {{todo.text}}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState,mapGetters } from 'vuex'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  // computed :{
  //   count(){
  //     return this.$store.state.count
  //   }
  // },
  computed: {

    ...mapState([
      // 映射 this.count 为 store.state.count
      'count',

      'todos'
    ]),
    //过滤用
    ...mapGetters([
      // 把 `this.doneTodos` 映射为 `this.$store.getters.doneTodos`
      'doneTodos'
    ])
  },



  methods:{

    add(){
      this.$store.commit("increment",2)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
