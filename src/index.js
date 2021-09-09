import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import SpaceService from './space.service';

$('document').ready(function(){
  $('End-Times').click(function() {
    let promise1 = SpaceService.solarDestruction();
    let promise2 = SpaceService
  })
})
