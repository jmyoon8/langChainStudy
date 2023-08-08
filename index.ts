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
import {
  parsingJsonDataHandler,
  zodDataHandler,
} from "Basic/1.Model_IO/3.outPutParsers/1.outPutParsers";
import { zodDataWithLLMChainsHandler } from "Basic/1.Model_IO/3.outPutParsers/1.How-To/1.UseWithLLMChains";
import { getCombingOutPutParseData } from "Basic/1.Model_IO/3.outPutParsers/2.CombiningOutputParsers";
import { getListParser } from "Basic/1.Model_IO/3.outPutParsers/3.ListParser";
import { getCutomListParser } from "Basic/1.Model_IO/3.outPutParsers/4.CustomListParser";
import {
  StructuredOutputParserWithJson,
  StructuredOutputParserWithZod,
} from "Basic/1.Model_IO/3.outPutParsers/6.StructuredOutputParser";
import { getExampleDocs } from "Basic/2.DataConnection/1.DocumentLoaders/1.DocumentLoader";

import { noSplitPdfLoaderHandler } from "Basic/2.DataConnection/1.DocumentLoaders/2.How-To/6.PDF";
import { createDoc } from "Basic/2.DataConnection/1.DocumentLoaders/2.How-To/1.CreatingDocuments";
import {
  getExampleCsvHandler,
  getExampleSlngleColumnCsv,
} from "Basic/2.DataConnection/1.DocumentLoaders/2.How-To/2.Csv";
import { fileDerectoryData } from "Basic/2.DataConnection/1.DocumentLoaders/2.How-To/4.FileDirectory";
import {
  jsonLoaderHandler,
  jsonPointLoaderHandler,
} from "Basic/2.DataConnection/1.DocumentLoaders/2.How-To/5.JSON";
import { textSpliterOutput } from "Basic/2.DataConnection/2.DocumentTransformers/2.TextSplitters/1.SplitByCharater";
import { codeAndMarkupHandler } from "Basic/2.DataConnection/2.DocumentTransformers/2.TextSplitters/2.SplitCodeAndMarkup";
import { contextChunkHeadersHandler } from "Basic/2.DataConnection/2.DocumentTransformers/2.TextSplitters/3.ContextChunkheaders";
import {
  recursiveTextSplitHandler,
  recursiveTextSplitWithSplitDocumentHandler,
} from "Basic/2.DataConnection/2.DocumentTransformers/2.TextSplitters/4.RecursivelySplitByCharacter";
import { tokenTextSplitter } from "Basic/2.DataConnection/2.DocumentTransformers/2.TextSplitters/5.TokenTextSplitter";
import {
  documentEmbeddings,
  getEmbeddings,
} from "Basic/2.DataConnection/3.TextEmbeddingModels/1.TextEmbeddingModels";
import {
  createNewIndexFromLoader,
  createNewIndexFromTexts,
} from "Basic/2.DataConnection/4.VectorStores/1.vectorStore";
import {
  chainExample1,
  chainExample2,
  chainExample3,
} from "Basic/3.Chains/1.Chains";
import { debuggingChain } from "Basic/3.Chains/1.How-To/1.DebuggingChains";
import {
  llmFoundational1,
  llmFoundational2,
  llmFoundational3,
  llmFoundational4,
} from "Basic/3.Chains/2.Foundational/1.LLM";
import { chainMemoryHandler } from "Basic/3.Chains/1.How-To/2.AddingMemory";
import {
  Sequential,
  SequentialChainHandler,
} from "Basic/3.Chains/2.Foundational/2.Sequential";
import { documentChainHandler } from "Basic/3.Chains/3.Documents/1.document";
import { stuffDocumentHandler } from "Basic/3.Chains/3.Documents/2.Stuff";
import { refineDocumentHenalder } from "Basic/3.Chains/3.Documents/3.refine";
// import { htmlToText } from "Basic/2.DataConnection/2.DocumentTransformers/1.Integrations/1.htmlToText";

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
// console.log(chatStreaming);
// parsingJsonDataHandler();
// zodDataHandler();
// zodDataWithLLMChainsHandler();
// console.log(getCombingOutPutParseData);
// getListParser();
// console.log(getCutomListParser);
// StructuredOutputParserWithJson();
// StructuredOutputParserWithZod();
// console.log(getExampleDocs);
// console.log(createDoc);
// getExampleCsvHandler();
// getExampleSlngleColumnCsv();
// console.log(fileDerectoryData);
// jsonLoaderHandler();
// jsonPointLoaderHandler();
// noSplitPdfLoaderHandler;
// pdfJsHandler();

// ***이건안됨***
// htmlToText();
// ***********
// console.log(textSpliterOutput);
// codeAndMarkupHandler();
// contextChunkHeadersHandler();
// recursiveTextSplitHandler();
// recursiveTextSplitWithSplitDocumentHandler();
// tokenTextSplitter();
// console.log(getEmbeddings, documentEmbeddings);
// createNewIndexFromTexts();
// createNewIndexFromLoader();
// chainExample1();
// chainExample2();
// chainExample3();
// debuggingChain();
// chainMemoryHandler();
// llmFoundational1();
// llmFoundational2();
// llmFoundational3();
// llmFoundational4();
// Sequential();
// SequentialChainHandler();
// documentChainHandler();
// stuffDocumentHandler();
refineDocumentHenalder();
