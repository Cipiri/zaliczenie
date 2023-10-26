<template>
    <div>
      <h1>Login</h1>
      <form @submit="login">
        <input v-model="email" type="text" placeholder="Email" />
        <input v-model="password" type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      login() {
        // Tutaj możesz dodać logikę logowania, np. za pomocą API lub serwera
        // Po poprawnym zalogowaniu możesz przekierować użytkownika w routerze
        this.$router.push({ name: 'Catalog' });
      }
    }
  };
  </script>