import {
  paritalPromptHandler1,
  paritalPromptHandler2,
  withFunctionsHandler1,
  withFunctionsHandler2,
} from "./Basic/1.Model_IO/1.prompt/1.promptTemplates/2.partialPromptTemplates";
import {
  formattedPromptHandler,
  createAPromptTemplateHandler,
  chatPromptTemplate,
} from "Basic/1.Model_IO/1.prompt/1.promptTemplates/1.promptTemplates";
import { compositionHandler } from "Basic/1.Model_IO/1.prompt/1.promptTemplates/3.composition";
import { exampleSelectHandler } from "Basic/1.Model_IO/1.prompt/2.exampleSelector/1.exampleSelect";
import { selectBySimilarityHander } from "Basic/1.Model_IO/1.prompt/2.exampleSelector/2.selectBySimilarity";
import { llmHandler } from "Basic/1.Model_IO/2.languageModels/1.LLMs/LLMs";
import { cancellingController } from "Basic/1.Model_IO/2.languageModels/1.LLMs/1.How-To/1.CancellingRequest";
import { streaming } from "Basic/1.Model_IO/2.languageModels/1.LLMs/1.How-To/5.streaming";
import { cacheHandler } from "Basic/1.Model_IO/2.languageModels/1.LLMs/1.How-To/4.cache";
import { subscribingHadler } from "Basic/1.Model_IO/2.languageModels/1.LLMs/1.How-To/6.SubscribingToEvents";
import { abortHandler } from "Basic/1.Model_IO/2.languageModels/2.chatModels/How-To/1.CancellingRequest";
import { chatChain } from "Basic/1.Model_IO/2.languageModels/2.chatModels/How-To/2.LLMChainAnd3.Prompts";
import { chatStreaming } from "Basic/1.Model_IO/2.languageModels/2.chatModels/How-To/4.Streaming";

// prompt templates
// createAPromptTemplateHandler();
// formattedPromptHandler();
// chatPromptTemplate();

//partialPromptTemplate
// paritalPromptHandler1();
// paritalPromptHandler2();
// withFunctionsHandler1();
// withFunctionsHandler2();

// compositionHandler();
// exampleSelectHandler();

// selectBySimilarityHander();
// llmHandler();
// cancellingController();
// cacheHandler();
// console.log(streaming, "123123??");
// subscribingHadler();
// console.log(streaming);
// abortHandler();
// console.log(chatChain);
console.log(chatStreaming);
export {};
