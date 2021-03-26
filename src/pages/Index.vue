<template>
  <Layout>
    <div class="container">
      <Hero />
      <ProjectsGrid :projects="$page.projects.edges" />
    </div>
    <LatestJournals :journals="$page.blogs.edges" />
  </Layout>
</template>

<page-query>
query Posts {
	projects: allStrapiProject{
   	edges{
    	node{
        id
        title
        content
        category
        thumbnail{
          url
        }
    	}
  	}
	}
  blogs: allStrapiBlog (perPage: 4) {
    edges {
      node {
        id
        content
        title
        desc
      }
    }
  }
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
</page-query>

<script>
import Hero from "@/components/Hero"
import ProjectsGrid from "@/components/ProjectsGrid"
import LatestJournals from "@/components/LatestJournals"

export default {
  components: {
    Hero,
    ProjectsGrid,
    LatestJournals
  }
}
</script>
