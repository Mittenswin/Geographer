var aText = new Array(
    "Salutation jeune voyageur, comme l\'indique son nom, le but de ce jeu est de deviner toutes les capitales d\'une région spécifique du monde une à une afin de compléter toutes les régions du monde et devenir le \'Geographer\', ce qui correspond au titre attribué à celui qui réussiras cette exploit ... ", 
    "Quelques indices se cachent dans le jeu, comme l'arrière plan par exemple.",
    "Reviens me voir lorsque tu seras digne de ce titre !",
    "À Bientôt !"
    );
    var iSpeed = 50; 
    var iIndex = 0; 
    var iArrLength = aText[0].length; 
    var iScrollAt = 20; 
     
    var iTextPos = 0; 
    var sContents = ''; 
    var iRow; 
     
    function typewriter()
    {
     sContents =  ' ';
     iRow = Math.max(0, iIndex-iScrollAt);
     var destination = document.getElementById("text");
     
     while ( iRow < iIndex ) {
      sContents += aText[iRow++] + '<br />';
     }
     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
     if ( iTextPos++ == iArrLength ) {
      iTextPos = 0;
      iIndex++;
      if ( iIndex != aText.length ) {
       iArrLength = aText[iIndex].length;
       setTimeout("typewriter()", 500);
      }
     } else {
      setTimeout("typewriter()", iSpeed);
     }
    }
    
    
    typewriter();