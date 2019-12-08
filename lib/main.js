'use strict';

//Global variables
var message = document.getElementById('hiddenPopup');

//Layer One
var myBoxes = document.querySelectorAll('#layer-one p');
var layerOne = document.getElementById('layer-one');

//Layer Two
var myBoxesTwo = document.querySelectorAll('#layer-two p');
var layerTwo = document.getElementById('layer-two');

var myBoxesThree = document.querySelectorAll('#layer-three p');
var layerThree = document.getElementById('layer-three');

function loopThrough() {
  var _this = this;

  var changeColor = function changeColor() {
    _this.classList.toggle('blue');
  };
  for (var i = 0; i < this.textContent.length * 2; i++) {
    setTimeout(changeColor, i * 1000);
  }
};

function changeLayer() {
  var swap = function swap() {
    layerOne.classList.add('hide');
    layerTwo.classList.remove('hide');
  };
  setTimeout(swap, this.textContent.length * 2 * 1000);
}

// //loopThrough Functions
function loopThroughNumber() {
  var _this2 = this;

  var changeColor = function changeColor() {
    _this2.classList.toggle('blue');
  };
  var numStringValue = this.textContent;
  for (var i = 0; i < Number(numStringValue * 2); i++) {
    setTimeout(changeColor, i * 1000);
  }
};

function changeLayerNumber() {
  var swapNum = function swapNum() {
    layerTwo.classList.add('hide');
    layerThree.classList.remove('hide');
  };
  var numStringValue = this.textContent;
  setTimeout(swapNum, Number(numStringValue * 2) * 1000);
}

// function changeLayerMessage() {
//       layerThree.classList.add('hide');
//       message.classList.remove('hide');
//
// }

function changeLayerMessage() {
  layerThree.classList.add('hide');
  message.classList.remove('hide');
  //add API here

  var mainSection = document.getElementById('page-body');

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var showMessage = function showMessage() {
        apiResult.sort(function (a, b) {
          return 0.5 - Math.random();
        });
        var randomMessageParagraph = document.createElement('p');
        mainSection.appendChild(randomMessageParagraph);
        var randomMessageText = document.createTextNode(apiResult[0].message);
        randomMessageParagraph.appendChild(randomMessageText);
      };

      var apiResult = JSON.parse(this.responseText);

      //Code Dealing With The API Data Goes Here
      console.log(apiResult);
      ;
      showMessage();
    }
  };
  xmlhttp.open('GET', 'http://fortunecookieapi.herokuapp.com/v1/fortunes', true);
  xmlhttp.send();
}

//Event Listener
for (var i = 0; i < myBoxes.length; i++) {
  myBoxes[i].addEventListener('click', loopThrough);
  myBoxes[i].addEventListener('click', changeLayer);

  myBoxesTwo[i].addEventListener('click', loopThroughNumber);
  myBoxesTwo[i].addEventListener('click', changeLayerNumber);

  myBoxesThree[i].addEventListener('click', changeLayerMessage);
};

// for(let i=0; i < myBoxes.length; i++){
//   myBoxesTwo[i].addEventListener('click', loopThrough);
//   myBoxesTwo[i].addEventListener('click', changeLayer);
//   myBoxesTwo[i].addEventListener('click', loopThroughNumber);
//   myBoxesTwo[i].addEventListener('click', changeLayerNumber);
// };