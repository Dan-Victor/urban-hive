document.addEventListener("DOMContentLoaded", function() {

  //for the previous and next button 
    const scrollBox = document.querySelector('.third-section-img-container');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
      const scrollAmount = 600; // Adjust scroll amount as needed
      const smallshower = document.getElementById('smallshower'); // Assuming you have an element with ID "smallshower"
  const bigshower = document.getElementById('bigshower'); 
  let next={
    backgroundColor:"#7d7676",
    borderRadius: "50%",
    width:"12px",
    height:"12px",
    transition:"0.3s ease-in-out"
   }

   let previous={
     borderRadius:"20px",
     width:"30px",
     backgroundColor:"#F4A50C",
     height:"10px",
     transition:"0.3s ease-in-out", 
      }
      
     //for the previous button
    prevBtn.addEventListener('click', myfunction )
      function myfunction(){
      scrollBox.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
      // assigns the styling to the small/big shower
      Object.assign(smallshower.style,next,)
      Object.assign(bigshower.style,previous)           
    };
  
    //for the next button
    nextBtn.addEventListener( 'click', function() {
      scrollBox.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
      
      Object.assign(smallshower.style,previous,)
      Object.assign(bigshower.style,next)
        
    });
    //for responsive nav bar
    const hamburger = document.querySelector(".hamburger-menu");
    const navMenu = document.querySelector(".nav-menu");
    // to toggle the nav bar when the hamburger menu is clicked
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
    //to remove the nav bar when you click on the link
    document.querySelectorAll(".nav-link").forEach(function(n){ 
      n.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    })
  })
  let hire = document.querySelectorAll('.hire');
//hover on the hire button
for (let i = 0; i < hire.length; i++) {
  hire[i].addEventListener('mouseover', () => {
    hire[i].style.border = "1px solid #f4a50c";
    
   
  });
  hire[i].addEventListener('click', ()=>{
    window.open('./urbaanHive.html');
  })
  hire[i].addEventListener('mouseout', () => {
    hire[i].style.removeProperty('border');
    
  });
}

let hi = document.getElementById('hire-us-button');

hi.addEventListener('click', function() {
    //window.close(); // Close the current window
    window.open("./urbaanHive.html", "_blank"); // Open a new page in a new window
    //window.location.href="./tab.html"; to open a new page within the previous page
});
// for individual containers in the service container
let all = this.querySelectorAll('.all-container')

 all.forEach(function(element){
  element.style.cursor = "pointer"
  element.addEventListener('click',()=>{
   window.open('./urbaanHive.html')
  })
 })
 //for the card container btn in section 2 to go to another page
 let bt = this.querySelectorAll('.bt')
 for(let i=0; i<bt.length;i++){
  bt[i].addEventListener('click',()=>{
    window.open('./urbaanHive.html')
  })
 }
 //for all individual card container to go to the same link also as aboe when clicked
 let cardCon = document.querySelectorAll('.card-con') 
 cardCon.forEach((element)=>{
  element.addEventListener('click',()=>{
    window.open('./urbaanHive.html')
  })
 })
 
  });
    
  
  
 
 