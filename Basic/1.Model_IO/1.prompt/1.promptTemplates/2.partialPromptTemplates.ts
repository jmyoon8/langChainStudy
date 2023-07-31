import { PromptTemplate } from "langchain/index";

const prompt1 = new PromptTemplate({
  template: "{foo}{bar}",
  inputVariables: ["foo", "bar"],
});

const paritalPromptHandler1 = async () => {
  // 프론프트를 따로 받을수있다.
  const paritalPrompt1 = await prompt1.partial({
    foo: "foo",
  });

  const formattedPrompt = await paritalPrompt1.format({
    bar: "baz",
  });
  console.log(formattedPrompt);
};

const paritalPromptHandler2 = async () => {
  // 처음 파티얼하게 템플렛을 작성할수있다.
  const prompt2 = new PromptTemplate({
    template: "{foo}{bar}",
    inputVariables: ["bar"],
    partialVariables: {
      foo: "foo",
    },
  });

  const formattedPrompt = await prompt2.format({
    bar: "baz",
  });
  console.log(formattedPrompt);
};

const getCurrentDate = () => {
  return new Date().toISOString();
};
const withFunctionsHandler1 = async () => {
  const prompt = new PromptTemplate({
    template: "Tell me a {adjective} joke about the day {date}",
    inputVariables: ["adjective", "date"],
  });

  const partialPrompt = await prompt.partial({
    date: getCurrentDate(),
  });

  const formattedPrompt = await partialPrompt.format({
    adjective: "funny",
  });
  console.log(formattedPrompt);
};
const withFunctionsHandler2 = async () => {
  const prompt = new PromptTemplate({
    template: "Tell me a {adjective} joke about the day {date}",
    inputVariables: ["adjective"],
    partialVariables: {
      date: getCurrentDate,
    },
  });

  const formattedPrompt = await prompt.format({
    adjective: "funny",
  });
  console.log(formattedPrompt);
};
export {
  paritalPromptHandler1,
  paritalPromptHandler2,
  withFunctionsHandler1,
  withFunctionsHandler2,
};
