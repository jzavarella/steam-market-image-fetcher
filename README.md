# Steam Market Item Image Fetcher

This module was created for use in [this app](http://linktoplaystoreeventually) to fetch the image of a steam item.

## Installation

```bash
npm install --save steam-market-item-image-fetcher
```

## Usage

```javascript
const MarketImage = require('steam-market-item-image-fetch');

MarketImage.getItemImage(578080, 'Red Hi-top Trainers', (response, err) => {
    if (!err) {
    	//Do something with the response
    } else {
    	//Do something with the error
    }
});
```

## Methods

### getItemImage(appid, market_hash_name, callback)

All fields are required
* ```appid```: The application id of the steam game the item belongs to (Ex: ```578080``` is the appid for Playerunknown's Battlegrounds)
* ```market_hash_name```: The name of the item you want the image for (Ex: ```Red Hi-top Trainers``` **Case Sensative**)
* ```callback```: The function called after the request to steam is complete
	* ```response```: The image url of the requested item
	* ```err```: If there is an error, this will be passed, null if there is no error

#### Response
```json
{
  "imgUrl": "...the url to the item image..."
}
```
