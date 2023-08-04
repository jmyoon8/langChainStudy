import { Document } from "langchain/document";

const createDoc = new Document({
  pageContent: "foo",
  metadata: { source: "1" },
});

export { createDoc };
