import {stringToCode} from '../utils';

export default (extra) => {

  let string = '';

  // for each piece of text
  extra.forEach((data) => {

    // get the text out of the element
    let text;
    if (typeof data === 'string') {
      text = data;
    } else if (typeof data === 'object') {
      text = data.text;
    }

    // if text is available
    if (text) {
      text = text.replace(/§k/ig, '');                  // remove crazy format
      text = text.replace(/§l/ig, '');                  // remove bold format
      string += '§' + stringToCode(data.color) + text;  // add the color code to the string
    }

  });

  return string;

};
