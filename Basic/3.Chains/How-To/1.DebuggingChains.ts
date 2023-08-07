import { ChatOpenAI } from "langchain/chat_models/openai";
import { ConversationChain } from "langchain/chains";

const debuggingChain = async () => {
  const chat = new ChatOpenAI({});
  // This chain automatically initializes and uses a `BufferMemory` instance
  // as well as a default prompt.
  const chain = new ConversationChain({ llm: chat });
  const res = await chain.call({ input: "What is ChatGPT?" });

  console.log({ res });
};
export { debuggingChain };

/*
[chain/start] [1:chain:ConversationChain] Entering Chain run with input: {
  "input": "What is ChatGPT?",
  "history": ""
}
[llm/start] [1:chain:ConversationChain > 2:llm:ChatOpenAI] Entering LLM run with input: {
  "messages": [
    [
      {
        "lc": 1,
        "type": "constructor",
        "id": [
          "langchain",
          "schema",
          "HumanMessage"
        ],
        "kwargs": {
          "content": "The following is a friendly conversation between a human and an AI. The AI is talkative and provides lots of specific details from its context. If the AI does not know the answer to a question, it truthfully says it does not know.\n\nCurrent conversation:\n\nHuman: What is ChatGPT?\nAI:",
          "additional_kwargs": {}
        }
      }
    ]
  ]
}
[llm/end] [1:chain:ConversationChain > 2:llm:ChatOpenAI] [3.54s] Exiting LLM run with output: {
  "generations": [
    [
      {
        "text": "ChatGPT is a language model developed by OpenAI. It is designed to generate human-like responses in a conversational manner. It is trained on a large amount of text data from the internet and is capable of understanding and generating text across a wide range of topics. ChatGPT uses deep learning techniques, specifically a method called the transformer architecture, to process and generate high-quality text responses. Its purpose is to assist users in various conversational tasks, provide information, and engage in interactive conversations.",
        "message": {
          "lc": 1,
          "type": "constructor",
          "id": [
            "langchain",
            "schema",
            "AIMessage"
          ],
          "kwargs": {
            "content": "ChatGPT is a language model developed by OpenAI. It is designed to generate human-like responses in a conversational manner. It is trained on a large amount of text data from the internet and is capable of understanding and generating text across a wide range of topics. ChatGPT uses deep learning techniques, specifically a method called the transformer architecture, to process and generate high-quality text responses. Its purpose is to assist users in various conversational tasks, provide information, and engage in interactive conversations.",
            "additional_kwargs": {}
          }
        }
      }
    ]
  ],
  "llmOutput": {
    "tokenUsage": {
      "completionTokens": 100,
      "promptTokens": 69,
      "totalTokens": 169
    }
  }
}
[chain/end] [1:chain:ConversationChain] [3.91s] Exiting Chain run with output: {
  "response": "ChatGPT is a language model developed by OpenAI. It is designed to generate human-like responses in a conversational manner. It is trained on a large amount of text data from the internet and is capable of understanding and generating text across a wide range of topics. ChatGPT uses deep learning techniques, specifically a method called the transformer architecture, to process and generate high-quality text responses. Its purpose is to assist users in various conversational tasks, provide information, and engage in interactive conversations."
}
{
  res: {
    response: 'ChatGPT is a language model developed by OpenAI. It is designed to generate human-like responses in a conversational manner. It is trained on a large amount of text data from the internet and is capable of understanding and generating text across a wide range of topics. ChatGPT uses deep learning techniques, specifically a method called the transformer architecture, to process and generate high-quality text responses. Its purpose is to assist users in various conversational tasks, provide information, and engage in interactive conversations.'
  }
}
*/
