import { OpenAIEmbeddings } from "langchain/embeddings/openai";

const model = new OpenAIEmbeddings({ maxConcurrency: 5 });
