import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FaChevronDown, FaYoutube } from "react-icons/fa";
import { MdOutlineDone } from "react-icons/md";
import { FaLock } from "react-icons/fa6";

import { CommonProps, Lesson, Section } from "../../../../Types/ClientTypes";
import axios from "axios";

interface LessonsProps extends CommonProps {
	selectLesson?: string;
	setSelectLesson: Dispatch<SetStateAction<string>>;
	idCourses: string;
	lesson: Lesson;
}
const Lessons: React.FC<LessonsProps> = ({
	setSelectLesson,
	idCourses,
	lesson,
}) => {
	const [isSections, setIsSections] = useState<string[]>([]);
	const [sectionList, setSectionList] = useState<Section[]>([]);
	const [lessons, setLessons] = useState<Lesson[]>([]);

	useEffect(() => {
		axios
			.get(`http://localhost:5000/sections?courseId=${idCourses}`)
			.then((response) => setSectionList(response.data))
			.catch((error) => console.log(error));
	}, [idCourses]);

	useEffect(() => {
		// Lọc tất cả các lessons từ API theo sectionId trong sectionList
		const sectionIds = sectionList.map((section) => section.id);

		// Nếu sectionList có dữ liệu, lấy lessons tương ứng với các sectionId
		if (sectionIds.length > 0) {
			axios
				.get("http://localhost:5000/lessons")
				.then((response) => {
					const filteredLessons = response.data.filter(
						(lesson: Lesson) =>
							sectionIds.includes(lesson.sectionId)
					);
					setLessons(filteredLessons); // Cập nhật danh sách lessons
				})
				.catch((error) => console.log(error));
		}
	}, [sectionList]);
	useEffect(() => {
		if (lesson) {
			setLessons((prev) => {
				// Cập nhật giá trị có id = lesson.id, phần còn lại giữ nguyên
				return prev.map((lessonItem) =>
					lessonItem.id === lesson.id
						? { ...lessonItem, ...lesson }
						: lessonItem
				);
			});
		}
	}, [lesson]);

	const handleHideSections = (sectionId: string) => {
		setIsSections((prev) => {
			if (prev.includes(sectionId)) {
				return prev.filter((id) => id !== sectionId);
			} else {
				return [...prev, sectionId];
			}
		});
	};
	return (
		<div className="w-3/12 border-l-1 h-full border-b-1">
			<div className="px-5 py-3 bg-white">
				<span className="font-semibold">Nội dung khóa học</span>
			</div>
			<div>
				{sectionList.map((section, iSection) => (
					<div key={iSection + 1}>
						<div
							onClick={() => handleHideSections(section.id)}
							className="px-5 py-3 bg-paleGray cursor-pointer border-b-1"
						>
							<div className="flex-y-between mb-1">
								<span className="font-semibold">
									{iSection + 1}. {section.title}
								</span>
								<FaChevronDown />
							</div>
							<div className="flex items-center gap-3 text-xs">
								<span className="">0/12</span>
								<span>|</span>
								<span>30:55</span>
							</div>
						</div>
						{isSections.includes(section.id) &&
							lessons
								.filter(
									(lesson) => lesson.sectionId === section.id
								)
								.map((lesson, iLesson) => (
									<div
										onClick={() => {
											(iLesson !== 0 &&
												lessons[iLesson - 1].status ===
													"done") ||
											lesson.status === "done" ||
											iLesson === 0
												? setSelectLesson(lesson.id)
												: "";
										}}
										key={iLesson + 1}
										className="flex-y-between px-6 py-3 bg-white cursor-pointer hover:bg-lightPurple hover:bg-opacity-5"
									>
										<div>
											<p className="mb-1 text-black text-sm">
												{iLesson + 1}. {lesson.title}
											</p>
											<div className=" flex items-center gap-2">
												<FaYoutube className="text-darkGray text-sm" />
												<span className="text-xs">
													07:50
												</span>
											</div>
										</div>
										<div className="">
											{lesson.status === "done" ? (
												<MdOutlineDone className="bg-green-500 font-bold text-white p-[2px] text-sm rounded-full" />
											) : (
												<FaLock className="font-bold text-darkGray p-[2px]" />
											)}
										</div>
									</div>
								))}
					</div>
				))}
			</div>
		</div>
	);
};

export default Lessons;
