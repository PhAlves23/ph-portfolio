export async function GET(request: Request) {
  return new Response("Hello World", { status: 200 });
}

export async function POST(request: Request) {
  return new Response("Hello World POST", { status: 200 });
}
