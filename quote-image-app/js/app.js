console.log('js is working');

const endpoint = 'https://favqs.com/api/qotd';

// console.log(endpoint);

const handleData = data => {
  console.log(data.quote.body);

  const $addQuote = $('<h3>').addClass('currentQuote');

  $addQuote.text(data.quote.body);
  $('.quotes').append($addQuote);
};

$.ajax({
  url: endpoint
}).then(handleData);
