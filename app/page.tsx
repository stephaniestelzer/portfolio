// Home page

import { client } from "@/sanity/lib/client";
import Image from "next/image";

export default async function Home() {
  const projects = await client.fetch('*[_type == "project"]')
  console.log(projects)
  return (
    <div className="bg-red-500 text-white p-4 text-2xl">
        If you see a red box, Tailwind is working!
    </div>
  );
}
