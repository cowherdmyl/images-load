import Lazy from "./components/Lazy.js";
import Load from "./components/Load.js";

const loadImage = (node, prop, emit, callback) => {
  if (prop.lazy) {
    const lazy = new Lazy(node, prop, emit, callback);
    return lazy.lazyCreateImg();
  }
  const load = new Load(node, prop, emit, callback);
  load.loadCreateImg();
};

export default loadImage;
