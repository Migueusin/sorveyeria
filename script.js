botao.addEventListener ('click',function(){
    
 var nomeCliente = nome.value;
 var quantiaSorvetes = pedido.value;
 var saborSorvetes = sabores.value;
 
 
 /*alert ("Nome: " + nomeCliente + "Qnt: " + quantiaSorvetes "Sabor; " + saborSorvete);*/

pedidoNome.innerHTML= nomeCliente;
pedidoQuantia.innerHTML= quantiaSorvetes;
pedidoSorvetes.innerHTML= saborSorvetes;

});