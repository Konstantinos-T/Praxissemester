'use strict';

const db = require('@arangodb').db;
const collectionName = 'myFoxxCollection';

//Create collection if it doesn't exist
if (!db._collection(collectionName)) {
    db._createDocumentCollection(collectionName);
}

