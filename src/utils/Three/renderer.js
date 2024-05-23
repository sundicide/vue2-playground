import { WebGLRenderer } from 'three'

export default class CRenderer {
  constructor(
    params = {
      antialias: true,
      preserveDrawingBuffer: true,
    }
  ) {
    this.renderer = new WebGLRenderer(params)
    return this.renderer
  }

  get() {
    return this.renderer
  }

  setSize(width = 500, height = 500) {
    this.renderer.setSize(width, height)
  }

  render(scene = null, camera = null) {
    this.renderer.render(scene, camera)
  }
}
