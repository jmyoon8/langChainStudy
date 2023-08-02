import { OpenAI } from "langchain/llms/openai";
// 동시 요청수를 지정할수있다. 만약 10개의 요청을 보내야한다면 5개를 먼저 보내고 그다음 5개를 보낸다.
const model = new OpenAI({ maxConcurrency: 5 });
