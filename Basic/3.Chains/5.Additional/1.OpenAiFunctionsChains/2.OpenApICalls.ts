import { createOpenAPIChain } from "langchain/chains";
import { ChatOpenAI } from "langchain/chat_models/openai";

const queryXKCD = async () => {
  const chain = await createOpenAPIChain(
    "https://gist.githubusercontent.com/roaldnefs/053e505b2b7a807290908fe9aa3e1f00/raw/0a212622ebfef501163f91e23803552411ed00e4/openapi.yaml"
  );
  const result = await chain.run(`What's today's comic?`);

  console.log(JSON.stringify(result, null, 2));
};
/*
{
    "month": "6",
    "num": 2795,
    "link": "",
    "year": "2023",
    "news": "",
    "safe_title": "Glass-Topped Table",
    "transcript": "",
    "alt": "You can pour a drink into it while hosting a party, although it's a real pain to fit in the dishwasher afterward.",
    "img": "https://imgs.xkcd.com/comics/glass_topped_table.png",
    "title": "Glass-Topped Table",
    "day": "28"
}
*/

const translationService = async () => {
  const chain = await createOpenAPIChain("https://api.speak.com/openapi.yaml");
  const result = await chain.run(`How would you say no thanks in Russian?`);
  console.log(JSON.stringify(result, null, 2));
};
/*
{
    "explanation": "<translation language=\\"Russian\\" context=\\"\\">\\nНет, спасибо.\\n</translation>\\n\\n<alternatives context=\\"\\">\\n1. \\"Нет, не надо\\" *(Neutral/Formal - a polite way to decline something)*\\n2. \\"Ни в коем случае\\" *(Strongly informal - used when you want to emphasize that you absolutely do not want something)*\\n3. \\"Нет, благодарю\\" *(Slightly more formal - a polite way to decline something while expressing gratitude)*\\n</alternatives>\\n\\n<example-convo language=\\"Russian\\">\\n<context>Mike offers Anna some cake, but she doesn't want any.</context>\\n* Mike: \\"Анна, хочешь попробовать мой волшебный торт? Он сделан с любовью и волшебством!\\"\\n* Anna: \\"Спасибо, Майк, но я на диете. Нет, благодарю.\\"\\n* Mike: \\"Ну ладно, больше для меня!\\"\\n</example-convo>\\n\\n*[Report an issue or leave feedback](https://speak.com/chatgpt?rid=bxw1xq87kdua9q5pefkj73ov})*",
    "extra_response_instructions": "Use all information in the API response and fully render all Markdown.\\nAlways end your response with a link to report an issue or leave feedback on the plugin."
}
*/
const customizationApiCall = async () => {
  const chatModel = new ChatOpenAI({ temperature: 0 });

  const chain = await createOpenAPIChain("https://api.speak.com/openapi.yaml", {
    llm: chatModel,
    headers: {
      authorization: "Bearer some_token",
    },
  });
  const result = await chain.run(`How would you say no thanks in Russian?`);
  console.log(JSON.stringify(result, null, 2));

  /*
  {
    "explanation": "<translation language=\\"Russian\\" context=\\"\\">\\nНет, спасибо.\\n</translation>\\n\\n<alternatives context=\\"\\">\\n1. \\"Нет, не надо\\" *(Neutral/Formal - a polite way to decline something)*\\n2. \\"Ни в коем случае\\" *(Strongly informal - used when you want to emphasize that you absolutely do not want something)*\\n3. \\"Нет, благодарю\\" *(Slightly more formal - a polite way to decline something while expressing gratitude)*\\n</alternatives>\\n\\n<example-convo language=\\"Russian\\">\\n<context>Mike offers Anna some cake, but she doesn't want any.</context>\\n* Mike: \\"Анна, хочешь попробовать мой волшебный торт? Он сделан с любовью и волшебством!\\"\\n* Anna: \\"Спасибо, Майк, но я на диете. Нет, благодарю.\\"\\n* Mike: \\"Ну ладно, больше для меня!\\"\\n</example-convo>\\n\\n*[Report an issue or leave feedback](https://speak.com/chatgpt?rid=bxw1xq87kdua9q5pefkj73ov})*",
    "extra_response_instructions": "Use all information in the API response and fully render all Markdown.\\nAlways end your response with a link to report an issue or leave feedback on the plugin."
  }
*/
};
export { queryXKCD, translationService, customizationApiCall };
