

var H5={
	localStorage:{
		get: function(key){
			var value = window.localStorage[key]
			if(value){
				if(value.substr(0,1)=="@"){
					value = value.substr(1);
					value = JSON.parse(value); 
					console.log(value);
				}
				return value;
			} else{
				console.info("cannot find"+key+"in localStorage!");
				return;
			}
		},
		set: function(key,value){
			console.log(value);
			if (typeof value == "object"){
				value = "@" + JSON.stringify(value);
				console.log(value);
			}
			window.localStorage[key] = value;
			return;
		},
		clear: function(key){
			delete window.localStorage[key];
			return;
		}
	}
}

module.exports = H5;