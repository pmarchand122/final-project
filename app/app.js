import * as MODEL from "../model/model.js";

function init() {
    $("nav a").click(function () {
        let btnId = this.id;
        let contentId = btnId + "Content";
        console.log(btnId)

        if(btnId == "home"){
            $(".hero")
                .addClass("backgroundImage");

            $("nav")
                .removeClass("blackNav")
                .addClass("whiteNav");

            $(".links a")
                .css("color", "white");

            $(".logo a")
                .html(`<img src="images/logo/logo-white.png">`);
           
        } else {
            $(".hero")
                .removeClass("backgroundImage");
            
            $("nav")
                .removeClass("whiteNav")
                .addClass("blackNav");
            
            $(".links a")
                .css("color", "black");

            $(".logo a")
                .html(`<img src="images/logo/logo-black.png">`);
        }

        if (btnId == "home" || btnId == "about") {
            MODEL.getFooterContent("footerContent");
        }

        if (btnId == "gallery"){
            MODEL.getFooterContent("galleryfooterContent");
        }

        if (btnId == "blog"){
            MODEL.getFooterContent("blogfooterContent");
        }

        if (btnId == "contact"){
            MODEL.getFooterContent("contactfooterContent");
        }
       
        MODEL.getPageContent(contentId);
        addBlogListeners();
        addGalleryListners();
        footerListener();

    })
}


function addBlogListeners(){
    $(".blogImage a").click(function() {
        let btnId = this.id;
        let contentId = btnId + "Content";
        console.log(btnId)

        MODEL.getPageContent(contentId);
        MODEL.getFooterContent("footerContent")
        footerListener();
    })
}

function addGalleryListners(){
    $(".topRowGallery a").click(function() {
        let btnId = this.id;
        let contentId = btnId + "Content";
        console.log(btnId)

        MODEL.getPageContent(contentId);
        MODEL.getFooterContent("footerContent");
        footerListener();
       
    })

    $(".bottomRowGallery a").click(function() {
        let btnId = this.id;
        let contentId = btnId + "Content";
        console.log(btnId)

        MODEL.getPageContent(contentId);
        MODEL.getFooterContent("footerContent");
        footerListener();

       
    })
    
}

function footerListener(){
    $("footer a").click(function() {
        let btnId= this.id;
        let contentId = btnId + "Content";

        $(".hero")
                .addClass("backgroundImage");

            $("nav")
                .removeClass("blackNav")
                .addClass("whiteNav");

            $(".links a")
                .css("color", "white");

            $(".logo a")
                .html(`<img src="images/logo/logo-white.png">`);

        MODEL.getPageContent(contentId)
        MODEL.getFooterContent("footerContent");
    })
}


$(document).ready(function() {
    MODEL.getPageContent("homeContent");
    MODEL.getFooterContent("footerContent");
    $(".hero").addClass("backgroundImage");
    $("nav").addClass("whiteNav");
    $(".links a").addClass("whiteLines");
    
    init();
   
})