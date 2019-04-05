import { Request, Response, NextFunction } from 'express';

import noteRepository from '../../repositories/noteRepository';
import tagRepository from '../../repositories/tagRepository';
import colorRepository from '../../repositories/colorRepository';

export const getAll = (
  req: Request,
  res: Response,
  next: NextFunction
): Response | void => {
  try {
    const { color } = req.query;
    if (color) {
      if (colorRepository.hasColor(color)) {
        const notes = noteRepository.getByColorId(color);
        res.status(200).json({
          ok: true,
          results: {
            tags: tagRepository.toArray(),
            colors: colorRepository.toArray(),
            notes,
          },
        });
        return;
      }
      res.status(400).json({ ok: false, error: 'incorrect color' });
      return;
    }
    const notes = noteRepository.filter(note => !note.archived).toArray();
    res.status(200).json({
      ok: true,
      results: {
        tags: tagRepository.toArray(),
        colors: colorRepository.toArray(),
        notes,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const getOne = (
  req: Request,
  res: Response,
  next: NextFunction
): Response | void => {
  try {
    const { id } = req.params;
    const note = noteRepository.getOne(id);
    if (!note) {
      res
        .status(400)
        .json({ ok: false, error: `note with id '${id}' doesnt exists` });
      return;
    }
    res.status(200).json({ ok: true, note });
  } catch (error) {
    next(error);
  }
};

export const createOne = (
  req: Request,
  res: Response,
  next: NextFunction
): Response | void => {
  try {
    const { note } = req.body;
    if (!note) {
      res
        .status(500)
        .json({ ok: false, error: "No 'note' in the request body" });
      return;
    }
    noteRepository.addNote(note);
    res.status(200).json({ ok: true });
  } catch (error) {
    next(error);
  }
};

export const removeOne = (
  req: Request,
  res: Response,
  next: NextFunction
): Response | void => {
  try {
    const { id } = req.params;
    noteRepository.removeOne(id);
    res.status(200).json({ ok: true });
  } catch (error) {
    next(error);
  }
};

export const updateOne = (
  req: Request,
  res: Response,
  next: NextFunction
): Response | void => {
  try {
    const { id } = req.params;
    const { note } = req.body;
    noteRepository.updateOne(id, note);
    res.status(200).json({ ok: true });
  } catch (error) {
    next(error);
  }
};
