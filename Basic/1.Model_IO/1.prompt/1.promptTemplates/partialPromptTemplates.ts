import { PromptTemplate } from "langchain/prompts";

const prompt =
  PromptTemplate.fromTemplate(`You are a naming consultant for new companies.
What is a good name for a company that makes {product}?`);
const formattedPromptHandler = async () => {
  const formattedPrompt = await prompt.format({
    product: "colorful socks",
  });

  console.log(formattedPrompt);
};

export { formattedPromptHandler };
/*
  You are a naming consultant for new companies.
  What is a good name for a company that makes colorful socks?
*/
