import Layout from "../components/Layout";
import { useRouter } from "next/router";

// useRouter를 이용하여 쿼리에 담긴 문자열을 받았다.

const Profile = () => {
  const router = useRouter();

  return (
    <Layout>
      <p>Hello, my name is {router.query.name}. I use next.js</p>
    </Layout>
  );
};

export default Profile;
