import { ChatOpenAI } from "langchain/chat_models/openai";
import { HumanMessage } from "langchain/schema";

const model = new ChatOpenAI({ temperature: 1 });
const controller = new AbortController();

// Call `controller.abort()` somewhere to cancel the request.

const abortHandler = async () => {
  setTimeout(() => {
    console.log("abort");
    controller.abort();
  }, 600);

  const abort = await model.call(
    [
      new HumanMessage(
        "What is a good name for a company that makes colorful socks?"
      ),
    ],
    { signal: controller.signal }
  );
  console.log(abort);
};
export { abortHandler };
/*
'\n\nSocktastic Colors'
*/
