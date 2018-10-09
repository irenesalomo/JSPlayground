var kvArray = [{key: 1, value: 10}, 
               {key: 2, value: 20}, 
               {key: 3, value: 30}];

var reformattedArray = kvArray.map(function(kvObject){
    var rObj = {};
    rObj[kvObject.key] = kvObject.value;
    return rObj;
});

