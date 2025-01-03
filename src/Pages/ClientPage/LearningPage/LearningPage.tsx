import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
// Component
import Header from "./Components/Header";
import Content from "./Components/Content";
import Lessons from "./Components/Lessons";
// type
import { Lesson, CourseProps, Section } from "../../../Types/ClientTypes";

const LearningPage = () => {
	const [courses, setCourses] = useState<CourseProps[]>([]);
	const [lesson, setLesson] = useState<Lesson | undefined>(undefined);
	const [selectLesson, setSelectLesson] = useState<string>("1");
	const location = useLocation();

	const queryParams = new URLSearchParams(location.search);
	const idCourses = queryParams.get("id");

	useEffect(() => {
		axios
			.get(`http://localhost:5000/lessons?id=${selectLesson}`)
			.then((response) => {
				if (response.data.length > 0) {
					setLesson(response.data[0]);
				} else {
					console.log("No lesson found");
				}
			})
			.catch((error) => console.log(error));
	}, []);
	return (
		<div className="w-full">
			<Header />
			<div className="h-contentLearning flex mt-headerLearning">
				{lesson && (
					<Content
						selectLesson={selectLesson}
						setSelectLesson={setSelectLesson}
						setLesson={setLesson}
						lesson={lesson}
					/>
				)}
				{idCourses && lesson && (
					<Lessons
						idCourses={idCourses}
						selectLesson={selectLesson}
						setSelectLesson={setSelectLesson}
						lesson={lesson}
					/>
				)}
			</div>
		</div>
	);
};

export default LearningPage;
