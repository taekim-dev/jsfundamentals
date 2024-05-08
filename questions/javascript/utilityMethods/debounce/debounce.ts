function debounce(func: (...args: any[]) => void, delay: number): (...args: any[]) => void {
    let timer: any;
    return (...args: any[]) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func(...args);
      }, delay);
    };
  }
  export default debounce;
  