console.log('js is working');

const endpoint = 'https://favqs.com/api/qotd';

///////////////////////
// HANDLES RANDOM QUOTE DATA

const handleRandomData = data => {
  //   console.log(data);
  //   console.log(data.quote.body);

  /////Adding Quote
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
  ///Adding Image

  currentTag = data.quote.tags[0];
  let imgEndpoint = `https://api.unsplash.com/search/photos/?client_id=41e8ce17e02f127cb8b8bd1ad955fc22b0d9eae2023afc88ba2cdcdbb565d7d6&query=${currentTag}/landscape`;

  //   console.log(`Current Tag: ${currentTag}`);
  //   console.log(`Current Image Endpoint: ${imgEndpoint}`);

  const handleImg = imgData => {
    // console.log(imgData);
    // console.log(imgData.results[0].urls.full);

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

////////////////////////
//SEARCH QUOTE BY KEYWORD

$('form').on('submit', event => {
  event.preventDefault();
  console.log('submit clicked');
  $.ajax({
    url: 'https://favqs.com/api/activities/?type=tag&filter=funny',
    headers: {
      Authorization: 'Bearer 6b4ebee16d4c5a07af274a23b80ed12c',
      // 'X-CSRF-TOKEN':'xxxxxxxxxxxxxxxxxxxx',
      'Content-Type': 'application/json'
    }
    // ,
    // method: 'POST',
    // dataType: 'json',
    // // data: YourData,
    // success: function(data) {
    //   console.log('succes: ' + data);
    // }
  }).then(handleData);
});

////////////////////////
//RANDOM QUOTE BUTTON ON-CLICK

$('.random').on('click', event => {
  // event.handleRandomData();

  $('.currentImg').remove();
  $('.currentPhotographer').remove();
  $('.currentQuote').remove();
  $('.currentAuthor').remove();

  $.ajax({
    url: endpoint
  }).then(handleRandomData);
});

////////////////
//AUTOMATIC START

// $.ajax({
//   url: endpoint
// }).then(Random);
///////////////
//
////////////
/////////
