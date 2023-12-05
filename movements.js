const taxis = db.taxis.find({}, { _id: 1, current_location: 1 }).toArray()
for (const taxi of taxis) {
  for (let i = 0; i < 100; i++) {
    
    const movement = {
      taxi_id: taxi._id,
      location: {
        type: "Point",

        coordinates: [taxi.current_location.coordinates[0] - (99 - i) * 0.001, taxi.current_location.coordinates[1] - (99 - i) * 0.001]
      },
      timestamp: new Date()
    };
    db.taxiMovements.insertOne(movement);
  }
}

