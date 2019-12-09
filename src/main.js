//Global variables
const message = document.getElementById('hiddenPopup');

//Layer One
const myBoxes = document.querySelectorAll('#layer-one p');
const layerOne = document.getElementById('layer-one');

//Layer Two
const myBoxesTwo = document.querySelectorAll('#layer-two p');
const layerTwo = document.getElementById('layer-two');

const myBoxesThree = document.querySelectorAll('#layer-three p');
const layerThree = document.getElementById('layer-three');

function loopThrough() {
    const changeColor = () => {
      this.classList.toggle('blue');
    };
    for(let i=0; i<this.textContent.length * 2; i++) {
      setTimeout(changeColor, i*1000);
    }
};

function changeLayer() {
    const swap = () => {
      layerOne.classList.add('hide');
      layerTwo.classList.remove('hide');
    }
    setTimeout(swap, this.textContent.length * 2 * 1000);
}


// //loopThrough Functions
function loopThroughNumber(){
  const changeColor = () => {
    this.classList.toggle('blue');
  };
  const numStringValue = this.textContent;
  for(let i=0; i < Number(numStringValue * 2); i++) {
    setTimeout(changeColor, i * 1000);
  }
};

function changeLayerNumber() {
    const swapNum = () => {
      layerTwo.classList.add('hide');
      layerThree.classList.remove('hide');
    }
    const numStringValue = this.textContent;
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
xmlhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
    var apiResult = JSON.parse(this.responseText);

    //Code Dealing With The API Data Goes Here
    console.log(apiResult);
    function showMessage(){
    apiResult.sort(function(a, b){return 0.5 - Math.random()});
    var randomMessageParagraph = document.createElement('p');
    mainSection.appendChild(randomMessageParagraph);
    var randomMessageText = document.createTextNode(apiResult[0].message);
    randomMessageParagraph.appendChild(randomMessageText);
  };
  showMessage();
}
};
xmlhttp.open('GET', 'http://fortunecookieapi.herokuapp.com/v1/fortunes', true);
xmlhttp.send();

}


//Event Listener
for(let i=0; i < myBoxes.length; i++){
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
