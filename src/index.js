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
      $("#solar-destruction").text(solarBody[0].peakTime);
      $("#shock-destruction").text(shockBody[0].eventTime);
      $("#mass-destruction").text(massBody[0].startTime);
    });
  })
})
