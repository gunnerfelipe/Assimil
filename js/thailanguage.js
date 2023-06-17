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
    var newArray = Array(3585, 3586, 3587, 3588, 589, 3590, 3591, 3592,
        3593, 3594, 3595, 3596, 3597, 3598, 3599, 3600, 3601, 3602, 3603,
        3604, 3605, 3606, 3607, 3608, 3609, 3610, 3611, 3612, 3613,
        3614, 3615, 3616, 3617, 3618);
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