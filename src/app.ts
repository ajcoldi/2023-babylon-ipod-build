import { MainScene } from './scenes/mainScene';
window.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('renderCanvas') as HTMLCanvasElement;
  const mainScene = new MainScene(canvas);

  // Load the model
  // mainScene.loadModel("iPod_Touch_5G_OBJ", modelPath, 'textures/ipodttxr.png', 'obj');
  // mainScene.loadModel("ipod_classic", 'ipod_classic.gltf', 'iPod_Material_baseColor.png', 'gltf');
  // mainScene.loadModel("ipod", "ipod.obj", 'textures/ipodminicover.png', 'obj');

  // const modelName = 'ipod'; // Update with the model name
  // const modelPath = 'ipod.obj'; // Update with the model file path
  // const modelType = 'obj'; // Update with the model type ('gltf' or 'obj')
  
  const modelName = 'MacBook_obj'; // Update with the model name
  const modelPath = 'MacBookPro.obj'; // Update with the model file path
  const modelType = 'obj'; // Update with the model type ('gltf' or 'obj')
 
  // mainScene.loadModel();

  // Run the scene
  mainScene.run();
  
});