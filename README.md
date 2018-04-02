# vue-facebook-login

1. npm i facebook-login-vuejs
<<<<<<< HEAD
2. node boilerbuilder.js vue-facebook-login

=======
2. main.js:
```
/* import facebook-login-vue plugin */
import './plugins/facebook-login-vue-js';
```
3. routes/index.js
```
{
  path: '/facebook',
  name: 'login.facebook',
  component: () => import('@/pages/Login/Facebook'),

  // If the user needs to be a guest to view this page.
  meta: {
    guest: true,
  },
},
```
>>>>>>> 92210534a6a1682e7078f60b735969035cf3aac9
