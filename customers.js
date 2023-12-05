const addresses = db.addresses.find({}, { _id: 0, Latitude: 1, Longitude: 1 }).toArray();
for (let i = 0; i < 500; i++) {
  var random_address = addresses[Math.random()*addresses.length>>0]
const customer = {
    current_location: {
      type: "Point",
      coordinates: [random_address.Latitude, random_address.Longitude]  // Use random coordinates for dropoff
    },
  };
  db.customers.insertOne(customer);
}