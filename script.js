pleading = ["Please spare us!", "We beg for mercy!", "We'll leave. Let us go please.", "We won't do any harm.", "We'll never come back, please don't kill us!", "Nooooo! We don't want to die.", "We have families to get back to, spare us please.", "Let us live."];
nasty = ["We'll take over your world!", "You can't stop us!", "You ugly human!", "My comrades will win, you disgusting rat.", "We hate you.", "We are superior.", "A few deaths will not stop us!", "We'll destroy you all!"];
messageList = [];

function initialize() {
    bugs = document.getElementById("bugs");
    message = document.getElementById("message");
    bugsNum = 15;
    i = 8;
    j = 8;
}

function changeImage() { 
    if (document.getElementById("bug1").src = "/bugSplat/images/bug.jpg")
    {
        document.getElementById("bug1").src = "/bugSplat/images/splatter.jpg";
        if (bugsNum > 0) {
            bugsNum--;
        }
        messages();
    }
}

function changeImage2() {
    if (document.getElementById("bug2").src = "/bugSplat/images/bug.jpg")
    {
        document.getElementById("bug2").src = "/bugSplat/images/splatter.jpg";
        if (bugsNum > 0) {
            bugsNum--;
        }
        messages();
    }
}

function changeImage3() {
    if (document.getElementById("bug3").src = "/bugSplat/images/bug.jpg")
    {
        document.getElementById("bug3").src = "/bugSplat/images/splatter.jpg";
        if (bugsNum > 0) {
            bugsNum--;
        }
        messages();
    }
}

function changeImage4() {
    if (document.getElementById("bug4").src = "/bugSplat/images/bug.jpg")
    {
        document.getElementById("bug4").src = "/bugSplat/images/splatter.jpg";
        if (bugsNum > 0) {
            bugsNum--;
        }
        messages();
    }
}

function changeImage5() {
    if (document.getElementById("bug5").src = "/bugSplat/images/bug.jpg")
    {
        document.getElementById("bug5").src = "/bugSplat/images/splatter.jpg";
        if (bugsNum > 0) {
            bugsNum--;
        }
        messages();
    }
}

function changeImage6() {
    if (document.getElementById("bug6").src = "/bugSplat/images/bug.jpg")
    {
        document.getElementById("bug6").src = "/bugSplat/images/splatter.jpg";
        if (bugsNum > 0) {
            bugsNum--;
        }
        messages();
    }
}

function changeImage7() {
    if (document.getElementById("bug7").src = "/bugSplat/images/bug.jpg")
    {
        document.getElementById("bug7").src = "/bugSplat/images/splatter.jpg";
        if (bugsNum > 0) {
            bugsNum--;
        }
        messages();
    }
}

function changeImage8() {
    if (document.getElementById("bug8").src = "/bugSplat/images/bug.jpg")
    {
        document.getElementById("bug8").src = "/bugSplat/images/splatter.jpg";
        if (bugsNum > 0) {
            bugsNum--;
        }
        messages();
    }
}

function changeImage9() {
    if (document.getElementById("bug9").src = "/bugSplat/images/bug.jpg")
    {
        document.getElementById("bug9").src = "/bugSplat/images/splatter.jpg";
        if (bugsNum > 0) {
            bugsNum--;
        }
        messages();
    }
}

function changeImage10() {
    if (document.getElementById("bug10").src = "/bugSplat/images/bug.jpg")
    {
        document.getElementById("bug10").src = "/bugSplat/images/splatter.jpg";
        if (bugsNum > 0) {
            bugsNum--;
        }
        messages();
    }
}

function changeImage11() {
    if (document.getElementById("bug11").src = "/bugSplat/images/bug.jpg")
    {
        document.getElementById("bug11").src = "/bugSplat/images/splatter.jpg";
        if (bugsNum > 0) {
            bugsNum--;
        }
        messages();
    }
}

function changeImage12() {
    if (document.getElementById("bug12").src = "/bugSplat/images/bug.jpg")
    {
        document.getElementById("bug12").src = "/bugSplat/images/splatter.jpg";
        if (bugsNum > 0) {
            bugsNum--;
        }
        messages();
    }
}

function changeImage13() {
    if (document.getElementById("bug13").src = "/bugSplat/images/bug.jpg")
    {
        document.getElementById("bug13").src = "/bugSplat/images/splatter.jpg";
        if (bugsNum > 0) {
            bugsNum--;
        }
        messages();
    }
}

function changeImage14() {
    if (document.getElementById("bug14").src = "//bugSplatimages/bug.jpg")
    {
        document.getElementById("bug14").src = "/bugSplat/images/splatter.jpg";
        if (bugsNum > 0) {
            bugsNum--;
        }
        messages();
    }
}

function changeImage15() {
    if (document.getElementById("bug15").src = "/bugSplat/images/bug.jpg")
    {
        document.getElementById("bug15").src = "/bugSplat/images/splatter.jpg";
        if (bugsNum > 0) {
            bugsNum--;
        }
        messages();
    }
}

function messages() {
    if (bugsNum > 0) {
        num = Math.floor(Math.random() * i);
        num2 = Math.floor(Math.random() * j);
        if (bugsNum >= 8) {
            messageList.push(nasty[num] + "<br>");
            nasty.splice(num, 1);
            i--;
        }
        else {
            messageList.push(pleading[num2] + "<br>");
            pleading.splice(num2, 1)
            j--;
        }
    }

    if (bugsNum === 0) {
        messageList.push("You've splatted us all.<br>")
    }
    
    message.innerHTML = messageList;
}
