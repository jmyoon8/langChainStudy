import { TextLoader } from "langchain/document_loaders/fs/text";

const loader = new TextLoader("src/document_loaders/example_data/example.txt");
const getExampleDocs = await loader.load();

export { getExampleDocs };
