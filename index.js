const htmlparser = require('htmlparser');
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
        const handler = new htmlparser.DefaultHandler((error, dom) => {
          if (error) {
            callback(null, error);
          } else {
            const img = dom[2].children[3].children[1].children[13].children[5].children[9].children[3].children[1].children[1].attribs.src;
            const r = {
              imageUrl: img
            };
            callback(r);
          }
        });
        const parser = new htmlparser.Parser(handler);
        parser.parseComplete(response.data);
      })
      .catch((err) => {
        console.log(err);
        callback(null, err);
      });
};
