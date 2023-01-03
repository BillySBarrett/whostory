migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jv1nbw23ud9aixg")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hqstodcs",
    "name": "name",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jv1nbw23ud9aixg")

  // remove
  collection.schema.removeField("hqstodcs")

  return dao.saveCollection(collection)
})
