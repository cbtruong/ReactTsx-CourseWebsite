import React from "react";
import { IoMdPeople } from "react-icons/io";
import { ImYoutube } from "react-icons/im";
import { BsClockFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { CommonProps,CourseProps } from "../../Types/ClientTypes";



const Course:React.FC<CourseProps> = ({id,title,url,view}) => {
	const navigate=useNavigate();
	return (

		<div 
		key={id}
		onClick={()=>navigate(`/learning?id=${id}`)}
		className="rounded-3xl overflow-hidden hover:shadow-custom hover:-translate-y-2 cursor-pointer transitionHight">
			<div className="w-full aspect-ratio aspect-w-16 aspect-h-9 bg-red-100 overflow-hidden">
				<img
					src={url}
					alt=""
					className="bg-cover w-full"
				/>
			</div>
			<div className="py-5 px-6 bg-lightGray bg-opacity-40">
				<p className="font-semibold mb-2">
					{title}
				</p>
				<p className="text-red-500 font-semibold mb-5">Miễn phí</p>
				<div className="flex-y-between">
					<div className="flexCenter gap-1">
						<IoMdPeople className="text-darkGray" />
						<span className="font-light text-sm">{view}</span>
					</div>
					<div className="flexCenter gap-1">
						<ImYoutube className="text-darkGray" />
						<span className="font-light text-sm">1</span>
					</div>
					<div className="flexCenter gap-1">
						<BsClockFill className="text-darkGray" />
						<span className="font-light text-sm">1h20p</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Course;
