// Code JavaScript pour le bouton "En savoir plus"
var btn = document.querySelector('.btn');

btn.addEventListener('click', function() {
  alert('Nous sommes heureux de vous aider !');
});

// Code JavaScript pour la fonctionnalité de zoom
var img = document.querySelector('.zoom');

img.addEventListener('mouseover', function() {
  this.style.transform = 'scale(1.5)';
});

img.addEventListener('mouseout', function() {
  this.style.transform = 'scale(1)';
});

// Code JavaScript pour la fonctionnalité de glisser-déposer
var box = document.querySelector('.box');

box.addEventListener('dragstart', function(e) {
  e.dataTransfer.setData('text', e.target.id);
});

var trash = document.querySelector('.trash');

trash.addEventListener('dragover', function(e) {
  e.preventDefault();
});

trash.addEventListener('drop', function(e) {
  var data = e.dataTransfer.getData('text');
  var el = document.getElementById(data);
  el.parentNode.removeChild(el);
});
