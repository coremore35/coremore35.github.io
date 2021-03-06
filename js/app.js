const endpoint = 'https://favqs.com/api/qotd';

//////////////////////////////////////////////////////
// Handles Random Quote Data

const handleData = data => {
  ////Adding Quote
  const $addQuote = $('<h3>').addClass('currentQuote');
  $addQuote.text(`"${data.quote.body}"`);
  $('.quotes').append($addQuote);

  const $div = $('<div>');
  $('.currentQuote').append($div);
  ////Adding Author
  const $addAuthor = $('<h5>').addClass('currentAuthor');
  $addAuthor.text(`-${data.quote.author}`);
  $div.append($addAuthor);

  ////////////////////////
  ///ADDING IMAGE

  currentTag = data.quote.tags[0];
  let imgEndpoint = `https://api.unsplash.com/search/photos/?client_id=41e8ce17e02f127cb8b8bd1ad955fc22b0d9eae2023afc88ba2cdcdbb565d7d6&query=${currentTag}/landscape`;

  const handleImg = imgData => {
    let i = 1;
    const $addImage = $('<img>').addClass('currentImg');
    $addImage.attr('src', `${imgData.results[0].urls.regular}`);
    const $addPhotographer = $('<h6>').addClass('currentPhotographer');
    $addPhotographer.text(`Photo credit ${imgData.results[0].user.name}`);

    setInterval(() => {
      if (i < 10) {
        $addImage.attr('src', `${imgData.results[i].urls.regular}`);
        $addPhotographer.text(`Photo Credit: ${imgData.results[i].user.name}`);

        i++;
      } else if (i == 10) {
        i = 0;
      }
    }, 5000);

    $('.images').prepend($addImage);
    $('.images').append($addPhotographer);
  };

  $.ajax({
    url: imgEndpoint
  }).then(handleImg);
};

//////////////////////////////////////////
//Search Quote by Keyword

const handleKeywordData = data => {
  ////Adding Quote
  const $addQuote = $('<h3>').addClass('currentQuote');
  $addQuote.text(`"${data.quotes[0].body}"`);
  $('.quotes').append($addQuote);

  const $div = $('<div>');
  $('.currentQuote').append($div);

  ////Adding Author
  const $addAuthor = $('<h5>').addClass('currentAuthor');
  $addAuthor.text(`-${data.quotes[0].author}`);
  $div.append($addAuthor);

  ////////////////////////
  ///ADDING IMAGE

  currentTag = $('.keyword-query').val();
  let imgEndpoint = `https://api.unsplash.com/search/photos/?client_id=41e8ce17e02f127cb8b8bd1ad955fc22b0d9eae2023afc88ba2cdcdbb565d7d6&query=${currentTag}/landscape`;

  const handleImg = imgData => {
    let i = 1;
    const $addImage = $('<img>').addClass('currentImg');
    $addImage.attr('src', `${imgData.results[0].urls.regular}`);
    const $addPhotographer = $('<h6>').addClass('currentPhotographer');
    $addPhotographer.text(`Photo credit ${imgData.results[0].user.name}`);

    setInterval(() => {
      if (i < 10) {
        $addImage.attr('src', `${imgData.results[i].urls.regular}`);
        $addPhotographer.text(`Photo Credit: ${imgData.results[i].user.name}`);

        i++;
      } else if (i == 10) {
        i = 0;
      }
    }, 5000);

    $('.images').prepend($addImage);
    $('.images').append($addPhotographer);
  };

  ///////////////////////
  //RESET FORM FIELD

  $('form').trigger('reset');

  $('.sidebar').fadeOut(1000);
  $('#closed-sidebar').fadeIn(1000);
  $('#logo').animate({ opacity: 0.8 }, 2000);

  $.ajax({
    url: imgEndpoint
  }).then(handleImg);
};

$('form').on('submit', event => {
  event.preventDefault();

  if ($('.keyword-query').val('')) {
    $.ajax({
      url: endpoint
    }).then(handleData);
    $('.currentImg').remove();
    $('.currentPhotographer').remove();
    $('.currentQuote').remove();
    $('.currentAuthor').remove();
  } else {
    let keywordQuery = $('.keyword-query').val();

    $('.currentImg').remove();
    $('.currentPhotographer').remove();
    $('.currentQuote').remove();
    $('.currentAuthor').remove();

    $.ajax({
      url: `https://favqs.com/api/quotes/?filter=${keywordQuery}`,
      headers: {
        Authorization: 'Bearer 6b4ebee16d4c5a07af274a23b80ed12c',
        'Content-Type': 'application/json'
      }
    }).then(handleKeywordData);
  }
});

////////////////////////
//Random Button--On Click event

$('.random').on('click', event => {
  $('.currentImg').remove();
  $('.currentPhotographer').remove();
  $('.currentQuote').remove();
  $('.currentAuthor').remove();

  $.ajax({
    url: endpoint
  }).then(handleData);
});

////////////////
//Automatic Start

$.ajax({
  url: endpoint
}).then(handleData);

///////////////
//TOGGLE SIDEBAR MENU

$('#closed-sidebar').on('click', event => {
  $('#closed-sidebar').fadeOut(500);
  $('.sidebar').fadeIn(1000);

  $('#logo').animate({ opacity: 1 }, 1500);
});

$('#open-sidebar').on('click', event => {
  $('.sidebar').fadeOut(1000);
  $('#closed-sidebar').fadeIn(1000);
  $('#logo').animate({ opacity: 0.8 }, 2000);
  //
});

/////////////
// MORE INFO MODAL

const $openBtn = $('#openModal');
const $modal = $('#modal');
const $closeBtn = $('.closeBtn');

$openBtn.on(
  'click',
  (openingModal = () => {
    $modal.css('display', 'block');
  })
);

$closeBtn.on(
  'click',
  (openingModal = () => {
    $modal.css('display', 'none');
  })
);

//
////////////
/////////
