import React, { useState } from "react";
// icon
import { GoHomeFill } from "react-icons/go";
import { FaRoad } from "react-icons/fa";
import { BsPostcard } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
	const location=useLocation();
    const [activeNav, setActiveNav] = useState<number>(1);
	const navigate=useNavigate();
	const navbars = [
		{
			id: 1,
			title: "Home",
			link: "/",
			icon: <GoHomeFill className="text-2xl" />,
		},
		{
			id: 2,
			title: "Road map",
			link: "/learning-paths",
			icon: <FaRoad className="text-2xl" />,
		},
		{
			id: 3,
			title: "Blog",
			link: "/blog",
			icon: <BsPostcard className="text-2xl" />,
		},
	];

	const handleNav=(id:number,link:string)=>{
		setActiveNav(id);
		navigate(link);
	}
	return (
		<div className="flex flex-col items-center gap-6 w-1/12 px-3 py-6">
			{navbars.map((nav) => (
				<div
					key={nav.id}
					onClick={() => handleNav(nav.id,nav.link)}
					className={`${
						nav.link === location.pathname
							? "bg-lightPurple bg-opacity-20"
							: " hover:bg-lightPurple hover:bg-opacity-5"
					} w-3/4 flexCenter flex-col rounded-2xl  py-3  
          cursor-pointer`}
				>
					{nav.icon}
					<Link to={`${nav.link}`}>
					<span className="text-sm font-semibold">{nav.title}</span>
					</Link>
				</div>
			))}
		</div>
	);
};

export default Navbar;
