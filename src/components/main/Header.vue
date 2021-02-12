<template>
  <header class="fixed top-0 w-full uppercase bg-white opacity-90 text-sm font-light tracking-wider z-10 h-16 shadow-md">

    <div class="container flex justify-between items-center p-2 h-full">

      <div class="flex-shrink-0">
        <router-link to="/">
          <img class="h-8" src="/melmac-vue/img/logo/logo-hor.png" alt="logo">
        </router-link>
      </div>

      <div class="hidden md:flex flex-col items-center justify-evenly h-full">
        <app-nav-link></app-nav-link>
      </div>

      <div class="block md:hidden">        
        <app-dropdown></app-dropdown>
      </div>

    </div>
  </header>
</template>

<script>
import DropdownVue from '../common/Dropdown.vue';
import NavLinkVue from '../common/NavLink.vue';

export default {
  components: {
    'app-dropdown': DropdownVue,
    'app-nav-link': NavLinkVue,
  },
}
</script>