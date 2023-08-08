import { OpenAI } from "langchain/llms/openai";
import {
  loadQAMapReduceChain,
  loadQAStuffChain,
  RetrievalQAChain,
} from "langchain/chains";
import { HNSWLib } from "langchain/vectorstores/hnswlib";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import * as fs from "fs";
import { PromptTemplate } from "langchain";

const retrievalQAHandler = async () => {
  // Initialize the LLM to use to answer the question.
  const model = new OpenAI({});
  const text = fs.readFileSync(
    "src/document_loaders/example_data/state_of_the_union.txt",
    "utf8"
  );
  const textSplitter = new RecursiveCharacterTextSplitter({ chunkSize: 1000 });
  const docs = await textSplitter.createDocuments([text]);

  // Create a vector store from the documents.
  const vectorStore = await HNSWLib.fromDocuments(docs, new OpenAIEmbeddings());

  // Initialize a retriever wrapper around the vector store
  const vectorStoreRetriever = vectorStore.asRetriever();

  // Create a chain that uses the OpenAI LLM and HNSWLib vector store.
  const chain = RetrievalQAChain.fromLLM(model, vectorStoreRetriever);
  const res = await chain.call({
    query: "What did the president say about Justice Breyer?",
  });
  console.log({ res });
};
/*
{
  res: {
    text: 'The president said that Justice Breyer was an Army veteran, Constitutional scholar,
    and retiring Justice of the United States Supreme Court and thanked him for his service.'
  }
}
*/
const customRetrievalHandler = async () => {
  // Initialize the LLM to use to answer the question.
  const model = new OpenAI({});
  const text = fs.readFileSync(
    "src/document_loaders/example_data/state_of_the_union.txt",
    "utf8"
  );
  const textSplitter = new RecursiveCharacterTextSplitter({ chunkSize: 1000 });
  console.log({ textSplitter });
  const docs = await textSplitter.createDocuments([text]);
  console.log({ docs });
  // Create a vector store from the documents.
  const vectorStore = await HNSWLib.fromDocuments(docs, new OpenAIEmbeddings());

  // Create a chain that uses a map reduce chain and HNSWLib vector store.
  const chain = new RetrievalQAChain({
    combineDocumentsChain: loadQAMapReduceChain(model),
    retriever: vectorStore.asRetriever(),
  });
  const res = await chain.call({
    query: "What did the president say about Justice Breyer?",
  });
  //   console.log({ res });
  /*
{
  res: {
    text: " The president said that Justice Breyer has dedicated his life to serve his country, and thanked him for his service. He also said that Judge Ketanji Brown Jackson will continue Justice Breyer's legacy of excellence, emphasizing the importance of protecting the rights of citizens, especially women, LGBTQ+ Americans, and access to healthcare. He also expressed his commitment to supporting the younger transgender Americans in America and ensuring they are able to reach their full potential, offering a Unity Agenda for the Nation to beat the opioid epidemic and increase funding for prevention, treatment, harm reduction, and recovery."
  }
}
*/
};
const customPrompts = async () => {
  const promptTemplate = `Use the following pieces of context to answer the question at the end. If you don't know the answer, just say that you don't know, don't try to make up an answer.
                          {context}
                          Question: {question}
                          Answer in Italian:`;
  const prompt = PromptTemplate.fromTemplate(promptTemplate);

  // Initialize the LLM to use to answer the question.
  const model = new OpenAI({});
  const text = fs.readFileSync(
    "src/document_loaders/example_data/state_of_the_union.txt",
    "utf8"
  );
  const textSplitter = new RecursiveCharacterTextSplitter({ chunkSize: 1000 });
  const docs = await textSplitter.createDocuments([text]);

  // Create a vector store from the documents.
  const vectorStore = await HNSWLib.fromDocuments(docs, new OpenAIEmbeddings());

  // Create a chain that uses a stuff chain and HNSWLib vector store.

  const chain = new RetrievalQAChain({
    combineDocumentsChain: loadQAStuffChain(model, { prompt }),
    retriever: vectorStore.asRetriever(),
  });
  const res = await chain.call({
    query: "What did the president say about Justice Breyer?",
  });
  console.log({ res });
  /*
{
  res: {
    text: ' Il presidente ha elogiato Justice Breyer per il suo servizio e lo ha ringraziato.'
  }
}
*/
};

const returnSourceDocument = async () => {
  // Initialize the LLM to use to answer the question.
  const model = new OpenAI({});
  const text = fs.readFileSync(
    "src/document_loaders/example_data/state_of_the_union.txt",
    "utf8"
  );
  const textSplitter = new RecursiveCharacterTextSplitter({ chunkSize: 1000 });
  const docs = await textSplitter.createDocuments([text]);

  // Create a vector store from the documents.
  const vectorStore = await HNSWLib.fromDocuments(docs, new OpenAIEmbeddings());

  // Create a chain that uses a map reduce chain and HNSWLib vector store.
  const chain = RetrievalQAChain.fromLLM(model, vectorStore.asRetriever(), {
    returnSourceDocuments: true, // Can also be passed into the constructor
  });
  const res = await chain.call({
    query: "What did the president say about Justice Breyer?",
  });
  console.log(JSON.stringify(res, null, 2));
  /*
{
  "text": " The president thanked Justice Breyer for his service and asked him to stand so he could be seen.",
  "sourceDocuments": [
    {
      "pageContent": "Justice Breyer, thank you for your service. Thank you, thank you, thank you. I mean it. Get up. Stand — let me see you. Thank you.\n\nAnd we all know — no matter what your ideology, we all know one of the most serious constitutional responsibilities a President has is nominating someone to serve on the United States Supreme Court.\n\nAs I did four days ago, I’ve nominated a Circuit Court of Appeals — Ketanji Brown Jackson. One of our nation’s top legal minds who will continue in just Brey- — Justice Breyer’s legacy of excellence. A former top litigator in private practice, a former federal public defender from a family of public-school educators and police officers — she’s a consensus builder.\n\nSince she’s been nominated, she’s received a broad range of support, including the Fraternal Order of Police and former judges appointed by Democrats and Republicans.",
      "metadata": {
        "loc": {
          "lines": {
            "from": 481,
            "to": 487
          }
        }
      }
    },
    {
      "pageContent": "Since she’s been nominated, she’s received a broad range of support, including the Fraternal Order of Police and former judges appointed by Democrats and Republicans.\n\nJudge Ketanji Brown Jackson\nPresident Biden's Unity AgendaLearn More\nSince she’s been nominated, she’s received a broad range of support, including the Fraternal Order of Police and former judges appointed by Democrats and Republicans.\n\nFolks, if we are to advance liberty and justice, we need to secure our border and fix the immigration system.\n\nAnd as you might guess, I think we can do both. At our border, we’ve installed new technology, like cutting-edge scanners, to better detect drug smuggling.\n\nWe’ve set up joint patrols with Mexico and Guatemala to catch more human traffickers.\n\nWe’re putting in place dedicated immigration judges in significant larger number so families fleeing persecution and violence can have their cases — cases heard faster — and those who aren’t legitimately here can be sent back.",
      "metadata": {
        "loc": {
          "lines": {
            "from": 487,
            "to": 499
          }
        }
      }
    },
    {
      "pageContent": "These laws don’t infringe on the Second Amendment; they save lives.\n\nGun Violence\n\n\nThe most fundamental right in America is the right to vote and have it counted. And look, it’s under assault.\n\nIn state after state, new laws have been passed not only to suppress the vote — we’ve been there before — but to subvert the entire election. We can’t let this happen.\n\nTonight, I call on the Senate to pass — pass the Freedom to Vote Act. Pass the John Lewis Act — Voting Rights Act. And while you’re at it, pass the DISCLOSE Act so Americans know who is funding our elections.\n\nLook, tonight, I’d — I’d like to honor someone who has dedicated his life to serve this country: Justice Breyer — an Army veteran, Constitutional scholar, retiring Justice of the United States Supreme Court.\n\nJustice Breyer, thank you for your service. Thank you, thank you, thank you. I mean it. Get up. Stand — let me see you. Thank you.",
      "metadata": {
        "loc": {
          "lines": {
            "from": 468,
            "to": 481
          }
        }
      }
    },
    {
      "pageContent": "If you want to go forward not backwards, we must protect access to healthcare; preserve a woman’s right to choose — and continue to advance maternal healthcare for all Americans.\n\nRoe v. Wade\n\n\nAnd folks, for our LGBTQ+ Americans, let’s finally get the bipartisan Equality Act to my desk. The onslaught of state laws targeting transgender Americans and their families — it’s simply wrong.\n\nAs I said last year, especially to our younger transgender Americans, I’ll always have your back as your President so you can be yourself and reach your God-given potential.\n\nBipartisan Equality Act\n\n\nFolks as I’ve just demonstrated, while it often appears we do not agree and that — we — we do agree on a lot more things than we acknowledge.",
      "metadata": {
        "loc": {
          "lines": {
            "from": 511,
            "to": 523
          }
        }
      }
    }
  ]
}
*/
};
export {
  retrievalQAHandler,
  customRetrievalHandler,
  customPrompts,
  returnSourceDocument,
};
