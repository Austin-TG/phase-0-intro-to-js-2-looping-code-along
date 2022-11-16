for (let age = 30; age < 40; age++)
{
    console.log(`I'm ${age} years old.  Happy birthday to me!`);
}
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts){
    for (let i = 0; i < gifts.length; i++){
        console.log(`wrapped ${gifts[i]} and added a bow!`);
    }    
    return gifts;
}
wrapGifts(gifts);

const giftAnnounce = [];
writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");

function writeCards(sNames, eName){
    for (let i = 0; i < sNames.length; i++)
    {
        //console.log(`Thank you, ${sNames[i]}, for the wonderful ${eName} gift!`);
        giftAnnounce[i] = `Thank you, ${sNames[i]}, for the wonderful ${eName} gift!`;
    }
    return giftAnnounce;
}
function countDown(num){
    while(num >= 0){
        console.log(num);
        num--;
    }
}

countDown(10);
countDown(4);