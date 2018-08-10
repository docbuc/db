# Datei: mongo-auth/init/adduser.sh
mongo admin --username dockerbuch --password geheim \
	--eval "db.createUser({user: 'geonames', pwd: 'geheim',
      roles: [{role: 'readWrite', db: 'geonames'}]})"
