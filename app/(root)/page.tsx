import { auth } from "@/auth";

const Home = async () => {
  const session = await auth();
  console.log(session);
  return (
    <div className="">
      <h1 className="h1-bold">Welcome to DevOverFlow</h1>
    </div>
  );
};

export default Home;
