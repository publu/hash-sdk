import {
    customElementInjector,
    elementDestructor
} from '../../ui-utils/index';
import {Images} from '../../images';
import {cardStyle} from '../../ui-modules/styles/cardStyle';

const myCustomElement = 'middleware-selector';
const customElementModalTitle = 'Select a middleware';

interface IcardData{
    id:string,
    title:string,
    provider:string,
    description:string,
    imagePath:string,
    active:Boolean,
    recommended:Boolean
}

const cardData :Array<IcardData>= [
    {
        id:'option-1',
        title:'Hardware',
        provider:'hardware',
        description:'Ledger Nano (Hardware Wallet)',
        imagePath: Images.hardwareWallet,
        active:false,
        recommended:true
    },
    {
        id:'option-2',
        title:'Composer',
        provider:'composer',
        description:'Extension based wallet (Private Key, Keystore, Mnemonic phrase)',
        imagePath: Images.composerLogo,
        active:true,
        recommended:true
    },
    {
        id:'option-3',
        title:'Software',
        provider:'software',
        description:'SDK based wallet (Private Key, Keystore, Mnemonic phrase)',
        imagePath: Images.softwareSDKImage,
        active:true,
        recommended:false
    },

]

export const renderMiddlewareSelectorUI =(cb?:Function)=> {
    
    //@TODO expose theme options
   // const t = theme['default'];

    try{

        // Element creation.
        const parentDiv = document.createElement(myCustomElement);
        const modalContainer = document.createElement('div');
        const modalHeader = document.createElement('div');
        const modalBody = document.createElement('div');
        const modalFooter = document.createElement('div');
        const cancelButton = document.createElement('span');
        const modalTitle = document.createElement('span');
        
        // Element Identification
        parentDiv.setAttribute('class','modal-parent');
        modalContainer.setAttribute('class','modal-container');
        modalHeader.setAttribute('class','modal-header');
        modalFooter.setAttribute('class','modal-footer');
        modalBody.setAttribute('class','modal-body');
        modalTitle.setAttribute('class','modal-title');
        cancelButton.setAttribute('class','cancel-btn');

        // Fetching dynamic variables
        cancelButton.innerHTML="&#x2715";
        modalTitle.innerHTML=`${customElementModalTitle}`;
        
        renderUICard(cardData,modalBody,(opt:IcardData)=>{
            cb && cb(null,opt);
            removeMiddlewareUI();
        });

        parentDiv.onclick = function(event:any){
            if(event && event.target && event.target.tagName && event.target.tagName.toLowerCase() === myCustomElement){
                removeMiddlewareUI();
            }
        }

        cancelButton.onclick = function(){
            removeMiddlewareUI();
        }
        
        // Element Merging and Finalization
        modalHeader.appendChild(modalTitle);
        modalHeader.appendChild(cancelButton);
        modalContainer.appendChild(modalHeader);
        modalContainer.appendChild(modalBody);
        modalContainer.appendChild(modalFooter);
        parentDiv.appendChild(modalContainer);
        customElementInjector(parentDiv);
            
    }catch(e){
        console.error('Error in renderMiddlewareSelectorUI:::',e);
        cb && cb(e);
    }

}

const renderUICard = (data:Array<IcardData>,targetElement:HTMLElement,cb?:Function):void =>{
    
    if(!document.querySelector('#hash-card-style')){
        const styleTag :HTMLStyleElement= document.createElement("style");
        styleTag.id = 'hash-card-style';
        styleTag.innerHTML = cardStyle;
        document.getElementsByTagName("head")[0].appendChild(styleTag);
    }

    if(Array.isArray(data) && data.length>0){

        for(let d of data){
            const cardData :IcardData= d;
            const newUICard = document.createElement('middleware-card');
            newUICard.id = cardData.id;
            newUICard.setAttribute('class','card-container');

            newUICard.style.cssText = `${cardData.active ? 'cursor:pointer;':'pointer-events:none;filter: grayscale(1);background: rgba(0,0,0,0.1);'}`

            //Image
            const cardImg = document.createElement('img');
            cardImg.setAttribute('class','card-img');
            cardImg.src = cardData.imagePath;

            // Title Text
            const titleTextEle = document.createElement('div');
            titleTextEle.setAttribute('class','card-title');
            titleTextEle.innerHTML = cardData.title;

            // Description Text
            const desc = document.createElement('div');
            desc.setAttribute('class','card-desc');
            desc.innerHTML = cardData.description;
            
            // Recommendation
            const notRecommended = document.createElement('div');
            notRecommended.setAttribute('class','card-recommended');
            notRecommended.innerHTML = cardData.recommended ? '' : 'Not Recommended';

            newUICard.appendChild(cardImg);
            newUICard.appendChild(titleTextEle);
            newUICard.appendChild(desc);
            newUICard.appendChild(notRecommended);

            newUICard.onclick = function(){
                cb && cb(d);
            }

            targetElement.appendChild(newUICard);
        }
    }
}


export const removeMiddlewareUI =()=> {
    const cardStyleTag :any= document.querySelector('#hash-card-style');
    if(cardStyleTag){
        elementDestructor(cardStyleTag);
    }
    elementDestructor(myCustomElement);
}