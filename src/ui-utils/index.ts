export const customElementInjector = (element:string|HTMLElement,targetTag='body' as string):void =>{
    const customElement :HTMLElement= typeof element === 'string' ? document.createElement(element) : element;
    const parentTag = document.querySelector(targetTag);
    parentTag && parentTag.appendChild(customElement);
} 

export const elementDestructor = (element:string|HTMLElement):void =>{
    const customElementName :string= typeof element === 'string' ? element : element.tagName.toLowerCase();
    const targetTag = document.querySelector(customElementName);
    targetTag && targetTag.parentNode && targetTag.parentNode.removeChild(targetTag);
}
