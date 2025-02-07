export class Route{

  constructor(name, path, handler){
    this.name=name
    this.path=path
    this.handler=handler
  }

  get name(){
    return this._name;
  }
  set name(name){
    this._name = name;
  }
  get path(){
    return this._path;
  }
  get handler(){
    return this._handler;
  }
  set path(path){
    this._path=path;
  }
  set handler(handler){
    this._handler=handler;
  }
}