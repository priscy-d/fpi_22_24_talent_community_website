class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <div class="darkbackground">
      <div class="container content">
          <div class=" text-center py-4">
              <a class="greentext">DOWNLOAD FREE</a>
              <h2 class="titlehd m-auto py-4" style="width: 60%;">Download the software now and register for free.</h2>
              <p class="smalltext m-auto py-2" style="width: 50%;">Select a platform and download the latest software version. Last version published on 24 July 2022.</p>
              <div class="d-flex flex-row justify-content-center ">
                  <button  type="button" class="btn btn-outline-light my-5 rounded-pill mx-3"><i class="fa-brands fa-apple"></i>Download</button>
                  <button  type="button" class="btn btn-outline-light my-5 rounded-pill"><i class="fa-brands fa-windows"></i>Download</button>
              </div>
          </div>
          <hr>
          <div class="row py-4">
              <div class="col">
                  <h4 class="my-3 smalltitle2 ">ABOUT APP</h4>
                  <h3 class="secondheader py-3">Platform for searching and creating job offers in companies.</h3>
                  <p class="smalltext py-2" >If you want to search for your dream job and easily submit your application.</p>
              </div>
              <div class="col d-flex flex-row ">
                  <div class="mx-5">
                      <h3 class="my-3 smalltitle2 ">NAVIGATION</h3>
                      <ul class="navbar-nav ">
                          <li class="nav-item textsize">Home page</li>
                          <li class="nav-item textsize">Pricing</li>
                          <li class="nav-item textsize">Blog</li>
                      </ul>
                  </div>
                  <div class="mx-5">
                      <h3 class="my-3 smalltitle2 ">NAVIGATION</h3>
                      <ul  class="navbar-nav ">
                          <li class="nav-item textsize">Support</li>
                          <li class="nav-item textsize">Privacy Policy</li>
                      </ul>
                  </div>
              </div>
          </div>
          <hr>
          <div>
              <div>
                  <p class="color">Software Working ©2022. All rights reserved. Created by STUDIO</p>
              </div>
              <div>
                  <i class="fa-brands fa-instagram"></i>
                  <i class="fa-brands fa-facebook-f"></i>
                  <i class="fa-brands fa-linkedin"></i>
                  <i class="fa-brands fa-reddit-alien"></i>
              </div>
          </div>
      </div>
  </div>                          
      `}
    }
    customElements.define('footer', Footer);