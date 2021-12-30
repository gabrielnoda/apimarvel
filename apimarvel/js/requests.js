const privateKey = "7cd3684824a067744989aa33c44a0fefb24a8740";
const publicKey = "22e9bab7b462ebbd01fee470d5c30192";
const maxCharacters = 1500;




function createHash(timeStamp) {

    const toBeHashed = timeStamp + privateKey + publicKey;
    const hashedMessage = md5(toBeHashed);
    return hashedMessage;

}

function getCharacterList() {

    const timeStamp = Date.now().toString();
    const offset = Math.floor((Math.random() * maxCharacters) + 1);
    const hash = createHash(timeStamp);

    
    const urlAPI = "http://gateway.marvel.com/v1/public/characters?limit=3&offset="+offset+"&ts="+timeStamp+"&apikey="+publicKey+"&hash="+hash;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            getImages(data);
        }
    };
    xhttp.open("GET", urlAPI, true);
    xhttp.send();
}
