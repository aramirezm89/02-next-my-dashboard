

export async function GET() {
  return new Response(JSON.stringify({ message: 'Hello from the counter API!' }), {
    headers: { 'Content-Type': 'application/json' },
  });
}