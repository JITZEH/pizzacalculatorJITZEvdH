alert('welkom onze site'); // = een melding
var pizzas = 5     //de kosten van de pizza koppelen
var pizzam = 7.50  //de kosten van de pizza koppelen
var pizzal = 10    //de kosten van de pizza koppelen

document.write(" "); //een tekst
var small = prompt ("voer hier de hoeveelheid small pizza's van €5,-") // melding vwaar je kan invooeren hoevel small pizzas
document.write("small pizza's(20 cm):"); document.write(small); //hij schrijf woorden en hoeveelheid pizza's
document.write("<br   />"); //een enter
var medium = prompt ("voer hier de hoeveelheid small pizza's van €7,50,-") // melding vwaar je kan invooeren hoevel meduim pizzas
document.write("medium pizza's(25 cm):"); document.write(medium); //hij schrijf woorden en hoeveelheid pizza's
document.write("<br   />"); //een enter
var large = prompt ("voer hier de hoeveelheid large pizza's van €10,-") // melding vwaar je kan invooeren hoevel large pizzas
document.write("large pizza's(30 cm):"); document.write(large); //hij schrijf woordenen hoeveelheid pizza's

document.write("<br   />"); //een enter
document.write("<br   />"); //een enter



document.write("small:  €"); //een tekst
document.write(parseInt(small) * pizzas )
document.write("<br   />"); //een enter
document.write("medium:  €"); //een tekst
document.write(parseInt(medium) * pizzam )
document.write("<br   />"); //een enter
document.write("large:  €"); //een tekst
document.write(parseInt(large) * pizzal )
document.write("<br/>"); //een enter


document.write ('_____________________________________________' ) //een streep
document.write ('<br/>' ) //een enter
document.write ('totaal: €' ) //hij schrijf woorden
document.write ((pizzas * parseInt (small) +  pizzam * parseInt(medium) + pizzal * parseInt(large))  ) //berekening van het totaal bedrag








