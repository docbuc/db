// Datei: mongo/init/02_createindex.js
print("Erzeuge GeoJson Punkte...");
let i = 0;
db.geoname.find().forEach(data => {
  i++;
  db.geoname.update( { _id: data._id }, {
    $set: { location: { type: "Point",
      coordinates: [parseFloat(data.longitude), parseFloat(data.latitude)] } }
  })
});
print(i + " Punkte erzeugt, erstelle 2d-Index...")
db.geoname.createIndex( { location: "2dsphere" } );
