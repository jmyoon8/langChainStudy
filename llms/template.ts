import { PromptTemplate } from "langchain/prompts";

const template = "Who is {name} boyfriend?";
const prompt = new PromptTemplate({
  template: template,
  inputVariables: ["name"],
});

const test = async () => {
  const res = await prompt.format({
    name: "Olivia Wilde's",
  });
  return res;
};
test().then((res) => {
  console.log(res, "123123");
});
