const Work = [
  {
    path: '/work',
    name: 'work',
    redirect: '/timeProgress',
    component: () => import('@/views/Work/WorkIndex.vue'),
    children: [
      {
        path: '/timeProgress',
        name: 'timeProgress',
        component: () => import('@/views/Work/timeProgress.vue')
      }
    ]
  }
]
export default Work
