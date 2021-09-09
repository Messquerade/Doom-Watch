import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import SpaceService from './space.service';

$('document').ready(function() {
  $('button#End-Times').click(function() {
    let promise1 = SpaceService.solarDestruction();
    let promise2 = SpaceService.shockDestruction();
    let promise3 = SpaceService.massDestruction();
    Promise.all([promise1, promise2, promise3]).then((values) => {
      let solarBody = JSON.parse(values[0]);
      let shockBody = JSON.parse(values[1]);
      let massBody = JSON.parse(values[2]);
      let solarTime = solarBody[0].peakTime;
      let shockTime = shockBody[0].eventTime;
      let massTime = massBody[0].startTime;
      solarTime = new Date(solarTime).toLocaleDateString(
        'en-gb',
        {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }
      );
      shockTime = new Date(shockTime).toLocaleDateString(
        'en-gb',
        {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }
      );
      massTime = new Date(massTime).toLocaleDateString(
        'en-gb',
        {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }
      );
      
      $("#solar-destruction").text(solarTime);
      $("#shock-destruction").text(shockTime);
      $("#mass-destruction").text(massTime);
    });
  });

  $("#form-name").submit(function() {
    let inputName = $("#name").val();
    $("#name-display").text(` ${inputName}`);
    $(".name-results").show();
  });
});
