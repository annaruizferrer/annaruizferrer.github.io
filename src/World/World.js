import { createCamera } from "./components/camera.js";
import { createLights } from "./components/lights.js";
import { createScene } from "./components/scene.js";
import { createTerrain } from "./components/objects/terrain.js";
import { createRenderer } from "./systems/renderer.js";
import { createControls } from "./systems/controls.js";
import { Loop } from "./systems/Loop.js";
import { Resizer } from "./systems/Resizer.js";
 
// These variables are module-scoped: we cannot access them
// from outside the module.
let camera;
let renderer;
let scene;
let loop;
let controls;
 
class World {
   constructor(container) {
     // Instances of camera, scene, and renderer
     camera = createCamera();
     scene = createScene("white");
     renderer = createRenderer();
     
     
     // Initialize Loop
     loop = new Loop(camera, scene, renderer);
     container.append(renderer.domElement);
     controls = createControls(camera, renderer.domElement);
      // Light Instance, with optional light helper
     const { light, lightHelper } = createLights("white");
    loop.updatables.push(light);
    scene.add(light);
 
     const resizer = new Resizer(container, camera, renderer);
      resizer.onResize = () => {
      this.render();
     };

        // Random values for terrain vertices
     const randomVals = [];
     for (let i = 0; i < 12675; i++) {
      randomVals.push(Math.random() - 0.5);
      }

     let terrain = createTerrain({
        color: "orange",
        randVertexArr: randomVals,
      });
      loop.updatables.push(light);
      loop.updatables.push(terrain);
      loop.updatables.push(controls);
    
      scene.add(light, terrain);
 
    }
    render() {
     // Draw a single frame
     renderer.render(scene, camera);
   }
    // Animation handlers
   start() {
     loop.start();
   }
    stop() {
     loop.stop();
   }
 }
  export { World };