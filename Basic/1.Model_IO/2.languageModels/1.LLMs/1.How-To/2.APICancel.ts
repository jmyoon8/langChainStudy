import { OpenAI } from "langchain/llms/openai";
// 오류가 생길경우 10번정도 더 시도할수있도록한다.
const model = new OpenAI({ maxRetries: 10 });
