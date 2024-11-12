// Exercice 1:
// Ecrire un algorithme qui demande l’âge d’un enfant à l’utilisateur. Ensuite, il l’informe de sa catégorie :
// "Poussin" de 6 à 7 ans
// "Pupille" de 8 à 9 ans
// "Minime" de 10 à 11 ans
// "Cadet" après 12 ans

/*function age (){
    let _age = prompt("Quel est votre âge?");
    if (_age<=7) {
        alert("Salut le poussin");
    }else if (_age>=8 && _age<=9) {
        alert("ça va la Pupille");
    } else if (_age>=10 && _age<=11) {
        alert("Coucou Minime");
    } else if (_age>=12) {
        alert("Bonjour le cadet");
    } else {
        alert("Vous n'êtes dans la bonne tranche d'âge. Désolé");
    }
}

age();*/

// Exercice 2:
// Cet algorithme est destiné à prédire l'avenir, et il doit être infaillible !
// Il lira au clavier l’heure et les minutes, et il affichera l’heure qu’il sera une minute plus tard.
// Par exemple, si l'utilisateur tape 21 puis 32, l'algorithme doit répondre :
// "Dans une minute, il sera 21 heure(s) 33".
// NB : on suppose que l'utilisateur entre une heure valide. Pas besoin donc de la vérifier.
// De même que le précédent, cet algorithme doit demander une heure et en afficher une autre. Mais cette fois, il doit gérer également les secondes, et afficher l'heure qu'il sera une seconde plus tard.
// Par exemple, si l'utilisateur tape 21, puis 32, puis 8, l'algorithme doit répondre : "Dans une seconde, il sera 21 heure(s), 32 minute(s) et 9 seconde(s)".
// NB : là encore, on suppose que l'utilisateur entre une date valide.

// function time() {
//   if (_seconde < 59) {
//     //Incrémente d'une seconde si celle ci est inférieur à 59
//     _seconde++;
//   } else if (_seconde == 59 && _minutes < 59) {
//     //renvoie 0 seconde (59 + 1 = 60 => 1 minutes) et incrémente d'une minute
//     _seconde = 0;
//     _minutes++;
//   } else if (_minutes < 59) {
//     // Incrémente d'une minute si celle ci est inférieur à 59
//     _minutes++;
//   } else if (_minutes == 59 && _heure < 23) {
//     //  Arrivé à cette condition les minutes et les secondes seront certainement à 59;  donc Renvoie 0 seconde et 0 minute et incrémente d'1 heure.
//     _seconde = 0;
//     _minutes = 0;
//     _heure++;
//   } else if (_heure == 23) {
//     //Dans cette condition on sera certainement à 23h 59mn 59sec; et si on incrémente d'1 seconde il sera minuit => 00:00:00.
//     _seconde = 0;
//     _minutes = 0;
//     _heure = 0;
//   }

//   alert(
//     "Dans une seconde il sera " +
//       _heure +
//       " heure(s)  " +
//       _minutes +
//       " minutes et " +
//       _seconde +
//       " secondes"
//   );
// }
// let _heure = prompt("Saisir une heure");
// let _minutes = prompt("Saisir les minutes");
// let _seconde = prompt("Saisir les secondes");

// time();

// Exercice 3:
// Un magasin de reprographie facture 0,10 E les dix premières photocopies, 0,09 E les vingt suivantes et 0,08 E au-delà. Ecrivez un algorithme qui demande à l’utilisateur le nombre de photocopies effectuées et qui affiche la facture correspondante. (demandez à votre formateur plus de précisions sur l'attendu)

// function facture() {
//   let nbPage = prompt("Combien de pages avez vous à photocopier ?");
//   let resultat;

//   if (nbPage <= 10) {
//     //On pose d'abord la condition où le nombre de page à photocopier est inférieur ou égal à 10.
//     resultat = nbPage * 0.1;
//   }
//   if (nbPage > 10 && nbPage <= 30) {
//     //On pose ensuite la condition où le nombre de page est compris entre 10 et 30; tout en considérant que les 10 premières pages sont photocopiées à 0.1E et le reste à 0.09E.
//     resultat = 10 * 0.1 + (nbPage - 10) * 0.09;
//   }
//   if (nbPage > 30) {
//     //Enfin on pose la condition où le nombre de page est supérieur à 30 tout en gardant à l'esprit que les 10 premières sont à 0.1E les 20 suivantes à 0.09E et le reste à 0.08E.
//     resultat = 10 * 0.1 + (nbPage - 10) * 0.09 + (nbPage - 30) * 0.08;
//   }

//   alert("Votre facture est de " + resultat + " E");
// }

//      //J'appelle ma fonction pour tester
// facture();

// Exercice 4:
// Les habitants de Zorglub paient l’impôt selon les règles suivantes :
// les hommes de plus de 20 ans paient l’impôt
// les femmes paient l’impôt si elles ont entre 18 et 35 ans
// les autres ne paient pas d’impôt
// Le programme demandera donc l’âge et le sexe du Zorglubien, et se prononcera donc ensuite sur le fait que l’habitant est imposable.

// function impot() {
//   //On déclare nos variables en demandant à l'utilisateur d'insérer son sexe et son âge
//   let sexe = prompt("Sexe ? M pour Masculin ou F pour Féminin");
//   let age = prompt("Quel est votre âge?");

//   //On pose une première condition pour voir si l'homme est imposable
//   if (sexe == "M" && age > 20) {
//     alert("Vous êtes imposable");
//     //On pose une seconde condition pour voir si la femme est imposable
//   } else if (sexe == "F" && age >= 18 && age <= 35) {
//     alert("Vous êtes Nimposable");
//     //On ferme la condition en disant que la personne n'est pas imposable car e rentre dans aucune des conditions précédentes
//   } else {
//     alert("Vous n'êtes pas imposable");
//   }
// }
// // On appelle notre fonction pour vérifier
// impot();

// Exercice 5:
// Les élections législatives, en Guignolerie Septentrionale, obéissent à la règle suivante :
// lorsque l'un des candidats obtient plus de 50% des suffrages, il est élu dès le premier tour.
// en cas de deuxième tour, peuvent participer uniquement les candidats ayant obtenu au moins 12,5% des voix au premier tour.
// Vous devez écrire un algorithme qui permette la saisie des scores de quatre candidats au premier tour. Cet algorithme traitera ensuite le candidat numéro 1 (et uniquement lui) : il dira s'il est élu, battu, s'il se trouve en ballottage favorable (il participe au second tour en étant arrivé en tête à l'issue du premier tour) ou défavorable (il participe au second tour sans avoir été en tête au premier tour).

// function election() {
//   //On crée nos 4 variables pour pouvoir entrer le résultat de chaque candidat
//   let el1 = prompt("Saisir le resultat du candidat n°1");
//   let el2 = prompt("Saisir le resultat du candidat n°2");
//   let el3 = prompt("Saisir le resultat du candidat n°3");
//   let el4 = prompt("Saisir le resultat du candidat n°4");

//   if (el1 >= 50) {
//     //On pose une première condition pour voir si le candidat numero 1 est élu au premier tour
//     alert("Félicitations! Vous êtes élu au premier tour.");
//   } else if (el1 >= 12.5 && el1 < 50 && el2<50 && el3<50 && el4<50) {
//     //Une deuxième condition dans la mesure où il n'est pas élu au premier tour pour voir s'il a le droit de participer au second suffrage au cas où aucun des autres candidats n'aurait obtenu plus de 50%
//     alert("Vous avez le droit de participer au second tour");
//   } else if (el1 >= 12.5 && el1 < 50 || el2>50 || el3>50 || el4>50) {
//     //Une troisième condition dans la mesure où il n'est pas élu au premier tour et qu'un autre candidat aurait obtenu + de 50%
//     alert("Mince! C'est pas votre chance. Une prochaine peut-être");
//   } else {
//     //On boucle la condition s'il ne rentre dans aucune des condition précédente
//     alert("Mince! C'est pas votre chance. Une prochaine peut-être");
//   }
// }
// //On appelle notre fonction pour tester
// election();

// Exercice 6:
// Une compagnie d'assurance automobile propose à ses clients quatre familles de tarifs identifiables par une couleur, du moins au plus onéreux : tarifs bleu, vert, orange et rouge. Le tarif dépend de la situation du conducteur :
// un conducteur de moins de 25 ans et titulaire du permis depuis moins de deux ans, se voit attribuer le tarif rouge, si toutefois il n'a jamais été responsable d'accident. Sinon, la compagnie refuse de l'assurer.
// un conducteur de moins de 25 ans et titulaire du permis depuis plus de deux ans, ou de plus de 25 ans mais titulaire du permis depuis moins de deux ans a le droit au tarif orange s'il n'a jamais provoqué d'accident, au tarif rouge pour un accident, sinon il est refusé.
// un conducteur de plus de 25 ans titulaire du permis depuis plus de deux ans bénéficie du tarif vert s'il n'est à l'origine d'aucun accident et du tarif orange pour un accident, du tarif rouge pour deux accidents, et refusé au-delà
// De plus, pour encourager la fidélité des clients acceptés, la compagnie propose un contrat de la couleur immédiatement la plus avantageuse s'il est entré dans la maison depuis plus d'un an.
// Ecrire l'algorithme permettant de saisir les données nécessaires (sans contrôle de saisie) et de traiter ce problème. Avant de se lancer à corps perdu dans cet exercice, on pourra réfléchir un peu et s'apercevoir qu'il est plus simple qu'il n'en a l'air (cela s'appelle faire une analyse !)

function assu() {
  let age = prompt("Saisissez votre age");
  let dtePermis = prompt("Combien d'année de permis avez-vous ?");
  let accident = prompt("Combien d'accident avez-vous déjà eu?");

  if (
    (age < 25 && dtePermis < 2 && accident == 0) ||
    (age < 25 && dtePermis >= 2 && accident >= 1) ||
    (age >= 25 && dtePermis < 2 && accident >= 1) ||
    (age >= 25 && dtePermis >= 2 && accident >= 2)
  ) {
    alert("Vous avez droit à un tarif ROUGE");
  } else if (
    (age < 25 && dtePermis >= 2 && accident == 0) ||
    (age >= 25 && dtePermis < 2 && accident == 0) ||
    (age >= 25 && dtePermis >= 2 && accident >= 1)
  ) {
    alert("Vous avez droit à un tarif ORANGE");
  } else if (age >= 25 && dtePermis >= 2 && accident == 0) {
    alert("Vous avez droit à un tarif VERT");
  }else {
    alert("Désolé, nous ne pouvons pas vous assurez")
  }
}
assu();
