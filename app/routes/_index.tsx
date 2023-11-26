import { json, type LoaderFunctionArgs, type MetaFunction } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";

interface Env {
  DB: D1Database;
}

interface User {
  CustomerId: number,
  CompanyName: string,
  ContactName: string,
}

interface LoaderData {
  users: User[];
}

export async function loader(props: LoaderFunctionArgs) {
  const env = props.context.env as Env;

  const { results } = await env.DB.prepare(
    "SELECT * FROM Customers"
  ).bind().all();

  return json({
    users: results,
  })
}

export default function Index() {
  const { users } = useLoaderData<LoaderData>();

  return (
    <div className="max-w-5xl m-auto p-10">
      <h1 className="text-3xl font-bold w-4/5">
        Database access on the edge with Remix run, Cloudflare workers & D1
      </h1>

      <div className="mt-10">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Customer ID</th>
              <th className="px-4 py-2 text-left">Company Name</th>
              <th className="px-4 py-2 text-left">Contact Name</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.CustomerId}>
                <td className="border px-4 py-2">{user.CustomerId}</td>
                <td className="border px-4 py-2">{user.CompanyName}</td>
                <td className="border px-4 py-2">{user.ContactName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};
