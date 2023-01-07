class Footer extends HTMLElement{
    connectedCallback(){
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
`;
    }
}

class Navbar extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`
        <nav class="navbar navbar-expand-lg ">
               <div class="container-fluid">
                    <div class='navbar-brand'>
                        <img src="assets/images/c.svg"/>
                        <h3>Community</h3>
                    </div>
                    <div class="align-top" >
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 " >
                            <li class="nav-item mx-2 textsize"><a href="src/pricing.html" style="text-decoration:none ; color:white">Price</a></li>
                            <li class="nav-item mx-2 textsize"><a href="src/blog.html" style="text-decoration:none ; color:white">Blog</a></li>
                            <li class="nav-item  mx-2 textsize"><a href="src/support.html" style="text-decoration:none ; color:white">Support</a></li>
                            <li class="nav-item mx-2"><button type="button" class="btn btn-outline-warning rounded-pill">Download<i class="fa-solid fa-chevron-right" class="mx-3"></i></button></li>
                        </ul>
                    </div>
               </div>
            </nav>
        `;
    }
}

class Logocontainer extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`
        <div class="container  content">
                <div class="text-center  py-3 "><h2 class="secondheader m-auto" style="width:60% ;">Join the group 45,000+ satisfied and active users in the design industries</h2></div>
                <div class="d-flex flex-row justify-content-evenly align-items-center m-20">
                    <div><img src="assets/images/logoip1.webp" width="70px"/></div>
                    <div><img src="assets/images/logoip2.webp" width="120px"/></div>
                    <div><img src="assets/images/logoip3.webp" width="120px"/></div>
                    <div><img src="assets/images/logoip4.webp" width="120px"/></div>
                    <div><img src="assets/images/logoip5.webp" width="100px"/></div>
                </div>
            </div>
        `;
    }
}





customElements.define("app-footer",Footer)
customElements.define("app-navbar", Navbar)
customElements.define("logo-container", Logocontainer)

