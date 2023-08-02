import { OpenAI } from "langchain/llms/openai";

const llm = new OpenAI({});

const OpenAIJoke = await llm.call("Tell me a joke");

const llmResult = await llm.generate(
  ["Tell me a joke", "Tell me a poem"],
  ["Tell me a joke", "Tell me a poem"]
);

export const run = async () => {
  const model = new OpenAI({
    // customize openai model that's used, `text-davinci-003` is the default
    modelName: "text-ada-001",

    // `max_tokens` supports a magic -1 param where the max token length for the specified modelName
    //  is calculated and included in the request to OpenAI as the `max_tokens` param
    maxTokens: 0,

    // use `modelKwargs` to pass params directly to the openai call
    // note that they use snake_case instead of camelCase
    modelKwargs: {
      user: "me",
    },

    // for additional logging for debugging purposes
    verbose: true,
  });

  const resA = await model.call(
    "What would be a good company name a company that makes colorful socks?"
  );
  console.log({ resA });
  // { resA: '\n\nSocktastic Colors' }
};

const llmHandler = async () => {
  console.log(OpenAIJoke);
  console.log(llmResult.generations);
  console.log(llmResult.llmOutput);
  await run();
};

export { llmHandler };
