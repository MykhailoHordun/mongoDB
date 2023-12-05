// Retrieve coordinates from the "addresses" collection
// for (const address of addresses) {
const pickup_address = db.customers.find({}, { _id: 1, current_location: 1 }).toArray();
const taxis = db.taxis.find({}, { _id: 1, completed: 1 }).toArray()
for (const taxi of taxis) {
    var randon_address = addresses[Math.random()*addresses.length>>0]
    var random_customer = pickup_address[Math.random()*pickup_address.length>>0]
    const order = {
      taxi_id: taxi._id,
      customer_id: random_customer._id,
      pickup_location: random_customer.current_location,
      dropoff_location: {
        type: "Point",
        coordinates: [randon_address.Longitude, randon_address.Latitude]  // Use random coordinates for dropoff
      },
      order_time: new Date(),
      completed: taxi.completed,
    };
    db.taxiOrders.insertOne(order);
}

// Test Taxi Orders
db.taxiOrders.find().limit(5).pretty();
