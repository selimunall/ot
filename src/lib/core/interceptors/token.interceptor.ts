import { HttpHandlerFn, HttpRequest } from '@angular/common/http';

export const tokenInterceptor = (req: HttpRequest<any>, next: HttpHandlerFn) => {
  console.log(req);
  console.log(req.params);
  console.log(req.urlWithParams);
  console.log(req.url);
  console.log(req.withCredentials);
  return next(req);
};
