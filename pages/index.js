import Link from "next/link";

const index = () => {
  return (
    <div>
      <Link href="/profile">
        <a>Go Profile</a>
      </Link>
      <p>index</p>
    </div>
  );
};

export default index;
