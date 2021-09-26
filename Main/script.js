function option_click() {
    window.open("index.html");
}

// function option1() {
//     return x;
// }
var orginal_num;


function random_options() {
    var options_list = [];
    for (i = 0; i < 4; i++) {
        options_list[i] = Math.ceil(Math.random() * (9 - 1));
    }
    orginal_num = options_list[0];

    if (options_list[0] == options_list[1]) {
        options_list[1] = Math.ceil(options_list[1] + 16 / 10);
    }
    if (options_list[0] == options_list[2] || options_list[2] == options_list[1]) {
        options_list[2] = Math.ceil(options_list[2] + 17 / 10)
    }
    if (options_list[3] == options_list[2] || options_list[3] == options_list[1] || options_list[3] == options_list[0]) {
        options_list[3] = Math.ceil(options_list[3] + 17 / 10);
        console.log(4);
    }
    return options_list;
}
//onload function'
t = [5, 15, 20];
var tier = [1, t[0], "Beginner"];


function options() {
    var options_list1 = random_options();

    console.log(tier);
    // console.log(options_list1);
    hinttext = hintCreator(tier[0], options_list1);
    options_list1.pop();
    opt_list = shuffleArray(options_list1);
    // console.log(opt_list);
    document.getElementById("option-1").innerText = opt_list[0];
    document.getElementById("option-2").innerText = opt_list[1];
    document.getElementById("option-3").innerText = opt_list[2];
    document.getElementById("hint-h3").innerText = hinttext;
    document.getElementById("level-head").innerHTML = "Level 1" + " / " + tier[1];

}



var levelText = 1; //level
var counter = 0; //counter
// var tierMax = 10;

function option_check(x) {
    // window.alert("S")
    modal_text = modallText();
    org_num = window.orginal_num;
    modal = document.getElementById("myModal");
    modalText1 = document.getElementById("modalText1");
    modalText2 = document.getElementById("modalText2");
    // modalHeader = document.getElementById("modalHeader");
    modalbutton1 = document.getElementById("modalbutton1");
    modalbutton2 = document.getElementById("modalbutton2");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    modalbutton2.innerText = modal_text[1];

    // modalHeader.innerText = "Guess The Number !!";
    if (x == org_num) {
        // window.alert("You champ!! ") ? "" :
        //     location.reload();
        counter = 1;
        levelText += 1;
        modalText1.innerText = modal_text[3];
        modal.style.display = "block";
        modalbutton1.innerText = modal_text[0];
        // modalbutton2.innerText = modal_text[1];

    } else {

        modalText1.innerText = modal_text[4];
        modal.style.display = "block";
        modalbutton1.innerText = modal_text[2];
        // modalbutton2.innerText = modal_text[1];
        levelText = 1;
        counter = 0;
    }
    if (levelText < t[0]) {
        tier = [1, t[0], "Beginner", "images/Level-01.png"];

    } else if (levelText >= t[0] && levelText < t[1]) {
        tier = [2, t[1], "Intermediate", "images/Level-02.png"];
    } else {
        tier = [3, t[2], "Expert", "images/Level-03.png"];
    }

}
// modal button click

function modalbutton_click(text) {
    var levelTextBox = document.getElementById("user-level-box");
    var tierText = document.getElementById("tier-text");
    tierImage = document.getElementById("tier-image");
    levelHead = document.getElementById("level-head");

    if (text == "Home") {
        window.open("index.html", "_self")
    } else {
        options();
        modal.style.display = "none";
        if (levelText > 9) {
            // window.alert("9");
            if (window.matchMedia("(max-width: 700px)").matches) {
                levelTextBox.style.fontsize = "small";
                levelTextBox.style.left = "16px";
            } else {
                levelTextBox.style.fontsize = "small";
                levelTextBox.style.left = "60px";
            }
        } else {
            if (window.matchMedia("(max-width: 700px)").matches) {
                levelTextBox.style.left = "20px";

            } else {
                levelTextBox.style.left = "75px";
            }
        }

    }
    if (levelText >= 20) {
        window.open("party.html", "_self");
    } else {
        tierImage.src = tier[3];
        tierText.innerText = tier[2] + " Level";
        levelHead.innerHTML = "Level " + levelText + " / " + tier[1];
    }

    if (counter == 0) {
        levelTextBox.innerText = 1;
    } else {
        levelTextBox.innerText = levelText;

    }
}

//clue
function help() {
    window.alert("Currently this feature is not available")
}

//shuffle array

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

// ads_espot content
function createAds(row, col, ads_front_head, ads_back_head, ads_back_image) {

    ads_main = document.getElementById("ads-main");
    flipCard_table = document.createElement("table");
    flipCard_table.className = "ads-table";
    var tbdy = document.createElement('tbody');
    ads_front_head_length = ads_front_head.length;
    ads_back_head_length = ads_back_head.length;

    // document.getElementById("flip-card-back-image").src = "star2.jpg";
    for (i = 0; i < row; i++) {
        flipCard_table_row = document.createElement("tr");
        flipCard_table_row.className = "table-row";
        for (j = 0; j < col; j++) {
            j1 = j;
            flipCard_table_col = document.createElement("td");
            flipCard_table_col.className = "table-col";

            flipCard = document.createElement("div");
            flipCard_inner = document.createElement("div");
            flipCard_front = document.createElement("div");
            flipCard_front_h2 = document.createElement("h2");
            flipCard_back = document.createElement("div");
            flipCard_image = document.createElement("img");
            // flipCard_h1 = document.getElementsByClassName("flip-card-back-h1");
            flipCard_h3 = document.createElement("h3");
            flipCard_p2 = document.createElement("p");

            flipCard.className = "flip-card";
            flipCard_inner.className = "flip-card-inner";
            flipCard_front.className = "flip-card-front";
            flipCard_front_h2.className = "flip-card-front-h2-r" + (i + 1) + "-c" + (j + 1);
            flipCard_back.className = "flip-card-back";
            flipCard_image.className = "flip-card-back-image-r" + (i + 1) + "-c" + (j + 1);
            flipCard_h3.className = "flip-card-back-h3-r" + (i + 1) + "-c" + (j + 1);
            flipCard_p2.className = "flip-card-back-p2-r" + (i + 1) + "-c" + (j + 1);

            flipCard_table_col.appendChild(flipCard);
            flipCard.appendChild(flipCard_inner);
            flipCard_inner.appendChild(flipCard_front);
            flipCard_front.appendChild(flipCard_front_h2);
            flipCard_inner.appendChild(flipCard_back);
            flipCard_back.appendChild(flipCard_image);
            flipCard_back.appendChild(flipCard_h3);
            //add text contents

            flipCard_table_row.appendChild(flipCard_table_col);
            span_h2 = document.createElement('span');
            span_h3 = document.createElement('span');


            if (i > 0) {
                j1 = j + col
            }
            span_h2.textContent = ads_front_head[j1];
            flipCard_front_h2.appendChild(span_h2);
            span_h3.textContent = ads_back_head[j1];
            flipCard_h3.appendChild(span_h3);
            flipCard_image.setAttribute("src", ads_back_image[0])

        }
        tbdy.appendChild(flipCard_table_row);


    }
    flipCard_table.appendChild(tbdy);
    ads_main.appendChild(flipCard_table);

}


// Login 

function login() {
    document.getElementById("login-form").style.display = "block";

}

function validate() {
    uname = "Antony";
    pswd = "a";
    var username = document.getElementById("uname").value;
    var password = document.getElementById("pswd").value;
    if (username == uname && password == pswd) {
        // document.getElementById("login-form").style.display = "none";
        // document.getElementById("main-load").style.display = "none";
        // window.location.replace("guess_num.html");
        // location.href = "guess_num.html";
        window.open("guess_num.html", "_self");


    } else {
        window.alert("No1");
        document.getElementById("main-load").style.display = "none";
        document.getElementById("login-form").style.display = "inline-block";
    }
}

function login_form() {
    document.getElementById("main-load").style.display = "none";
    document.getElementById("login-form").style.display = "inline-block";
}

//Login end