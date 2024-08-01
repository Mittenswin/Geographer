let flag;
let winstreak = 1; // represente le score

// Tableau des images de drapeau
listflag_temp = ['ca.png', 'us.png', 'mx.png', 'bz.png', 
    'cr.png', 'sv.png', 'gt.png', 'hn.png', 
    'ni.png', 'pa.png', 'ag.png', 'bs.png', 
    'bb.png', 'cu.png', 'dm.png', 'gd.png', 
    'ht.png', 'jm.png', 'kn.png', 'lc.png', 
    'vc.png', 'tt.png', 'do.png', 'ar.png', 
    'bo.png', 'br.png', 'cl.png', 'co.png', 
    'ec.png', 'gy.png', 'py.png', 'pe.png', 
    'sr.png', 'uy.png', 've.png']

listflag = []
for (const flag of listflag_temp) {
    listflag.push("../countries/Amérique/"+flag);
}

// Tableau des regex de chaques capitales
listcap = ['/^[oO]{1}[Tt]{1}[Tt]{1}[Aa]{1}[Ww]{1}[Aa]{1}$/',
    '/^[wW]{1}[Aa]{1}[Ss]{1}[Hh]{1}[Ii]{1}[Nn]{1}[Gg]{1}[Tt]{1}[Oo]{1}[Nn]{1}$/',
    '/^[mM]{1}[Ee]{1}[Xx]{1}[Ii]{1}[Cc]{1}[Oo]{1}$/',
    '/^[bB]{1}[Ee]{1}[Ll]{1}[Mm]{1}[Oo]{1}[Pp]{1}[Aa]{1}[Nn]{1}$/',
    '/^[sS]{1}[Aa]{1}[Nn]{1}[  ]{1}[Jj]{1}[Oo]{1}[Ss]{1}[ÉéEe]{1}$/', 
    '/^[sS]{1}[Aa]{1}[Nn]{1}[  ]{1}[Ss]{1}[Aa]{1}[Ll]{1}[Vv]{1}[Aa]{1}[Dd]{1}[Oo]{1}[Rr]{1}$/',
    '/^[gG]{1}[Uu]{1}[Aa]{1}[Tt]{1}[Ee]{1}[Mm]{1}[Aa]{1}[Ll]{1}[Aa]{1}$/', 
    '/^[tT]{1}[Ee]{1}[Gg]{1}[Uu]{1}[Cc]{1}[Ii]{1}[Gg]{1}[Aa]{1}[Ll]{1}[Pp]{1}[Aa]{1}$/', 
    '/^[mM]{1}[Aa]{1}[Nn]{1}[Aa]{1}[Gg]{1}[Uu]{1}[Aa]{1}$/', 
    '/^[pP]{1}[Aa]{1}[Nn]{1}[Aa]{1}[Mm]{1}[Aa]{1}$/', 
    '/^[sS]{1}[Aa]{1}[Ii]{1}[Nn]{1}[Tt]{1}[  ]{1}[Jj]{1}[Oo]{1}[Hh]{1}[Nn]{1}[\' ]{1}[Ss]{1}$/', 
    '/^[nN]{1}[Aa]{1}[Ss]{1}[Ss]{1}[Aa]{1}[Uu]{1}$/', 
    '/^[bB]{1}[Rr]{1}[Ii]{1}[Dd]{1}[Gg]{1}[Ee]{1}[Tt]{1}[Oo]{1}[Ww]{1}[Nn]{1}$/', 
    '/^[lL]{1}[Aa]{1}[  ]{1}[Hh]{1}[Aa]{1}[Vv]{1}[Aa]{1}[Nn]{1}[Ee]{1}$/', 
    '/^[rR]{1}[Oo]{1}[Ss]{1}[Ee]{1}[Aa]{1}[Uu]{1}$/', 
    "/^[sS]{1}[Aa]{1}[Ii]{1}[Nn]{1}[Tt]{1}[  ]{1}[Gg]{1}[Ee]{1}[Oo]{1}[Rr]{1}[Gg]{1}[Ee]{1}[\' ]{1}[Ss]{1}$/",
    '/^[pP]{1}[Oo]{1}[Rr]{1}[Tt]{1}[- ]{1}[Aa]{1}[Uu]{1}[- ]{1}[PP]{1}[Rr]{1}[Ii]{1}[Nn]{1}[Cc]{1}[Ee]{1}$/', 
    '/^[kK]{1}[Ii]{1}[Nn]{1}[Gg]{1}[Ss]{1}[Tt]{1}[Oo]{1}[Nn]{1}$/', 
    '/^[bB]{1}[Aa]{1}[Ss]{1}[Ss]{1}[Ee]{1}[Tt]{1}[Ee]{1}[Rr]{1}[Rr]{1}[Ee]{1}$/', 
    '/^[cC]{1}[Aa]{1}[Ss]{1}[Tt]{1}[Rr]{1}[Ii]{1}[Ee]{1}[Ss]{1}$/', 
    '/^[kK]{1}[Ii]{1}[Nn]{1}[Gg]{1}[Ss]{1}[Tt]{1}[Oo]{1}[Ww]{1}[Nn]{1}$/',
    '/^[pP]{1}[Oo]{1}[Rr]{1}[Tt]{1}[  ]{1}[Oo]{1}[Ff]{1}[  ]{1}[SS]{1}[Pp]{1}[Aa]{1}[Ii]{1}[Nn]{1}$/', 
    '/^[sS]{1}[Aa]{1}[Nn]{1}[Tt]{1}[Oo]{1}[  ]{1}[Dd]{1}[Oo]{1}[Mm]{1}[Ii]{1}[Nn]{1}[Gg]{1}[Oo]{1}$/', 
    '/^[bB]{1}[Uu]{1}[Ee]{1}[Nn]{1}[Oo]{1}[Ss]{1}[  ]{1}[Aa]{1}[Ii]{1}[Rr]{1}[Ee]{1}[Ss]{1}$/', 
    '/^([sS]{1}[Uu]{1}[Cc]{1}[Rr]{1}[Ee]{1}|[Ll]{1}[Aa]{1}[  ]{1}[PP]{1}[Aa]{1}[Zz]{1})$/', 
    '/^[bB]{1}[Rr]{1}[Aa]{1}[Ss]{1}[ÍíIi]{1}[Ll]{1}[Ii]{1}[Aa]{1}$/', 
    '/^[sS]{1}[Aa]{1}[Nn]{1}[Tt]{1}[Ii]{1}[Aa]{1}[Gg]{1}[Oo]{1}$/', 
    '/^[bB]{1}[Oo]{1}[Gg]{1}[Oo]{1}[Tt]{1}[ÁáAa]{1}$/', 
    '/^[qQ]{1}[Uu]{1}[Ii]{1}[Tt]{1}[Oo]{1}$/', 
    '/^[gG]{1}[Ee]{1}[Oo]{1}[Rr]{1}[Gg]{1}[Ee]{1}[Tt]{1}[Oo]{1}[Ww]{1}[Nn]{1}$/', 
    '/^[aA]{1}[Ss]{1}[Uu]{1}[Nn]{1}[Cc]{1}[Ii]{1}[ÓóOo]{1}[Nn]{1}$/', 
    '/^[lL]{1}[Ii]{1}[Mm]{1}[Aa]{1}$/', 
    '/^[pP]{1}[Aa]{1}[Rr]{1}[Aa]{1}[Mm]{1}[Aa]{1}[Rr]{1}[Ii]{1}[Bb]{1}[Oo]{1}$/', 
    '/^[mM]{1}[Oo]{1}[Nn]{1}[Tt]{1}[Ee]{1}[Vv]{1}[Ii]{1}[Dd]{1}[Ee]{1}[Oo]{1}$/',
    '/^[cC]{1}[Aa]{1}[Rr]{1}[Aa]{1}[Cc]{1}[Aa]{1}[Ss]{1}$/']
     
// Tableau de liste des pays d'Asie
listcout = ["Canada", "États-Unis", "Mexique", "Belize", "Costa Rica",
    "El Salvador", "Guatemala", "Honduras", "Nicaragua", "Panama",
    "Antigua-et-Barbuda", "Bahamas", "Barbade", "Cuba", "Dominique",
    "Grenade", "Haïti", "Jamaïque", "Saint-Christophe-et-Niévès",
    "Sainte-Lucie", "Saint-Vincent-et-les-Grenadines", "Trinité-et-Tobago",
    "République dominicaine", "Argentine", "Bolivie", "Brésil", "Chili",
    "Colombie", "Équateur", "Guyana", "Paraguay", "Pérou", "Suriname",
    "Uruguay", "Venezuela"]

// Tableau de leurs capitales respectives
listcap2 = ["Ottawa", "Washington", "Mexico", "Belmopan", "San José",
    "San Salvador", "Guatemala", "Tegucigalpa", "Managua", "Panama",
    "Saint John's", "Nassau", "Bridgetown", "La Havane", "Roseau",
    "Saint George's", "Port-au-Prince", "Kingston", "Basseterre",
    "Castries", "Kingstown", "Port of Spain", "Santo Domingo",
    "Buenos Aires", "Sucre La Paz", "Brasília", "Santiago", "Bogotá", "Quito",
    "Georgetown", "Asunción", "Lima", "Paramaribo", "Montevideo", "Caracas"]

// Tableau des fonds d'écrans pour chaque pays
listbg_temp = ['Canada.jpeg', 'etatunis.jpg', 'mexique.jpg', 'belize.jpg', 'costarica.jpeg',
    'salvador.jpg', 'guatemala.jpg', 'handuras.jpg', 'nicaragua.jpg', 'panamana.jpg', 
    'antigua.jpg', 'bahamas.jpg', 'barbade.jpg', 'cuba.webp', 'dominique.jpg', 'Grenade.jpg',
    'haïti.jpg', 'jamaique.jpg', 'st-Christophe-et-Nièves-Martine.jpg', 'sainte-lucie.jpg',
    'st-vincent-martine.jpg', 'trinite.jpg', 'repdominic.jpg', 'argentine.jpg', 'bolivie.jpg',
    'bresil.jpg', 'chili.jpg', 'colombie.jpg', 'equateur.jpg', 'guyana.jpeg', 'paraguay.jpg',
    'perou.jpg', 'suriname.jpg', 'uruguay.jpg', 'venezuela.jpg']

listbg = []
for (const bg of listbg_temp) {
    listbg.push("../backgrounds/Amérique/"+bg);
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
                if(winstreak==35){ // 27 est le nombre de pays , donc fin
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
            if(winstreak==35){ // 35 est le nombre de pays , donc fin
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
