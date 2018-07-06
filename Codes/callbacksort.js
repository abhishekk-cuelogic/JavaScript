var arr=[
			{
      	num: 7,
        str: 'pineapple'
      },
      {
      	num: 2,
        str: 'apple'
      },   
      {
      	num: 10,
        str: 'banana'
      }
]


arr.sort(function(val1,val2){
		if(val1.str < val2.str){
    	return -1;
    }
    else
    {
    	return 1;
    }
});

console.log(arr);

