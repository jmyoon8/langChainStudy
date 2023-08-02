import { OpenAI } from "langchain/llms/openai";

const model = new OpenAI({ temperature: 1 });

const timeOut = await model.call(
  "What would be a good company name a company that makes colorful socks?",
  { timeout: 1000 } // 1s timeout
);
// 타임아웃
console.log({ timeOut });
// '\n\nSocktastic Colors' }
