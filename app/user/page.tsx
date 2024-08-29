import axios from "axios";

async function getUserDetails() {
  const response = await axios.get("http://localhost:3000/api/user");
  return response.data;
}

// ! async components
export default async function UserPage() {
  await new Promise((r) => setTimeout(r, 3000));
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
