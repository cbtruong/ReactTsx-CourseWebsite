import React, { useEffect, useRef, useState } from "react";
// data
import { LearningPathData } from "../../../Common/data/LearningPathData";
//function
import { HandleAppearScroll } from '../../../Common/HandleFunction';

// router link
import { routerLinkClient } from "../../../Util/RouterLink";
import { Link } from "react-router-dom";
const LearningPathsPage = () => {
	const [isVisible, setIsVisible] = useState(false);
	const sectionRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		window.scrollTo(0, 0);
		HandleAppearScroll(setIsVisible,sectionRef)
	}, []);
	return (
		<div 
		ref={sectionRef}
		className={`${
			isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
		} w-11/12 transitionMedium`}>
			<div className="w-10/12 m-auto mt-12">
				<h1 className="text-2xl font-bold mb-6">Learning Paths</h1>
				<p className="w-8/12 mb-10">
					To get started smoothly, you should focus on a learning
					path. For example, to work as a "Front-end Programmer", you
					should focus on the "Front-end" path.
				</p>
				<div className="flex gap-4">
					{LearningPathData.map((item, index) => (
						<div
							key={index}
							className="w-1/2 border-2 rounded-xl p-6"
						>
							<div className="flex gap-4 mb-2">
								<div className="w-3/4">
									<h2 className="text-xl font-bold mb-3">
										{item.title}
									</h2>
									<p className="text-sm">
										{item.description}
									</p>
								</div>
								<div className="w-1/4 border-4 overflow-hidden border-lightPurple rounded-full">
									<img
										src={item.url}
										alt=""
										className="p-3"
									/>
								</div>
							</div>

							<div className="mb-4 flex gap-4">
								{item?.topic
									?.flatMap((topic) =>
										topic.courses.map((course) => ({
											urlIcon: course.urlIcon,
										}))
									)
									.map((courseIcon, index) => (
										<div key={index} className="w-10 h-10">
											<img
												src={courseIcon.urlIcon}
												alt=""
												className="w-full h-full p-2 border-2 rounded-full cursor-pointer hover:bg-lightPurple transitionHight"
											/>
										</div>
									))}
							</div>
							<Link to={`${routerLinkClient.LearningPathsDetail}/course=${item.id}`}>
							<button className="px-6 py-1 bg-lightPurple bg-opacity-80 rounded-full tracking-widest text-white font-semibold hover:bg-opacity-60">
								SEE DETAIL
							</button>
							</Link>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default LearningPathsPage;
