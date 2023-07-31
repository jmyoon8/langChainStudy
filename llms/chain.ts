import { OpenAI } from " langchain/llms/openai";
import { PromptTemplate } from " langchain/prompts";
import { LLMChain } from " langchain/chains";
import "dotenv/config";

const model = new OpenAI({ temperature: 0 });
const template = "{name}'s boyfriend? is harry styles?";
const prompt = new PromptTemplate({
  template: template,
  inputVariables: ["name"],
});

const chain = new LLMChain({ llm: model, prompt: prompt });

const test = async () => {
  const res = await chain.call({ name: "Olivia Wilde" });
  return res;
};

test()
  .then((res) => {
    console.log(res.text);
  })
  .catch((err) => {
    console.log(err);
  });
