export const addingStyleOnPageScroll = (payload: {
  className: string;
  scrollTrigger: number;
  elementId: string;
}) => {
  const { className, scrollTrigger, elementId } = payload;
  if (typeof window !== "undefined") {
    window.onscroll = function () {
      if (
        window.scrollY >= scrollTrigger ||
        window.pageYOffset >= scrollTrigger
      ) {
        document.getElementById(elementId)?.classList.add(className);
      } else {
        document.getElementById(elementId)?.classList.remove(className);
      }
    };
  }
};
