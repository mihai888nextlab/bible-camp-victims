import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Hero from "../Components/Hero";

interface Props {
  origin: (event: React.ChangeEvent<HTMLInputElement>) => void;
  destination: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Home(props: Props) {
  return (
    <>
      <Header></Header>
      <Hero origin={props.origin} destination={props.destination}></Hero>
    </>
  );
}

export default Home;
