import {
  StreamCreate,
  StreamDelete,
  StreamEdit,
  StreamList,
  StreamShow,
} from "../views";

const routes = [
  {
    path: "/",
    element: <StreamList />,
  },
  {
    path: "/streams/new",
    element: <StreamCreate />,
  },
  {
    path: "/streams/edit",
    element: <StreamEdit />,
  },
  {
    path: "/streams/delete",
    element: <StreamDelete />,
  },
  {
    path: "streams/show",
    element: <StreamShow />,
  },
];

export default routes;
