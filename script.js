// there is text design logic
// var typed = new Typed('#element', {
//     strings: ['Forts', 'Caves', 'Temples', 'WATERFALL', 'BRAVE MAVALE'],
//     typeSpeed: 1,
//   });

    var typeData = new Typed("#element", {
      strings: [
        'Forts', 'Caves', 'Temples', 'WATERFALL', 'BRAVE MAVALE'
      ],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1000,
    });


  $('.dropdown').on('hide.bs.dropdown', function () {
    $('.dropdown-menu', this).removeClass('show');
  });


/* video playlist logic */
let videoList = document.querySelectorAll('.video-list-container .list');

videoList.forEach(vid =>{
   vid.onclick = () =>{
      videoList.forEach(remove =>{remove.classList.remove('active')});
      vid.classList.add('active');
      let src = vid.querySelector('.list-video').src;
      let title = vid.querySelector('.list-title').innerHTML;
      document.querySelector('.main-video-container .main-video').src = src;
      document.querySelector('.main-video-container .main-video').play();
      document.querySelector('.main-video-container .main-vid-title').innerHTML = title;
   };
});



