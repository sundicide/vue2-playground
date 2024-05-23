import { Scene } from 'three'

export default class CScene {
  constructor(params = {}) {
    this.scene = new Scene()
  }

  getOriginal() {
    return this.scene
  }

  addToScene(mesh) {
    this.scene.add(mesh)
  }
}
