let flag;
let winstreak = 1; // represente le score

// Tableau des images de drapeau
listflag_temp = ['af.png', 'sa.png', 'am.png', 'az.png', 'bh.png', 'bd.png', 'bt.png', 'mm.png', 'bn.png', 'kh.png', 'cn.png', 'cy.png', 'kp.png', 'kr.png', 'ae.png', 'ge.png', 'in.png', 'id.png', 'iq.png', 'ir.png', 'il.png', 'jp.png', 'jo.png', 'kz.png', 'kg.png', 'kw.png', 'la.png', 'lb.png', 'my.png', 'mv.png', 'mn.png', 'np.png', 'om.png', 'uz.png', 'pk.png', 'ps.png', 'ph.png', 'qa.png', 'ru.png', 'sg.png', 'lk.png', 'sy.png', 'tj.png', 'tw.png', 'th.png', 'tl.png', 'tm.png', 'tr.png', 'vn.png', 'ye.png']

listflag = []
for (const flag of listflag_temp) {
    listflag.push("../countries/Asie/"+flag);
}

// Tableau des regex de chaques capitales
listcap = ['/^[kK]{1}[Aa]{1}[Bb]{1}[Oo]{1}[Uu]{1}[Ll]{1}$/',
 '/^[rR]{1}[Ii]{1}[Yy]{1}[Aa]{1}[Dd]{1}$/',
  '/^[eE]{1}[Rr]{1}[Ee]{1}[Vv]{1}[Aa]{1}[Nn]{1}$/',
   '/^[bB]{1}[Aa]{1}[Kk]{1}[Oo]{1}[Uu]{1}$/',
'/^[mM]{1}[Aa]{1}[Nn]{1}[Aa]{1}[Mm]{1}[Aa]{1}$/',
'/^[dD]{1}[Aa]{1}[Cc]{1}[Cc]{1}[Aa]{1}$/',
'/^[tT]{1}[Hh]{1}[Ii]{1}[Mm]{1}[Pp]{1}[Hh]{1}[Oo]{1}[Uu]{1}$/',
'/^[nN]{1}[Aa]{1}[Yy]{1}[Pp]{1}[Yy]{1}[Ii]{1}[Dd]{1}[Aa]{1}[Ww]{1}$/',
 '/^[bB]{1}[Aa]{1}[Nn]{1}[Dd]{1}[Aa]{1}[Rr]{1} [Ss]{1}[Ee]{1}[Rr]{1}[Ii]{1} [Bb]{1}[Ee]{1}[Gg]{1}[Aa]{1}[Ww]{1}[Aa]{1}[Nn]{1}$/',
 '/^[pP]{1}[Hh]{1}[Nn]{1}[Oo]{1}[Mm]{1} [Pp]{1}[Ee]{1}[Nn]{1}[Hh]{1}$/',
'/^[pP]{1}[ÉéeE]{1}[Kk]{1}[Ii]{1}[Nn]{1}$/',
'/^[nN]{1}[Ii]{1}[Cc]{1}[Oo]{1}[Ss]{1}[Ii]{1}[Ee]{1}$/',
'/^[pP]{1}[Yy]{1}[Oo]{1}[Nn]{1}[Gg]{1}[Yy]{1}[Aa]{1}[Nn]{1}[Gg]{1}$/',
 '/^[sS]{1}[ÉéeE]{1}[Oo]{1}[Uu]{1}[Ll]{1}$/',
 '/^[aA]{1}[Bb]{1}[Oo]{1}[Uu]{1} [Dd]{1}[Aa]{1}[Bb]{1}[Ii]{1}$/',
 '/^[tT]{1}[Bb]{1}[Ii]{1}[Ll]{1}[Ii]{1}[Ss]{1}[Ss]{1}[Ii]{1}$/', 
 '/^[nN]{1}[Ee]{1}[Ww]{1} [Dd]{1}[Ee]{1}[Ll]{1}[Hh]{1}[Ii]{1}$/', 
'/^[jJ]{1}[Aa]{1}[Kk]{1}[Aa]{1}[Rr]{1}[Tt]{1}[Aa]{1}$/',
 '/^[bB]{1}[Aa]{1}[Gg]{1}[Dd]{1}[Aa]{1}[Dd]{1}$/', 
 '/^[tT]{1}[ÉéeE]{1}[Hh]{1}[ÉéeE]{1}[Rr]{1}[Aa]{1}[Nn]{1}$/', 
 '/^[jJ]{1}[Éé]{1}[Rr]{1}[Uu]{1}[Ss]{1}[Aa]{1}[Ll]{1}[Ee]{1}[Mm]{1}$/', 
 '/^[tT]{1}[Oo]{1}[Kk]{1}[Yy]{1}[Oo]{1}$/', 
 '/^[aA]{1}[Mm]{1}[Mm]{1}[Aa]{1}[Nn]{1}$/', 
 '/^([aA]{1}[Ss]{1}[Tt]{1}[Aa]{1}[Nn]{1}[Aa]{1}|[nN]{1}[Oo]{1}[Uu]{1}[Rr]{1}[- ]{1}[Ss]{1}[Oo]{1}[Uu]{1}[Ll]{1}[Tt]{1}[Aa]{1}[Nn]{1})$/', 
 '/^[bB]{1}[Ii]{1}[Cc]{1}[Hh]{1}[Kk]{1}[Ee]{1}[Kk]{1}$/', 
 '/^[kK]{1}[Oo]{1}[Ww]{1}[Ee]{1}[ÏïiI]{1}[Tt]{1}$/', 
 '/^[vV]{1}[Ii]{1}[Ee]{1}[Nn]{1}[Tt]{1}[Ii]{1}[Aa]{1}[Nn]{1}[Ee]{1}$/', 
 '/^[bB]{1}[Ee]{1}[Yy]{1}[Rr]{1}[Oo]{1}[Uu]{1}[Tt]{1}[Hh]{1}$/', 
 '/^[kK]{1}[Uu]{1}[Aa]{1}[Ll]{1}[Aa]{1} [Ll]{1}[Uu]{1}[Mm]{1}[Pp]{1}[Uu]{1}[Rr]{1}$/', 
 '/^[mM]{1}[Aa]{1}[Ll]{1}[ÉéeE]{1}$/', 
 '/^[oO]{1}[Uu]{1}[Ll]{1}[Aa]{1}[Nn]{1}[- ]{1}[Bb]{1}[Aa]{1}[Tt]{1}[Oo]{1}[Rr]{1}$/', 
 '/^[kK]{1}[Aa]{1}[Tt]{1}[Mm]{1}[Aa]{1}[Nn]{1}[Dd]{1}[Oo]{1}[Uu]{1}$/', 
 '/^[mM]{1}[Aa]{1}[Ss]{1}[Cc]{1}[Aa]{1}[Tt]{1}[Ee]{1}$/', 
 '/^[tT]{1}[Aa]{1}[Cc]{1}[Hh]{1}[Kk]{1}[Ee]{1}[Nn]{1}[Tt]{1}$/', 
 '/^[iI]{1}[Ss]{1}[Ll]{1}[Aa]{1}[Mm]{1}[Aa]{1}[Bb]{1}[Aa]{1}[Dd]{1}$/', 
 '/^([rR]{1}[Aa]{1}[Mm]{1}[Aa]{1}[Ll]{1}[Ll]{1}[Aa]{1}[Hh]{1}|[Fr]{1}[Rr]{1}[Ee]{1}[Ee]{1}[  ]{1}[Pp]{1}[Aa]{1}[Ll]{1}[Ee]{1}[Ss]{1}[Tt]{1}[Ii]{1}[Nn]{1}[Ee]{1})$/', 
 '/^[mM]{1}[Aa]{1}[Nn]{1}[Ii]{1}[Ll]{1}[Ll]{1}[Ee]{1}$/', 
 '/^[dD]{1}[Oo]{1}[Hh]{1}[Aa]{1}$/', 
 '/^[mM]{1}[Oo]{1}[Ss]{1}[Cc]{1}[Oo]{1}[Uu]{1}$/', 
 '/^[sS]{1}[Ii]{1}[Nn]{1}[Gg]{1}[Aa]{1}[Pp]{1}[Oo]{1}[Uu]{1}[Rr]{1}$/', 
 '/^[cC]{1}[Oo]{1}[Ll]{1}[Oo]{1}[Mm]{1}[Bb]{1}[Oo]{1}$/',
  '/^[dD]{1}[Aa]{1}[Mm]{1}[Aa]{1}[Ss]{1}$/',
   '/^[dD]{1}[Oo]{1}[Uu]{1}[Cc]{1}[Hh]{1}[Aa]{1}[Nn]{1}[Bb]{1}[ÉéeE]{1}$/', 
   '/^[tT]{1}[Aa]{1}[Ii]{1}[Pp]{1}[Ee]{1}[Ii]{1}$/', 
   '/^[bB]{1}[Aa]{1}[Nn]{1}[Gg]{1}[Kk]{1}[Oo]{1}[Kk]{1}$/', 
'/^[dD]{1}[Ii]{1}[Ll]{1}[Ii]{1}$/', 
'/^[aA]{1}[Cc]{1}[Hh]{1}[Gg]{1}[Aa]{1}[Bb]{1}[Aa]{1}[Tt]{1}$/', 
'/^[aA]{1}[Nn]{1}[Kk]{1}[Aa]{1}[Rr]{1}[Aa]{1}$/', 
'/^[hH]{1}[Aa]{1}[Nn]{1}[Oo]{1}[ÏïiI]{1}$/',
 '/^[sS]{1}[Aa]{1}[Nn]{1}[Aa]{1}[Aa]{1}$/']
     
// Tableau de liste des pays d'Asie
listcout = ['Afghanistan', 'Arabie Saoudite', 'Arménie', 'Azerbaïdjan',
     'Bahreïn', 'Bangladesh', 'Bhoutan', 'Birmanie (Myanmar)', 'Brunei', 'Cambodge', 'Chine',
      'Chypre', 'Corée du Nord', 'Corée du Sud', 'Émirats Arabes Unis', 'Géorgie', 'Inde', 'Indonésie', 'Irak',
       'Iran', 'Israël', 'Japon', 'Jordanie', 'Kazakhstan', 'Kirghizistan', 'Koweït', 'Laos', 'Liban', 'Malaisie',
        'Maldives', 'Mongolie', 'Népal', 'Oman', 'Ouzbékistan', 'Pakistan', 'Palestine', 'Philippines', 'Qatar',
         'Russie', 'Singapour', 'Sri Lanka', 'Syrie', 'Tadjikistan', 'Taïwan', 'Thaïlande', 'Timor oriental (Timor-Leste)',
    'Turkménistan', 'Turquie', 'Viêt Nam', 'Yémen'] 

// Tableau de leurs capitales respectives
listcap2 = ['Kaboul', 'Riyad', 'Erevan', 'Bakou', 'Manama', 'Dacca', 'Thimphou', 'Naypyidaw', 'Bandar Seri Begawan', 
    'Phnom Penh', 'Pékin', 'Nicosie', 'Pyongyang', 'Séoul', 'Abou Dabi', 'Tbilissi', 'New Delhi', 'Jakarta', 'Bagdad', 
    'Téhéran', 'Jérusalem', 'Tokyo', 'Amman', 'Astana', 'Bichkek', 'Koweït', 'Vientiane', 'Beyrouth', 'Kuala Lumpur', 'Malé', 
    'Oulan-Bator', 'Katmandou', 'Mascate', 'Tachkent', 'Islamabad', 'Ramallah', 'Manille', 'Doha', 'Moscou', 'Singapour', 
    'Colombo', 'Damas', 'Douchanbé', 'Taipei', 'Bangkok', 'Dili', 'Achgabat', 'Ankara', 'Hanoï', 'Sanaa']

// Tableau des fonds d'écrans pour chaque pays
listbg_temp = [ 'afghanistan.jpg', 'arabiesaoudite.png', 'armenie.webp', 'azerbaidjan.jpg',
    'bahrein.jpg', 'bangladesh.jpg', 'bhoutan.jpg', 'birmanie.jpg', 'brunei.jpg', 'cambodge.jpg', 'chine.jpg',
    'chypre.jpg', 'corenord.jpg', 'coresud.jpg', 'emirates.jpg', 'georgie.jpg', 'inde.jpg', 'indonesie.jpeg', 'irak.jpg',
    'iran.jpg', 'boycott.webp', 'japon.jpg', 'jordanie.avif', 'kazakhstan.jpg', 'kirghizistan.jpg', 'kuwait.jpg', 'laos.jpg', 'liban.jpg', 'malaisie.jpg',
    'maldive.avif', 'mongolie.jpg', 'nepal.webp', 'oman.jpeg', 'uzbek.jpg', 'pakistan.jpg', 'palestine.jpg', 'philipines.jpg', 'qatar.jpg',
    'russie.jpg', 'singapour.jpg', 'srilanka.jpg', 'syrie.jpg', 'tadjikistan.jpg', 'taiwan.webp', 'thailande.jpg', 'timor.webp',
    'turkménistan.jpg', 'turquie.jpg', 'vietnam.jpg', 'yemen.webp']

listbg = []
for (const bg of listbg_temp) {
    listbg.push("../backgrounds/Asie/"+bg);
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
                if(winstreak==50){ // 27 est le nombre de pays , donc fin
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
            if(winstreak==50){ // 50 est le nombre de pays , donc fin
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
