(function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
})(function(){
    var today=new Date,flag=!1;5==today.getUTCMonth()&&(3==today.getUTCDate()?today.getUTCHours()>=16&&(flag=!0):4==today.getUTCDate()&&today.getUTCHours()<16&&(flag=!0)),flag&&(document.querySelector(".home-template .main-header").style.backgroundImage="url(/assets-nonfree/images/background-sp.png");
});
