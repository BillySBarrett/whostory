migrate((db) => {
  const collection = new Collection({
    "id": "jv1nbw23ud9aixg",
    "created": "2023-01-03 16:35:22.740Z",
    "updated": "2023-01-03 16:35:22.740Z",
    "name": "stories",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "dllk98iz",
        "name": "story",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("jv1nbw23ud9aixg");

  return dao.deleteCollection(collection);
})
