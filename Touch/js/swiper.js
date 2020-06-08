document.addEventListener ("DOMContentLoaded", function () {

    let swipeList = document.querySelector (".swipeList")

    let  initialX, currentX, movedX;
    let winwidth = Math.max (document.documentElement.clientWidth || 0, window.innerWidth || 0, )
console.log (winwidth)
    function startTouch (event) {

        initialX = event.touches [0].clientX
    }

    function moveTouch (event){
        currentX = event.touches [0].clientX;
        movedX = currentX - initialX;
        event.target.style.left = movedX + 'px';

        console.log (movedX)
    }






swipeList.addEventListener ("touchstart", startTouch, false )
swipeList.addEventListener ("touchmove", moveTouch, false )
swipeList.addEventListener ("touchend", endTouch, false )

})