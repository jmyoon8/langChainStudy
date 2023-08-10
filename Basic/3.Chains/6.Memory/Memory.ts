import { BufferMemory, ChatMessageHistory } from "langchain/memory";
import { AIMessage, HumanMessage } from "langchain/schema";
import { ConversationChain } from "langchain/chains";
import { OpenAI } from "langchain/llms/openai";

const chatHistoryHandler = async () => {
  const history = new ChatMessageHistory();

  await history.addUserMessage("Hi!");

  await history.addAIChatMessage("What's up?");

  const messages = await history.getMessages();

  console.log(messages);
};

const pastHistoryHandler = () => {
  const pastMessages = [
    new HumanMessage("My name's Jonas"),
    new AIMessage("Nice to meet you, Jonas!"),
  ];

  const memory = new BufferMemory({
    chatHistory: new ChatMessageHistory(pastMessages),
  });
  console.log(memory);
  // 서로 다른 두 체인 간에 동일한 기록 또는 메모리 인스턴스를 공유하지 마십시오. 메모리 인스턴스는 단일 대화의 기록을 나타냅니다.
  // 서버리스 환경에 LangChain 앱을 배포하는 경우 다음에 함수가 호출될 때 호스팅 공급자가 메모리 인스턴스를 재설정했을 수 있으므로 메모리 인스턴스를 변수에 저장하지 마십시오.
};

const memoryChainHandler = async () => {
  const model = new OpenAI({});
  const memory = new BufferMemory();
  // This chain is preconfigured with a default prompt
  const chain = new ConversationChain({ llm: model, memory: memory });
  const res1 = await chain.call({ input: "Hi! I'm Jim." });
  console.log({ res1 });
  const res2 = await chain.call({ input: "What's my name?" });
  console.log({ res2 });
};

export { chatHistoryHandler, pastHistoryHandler, memoryChainHandler };
