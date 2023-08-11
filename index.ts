import { getExampleSlngleColumnCsv } from "Basic/2.DataConnection/1.DocumentLoaders/2.How-To/2.Csv";
import { DynamicallySelectingMultipleRetrievers } from "Basic/3.Chains/5.Additional/6.DynamicallySelectingFromMultipleRetrievers";

import {
  chatHistoryHandler,
  memoryChainHandler,
  pastHistoryHandler,
} from "Basic/3.Chains/6.Memory/Memory";
import { Console } from "console";

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
// refineDocumentHenalder();
// promptCustomization();
// mapReduceChain();
// apiChainHandler();
// retrievalQAHandler();
// customRetrievalHandler();
// customPrompts();
// returnSourceDocument();
// conversationalRetrievalQaWithBuiltInMemory();
// conversationalRetievalQaStreaming();
// externallyManagedMemory();
// openAiWithStructuredOutput();
// openAiWithStructuredOutputAndDBRecord();

/**
 * 이거안됨
 // summarization();
 // intermediateSteps();
 */
// await extractionChainHandler();
// queryXKCD();

// translationService();

// customizationApiCall();
// tagging();

// 이거안됨
// analyzeDocument();
// 이거안됨
// selfCiritiqueConstitutional();
// morderationHandler();
// multipleSelectingFromMultiplePrompts();

// DynamicallySelectingMultipleRetrievers();
// chatHistoryHandler();
// pastHistoryHandler();
// memoryChainHandler();
// conversationBufferMemory();

// Now, csvContent contains the CSV representation.

// import fs from "fs";
// import PDFParser from "pdf2json";

// const pdfParser = new PDFParser();

// pdfParser.on("pdfParser_dataError", (errData: any) =>
//   console.error(errData.parserError)
// );
// pdfParser.on("pdfParser_dataReady", (pdfData: any) => {
//   fs.writeFile("./F1040EZ.json", JSON.stringify(pdfData), () => {
//     console.log(pdfData);
//   });
// });

// pdfParser.loadPDF("src/document_loaders/example_data/test.pdf");
getExampleSlngleColumnCsv();
