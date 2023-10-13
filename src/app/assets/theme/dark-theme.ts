import { Theme } from './symbols';

export const darkTheme: Theme = {
  name: 'dark',
  properties: {
    '--primary-background': '#3B4252',
    '--secondary-background': '#ECEFF4',

    '--primary-form-background': '#FFFFFF',
    '--secondary-form-background': '#D8DEE9',

    '--primary-font-color': '#3B4252',
    '--secondary-font-color': '#D8DEE9',
    '--primary-hover-color': '#3B4252',
    '--secondary-hover-color': '#D8DEE9',

    '--primary-btn-color': '#D8DEE9',
    '--secondary-btn-color': '#FFFFFF',

    '--success': '#68AB6B',
    '--warning': '#BABC51',
    '--danger': '#C00000',
    '--svg-brightness': '2',
  },
};
