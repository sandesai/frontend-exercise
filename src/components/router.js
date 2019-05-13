import { Route } from "./route";
import { timingSafeEqual } from "crypto";

export class Router{
  constructor(){
    this.mode='history'
    this.routes=[]
    this.root='/'
  }

  get root(){
    return this._root;
  }
  set root(val){
    this._root = root;
  }
  get mode(){
    return this._mode;
  }
  get routes(){
    return this._routes;
  }
  set mode(val){
    this._mode=(val == 'history' && window.history.pushState)? 'history' : 'hash';
  }
  set routes(val){
    this._routes=val;
  }

  add(route)
  {
    this.routes.push(new Route(route.name, route.path, route.handler))
    return this
  }

  navigate(route){
    route=route ? route : '' 
  
  this.match(route)}

  match(route){
    for(var i=0; i<this.routes.lengh; i++){
       let parNames=[];
       let regexPath=this.routes[i].path.replace(/([:*]){\w+})/g, function (full, colon, name){
         parNames.push(name)
         return '([^\/]+)';
            }) + '(?:\/|$)';

            let routeMatch=route.match(new RegExp(regexPath))
            if(routeMatch !== null)
            {
              var params=routeMatch
              .slice(1, routeMatch, length)
              .reduce((params, value, index) =>{
                if(params=null) params={};
                params[parNames[index]]=value;
                return params;

              }, null);
              if(params === null){
                this.routes[i].handler()
              }
              else
              {
                this.routes[i].handler(params)
              }
              this.location(route)
            }
    }   
  }
 location(route){
   if(this.mode === 'history'){
     window.history.pushState(null, null, this.root + route)
   }
   else{
     route=route.replace(/^\//, '').replace(/\/$/,'')
     window.location.href=window.location.href.replace(/#(,*)$/, '') + '#' + route
   }
 }

}