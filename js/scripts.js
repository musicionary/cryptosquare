//--------------//
// BACK END //
//--------------//
var stripped;
var column = [];
var row = [];
var numCol;
var numRow;
var cryptosquare = [];
var strippedArray;
var space = /(\w{5})/gi;
var encrypted = [];
var encryptedString;
var encryptedStringWithSpaces;

//spec: strip sentence of white space, punctuation, and lowercase the string
var noSpace = function(sentence) {
  stripped = sentence.replace(/\s+/g, "").toLowerCase();
  strippedArray = stripped.split("");
  return stripped;
};

//spec: create the size of the cryptosquare
var createSquare = function(sentence){
  //determine number of rows and columns
  numCol = Math.ceil(Math.sqrt(sentence.length));
  numRow = Math.ceil(Math.sqrt(sentence.length));

  // console.log(numCol, numRow);

  var pushLength = numCol - 1;
  var sliceLength = numCol;

  // console.log(pushLength);


  for (var i = 0; i < numRow; i++) {
    cryptosquare.push([]);
  }
  // console.log(cryptosquare);

  for (i = 0; i < cryptosquare.length; i++) {
    for(j = 0; j <= pushLength; j++) {
      cryptosquare[i].push(strippedArray[j]);
    }
    strippedArray.splice(0,sliceLength);
  }
  // console.log(cryptosquare);
};

//spec: encrypt from the square arrays, concat, join
var encrypt = function(cryptosquare) {
  for (var i = 0; i <= numCol; i++) {
    //enter
    for(var j = 0; j < numRow; j++) {
      encrypted.push(cryptosquare[j][i]);
    }

  }
  //spec: re insert whitespace (and punctuation)
  encryptedString = encrypted.join("");
  encryptedString = encryptedString.replace(space, "$1 ");
}


//--------------//
// FRONT END //
//--------------//
$(function() {
  $("#encrypter").submit(function(event) {
    event.preventDefault();

    var unencrypted = $("#sentence").val();


    noSpace(unencrypted);
    createSquare(stripped);
    encrypt(cryptosquare);
    
    $("#output").text(encryptedString);
  });
});
