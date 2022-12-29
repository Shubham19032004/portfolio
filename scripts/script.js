// aut0-type
var options = {
  strings: ["coder","web Developer"],
  typeSpeed: 40,
  backspeed:30,
  loop:true
};
var typed = new Typed('.auto-type', options);

// changing-para
const skills=document.querySelector("#skills");
const projects=document.querySelector("#projects");
const work=document.querySelector("#work");
const about=document.querySelector("#about");
const contant=document.querySelector("#button-detalis");
const para=document.querySelector("#para");
about.onclick=aboutMe;
function aboutMe()
  {
    para.innerText="Hi, I'm shubham Nainwal a programmer .currently pursuing BCA at the Vivekananda institute of professional studies";
  }

skills.onclick=handle;
function handle()
  {
    para.innerText="I am a front end  web devloper with basic knowledge of C, C++. ";
  }
  work.onclick=handles;
  function handles()
    {
      para.innerText="currently none ";
    }
  

