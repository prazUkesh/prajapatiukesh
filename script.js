
var text = "Go Lang/API Dev";

const typewriter = document.getElementById('role');
function typeWriter() {
  typewriter.innerHTML = '';
  for (let i = 0; i < text.length; i++) {   
    setTimeout(() => {     
      typewriter.innerHTML += text.charAt(i);
    }, 100 * i); 
  }
}

typeWriter();




