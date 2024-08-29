import { NextRequest } from "next/server";

// handle Get request for route 'api/user'
export function GET() {
  return Response.json({
    email: "varindersingh6885@gmail.com",
    name: "varinder",
  });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log("req body", body);
  return Response.json({
    message: "you got it",
  });
}
