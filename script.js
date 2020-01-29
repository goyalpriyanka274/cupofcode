var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 


var modal2 = document.getElementById("myModal2");

// Get the button that opens the modal2
var btn2 = document.getElementById("myBtn2");

// Get the <span> element that closes the modal2
var span = document.getElementsByClassName("close")[1];

// When the user clicks on the button, open the modal2
btn2.onclick = function() {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal2
span.onclick = function() {
  modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal2, close it
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
} 



var modal3 = document.getElementById("myModal3");

// Get the button that opens the modal3
var btn3 = document.getElementById("myBtn3");

// Get the <span> element that closes the modal3
var span = document.getElementsByClassName("close")[2];

// When the user clicks on the button, open the modal3
btn3.onclick = function() {
  modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal3
span.onclick = function() {
  modal3.style.display = "none";
}

// When the user clicks anywhere outside of the modal3, close it
window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
} 


function myFunction(browser) {
    if(browser==="Beginner")
    {
        alert("Redirecting you to a website suited for your requirements");
        window.open ('https://progate.com/languages/html', "_newtab" );

    }
    if(browser==="Intermediate")
    {
        alert("Redirecting you to a website suited for your requirements");
        window.open ('https://www.coursera.org/learn/html-css-javascript-for-web-developers', "_newtab" ); 
       
    }

  }
  function myFunction2(browser) {
    if(browser==="Beginner")
    {
        alert("Redirecting you to a website suited for your requirements");
        window.open ('https://www.coursera.org/specializations/c-programming', "_newtab" );

    }
    if(browser==="Intermediate")
    {
        alert("Redirecting you to a website suited for your requirements");
        window.open ('https://www.coursera.org/learn/c-plus-plus-b', "_newtab" ); 
       
    }

  }
  function myFunction3(browser) {
    if(browser==="Beginner")
    {
        alert("Redirecting you to a website suited for your requirements");
        window.open ('https://progate.com/languages/python', "_newtab" );

    }
    if(browser==="Intermediate")
    {
        alert("Redirecting you to a website suited for your requirements");
        window.open ('https://www.coursera.org/specializations/data-science-python', "_newtab" ); 
       
    }

  }

