let open = false
function toggleMenu(){
  
  open = !open
  const menu = document.querySelector('.mobile-navigation')

  if(open){
    menu.style.display = 'block'
  }
  else{
    menu.style.display = 'none'
  }
}
