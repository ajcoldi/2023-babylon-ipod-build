import * as BABYLON from 'babylonjs';

import { GLTFFileLoader, MTLFileLoader, OBJFileLoader } from 'babylonjs-loaders';

export class ModelComponent {
  private scene: BABYLON.Scene;
  public isModelLoading: boolean;
  private loadingTask: BABYLON.AssetContainer | null;

  constructor(scene: BABYLON.Scene) {
    this.scene = scene;
    this.loadingTask = null;

    this.isModelLoading = false;

    BABYLON.SceneLoader.RegisterPlugin(new OBJFileLoader());
    BABYLON.SceneLoader.RegisterPlugin(new GLTFFileLoader());
  }

  loadModel(folder: string, filePath: string) {
    this.isModelLoading = true;
    const initialPosition = new BABYLON.Vector3(10, 0, 0); // Initial position outside the screen
    const targetPosition = new BABYLON.Vector3(0, 0, 0); // Target position

    BABYLON.SceneLoader.ImportMeshAsync('', folder, filePath, this.scene).then((result) => {
      const rootMesh = result.meshes[0];

      // Set initial position
      rootMesh.position = initialPosition;

      // Create animation
      const animation = new BABYLON.Animation('slideAnimation', 'position', 150, BABYLON.Animation.ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);

      // Define animation keyframes
      const keys = [
        { frame: 0, value: initialPosition },
        { frame: 100, value: targetPosition }
      ];

      // Assign animation keyframes
      animation.setKeys(keys);

      // Attach animation to the root mesh
      rootMesh.animations.push(animation);

      // Start animation
      this.scene.beginAnimation(rootMesh, 0, 100, false, 1, () => {
        // Animation end callback
        this.isModelLoading = false;
      });
    });
  }

  removeAllModels() {
    this.scene.meshes.forEach((mesh) => {
      mesh.dispose();
    });
  }
}
