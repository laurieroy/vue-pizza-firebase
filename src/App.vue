<template>
  <div id="app">
    <div class="container">
      <pp-header></pp-header>
    </div>
    <div class="container">
      <pp-admin></pp-admin>
    </div>
    <div class="container">
      <pp-footer></pp-footer>
    </div>

  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Admin from './components/Admin';
import Menu from './components/Menu';

export default {
  name: 'app',
  components: {
    ppHeader: Header,
    ppFooter: Footer,
    ppAdmin: Admin,
    ppHome: Home,
    ppMenu: Menu
  }

}
</script>

<style>
  #home {
    background: url('../src/assets/pizza.jpg');
    height: 800px;
    padding: 10%;
  }

  h1, h2 {
    margin: 6%;
  }
  .background {
  background:  #eee;
  opacity: 0.8;
  max-width: 60%;
  margin: 0 auto;
  padding: 20px 0;
  }
</style>
