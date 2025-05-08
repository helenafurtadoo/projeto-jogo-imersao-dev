ganhou = 0 //se for 1 == perdeu. Se for 0 == ganhou


for(let rodada = 1; rodada <= 3; rodada++){
   console.log("Rodada" + rodada)
  
  escolhajogador = prompt("Nivel " +rodada+ ", escolha um vidro (1 , 2 ou 3):")
  pisoquebrado = Math.floor(Math.random()*3) + 1;
  if(escolhajogador == pisoquebrado){
    alert("O vidro quebrou!")
    rodada = 1000;
    ganhou = 1
  }
  else{
    alert("Você passou! Piso quebrado estava na ponte: "  + pisoquebrado)
  }
}
// vem para ca quando a rodada >= 4
if(ganhou == 0){
  alert("parabéns! voce ganhou.")
}