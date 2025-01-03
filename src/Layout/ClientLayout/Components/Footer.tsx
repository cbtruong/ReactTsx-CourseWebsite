import React from "react";
import Logo from "../../../Common/Logo";

const Footer = () => {
	return (
		<div className="w-full bg-black">
			<div className="w-10/12 m-auto py-8">
				<div className="flex justify-between gap-6 text-white font-semibold mb-6">
					<div className="w-2/6 text-left">
						<Logo className="flex items-center">
							Programming is not challenging
						</Logo>
					</div>
					<p className="w-1/6">Về CB</p>
					<p className="w-1/6">Tool</p>
					<p className="w-2/6 text-xl">
						Cộng đồng lập trình từ cơ bản đến nâng cao
					</p>
				</div>
				<div className="flex justify-between gap-6 text-white font-light">
					<div className="w-2/6  flex flex-col gap-2">
						<p className="">
							<span className="font-bold">Phone: </span> 0393141202
						</p>
						<p>
							<span className="font-bold">Email: </span>
							batruong12122002@gmail.com
						</p>
						<p>
							<span className="font-bold">Address: </span> Group 1,
							Quarter 1, Tan Dong Ward, Dong Xoai City, Binh Phuoc
							Province
						</p>
					</div>
					<div className="w-1/6 flex flex-col gap-2">
						<p>Introduce</p>
						<p>Contact</p>
						<p>Clause</p>
						<p>Security</p>
						<p>Job opportunities</p>
					</div>
					<div className="w-1/6 flex flex-col gap-2">
						<p>Create a job application</p>
						<p>Shorten link</p>
						<p>CSS Grid generator</p>
						<p>Security</p>
						<p>Job opportunities</p>
					</div>
					<div className="w-2/6 flex flex-col gap-2">
						<p className="">
							<span className="font-bold">Tax code:</span> ...
						</p>
						<p>
							<span className="font-bold">
								Date of Establishment:
							</span>{" "}
							12/12/2024
						</p>
						<p>
							<span className="font-bold">
								Field of operation:
							</span>{" "}
							Education, technology - programming. We focus on
							building and developing products that bring value to
							the Vietnamese programming community.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
