const header = document.querySelector(".navbar");
const context = document.querySelector(".bck") 
const hDiv =  document.querySelector(".hDiv")
const about = document.querySelector(".about")


    function triggerAnimation() {

        header.className = "";
        setTimeout(function() {
            header.className = "navbar " +"plummit";
        }, 10);
    }
    
    about.style.visibility = 'hidden' // hide the about Dev crew info 
    triggerAnimation();//trigger nav bar animation
    
//---------- function to add h2 tag for animation
    function loadH2(){
        const hString =
        `
            <h2>Dev Crew</h2>
        `
        hDiv.className = "css-typing"
        hDiv.innerHTML = hString
    }

    //--------------wait 5 seconds then display h2
    setTimeout(function() {
        loadH2();
    }, 5000);

//----------------- display the about Dev crew info after 12 sec
    setTimeout(function() {
        about.style.visibility = 'visible'
    }, 12000);
