import { createTaggingChain } from "langchain/chains";
import { ChatOpenAI } from "langchain/chat_models/openai";
import type { FunctionParameters } from "langchain/output_parsers";

const tagging = async () => {
  const schema: FunctionParameters = {
    type: "object",
    properties: {
      sentiment: { type: "string" },
      tone: { type: "string" },
      language: { type: "string" },
    },
    required: ["tone"],
  };

  const chatModel = new ChatOpenAI({ temperature: 0 });

  const chain = createTaggingChain(schema, chatModel);

  console.log(
    await chain.run(
      `Estoy increiblemente contento de haberte conocido! Creo que seremos muy buenos amigos!`
    )
  );
};
/*
{ tone: 'positive', language: 'Spanish' }
*/
export { tagging };
