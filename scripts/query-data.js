use taxi

DBQuery.shellBatchSize = 100

// find top 10 most longest driver_comment
db.rides.aggregate([
  {
    $match: {
      driver_comment: { $exists: true, $ne: '' }
    }
  },
  {
    $project: {
      _id: 0,
      driver_comment: 1,
      length: { $strLenCP: "$driver_comment" }
    }
  },
  { $sort: { length: -1 } },
  { $limit: 10 }
]).pretty();