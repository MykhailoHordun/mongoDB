use taxi

DBQuery.shellBatchSize = 100


// Aggregate pipeline to extract and unwind text_driver_feedback arrays
db.rides.aggregate([
  {
    $match: {
      text_driver_feedback: { $exists: true, $ne: '' }
    }
  },
  {
    $project: {
      _id: 0,
      comments: {
        $map: {
          input: {
            $filter: {
              input: {
                $map: {
                  input: { $split: ["$text_driver_feedback", ', '] },
                  as: "comment",
                  in: { $replaceOne: { input: "$$comment", find: "/[\[\]']+/g", replacement: '' } }
                }
              },
              as: "comment",
              cond: { $ne: ["$$comment", ""] }
            }
          },
          as: "comment",
          in: {
            $replaceAll: {
              input: { $replaceAll: { input: { $replaceAll: { input: { $replaceAll: { input: "$$comment", find: "[", replacement: "" } }, find: "]", replacement: "" } }, find: "\"", replacement: "" } },
              find: "`",
              replacement: ""
            }
          }
        }
      }
    }
  },
  { $unwind: "$comments" },
  {
    $group: {
      _id: "$comments",
      count: { $sum: 1 },
      totalLength: { $sum: { $strLenCP: "$comments" } }
    }
  },
  {
    $project: {
      _id: 1,
      Length: { $divide: ["$totalLength", "$count"] }
    }
  },
  { $sort: { Length: -1 } },
  { $limit: 10 }
]).pretty();