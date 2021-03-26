<template>
  <Layout>
    <div class="journal">
      <div class="container journal-container">

        <div class="journal-header">
          <h1 v-html="$page.blog.title" class="journal-title" />
          <div class="journal-meta">
            <div class="journal-author">
              <span class="label">Author</span>
              <span class="author-name" v-text="$page.blog.author" />
            </div>
            <div class="journal-date">
              <span class="label">Date</span>
              <div v-text="$page.blog.published_at"/>
            </div>
            <div class="journal-time">
              <span class="label">Time</span>
              <!-- <span>{{ $page.blog.timeToRead }} min read</span> -->
            </div>
          </div>          
        </div>

        <JournalContent :content="mdToHTML($page.blog.content)" />

      </div>
    </div>
  </Layout>
</template>

<page-query>
query($id:ID!){
  blog: strapiBlog(id:$id){
    id
    title
    author
    desc
    content
    published_at(format: "YYYY")
  }
}
</page-query>

<script>
import markdownIt from 'markdown-it'
const md = new markdownIt()
import JournalContent from "@/components/JournalContent"

export default {
  components: {
    JournalContent
  },
  metaInfo () {
    return {
      title: this.$page.blog.title
    }
  },
   methods: {
    mdToHTML(markdown){
      return md.render(markdown)
    }
  }
}
</script>

<style scoped>
.journal-container {
  max-width: 840px;
}
.journal-header {
  padding: 2rem 0 4rem 0;
}
.journal-title {
  font-size: 4rem;
  margin: 0 0 4rem 0;
  padding: 0;
}
.journal-meta {
  display: flex;
  flex-wrap: wrap;
  font-size: 0.8rem;
}
.journal-meta > div {
  margin-right: 4rem;
}
.journal-meta > div:last-of-type {
  margin: 0;
}
</style>
