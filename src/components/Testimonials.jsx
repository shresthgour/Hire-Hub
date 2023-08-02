import React from "react";
import people1 from "../assets/1.png";
import people2 from "../assets/2.png";
import people3 from "../assets/3.png";

const Testimonials = () => {
	return (
		<div>
			<div className="flex justify-center items-center text-center mt-36">
				<h2 className="text-2xl font-semibold pb-20">TESTIMONIALS</h2>
			</div>
			<div className="flex space-x-10 justify-center">
				<div className="flex flex-col w-[350px] justify-center items-start ">
					<div className="flex mb-8">
						<img src={people1} alt="" className="w-14" />
						<div className="ml-4">
							<p className="font-bold">Yadhu Manoharan</p>
							<p className="">Sr. iOS Engineer</p>
						</div>
					</div>
					<div className="">
						<p className="text-sm">
							HireHub was able to make the process really easy. They were able
							to schedule interviews with the best companies in the industry and
							drove the entire process smoothly.
						</p>
					</div>
				</div>

				<div className="flex flex-col w-[350px] justify-center items-start ">
					<div className="flex mb-8">
						<img src={people2} alt="" className="w-14" />
						<div className="ml-4">
							<p className="font-bold">Santosh Nain</p>
							<p className="">SDE-2</p>
						</div>
					</div>
					<div className="">
						<p className="text-sm">
              A friend of mine told me about HireHub when I started looking for new opportunities. The HireHub team was extremely helpful, professional and quick with everything.
						</p>
					</div>
				</div>

				<div className="flex flex-col w-[350px] justify-center items-start ">
					<div className="flex mb-8">
						<img src={people3} alt="" className="w-14" />
						<div className="ml-4">
							<p className="font-bold">Rose Mark</p>
							<p className="">Sr. Software Engineer</p>
						</div>
					</div>
					<div className="">
						<p className="text-sm">
              Compared to other job portals, what stood out for me was that HireHub, on top of providing really good opportunities, helped me in negotiations with the companies too.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
