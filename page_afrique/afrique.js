let flag;
let winstreak = 1; // represente le score

// Tableau des images de drapeau
listflag_temp = ['za.png', 'dz.png', 'ao.png', 'bj.png', 'bw.png', 'bf.png', 
    'bi.png', 'cv.png', 'cm.png', 'cf.png', 'td.png', 'km.png', 'cg.png', 
    'cd.png', 'ci.png', 'dj.png', 'eg.png', 'gq.png', 'er.png', 'sz.png', 
    'et.png', 'ga.png', 'gm.png', 'gh.png', 'gn.png', 'gw.png', 'ke.png', 
    'ls.png', 'lr.png', 'ly.png', 'mg.png', 'mw.png', 'ml.png', 'mr.png', 'mu.png',
    'ma.png', 'mz.png', 'na.png', 'ne.png', 'ng.png', 'rw.png', 'st.png', 'sn.png', 
    'sc.png', 'sl.png', 'so.png', 'sd.png', 'ss.png', 'tz.png', 'tg.png', 'tn.png',
    'ug.png', 'zm.png', 'zw.png']
listflag = []
for (const flag of listflag_temp) {
    listflag.push("../countries/Afrique/"+flag);
}

// Tableau des regex de chaques capitales
listcap = ['/^[pP]{1}[Rr]{1}[EeÉé]{1}[Tt]{1}[Oo]{1}[Rr]{1}[Ii]{1}[Aa]{1}$/',
    '/^[aA]{1}[Ll]{1}[Gg]{1}[Ee]{1}[Rr]{1}$/',
    '/^[lL]{1}[Uu]{1}[Aa]{1}[Nn]{1}[Dd]{1}[Aa]{1}$/', 
    '/^[pP]{1}[Oo]{1}[Rr]{1}[Tt]{1}[Oo]{1}[- ]{1}[Nn]{1}[Oo]{1}[Vv]{1}[Oo]{1}$/', 
    '/^[gG]{1}[Aa]{1}[Bb]{1}[Oo]{1}[Rr]{1}[Oo]{1}[Nn]{1}[Ee]{1}$/', 
    '/^[oO]{1}[Uu]{1}[Aa]{1}[Gg]{1}[Aa]{1}[Dd]{1}[Oo]{1}[Uu]{1}[Gg]{1}[Oo]{1}[Uu]{1}$/', 
    '/^[bB]{1}[Uu]{1}[Jj]{1}[Uu]{1}[Mm]{1}[Bb]{1}[Uu]{1}[Rr]{1}[Aa]{1}$/', 
    '/^[pP]{1}[Rr]{1}[Aa]{1}[Ii]{1}[Aa]{1}$/', 
    '/^[yY]{1}[Aa]{1}[Oo]{1}[Uu]{1}[Nn]{1}[Dd]{1}[ÉéeE]{1}$/', 
    '/^[bB]{1}[Aa]{1}[Nn]{1}[Gg]{1}[Uu]{1}[Ii]{1}$/', 
    '/^[nN]{1}[\' ]{1}[Dd]{1}[Jj]{1}[Aa]{1}[Mm]{1}[EeéÉ]{1}[Nn]{1}[Aa]{1}$/', 
    '/^[mM]{1}[Oo]{1}[Rr]{1}[Oo]{1}[Nn]{1}[Ii]{1}$/', 
    '/^[bB]{1}[Rr]{1}[Aa]{1}[Zz]{1}[Zz]{1}[Aa]{1}[Vv]{1}[Ii]{1}[Ll]{1}[Ll]{1}[Ee]{1}$/', 
    '/^[kK]{1}[Ii]{1}[Nn]{1}[Ss]{1}[Hh]{1}[Aa]{1}[Ss]{1}[Aa]{1}$/', 
    '/^[yY]{1}[Aa]{1}[Mm]{1}[Oo]{1}[Uu]{1}[Ss]{1}[Ss]{1}[Oo]{1}[Uu]{1}[Kk]{1}[Rr]{1}[Oo]{1}$/',
    '/^[dD]{1}[Jj]{1}[Ii]{1}[Bb]{1}[Oo]{1}[Uu]{1}[Tt]{1}[Ii]{1}$/', 
    '/^[lL]{1}[Ee]{1}[ ]{1}[Cc]{1}[Aa]{1}[Ii]{1}[Rr]{1}[Ee]{1}$/', 
    '/^[mM]{1}[Aa]{1}[Ll]{1}[Aa]{1}[Bb]{1}[Oo]{1}$/', 
    '/^[aA]{1}[Ss]{1}[Mm]{1}[Aa]{1}[Rr]{1}[Aa]{1}$/', 
    '/^[mM]{1}[Bb]{1}[Aa]{1}[Bb]{1}[Aa]{1}[Nn]{1}[Ee]{1}$/', 
    '/^[aA]{1}[Dd]{1}[Dd]{1}[Ii]{1}[Ss]{1}[- ]{1}[Aa]{1}[Bb]{1}[Ee]{1}[Bb]{1}[Aa]{1}$/', 
    '/^[lL]{1}[Ii]{1}[Bb]{1}[Rr]{1}[Ee]{1}[Vv]{1}[Ii]{1}[Ll]{1}[Ll]{1}[Ee]{1}$/', 
    '/^[bB]{1}[Aa]{1}[Nn]{1}[Jj]{1}[Uu]{1}[Ll]{1}$/', 
    '/^[aA]{1}[Cc]{1}[Cc]{1}[Rr]{1}[Aa]{1}$/', 
    '/^[cC]{1}[Oo]{1}[Nn]{1}[Aa]{1}[Kk]{1}[Rr]{1}[Yy]{1}$/', 
    '/^[bB]{1}[Ii]{1}[Ss]{1}[Ss]{1}[Aa]{1}[Uu]{1}$/', 
    '/^[nN]{1}[Aa]{1}[Ii]{1}[Rr]{1}[Oo]{1}[Bb]{1}[Ii]{1}$/', 
    '/^[mM]{1}[Aa]{1}[Ss]{1}[Ee]{1}[Rr]{1}[Uu]{1}$/', 
    '/^[mM]{1}[Oo]{1}[Nn]{1}[Rr]{1}[Oo]{1}[Vv]{1}[Ii]{1}[Aa]{1}$/', 
    '/^[tT]{1}[Rr]{1}[Ii]{1}[Pp]{1}[Oo]{1}[Ll]{1}[Ii]{1}$/', 
    '/^[aA]{1}[Nn]{1}[Tt]{1}[Aa]{1}[Nn]{1}[Aa]{1}[Nn]{1}[Aa]{1}[Rr]{1}[Ii]{1}[Vv]{1}[Oo]{1}$/', 
    '/^[lL]{1}[Ii]{1}[Ll]{1}[Oo]{1}[Nn]{1}[Gg]{1}[Ww]{1}[Ee]{1}$/', 
    '/^[bB]{1}[Aa]{1}[Mm]{1}[Aa]{1}[Kk]{1}[Oo]{1}$/', 
    '/^[nN]{1}[Oo]{1}[Uu]{1}[Aa]{1}[Kk]{1}[Cc]{1}[Hh]{1}[Oo]{1}[Tt]{1}[Tt]{1}$/', 
    '/^[pP]{1}[Oo]{1}[Rr]{1}[Tt]{1}[- ]{1}[Ll]{1}[Oo]{1}[Uu]{1}[Ii]{1}[Ss]{1}$/', 
    '/^[rR]{1}[Aa]{1}[Bb]{1}[Aa]{1}[Tt]{1}$/', 
    '/^[mM]{1}[Aa]{1}[Pp]{1}[Uu]{1}[Tt]{1}[Oo]{1}$/', 
    '/^[wW]{1}[Ii]{1}[Nn]{1}[Dd]{1}[Hh]{1}[Oo]{1}[Ee]{1}[Kk]{1}$/', 
    '/^[nN]{1}[Ii]{1}[Aa]{1}[Mm]{1}[Ee]{1}[Yy]{1}$/', 
    '/^[aA]{1}[Bb]{1}[Uu]{1}[Jj]{1}[Aa]{1}$/', 
    '/^[kK]{1}[Ii]{1}[Gg]{1}[Aa]{1}[Ll]{1}[Ii]{1}$/', 
    '/^[sS]{1}[ÃãaA]{1}[Oo]{1}[  ]{1}[Tt]{1}[Oo]{1}[Mm]{1}[ÉéeE]{1}$/', 
    '/^[dD]{1}[Aa]{1}[Kk]{1}[Aa]{1}[Rr]{1}$/', 
    '/^[vV]{1}[Ii]{1}[Cc]{1}[Tt]{1}[Oo]{1}[Rr]{1}[Ii]{1}[Aa]{1}$/', 
    '/^[fF]{1}[Rr]{1}[Ee]{1}[Ee]{1}[Tt]{1}[Oo]{1}[Ww]{1}[Nn]{1}$/', 
    '/^[mM]{1}[Oo]{1}[Gg]{1}[Aa]{1}[Dd]{1}[Ii]{1}[Ss]{1}[Cc]{1}[Ii]{1}[Oo]{1}$/', 
    '/^[kK]{1}[Hh]{1}[Aa]{1}[Rr]{1}[Tt]{1}[Oo]{1}[Uu]{1}[Mm]{1}$/', 
    '/^[dD]{1}[Jj]{1}[Oo]{1}[Uu]{1}[Bb]{1}[Aa]{1}$/', 
    '/^[dD]{1}[Oo]{1}[Dd]{1}[Oo]{1}[Mm]{1}[Aa]{1}$/', 
    '/^[lL]{1}[Oo]{1}[Mm]{1}[ÉéeE]{1}$/', 
    '/^[tT]{1}[Uu]{1}[Nn]{1}[Ii]{1}[Ss]{1}$/', 
    '/^[kK]{1}[Aa]{1}[Mm]{1}[Pp]{1}[Aa]{1}[Ll]{1}[Aa]{1}$/', 
    '/^[lL]{1}[Uu]{1}[Ss]{1}[Aa]{1}[Kk]{1}[Aa]{1}$/', 
    '/^[hH]{1}[Aa]{1}[Rr]{1}[Aa]{1}[Rr]{1}[ÉéeE]{1}$/']
     
// Tableau de liste des pays d'Afrique
listcout = ["Afrique du Sud", "Algérie", "Angola", "Bénin", "Botswana", "Burkina Faso", 
    "Burundi", "Cap-Vert", "Cameroun", "République centrafricaine", "Tchad", "Comores", 
    "République du Congo", "République démocratique du Congo", "Côte d'Ivoire", "Djibouti", 
    "Égypte", "Guinée équatoriale", "Érythrée", "Eswatini (Swaziland)", 
    "Éthiopie", "Gabon", "Gambie", "Ghana", "Guinée", "Guinée-Bissau", "Kenya", "Lesotho", 
    "Libéria", "Libye", "Madagascar", "Malawi", "Mali", "Mauritanie", "Île Maurice", "Maroc", 
    "Mozambique", "Namibie", "Niger", "Nigeria", "Rwanda", "Sao Tomé-et-Principe", 
    "Sénégal", "Seychelles", "Sierra Leone", "Somalie", "Soudan", "Soudan du Sud", 
    "Tanzanie", "Togo", "Tunisie", "Ouganda", "Zambie", "Zimbabwe"]

// Tableau de leurs capitales respectives
listcap2 = ["Pretoria", "Alger", "Luanda", "Porto-Novo", "Gaborone", "Ouagadougou", 
    "Bujumbura", "Praia", "Yaoundé", "Bangui", "N'Djamena", "Moroni", 
    "Brazzaville", "Kinshasa", "Yamoussoukro", "Djibouti", "Le Caire", 
    "Malabo", "Asmara", "Mbabane", "Addis-Abeba", "Libreville", "Banjul", 
    "Accra", "Conakry", "Bissau", "Nairobi", "Maseru", "Monrovia", 
    "Tripoli", "Antananarivo", "Lilongwe", "Bamako", "Nouakchott", 
    "Port-Louis", "Rabat", "Maputo", "Windhoek", "Niamey", "Abuja", 
    "Kigali", "São Tomé", "Dakar", "Victoria", "Freetown", "Mogadiscio", 
    "Khartoum", "Djouba", "Dodoma", "Lomé", "Tunis", "Kampala", "Lusaka", "Harare"]


// Tableau des fonds d'écrans pour chaque pays
listbg_temp = ['afriquesud.webp', 'Algerien.jpg', 'Angola.jpg', 'Bénin.jpg', 'botswana.jpg', 'burkina.jpg',
    'burundi.jpg', 'capvert.jpg', 'cameroun.jpg', 'centreafrique.webp', 'Chad.jpg', 'comores.webp',
    'Repcongo.jpeg', 'Repdemcongo.jpg', 'coteivoire.webp', 'djibouti.jpg', 
    'egypte.jpg', 'Guineeequa.jpg', 'erythre.jfif', 'eswatini.webp', 'ethiopie.jpg', 'gabon.JPG', 'gambie.jpg',
    'ganha.jpg', 'guinee.jpg', 'guinea-bissau.jpg', 'kenya.jpg', 'Lesotho.jpg', 'liberia.jpg', 'libye.jpg', 
    'madagascar.jpg', 'malawi.jpg', 'mali.jpg', 'mauritanie.jpg', 'maurice.jpg', 'maroc.jpeg', 'mozanbique.webp',
    'Namibie.jpg', 'niger.jpeg', 'nigeria.jpg', 'rwanda.jpeg', 'saotome.jpg', 'senegal.jpg', 'seychelles.webp',
    'sierraleone.jpg', 'Somalie.jpg', 'soudan.jpg', 'soudansud.webp', 'tanzanie.jfif', 'togo.webp', 'Tunisie.jpg',
    'ouganda.jpg', 'zambie.jpg', 'zimbabwe.jpg']

listbg = []
for (const bg of listbg_temp) {
    listbg.push("../backgrounds/Afrique/"+bg);
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
    
    if(event.key==='Enter'){
        if(regexcap.test($('.input').val())){ // on test avec le regex si l'input est bon
            if(winstreak==54){ // 54 est le nombre de pays , donc fin
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