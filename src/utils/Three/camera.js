import * as THREE from 'three'
import _ from 'lodash'

export function setPosition(camera, { x = 0, y = 0, z = 0 }) {
  camera.position.set(x, z, y)
}

export function makePerspectiveCamera(
  params = {
    fov: 75,
    aspect: window.innerWidth / window.innerHeight,
    near: 0.01,
    far: 10000,
  }
) {
  const fov = params.fov
  const aspect = params.aspect
  const near = params.near
  const far = params.far

  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)

  return camera
}
