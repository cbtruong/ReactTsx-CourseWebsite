import React from "react";
import { CommonProps } from "../../../Types/ClientTypes";
import { Link } from "react-router-dom";

const MyCoursesDropdown: React.FC<CommonProps> = ({ className, isActive }) => {
	return (
		<div
			className={`
            ${
				isActive
					? "translate-y-0 opacity-100"
					: "-translate-y-2 opacity-0"
			}
            ${className} w-[24rem] absolute top-8 right-0 origin-right bg-white py-4 shadow-custom rounded-lg transitionHight`}
		>
			<div className="flex-y-between px-5 mb-2">
				<h3 className="text-lg font-semibold">My Courses</h3>
				<button className="text-sm text-lightPurple font-medium px-2 py-1 hover:bg-lightGray hover:bg-opacity-30 ">
					See all
				</button>
			</div>
			<div className="w-full px-2">
				<Link to="/learning?id=1">
					<div className="flexCenter gap-4 w-full py-2 px-3 rounded-lg hover:bg-lightGray hover:bg-opacity-30 overflow-hidden">
						<img
							className="w-1/3 rounded-lg"
							src="https://files.fullstack.edu.vn/f8-prod/courses/1.png"
							alt=""
						/>
						<div className="flex flex-col w-2/3 gap-2">
							<div>
								<h4>Lập trình JavaScript cơ bản</h4>
								<p className="text-xs">
									Học cách đây 8 tháng trước
								</p>
							</div>
							<div className="rounded-full h-2 bg-lightPurple"></div>
						</div>
					</div>
				</Link>
				<div className="flexCenter gap-4 w-full py-2 px-3 rounded-lg hover:bg-lightGray hover:bg-opacity-30 overflow-hidden">
					<img
						className="w-1/3 rounded-lg"
						src="https://files.fullstack.edu.vn/f8-prod/courses/1.png"
						alt=""
					/>
					<div className="flex flex-col w-2/3 gap-2">
						<div>
							<h4>Lập trình JavaScript cơ bản</h4>
							<p className="text-xs">
								Học cách đây 8 tháng trước
							</p>
						</div>
						<div className="rounded-full h-2 bg-lightPurple"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyCoursesDropdown;
