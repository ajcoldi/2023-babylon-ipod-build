import * as BABYLON from 'babylonjs';

export class CameraComponent {
  private camera: BABYLON.ArcRotateCamera;
  private rotationSpeed: number = 0.0001; // Adjust the rotation speed as needed

  constructor(scene: BABYLON.Scene, canvas: HTMLCanvasElement) {
    this.camera = new BABYLON.ArcRotateCamera('camera', -Math.PI / 1, Math.PI / 1.5, 10, BABYLON.Vector3.Zero(), scene);
    this.camera.attachControl(canvas, true);
    this.camera.lowerRadiusLimit = this.camera.upperRadiusLimit = this.camera.radius;
    this.camera.pinchPrecision = 0;

    this.animateCamera();
  }

  private animateCamera() {
    const deltaTime = this.camera.getScene().getEngine().getDeltaTime();

    // Update the camera's alpha (rotation) value
    this.camera.alpha += this.rotationSpeed * deltaTime;

    // Request the next animation frame
    requestAnimationFrame(() => this.animateCamera());
  }
}
