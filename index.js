console.log("JavaScript Loaded")

const onGetStarted = () => {
    window.open("./pages/home/index.html", "_self");
};
let openNav=()=>{

    document.getElementById("mySidenav").style.width = "250px";
}
  
  
  let closeNav=() => {
    document.getElementById("mySidenav").style.width = "0";
  }
