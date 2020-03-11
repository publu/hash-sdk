import {
    customElementInjector,
    elementDestructor
} from '../../ui-utils/index';
import { theme } from '../../constants/style';
import {Images} from '../../images';

const myCustomElement = 'middleware-selector';
const customElementModalTitle = 'Select a middleware';

interface IcardData{
    id:string,
    title:string,
    description:string,
    imagePath:string,
    active:Boolean,
    recommended:Boolean
}

const cardData :Array<IcardData>= [
    {
        id:'option-1',
        title:'Hardware',
        description:'Ledger Nano (Hardware Wallet)',
        imagePath: Images.hardwareWallet,
        active:false,
        recommended:true
    },
    {
        id:'option-2',
        title:'Composer',
        description:'Extension based wallet (Private Key, Keystore, Mnemonic phrase)',
        imagePath: Images.composerLogo,
        active:true,
        recommended:true
    },
    {
        id:'option-3',
        title:'Software',
        description:'SDK based wallet (Private Key, Keystore, Mnemonic phrase)',
        imagePath: Images.softwareSDKImage,
        active:true,
        recommended:false
    },

]

export const renderMiddlewareSelectorUI =(cb?:Function)=> {
    
    //@TODO expose theme options
    const t = theme['default'];

    try{

        // Element creation.
        const parentDiv = document.createElement(myCustomElement);
        const modalContainer = document.createElement('div');
        const modalHeader = document.createElement('div');
        const modalBody = document.createElement('div');
        const modalFooter = document.createElement('div');
        const cancelButton = document.createElement('span');
        const modalTitle = document.createElement('span');
        
        // // Element Identification
        // parentDiv.setAttribute('class','modal-parent');
        // modalContainer.setAttribute('class','modal-container');
        // modalHeader.setAttribute('class','modal-header');
        // modalFooter.setAttribute('class','modal-footer');
        // cancelButton.setAttribute('class','cancel-btn');
    
        //Styling the Elements

        parentDiv.style.cssText=`position:fixed;display:flex;align-items: center;justify-content:center;width:100%;height:100%;left:0;top:0;overflow:hidden;z-index:${t.modalZindex};background:${t.modalOverlayColor};`;
        modalContainer.style.cssText=`position:relative;width:100%;max-width:600px;max-height:800px;margin:15px;background:${t.white};border-radius:${t.modalRadius};`;
        modalHeader.style.cssText=`display: flex;justify-content: space-between;background:${t.primaryColor};padding: 14px 16px;border-top-left-radius: ${t.modalRadius};border-top-right-radius: ${t.modalRadius};color: ${t.white};`
        modalBody.style.cssText=`display:flex;flex-wrap:wrap`
        modalTitle.style.cssText=`font-size:20px;`
        cancelButton.style.cssText=`font-size:20px;cursor:pointer`

        // Fetching dynamic variables
        cancelButton.innerHTML="&#x2715";
        modalTitle.innerHTML=`${customElementModalTitle}`;
        
        renderUICard(cardData,modalBody,(opt:IcardData)=>{
            cb && cb(opt);
        });

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
    }

}

const renderUICard = (data:Array<IcardData>,targetElement:HTMLElement,cb?:Function):void =>{
    if(Array.isArray(data) && data.length>0){

        for(let d of data){
            const cardData :IcardData= d;
            const newUICard = document.createElement('div');
            newUICard.id = cardData.id;
            newUICard.style.cssText = `${cardData.active ? 'cursor:pointer;':'pointer-events:none;filter: grayscale(1);background: rgba(0,0,0,0.1);'}
            padding:18px 12px;margin:25px 18px;border-radius:6px;
            flex:1;display:flex;flex-direction:column;align-items:center;
            box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.3);
            -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.3);
            -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.3);
            text-align:center;min-width: 100px;
            `

            //Image
            const cardImg = document.createElement('img');
            cardImg.src = cardData.imagePath;
            cardImg.style.cssText = `width:60px;height:auto;`;

            // Title Text
            const titleTextEle = document.createElement('div');
            titleTextEle.innerHTML = cardData.title;
            titleTextEle.style.cssText = `margin-top: 8px;font-size: 18px;`;

            // Description Text
            const desc = document.createElement('div');
            desc.innerHTML = cardData.description;
            desc.style.cssText = `margin-top: 6px;font-size: 12px;color:rgba(0,0,0,0.6);font-style:italic`;
            
            // Recommendation
            const notRecommended = document.createElement('div');
            notRecommended.innerHTML = cardData.recommended ? '' : 'Not Recommended';
            notRecommended.style.cssText = `margin-top: 6px;font-size: 12px;color:rgb(234, 92, 110,0.7)`;

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


export const removeMiddlewareUI=()=>{
    elementDestructor(myCustomElement);
}