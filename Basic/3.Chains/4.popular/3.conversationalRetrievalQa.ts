import * as fs from "fs";
import { ConversationalRetrievalQAChain } from "langchain/chains";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { OpenAI } from "langchain/llms/openai";
import { BufferMemory } from "langchain/memory";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { HNSWLib } from "langchain/vectorstores/hnswlib";

const conversationalRetrievalQaWithBuiltInMemory = async () => {
  /* Initialize the LLM to use to answer the question */
  const model = new ChatOpenAI({});
  /* Load in the file we want to do question answering over */
  const text = fs.readFileSync(
    "src/document_loaders/example_data/state_of_the_union.txt",
    "utf8"
  );
  /* Split the text into chunks */
  const textSplitter = new RecursiveCharacterTextSplitter({ chunkSize: 1000 });
  const docs = await textSplitter.createDocuments([text]);
  /* Create the vectorstore */
  const vectorStore = await HNSWLib.fromDocuments(docs, new OpenAIEmbeddings());
  /* Create the chain */
  const chain = ConversationalRetrievalQAChain.fromLLM(
    model,
    vectorStore.asRetriever(),
    {
      memory: new BufferMemory({
        memoryKey: "chat_history", // Must be set to "chat_history"
      }),
    }
  );
  /* Ask it a question */
  const question = "What did the president say about Justice Breyer?";
  const res = await chain.call({ question });
  console.log(res);
  /* Ask it a follow up question */
  const followUpRes = await chain.call({
    question: "Was that nice?",
  });
  console.log(followUpRes);
};

const conversationalRetievalQaStreaming = async () => {
  const text = fs.readFileSync(
    "src/document_loaders/example_data/state_of_the_union.txt",
    "utf8"
  );
  const textSplitter = new RecursiveCharacterTextSplitter({ chunkSize: 1000 });
  const docs = await textSplitter.createDocuments([text]);
  const vectorStore = await HNSWLib.fromDocuments(docs, new OpenAIEmbeddings());
  //   let streamedResponse = "";
  const streamingModel = new ChatOpenAI({
    streaming: true,
    callbacks: [
      {
        handleLLMNewToken(token) {
          console.log(token);
          //   streamedResponse += token;
        },
      },
    ],
  });
  const nonStreamingModel = new ChatOpenAI({});
  const chain = ConversationalRetrievalQAChain.fromLLM(
    streamingModel,
    vectorStore.asRetriever(),
    {
      returnSourceDocuments: true,
      memory: new BufferMemory({
        memoryKey: "chat_history",
        inputKey: "question", // The key for the input to the chain
        outputKey: "text", // The key for the final conversational output of the chain
        returnMessages: true, // If using with a chat model
      }),
      questionGeneratorChainOptions: {
        llm: nonStreamingModel,
      },
    }
  );
  /* Ask it a question */
  const question = "What did the president say about Justice Breyer?";
  const res = await chain.call({ question });
  //   console.log({ streamedResponse });
  //   console.log(res);
  /*
    {
      streamedResponse: 'President Biden thanked Justice Breyer for his service, and honored him as an Army veteran, Constitutional scholar and retiring Justice of the United States Supreme Court.'
    }
  */
};

const externallyManagedMemory = async () => {
  /* Initialize the LLM to use to answer the question */
  const model = new OpenAI({});
  /* Load in the file we want to do question answering over */
  const text = fs.readFileSync(
    "src/document_loaders/example_data/state_of_the_union.txt",
    "utf8"
  );
  /* Split the text into chunks */
  const textSplitter = new RecursiveCharacterTextSplitter({ chunkSize: 1000 });
  const docs = await textSplitter.createDocuments([text]);
  /* Create the vectorstore */
  const vectorStore = await HNSWLib.fromDocuments(docs, new OpenAIEmbeddings());
  const chain = ConversationalRetrievalQAChain.fromLLM(
    model,
    vectorStore.asRetriever()
  );
  /* Ask it a question */
  const question = "What did the president say about Justice Breyer?";
  /* Can be a string or an array of chat messages */
  const res = await chain.call({ question, chat_history: "" });
  console.log(res);
  /* Ask it a follow up question */
  const chatHistory = `${question}\n${res.text}`;
  const followUpRes = await chain.call({
    question: "Was that nice?",
    chat_history: chatHistory,
  });
  console.log(followUpRes);
};

export {
  conversationalRetrievalQaWithBuiltInMemory,
  conversationalRetievalQaStreaming,
  externallyManagedMemory,
};
