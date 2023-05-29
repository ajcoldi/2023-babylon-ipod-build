import * as BABYLON from 'babylonjs';
import { ModelComponent } from '../components/models/modelComponent';
import { CameraComponent } from '../components/cameraComponent';
import { LightComponent } from '../components/lightComponent';
import { GUIController } from '../components/GUIController';
export class MainScene {
  private engine: BABYLON.Engine;
  private scene: BABYLON.Scene;
  private cameraComponent: CameraComponent;
  private lightComponent: LightComponent;
  private modelComponent: ModelComponent;
  private guiController: GUIController
  constructor(canvas: HTMLCanvasElement) {
    this.engine = new BABYLON.Engine(canvas, true);
    this.scene = this.createScene();
    this.scene.clearColor = new BABYLON.Color4(0, 0, 0, 0); // Set the clearColor to fully transparent

    this.cameraComponent = new CameraComponent(this.scene, canvas);
    this.lightComponent = new LightComponent(this.scene);
    this.modelComponent = new ModelComponent(this.scene);
    this.guiController = new GUIController(this.scene);

  }

  private createScene(): BABYLON.Scene {
    const scene = new BABYLON.Scene(this.engine);

    // Add scene setup code here
      // Set the position and rotation of the loaded mesh if needed
    
    return scene;
  }

  // public loadModel(): void {
  //   this.modelComponent.loadModel();
  // }
  
  public handleWindowResize(): void {
    window.addEventListener('resize', () => {
      this.engine.resize();
    });
  }
  public run(): void {
    this.engine.runRenderLoop(() => {
      this.scene.render();
    });

    window.addEventListener('resize', () => {
      this.engine.resize();
    });
  }

  public dispose(): void {
    this.scene.dispose();
  }
}


 