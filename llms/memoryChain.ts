import { OpenAI } from "langchain/llms/openai";
import { BufferMemory } from "langchain/memory";
import { ConversationChain } from "langchain/chains";
import "dotenv/config";

const model = new OpenAI({});
const memory = new BufferMemory();
const chain = new ConversationChain({ llm: model, memory: memory });

const memoryTest = async () => {
  const res1 = await chain.call({ input: "Hi! I'm Jim." });
  console.log(res1);
  const res2 = await chain.call({ input: "What's my name?" });
  console.log(res2);
};

memoryTest();
