import { OpenAI } from "langchain/llms/openai";

// To make the caching really obvious, lets use a slower model.
const model = new OpenAI({
  modelName: "text-davinci-002",
  cache: true,
  n: 2,
  bestOf: 2,
});

const cacheHandler = async () => {
  // The first time, it is not yet in cache, so it should take longer
  const res = await model.predict("Tell me a joke");
  console.log(res);
  /*
    CPU times: user 35.9 ms, sys: 28.6 ms, total: 64.6 ms
    Wall time: 4.83 s
    
    
    "\n\nWhy did the chicken cross the road?\n\nTo get to the other side."
    */

  // The second time it is, so it goes faster
  const res2 = await model.predict("Tell me a joke");
  console.log(res2);

  /*
     CPU times: user 238 µs, sys: 143 µs, total: 381 µs
     Wall time: 1.76 ms
   
   
     "\n\nWhy did the chicken cross the road?\n\nTo get to the other side."
   */
};
export { cacheHandler };
// 이외에 캐싱을위한 Momento/Redis를 통해 캐싱할수도있다 관련문서
// https://js.langchain.com/docs/modules/model_io/models/llms/how_to/llm_caching
