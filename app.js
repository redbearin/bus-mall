'use strict';

//GLOBAL VARIABLES

//variable to the total number of selecting opportunities
var tests= 25; //MAKE THIS A CAPITAL LETTER

//variable that stores the details of each item in an array (each instance of the item object)
var catalog_options=[];

//var current_right_item;
//var current_middle_item;
//var current_left_item;

//variable for the container that holds all the images in the selection box
var container_for_items = document.getElementById('selection_block');

//variables associated with the left item of the selection block
var left_image = document.getElementById('left_item_image');
var left_h2 = document.getElementById('left_item_h2');

//variables associated with the middle item of the selection block
var middle_image = document.getElementById('middle_item_image');
var middle_h2 = document.getElementById('middle_item_h2');

//variables associated with the right item of the selection block
var right_image = document.getElementById('right_item_image');
var right_h2 = document.getElementById('right_item_h2');

//FUNCTIONS
//Constructs an Item object (constructor function)
var Item = function(name, url){
  this.name = name;
  this.url = url;
  this.clicked_on_count = 0; //CHANGE TO SIMPLER NAME CLICKS
  this.times_shown = 0; //CHANGE TO SIMPLER NAME APPEARED
  catalog_options.push(Item); // //CHANGE TO SIMPLER NAME OPTIONS
};

//function that assigns a particular item name and url to targets (tells us where they will be on the page)
var render_item = function(the_item, target_img, target_h2){
  target_img.src = the_item.url;
  target_h2.textContent = the_item.name;	
};

var handle_click_on_item = function (event){
  if (event.target.tagName === 'IMG'){
    if (event.target.id === 'left_item_image'){currently_displayed_left_item.clicked_on_count ++;
    }
    else if (event.target.id === 'middle_item_image'){currently_displayed_middle_item.clicked_on_count ++;
    }
    else if (event.target.id === 'right_item_image'){currently_displayed_right_item.clicked_on_count ++;
    }

    //reduce number of tests remaining
    tests --;

    //picking new items and placing them on the page
    //pick a random array indice that will be used to select image (next code block)
    var left_item_idx = Math.floor(Math.random() * catalog_options.length);
    var middle_item_idx = Math.floor(Math.random() * catalog_options.length);
    var right_item_idx = Math.floor(Math.random() * catalog_options.length);

    //load the randomly selected images into the placeholders
    currently_displayed_left_item = catalog_options[left_item_idx];
    currently_displayed_middle_item = catalog_options[middle_item_idx];
    currently_displayed_right_item = catalog_options[right_item_idx];

    //render the images to the page by calling the render_item function
    render_item(catalog_options[left_item_idx]);
    render_item(catalog_options[middle_item_idx]);
    render_item(catalog_options[right_item_idx]);

    //stop listening for clicks
    if (tests <= 0){container_for_items.removeEventListener('click', handle_click_on_item);
      for (var )
      var li_el = document.create_element('li');
      li_el.textContent
      //remove images

    //render results
      var canvas_el = document.getelementbyId ('goat_results');
      var ctx
      var goat_click_data = [];
      for (var i=0; i<the_herd.length; i++){
        goat_click_data.push(the_herd[i].clicked_on_count);
      }
      var goat_click_labels = [];
      for (var j=0; j<the_herd.length; j++){
        goat_click_data.push(the_herd[i].clicked_on_count);
      }

      //add a Chart JS CDN
var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: goat_click_labels,
        datasets: [{
            label: '# of Clicks',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

myChart();
    }
  }
};

//MAIN BODY OF CODE
//create instances of all items (note in the Item object has code that sends each instance to an array)
new Item ('bag', 'assets/bag.jpg');
new Item ('banana', 'assets/banana.jpg');
new Item ('bathroom', 'assets/bathroom.jpg');
new Item ('boots', 'assets/boots.jpg');
new Item ('breakfast', 'assets/breakfast.jpg');
new Item ('bubblegum', 'assets/bubblegum.jpg');
new Item ('chair', 'assets/chair.jpg');
new Item ('cthulhu', 'assets/cthulhu.jpg');
new Item ('dog', 'assets/dog-duck.jpg');


//initialize the items in the selection box
currently_displayed_left_item = catalog_options[0];
currently_displayed_middle_item = catalog_options[1];
currently_displayed_right_item = catalog_options[2];

//EXTERNAL CODE
//add an event listener to activate on a mouse click
container_for_items.addEventListener('click', handle_click_on_item);


var my_canvas = document.getElementById

var ctx = my_canvas.getContent('2d');
ctx.fillRect (40, 50, 100, 200);
ctx.fillStyle () ;


