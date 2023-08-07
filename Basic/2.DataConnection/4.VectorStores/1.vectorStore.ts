import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { TextLoader } from "langchain/document_loaders/fs/text";

const createNewIndexFromTexts = async () => {
  const vectorStore = await MemoryVectorStore.fromTexts(
    ["Hello world", "Bye bye", "hello nice world"],
    [{ id: 2 }, { id: 1 }, { id: 3 }],
    new OpenAIEmbeddings()
  );
  // 입력한 값과 비슷한값들을 찾아준다.
  const resultOne = await vectorStore.similaritySearch("hello world", 1);
  console.log(resultOne[0].pageContent);
};

const createNewIndexFromLoader = async () => {
  const loader = new TextLoader(
    "src/document_loaders/example_data/example.txt"
  );
  const docs = await loader.load();

  // Load the docs into the vector store
  const vectorStore = await MemoryVectorStore.fromDocuments(
    docs,
    new OpenAIEmbeddings()
  );
  // Search for the most similar document
  console.log("gun");
  const resultOne = await vectorStore.similaritySearch("gun", 1);
  console.log(resultOne);
};
export { createNewIndexFromTexts, createNewIndexFromLoader };
