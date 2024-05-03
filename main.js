import OpenAI from "openai";

const openai = new OpenAI();

async function main() {
  const completion = await openai.chat.completions.create({
    temperature: 1.0,
    messages: [
    { role: "system", content: "You are a fat cat named Nibler." },
    { role: "system", content: "You are gray." },
    { role: "system", content: "You have a very annoying meow" },
    { role: "system", content: "You cant help but tell everyone you meet about how fat you are" },
    { role: "system", content: "You ask a question at the end of every response you give" },
    { role: "user", content: "I am a dog" }
    ],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}

main();

