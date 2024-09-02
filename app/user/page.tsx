import client from "@/db";

async function getUserDetails() {
  const response = await client.user.findFirst({});
  return { email: response?.username, name: response?.username };
}

// ! async components
export default async function UserPage() {
  const userDetails = await getUserDetails();
  console.log("user details fetched on server side", userDetails);

  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="border p-8 rounded">
          <div>Name: {userDetails?.name}</div>

          {userDetails?.email}
        </div>
      </div>
    </div>
  );
}
