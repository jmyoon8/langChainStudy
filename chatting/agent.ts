import { initializeAgentExecutorWithOptions } from "langchain/agents";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { SerpAPI } from "langchain/tools";
import { Calculator } from "langchain/tools/calculator";
import "dotenv/config";

const model = new ChatOpenAI({
  temperature: 0,
  //   modelName: "gpt-4-0613" 이건
});

const tools = [new SerpAPI(), new Calculator()];

const executor = await initializeAgentExecutorWithOptions(tools, model, {
  agentType: "openai-functions",
  verbose: true,
});

const result = await executor.run("What is the temperature in New York?");

console.log(result);
