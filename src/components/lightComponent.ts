import * as BABYLON from 'babylonjs';

export class LightComponent {
  private scene: BABYLON.Scene;
  private lights: BABYLON.Light[];

  constructor(scene: BABYLON.Scene) {
    this.scene = scene;
    this.lights = [];

    // Create and configure the lights
    this.createHemisphericLight(new BABYLON.Color3(0.2, 0.2, 0.2), 0.7, new BABYLON.Vector3(0, 1, 0));
    this.createDirectionalLight(new BABYLON.Color3(1, 1, 1), 0.8, new BABYLON.Vector3(1, -1, 0));
    this.createPointLight(new BABYLON.Color3(1, 0, 0), 1, new BABYLON.Vector3(5, 5, 0));
    this.createSpotLight(new BABYLON.Color3(0, 0, 1), 0.5, new BABYLON.Vector3(-5, 10, 0), new BABYLON.Vector3(0, -1, 0));
  }

  private createHemisphericLight(color: BABYLON.Color3, intensity: number, direction: BABYLON.Vector3): void {
    const light = new BABYLON.HemisphericLight('hemisphericLight', direction, this.scene);
    light.intensity = intensity;
    light.groundColor = color;
    this.lights.push(light);
  }

  private createDirectionalLight(color: BABYLON.Color3, intensity: number, direction: BABYLON.Vector3): void {
    const light = new BABYLON.DirectionalLight('directionalLight', direction, this.scene);
    light.intensity = intensity;
    light.diffuse = color;
    this.lights.push(light);
  }

  private createPointLight(color: BABYLON.Color3, intensity: number, position: BABYLON.Vector3): void {
    const light = new BABYLON.PointLight('pointLight', position, this.scene);
    light.intensity = intensity;
    light.diffuse = color;
    this.lights.push(light);
  }

  private createSpotLight(color: BABYLON.Color3, intensity: number, position: BABYLON.Vector3, direction: BABYLON.Vector3): void {
    const light = new BABYLON.SpotLight('spotLight', position, direction, Math.PI / 4, 2, this.scene);
    light.intensity = intensity;
    light.diffuse = color;
    this.lights.push(light);
  }

  public setIntensity(intensity: number): void {
    for (const light of this.lights) {
      light.intensity = intensity;
    }
  }

  public setColor(color: BABYLON.Color3): void {
    for (const light of this.lights) {
      light.diffuse = color;
    }
  }

  public setDirection(direction: BABYLON.Vector3): void {
    for (const light of this.lights) {
      if (light instanceof BABYLON.DirectionalLight || light instanceof BABYLON.SpotLight) {
        light.direction = direction;
      }
    }
  }
}
