import { OpenAIEmbeddings } from "langchain/embeddings/openai";

const model = new OpenAIEmbeddings({ maxRetries: 10 });
