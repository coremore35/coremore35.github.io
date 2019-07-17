console.log('js is working');

const endpoint = 'https://favqs.com/api/qotd';

///////////////////////
// Handles Quote Data

const handleData = data => {
  console.log(data);
  console.log(data.quote.body);

  ////Adding Quote
  const $addQuote = $('<h3>').addClass('currentQuote');
  $addQuote.text(`"${data.quote.body}"`);
  $('.quotes').append($addQuote);

  ////Adding Author
  const $addAuthor = $('<h5>').addClass('currentAuthor');
  $addAuthor.text(`--${data.quote.author}`);
  $('.quotes').append($addAuthor);

  ////////////////////////
  ///ADDING IMAGE

  currentTag = data.quote.tags[0];
  let imgEndpoint = `https://api.unsplash.com/search/photos/?client_id=41e8ce17e02f127cb8b8bd1ad955fc22b0d9eae2023afc88ba2cdcdbb565d7d6&query=${currentTag}`;

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
//Search quote by Keyword

$('.keyword-query').on('submit', event => {
  $.ajax({
    url: endpoint
  }).then(handleData);
});

////////////////////////
//Random Button--On Click event

$('.random').on('click', event => {
  // event.handleData();

  $('.currentQuote').remove();
  $('.currentAuthor').remove();
  $('.currentImg').remove();

  $.ajax({
    url: endpoint
  }).then(handleData);
});

///////////////
//
////////////
/////////

///////
//GRAVEYARD
///
//
//
// $.ajax({
//   url: endpoint
// }).then(handleData);

// const imgEndpoint =
//   'https://api.unsplash.com/photos/?client_id=41e8ce17e02f127cb8b8bd1ad955fc22b0d9eae2023afc88ba2cdcdbb565d7d6&query=happiness';
// console.log(imgEndpoint);

// $.ajax({
//   url: imgEndpoint
//   //   headers: {
//   //     Authorization:
//   //       'Client-ID 41e8ce17e02f127cb8b8bd1ad955fc22b0d9eae2023afc88ba2cdcdbb565d7d6'
//   //   }
// }).then(data => console.log(data));

// $.ajax({
//     url: imgEndpoint
// }).then(imgData) => {
//     console.log(imgData)
// }
