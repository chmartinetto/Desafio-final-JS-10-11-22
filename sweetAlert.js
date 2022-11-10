
const btn = document.querySelector('#boton-vaciar')
btn.addEventListener('click', () => {
   Swal.fire({
      position: 'top-start', //permite "top-end"
      type: 'success',
      title: 'Tu carrito ha sido vaciado',
      showConfirmButton: false,
      timer: 2000 //el tiempo que dura el mensaje en ms
    });    
})






/*$("#boton-vaciar").click(function(){
    Swal.fire({
      position: 'top-start', //permite "top-end"
      type: 'success',
      title: 'Tu carrito ha sido vaciado',
      showConfirmButton: false,
      timer: 2000 //el tiempo que dura el mensaje en ms
    });    
});*/