import React, {
	Dispatch,
	SetStateAction,
	useState,
	useRef,
	useEffect,
} from "react";
import { CommonProps, Lesson, Section } from "../../../../Types/ClientTypes";
import axios from "axios";

interface ContentProps extends CommonProps {
	selectLesson?: string;
	setSelectLesson: Dispatch<SetStateAction<string>>;
	lesson: Lesson;
	setLesson: Dispatch<SetStateAction<Lesson | undefined>>;
}

interface QuestionProps {
	id: string;
	question: string;
	answer_A: string;
	answer_B: string;
	answer_C: string;
	answer_D: string;
	correct_answer: "A" | "B" | "C" | "D";
}

const Content: React.FC<ContentProps> = ({
	selectLesson,
	lesson,
	setLesson,
}) => {
	const videoRef = useRef<HTMLVideoElement | null>(null);
	const [videoTime, setVideoTime] = useState(0);
	const [videoDuration, setVideoDuration] = useState<number>(0);
	const [selectQuestion, setSelectQuestion] = useState<number>(0);
	const questions = [
		{
			question: "1 + 1 = ...?",
			answer_A: "2",
			answer_B: "3",
			answer_C: "4",
			answer_D: "5",
			correct_answer: "A",
		},
		{
			question: "5 - 2 = ...?",
			answer_A: "1",
			answer_B: "2",
			answer_C: "3",
			answer_D: "4",
			correct_answer: "C",
		},
		{
			question: "3 x 3 = ...?",
			answer_A: "6",
			answer_B: "9",
			answer_C: "12",
			answer_D: "15",
			correct_answer: "B",
		},
		{
			question: "10 ÷ 2 = ...?",
			answer_A: "2",
			answer_B: "3",
			answer_C: "5",
			answer_D: "7",
			correct_answer: "C",
		},
		{
			question: "7 + 3 = ...?",
			answer_A: "10",
			answer_B: "9",
			answer_C: "8",
			answer_D: "11",
			correct_answer: "A",
		},
	];

	const handleTimeUpdate = () => {
		if (videoRef.current && lesson?.id && videoDuration) {
			const currentTime = videoRef.current.currentTime;
			setVideoTime(currentTime);

			// Kiểm tra nếu thời gian xem video vượt quá nửa thời gian video
			if (
				videoDuration &&
				currentTime > videoRef.current.duration / 2 &&
				lesson.status === "ban"
			) {
				console.log("change");
				const updatedLesson = { ...lesson, status: "done" };
				axios
					.put(
						`http://localhost:5000/lessons/${lesson.id}`,
						updatedLesson
					)
					.then((response) => {
						console.log("Lesson updated:", response.data);
						setLesson(updatedLesson);
					})
					.catch((error) => {
						console.error("Error updating lesson:", error);
					});
			}
		}
	};
	// Lấy tổng thời lượng của video
	const handleLoadedMetadata = () => {
		if (videoRef.current) {
			setVideoDuration(videoRef.current.duration);
		}
	};
	const fetchVideoLesson = async () => {
		try {
			const response = await axios.get(
				`http://localhost:5000/lessons?id=${selectLesson}`
			);
			setLesson(response.data[0]);
		} catch (err) {
			console.log(err);
		}
	};
	useEffect(() => {
		fetchVideoLesson();
	}, [selectLesson]);
	useEffect(() => {
		if (lesson && videoRef.current) {
			setSelectQuestion(0);
			const videoElement = videoRef.current;
			videoElement.addEventListener(
				"loadedmetadata",
				handleLoadedMetadata
			);
			videoElement.addEventListener("timeupdate", handleTimeUpdate);

			return () => {
				videoElement.removeEventListener(
					"loadedmetadata",
					handleLoadedMetadata
				);
				videoElement.removeEventListener(
					"timeupdate",
					handleTimeUpdate
				);
			};
		}
	}, [lesson]);

	if (lesson?.type === "video") {
		return (
			<div className="w-9/12 overflow-y-auto">
				<div className="w-full aspect-ratio aspect-w-16 aspect-h-8 bg-black">
					<video
						key={lesson?.id}
						ref={videoRef}
						width="100%"
						controls
					>
						<source src={lesson?.content} type="video/mp4" />
					</video>
				</div>
				<div className="py-8 w-10/12 m-auto flex flex-col gap-4">
					<h2 className="text-2xl font-semibold">{lesson?.title}</h2>
					<p>
						Join the communities to learn, share and "spy" to see
						what's new!
					</p>
					<p>
						Youtube:{" "}
						<a
							href="https://www.youtube.com/@cb_truong"
							className="text-blue-500"
						>
							https://www.youtube.com/@cb_truong
						</a>{" "}
					</p>
					<p>Zalo: 093141202</p>
				</div>
			</div>
		);
	} else {
		return (
			<div className="w-9/12 flexCenter">
				<div className="w-2/4 flexCenter shadow-custom py-12">
					<div className="w-3/4 ">
						{questions.map((question, index) => (
							<div
								className="w-full flex flex-col gap-4  px-8"
								key={index}
							>
								{index === selectQuestion && ( // Thay đổi điều kiện để chỉ hiển thị câu hỏi đầu tiên
									<>
										<h2 className="text-xl font-semibold">
											Question {index + 1} :{" "}
											{question.question}
										</h2>
										<div className="w-full border-1 border-black px-4 py-2 rounded-md cursor-pointer">
											<p>A. {question.answer_A}</p>
										</div>
										<div className="w-full border-1 border-black px-4 py-2 rounded-md cursor-pointer">
											<p>B. {question.answer_B}</p>
										</div>
										<div className="w-full border-1 border-black px-4 py-2 rounded-md cursor-pointer">
											<p>C. {question.answer_C}</p>
										</div>
										<div className="w-full border-1 border-black px-4 py-2 rounded-md cursor-pointer">
											<p>D. {question.answer_D}</p>
										</div>
										<div className="flex gap-4">
											<button
												onClick={() => {
													selectQuestion > 0
														? setSelectQuestion(
																selectQuestion -
																	1
														  )
														: "";
												}}
												className="w-1/2 text-center py-2 bg-lightPurple rounded-md text-white"
											>
												BACK
											</button>
											<button
												onClick={() => {
													selectQuestion <
													questions.length - 1
														? setSelectQuestion(
																selectQuestion +
																	1
														  )
														: "";
												}}
												className="w-1/2 text-center py-2 bg-lightPurple rounded-md text-white"
											>
												NEXT
											</button>
										</div>
									</>
								)}
							</div>
						))}
					</div>
				</div>
			</div>
		);
	}
};

export default Content;
