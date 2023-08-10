import { OpenAI } from "langchain/llms/openai";
import { BufferMemory, ChatMessageHistory } from "langchain/memory";
import { ConversationChain } from "langchain/chains";
import { AIMessage, HumanMessage } from "langchain/schema";

const conversationBufferMemory = async () => {
  const model = new OpenAI({});
  const memory = new BufferMemory();
  const chain = new ConversationChain({ llm: model, memory: memory });
  const res1 = await chain.call({ input: "Hi! I'm Jim." });
  console.log({ res1 });
  const res2 = await chain.call({ input: "What's my name?" });
  console.log({ res2 });
  const pastMessage = [
    new HumanMessage(res1.response),
    new AIMessage(res2.response),
  ];
  const conversationMemory = new BufferMemory({
    chatHistory: new ChatMessageHistory(pastMessage),
  });
  console.log(conversationMemory);
};
export { conversationBufferMemory };
