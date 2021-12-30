function getImages(dados){

    console.log(dados["data"]["results"]);
    let coisasPersonagens = dados["data"]["results"];

    for (let index = 0; index < coisasPersonagens.length; index++) {    
        
        let primeiro = coisasPersonagens[index];
        quadrado = document.querySelector("#c"+index+"");
        quadrado.querySelector("#i"+index+"").src = primeiro["thumbnail"]["path"] +"."+ primeiro["thumbnail"]["extension"];
        quadrado.querySelector("#n"+index+"").textContent = "Name: "+primeiro["name"];
        quadrado.querySelector("#cod"+index+"").textContent = "Id: "+primeiro["id"];
        quadrado.querySelector("#com"+index+"").textContent = "Comics: "+primeiro["comics"]["available"];
        quadrado.querySelector("#dsc"+index+"").textContent = "Description: "+primeiro["description"];
        if(primeiro["description"] =="" )
        quadrado.querySelector("#dsc"+index+"").textContent = "Description: Not found";
    }

}
