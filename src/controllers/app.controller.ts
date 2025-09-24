import { Request, Response, NextFunction } from 'express';
import { Url } from '../models/url';
/**
`POST` /api/urls/shorten
Req: Long URL
Res: Shrot URL
 */

export const postUrl = (req: Request, res: Response, next: NextFunction) => {
  // make a shorten url
  const shortneUrl = 'tests';
  const url: Url = { url: shortneUrl };
  // store the url into the cache
  // res
  res.status(201).json(url);
};
/**
`GET` /api/urls/{shortUrl}
Res: Redirect 301
 */
export const getUrl = (req: Request, res: Response, next: NextFunction) => {
  try {
    const url: Url = { url: 'test' };
    res.status(301).json(url);
  } catch (e) {
    next(e);
  }
};
