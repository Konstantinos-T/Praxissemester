"use strict";
const createRouter = require("@arangodb/foxx/router");
const router = createRouter();
const joi = require("joi"); //imported from npm
const db = require('@arangodb').db;
const foxxColl = db._collection('myFoxxCollection'); //Connect to existing collection, cause of if statement in setup.
const aql = require('@arangodb').aql;

//Register the router with the Foxx service context
module.context.use(router);

//Basic Hello world route
router.get("/hello-world", (req, res) => {res.send("Hello World!");})
  .response(["text/plain"], "A generic greeting.")
  .summary("Generic greeting")
  .description("Prints a generic greeting.");

//Route with parameter validation
router.get("/hello/:name", (req, res) => { res.send(`Hello ${req.pathParams.name}`);})
  .pathParam("name", joi.string().required(), "Name to greet.") //Validation with joi
  .response(["text/plain"], "A personalized greeting.")
  .summary("Personalized greeting")
  .description("Prints a personalized greeting.");

  //Add entry to mxFoxxCollection
  router.post('/entries', (req, res) => {
      const data = req.body;
      const meta = foxxColl.save(req.body);
      res.send(Object.assign(data, meta));
  })
  .body(joi.object().required(), 'Entry to store in the collection')
  .response(joi.object().required(), 'Entry stored in the collection.')
  .summary('Store an entry')
  .description('Stores an entry in "myFoxxCollection" collection.')

  // Retrieve entry from myFoxxCollection using AQL

  router.get('/entries', (req, res) => {
      const keys = db._query(aql`
      FOR entry IN ${foxxColl}
      RETURN entry._key
      `);
      res.send(keys);
  })
  .response(joi.array().items(
      joi.string().required()
  ).required(), 'List of entry keys.')
  .summary('List entry keys')
  .description('Assembles a list of keys of entries in the collection.')


  /* 

  ****************** Notiz **********************************************
  Überlegung ob das Foxx-Framework für das Projekt geeignet ist.

  Die v8 engine hat ein 1.8GB Limit.
  Das heißt es ist für Queries mit größeren Datensätzen die das Limit
  überschreiten ungeeignet. 
  
  Foxx ist Full-Stack-Javascript aber es ist synchron und funktioniert mit 
  asyncronität nicht.

 ****************** Notiz **********************************************
  */