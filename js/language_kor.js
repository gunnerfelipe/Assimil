var randomNumber, randomChara;
var correct, errorcharacterList, hitSequence = 0, record = 0;
var characterList = CompleteArray();
correct = 0;
errorcharacterList = 0;

function VerifyRecord() {
    if (localStorage.getItem("recordRussian") != null) {
        record = parseInt(localStorage.getItem("recordRussian"));
    }
    else {
        localStorage.setItem("recordRussian", 0);
    }
    document.getElementById("record").innerHTML = record;
}

function SetQuestion() {
    VerifyRecord();
    randomNumber = Math.round(Math.random() * (characterList.length - 1)); //só precisa alterar aqui caso adicione mais elementos ou remova
    console.log(randomNumber);
    randomChara = "&#" + characterList[randomNumber] + ";";
    document.getElementById("question").innerHTML = randomChara;
}

function DisplayScore() {
    document.getElementById("right").innerHTML = correct;
    document.getElementById("wrong").innerHTML = errorcharacterList;
    document.getElementById("sequence").innerHTML = hitSequence;
}

function Check(x) {
    if (document.getElementById(characterList[randomNumber]).style.background = "aquamarine") {
        document.getElementById(characterList[randomNumber]).style.background = VerifyLines(randomNumber) ? "#f2f2f2" : "transparent";
        console.log(characterList[randomNumber]);
    }

    if (parseInt(x) == characterList[randomNumber]) {
        correct++;
        hitSequence++;
        SetRecord();
        DisplayScore();
        SetQuestion();
    }
    else {
        //armazenar a id do elemento com cor diferente
        //depois pegar ele para verificar a linha e por fim, voltar para a cor padrão
        document.getElementById(characterList[randomNumber]).style.background = "aquamarine";
        errorcharacterList++;
        DisplayScore();
    }
}

function SetRecord() {
    if (hitSequence >= record) {
        record = hitSequence;
        localStorage.setItem("recordRussian", record);
        document.getElementById("record").innerHTML = record;
    }
    hitSequence = 0;
}

function ResetRecord() {
    localStorage.clear();
    correct = 0;
    errorcharacterList = 0;
    hitSequence = 0;
    record = 0;
    DisplayScore();
    document.getElementById("record").innerHTML = record;
}

function CompleteArray() {
    var  newArray = Array(
        12623, 12625, 12627, 12629, 12631, 12635, 12636, 12640, 12641, 12643,
        44032, 44088, 44144, 44200, 44256, 44368, 44396, 44508, 44536, 44592,
        45208, 45264, 45320, 45376, 45432, 45544, 45572, 45684, 45712, 45768,
        45796, 45852, 45908, 45964, 46020, 46132, 46160, 46272, 46300, 46356,
        46972, 47028, 47084, 47140, 47196, 47308, 47336, 47448, 47476, 47532,
        48148, 48204, 48260, 48316, 48372, 48484, 48512, 48624, 48652, 48708,
        
        /*Linha do sa */  48148, 48204, 48260, 48316, 48356, 48484, 48512, 48624, 48652, 48708,
        /*Linha do a */   4449, 4451, 4453, 4455, 4457, 4449, 4462, 4466, 4467, 4469,
        /*Linha do ja */  51088, 51144, 51200, 51256, 51312, 51424, 51452, 51564, 51592, 51648,
        /*Linha do cha */ 52264, 52320, 52376, 52432, 52488, 52600, 52628, 52740, 52768, 52824,
        /*Linha do ka */  52852, 52908, 52964, 53020, 53076, 53188, 53216, 53328, 53356, 53412,
        /*Linha do ta */  53440, 53496, 53552, 53608, 53664, 53776, 53804, 53916, 53944, 54000,
        /*Linha do pa */  54028, 54084, 54140, 54196, 54252, 54364, 54392, 54504, 54532, 54588,
        /*Linha do ha */  54616, 54672, 54728, 54784, 54840, 54952, 54980, 55092, 55120, 55176,

        
        )
    return newArray;
}

function VerifyLines(n) {
    verify = false;
    var a = Array(19, 18, 2, 8, 31, 29, 26, 0, 27, 6, 4, 5, 16, 30, 28, 1, 3, 20);

    for (i = 0; i < a.length; i++) {
        if (n == a[i]) {
            verify = true
        }
    }
    return verify;
}