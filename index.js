// const htmlparser = require('htmlparser');
const DomParser = require('react-native-html-parser').DOMParser;
const axios = require('axios');

/**
 * Retrieve image for an item.
 *
 * @param {number} appid - Steam application id
 * @param {String} name - Item name, market hashed
 * @param {Function} callback - Callback function(err, data)
 */
exports.getItemImage = (appid, name, callback) => {
    if (typeof callback !== 'function') {
        throw new Error('No callback supplied');
    }

    axios.get(`http://steamcommunity.com/market/listings/${appid}/${name}`)
      .then((response) => {
        var doc = new DomParser().parseFromString(response.data, 'text/html');
        var d = doc.getElementById('mypurchase_0_image');
        callback({
          imgUrl: d.attributes[1].nodeValue
        });
      })
      .catch(err => callback(null, err));
};
