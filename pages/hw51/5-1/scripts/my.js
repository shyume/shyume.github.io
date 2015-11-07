var gsLst = "0123456789";
var gsAnswer = "";
var giCount = 0;
var gbCheck = true;

// 產生新數字
function doNewnum() {
    var sNew = "";
    var sLst = gsLst;
    for (var i = 0; i < 4; i++) {
        var r = Math.round(Math.random() * (sLst.length - 1));
        var n = sLst.substr(r, 1);
        sLst = sLst.substring(0, r) + sLst.substr(r + 1, sLst.length);
        sNew += n;
    }
    return sNew;
}

// 檢查是否重覆
function doCheckDu(str) {
    var bCheck = true;
    var ary = new Array();
    for (var i = 0; i < str.length; i++) {
        ary[i] = str.substring(i, i + 1);
        for (var j = 0; j < ary.length - 1; j++) {
            if (ary[i] == ary[j]) {
                bCheck = false;
            }
        }
        if (!bCheck) break;
    }
    return bCheck;
}

// 開始猜
function doGuess(form) {
    // 猜50次後自動顯示答案
    if (giCount >= 50) gbCheck = false;

    // 已顯示答案者，就重新計算
    if (!gbCheck) {
        doReplay(form);
    }

    // 檢查數字正確性
    var sNum = "" + form.Guess.value;
    if (isNaN(sNum)) {
        alert("數值異常！");
        return false;
    } else if (sNum.length != 4) {
        alert("請填入四個數字！");
        return false;
    } else if (!doCheckDu(sNum)) {
        alert("四個數字不可重覆！");
        return false;
    }

    // 猜的結果
    var iA = 0;
    var iB = 0;
    for (var i = 0; i < 4; i++) {
        var s1 = sNum.substring(i, i + 1);
        for (var j = 0; j < 4; j++) {
            var s2 = gsAnswer.substring(j, j + 1);
            if (s1 == s2) {
                if (i == j) {
                    iA++;
                } else {
                    iB++;
                }
                break;
            }
        }
    }

    // 猜的提示
    var sHint = (++giCount) + " " + sNum + " " + iA + "A" + iB + "B\n";
    form.Hint.value += sHint;

    // 完全猜中時
    if (iA == 4) {
        form.Hint.value += "你猜中了！" + gsAnswer;
        gbCheck = false;
    }

    // 將游標移到輸入格內
    try {
        form.Guess.select();
        form.Guess.focus();
    } catch (ex) {}
}

// 顯示答案
function doAnswer(form, bCheck) {
    document.fm.Answer.value = gsAnswer;
    gbCheck = bCheck;
}

// 重玩
function doReplay(form) {
    gsAnswer = doNewnum();
    gbCheck = true;
    giCount = 0;
    form.Hint.value = "";
    form.Answer.value = "";
}

doReplay(document.fm);
