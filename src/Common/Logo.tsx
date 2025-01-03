import React, { Children } from "react";
import { CommonProps } from "../Types/ClientTypes";
import { Link, useNavigate } from "react-router-dom";

const Logo: React.FC<CommonProps> = ({ className, children }) => {
	return (
		<Link to="/">
			<div className={`${className} gap-2`}>
				<div
					className={`flexCenter w-10 h-10 bg-gradient-custom rounded-lg`}
				>
					<span className="font-semibold text-white">CB</span>
				</div>
				<span className="font-bold">{children}</span>
			</div>
		</Link>
	);
};

export default Logo;
