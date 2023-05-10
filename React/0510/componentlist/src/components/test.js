type : "short",
       name : "patch_180522_우측카트효과",
       main : function(){
            // 우측 카트 애니메이션 실행시, 버튼이 같이 움직이는 현상을 방지하기위해 만들어졌습니다.

            if(!isSis()){

            document.querySelector(".cart-icon").addEventListener("click",(function(){
                     var gnb_cart_list = document.querySelector("#gnb_cart_list");
                     var header_container = document.querySelector(".header-container");

                     if(gnb_cart_list.style.display !== "none"){
                        header_container.style.zIndex = "";
                     }else{
                        header_container.style.zIndex = 30;
                     }
                  //   debugger;
                     if($(".cart-icon").css("display") == "none"){
                        // zIndex를 통해서 최대한 가려보자 (20180912)
                        $(".o-header").css("zIndex","");
                        $(".cart-icon").show();
                     }else{
                        // zIndex를 통해서 최대한 가려보자 (20180912)
                        $(".o-header").css("cssText","z-index:1 !important");
                        $(".cart-icon").hide();
                     }
               }).bind(this));

            setTimeout((function(){
                              try{
               document.querySelector(".a-icon-close.aos-global-cart").addEventListener("click",function(){
               //   setTimeout(function(){
                     document.querySelector(".header-container").style.zIndex = 30;
                     document.querySelector(".cart-icon").style.display = "block";
                        if($(".m-cookie-bar.m-cookie-bar-top").length > 0){
                           $(".o-header").css("marginTop","47px")
                        }
                        /* 장바구니 관련 패치 20180917 */
                        if($(".m-cookie-bar-top").length > 0){
                           if($(window).scrollTop() > 0){$(".o-header").css("zIndex","");$(".cart-icon.aos-global").css("top","71px")}else{$(".o-header").css("zIndex","");$(".cart-icon.aos-global").css("top","98px")}
                        }else{
                           $(".o-header").css("zIndex","");
                        }
                        /* // 장바구니 관련 패치 20180917 */
               //   },1000)

               });
               }catch(e){

               }
            }).bind(this),1000)


            }

       }
     }