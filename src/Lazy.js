import Load from "./Load.js";

export default class Lazy extends Load {
  constructor(img, props, emit, callback) {
    super(img, props, emit, callback);
  }
  observer = () => {
    const observer = new IntersectionObserver(
      (arr) => {
        if (arr[0].isIntersecting) {
          this.loadCreateImg();
          observer.unobserve(this.node);
        }
      },
      { rootMargin: this.props.rootMargin }
    );
    return observer;
  };
  lazyCreateImg = () => {
    this.observer().observe(this.node);
  };
}
