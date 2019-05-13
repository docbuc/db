// Datei: db/mongo/queries/koeln.js
let dom = db.geoname.findOne({
  name: /Köln.*Dom/
});
let res = db.runCommand({
  geoNear: "geoname",
  near: dom.location,
  maxDistance: 1000,
  spherical: true,
  query: {
    feature_code: 'HTL'
  }
})
res.results.forEach(data => {
  print(Math.round(data.dis)+ "m: " + data.obj.name);
})
