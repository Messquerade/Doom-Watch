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
      console.log(values);
    });
  })
})
