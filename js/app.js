'use strict';

const mainElem = document.getElementsByTagName('main')[0];
const productSelectSectionElem = document.getElementById('product-selection');
const productOneTag = document.getElementById('product-1');
const productTwoTag = document.getElementById('product-2');
const productThreeTag = document.getElementById('product-3');

const viewResultsButton = document.createElement('button');
viewResultsButton.setAttribute('id', 'view-results-button');
viewResultsButton.textContent = 'View Results';

let totalClicks = 0;
let productOne, productTwo, productThree;


function Product(name, filepath, timesShown) {
  this.name = name;
  this.filepath = filepath;
  this.timesShown = timesShown;
  this.timesClicked = 0;

  Product.all.push(this);
}

Product.all = [];

const renderProducts = function (indexOne, indexTwo, indexThree) {
  productOneTag.src = Product.all[indexOne].filepath;
  productTwoTag.src = Product.all[indexTwo].filepath;
  productThreeTag.src = Product.all[indexThree].filepath;
};

const generateNewProducts = function () {
  let indexOne = Math.floor(Math.random() * Product.all.length);
  let indexTwo, indexThree;

  do {
    indexTwo = Math.floor(Math.random() * Product.all.length);
  } while (indexTwo === indexOne);

  do {
    indexThree = Math.floor(Math.random() * Product.all.length);
  } while ((indexThree === indexOne) || (indexThree === indexTwo));

  productOne = Product.all[indexOne];
  productTwo = Product.all[indexTwo];
  productThree = Product.all[indexThree];

  productOne.timesShown++;
  productTwo.timesShown++;
  productThree.timesShown++;

  renderProducts(indexOne, indexTwo, indexThree);
};


const HandleClickOnProduct = function (event) {
  let imageClicked = event.target;
  if (imageClicked.id === 'product-selection') {
    alert('Please click on an image to make your selection.');
  } else {
    if (imageClicked.id === 'product-1') {
      productOne.timesClicked++;
    } else if (imageClicked.id === 'product-2') {
      productTwo.timesClicked++;
    } else if (imageClicked.id === 'product-3') {
      productThree.timesClicked++;
    }
    generateNewProducts();
    totalClicks += 1;
  }
  if (totalClicks === 25) {
    mainElem.appendChild(viewResultsButton);
  }
};

const HandleViewResults = function () {
  const ulElem = document.createElement('ul');
  mainElem.appendChild(ulElem);

  for (let i = 0; i < Product.all.length; i++) {
    let listElem = document.createElement('li');
    let currentProduct = Product.all[i];
    listElem.textContent = `${currentProduct.name} had ${currentProduct.timesClicked} votes, and was seen ${currentProduct.timesShown} times.`;
    ulElem.appendChild(listElem);
  }
  productSelectSectionElem.removeEventListener('click', HandleClickOnProduct);
  viewResultsButton.removeEventListener('click', HandleViewResults);
};

const generateChartLabels = function () {
  let labels = [];
  for (let i = 0; i < Product.all.length; i++) {
    labels.push(Product.all[i].name);
  }
  return labels;
};

const generateChartData = function () {
  let timesClickedData = [];
  for (let i = 0; i < Product.all.length; i++) {
    timesClickedData.push(Product.all[i].timesClicked);
  }
  return timesClickedData;
};

const renderChart = function () {
  const canvasElem = document.createElement('canvas');
  mainElem.appendChild(canvasElem);
  var chart = new Chart(canvasElem, {
    type: 'horizontalBar',
    data: {
      labels: generateChartLabels(),
      datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: generateChartData()
      }]
    },
    options: {}
  });
};

productSelectSectionElem.addEventListener('click', HandleClickOnProduct);
viewResultsButton.addEventListener('click', renderChart);


new Product('Bag', 'assets/bag.jpg', 0);
new Product('Banana', 'assets/banana.jpg', 0);
new Product('Bathroom', 'assets/bathroom.jpg', 0);
new Product('Boots', 'assets/boots.jpg', 0);
new Product('Breakfast', 'assets/breakfast.jpg', 0);
new Product('Bubblegum', 'assets/bubblegum.jpg', 0);
new Product('Chair', 'assets/chair.jpg', 0);
new Product('Cthulhu', 'assets/cthulhu.jpg', 0);
new Product('Dog Duck', 'assets/dog-duck.jpg', 0);
new Product('Dragon', 'assets/dragon.jpg', 0);
new Product('Pen', 'assets/pen.jpg', 0);
new Product('Pet Sweep', 'assets/pet-sweep.jpg', 0);
new Product('Scissors', 'assets/scissors.jpg', 0);
new Product('Shark', 'assets/shark.jpg', 0);
new Product('Sweep', 'assets/sweep.png', 0);
new Product('Tauntaun', 'assets/tauntaun.jpg', 0);
new Product('Unicorn', 'assets/unicorn.jpg', 0);
new Product('USB', 'assets/usb.gif', 0);
new Product('Water Can', 'assets/water-can.jpg', 0);
new Product('Wine Glass', 'assets/wine-glass.jpg', 0);

generateNewProducts();
