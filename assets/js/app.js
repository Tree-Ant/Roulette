var fixedEL = document.querySelector("#FIXED");
var dropChoicesEL = document.querySelector(".numSELECT");
var balanceINPUTEL = document.querySelector("#balanceINPUT");
var wagerINPUTEL = document.querySelector("#wagerINPUT");
var spinnerEL = document.querySelector('#spinner');
var bankACCEL = document.querySelector('#bankACC');
var currWagerEL = document.querySelector('#currWager');
var chosenINPUTEL = document.querySelector('#chosenINPUT');
var chosenNUMEL = document.querySelector('#chosenNUM');
var wageBTNEL = document.querySelector("#wageBTN");
var balBTNEL = document.querySelector("#balBTN");
var spinCOUNTEL = document.querySelector("#spinCOUNT");
var circleEL = document.querySelector('.CIRCLE')
var testEL = document.querySelector('#test');
var loserEL = document.querySelector('.loserBOX');
var screenEL = document.querySelector('.screen');
var soEL = document.querySelector('.SO');
var changeEL = document.querySelector('#change');
var hideTableEL = document.querySelector('#hideTable');
var statTableEL = document.querySelector('.statTable');


var t0EL = document.querySelector('#t0');
var t00EL = document.querySelector('#t00');

var t01EL = document.querySelector('#t01');
var t02EL = document.querySelector('#t02');
var t03EL = document.querySelector('#t03');
var t04EL = document.querySelector('#t04');
var t05EL = document.querySelector('#t05');
var t06EL = document.querySelector('#t06');
var t07EL = document.querySelector('#t07');
var t08EL = document.querySelector('#t08');
var t09EL = document.querySelector('#t09');
var t10EL = document.querySelector('#t10');

var t11EL = document.querySelector('#t11');
var t12EL = document.querySelector('#t12');
var t13EL = document.querySelector('#t13');
var t14EL = document.querySelector('#t14');
var t15EL = document.querySelector('#t15');
var t16EL = document.querySelector('#t16');
var t17EL = document.querySelector('#t17');
var t18EL = document.querySelector('#t18');
var t19EL = document.querySelector('#t19');
var t20EL = document.querySelector('#t20');

var t21EL = document.querySelector('#t21');
var t22EL = document.querySelector('#t22');
var t23EL = document.querySelector('#t23');
var t24EL = document.querySelector('#t24');
var t25EL = document.querySelector('#t25');
var t26EL = document.querySelector('#t26');
var t27EL = document.querySelector('#t27');
var t28EL = document.querySelector('#t28');
var t29EL = document.querySelector('#t29');
var t30EL = document.querySelector('#t30');

var t31EL = document.querySelector('#t31');
var t32EL = document.querySelector('#t32');
var t33EL = document.querySelector('#t33');
var t34EL = document.querySelector('#t34');
var t35EL = document.querySelector('#t35');
var t36EL = document.querySelector('#t36');


var spins = 0;
var FIXhistory = [];

var stat0 = [];
var stat00 = [];

var stat01 = [];
var stat02 = [];
var stat03 = [];
var stat04 = [];
var stat05 = [];
var stat06 = [];
var stat07 = [];
var stat08 = [];
var stat09 = [];
var stat10 = [];

var stat11 = [];
var stat12 = [];
var stat13 = [];
var stat14 = [];
var stat15 = [];
var stat16 = [];
var stat17 = [];
var stat18 = [];
var stat19 = [];
var stat20 = [];

var stat21 = [];
var stat22 = [];
var stat23 = [];
var stat24 = [];
var stat25 = [];
var stat26 = [];
var stat27 = [];
var stat28 = [];
var stat29 = [];
var stat30 = [];

var stat31 = [];
var stat32 = [];
var stat33 = [];
var stat34 = [];
var stat35 = [];
var stat36 = [];

var options = ["00", "0", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36"];

function spin() {
    spins++
    fixedEL.value = options[Math.floor(Math.random() * options.length)];
    balanceINPUTEL.style.display = "none";
    spinCOUNTEL.innerHTML = spins;
    circleEL.classList.add('spinBG');
    checkWIN();
}

initialBAL = () => {
    var BAL = balanceINPUTEL.value;
    bankACCEL.value = parseFloat(BAL).toFixed(2);
    autoWager();
}

setWager = () => {
    var WAG = wagerINPUTEL.value;
    currWagerEL.value = parseFloat(WAG).toFixed(2);
}

autoWager = () => {
    var BAL = bankACCEL.value;
    var nWAG = parseInt(BAL) / 38;
    currWagerEL.value = nWAG.toFixed(2);
}

setCHOSEN = () => {
    var NUM = chosenINPUTEL.value;
    chosenNUMEL.value = NUM;
}

checkWIN = () => {
    var BAL = bankACCEL.value;
    var NUM = chosenNUMEL.value;
    var FIX = fixedEL.value;
    var WAG = currWagerEL.value;

    switch (FIX) {
        case "0":
            stat0.push(FIX);        
            break;
        case "00":
            stat00.push(FIX);
            break;
        case "01":
            stat01.push(FIX);
            break;
        case "02":
            stat02.push(FIX);
            break;
        case "03":
            stat03.push(FIX);
            break;
        case "04":
            stat04.push(FIX);
            break;
        case "05":
            stat05.push(FIX);
            break;
        case "06":
            stat06.push(FIX);
            break;
        case "07":
            stat07.push(FIX);
            break;
        case "08":
            stat08.push(FIX);
            break;
        case "09":
            stat09.push(FIX);
            break;
        case "10":
            stat10.push(FIX);
            break;
        case "11":
            stat11.push(FIX);
            break;
        case "12":
            stat12.push(FIX);       
            break;
        case "13":
            stat13.push(FIX);
            break;
        case "14":
            stat14.push(FIX);
            break;
        case "15":
            stat15.push(FIX);
            break;
        case "16":
            stat16.push(FIX);
            break;
        case "17":
            stat17.push(FIX);
            break;
        case "18":
            stat18.push(FIX);
            break;
        case "19":
            stat19.push(FIX);
            break;
        case "20":
            stat20.push(FIX);
            break;
        case "21":
            stat21.push(FIX);
            break;
        case "22":
            stat22.push(FIX);
            break;
        case "23":
            stat23.push(FIX);
            break;
        case "24":
            stat24.push(FIX);
            break;
        case "25":
            stat25.push(FIX);
            break;
        case "26":
            stat26.push(FIX);
            break;
        case "27":
            stat27.push(FIX);
            break;
        case "28":
            stat28.push(FIX);
            break;
        case "29":
            stat29.push(FIX);
            break;
        case "30":
            stat30.push(FIX);
            break;
        case "31":
            stat31.push(FIX);
            break;
        case "32":
            stat32.push(FIX);
            break;
        case "33":
            stat33.push(FIX);
            break;
        case "34":
            stat34.push(FIX);
            break;
        case "35":
            stat35.push(FIX);
            break;
        case "36":
            stat36.push(FIX);
            break;
    }
    t0EL.innerHTML = stat0.length;
    t00EL.innerHTML = stat00.length;

    t01EL.innerHTML = stat01.length;
    t02EL.innerHTML = stat02.length;
    t03EL.innerHTML = stat03.length;
    t04EL.innerHTML = stat04.length;
    t05EL.innerHTML = stat05.length;
    t06EL.innerHTML = stat06.length;
    t07EL.innerHTML = stat07.length;
    t08EL.innerHTML = stat08.length;
    t09EL.innerHTML = stat09.length;
    t10EL.innerHTML = stat10.length;

    t11EL.innerHTML = stat11.length;
    t12EL.innerHTML = stat12.length;
    t13EL.innerHTML = stat13.length;
    t14EL.innerHTML = stat14.length;
    t15EL.innerHTML = stat15.length;
    t16EL.innerHTML = stat16.length;
    t17EL.innerHTML = stat17.length;
    t18EL.innerHTML = stat18.length;
    t19EL.innerHTML = stat19.length;
    t20EL.innerHTML = stat20.length;

    t21EL.innerHTML = stat21.length;
    t22EL.innerHTML = stat22.length;
    t23EL.innerHTML = stat23.length;
    t24EL.innerHTML = stat24.length;
    t25EL.innerHTML = stat25.length;
    t26EL.innerHTML = stat26.length;
    t27EL.innerHTML = stat27.length;
    t28EL.innerHTML = stat28.length;
    t29EL.innerHTML = stat29.length;
    t30EL.innerHTML = stat30.length;

    t31EL.innerHTML = stat31.length;
    t32EL.innerHTML = stat32.length;
    t33EL.innerHTML = stat33.length;
    t34EL.innerHTML = stat34.length;
    t35EL.innerHTML = stat35.length;
    t36EL.innerHTML = stat36.length;

    FIXhistory.unshift(FIX);
    
    if (NUM === FIX) {
        var WnBAL = parseFloat(BAL) + parseFloat(WAG) * 36;
        bankACCEL.value = WnBAL.toFixed(2);
        circleEL.classList.remove('spinBG');        

        var text = "";
        for (var i = 0; i < FIXhistory.length; i++) {
            text += FIXhistory[i] + "<br>";
        }

        document.getElementById("tracker").innerHTML = text;

        spins.value = 0;
        autoWager();
    } else {
        var LnBAL = parseFloat(BAL) - parseFloat(WAG);
        bankACCEL.value = LnBAL.toFixed(2);
        

        if (LnBAL <= 0) {
            LOSER();

        } else {
            setTimeout(spin, 100);
        }
    }
}

LOSER = () => {
    loserEL.style.display = "block";
    soEL.classList.add('screenOVERLAY');
}

spinnerEL.addEventListener("click", function () {
    spin();
});

document.addEventListener('keydown', function () {
    function keyCode(event) {
        var x = event.keyCode;
        if (x == 32) {
            spin();
        } else if (x == 9) {
            location.reload();
        }
    }
    keyCode(event);
});

wageBTNEL.addEventListener("click", function () {
    setWager();
});

balBTNEL.addEventListener("click", function () {
    initialBAL();
});

testEL.addEventListener("click", function () {
    location.reload();
});

hideTableEL.addEventListener("click", function () {
    if (statTableEL.style.display === "none") {
        statTableEL.style.display = "block";
    } else {
        statTableEL.style.display = "none";
    }
});



initialBAL();