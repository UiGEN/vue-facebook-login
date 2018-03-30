/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file.
 */

export default [

  // Facebook Login
  {
    path: '/facebook',
    name: 'login.facebook',
    component: () => import('@/pages/Login/Facebook'),

    // If the user needs to be a guest to view this page.
    meta: {
      guest: true,
    },
  },

];
