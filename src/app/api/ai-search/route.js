// app/api/ai-search/route.js
export async function POST(req) {
  const { query } = await req.json();

  try {
    const aiRes = await fetch("https://api.puter.ai/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        messages: [{ role: "user", content: query }],
      }),
    });

    const result = await aiRes.json();
    const answer =
      result?.choices?.[0]?.message?.content ||
      "Sorry, I couldn’t answer that.";

    return Response.json({ answer });
  } catch (error) {
    console.error("Puter API error:", error);
    return Response.json(
      { answer: "An error occurred. Please try again." },
      { status: 500 }
    );
  }
}
