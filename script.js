"use strict"
//on déclare les variables
let Santé=10;
let Musique=["AnissaWejden","Getluckydaftpunk","ThrillerMickealJackson","NaturalImaginedragon","BeatitMickealJackson"]
let feuxrouges=30;
// on fait boucle avec les instruction voulu gace a while (systeme de tirage au sort pour les musiques et d'ajustement des points de Santé ).
while (Santé>0 && feuxrouges>0) {
    console.log("Santé",Santé)
    feuxrouges --;
    let Radio=Math.floor(Math.random()*5);
    if(Radio==0){
        Santé --    
    };
    console.log("Titre musique :", Musique[Radio], " On arrive dans :",feuxrouges, " feu rouge");
    };
//on crée une condition pour déterminer la fin du trajet
    if(Santé>0){
        console.log("Arrivé");
    }else{
        console.log("Boom");
    };  
  
    
    
    
