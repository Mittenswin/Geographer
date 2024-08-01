let flag;
let winstreak = 1; // represente le score

// Tableau des images de drapeau
listflag_temp = ['au.png', 'fj.png', 'ki.png', 'mh.png', 'fm.png', 'nr.png', 'nz.png', 'pw.png', 'pg.png', 'ws.png', 'sb.png', 'to.png', 'tv.png', 'vu.png']

listflag = []
for (const flag of listflag_temp) {
    listflag.push("../countries/Océanie/"+flag);
}

// Tableau des regex de chaques capitales
listcap = ['/^[cC]{1}[Aa]{1}[Nn]{1}[Bb]{1}[Ee]{1}[Rr]{1}[Rr]{1}[Aa]{1}$/',
    '/^[sS]{1}[Uu]{1}[Vv]{1}[Aa]{1}$/',
    '/^[tT]{1}[Aa]{1}[Rr]{1}[Aa]{1}[Ww]{1}[Aa]{1}[- ]{1}[Ss]{1}[Uu]{1}[Dd]{1}$/',
    '/^[dD]{1}[Ee]{1}[Ll]{1}[Aa]{1}[Pp]{1}[- ]{1}[Uu]{1}[Ll]{1}[Ii]{1}[Gg]{1}[Aa]{1}[- ]{1}[Dd]{1}[Aa]{1}[Rr]{1}[Rr]{1}[Ii]{1}[Tt]{1}$/', 
    '/^[pP]{1}[Aa]{1}[Ll]{1}[Ii]{1}[Kk]{1}[Ii]{1}[Rr]{1}$/', 
    '/^[yY]{1}[Aa]{1}[Rr]{1}[Ee]{1}[Nn]{1}$/', 
    '/^[wW]{1}[Ee]{1}[Ll]{1}[Ll]{1}[Ii]{1}[Nn]{1}[Gg]{1}[Tt]{1}[Oo]{1}[Nn]{1}$/', 
    '/^[nN]{1}[Gg]{1}[Ee]{1}[Rr]{1}[Uu]{1}[Ll]{1}[Mm]{1}[Uu]{1}[Dd]{1}$/', 
    '/^[pP]{1}[Oo]{1}[Rr]{1}[Tt]{1}[  ]{1}[Mm]{1}[Oo]{1}[Rr]{1}[Ee]{1}[Ss]{1}[Bb]{1}[Yy]{1}$/', 
    '/^[aA]{1}[Pp]{1}[Ii]{1}[Aa]{1}$/',
    '/^[hH]{1}[Oo]{1}[Nn]{1}[Ii]{1}[Aa]{1}[Rr]{1}[Aa]{1}$/', 
    '/^[nN]{1}[Uu]{1}[Kk]{1}[Uu]{1}[ʻ\' ]{1}[Aa]{1}[Ll]{1}[Oo]{1}[Ff]{1}[Aa]{1}$/', 
    '/^[fF]{1}[Uu]{1}[Nn]{1}[Aa]{1}[Ff]{1}[Uu]{1}[Tt]{1}[Ii]{1}$/', 
    '/^[pP]{1}[Oo]{1}[Rr]{1}[Tt]{1}[- ]{1}[Vv]{1}[Ii]{1}[Ll]{1}[Aa]{1}$/']
     
// Tableau de liste des pays d'Asie
listcout = ["Australie", "Fidji", "Kiribati", "Îles Marshall",
    "Micronésie", "Nauru", "Nouvelle-Zélande", "Palaos",
    "Papouasie-Nouvelle-Guinée", "Samoa", "Îles Salomon",
    "Tonga", "Tuvalu", "Vanuatu"]

// Tableau de leurs capitales respectives
listcap2 = ["Canberra", "Suva", "Tarawa-Sud", "Delap-Uliga-Darrit",
    "Palikir", "Yaren", "Wellington", "Ngerulmud", "Port Moresby", 
    "Apia", "Honiara", "Nukuʻalofa", "Funafuti", "Port-Vila" ]

// Tableau des fonds d'écrans pour chaque pays
listbg_temp = ['australie.jpg', 'fidji.jpg', 'kiribati.jpg', 'ilesmarshall.jpg', 
    'micronesie.jpg', 'nauru.jpg', 'nouvellezelande.jpg', 'palao.jpg', 'papouasie.jpg',
    'samoa.jpg', 'ilesalomon.jpg', 'tonga.jpeg', 'tuvalu.jpg', 'vanuatu.jpg']

listbg = []
for (const bg of listbg_temp) {
    listbg.push("../backgrounds/Océanie/"+bg);
}

flagindex=Math.floor(Math.random()*listflag.length); // l'index du pays choisie de façon aléatoire
flag = $('img#flag'); 
flag.attr({
    src: listflag[flagindex]
});

$('.winstreak').attr('title','Winstreak : '+winstreak+"/"+listflag_temp.length);

indexcout = listflag.indexOf(flag.attr('src')) // l'index du pays choisie de façon aléatoire = flagindex
$('#triche').text(listcout[indexcout]) 
document.body.style.backgroundImage = "url("+listbg[indexcout]+")"; // le fond utilise donc celui du pays

$('.input').on('keydown', function(event){
    regexString = listcap[indexcout].slice(1, -1); //j'enlève l'echappement '/' de l'élément choisie du tableau de regex 
    const regexcap = new RegExp(regexString);  //je le converti en regex sans les guillemet 'exemple' -> /exemple/
    
    let time = window.setInterval(function() {
        if(event.key!='Enter'){
            if(regexcap.test($('.input').val())){ // on test avec le regex si l'input est bon
                if(winstreak==14){ // 14 est le nombre de pays , donc fin
                    $('#win').css('display', 'block'),
                    $('.button2').on('mousedown', function(event){location.reload()}),
                    $('.temps').text('Temps'+' : '+ seconds +" s"),
                    $('.winstreak').text(winstreak),
                    $('.winstreak').attr('title','Winstreak : '+winstreak+"/"+listflag_temp.length);
                    clearInterval(timerId);
                }
                $('.input').val(''),
                // on suprime pour chaque tableau les élément relatif au pays : capital, fond d'image, image drapeau
                listcap.splice(indexcout, 1), listcout.splice(indexcout, 1),
                listflag.splice(indexcout, 1), listbg.splice(indexcout,1), listcap2.splice(indexcout, 1), 
                flagindex=Math.floor(Math.random()*listflag.length), // on repioche un chiffre aléatoire
                flag = $('img#flag'),
                flag.attr({
                    src: listflag[flagindex]}
            ),
            indexcout = listflag.indexOf(flag.attr('src')),
            $('#triche').text(listcout[indexcout]),
            document.body.style.backgroundImage = "url("+listbg[indexcout]+")",
            winstreak+=1
            }
        }
    }, 10);

    if(event.key==='Enter'){
        if(regexcap.test($('.input').val())){ // on test avec le regex si l'input est bon
            if(winstreak==14){ // 14 est le nombre de pays , donc fin
                $('#win').css('display', 'block'),
                $('.button2').on('mousedown', function(event){location.reload()}),
                $('.temps').text('Temps'+' : '+ seconds +" s"),
                $('.winstreak').text(winstreak),
                $('.winstreak').attr('title','Winstreak : '+winstreak+"/"+listflag_temp.length);
                clearInterval(timerId);
            }
            $('.input').val(''),
            // on suprime pour chaque tableau les élément relatif au pays : capital, fond d'image, image drapeau
            listcap.splice(indexcout, 1), listcout.splice(indexcout, 1),
            listflag.splice(indexcout, 1), listbg.splice(indexcout,1), listcap2.splice(indexcout, 1), 
            flagindex=Math.floor(Math.random()*listflag.length), // on repioche un chiffre aléatoire
            flag = $('img#flag'),
            flag.attr({
                src: listflag[flagindex]}
        ),
        indexcout = listflag.indexOf(flag.attr('src')),
        $('#triche').text(listcout[indexcout]),
        document.body.style.backgroundImage = "url("+listbg[indexcout]+")",
        winstreak+=1
        }
        else{ //dans le cas d'une défaite
            $('#gameover').css('display', ' block'),
            $('.winstreak').text(winstreak-1), // pour ne pas dépasser le nombre de pays
            $('.reponse').text('Réponse'+' : '+ listcap2[indexcout]),
            $('.button').on('mousedown', function(event){location.reload()}),
            $('.winstreak').attr('title','Winstreak : '+(winstreak-1)+"/"+listflag_temp.length);
            $('.input').on('keydown', function(event){ //empecher de taper sur clavier en gameover
                if(/^[a-zA-Z]$/.test(event.key)){
                event.preventDefault();}
            }),
            clearInterval(timerId);
        }
    }
})


let seconds = 0;
let timerId = window.setInterval(function() {
    seconds++;
    $(".timer").text(seconds);
}, 1000);
