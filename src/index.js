import Lazy from "./Lazy";
import Load from "./Load";

export const loadImage = (node, prop, emit, callback) => {
  if (prop.lazy) {
    const lazy = new Lazy(node, prop, emit, callback);
    return lazy.lazyCreateImg();
  }
  const load = new Load(node, prop, emit, callback);
  load.loadCreateImg();
};
