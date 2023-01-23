export default function userID({ json, serial }) {
  return (
    <div className="p-20 bg-gray-700 text-white">
      <p>Name : {json[serial-1].name}</p>
      <p>Username : {json[serial-1].username}</p>
      <p>Email : {json[serial-1].email}</p>
    </div>
  );
}

export async function getStaticPaths() {
  let data = await fetch("https://jsonplaceholder.typicode.com/users");
  let json = await data.json();
  let mapped = json.map((elm) => {
    return {
      params: {
        userID: `${elm.id}`,
      },
    };
  });
  return {
    paths: mapped,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  let data = await fetch("https://jsonplaceholder.typicode.com/users");
  let json = await data.json();
  return {
    props: {
      json,
      serial: params.userID,
    },
  };
}
