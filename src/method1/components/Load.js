export default class Load {
  constructor(node, props, emit, callback) {
    this.node = node;
    this.props = props;
    this.emit = emit;
    this.callback = callback; // 新增 callback 参数
  }
  loadCreateImg = (errSrc) => {
    const newImg = new Image();

    if (errSrc) {
      newImg.src = errSrc;
    } else {
      newImg.src = this.props.src;
    }

    newImg.addEventListener("error", (evt) => {
      this.onerror(evt);
    });

    newImg.addEventListener("load", (evt) => {
      this.onload(evt, newImg.src);
    });
  };
  onload = (evt, src) => {
    this.node.src = src;
    this.emit("load", evt);

    // 如果 callback 存在，在加载成功的时候返回 true
    if (this.callback) {
      this.callback(true);
    }
  };
  onerror = (evt) => {
    if (this.props.errSrc) {
      this.loadCreateImg(this.props.errSrc);
      this.props.errSrc = "";
      return;
    }

    this.emit("error", evt);
    // 如果 callback 存在，在加载失败的时候返回 false
    if (this.callback) {
      this.callback(false);
    }
  };
}
