const next1 = document.querySelector('#next1')
const next2 = document.querySelector('#next2')
const prev2 = document.querySelector('#prev2')
const prev3 = document.querySelector('#prev3')

const slide_show = document.querySelector('.slide_show')

next1.addEventListener('click',()=>{
    slide_show.style.left = "-824px"
})

next2.addEventListener('click',()=>{
    slide_show.style.left = "-1648px"
})

prev2.addEventListener('click',()=>{
    slide_show.style.left = "0px"
})
prev3.addEventListener('click',()=>{
    slide_show.style.left = "-824px"
})

function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tab-pane" and hide them
    tabcontent = document.getElementsByClassName("tab-pane");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tab-link" and remove the class "active"
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Initialize the first tab to be open
document.addEventListener("DOMContentLoaded", function() {
    document.getElementsByClassName("tab-link")[0].click();
});