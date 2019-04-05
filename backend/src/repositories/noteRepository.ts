import { Note } from '../types';
import Notes from '../models/Notes';
import * as fixture from '../fixture.json';

const noteRepository: Notes = Notes.factory(fixture.notes as Note[]);

export default noteRepository;
