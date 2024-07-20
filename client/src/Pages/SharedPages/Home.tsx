import Navbar from "../../Components/Navbar/Navbar.tsx";
import Loader from "../../Components/Loader.tsx";
import useDocumentTitle from "../../Hooks/useDocumentTitle.ts";

function Home() {
  useDocumentTitle("Home");
  return (
    <>
      <Navbar />
    </>
  );
}

export default Home;
