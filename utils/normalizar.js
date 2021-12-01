const { normalize, schema } = require("normalizr");

const schemaAuthor = new schema.Entity("author", {}, { idAttribute: "email" });

const schemaMessage = new schema.Entity("message", {
  author: schemaAuthor,
});

const schemaMessages = new schema.Entity("messages", {
  mesagges: [schemaMessage],
});

const normalizeMessages = (messages) => normalize(messages, schemaMessages);
module.exports = {
  normalizeMessages,
};
