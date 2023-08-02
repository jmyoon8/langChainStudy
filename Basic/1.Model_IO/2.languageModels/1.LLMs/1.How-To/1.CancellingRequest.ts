import { OpenAI } from "langchain/llms/openai";

const model = new OpenAI({ temperature: 1 });
const controller = new AbortController();

// Call `controller.abort()` somewhere to cancel the request.

const cancellingController = async () => {
  const res = await model.call(
    "What would be a good company name a company that makes colorful socks?",
    { signal: controller.signal }
  );

  console.log(controller.signal.aborted);
  console.log(res);
};
/*
'\n\nSocktastic Colors'
*/
export { cancellingController };
