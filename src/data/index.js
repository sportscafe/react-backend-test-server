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
  },
  getRandomList : function(key){

  	const size = configJson[key].length;
  	const min = 2;
  	const max = size;
  	const op_size = Math.floor(Math.random()*(max-min+1)+min);
  	const data = [];
  	for(let i = 0; i < op_size; i++){
  		data.push(configJson[key][i])
  	}
  	return data;
  }

};

export default data;
