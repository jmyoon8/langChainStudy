import { LLMResult } from "langchain/schema";
import { OpenAI } from "langchain/llms/openai";
import { Serialized } from "langchain/load/serializable";

// We can pass in a list of CallbackHandlers to the LLM constructor to get callbacks for various events.
// ai 실행과정중에 실행시킬 함수들을 등록시킨다.
const model = new OpenAI({
  callbacks: [
    {
      handleLLMStart: async (llm: Serialized, prompts: string[]) => {
        console.log(JSON.stringify(llm, null, 2));
        console.log(JSON.stringify(prompts, null, 2));
      },
      handleLLMEnd: async (output: LLMResult) => {
        console.log(JSON.stringify(output, null, 2));
      },
      handleLLMError: async (err: Error) => {
        console.error(err);
      },
    },
  ],
});

const subscribingHadler = async () => {
  await model.call(
    "What would be a good company name a company that makes colorful socks?"
  );
};
export { subscribingHadler };
// {
//     "name": "openai"
// }
// [
//     "What would be a good company name a company that makes colorful socks?"
// ]
// {
//   "generations": [
//     [
//         {
//             "text": "\n\nSocktastic Splashes.",
//             "generationInfo": {
//                 "finishReason": "stop",
//                 "logprobs": null
//             }
//         }
//     ]
//  ],
//   "llmOutput": {
//     "tokenUsage": {
//         "completionTokens": 9,
//          "promptTokens": 14,
//          "totalTokens": 23
//     }
//   }
// }
