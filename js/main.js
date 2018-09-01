/*------------------------------------
 *Author:Storrea LTD
 *Template:The Online Store
 *Version:1.0
 *-------------------------------------
 */


$(document).ready(function() {

  $(window).scroll(function(){
    if ($(this).scrollTop()>200){
      $('.link-bar').addClass('fixed-nav');
      $('.option-box').addClass('option-box-fixed');
    } 
    else {
      $('.link-bar').removeClass('fixed-nav');
      $('.option-box').removeClass('option-box-fixed');
    }
  });


  // $(".body").on("hide.bs.collapse", function(){
  //   $(".icon-change").html('<span class="fa fa-angle-down"></span>');
  // });
  // $(".body").on("show.bs.collapse", function(){
  //   $(".icon-change").html('<span class="fa fa-angle-up"></span>');
  // });

  $('.body').on('shown.bs.collapse', function () {
    $(this).parent().find('.icofont-caret-down')
                    .removeClass('icofont-caret-down')
                    .addClass('icofont-caret-up');
  }).on('hidden.bs.collapse', function () {
      $(this).parent().find(".icofont-caret-up")
                      .removeClass("icofont-caret-up")
                      .addClass("icofont-caret-down");
  });

  $('#homeSlider').carousel({
    interval: 2000
  })

  $('#client').carousel({
    interval:false,
    wrap: false
  });


  /*
   *---------------------------------------------
   *-------------OwlCarousel/Product--------------
   *---------------------------------------------
   */

  // $('.homeProduct').owlCarousel({
  //   autoplay: true,
  //   autoplayHoverPause: true,
  //   items: 5,
  //   loop:true,
  //   margin:10,
  //   dots:false,
  //   nav:true,
  //   navClass:['nav-prev','nav-next'],
  //   navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
  //   responsive: {
  //     0: {
  //       items: 1
  //     },
  //     370: {
  //       items: 2
  //     },
  //     400: {
  //       items: 2
  //     },
  //     600: {
  //       items: 3
  //     },
  //     1000: {
  //       items: 5
  //     }
  //   }
  // })


  /*
   *---------------------------------------------
   *-------------OwlCarousel/Brand Logo--------------
   *---------------------------------------------
   */

  //  $('#brandLogo').owlCarousel({
  //   autoplay:false,
  //   items: 10,
  //   slideBy:10,
  //   margin:10,
  //   dots:false,
  //   nav:true,
  //   navClass:['nav-prev','nav-next'],
  //   navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
  //   responsive: {
  //     320: {
  //       items: 2
  //     },
  //     360: {
  //       items: 3
  //     },
  //     400: {
  //       items: 3
  //     },
  //     600: {
  //       items: 3
  //     },
  //     1000: {
  //       items: 10
  //     }
  //   }
  // });


  /*
   * -----------------------------------------------------------------
   *---------------------------ElevateZoom----------------------------
   * -----------------------------------------------------------------
   */


  $("#pdd-img").elevateZoom(
    {
      gallery:'zoom-control',
      zoomType: "inner",
      cursor: "crosshair",
      galleryActiveClass: 'active',
      imageCrossfade: true,
      constrainType:"height", 
      constrainSize: 350
  });   

});


function openmenuSidenav() {
  if ($(window).width() > 360) {
    document.getElementById("menu-sidenav").style.width = "280px";
  }else{
    document.getElementById("menu-sidenav").style.width = "250px";
  }
}

function closemenuSidenav() {
  document.getElementById("menu-sidenav").style.width = "0";
}


function openOption() {
  document.getElementById("catalog-filter").style.width = "75%";
}

function closeOption() {
  document.getElementById("catalog-filter").style.width = "0";
}


  
