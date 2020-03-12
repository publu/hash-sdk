import {stylesMain} from '../ui-modules/styles/stylesMain';

export const customElementInjector = async(element:string|HTMLElement,targetTag='body' as string) =>{

    if(!document.querySelector('#hash-sdk-style')){
        const styleTag :HTMLStyleElement= document.createElement("style");
        styleTag.id = 'hash-sdk-style'
        styleTag.innerHTML = stylesMain;
        document.getElementsByTagName("head")[0].appendChild(styleTag);
    }
    
    const customElement :HTMLElement= typeof element === 'string' ? document.createElement(element) : element;
    const parentTag = document.querySelector(targetTag);
    parentTag && parentTag.appendChild(customElement);
} 

export const elementDestructor = (element:string|HTMLElement):void =>{
    const customElementName :string= typeof element === 'string' ? element : element.tagName.toLowerCase();
    const targetTag = document.querySelector(customElementName);
    targetTag && targetTag.parentNode && targetTag.parentNode.removeChild(targetTag);
}
