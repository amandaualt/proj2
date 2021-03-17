// // /** @type {import "../typings/"} */
import {LoadScene} from "./scenes/LoadScenes";
import {MenuScene} from "./scenes/MenuScene";

// var config = {
//         type: Phaser.AUTO,
//         width: 800,
//         height: 600,
//         physics: {
//           default: "arcade",
//           arcade: {
//             gravity: { y: 300 },
//             debug: false,
//           },
//         },
//       cene: {
//       preload: preload,
//       create: create,
//       update: update,
//   },
// };

// var game = new Phaser.Game(config);
// function preload() {
//     this.load.image("background", "../assets/background.png");
  
// }
// function create() {
// }

// function update() {
// }

let game = new Phaser.Game({
  width: 100,
  height: 100,
  scene:[
    LoadScene, MenuScene
  ]
});