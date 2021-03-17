import { CST } from "../CST";
import { MenuScene } from "./MenuScene";
import { Phaser } from "../../node_modules/phaser";

export default class LoadScene extends Phaser.Scene{
  constructor(){
    super({
      key: CST.SCENES.LOAD
    })
  }
  init(){

  }
  preload(){
    // this.load.image('background','../../assets/background.png');
  }
  create(){
    this.scene.add(CST.SCENES.MENU, MenuScene, false);
    this.scene.start(CST.SCENES.MENU, "Hello from load");
    // this.scene.launch();
  }
}