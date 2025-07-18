export default async function handler(req, res) {
  const { query } = req.body;

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

    res.status(200).json({ answer });
  } catch (error) {
    console.error("Puter API error:", error);
    res.status(500).json({ answer: "An error occurred. Please try again." });
  }
}
