import { Positions } from '@constants/positions';

export const getUrl = (position: Positions) => {
  return `http://localhost:9000/iframe.html?args=position:${position};backgroundColor:!hex(391fdb);textColor:!hex(ffffff);toastDuration:3000&globals=backgrounds.grid:!false&viewMode=story&id=test-toast--test-toast`;
};

export const getUrlForColors = (color: string = 'ffffff', bgColor: string = '37E29A') => {
  return `http://localhost:9000/iframe.html?args=backgroundColor:!hex(${bgColor});textColor:!hex(${color});toastDuration:5000&globals=backgrounds.grid:!false&viewMode=story&id=test-toast--test-toast`;
};

export const getUrlForText = () => {
  return `http://localhost:9000/iframe.html?args=position:top-left;title:Title+text;description:description+text;backgroundColor:!hex(391fdb);textColor:!hex(ffffff);toastDuration:3000&globals=backgrounds.grid:!false&viewMode=story&id=test-toast--test-toast`;
};
