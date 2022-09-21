import Ptc from './x-picture-to-char';
import Vtc from './x-video-to-char';
import Icon from './x-icon';

const components = [Ptc, Vtc,Icon];


export default {
    install: (App) => {
        components.forEach((item) => {
            App.component(item.name, item);
        });
    }
}
export const XPictureToChar = Ptc;
export const XVideoToChar = Vtc;
export const XIcon = Icon;

