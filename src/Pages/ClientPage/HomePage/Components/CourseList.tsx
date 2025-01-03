import React, { useEffect, useRef, useState } from "react";
// icon
import { MdNavigateNext } from "react-icons/md";
//Component
import Course from "../../../../Components/Client/Course";
import axios from "axios";
// Type
import { CourseProps } from "../../../../Types/ClientTypes";
import { Link } from "react-router-dom";
//
import { HandleAppearScroll } from "../../../../Common/HandleFunction";

const CourseList = () => {
	const [isVisible, setIsVisible] = useState(false);
	const sectionRef = useRef<HTMLDivElement>(null);
	const [courses, setCourses] = useState<CourseProps[]>([]);

	const fetchApi = async () => {
		try {
			const response = await axios.get("http://localhost:5000/courses");
			if (response.status !== 200) {
				throw new Error(
					`Request failed with status ${response.status}`
				);
			}
			const data = response.data;
			console.log(data);
			setCourses(data);
		} catch (error) {
			console.error("Error fetching API:", error.message || error);
		}
	};
	useEffect(() => {
		fetchApi();
		window.addEventListener("scroll", () =>
			HandleAppearScroll(setIsVisible, sectionRef)
		);
		return () =>
			window.removeEventListener("scroll", () =>
				HandleAppearScroll(setIsVisible, sectionRef)
			);
	}, []);
	return (
		<div
			ref={sectionRef}
			className={`${
				isVisible
					? "opacity-100 translate-y-0"
					: "opacity-0 translate-y-2"
			} w-11/12 m-auto mb-6 transitionMedium`}
		>
			<div className="flex-y-between mb-6">
				<h2 className="text-2xl font-bold">Course Free</h2>
				<Link to="/learning-paths">
					<div className="group flex items-center  text-lightPurple cursor-pointer">
						<span className="font-semibold border-b-1 leading-none border-b-transparent group-hover:border-lightPurple transitionHight">
							See learning path
						</span>
						<MdNavigateNext className="text-2xl group-hover:translate-x-1 transitionHight" />
					</div>
				</Link>
			</div>
			<div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
				{courses?.map((course, index) => (
					<Course
						id={course.id}
						title={course.title}
						url={course.url}
						view={course.view}
					/>
				))}
			</div>
		</div>
	);
};

export default CourseList;
