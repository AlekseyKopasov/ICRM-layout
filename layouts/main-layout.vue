<template>
  <div class="main-layout">
    <Header />
    <div class="page">
      <Sidebar />
      <div class="page__wrap">
        <div class="page__content">
          <nuxt />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Sidebar from '@/components/Sidebar'

export default {
  components: {
    Header,
    Footer,
    Sidebar
  }
}
</script>
