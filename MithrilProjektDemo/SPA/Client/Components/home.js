"use strict";
import navbar from "./navbar.js";
import banner from './banner.js';
import footer from './footer.js';



let home = {

  view: function () {
    return [
      m(banner),
      m(navbar),
      m('.limiter',[
        m("p", "Auf dieser Demo Webseite können Sie Corona Informationen einsehen. Sie müssen nur mit der Maus in der Navigationsleiste auf Search for hovern und dann können Sie schon nach Impfungen in einem Land suchen oder nach Allgemeinen Daten eines Landes "),
        m(
          "p",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate sagittis magna, in facilisis eros. Nulla laoreet odio tortor, quis aliquam libero varius eget. Morbi feugiat finibus mauris ut iaculis. Duis eu imperdiet velit. Nulla facilisi. Duis tempus ullamcorper turpis, sit amet sollicitudin purus tempor id. Vestibulum porttitor sed enim id vestibulum. Nulla facilisi. In eget luctus sapien. Cras facilisis aliquam enim sed dignissim. Ut bibendum ipsum ut tortor facilisis consequat. Suspendisse accumsan arcu eros, at rutrum sapien gravida eget. Donec libero risus, tristique vitae ornare a, suscipit in elit. Suspendisse justo turpis, laoreet id erat eu, rhoncus semper arcu. Sed eget ante libero. Fusce enim sapien, egestas eu molestie at, rutrum eu nibh."
        ),
        m(
          "p",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate sagittis magna, in facilisis eros. Nulla laoreet odio tortor, quis aliquam libero varius eget. Morbi feugiat finibus mauris ut iaculis. Duis eu imperdiet velit. Nulla facilisi. Duis tempus ullamcorper turpis, sit amet sollicitudin purus tempor id. Vestibulum porttitor sed enim id vestibulum. Nulla facilisi. In eget luctus sapien. Cras facilisis aliquam enim sed dignissim. Ut bibendum ipsum ut tortor facilisis consequat. Suspendisse accumsan arcu eros, at rutrum sapien gravida eget. Donec libero risus, tristique vitae ornare a, suscipit in elit. Suspendisse justo turpis, laoreet id erat eu, rhoncus semper arcu. Sed eget ante libero. Fusce enim sapien, egestas eu molestie at, rutrum eu nibh."
        ),
        m(
          "p",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate sagittis magna, in facilisis eros. Nulla laoreet odio tortor, quis aliquam libero varius eget. Morbi feugiat finibus mauris ut iaculis. Duis eu imperdiet velit. Nulla facilisi. Duis tempus ullamcorper turpis, sit amet sollicitudin purus tempor id. Vestibulum porttitor sed enim id vestibulum. Nulla facilisi. In eget luctus sapien. Cras facilisis aliquam enim sed dignissim. Ut bibendum ipsum ut tortor facilisis consequat. Suspendisse accumsan arcu eros, at rutrum sapien gravida eget. Donec libero risus, tristique vitae ornare a, suscipit in elit. Suspendisse justo turpis, laoreet id erat eu, rhoncus semper arcu. Sed eget ante libero. Fusce enim sapien, egestas eu molestie at, rutrum eu nibh."
        ),
        m(
          "p",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate sagittis magna, in facilisis eros. Nulla laoreet odio tortor, quis aliquam libero varius eget. Morbi feugiat finibus mauris ut iaculis. Duis eu imperdiet velit. Nulla facilisi. Duis tempus ullamcorper turpis, sit amet sollicitudin purus tempor id. Vestibulum porttitor sed enim id vestibulum. Nulla facilisi. In eget luctus sapien. Cras facilisis aliquam enim sed dignissim. Ut bibendum ipsum ut tortor facilisis consequat. Suspendisse accumsan arcu eros, at rutrum sapien gravida eget. Donec libero risus, tristique vitae ornare a, suscipit in elit. Suspendisse justo turpis, laoreet id erat eu, rhoncus semper arcu. Sed eget ante libero. Fusce enim sapien, egestas eu molestie at, rutrum eu nibh."
        ),
      ]),
      m(footer),
    ];
  },
};

export default home;
