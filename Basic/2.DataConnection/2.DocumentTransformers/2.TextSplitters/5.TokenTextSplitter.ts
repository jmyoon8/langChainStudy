import { Document } from "langchain/document";
import { TokenTextSplitter } from "langchain/text_splitter";

const tokenTextSplitter = async () => {
  const text = "foo bar baz 123";

  const splitter = new TokenTextSplitter({
    encodingName: "gpt2",
    chunkSize: 10,
    chunkOverlap: 0,
  });

  const output = await splitter.createDocuments([text]);
  console.log(output);
};

export { tokenTextSplitter };
