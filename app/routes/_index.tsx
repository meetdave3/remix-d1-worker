// import { useLoaderData } from "@remix-run/react";

import type { MetaFunction } from "@remix-run/cloudflare";

// interface Env {
//   // todo
// }

// interface LoaderData {
//   // todo
// }

// export async function loader(props: LoaderFunctionArgs) {
//   const env = props.context.env as Env;
// }

export default function Index() {
  // const props = useLoaderData<LoaderData>();

  return (
    <div className="max-w-5xl m-auto p-10">
      <h1 className="text-3xl font-bold w-4/5">
        Database access on the edge with Remix run, Cloudflare workers & D1
      </h1>
    </div>
  );
}

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};
