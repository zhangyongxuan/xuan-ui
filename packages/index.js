import ptc from './x-picture-to-char';
import vtc from './x-video-to-char';
import icon from './x-icon';

const components = [ptc, vtc,icon];


export default {
    install: (App) => {
        components.forEach((item) => {
            App.component(item.name, item);
        });
    }
}
export const pictureToChar = ptc;
export const videoToChar = vtc;
export const xIcon = icon;

