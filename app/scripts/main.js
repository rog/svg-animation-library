'use strict';
/* jshint camelcase: false */

var animate_dash = function ( path, time ){
    var length = path.getTotalLength();
    path.style.strokeWidth = '1';
    path.style.transition = path.style.WebkitTransition = 'none';
    path.style.strokeDasharray = length + ' ' + length;
    path.style.strokeDashoffset = length;

    path.getBoundingClientRect();
    path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset ' + time + ' ease-in-out';
    path.style.strokeDashoffset = '0';
    
};

var animate_fill = function ( path, time, color ){
    path.getBoundingClientRect();
    path.style.transition = path.style.WebkitTransition = 'fill ' + time + ' ease-in-out';
    path.style.fill = color;
};

animate_dash( document.querySelector('#logo .super_nombre'), '10s' );

setTimeout( function(){ animate_fill( document.querySelector('#logo .super_nombre'), '.5s', '#ffffff' ); } , 3000 );