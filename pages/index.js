import Link from "next/link";
import Layout from "../components/Layout";

// Link의 href에 ?name= 이름 형태의 쿼리스트링을 넣어줬다.
// <Link href={`/profile?name=${props.name}`}>

// href: 실제 이동할 경로 [profile].js를 의미
// as: 우리 URL에 어떻게 보일지 정의
const ProfileLink = (props) => (
  <div>
    <Link href={`/p/[profile]`} as={`/p/${props.profile}`}>
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
