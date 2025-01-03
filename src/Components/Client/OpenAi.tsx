import React, { useState } from "react";
import { CommonProps } from "../../Types/ClientTypes";
import { IoCloseSharp } from "react-icons/io5";
import axios from "axios";

const OpenAi: React.FC<CommonProps> = ({
	className,
	isActive,
	setIsActive,
}) => {
	const [userMessage, setUserMessage] = useState<string>("");
	const [messages, setMessages] = useState<
		{ text: string; sender: string }[]
	>([]);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUserMessage(e.target.value);
	};

	const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter" && userMessage.trim() !== "") {
			// Add user message first
			const newMessages = [
				...messages,
				{ text: userMessage, sender: "user" },
			];
			setMessages(newMessages);
			setUserMessage(""); // Clear input field
			handleQuestionUser(); // Call the function to fetch AI response
		}
	};

	const handleQuestionUser = async () => {
		try {
			const response = await axios({
				url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyBSNKns598G-y8Ad1xDzQakXSfVLmJilb4`,
				method: "POST",
				data: {
					contents: [{ parts: [{ text: userMessage }] }], // Use user message
				},
			});

			const aiResponse =
				response.data.candidates[0].content.parts[0].text ||
				"No response from AI";

			// Chỉnh sửa aiResponse để thêm định dạng
			let formattedResponse = aiResponse
				.split("**")
				.map((part, index) => {
					return index % 2 === 1 ? `</br><b>${part}</b>` : part;
				})
				.join("");

			formattedResponse = formattedResponse.replace(
				/```cpp([\s\S]*?)```/g,
				"<pre><code>$1</code></pre>"
			);

			// Add AI response to messages
			const newMessages = [
				...messages,
				{ text: userMessage, sender: "user" },
				{ text: formattedResponse, sender: "ai" },
			];
			setMessages(newMessages);
		} catch (error) {
			console.log("Error fetching AI response:", error);
			const errorMessage =
				"Sorry, something went wrong. Please try again!";
			const newMessages = [
				...messages,
				{ text: userMessage, sender: "user" },
				{ text: errorMessage, sender: "ai" },
			];
			setMessages(newMessages);
		}
	};

	return (
		<div
			className={`${
				isActive
					? "translate-y-0 opacity-100 scale-100"
					: "-translate-y-2 opacity-0 scale-0"
			} ${className} w-full h-[100vh] absolute top-0 left-0 pt-4 origin-center bg-white shadow-custom rounded-lg transitionHight cursor-pointer z-50 overflow-y-auto box-border`}
		>
			<div className="w-6/12 m-auto h-full flex flex-col">
				<div className="relative w-full pb-10">
					<h1 className="text-3xl">Open AI</h1>
					<IoCloseSharp
						onClick={() => setIsActive && setIsActive(false)}
						className="absolute top-4 right-4 text-3xl"
					/>
				</div>

				{/* Display messages */}
				<div className="w-full h-full flex flex-col py-4 overflow-y-auto">
					{messages.map((message, index) => (
						<div
							key={index}
							className={`flex max-w-2/3 w-2/3 mb-4 ${
								message.sender === "user"
									? "ml-auto text-right justify-end"
									: "justify-start mr-auto text-left"
							} mb-6`}
						>
							<span
								className={`w-fit ${
									message.sender === "user"
										? "bg-lightGray"
										: "bg-blue-200"
								} px-4 py-2 rounded-xl`}
								dangerouslySetInnerHTML={{
									__html: message.text,
								}} // Render HTML for bold and line breaks
							></span>
						</div>
					))}
				</div>

				{/* Input section */}
				<div className="w-full mt-auto mb-6">
					<input
						type="text"
						className="w-full border bg-lightGray outline-none rounded-md px-4 py-2"
						placeholder="Type your message..."
						value={userMessage}
						onChange={handleInputChange}
						onKeyPress={handleKeyPress}
					/>
				</div>
			</div>
		</div>
	);
};

export default OpenAi;
