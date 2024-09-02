import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

// handle Get request for route 'api/user'
export async function GET() {
  const user = await client.user.findFirst({});
  return Response.json({
    email: user?.username,
    name: user?.username,
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
