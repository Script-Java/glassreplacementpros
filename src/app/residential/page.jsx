import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ResSlider from "../components/resSlider";
import ResCards from "../components/resCards";
import Areas from "../components/areas";

export default function AutoPage() {
  return (
    <div className="">
      <Navbar></Navbar>
      <ResSlider></ResSlider>
      <ResCards></ResCards>
      <Areas></Areas>
      <Footer></Footer>
    </div>
  );
}
