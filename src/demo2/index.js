/**
 * mehtod2 的使用demo
 */
import ImgLazyLoad from "../method2/index.js";

const parentEl = document.getElementById("imgBox");
const imgs = document.querySelectorAll("img");
const urls = [
  "https://img2.baidu.com/it/u=2248863795,4033026016&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800",
  "https://img1.baidu.com/it/u=1845556535,2973910963&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",
  "https://img2.baidu.com/it/u=4029214852,4040556744&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",
  "https://img0.baidu.com/it/u=1104189599,2845209529&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
  "https://img2.baidu.com/it/u=923478948,106462584&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281",
  "https://img1.baidu.com/it/u=3553753688,1018415444&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800",
  "https://img0.baidu.com/it/u=2923406337,3064763995&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800",
  "https://img0.baidu.com/it/u=689789102,338478586&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
  "https://img2.baidu.com/it/u=3592260762,468495165&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",
  "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2Fb%2F568e0e5a339f9.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1671169555&t=7e6b66b9f2b5c76899bce92a6a803f59",
  "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2Fc%2F5848bd9879fa6.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1671169555&t=eb73a29c05da9740ded5dea8e064aec3",
  "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Flmg.jj20.com%2Fup%2Fallimg%2F811%2F012515104431%2F150125104431-4-1200.jpg&refer=http%3A%2F%2Flmg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1671169555&t=ae04cfbffed32d91ca416c7f64285e5e",
  "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Flmg.jj20.com%2Fup%2Fallimg%2F1114%2F0Q620141250%2F200Q6141250-5-1200.jpg&refer=http%3A%2F%2Flmg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1671169555&t=60e695106e6092cf01caca2603456604",
  "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Flmg.jj20.com%2Fup%2Fallimg%2F512%2F0HG2123938%2F120HG23938-6-1200.jpg&refer=http%3A%2F%2Flmg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1671169555&t=86386a98809a5408a78f41aa6a548248",
  "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Flmg.jj20.com%2Fup%2Fallimg%2F1113%2F112119120128%2F191121120128-11-1200.jpg&refer=http%3A%2F%2Flmg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1671169555&t=40340d475942a4e5e771f48038610782",
];

ImgLazyLoad.init({ parentEl, imgs, urls });
