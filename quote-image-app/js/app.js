console.log('js is working');

const endpoint = 'https://favqs.com/api/qotd';

const handleData = data => {
  console.log(data.quote.body);

  const $addQuote = $('<h3>').addClass('currentQuote');

  $addQuote.text(data.quote.body);
  $('.quotes').append($addQuote);
};

// console.log(endpoint);

$('.random').on('click', event => {
  // event.handleData();

  $('.currentQuote').remove();

  $.ajax({
    url: endpoint
  }).then(handleData);
});

$.ajax({
  url: endpoint
}).then(handleData);
