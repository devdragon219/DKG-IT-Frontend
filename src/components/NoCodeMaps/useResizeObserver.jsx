import { useLayoutEffect, useRef } from "react";

function useResizeObserver(callback) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const element = ref?.current;

    if (!element) {
      return;
    }

    const observer = new ResizeObserver((entries) => {
      callback(element, entries[0]);
    });

    observer.observe(element);

    if (element?.offsetParent) {
      observer.observe(element?.offsetParent);
    }

    if (element?.offsetParent.children?.[0]) {
      observer.observe(element?.offsetParent.children?.[0]);
    }

    if (element?.children?.[0]) {
      observer.observe(element?.children?.[0]);
    }

    return () => {
      observer.disconnect();
    };
  }, [callback, ref]);

  return ref;
}

export default useResizeObserver;
