import {observable, computed, action} from "mobx";


export default class TodoModel {
  id = Math.random();
  
  @observable
  title: string = '';
  
  @observable
  finished: boolean = false;


  constructor(title: string){
    this.title = title;
  }
}