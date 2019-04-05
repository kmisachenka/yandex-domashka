import Colors from '../models/Colors';
import * as fixture from '../fixture.json';

const colorRepository: Colors = Colors.factory(fixture.colors);

export default colorRepository;
