function scrollPara(id) {
    
    $('html, body').animate({
        scrollTop: $(id).offset().top
    }, 800, function () {
        window.location.hash = id;
    });

}


$(function () { 

    $("#irParaSecao1").on("click", function () {
        scrollPara("#secao1");
    });

    $("#irParaSecao2").on("click", function () {
        scrollPara("#secao2");
    });

    $("#irParaSecao3").on("click", function () {
        scrollPara("#secao3");
    });

    $("#irParaSecao4").on("click", function () {
        scrollPara("#secao4");
    });

    $("#irParaSecao5").on("click", function () {
        scrollPara("#secao5");
    });

    $("#irParaSecao6").on("click", function () {
        scrollPara("#secao6");
    });

    $("#irParaSecao7").on("click", function () {
        scrollPara("#secao7");
    });

    $("#irParaSecao8").on("click", function () {
        scrollPara("#secao8");
    });

});


function gerenciarAltoContraste(){
    console.log("funcao gerenciar alto contraste");
    
    var corAtual, elementoBody , umcor,secaoum,secaodois,doiscor,trescor,quatrocor,cincocor,seiscor,setecor,oitocor,secaotres,secaoquatro,secaocinco,secaoseis,secaosete,secaooito;
    elementoBody = document.getElementsByTagName("body")[0];
    secaoum=document.getElementById("secao1"); 
    secaodois=document.getElementById("secao2"); 
    secaotres=document.getElementById("secao3"); 
    secaoquatro=document.getElementById("secao4"); 
    secaocinco=document.getElementById("secao5"); 
    secaoseis=document.getElementById("secao6"); 
    secaosete=document.getElementById("secao7"); 
    secaooito=document.getElementById("secao8"); 

    
    corAtual = elementoBody.style.backgroundColor;
    umcor = secaoum.style.backgroundColor;  
    doiscor = secaodois.style.backgroundColor;
    trescor = secaotres.style.backgroundColor;
    quatrocor = secaoquatro.style.backgroundColor;
    cincocor = secaocinco.style.backgroundColor;
    seiscor = secaoseis.style.backgroundColor;
    setecor = secaosete.style.backgroundColor;
    oitocor = secaooito.style.backgroundColor;

    
    if(corAtual == "black"){ 
        elementoBody.style.backgroundColor = "white"; 
        elementoBody.style.color = "black";    
    } else {
        elementoBody.style.backgroundColor = "black";   
        elementoBody.style.color = "black";      
    }
    
    if(umcor =="black" && doiscor =="black" && trescor =="black" && quatrocor =="black" && cincocor =="black" && seiscor =="black" && setecor =="black" && oitocor =="black" ){
        secaoum.style.backgroundColor="white";
        secaoum.style.color = "black";

        secaodois.style.backgroundColor="white";
        secaodois.style.color = "black";

        secaotres.style.backgroundColor="white";
        secaotres.style.color = "black";

        secaoquatro.style.backgroundColor="white";
        secaoquatro.style.color = "black";

        secaocinco.style.backgroundColor="white";
        secaocinco.style.color = "black";

        secaoseis.style.backgroundColor="white";
        secaoseis.style.color = "black";

        secaosete.style.backgroundColor="white";
        secaosete.style.color = "black";

        secaooito.style.backgroundColor="white";
        secaooito.style.color = "black";
    }else{
        secaoum.style.backgroundColor="black";
        secaoum.style.color = "white";

        secaodois.style.backgroundColor="black";
        secaodois.style.color = "white";

        secaotres.style.backgroundColor="black";
        secaotres.style.color = "white";

        secaoquatro.style.backgroundColor="black";
        secaoquatro.style.color = "white";

        secaocinco.style.backgroundColor="black";
        secaocinco.style.color = "white";

        secaoseis.style.backgroundColor="black";
        secaoseis.style.color = "white";

        secaosete.style.backgroundColor="black";
        secaosete.style.color = "white";

        secaooito.style.backgroundColor="black";
        secaooito.style.color = "white";
    }
}


function gerenciarExtra(){
    
    var corAtual1, elementoBod1y;
    elementoBody1 = document.getElementsByTagName("body")[0]; 
    
    corAtual1 = elementoBody1.style.backgroundColor;    
    
    if(corAtual1 == "black"){     
        elementoBody1.style.backgroundColor = "gray";   
        elementoBody1.style.color = "gray";  
    } else {
        elementoBody1.style.backgroundColor = "gray";   
        elementoBody1.style.color = "gray";      
    }
    
}



window.onload = function(){
    document.getElementById("opAltoContraste").addEventListener("click", gerenciarAltoContraste);
    document.getElementById("opExtra").addEventListener("click", gerenciarExtra);
}






