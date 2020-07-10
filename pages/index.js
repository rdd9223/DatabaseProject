import Link from "next/link";
import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";
import Head from "next/head";

// Link의 href에 ?name= 이름 형태의 쿼리스트링을 넣어줬다.
// <Link href={`/profile?name=${props.name}`}>

// href: 실제 이동할 경로 [profile].js를 의미, 동적경로
// as: 우리 URL에 어떻게 보일지 정의
const ProfileLink = (props) => (
  <div>
    <Link href={`/user/[profile]`} as={`/user/${props.profile}`}>
      <a>Go to {props.profile}'s profile</a>
    </Link>
  </div>
);

const Index = (props) => {
  return (
    <div>
      <Head>
        <a>Next 실습</a>
      </Head>
      <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
      <Layout>
        <h1>Friends List {props.profiles[0]}</h1>
        {props.profiles.map((profile, index) => (
          <ProfileLink key={index} profile={profile} />
        ))}
      </Layout>
    </div>
  );
};

// next의 핵심기능! SEO에 유리함, 하위 컴포넌트에서 사용 불가.
// componentDidMount는 두번 렌더링! getInitialProps는 미리 사전 렌더링 한번!
Index.getInitialProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    profiles: data.map((profile) => profile.name),
  };
};

export default Index;
