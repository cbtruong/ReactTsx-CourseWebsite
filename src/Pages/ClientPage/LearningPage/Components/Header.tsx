import React from "react";
import { CommonProps } from "../../../../Types/ClientTypes";
// icon
import { IoChevronBackOutline } from "react-icons/io5";
import { MdNoteAlt } from "react-icons/md";
// component
import Logo from "../../../../Common/Logo";
import { Link } from "react-router-dom";

const Header: React.FC<CommonProps> = ({ className }) => {
	return (
		<div
			className={`${className} w-full flex-y-between fixed top-0 bg-white h-headerLearning border-b-1 px-6`}
		>
			<div className="group h-full flex items-center cursor-pointer">
				<Link to="/">
					<Logo className="flexCenter text-darkGray ">
						<div className="flexCenter group-hover:text-lightPurple transitionHight">
							<IoChevronBackOutline className="group-hover:-translate-x-1 transitionHight" />
							Lập trình JavaScript cơ bản
						</div>
					</Logo>
				</Link>
			</div>
			<div className="flex gap-6">
				<p className="font-semibold text-sm">3/100 bài học</p>
				<div className="flexCenter gap-1">
					<MdNoteAlt className="text-lg" />
					<span className="font-semibold text-sm">Ghi chú</span>
				</div>
			</div>
		</div>
	);
};

export default Header;
