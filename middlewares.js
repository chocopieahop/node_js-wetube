import multer from "multer";
import routes from "./routes";

const multerVideo = multer({ dest: "uploads/videos/" });

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "WeTube";
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: true,
    id: 1,
  };
  next();
};

export const uploadVideo = multerVideo.single("videoFile");
//middleware가 next에 req를 전달해야 하는데
//이 경우에 middleware가 커넥션과 라우트들 사이에 있으니까(app.js에서) next()라고 하면 됨.
//i.fab.fa-youtube
//<i class="fab fa-youtube"></i>
