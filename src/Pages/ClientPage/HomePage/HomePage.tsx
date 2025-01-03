import React, { useState } from "react";

//Components
import Navbar from "../../../Components/Client/Navbar";
import Banner from "./Components/Banner";
import CourseList from "./Components/CourseList";

const HomePage = () => {
	return (
		<div className="w-11/12">
			<Banner />
			<CourseList />
		</div>
	);
};

export default HomePage;
