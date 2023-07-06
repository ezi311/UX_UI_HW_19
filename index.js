  console.log("index.js file loaded correcty");


  $(".grid-item1").hover(function(){
    $(this).css("background-color", "#F2C181");
  }, function(){
  $(this).css("background-color", "#F9EEDD");
  });

  $(".caseStudyImg1").hover(function(){
    $( this).fadeOut( 0 );
    $( this ).fadeIn( 1000 )
  });

  $(".caseStudyImg2").hover(function(){
    $( this).fadeOut( 0 );
    $( this ).fadeIn( 1000 )
  });

  $(".caseStudyImg3").hover(function(){
    $( this).fadeOut( 0 );
    $( this ).fadeIn( 1000 )
  });
