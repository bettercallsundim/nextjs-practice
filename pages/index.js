import Link from "next/link";

export default function listUsers({ json }) {
  return (
    <div className="p-20 min-h-full bg-gray-900">
      <h3 className="text-white">List of users : </h3>
      <ul>
        {json.map((elm, ind) => (
          <li key={elm.email} className="text-blue-500 underline">
            <span>{ind + 1}. </span>
            <Link href={`/${elm.id}`}>{elm.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  let data = await fetch("https://jsonplaceholder.typicode.com/users");
  let json = await data.json();
  return {
    props: {
      json,
    },
  };
}
