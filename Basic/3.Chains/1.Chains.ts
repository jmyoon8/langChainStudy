import { LLMChain } from "langchain/chains";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { OpenAI } from "langchain/llms/openai";
import {
  ChatPromptTemplate,
  HumanMessagePromptTemplate,
  PromptTemplate,
  SystemMessagePromptTemplate,
} from "langchain/prompts";

const chainExample1 = async () => {
  // We can construct an LLMChain from a PromptTemplate and an LLM.
  const model = new OpenAI({ temperature: 0 });
  const prompt = PromptTemplate.fromTemplate(
    "What is a good name for a company that makes {product}?"
  );

  const chain = new LLMChain({ llm: model, prompt });

  // Since this LLMChain is a single-input, single-output chain, we can also `run` it.
  // This convenience method takes in a string and returns the value
  // of the output key field in the chain response. For LLMChains, this defaults to "text".
  const res = await chain.call({
    product: "socks",
  });

  console.log(res);

  // { res: "\n\nSocktastic!" }
};
const chainExample2 = async () => {
  const model = new OpenAI({ temperature: 0 });
  const prompt = PromptTemplate.fromTemplate(
    "What is a good name for a company that makes {product}?"
  );
  const chain = new LLMChain({ llm: model, prompt });

  // Since this LLMChain is a single-input, single-output chain, we can also `run` it.
  // This convenience method takes in a string and returns the value
  // of the output key field in the chain response. For LLMChains, this defaults to "text".
  const res = await chain.run("colorful socks");
  console.log({ res });
};

const chainExample3 = async () => {
  // We can also construct an LLMChain from a ChatPromptTemplate and a chat model.
  const chat = new ChatOpenAI({ temperature: 0 });
  const chatPrompt = ChatPromptTemplate.fromPromptMessages([
    SystemMessagePromptTemplate.fromTemplate(
      "You are a helpful assistant that translates {input_language} to {output_language}."
    ),
    HumanMessagePromptTemplate.fromTemplate("{text}"),
  ]);
  const chainB = new LLMChain({
    prompt: chatPrompt,
    llm: chat,
  });

  const resB = await chainB.call({
    input_language: "English",
    output_language: "French",
    text: "I love programming.",
  });
  console.log({ resB });
  // { resB: { text: "J'adore la programmation." } }
};
export { chainExample1, chainExample2, chainExample3 };
