import { OpenAI } from "langchain/llms/openai";


// console.log(process.env.OPENAI_API_KEY)

const chat = async () => {
    console.log('call openai ...')
    const model = new OpenAI({ openAIApiKey: process.env.OPENAI_API_KEY, temperature: 0.9 });
    const res = await model.call(
        "What would be a good company name a company that makes colorful socks?", { timeout: 5000 }
    );
    console.log('openai response:\n')
    console.log(res);
}

chat();