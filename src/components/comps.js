class Faq extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`
        <div class="content">
            <div class="text-center">
                <a class="greentext">FAQ</a>
                <h2 class="secondheader m-auto py-3" style="width:50% ;">List of frequently asked questions and answers.</h2>
                <p class="smallblack py-2 mx-auto mb-4" style="width:50% ;">See for yourself and learn more about the platform. A list of questions and answers to the most frequently asked questions.</p>
            </div>
            <div class="row">
                <div class="d-flex flex-row col-sm-6 mb-5">
                    <div class="rounded-circle circles m-2 " ><h4 class="align-middle">1.</h4></div>
                    <div class="w-75">
                        <h3 class="thirdtitle my-2">What is Community?</h3>
                        <p class="smallblack py-2">The platform allows employers to share job offers and connect with talent from designers and developers.</p>
                        <h3 class="smalltitle py-2">More information<i class="fa-solid fa-chevron-right" ></i> </h3>
                    </div>
                </div>
                <div class="d-flex flex-row col-sm-6 mb-5">
                        <div class="rounded-circle circles m-2 " ><h4 class="align-middle">2.</h4></div>
                    <div class="w-75">
                        <h3 class="thirdtitle my-2">How to start using?</h3>
                        <p class="smallblack py-2">Go to the Download tab and select the application you want to download. Use an operating system tailored to your needs.</p>
                    </div>
                </div>
                <div class="d-flex flex-row col-sm-6">
                    <div class="rounded-circle circles m-2 " ><h4 class="align-middle">3.</h4></div>
                    <div class="w-75">
                        <h3 class="thirdtitle my-2">How to start using?</h3>
                        <p class="smallblack py-2">Go to the Download tab and select the application you want to download. Use an operating system tailored to your needs.</p>
                    </div>
                </div>
                <div class="d-flex flex-row col-sm-6">
                    <div class="rounded-circle circles m-2 " ><h4 class="align-middle">4.</h4></div>
                    <div class="w-75">
                        <h3 class="thirdtitle my-2">I ask a question to the administration</h3>
                        <p class="smallblack py-2">If you have a question, we are happy to help. Please contact us in the support tab, there is a form.</p>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}
class Logocontained extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`
        <div class="container  content">
            <div class="text-center  py-3 "><h2 class="secondheader m-auto" style="width:60% ;">Join the group 45,000+ satisfied and active users in the design industries</h2></div>
            <div class="d-flex flex-row justify-content-evenly align-items-center m-20">
                <div><img src="images/logoip1.webp" width="70px"/></div>
                <div><img src="images/logoip2.webp" width="120px"/></div>
                <div><img src="images/logoip3.webp" width="120px"/></div>
                <div><img src="images/logoip4.webp" width="120px"/></div>
                <div><img src="images/logoip5.webp" width="100px"/></div>
            </div>
        </div>
        `;
    }
}
class Footerbottom extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`
        <div class="darkbackground">
        <div class="container content">
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
customElements.define('footer-bottom', Footerbottom)
customElements.define("faq", Faq)
customElements.define("logo-contained", Logocontained)
