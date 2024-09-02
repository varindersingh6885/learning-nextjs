"use server";

import client from "@/db";

export async function createUser(email: string, password: string) {
  try {
    await client.user.create({
      data: {
        password,
        username: email,
      },
    });
    return true; // represents create operation succeeded
  } catch (error) {
    return false; // represents create operation failed
  }
}
