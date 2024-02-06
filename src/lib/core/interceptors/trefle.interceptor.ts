import { HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { OT_ENVIRONMENT } from '../tokens/environment.token';

export const trefleInterceptor = (req: HttpRequest<any>, next: HttpHandlerFn) => {
  if (!req.url.startsWith('trefle')) return next(req);
  const env = inject(OT_ENVIRONMENT);
  const url = req.url.replace('trefle', env.trefle);
  req = req.clone({ url });
  return next(req);
};
