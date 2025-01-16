export const HandleAppearScroll = (sectionRef) => {
	if (sectionRef.current) {
		const rect = sectionRef.current.getBoundingClientRect();
    const h=window.innerHeight;
		if (rect.top >= (h-h/6)) {
      sectionRef.current.classList.remove("opacity-100", "translate-y-0");
      sectionRef.current.classList.add("opacity-0", "translate-y-2");
    } else {
			sectionRef.current.classList.remove("opacity-0", "translate-y-2");
			sectionRef.current.classList.add("opacity-100", "translate-y-0");
		}
	}
};
