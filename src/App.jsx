import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Steps from "./components/Steps";
import Companies from "./components/Companies";
import Works from "./components/Works";
import Testimonials from "./components/Testimonials";
import LastApply from "./components/LastApply";
import Footer from "./components/Footer";

const App = () => {
	return (
		<>
			<Navbar />
      <Hero />
      <Steps />
      <Companies />
      <Works />
			<Testimonials />
			<LastApply />
			<Footer />
		</>
	);
};

export default App;
