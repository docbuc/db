// Datei: db/mongo-auth/init/adduser.js
db.createUser({user: 'geonames', pwd: 'geheim',
      roles: [{role: 'readWrite', db: 'geonames'}]});
