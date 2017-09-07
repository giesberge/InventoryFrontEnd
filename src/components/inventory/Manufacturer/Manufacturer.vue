<template>
  <div class="mfg">
    <ul v-if="post">
        <p><strong>{{post.title}}</strong></p>
        <p>{{post.body}}</p>
    </ul>

    <ul v-if="errors && errors.length">
      <li v-for="error of errors">
        {{error.message}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'mfg',
    data: () => ({
      post: [],
      errors: []
    }),
    created () {
      this.axios.get('posts', {
        params: {
          id: this.$route.params.id
        }
      })
        .then(response => {
          // JSON responses are automatically parsed.
          console.log(response.data)
          console.log(this.$route.params.id)
          this.post = response.data[0]
        })
        .catch(e => {
          this.errors.push(e)
        })
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
