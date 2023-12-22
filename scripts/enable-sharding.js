sh.enableSharding('taxi')
db.rides.createIndex( { 'driver': 'hashed' }, { name: 'driver' } )
sh.shardCollection('taxi.rides', { 'driver' : 'hashed' })