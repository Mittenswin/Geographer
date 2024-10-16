let flag;
let winstreak = 1; // represente le score

// Tableau des images de drapeau
listflag_temp = ['at.png', 'be.png', 'bg.png', 'cy.png', 'cz.png',
    'de.png', 'dk.png', 'ee.png', 'es.png', 'fi.png',
     'fr.png', 'gr.png', 'hr.png', 'hu.png', 'ie.png', 
     'it.png', 'lt.png', 'lu.png', 'lv.png', 'mt.png',
       'nl.png', 'pl.png', 'pt.png', 'ro.png', 'se.png', 'si.png', 'sk.png',
    'al.png', 'ad.png', 'am.png', 'az.png',
    'by.png', 'ba.png', 'ge.png', 'is.png', 'kz.png',
    'xk.png', 'li.png', 'mk.png', 'md.png', 'mc.png',
   'me.png', 'no.png', 'ru.png', 'sm.png', 'rs.png',
    'ch.png', 'tr.png', 'ua.png', 'va.png', 'gb.png']

listflag = []
for (const flag of listflag_temp) {
    listflag.push("countries/Europe/"+flag);
}

// Tableau des regex de chaques capitales
listcap = ['/^[Vv]{1}[Ii]{1}[Ee]{1}[Nn]{1}[Nn]{1}[Ee]{1}$/', 
    '/^[Bb]{1}[Rr]{1}[Uu]{1}[Xx]{1}[Ee]{1}[Ll]{1}[Ll]{1}[Ee]{1}[Ss]{1}$/', 
    '/^[Ss]{1}[Oo]{1}[Ff]{1}[Ii]{1}[Aa]{1}$/', 
    '/^[Nn]{1}[Ii]{1}[Cc]{1}[Oo]{1}[Ss]{1}[Ii]{1}[Ee]{1}$/',
    '/^[Pp]{1}[Rr]{1}[Aa]{1}[Gg]{1}[Uu]{1}[Ee]{1}$/',
    '/^[Bb]{1}[Ee]{1}[Rr]{1}[Ll]{1}[Ii]{1}[Nn]{1}$/', 
    '/^[Cc]{1}[Oo]{1}[Pp]{1}[Ee]{1}[Nn]{1}[Hh]{1}[Aa]{1}[Gg]{1}[Uu]{1}[Ee]{1}$/',
    '/^[Tt]{1}[Aa]{1}[Ll]{1}[Ll]{1}[Ii]{1}[Nn]{1}[Nn]{1}$/', 
    '/^[Mm]{1}[Aa]{1}[Dd]{1}[Rr]{1}[Ii]{1}[Dd]{1}$/', 
    '/^[Hh]{1}[Ee]{1}[Ll]{1}[Ss]{1}[Ii]{1}[Nn]{1}[Kk]{1}[Ii]{1}$/',
    '/^[Pp]{1}[Aa]{1}[Rr]{1}[Ii]{1}[Ss]{1}$/', 
    '/^[Aa]{1}[Tt]{1}[Hh]{1}[ÈèEe]{1}[Nn]{1}[Ee]{1}[Ss]{1}$/', 
    '/^[Zz]{1}[Aa]{1}[Gg]{1}[Rr]{1}[Ee]{1}[Bb]{1}$/', 
    '/^[Bb]{1}[Uu]{1}[Dd]{1}[Aa]{1}[Pp]{1}[Ee]{1}[Ss]{1}[Tt]{1}$/', 
    '/^[Dd]{1}[Uu]{1}[Bb]{1}[Ll]{1}[Ii]{1}[Nn]{1}$/', 
    '/^[Rr]{1}[Oo]{1}[Mm]{1}[Ee]{1}$/', 
    '/^[Vv]{1}[Ii]{1}[Ll]{1}[Nn]{1}[Ii]{1}[Uu]{1}[Ss]{1}$/',
    '/^[Ll]{1}[Uu]{1}[Xx]{1}[Ee]{1}[Mm]{1}[Bb]{1}[Oo]{1}[Uu]{1}[Rr]{1}[Gg]{1}$/', 
    '/^[Rr]{1}[Ii]{1}[Gg]{1}[Aa]{1}$/', 
    '/^[Ll]{1}[Aa]{1} {1,}[Vv]{1}[Aa]{1}[Ll]{1}[Ee]{1}[Tt]{1}[Tt]{1}[Ee]{1}$/', 
    '/^[Aa]{1}[Mm]{1}[Ss]{1}[Tt]{1}[Ee]{1}[Rr]{1}[Dd]{1}[Aa]{1}[Mm]{1}$/', 
    '/^[Vv]{1}[Aa]{1}[Rr]{1}[Ss]{1}[Oo]{1}[Vv]{1}[Ii]{1}[Ee]{1}$/', 
    '/^[Ll]{1}[Ii]{1}[Ss]{1}[Bb]{1}[Oo]{1}[Nn]{1}[Nn]{1}[Ee]{1}$/', 
    '/^[Bb]{1}[Uu]{1}[Cc]{1}[Aa]{1}[Rr]{1}[Ee]{1}[Ss]{1}[Tt]{1}$/', 
    '/^[Ss]{1}[Tt]{1}[Oo]{1}[Cc]{1}[Kk]{1}[Hh]{1}[Oo]{1}[Ll]{1}[Mm]{1}$/', 
    '/^[Ll]{1}[Jj]{1}[Uu]{1}[Bb]{1}[Ll]{1}[Jj]{1}[Aa]{1}[Nn]{1}[Aa]{1}$/', 
    '/^[Bb]{1}[Rr]{1}[Aa]{1}[Tt]{1}[Ii]{1}[Ss]{1}[Ll]{1}[Aa]{1}[Vv]{1}[Aa]{1}$/',
    '/^[Tt]{1}[Ii]{1}[Rr]{1}[Aa]{1}[Nn]{1}[Aa]{1}$/',
    '/^[Aa]{1}[Nn]{1}[Dd]{1}[Oo]{1}[Rr]{1}[Rr]{1}[Ee]{1}[-]{1}[Ll]{1}[Aa]{1}[-]{1}[Vv]{1}[Ii]{1}[Ee]{1}[Ii]{1}[Ll]{1}[Ll]{1}[Ee]{1}$/',
    '/^[Ee]{1}[Rr]{1}[Ee]{1}[Vv]{1}[Aa]{1}[Nn]{1}$/', 
    '/^[Bb]{1}[Aa]{1}[Kk]{1}[Oo]{1}[Uu]{1}$/', 
    '/^[Mm]{1}[Ii]{1}[Nn]{1}[Ss]{1}[Kk]{1}$/', 
    '/^[Ss]{1}[Aa]{1}[Rr]{1}[Aa]{1}[Jj]{1}[Ee]{1}[Vv]{1}[Oo]{1}$/',
    '/^[Tt]{1}[Bb]{1}[Ii]{1}[Ll]{1}[Ii]{1}[Ss]{1}[Ss]{1}[Ii]{1}$/', 
    '/^[Rr]{1}[Ee]{1}[Yy]{1}[Kk]{1}[Jj]{1}[Aa]{1}[Vv]{1}[Ii]{1}[Kk]{1}$/',
    '/^[Aa]{1}[Ss]{1}[Tt]{1}[Aa]{1}[Nn]{1}[Aa]{1}$/', 
    '/^[Pp]{1}[Rr]{1}[Ii]{1}[Ss]{1}[Tt]{1}[Ii]{1}[Nn]{1}[Aa]{1}$/', 
    '/^[Vv]{1}[Aa]{1}[Dd]{1}[Uu]{1}[Zz]{1}$/', 
    '/^[Ss]{1}[Kk]{1}[Oo]{1}[Pp]{1}[Jj]{1}[Ee]{1}$/', 
    '/^[Cc]{1}[Hh]{1}[Ii]{1}[Ss]{1}[Ii]{1}[Nn]{1}[Aa]{1}[Uu]{1}$/', 
    '/^[Mm]{1}[Oo]{1}[Nn]{1}[Aa]{1}[Cc]{1}[Oo]{1}$/', 
    '/^[Pp]{1}[Oo]{1}[Dd]{1}[Gg]{1}[Oo]{1}[Rr]{1}[Ii]{1}[Cc]{1}[Aa]{1}$/', 
    '/^[Oo]{1}[Ss]{1}[Ll]{1}[Oo]{1}$/', 
    '/^[Mm]{1}[Oo]{1}[Ss]{1}[Cc]{1}[Oo]{1}[Uu]{1}$/', 
    '/^[Ss]{1}[Aa]{1}[Ii]{1}[Nn]{1}[Tt]{1}[- ]{1}[MM]{1}[Aa]{1}[Rr]{1}[Ii]{1}[Nn]{1}$/', 
    '/^[Bb]{1}[Ee]{1}[Ll]{1}[Gg]{1}[Rr]{1}[Aa]{1}[Dd]{1}[Ee]{1}$/', 
    '/^[Bb]{1}[Ee]{1}[Rr]{1}[Nn]{1}[Ee]{1}$/', 
    '/^[Aa]{1}[Nn]{1}[Kk]{1}[Aa]{1}[Rr]{1}[Aa]{1}$/', 
    '/^[Kk]{1}[Ii]{1}[Ee]{1}[Vv]{1}$/', 
    '/^[Vv]{1}[Aa]{1}[Tt]{1}[Ii]{1}[Cc]{1}[Aa]{1}[Nn]{1}$/', 
    '/^[Ll]{1}[Oo]{1}[Nn]{1}[Dd]{1}[Rr]{1}[Ee]{1}[Ss]{1}$/']
     
// Tableau de liste des pays de l'UE
listcout = ['Autriche', 'Belgique', 'Bulgarie', 'Chypre', 
    'République tchèque', 'Allemagne', 'Danemark', 
    'Estonie', 'Espagne', 'Finlande', 'France', 'Grèce', 
    'Croatie', 'Hongrie', 'Irlande', 'Italie', 'Lituanie', 
    'Luxembourg', 'Lettonie', 'Malte', 'Pays-Bas', 'Pologne', 
    'Portugal', 'Roumanie', 'Suède', 'Slovénie', 'Slovaquie',
    'Albanie', 'Andorre', 'Arménie', 'Azerbaïdjan', 
    'Biélorussie', 'Bosnie-Herzégovine', 'Géorgie', 'Islande', 
    'Kazakhstan', 'Kosovo', 'Liechtenstein', 'Macédoine du Nord', 
    'Moldavie', 'Monaco', 'Monténégro', 'Norvège', 'Russie', 'Saint-Marin', 
    'Serbie', 'Suisse', 'Turquie', 'Ukraine', 'Vatican', 'Royaume-Uni']

// Tableau de leurs capitales respectives
listcap2 = ['Vienne', 'Bruxelles', 'Sofia', 'Nicosie',
    'Prague', 'Berlin', 'Copenhague', 'Tallinn', 'Madrid',
     'Helsinki', 'Paris', 'Athènes', 'Zagreb', 'Budapest',
     'Dublin', 'Rome', 'Vilnius', 'Luxembourg', 'Riga',
     'La Valette', 'Amsterdam', 'Varsovie', 'Lisbonne',
     'Bucarest', 'Stockholm', 'Ljubljana', 'Bratislava',
    'Tirana', 'Andorre-la-Vieille', 'Erevan', 'Bakou', 'Minsk', 'Sarajevo',
    'Tbilissi', 'Reykjavik', 'Noursoultan', 'Pristina', 'Vaduz', 'Skopje',
    'Chisinau', 'Monaco', 'Podgorica', 'Oslo', 'Moscou', 'Saint-Marin',
    'Belgrade', 'Berne', 'Ankara', 'Kiev', 'Vatican', 'Londres'
    ]

// Tableau des fonds d'écrans pour chaque pays
listbg_temp = [ 'autriche.jpg', 'belgique.jpg', 'bulgarie.jpeg', 'chypre.webp',
    'rtcheque.jpg', 'allemagne.jpg', 'danemark.jpg',
    'estonie.jpg', 'espagne.jpg', 'finlande.jpg', 'france.webp', 'grece.jpg',
    'croatie.jpg', 'hongrie.jpg', 'irlande.jpg', 'italie.webp', 'lituani.jpeg',
    'luxembourg.jpg', 'letonie.jpg', 'malte.avif', 'paysb.jpg', 'pologne.jpeg',
    'potugal.jpg', 'roumanie.jpeg', 'suede.jpeg', 'slovenie.jpg', 'slovaque.jpeg',
    'albanie.jpg', 'andore.jpg', 'armenie.jpg', 'azerbaidjan.jpg',
    'bielorussie.jpg', 'bosnie.jpg', 'georgie.jpg', 'islande.jpg',
    'kazakstan.jpg', 'kosovo.jpg', 'liechten.webp', 'macédonien.jpg',
    'moldavie.jpg', 'monaco.jpg', 'montenegro.jpeg', 'norvege.webp', 'russie.jpg', 'stmarin.jpg',
    'serbie.jpg', 'suisse.jpg', 'turquie.jpg', 'ukraine.jpg', 'vatican.jpg', 'royaumeuni.jpg'
]

listbg = []
for (const bg of listbg_temp) {
    listbg.push("background/"+bg);
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
                if(winstreak==51){ // 27 est le nombre de pays , donc fin
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
            if(winstreak==51){ // 27 est le nombre de pays , donc fin
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
            $('.input').on('keydown', function(event){ //empecher de taper sur clavier en gameover
                if(/^[a-zA-Z]$/.test(event.key)){
                event.preventDefault();}
            }),
            $('.winstreak').attr('title','Winstreak : '+(winstreak-1)+"/"+listflag_temp.length);
            clearInterval(timerId);
        }
    }
})

let seconds = 0;
let timerId = window.setInterval(function() {
    seconds++;
    $(".timer").text(seconds);
}, 1000);
