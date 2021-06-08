Nova.booting((Vue, router, store) => {
  router.addRoutes([
    {
      name: 'message-card',
      path: '/message-card',
      component: require('./components/Tool'),
    },
  ])
})
