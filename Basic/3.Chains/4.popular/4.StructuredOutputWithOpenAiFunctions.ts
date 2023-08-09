import { z } from "zod";
import { ChatOpenAI } from "langchain/chat_models/openai";
import {
  ChatPromptTemplate,
  SystemMessagePromptTemplate,
  HumanMessagePromptTemplate,
} from "langchain/prompts";
import { createStructuredOutputChainFromZod } from "langchain/chains/openai_functions";

const openAiWithStructuredOutput = async () => {
  const zodSchema = z.object({
    foods: z
      .array(
        z.object({
          name: z.string().describe("The name of the food item"),
          healthy: z.boolean().describe("Whether the food is good for you"),
          color: z.string().optional().describe("The color of the food"),
        })
      )
      .describe("An array of food items mentioned in the text"),
  });

  const prompt = new ChatPromptTemplate({
    promptMessages: [
      SystemMessagePromptTemplate.fromTemplate(
        "List all food items mentioned in the following text."
      ),
      HumanMessagePromptTemplate.fromTemplate("{inputText}"),
    ],
    inputVariables: ["inputText"],
  });

  const llm = new ChatOpenAI({
    modelName: "gpt-3.5-turbo-0613",
    temperature: 0,
  });

  const chain = createStructuredOutputChainFromZod(zodSchema, {
    prompt,
    llm,
  });

  const response = await chain.call({
    inputText: "I like apples, bananas, oxygen, and french fries.",
  });

  console.log(JSON.stringify(response, null, 2));

  /*
  {
    "output": {
      "foods": [
        {
          "name": "apples",
          "healthy": true,
          "color": "red"
        },
        {
          "name": "bananas",
          "healthy": true,
          "color": "yellow"
        },
        {
          "name": "french fries",
          "healthy": false,
          "color": "golden"
        }
      ]
    }
  }
*/
};
const openAiWithStructuredOutputAndDBRecord = async () => {
  const zodSchema = z.object({
    name: z.string().describe("Human name"),
    surname: z.string().describe("Human surname"),
    age: z.number().describe("Human age"),
    birthplace: z.string().describe("Where the human was born"),
    appearance: z.string().describe("Human appearance description"),
    shortBio: z.string().describe("Short bio secription"),
    university: z.string().optional().describe("University name if attended"),
    gender: z.string().describe("Gender of the human"),
    interests: z
      .array(z.string())
      .describe("json array of strings human interests"),
  });

  const prompt = new ChatPromptTemplate({
    promptMessages: [
      SystemMessagePromptTemplate.fromTemplate(
        "Generate details of a hypothetical person."
      ),
      HumanMessagePromptTemplate.fromTemplate(
        "Additional context: {inputText}"
      ),
    ],
    inputVariables: ["inputText"],
  });

  const llm = new ChatOpenAI({
    modelName: "gpt-3.5-turbo-0613",
    temperature: 1,
  });

  const chain = createStructuredOutputChainFromZod(zodSchema, {
    prompt,
    llm,
    outputKey: "person",
  });

  const response = await chain.call({
    inputText:
      "Please generate a diverse group of people, but don't generate anyone who likes video games.",
  });

  console.log(JSON.stringify(response, null, 2));

  /*
      {
        "person": {
          "name": "Sophia",
          "surname": "Martinez",
          "age": 32,
          "birthplace": "Mexico City, Mexico",
          "appearance": "Sophia has long curly brown hair and hazel eyes. She has a warm smile and a contagious laugh.",
          "shortBio": "Sophia is a passionate environmentalist who is dedicated to promoting sustainable living. She believes in the power of individual actions to create a positive impact on the planet.",
          "university": "Stanford University",
          "gender": "Female",
          "interests": [
            "Hiking",
            "Yoga",
            "Cooking",
            "Reading"
          ]
        }
      }
    */
};
export { openAiWithStructuredOutput, openAiWithStructuredOutputAndDBRecord };
