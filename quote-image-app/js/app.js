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

  ////Adding Img
  currentTag = data.quote.tags[0];
  let imgEndpoint = `https://api.unsplash.com/search/photos/?client_id=41e8ce17e02f127cb8b8bd1ad955fc22b0d9eae2023afc88ba2cdcdbb565d7d6&query=${currentTag}`;

  console.log(currentTag);
  console.log(imgEndpoint);

  const handleImg = imgData => {
    // console.log(imgData);
    const $addImage = $('<img>').addClass('currentImg');
    $addImage;
  };

  $.ajax({
    url: imgEndpoint
  }).then(handleImg);
};

////////////////////////
//Random Button--On Click event
$('.random').on('click', event => {
  // event.handleData();

  $('.currentQuote').remove();

  $.ajax({
    url: endpoint
  }).then(handleData);
});

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
