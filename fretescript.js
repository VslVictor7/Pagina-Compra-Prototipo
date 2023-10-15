function calculo(){
   var cep = $("#cep").val();
   $.post('Auxiphp.php',{cep:cep},function(data){
     $("#retorno").html(data);
   });
 }