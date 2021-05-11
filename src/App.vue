<template>
  <div id="app">
    <div class="container">
      <pp-header></pp-header>
    </div>
    <div class="container">
      <router-view></router-view>
      <global-component></global-component>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-4">
          <router-view name="ordering-guide"></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
           <router-view name="delivery"></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
           <router-view name="history"></router-view>
        </div>
      </div>
    </div>

    <div class="container">
      <pp-footer></pp-footer>
    </div>
  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';
import { dbMenuRef, dbOrdersRef } from './firebaseConfig';

export default {
  name: 'app',
  components: {
    ppHeader: Header,
    ppFooter: Footer,
  },
  created() {
    this.$store.dispatch('setMenuRef', dbMenuRef),
    this.$store.dispatch('setOrdersRef', dbOrdersRef)
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

  header, footer {
    background: #ECEEEF;
    padding: 40px 0;
    font-size: 1.2em;
  }

  .card {
    background: #69AB64;
    margin: 20px 0;
    border-radius: 0;
  }
</style>
