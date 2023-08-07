import { LLMChain } from "langchain/chains";
import { ChatOpenAI } from "langchain/chat_models/openai";
import {
  ChatPromptTemplate,
  HumanMessagePromptTemplate,
  SystemMessagePromptTemplate,
} from "langchain/prompts";
import "dotenv/config";

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

const result = await chain.call({
  input_language: "English",
  output_language: "Korean",
  text: "I love programming",
});
console.log(result);
