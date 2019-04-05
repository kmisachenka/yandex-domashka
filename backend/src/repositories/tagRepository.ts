import Tags from '../models/Tags';
import * as fixture from '../fixture.json';

const tagsRepository: Tags = Tags.factory(fixture.tags);

export default tagsRepository;
