// Create a JavaScript restaurantManager class with the 

// following properties:
//  restaurantList Array
//  printAllRestaurantNames function - no Arguments
//  filterRestaurantByCity function - Argument = city

class restaurantManager 
{   //array = [elments/ values]
	restaurantList=[{
		id:1,
		restaurantName: 'Bawarchi',
		Address: 'RTC X Roads',
		City: 'Hyderabad'
	}, 
	// [id,Name, Address, City]
	{
		id:2,
		restaurantName: 'Dominos',
		Address: 'Anand Vihar',
		City: 'Delhi'
	},

	{
		id:3,
		restaurantName: 'Hotel SGI',
		Address: 'Vashi',
		City: 'Mumbai Navi'
	},
	{
		id:4,
		restaurantName: 'Shadab',
		Address: 'Viman Nagar',
		City: 'Pune'
	}
		];
	//function for restrant List
	printAllRestaurantNames() {
	return this.restaurantList.map(restaurant => restaurant.restaurantName);
	}
	//funrction for city filtering
	filterRestaurantByCity(city) { 
	return this.restaurantList.filter( restaurant => restaurant.City==city);
	}

}
console.log('Restaurant Names:');
const restaurantObj = new restaurantManager();
const restNames = restaurantObj.printAllRestaurantNames();
console.log(restNames); //O.P= ['Bawarchi', 'Dominos', 'Hotel Grand', 'Shadab' ]

console.log('filter Restaurants by city:');
const fltrCity = restaurantObj.filterRestaurantByCity("Hyderabad");	 //O.P= [{},{}]
console.log(fltrCity);
//==============================================//
		//ORDER DETAILS
const orderData = {
	'Below 500' : 20,
	'500-1000' 	: 29,
	'1000-1500'	: 30,
	'1500-2000' : 44,
	'Above 2000': 76

};
//total orders placed from restaurant
console.log('Total Orders:');
const totalOrders = Object.values(orderData).reduce((prev, next) => prev + next);
//Calculating the total of all key values 
console.log(totalOrders);

//order options
console.log('Order option Proportion:');
const header = Object.keys(orderData);
console.log(header);
//Computing all keys of the Object

// % of each proprtion
console.log('% of each order proprtion:')
let arr = [];
const response = header.map((item, index) => {
	const ordr = {
		'id': index+1,
		'restaurant' : 'Hotel Grand',
		'order' : item,
		'orderPercentage': ((orderData[item] / totalOrders)*100).toFixed(2)
	}
	arr.push(ordr);
});
console.log(arr);

   // //===================extra values of array======================================
// {
// 	id:2,
// 	restaurantName: 'Kritunga',
// 	Address: 'Ameerpet',
// 	City: 'Hyderabad'
// },

// {
// 	id:3,
// 	restaurantName: 'Hotel Grand',
// 	Address: 'Abids',
// 	City: 'Hyderabad'
// },
// {
// 	id:4,
// 	restaurantName: 'Shadab',
// 	Address: 'Charminar',
// 	City: 'Hyderabad'
// }


