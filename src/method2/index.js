// 防抖函数
function debounce(fn, delay = 500) {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.call(this, args);
    }, delay);
  };
}

export default class ImgLazyLoad {
  constructor(config) {
    // @TODO 校验参数为空
    this.#parentEl = config.parentEl;
    this.#imgs = config.imgs;
    this.#urls = config.urls
    this.addEvent();
  }

  #parentEl = "";
  #imgs = [];
  #urls = [];
  #num = 0;

  static init(c) {
    return new ImgLazyLoad(c);
  }

  lazyload = () => {
    const viewHeight = this.#parentEl.clientHeight; // 获取可视区域的高度
    for (let i = this.#num; i < this.#imgs.length; i++) {
      let distance = viewHeight - this.#imgs[i].getBoundingClientRect().top; // 如果可视区域高度大于等于元素顶部距离可视区域顶部的高度，说明元素露出
      if (distance >= 0) {
        this.#imgs[i].src = this.#urls[i]
        this.#num = i + 1;
      }
    }
  };

  addEvent() {
    window.onload = this.lazyload; //加载首屏图片
    this.#parentEl.addEventListener("scroll", debounce(this.lazyload, 100), false);
  }
}
