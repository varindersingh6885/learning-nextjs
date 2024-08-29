import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

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

  const user = await client.user.create({
    data: {
      username: body.username,
      password: body.password,
    },
  });

  return Response.json({
    userId: user.id,
    username: user.username,
    password: user.password,
    message: "user created",
  });
}
