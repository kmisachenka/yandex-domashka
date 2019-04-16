import { Request, Response, NextFunction } from 'express';

import { Note } from '../../types';
import noteRepository from '../../repositories/noteRepository';

export const getArchive = (
  req: Request,
  res: Response,
  next: NextFunction
): Response | void => {
  try {
    const notes = noteRepository.filter(note => Boolean(note.archived));
    res.status(200).json({ ok: true, results: notes.toArray() });
  } catch (error) {
    next(error);
  }
};

export const archiveOne = (
  req: Request,
  res: Response,
  next: NextFunction
): Response | void => {
  try {
    const { id } = req.params;
    const note: Note | undefined = noteRepository.getOne(id);
    if (note) {
      note.archived = true;
      noteRepository.updateOne(id, note);
      res.status(200).json({ ok: true });
      return;
    }
    res
      .status(400)
      .json({ ok: false, error: `note with id '${id}' doesnt exists` });
  } catch (error) {
    next(error);
  }
};
