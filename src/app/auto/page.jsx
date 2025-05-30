import Navbar from "../components/navbar";
import Footer from "../components/footer";
import AutoSlider from "../components/autoSlider";
import AutoCard from "../components/autoCards";
import Areas from "../components/areas";

export default function AutoPage() {
  return (
    <div className="">
      <Navbar></Navbar>
      <AutoSlider></AutoSlider>
      <AutoCard></AutoCard>
      <Areas></Areas>
      <Footer></Footer>
    </div>
  );
}
