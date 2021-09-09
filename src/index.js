import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import SpaceService from './space.service';

$('document').ready(function () {
  $('button#End-Times').click(function () {
    $('#destruction-methods').show();
    let promise1 = SpaceService.solarDestruction();
    let promise2 = SpaceService.shockDestruction();
    let promise3 = SpaceService.massDestruction();
  Promise.all([promise1, promise2, promise3])
  .then(response => {
      let solarBody = JSON.parse(response[0]);
      let shockBody = JSON.parse(response[1]);
      let massBody = JSON.parse(response[2]);
      let solarTime = solarBody[0].peakTime;
      let shockTime = shockBody[0].eventTime;
      let massTime = massBody[0].startTime;
      solarTime = new Date(solarTime).toLocaleDateString(
        'en-gb', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }
      );
      shockTime = new Date(shockTime).toLocaleDateString(
        'en-gb', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }
      );
      massTime = new Date(massTime).toLocaleDateString(
        'en-gb', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }
      );

      $("#solar-destruction").text(solarTime);
      $("#shock-destruction").text(shockTime);
      $("#mass-destruction").text(massTime);
      $('#show-errors').text("");
    }) .catch(error => {
      $("#show-errors").text(`There was an error processing your request`);
    });
  });

  $("#solar-button").click(function (){
    $("#solar-flare").show();
    $("#IPS").hide();
    $("#CME").hide();
  })

  $("#IPS-button").click(function(){
    $("#IPS").show();
    $("#solar-flare").hide();
    $("#CME").hide();
  })

  $("#CME-button").click(function(){
    $("#CME").show();
    $("#solar-flare").hide();
    $("#IPS").hide();
  })

  $("#form-name").submit(function (event) {
    event.preventDefault();
    let inputName = $("#name").val();
    $("#name-display").text(` ${inputName}`);
    $(".name-results").show();
    $("#form-name").hide();
  });
})