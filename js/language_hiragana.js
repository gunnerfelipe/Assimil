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
    var newArray = Array(12354,
        12356,
        12358,
        12360,
        12362,
        12363,
        12365,
        12367,
        12369,
        12371,
        12373,
        12375,
        12377,
        12379,
        12381,
        12383,
        12385,
        12388,
        12390,
        12392,
        12394,
        12395,
        12396,
        12397,
        12398,
        12399,
        12402,
        12405,
        12408,
        12411,
        12414,
        12415,
        12416,
        12417,
        12418,
        12420,
        12422,
        12424,
        12425,
        12426,
        12427,
        12428,
        12429,
        12431,
        12434,
        12435);
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