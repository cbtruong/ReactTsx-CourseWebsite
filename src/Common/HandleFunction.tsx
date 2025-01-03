export const HandleAppearScroll = (setIsVisible,sectionRef) => {
        if (sectionRef.current) {
          const rect = sectionRef.current.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= window.innerHeight) {
            setIsVisible(true);
          }
          const distanceFromTop = sectionRef.current.getBoundingClientRect().top;
            console.log(`Khoảng cách từ phần tử đến mép trên viewport: ${distanceFromTop}px`,window.innerHeight);
        }
    };