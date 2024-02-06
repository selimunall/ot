import { HttpHandlerFn, HttpRequest } from '@angular/common/http';

export const tokenInterceptor = (req: HttpRequest<any>, next: HttpHandlerFn) => {
  if (!req.url.startsWith('trefle')) return next(req);
  return next(req);
};
