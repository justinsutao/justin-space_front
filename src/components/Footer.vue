<template>
  <footer class="footer">
    <div class="container">
      <span v-html="$static.theme.edges[0].node.copyRight" />
    </div>
  </footer>
</template>

<static-query>
query {
  theme: allStrapiTheme{
    edges{
      node{
        id
        title
        subtitle
        copyRight
      }
    }
  }
}
</static-query>

<style scoped>
.footer {
  font-size: 0.8rem;
  padding: 6rem 0;
}
</style>
