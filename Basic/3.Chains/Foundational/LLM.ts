import { OpenAI } from "langchain/llms/openai";
import { PromptTemplate } from "langchain/prompts";
import { LLMChain } from "langchain/chains";
import {
  ChatPromptTemplate,
  HumanMessagePromptTemplate,
  SystemMessagePromptTemplate,
} from "langchain/prompts";
import { ChatOpenAI } from "langchain/chat_models/openai";

const llmFoundational1 = async () => {
  // We can construct an LLMChain from a PromptTemplate and an LLM.
  const model = new OpenAI({ temperature: 0 });
  const prompt = PromptTemplate.fromTemplate(
    "What is a good name for a company that makes {product}?"
  );
  const chainA = new LLMChain({ llm: model, prompt });

  // The result is an object with a `text` property.
  const resA = await chainA.call({ product: "colorful socks" });
  console.log({ resA });
  // { resA: { text: '\n\nSocktastic!' } }

  // Since this LLMChain is a single-input, single-output chain, we can also `run` it.
  // This convenience method takes in a string and returns the value
  // of the output key field in the chain response. For LLMChains, this defaults to "text".
  const resA2 = await chainA.run("colorful socks");
  console.log({ resA2 });
  // { resA2: '\n\nSocktastic!' }
};

const llmFoundational2 = async () => {
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
const llmFoundational3 = async () => {
  // Create a new LLMChain from a PromptTemplate and an LLM in streaming mode.
  const model = new OpenAI({ temperature: 0.9, streaming: true });
  const prompt = PromptTemplate.fromTemplate(
    "What is a good name for a company that makes {product}?"
  );
  const chain = new LLMChain({ llm: model, prompt });

  // Call the chain with the inputs and a callback for the streamed tokens
  const res = await chain.call({ product: "colorful socks" }, [
    {
      handleLLMNewToken(token: string) {
        console.log(token);
        // process.stdout.write(token);
      },
    },
  ]);
  console.log({ res });
  // { res: { text: '\n\nKaleidoscope Socks' } }
};
export { llmFoundational1, llmFoundational2, llmFoundational3 };
