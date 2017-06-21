const MarketImage = require('./index');
const app = require('express')();

app.get('/', (req, res) => {
  MarketImage.getItemImage(730, 'Spectrum Case Key', (response, err) => {
      if (!err) {
      	res.send(response);
      } else {
      	res.send(err);
      }
  });
});


app.listen(8080, () => {
  console.log('Listening on prot 8080');
});
