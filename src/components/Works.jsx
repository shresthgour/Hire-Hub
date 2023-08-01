import React from "react";
import form from "../assets/Form.png";
import form2 from "../assets/Form2.png";
import form3 from "../assets/Form3.png";

const Works = () => {
	return (
		<div>
      <div className="flex justify-center items-center text-center mt-16">
			  <h2 className="text-2xl font-semibold pb-20">HOW IT WORKS</h2>
      </div>
			<div className="flex justify-center ">
				<div className="mr-20">
          <div className="w-20 h-1 rounded-lg bg-[#39A7F4] mb-6"></div>
					<h3 className="text-[#39A7F4] font-semibold text-3xl mb-10">Create your free candidate <br /> profile</h3>
					<p className="mb-10">
						Answer a few questions about yourself - it takes less <br /> than 5
						minutes.
					</p>
					<p className="italic">🏅 What is your biggest achievement?</p>
					<p className="italic">👑️ What does your ideal opportunity look like?</p>
				</div>
				<div className="">
					<img src={form} alt="form" className="w-[80%]" />
				</div>
			</div>

      <div className="flex justify-center mt-36">
        <div className="relative right-20">
					<img src={form2} alt="form" className="w-[500px]" />
				</div>
				<div className="">
          <div className="w-20 h-1 rounded-lg bg-[#39A7F4] mb-6"></div>
					<h3 className="text-[#39A7F4] font-semibold text-3xl mb-10">Sit back while companies <br /> compete to hire you</h3>
					<p className="mb-10">
          Don’t waste your time reaching out to companies or <br /> dealing with recruiters
					</p>
					<p className="italic">💨 We fast-track your profile to hiring managers.</p>
					<p className="italic">🙆‍♂️ Get multiple interview requests with upfront salary <br /> offers within days.</p>
				</div>
			</div>

      <div className="flex justify-center mt-36">
				<div className="mr-20 ml-44 ">
          <div className="w-20 h-1 rounded-lg bg-[#39A7F4] mb-6"></div>
					<h3 className="text-[#39A7F4] font-semibold text-3xl mb-10">Salary & Role transparency</h3>
					<p className="mb-10">
          Interview requests from companies mention salary and <br /> role details upfront - before you decide to accept or <br /> decline them.
					</p>
				</div>
				<div className="">
					<img src={form3} alt="form" className="w-[80%]" />
				</div>
			</div>
		</div>
	);
};

export default Works;