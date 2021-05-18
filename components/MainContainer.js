import Head from "next/head";
import MyLink from "../components/MyLink";

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={"next.js, " + keywords}></meta>
        <title>Главная страница</title>
      </Head>
      <div className="navbar">
        <MyLink href={"/"} text={"Главная"} />
        <MyLink href={"/users"} text={"Пользователи"} />
      </div>
      <div>{children}</div>

      <style jsx>
        {`
          .navbar {
            background: orange;
            padding: 15px;
          }
        `}
      </style>
    </>
  );
};

export default MainContainer;
