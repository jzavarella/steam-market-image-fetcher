var MarketImage = require('./index');

MarketImage.getItemImage(730, 'Spectrum Case Key', (res, err) => {
  if(!err) {
    console.log(res);
  } else {
    console.log(err);
  }
});
