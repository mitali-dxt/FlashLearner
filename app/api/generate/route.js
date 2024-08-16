import { NextResponse } from "next/server";
import Groq from "groq-sdk";

const systemPrompt=`You are a flashcard creater
You are a flashcard creator, you take in text and create multiple flashcards from it. Make sure to create exactly 10 flashcards.
Both front and back should be one sentence long.
You should return in the following JSON format:
{
  "flashcards":[
    {
      "front": "Front of the card",
      "back": "Back of the card"
    }
  ]
}`;

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function POST(req) {
    const groq = new Groq()
    const data = await req.json()

    const completion = await groq.chat.completions.create({
        model: 'llama3-8b-8192',
        messages: [{ role: 'system', content: systemPrompt}, ...data],
        response_format: 'json_object'
    });

    const flashcards=JSON.parse(completion.choices[0].message.content)
    return NextResponse.json(flashcards.flashcards)
};