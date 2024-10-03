// nab button 

button = document.getElementById('navbar-toggler');

button.addEventListener('click', clickfunction)

// function to handle click

function clickfunction(){
    console.log('this')
   let hide = document.getElementById('navbar-nav');
    console.log(hide.classList)

  if(hide.style.display = 'none'){
    hide.style.display = 'block';
    hide.classList.add('show')
  }
  else{
    hide.classList.add('hide');
  }
  
   
    
}
