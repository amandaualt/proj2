import { CST } from "../CST";
import { Phaser } from "../../node_modules/phaser";


export default class MenuScene extends Phaser.Scene{
  constructor(){
    super({
      key: CST.SCENES.MENU
    })
  }
  init(data){
    console.log(data);
    console.log('i got it')
  }
  create(){

  }
}