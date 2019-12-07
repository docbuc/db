// Datei: db/mongo/queries/koeln.js
let dom = db.geoname.findOne({name: /Köln.*Dom/});
let res = db.geoname.aggregate([
  {
    $geoNear: {
       near: dom.location,
       key: "location",
       distanceField: "dist.calculated",
       maxDistance: 1000,
       query: { feature_code: 'HTL' },
       spherical: true
    }
  },
  { $limit: 10 },
  { $sort : { "dist.calculated" : -1, name: 1} }
])

res._batch.forEach(data => {
  print(Math.round(data.dist.calculated)+ "m: " + data.name);
})
