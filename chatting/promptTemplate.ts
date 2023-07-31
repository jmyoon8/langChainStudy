import { ChatOpenAI } from "langchain/chat_models/openai";
import { HumanMessage, SystemMessage } from "langchain/schema";
import "dotenv/config";

const chat = new ChatOpenAI({ temperature: 0 });

const chatHandlerA = async () => {
  const responseA = await chat.call([
    new HumanMessage(
      "Translate this sentence from English to French. I love programming."
    ),
  ]);

  console.log({ responseA: responseA.text });
};

// chatHandlerA();

const chatHandlerB = async () => {
  const responseB = await chat.call([
    new SystemMessage(
      "You are a helpful assistant that translates English to French.euhdidhodjo"
    ),
    new HumanMessage("Translate: I love programming."),
  ]);

  console.log({ responseB: responseB.text });
};

// chatHandlerB();

const chatHandlerC = async () => {
  const responseC = await chat.generate([
    [
      new SystemMessage(
        "You are a helpful assistant that translates English to French."
      ),
      new HumanMessage(
        "Translate this sentence from English to French. I love programming."
      ),
    ],
    [
      new SystemMessage(
        "You are a helpful assistant that translates English to French."
      ),
      new HumanMessage(
        "Translate this sentence from English to French. I love artificial intelligence."
      ),
    ],
  ]);

  console.log(responseC.generations);
};

chatHandlerC();
