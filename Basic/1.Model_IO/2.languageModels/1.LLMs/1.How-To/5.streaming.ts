import { OpenAI } from "langchain/llms/openai";
import "dotenv/config";
// To enable streaming, we pass in `streaming: true` to the LLM constructor.
// Additionally, we pass in a handler for the `handleLLMNewToken` event.
// 이거안됨..
const model = new OpenAI({
  maxTokens: 25,
  // streaming: true,
});

const streaming = await model.call("Tell me a joke.", {
  callbacks: [
    {
      handleLLMNewToken(token: string) {
        console.log({ token });
      },
    },
  ],
});

export { streaming };

/*
{ token: '\n' }
{ token: '\n' }
{ token: 'Q' }
{ token: ':' }
{ token: ' Why' }
{ token: ' did' }
{ token: ' the' }
{ token: ' chicken' }
{ token: ' cross' }
{ token: ' the' }
{ token: ' playground' }
{ token: '?' }
{ token: '\n' }
{ token: 'A' }
{ token: ':' }
{ token: ' To' }
{ token: ' get' }
{ token: ' to' }
{ token: ' the' }
{ token: ' other' }
{ token: ' slide' }
{ token: '.' }


Q: Why did the chicken cross the playground?
A: To get to the other slide.
*/
