<template>
  <nav class="blue darken-3">
    <div class="nav-wrapper">
      <router-link to="/" class="brand-logo link">Мой блог</router-link>
      <ul class="right hide-on-med-and-down">
        <router-link
          tag="li"
          to="/"
          exact
          active-class="active"
          class="link"
        >
         <a href="#"> Новый пост</a>
        </router-link>
        <router-link
          tag="li"
          to="/list"
          active-class="active"
          class="link"
        >
           <a href="#">Список постов</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style>
.link{
  margin: 17px;
  font-weight: bold;
}
@media (min-width: 300px) and (max-width: 1000px){
  nav .nav-wrapper{
    width: 100% !important;
  }
  .brand-logo{
    display: none !important;
  }
  .right,
  .hide-on-med-and-down{
    display: block;
  }
}
</style>