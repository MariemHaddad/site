function validaMot() {
    var Mot= document.getElementById('Mot');
      if(document.getElementById('Mot').value == '') {
        document.getElementById('MotError').innerHTML = 'Le champ ne peut pas être vide';
        return false;
      } 
      ch = document.getElementById('Mot').value
      for (i=0;i< ch.length ;i++){
        if( 
          !(
            ch.charAt(i).toUpperCase() >="A" &&
            ch.charAt(i).toUpperCase() <="Z" 
          )
        ) 
     
        {
          alert ("le champ doit etre alphabétiques");
          return false; 
        }
      }
      var ch;
      if(ch.substr(ch.length-4)=="tion")
      {
        document.getElementById('MotError').innerHTML = "c'est un mot féminin";
        return false;
      }
      if(ch.substr(ch.length-4)=="sion")
      {
        document.getElementById('MotError').innerHTML = "c'est un mot féminin";
        return false;
      }
      if(ch.substr(ch.length-3)=="ure")
      {
        document.getElementById('MotError').innerHTML = "c'est un mot féminin";
        return false;
      }
      if(ch.substr(ch.length-3)=="oie")
      {
        document.getElementById('MotError').innerHTML = "c'est un mot féminin";
        return false;
      }
      if(ch.substr(ch.length-3)=="pis")
      {
        document.getElementById('MotError').innerHTML = "c'est un mot masculin";
        return false;
      }
      if(ch.substr(ch.length-6)=="souris")
      {
        document.getElementById('MotError').innerHTML = "c'est un mot féminin";
        return false;
      }
      if(ch.substr(ch.length-4)=="aire")
      {
        document.getElementById('MotError').innerHTML = "c'est un mot féminin";
        return false;
      }
      if(ch.substr(ch.length-3)=="sac")
      {
        document.getElementById('MotError').innerHTML = "c'est un mot masculin";
        return false;
      }
      if(ch.substr(ch.length-3)=="oix")
      {
        document.getElementById('MotError').innerHTML = "c'est un mot féminin";
        return false;
      }
      if(ch.substr(ch.length-3)=="lle")
      {
        document.getElementById('MotError').innerHTML = "c'est un mot féminin";
        return false;
      }
      if(ch.substr(ch.length-2)=="oi")
      {
        document.getElementById('MotError').innerHTML = "c'est un mot féminin";
        return false;
      }
      if(ch.substr(ch.length-2)=="te")
      {
        document.getElementById('MotError').innerHTML = "c'est un mot féminin";
        return false;
      }
      if(ch.substr(ch.length-3)=="tre")
      {
        document.getElementById('MotError').innerHTML = "c'est un mot féminin";
        return false;
      }
      if(ch.substr(ch.length-4)=="ille")
      {
        document.getElementById('MotError').innerHTML = "c'est un mot féminin";
        return false;
      }
      if(ch.substr(ch.length-4)=="esse")
      {
        document.getElementById('MotError').innerHTML = "c'est un mot féminin";
        return false;
      }
      if(ch.substr(ch.length-4)=="oire")
      {
        document.getElementById('MotError').innerHTML = "c'est un mot féminin";
        return false;
      }
      if(ch.substr(ch.length-5)=="soeur")
      {
        document.getElementById('MotError').innerHTML = "c'est un mot féminin";
        return false;
      }
      if(ch.substr(ch.length-4)=="pere")
      {
        document.getElementById('MotError').innerHTML = "c'est un mot masculin";
        return false;
      }
      if(ch.substr(ch.length-4)=="mere")
      {
        document.getElementById('MotError').innerHTML = "c'est un mot féminin";
        return false;
      }
      if(ch.substr(ch.length-3)=="ris")
      {
        document.getElementById('MotError').innerHTML = "c'est un mot féminin";
        return false;
      }
      if(ch.substr(ch.length-2)=="de")
      {
        document.getElementById('MotError').innerHTML = "c'est un mot féminin";
        return false;
      }
      if(ch.substr(ch.length-2)=="le")
      {
        document.getElementById('MotError').innerHTML = "c'est un mot féminin";
        return false;
      }
      if(ch.substr(ch.length-2)=="se")
      {
        document.getElementById('MotError').innerHTML = "c'est un mot féminin";
        return false;
      }
      if(ch.substr(ch.length-3)=="ent")
      {
        document.getElementById('MotError').innerHTML = "c'est un mot masculin";
        return false;
      }
      
      if(ch.substr(ch.length-3)=="age")
      {
        document.getElementById('MotError').innerHTML = "c'est un mot masculin";
        return false;
      }
      if(ch.substr(ch.length-3)=="ier")
      {
        document.getElementById('MotError').innerHTML = "c'est un mot masculin";
        return false;
      }
      if(ch.substr(ch.length-3)=="oir")
      {
        document.getElementById('MotError').innerHTML = "c'est un mot masculin";
        return false;
      }
      if(ch.substr(ch.length-4)=="isme")
      {
        document.getElementById('MotError').innerHTML = "c'est un mot masculin";
        return false;
      }
      if(ch.substr(ch.length-3)=="eur")
      {
        document.getElementById('MotError').innerHTML = "c'est un mot masculin";
        return false;
      }
      if(ch.substr(ch.length-3)=="age")
      {
        document.getElementById('MotError').innerHTML = "c'est un mot masculin";
        return false;
      }
      if(ch.substr(ch.length-2)=="al")
      {
        document.getElementById('MotError').innerHTML = "c'est un mot masculin";
        return false;
      }
      if(ch.substr(ch.length-3)=="son")
      {
        document.getElementById('MotError').innerHTML = "c'est un mot féminin";
        return false;
      }
      if(ch=="chambre")
      {
        document.getElementById('MotError').innerHTML = "c'est un mot féminin";
        return false;
      }
      if(ch=="arbre")
      {
        document.getElementById('MotError').innerHTML = "c'est un mot masculin";
        return false;
      }
      if(ch.substr(ch.length-3)=="eau")
      {
        document.getElementById('MotError').innerHTML = "c'est un mot masculin";
        return false;
      }
      if(ch.substr(ch.length-3)=="ylo")
      {
        document.getElementById('MotError').innerHTML = "c'est un mot masculin";
        return false;
      }
      if(ch.substr(ch.length-2)=="er")
      {
        document.getElementById('MotError').innerHTML = "c'est un verbe!";
        return false;
      }
      if(ch.substr(ch.length-2)=="ir")
      {
        document.getElementById('MotError').innerHTML = "c'est un verbe!";
        return false;
      }
      if(ch.substr(ch.length-4)=="plan")
      {
        document.getElementById('MotError').innerHTML = "c'est un mot masculin";
        return false;
      }
      if(ch.substr(ch.length-2)=="ne")
      {
        document.getElementById('MotError').innerHTML = "c'est un mot féminin";
        return false;
      }
      if(ch.substr(ch.length-7)=="prendre")
      {
        document.getElementById('MotError').innerHTML = "c'est un verbe!";
        return false;
      }
      if(ch.substr(ch.length-3)=="eil")
      {
        document.getElementById('MotError').innerHTML = "c'est un mot masculin";
        return false;
      }
      return false;
    
  }