var jogada, jogadia, venceu=0, perdeu=0, empate=0;

	function pedra() {
	    jogadaia = Math.random()*3; 

		    if (jogadaia <= 1) {
		    jogadaia = 'pedra';

		}
		else if (jogadaia <= 2) {
		    jogadaia = 'papel';
		}
		else if (jogadaia <= 3){
		    jogadaia = 'tesoura';
		}

		    jogada = 'pedra';

		    if(jogadaia === 'pedra') {
		       alert("Empate");
		       empate = empate + 1;  
		    }else if(jogadaia === 'papel') {
		       alert("Perdeu");
		       perdeu = perdeu +1;
		    }else if(jogadaia === 'tesoura'){
		    	alert("Vanceu");
		    	venceu = venceu +1;
		    }

	    document.getElementById('pontuacao').innerHTML = venceu;
	    document.getElementById('pontuacaoia').innerHTML = perdeu;
	    document.getElementById('empatados').innerHTML = empate;

	} 

	function papel() {
	    jogadaia = Math.random()*3; 

		    if (jogadaia <= 1) {
		    jogadaia = 'pedra';

		}
		else if (jogadaia <= 2) {
		    jogadaia = 'papel';
		}
		else if (jogadaia <= 3){
		    jogadaia = 'tesoura';
		}

		    jogada = 'pedra';

		    if(jogadaia === 'pedra') {
		       alert("Venceu");
		       venceu = venceu + 1;  
		    }else if(jogadaia === 'papel') {
		       alert("Empate");
		       empate = empate +1;
		    }else if(jogadaia === 'tesoura'){
		    	alert("Perdeu");
		    	perdeu = perdeu +1;
		    }

	    document.getElementById('pontuacao').innerHTML = venceu;
	    document.getElementById('pontuacaoia').innerHTML = perdeu;
	    document.getElementById('empatados').innerHTML = empate;

	} 

	function tesoura() {
	    jogadaia = Math.random()*3; 

		    if (jogadaia <= 1) {
		    jogadaia = 'pedra';

		}
		else if (jogadaia <= 2) {
		    jogadaia = 'papel';
		}
		else if (jogadaia <= 3){
		    jogadaia = 'tesoura';
		}


		    jogada = 'pedra';

		    if(jogadaia === 'pedra') {
		       alert("Perdeu");
		       perdeu = perdeu + 1;  
		    }else if(jogadaia === 'papel') {
		       alert("Venceu");
		       venceu = venceu +1;
		    }else if(jogadaia === 'tesoura'){
		    	alert("Empatou");
		    	empate = empate +1;
		    }

	    document.getElementById('pontuacao').innerHTML = venceu;
	    document.getElementById('pontuacaoia').innerHTML = perdeu;
	    document.getElementById('empatados').innerHTML = empate;
	} 

