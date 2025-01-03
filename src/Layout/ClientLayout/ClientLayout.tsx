import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Navbar from "../../Components/Client/Navbar";

const ClientLayout = () => {
	return (
		<>
			<Header />
			<div className="w-full flex mb-12">
				<Navbar />
				<Outlet />
			</div>
			<Footer />
		</>
	);
};

export default ClientLayout;
