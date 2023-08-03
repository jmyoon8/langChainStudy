import { ChatOpenAI } from "langchain/chat_models/openai";
import { LLMChain } from "langchain/chains";
import {
  ChatPromptTemplate,
  SystemMessagePromptTemplate,
  HumanMessagePromptTemplate,
} from "langchain/prompts";

const template =
  "You are a helpful assistant that translates {input_language} to {output_language}.";
const systemMessagePrompt = SystemMessagePromptTemplate.fromTemplate(template);
const humanTemplate = "{text}";
const humanMessagePrompt =
  HumanMessagePromptTemplate.fromTemplate(humanTemplate);

const chatPrompt = ChatPromptTemplate.fromPromptMessages([
  systemMessagePrompt,
  humanMessagePrompt,
]);

const chat = new ChatOpenAI({
  temperature: 0,
});

const chain = new LLMChain({
  llm: chat,
  prompt: chatPrompt,
});

const chatChain = await chain.call({
  input_language: "English",
  output_language: "KOREAN",
  text: "I love programming",
});

export { chatChain };
// { text: "J'adore programmer" }
