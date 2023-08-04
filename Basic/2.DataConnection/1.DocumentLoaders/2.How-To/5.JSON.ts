import { JSONLoader } from "langchain/document_loaders/fs/json";

const jsonLoaderHandler = async () => {
  const loader = new JSONLoader(
    "src/document_loaders/example_data/example.json"
  );

  const docs = await loader.load();
  console.log(docs);
};

const jsonPointLoaderHandler = async () => {
  const loader = new JSONLoader(
    "src/document_loaders/example_data/exampleJsonPointer.json",
    ["/from", "/surname"]
  );

  const docs = await loader.load();
  console.log(docs);
};

export { jsonLoaderHandler, jsonPointLoaderHandler };
