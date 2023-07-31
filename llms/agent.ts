import { OpenAI } from "langchain/llms/openai";
import { initializeAgentExecutorWithOptions } from "langchain/agents";
import { SerpAPI } from "langchain/tools";
import { Calculator } from "langchain/tools/calculator";
import "dotenv/config";
import readline from "readline";

const getReadline = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const model = new OpenAI({ temperature: 0 });

const tools = [
  new SerpAPI(process.env.SERPAPI_API_KEY, {
    location: "Austin,Texas,United States",
    hl: "en",
    gl: "us",
  }),
  new Calculator(),
];
const executorHandler = async (name: string) => {
  const executor = await initializeAgentExecutorWithOptions(tools, model, {
    agentType: "zero-shot-react-description",
  });
  const input = `${name}의 여자친구는 누구야?`;
  console.log(`Executing with input "${input}"...`);
  const result = await executor.call({ input });

  console.log(`Got output ${result.output}`);
};

getReadline.question(`What's person name?`, (name: string) => {
  console.log(`Hi ${name}!`);

  executorHandler(name);
});
