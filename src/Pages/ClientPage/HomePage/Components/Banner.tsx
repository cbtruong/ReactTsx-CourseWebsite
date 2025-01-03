import React from "react";

const Banner = () => {
	return (
		<div
			style={{
				backgroundImage: "url('/assets/banners/banner1.png')",
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
			className="w-full h-[90vh] bg-red-200 mb-6 rounded-bl-3xl"
		></div>
	);
};

export default Banner;
