/* globals Chart:false, feather:false */

  
$(document).ready(function(){
  $('.pass_show').append('<span class="ptxt">Mostra Password</span>');  
  });
    
  
  $(document).on('click','.pass_show .ptxt', function(){ 
  
  $(this).text($(this).text() == "Mostra Password" ? "Nascondi Password" : "Mostra Password"); 
  
  $(this).prev().attr('type', function(index, attr){return attr == 'password' ? 'text' : 'password'; }); 
  
  });  
  
(function () {
  'use strict'

  feather.replace()

  // Graphs
  var ctx = document.getElementById('myChart')
  // eslint-disable-next-line no-unused-vars
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      datasets: [{
        data: [
          15339,
          21345,
          18483,
          24003,
          23489,
          24092,
          12034
        ],
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#007bff',
        borderWidth: 4,
        pointBackgroundColor: '#007bff'
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: false
          }
        }]
      },
      legend: {
        display: false
      }
    }
  })
}())
