import Link from "next/link";
import Layout from "../components/Layout";

// Link의 href에 ?name= 이름 형태의 쿼리스트링을 넣어줬다.

const ProfileLink = (props) => (
  <div>
    <Link href={`/profile?name=${props.name}`}>
      <a>Go to {props.name}'s profile</a>
    </Link>
  </div>
);

const Index = () => {
  return (
    <Layout>
      <h1>Friends List</h1>
      <ProfileLink name="jake" />
      <ProfileLink name="peter" />
      <ProfileLink name="yumi" />
    </Layout>
  );
};

export default Index;
