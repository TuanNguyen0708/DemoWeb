import HeaderComponent from "./Component/HeaderComponent/HeaderComponent";
import "./App.css";
import SliderComponent from "./Component/SliderComponent/SliderComponent";
import FeatureComponent from "./Component/Feature/FeatureComponent";
import GetStartedComponent from "./Component/GetStartedComponent/GetStartedComponent";
import ServicesComponent from "./Component/ServicesComponent/ServicesComponent";
import ClientComponent from "./Component/ClientComponent/ClientComponent";
import TeamComponent from "./Component/TeamComponent/TeamComponent";
import PricingComponent from "./Component/PricingComponent/PricingComponent";
import TouchComponent from "./Component/TouchComponent/TouchComponent";
import ContactComponent from "./Component/ContactComponent/ContactComponent";
function App() {
  return (
    <div>
      <HeaderComponent />
      <SliderComponent />
      <FeatureComponent />
      <GetStartedComponent />
      <ServicesComponent />
      <ClientComponent />
      <TeamComponent />
      <PricingComponent />
      <TouchComponent />
      <ContactComponent />
    </div>
  );
}

export default App;
