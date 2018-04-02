<template>
  <v-layout>
    <v-card contextual-style="dark">
      <span slot="header">
        Facebook login
      </span>
      <div slot="body">
        <facebook-login class="button"
            appId="1586397414778621"
            @login="FBLogin"
            @logout="FBLogout"
            @get-initial-status="FBLogin">
        </facebook-login>
      </div>
      <div slot="footer">
        No account?
        <router-link :to="{ name: 'register.index' }">Register</router-link>
      </div>
    </v-card>
  </v-layout>
</template>

<script>
  /* ============
   * Login Index Page
   * ============
   *
   * Page where the user can login.
   */

  import VLayout from '@/layouts/Minimal';
  import VCard from '@/components/Card';
  import facebookLogin from 'facebook-login-vuejs';

  export default {
    /**
     * The name of the page.
     */
    name: 'login-facebook',

    /**
     * The methods the page can use.
     */
    methods: {
      /**
       * Will log the user in.
       *
       * @param {Object} user The user to be logged in.
       */
      FBLogin(data) {
        console.log(data);
      },
      FBLogout() {
        // this.$store.dispatch('auth/login', user);
      },
    },

    /**
     * The components the page can use.
     */
    components: {
      VLayout,
      VCard,
      facebookLogin,
    },
  };
</script>
