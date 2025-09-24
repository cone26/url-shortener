import { Request, Response, NextFunction } from 'express';
import { Url } from '../models/url';
/**
`POST` /api/urls/shorten
Req: Long URL
Res: Shrot URL
 */

/**
`GET` /api/urls/{shortUrl}
Res: Redirect 301
 */
export const getUrls = (req: Request, res: Response, next: NextFunction) => {
  try {
    const url: Url = { url: 'test' };
    res.status(301).json(url);
  } catch (e) {
    next(e);
  }
};
