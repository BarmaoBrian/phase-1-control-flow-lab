
let x = 1000;
function scuberGreetingForFeet(distance) {
  if (distance <= 1000) {
    return 'This one is on me!';

  } else if (distance > 1000 && distance <= 1600) {

    return 'That will be twenty bucks.';

  } else if (distance > 1600 && distance <= 3400) {

    return 'I will gladly take your thirty bucks.';

  } else {
    return 'No can do.';
  }
}


console.log(scuberGreetingForFeet(x));

let city = 'Nairobi';
city = 'Nairobi';
function ternaryCheckCity(city) {


  return city === 'Nairobi' ? 'Ok, sounds good.' : 'No go.';
}
console.log(ternaryCheckCity(city));

let tips= 'generous';
function switchOnCharmFromTip(tips) {
switch(tips) 
{
  case 'generous':
  return 'Thank you so much.';
  case 'not as generous':
   return 'Thank you.';
  default:
  return 'Bye.';
}

}
console.log(switchOnCharmFromTip(tips));