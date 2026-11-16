<template>
  <header>
    <h1>EXPOTEC</h1>
    <nav>
        <ol>
            <li><router-link to="/">Início</router-link></li>
            <li><router-link to="/organizazao">Organização</router-link></li>
            <li><router-link to="/contato">Contato</router-link></li>
        </ol>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
