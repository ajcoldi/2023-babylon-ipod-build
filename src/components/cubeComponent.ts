import * as BABYLON from 'babylonjs';

export class CubeComponent {
  private box: BABYLON.Mesh;

  constructor(scene: BABYLON.Scene) {
    this.box = BABYLON.MeshBuilder.CreateBox('box', { size: 1 }, scene);
    this.box.position.y = 1;
  }
}
