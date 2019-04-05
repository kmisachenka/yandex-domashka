import { Request, Response, NextFunction } from 'express';
import * as tinify from 'tinify';

// @ts-ignore
tinify.key = process.env.TINIFY_KEY;

/*
Простой кэш
Если оптимизированная картинка есть в кэше - отдаем её
Если нет - оптимизируем, кладем в кэш и отдаем её

*/
const cache = new Map<string, Buffer>();

const getOne = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  try {
    const url = req.params['0'];
    if (cache.has(url)) {
      const buffer = cache.get(url);
      res.send(buffer);
    } else {
      // @ts-ignore
      const src = await tinify.fromUrl(url);
      const buffer: Buffer = await src.toBuffer();
      cache.set(url, buffer);
      res.send(buffer);
    }
  } catch (error) {
    next(error);
  }
};

/* eslint-disable-next-line import/prefer-default-export */
export { getOne };
