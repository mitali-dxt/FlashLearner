import { NextResponse } from "next/server";
import { Groq } from "groq-sdk"; // Ensure you have the correct import path

const systemPrompt = `You are a flashcard creator. You take in text and create multiple flashcards from it. Make sure to create exactly 9 flashcards.The front should have a question. Both front and back should be one sentence long. You should return in the following JSON format:
{
  "flashcards":[
    {
      "front": "Front of the card",
      "back": "Back of the card"
    }
  ]
}`;

export async function POST(req) {
  try {
    const groq = new Groq({ apiKey: process.env.GROQ_API_KEY }); // Initialize correctly
    const data = await req.text();

    const completion = await groq.chat.completions.create({
      model: 'llama3-8b-8192', // Ensure this model is correct and supported by the API
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: data }
      ],
      response_format: { type: 'json_object' },
    });

    const flashcards = JSON.parse(completion.choices[0].message.content);
    return NextResponse.json(flashcards.flashcards);
  } catch (error) {
    console.error("Error creating flashcards:", error);
    return NextResponse.json({ error: "Failed to generate flashcards" }, { status: 500 });
  }
}
