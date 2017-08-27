import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  home = 'home';
  about_us = 'about us';
  destinations = 'destinations';
  contact_us = 'contact us';
  packages = 'packages';

  ngOnInit() {
    this.navScroll();
    this.collapseNavBar();
  }

  navScroll() {
    var navHead = document.getElementById('nav-head');
    window.onscroll = function () { 
        "use strict";
        if (document.body.scrollTop >= 200 ) {
          navHead.classList.add("bg-primary");
          navHead.classList.remove("bg-transparent");
        } 
        else {
          navHead.classList.add("bg-transparent");
          navHead.classList.remove("bg-primary");
        }
    };
  }

  collapseNavBar() {
    var navLinkList = document.getElementById('nav-link-list');
    var navLink = document.getElementById("navbar-links")
    var navButton = document.getElementById('navbar-button');

    navLinkList.onclick = function() {
      navLink.classList.remove("show");
    }
   
  }

  detectUserAgent() {
    var x = "User-agent header sent: " + navigator.userAgent;
    console.log(x);
    console.log(window.screen.availWidth);
    console.log(window.screen.availHeight);
  }
}
