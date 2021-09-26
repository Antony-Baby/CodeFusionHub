//function to show ads
function ads() {
    //pass parameters row and colum
    //max value for col :4 
    row = 2;
    col = 4;
    // number of items in head and back head lists should be equal to col value*2 
    // (eg: if col is 4 then length of list should be 8 )

    // ads_front_head = ["Test Data", "Test Data", "Test Data", "Test Data", "Test Data", "Test Data"];
    // ads_back_head = ["ax", "b", "c", "d", "e", "f", "b", "c", "d", "e", "f"];
    // ads_back_image = ["images/star2.jpg", "images/star2.jpg", "images/star2.jpg"];

    // If the value is same for all cards then use below code else comment the below code
    ads_front_head = fillArray("The-Code Fusion-Hub", (col * 2));
    ads_back_head = fillArray("Guess The NUm", (col * 2));
    ads_back_image = fillArray("images/star2.jpg", (col * 2));

    createAds(row, col, ads_front_head, ads_back_head, ads_back_image);

}

function fillArray(value, len) {
    var arr = [];
    for (var i = 0; i < len; i++) {
        arr.push(value);
    }
    return arr;
}

// Customize texts in the modal box

function modallText() {
    Correct_guess_footer = "Go To Next Level";
    Back_home = "Home";
    Incorrect_guess_footer = "Try Again !";

    Correct_guess_body = "You Champ !";
    Incorrect_guess_body = "Dont Worry , Better Luck Next Time !";

    modal_text = [Correct_guess_footer, Back_home, Incorrect_guess_footer, Correct_guess_body, Incorrect_guess_body];
    return modal_text;
}



function hintCreator(tier, list) {
    hint_div = document.getElementById("hint");
    hint_div.style.display = "block";
    if (tier == 1) {
        sum = list[3] + list[0];
        hint = "X + " + list[3] + " = " + sum;
    } else if (tier == 2) {
        sum = (list[3] * list[0]) + list[3];
        hint = list[3] + "X + " + list[3] + " = " + sum;
    } else {
        sum = (list[3] * list[0]) + list[3] * list[0] + (list[3] + 1);
        hint = list[3] + "X + " + list[3] + "X + " + (list[3] + 1) + " = " + sum;
        // hint_div.style.display = "none";
    }
    return hint;
}

//oncall function
function main() {
    // login()
    options();
    ads();

}