$(document).ready(function(){

    const loadText = $(".loading-Text")[0];
    const bg = $(".mypage")[0];
    
    let load = 0

    let int = setInterval(blurring, 30)

    function scale(number, inMin, inMax, outMin, outMax) {
        return (number - inMin) * (outMax - outMin) / (inMax - inMin) + (outMin)
    }

    function blurring(){
        load++
        
      $(loadText).text(`${load}%`) 
      $(loadText).css("opacity", `${scale(load, 0, 100, 1   , 0)}`)
      $(bg).css("filter", `blur(${scale(load, 0, 100, 30, 0)}px)`)
     if (load === 100) {
            clearInterval(int)
            $(loadText).css("display", "none")
            // $(bg).css("display", "block")
        }     
    }
    
   $(".container-fluid").parents(".column-2").css("marginBottom", "30px")
   



   let toggle = $(".faq-toggle");
   let parent = toggle.parent()
   toggle.each(function(){
       let parent = $(this).parent()
       $(this).click(function(){
           parent.toggleClass('active')
       })
   });










})