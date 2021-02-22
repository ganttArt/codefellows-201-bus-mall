'use strict';

const ProductSelectSectionElem = document.getElementById('product-selection');
const productOne = document.getElementById('product-1');
const productTwo = document.getElementById('product-2');
const productThree = document.getElementById('product-3');

let totalClicks = 0;


function Product(name, filepath, timesShown) {
  this.name = name;
  this.filepath = filepath;
  this.timesShown = timesShown;
  this.timesClicked = 0;

  Product.all.push(this);
}

Product.all = [];

const HandleClickOnProduct = function(event) {
  productOne.src = Product.all[4].filepath;
  productTwo.src = Product.all[5].filepath;
  productThree.src = Product.all[6].filepath;

  totalClicks += 1;
  console.log(totalClicks);
};

ProductSelectSectionElem.addEventListener('click', HandleClickOnProduct);

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

productOne.src = Product.all[1].filepath;
productTwo.src = Product.all[2].filepath;
productThree.src = Product.all[3].filepath;