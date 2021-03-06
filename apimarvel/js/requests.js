const privateKey = "63c57285384c52485d9fb6ba0d50a7cc00821110";
const publicKey = "48ef674c789a0bffebc2665646613a7b";
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
