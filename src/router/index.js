import Router from 'vue-router'

import HomeComponent from '@/components/Home'
import InteractiveVoxelpainter from '@/components/Three/InteractiveVoxelpainter'
import GeometryExtrudeSplines from '@/components/Three/GeometryExtrudeSplines'
import ImageTest from '@/components/Three/ImageTest'
import Geometry from '@/components/Three/Geometry'
import CameraPractice from '@/components/Three/CameraPractice.vue'

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: {
  //     render(c) {
  //       console.log({c}, c('router-view'))
  //       return c('router-view')
  //     }
  //   },
  // },
  {
    path: '/',
    name: 'Home',
    component: HomeComponent,
  },
  {
    path: '/interactive-voxelpainter',
    name: 'InteractiveVoxelpainter',
    component: InteractiveVoxelpainter,
  },
  {
    path: '/geometry-extrude-splines',
    name: 'GeometryExtrudeSplines',
    component: GeometryExtrudeSplines,
  },
  {
    path: '/image-test',
    name: 'ImageTest',
    component: ImageTest,
  },
  {
    path: '/geometry',
    name: 'Geometry',
    component: Geometry,
  },
  {
    path: '/camera-practice',
    name: 'Camera Practice',
    component: CameraPractice,
  },
]

export { routes }

export default new Router({
  mode: 'hash',
  routes,
})
