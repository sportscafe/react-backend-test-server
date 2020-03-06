import flatten from 'flat';
import commonJson from './responses.json';


let configJson = commonJson;

let data = {
  get: function (key) {
    return configJson[key];
  },
  set: function (key, value) {
    configJson[key] = value;
  },
  getRandom : function (key) {
  	return configJson[key][Math.floor(Math.random()*(configJson[key]).length)];
  }

};

export default data;
