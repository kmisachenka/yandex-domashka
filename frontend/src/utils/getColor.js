import hexToRgba from 'hex-to-rgba';

/* eslint-disable-next-line */
const getColorOrDefault = colors => id => {
  if (id !== undefined) {
    const { color } = colors.find(o => o.id === id);
    const rgba = hexToRgba(color, 0.4);
    return `linear-gradient(0deg, ${rgba}, ${rgba}), #FFFFFF`;
  }
  return '#FFFFFF';
};

export default getColorOrDefault;
