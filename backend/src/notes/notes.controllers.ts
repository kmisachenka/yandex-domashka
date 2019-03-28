import { Request, Response } from 'express';
import { Note } from '../types';

import * as fixture from '../fixture.json';
import Colors from './repositories/Colors';
import Tags from './repositories/Tags';
import Notes from './repositories/Notes';

const notesRepository: Notes = Notes.factory(fixture.notes as Note[]);
const colorsRepository: Colors = Colors.factory(fixture.colors);
const tagsRepository: Tags = Tags.factory(fixture.tags);

export const getAll = (req: Request, res: Response): void => {
  try {
    const { color } = req.query;
    if (color) {
      if (colorsRepository.hasColor(color)) {
        const notes = notesRepository.getByColorId(color);
        res.status(200).json({
          ok: true,
          results: {
            tags: tagsRepository.toArray(),
            colors: colorsRepository.toArray(),
            notes,
          },
        });
        return;
      }
      res.status(400).json({ ok: false, error: 'incorrect color' });
      return;
    }
    const notes = notesRepository.toArray();
    res.status(200).json({
      ok: true,
      results: {
        tags: tagsRepository.toArray(),
        colors: colorsRepository.toArray(),
        notes,
      },
    });
  } catch (error) {
    res.status(500).json({ ok: false, error: error.message });
  }
};

export const getOne = (req: Request, res: Response): void => {
  try {
    const { id } = req.params;
    const note = notesRepository.getOne(id);
    if (!note) {
      res
        .status(400)
        .json({ ok: false, error: `note with id '${id}' doesnt exists` });
      return;
    }
    res.status(200).json({ ok: true, note });
  } catch (error) {
    res.status(500).json({ ok: false, error: error.message });
  }
};

export const createOne = (req: Request, res: Response): void => {
  try {
    const { note } = req.body;
    if (!note) {
      res
        .status(500)
        .json({ ok: false, error: "No 'note' in the request body" });
      return;
    }
    notesRepository.addNote(note);
    res.status(200).json({ ok: true });
  } catch (error) {
    res.status(500).json({ ok: false, error: error.message });
  }
};

export const removeOne = (req: Request, res: Response): void => {
  try {
    const { id } = req.params;
    notesRepository.removeOne(id);
    res.status(200).json({ ok: true });
  } catch (error) {
    res.status(500).json({ ok: false, error: error.message });
  }
};

export const updateOne = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { note } = req.body;
    notesRepository.updateOne(id, note);
    res.status(200).json({ ok: true });
  } catch (error) {
    res.status(500).json({ ok: false, error: error.message });
  }
};
