<template>
  <div ref="imageTest"></div>
</template>

<script>
import * as THREE from 'three'

import Stats from 'three/addons/libs/stats.module.js'
import { GUI } from 'three/addons/libs/lil-gui.module.min.js'

import * as Curves from 'three/addons/curves/CurveExtras.js'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

import * as cameraUtil from '@/utils/Three/camera'
import * as sceneUtil from '@/utils/Three/scene'
import CScene from '@/utils/Three/scene'
import CRenderer from '@/utils/Three/renderer'

export default {
  name: 'ImageTest',
  components: {},
  mounted() {
    this.$nextTick(() => {
      this.initThree()
    })
  },
  methods: {
    initThree() {
      const that = this
      const camera = cameraUtil.makePerspectiveCamera()
      cameraUtil.setPosition(camera, { x: 10, y: 100, z: 100 })

      const cscene = new CScene()

      const texture = new THREE.TextureLoader().load('/images/cat.jpg')

      const material = new THREE.MeshBasicMaterial({
        map: texture,
        // transparent: true
      })

      // const planeGeometry = new THREE.PlaneGeometry(600, 1401)
      // const mesh = new THREE.Mesh(planeGeometry, material);

      const boxGeometry = new THREE.BoxGeometry(50, 50, 50)
      const mesh = new THREE.Mesh(boxGeometry, material)

      cscene.addToScene(mesh)

      // scene.background= new THREE.Color(0xf0f0f0)

      const renderer = new CRenderer()
      renderer.setSize(600, 600)

      const controls = new OrbitControls(camera, renderer.domElement)

      that.$refs.imageTest.appendChild(renderer.domElement)

      function animate() {
        requestAnimationFrame(animate) // 이걸 넣어야 camera가 정상 동작
        renderer.render(cscene.getOriginal(), camera)

        controls.update()
      }

      animate()
    },
  },
}
</script>
