import "styles/App.css";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Content from "./Content";
//import {Router} from 'vanilla-router';
//import {Router} from './router.js';

/**
 * Container for the application
 */
export default class App {
  /**
   * Create the App and render it's children
   * @param {HTMLElement} rootElement - The root element for all components
   */
  constructor(rootElement) {
    this._root = rootElement;
    this.render();
  }

  /**
   * Render elements to the DOM
   */
  render() {
    this._root.className = "app";

    const sidebar = new Sidebar();

    const pageContainer = document.createElement("div");
    pageContainer.className = "page";

    const header = new Header();
    const content = new Content();

    pageContainer.appendChild(header.getElement());
    pageContainer.appendChild(content.getElement());

    this._root.appendChild(sidebar.getElement());
    this._root.appendChild(pageContainer);



    //shrink header while scrolling
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
          document.getElementsByClassName('header')[0]['className']='header headerShrink';
      } else {
        document.getElementsByClassName('header')[0]['className']='header headerBig';
      }
    }

    // const router= new Router();
    // router.root='http://localhost:9000/';
    // router.add({name:'home', path:'/home', handler:()=>console.log('handler to home')});

  //   var router = new Router({
  //     mode: 'history',
  //     page404: function (path) {
  //         console.log('"/' + path + '" Page not found');
  //     }
  // });


  }
}
