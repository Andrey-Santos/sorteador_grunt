document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('form-sorteador').addEventListener('submit', function(e){
        e.preventDefault();
        let numeroMaximo = parseInt(document.getElementById('numero-maximo').value);
        let numeroAleatorio = Math.random() * numeroMaximo;
        let numeroSorteado = document.getElementById('numero-sorteado');
        
        numeroAleatorio = Math.floor(numeroAleatorio);
        
        document.getElementById('numero-sorteado').innerText = Math.floor(numeroAleatorio);
        document.querySelector('.resultado').style.display = 'block';
    }); 
});