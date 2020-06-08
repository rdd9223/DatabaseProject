import Link from "next/link";
import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";

// Link의 href에 ?name= 이름 형태의 쿼리스트링을 넣어줬다.
// <Link href={`/profile?name=${props.name}`}>

// href: 실제 이동할 경로 [profile].js를 의미
// as: 우리 URL에 어떻게 보일지 정의
const ProfileLink = (props) => (
  <div>
    <Link href={`/p/[profile]`} as={`/p/${props.profile}`}>
      <a>Go to {props.profile}'s profile</a>
    </Link>
  </div>
);

const Index = (props) => {
  // return (
  //   <Layout>
  //     <h1>Friends List</h1>
  //     <ProfileLink profile="jake" />
  //     <ProfileLink profile="peter" />
  //     <ProfileLink profile="yumi" />
  //   </Layout>
  // );
  return (
    <Layout>
      <h1>Friends List {props.profiles[0]}</h1>
      {props.profiles.map((profile, index) => (
        <ProfileLink key={index} profile={profile} />
      ))}
    </Layout>
  );
};

Index.getInitialProps = async function () {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
  return {
    profiles: data.map((profile) => profile.name),
  };
};

export default Index;
