import React, { useEffect, useRef, useState } from "react";
import Navbar from "../../../Components/Client/Navbar";
// data
import { LearningPathData } from "../../../Common/data/LearningPathData";
//function
import { HandleAppearScroll } from "../../../Common/HandleFunction";
import axios from "axios";

const LearningPathsDetailPage = () => {
	const [isVisible, setIsVisible] = useState(false);
	const sectionRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		window.scrollTo(0, 0);
		HandleAppearScroll(setIsVisible, sectionRef);
	}, []);
	return (
		<div
			ref={sectionRef}
			className={`${
				isVisible
					? "opacity-100 translate-y-0"
					: "opacity-0 translate-y-2"
			} w-11/12 transitionMedium`}
		>
			<div className="w-10/12 m-auto mt-12">
				<h1 className="text-2xl font-extrabold mb-6">
					Learning Paths Front-End
				</h1>
				<p className="w-8/12 mb-10">
					Most websites or mobile applications have 2 parts: Front-end
					and Back-end. Front-end is the interface that users can see
					and interact with, which is the mobile applications or
					websites you have used. Therefore, the task of a Front-end
					programmer is to build beautiful, easy-to-use interfaces and
					optimize the user experience.
				</p>
			</div>
			<div className="w-10/12 flex flex-col gap-12 m-auto mt-12">
				{LearningPathData[0].topic.map((item, index) => (
					<div className="w-8/12">
						<h2 className="text-2xl font-extrabold mb-3">
							{index + 1}. {item.title}
						</h2>
						<p className="mb-3">{item.description}</p>
						{item.courses.map((course, index) => (
							<div className="flex-y-between gap-6 w-full p-4 rounded-xl border-2">
								<div className="w-1/3 aspect-ratio aspect-w-13 aspect-h-3">
									<img
										className="rounded-xl w-full"
										src={course.url}
										alt=""
									/>
								</div>
								<div className="w-2/3 flex flex-col gap-2">
									<h3 className="text-lg font-semibold">
										{course.title}
									</h3>
									<p className="text-red-600 font-semibold">
										Free
									</p>
									<p className="text-sm">
										To have an overview of the IT industry -
										Web programming, you should watch the
										videos in this course first.
									</p>
									<div>
										<button className=" text-white text-sm font-semibold bg-lightPurple rounded-full px-8 py-2 hover:bg-opacity-80">
											CONTINUE
										</button>
									</div>
								</div>
							</div>
						))}
					</div>
				))}
			</div>
		</div>
	);
};

export default LearningPathsDetailPage;
