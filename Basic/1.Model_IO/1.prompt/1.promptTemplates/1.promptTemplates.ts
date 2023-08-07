import {
  ChatPromptTemplate,
  HumanMessagePromptTemplate,
  PromptTemplate,
  SystemMessagePromptTemplate,
} from "langchain/prompts";

import { AIMessage, HumanMessage, SystemMessage } from "langchain/schema";

const formattedPromptHandler = async () => {
  const prompt =
    PromptTemplate.fromTemplate(`You are a naming consultant for new companies.
    What is a good name for a company that makes {product}?`);
  const formattedPrompt = await prompt.format({
    product: "colorful socks",
  });
  console.log(formattedPrompt);
};

const createAPromptTemplateHandler = async () => {
  // An example prompt with no input variables
  const noInputPrompt = new PromptTemplate({
    inputVariables: [],
    template: "Tell me a joke.",
  });
  const formattedNoInputPrompt = await noInputPrompt.format({});

  console.log(formattedNoInputPrompt);
  // "Tell me a joke."

  // An example prompt with one input variable
  const oneInputPrompt = new PromptTemplate({
    inputVariables: ["adjective"],
    template: "Tell me a {adjective} joke.",
  });
  const formattedOneInputPrompt = await oneInputPrompt.format({
    adjective: "funny",
  });

  console.log(formattedOneInputPrompt);
  // "Tell me a funny joke."

  // An example prompt with multiple input variables
  const multipleInputPrompt = new PromptTemplate({
    inputVariables: ["adjective", "content"],
    template: "Tell me a {adjective} joke about {content}.",
  });
  const formattedMultipleInputPrompt = await multipleInputPrompt.format({
    adjective: "funny",
    content: "chickens",
  });

  console.log(formattedMultipleInputPrompt);
  // "Tell me a funny joke about chickens."
};

const chatPromptTemplate = async () => {
  const template =
    "You are a helpful assistant that translates {input_language} to {output_language}.";
  const systemMessagePrompt =
    SystemMessagePromptTemplate.fromTemplate(template);
  const humanTemplate = "{text}";

  const humanMessagePrompt =
    HumanMessagePromptTemplate.fromTemplate(humanTemplate);

  const chatPrompt = ChatPromptTemplate.fromPromptMessages([
    systemMessagePrompt,
    humanMessagePrompt,
  ]);

  // Format the messages
  const formattedChatPrompt = await chatPrompt.formatMessages({
    input_language: "English",
    output_language: "French",
    text: "I love programming.",
  });
  console.log(formattedChatPrompt);
};

export {
  formattedPromptHandler,
  createAPromptTemplateHandler,
  chatPromptTemplate,
};
