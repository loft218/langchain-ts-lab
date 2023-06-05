import { OpenAI } from "langchain/llms/openai";


// console.log(process.env.OPENAI_API_KEY)

const chat = async () => {
    console.log('call openai ...')

    const model = new OpenAI({ openAIApiKey: process.env.OPENAI_API_KEY, temperature: 0.9 });

    const res = await model.call(
        "你好，你是谁", { timeout: 10000 }
    );

    console.log('🤖:', res);
}

chat();