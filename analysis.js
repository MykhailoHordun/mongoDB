db.taxis.aggregate([
    {
        $project: {
            length: { $strLenCP: "$comments" },
            comments: 1
        }
    },
    {
        $sort: { length: -1 }
    },
    {
        $limit: 10
    }
  ]).pretty();