import {
    customElementInjector,
    elementDestructor
} from '../../ui-utils/index';
import { accountStyle } from '../styles/accountStyle';

interface INetwork{
    id:string,
    title:string,
    value:string
}

const myCustomElement = 'account-setter';
const customElementModalTitle = 'Set account';
const networks:Array<INetwork> = [
    {
        id:"n1",
        title:'Test Network',
        value:'testnet'
    },
    {
        id:"n2",
        title:'Main Network',
        value:'mainnet'
    }
]

export const renderAccountSetterUI =(cb?:Function)=> {

    try{

        // Element creation.
        const parentDiv = document.createElement(myCustomElement);
        const modalContainer = document.createElement('div');
        const modalHeader = document.createElement('div');
        const modalBody = document.createElement('div');
        const modalBodyWrapper = document.createElement('div');
        const modalFooter = document.createElement('div');
        const closeButton = document.createElement('span');
        const modalTitle = document.createElement('span');

        const networkInput = document.createElement('select');
        const accountIdInput = document.createElement('input');
        const privateInput = document.createElement('input');

        const confirmButton = document.createElement('button');
        const cancelButton = document.createElement('button');



        // Element Styles
        if(!document.querySelector(`#${myCustomElement}-style`)){
            const styleTag :HTMLStyleElement= document.createElement("style");
            styleTag.id = 'hash-sdk-style'
            styleTag.innerHTML = accountStyle;
            document.getElementsByTagName("head")[0].appendChild(styleTag);
        }
        
        // Element Identification
        parentDiv.setAttribute('class','modal-parent');
        modalContainer.setAttribute('class','modal-container');
        modalHeader.setAttribute('class','modal-header');
        modalFooter.setAttribute('class','modal-footer');
        modalBody.setAttribute('class','modal-body');
        modalBodyWrapper.setAttribute('class','modal-body-wrapper');
        modalTitle.setAttribute('class','modal-title');
        cancelButton.setAttribute('class','cancel-btn');
        confirmButton.setAttribute('class','confirm-btn');

        networkInput.setAttribute('class','network-input');
        accountIdInput.setAttribute('class','account-input');
        privateInput.setAttribute('class','account-input');


        // Fetching dynamic variables
        closeButton.innerHTML="&#x2715";
        accountIdInput.placeholder = ' 0.0.1234(Account Id)';
        privateInput.placeholder = ' Private Key';

        modalTitle.innerHTML=`${customElementModalTitle}`;
        cancelButton.innerHTML = 'CANCEL';
        confirmButton.innerHTML = 'VALIDATE & SET';
        networks.forEach((n,i)=>{
            if(i===0){
                const option = document.createElement('option');
                option.setAttribute('key',i.toString());
                option.innerHTML = 'Choose Network';
                option.selected = true;
                option.disabled = true;
                networkInput.appendChild(option);
            }
            const option = document.createElement('option');
            option.setAttribute('key',(i+1).toString());
            option.innerHTML = n.title;
            option.value=n.value;
            networkInput.appendChild(option);
        })
        

        renderLabeledWrappedUI('Network',networkInput,modalBodyWrapper);
        renderLabeledWrappedUI('Account Id',accountIdInput,modalBodyWrapper);
        renderLabeledWrappedUI('Private Key',privateInput,modalBodyWrapper);


        parentDiv.onclick = function(event:any){
            if(event && event.target && event.target.tagName && event.target.tagName.toLowerCase() === myCustomElement){
                removeAccountSetterUI();
            }
        }

        closeButton.onclick = function(){
            removeAccountSetterUI();
        }

        cancelButton.onclick = function(){
            removeAccountSetterUI();
        }
        
        confirmButton.onclick = function(){
            let accountData = {
                accountId : accountIdInput.value,
                network : networkInput.value,
                keys : {
                    privateKey:privateInput.value
                },
                mnemonics:''
            }
            handleSetAccount(accountData);
        }

        // Element Merging and Finalization
        modalHeader.appendChild(modalTitle);
        modalHeader.appendChild(cancelButton);
        modalContainer.appendChild(modalHeader);
        modalBody.appendChild(modalBodyWrapper);
        modalContainer.appendChild(modalBody);
        modalFooter.appendChild(cancelButton);
        modalFooter.appendChild(confirmButton);        
        modalContainer.appendChild(modalFooter);
        parentDiv.appendChild(modalContainer);
        customElementInjector(parentDiv);
            
    }catch(e){
        console.error('Error in renderMiddlewareSelectorUI:::',e);
        cb && cb(e);
    }

}

const renderLabeledWrappedUI = (labelText:string,inputElement:HTMLElement,targetElement:HTMLElement) =>{
    const inputWrapper = document.createElement('div');
    const label = document.createElement('div');

    inputWrapper.setAttribute('class','input-wrapper');
    label.setAttribute('class','label-input');

    label.innerHTML = labelText;
    inputElement.setAttribute('class','input-ele')
    inputWrapper.appendChild(label);
    inputWrapper.appendChild(inputElement);
    targetElement.appendChild(inputWrapper); 
}

const removeAccountSetterUI =()=> {
    if(!document.querySelector('#hash-sdk-style')){
        const styleTag :HTMLStyleElement= document.createElement("style");
        styleTag.id = 'hash-sdk-style'
        styleTag.innerHTML = accountStyle;
        document.getElementsByTagName("head")[0].appendChild(styleTag);
    }
    const cardStyleTag :any= document.querySelector('#hash-card-style');
    if(cardStyleTag){
        elementDestructor(cardStyleTag);
    }
    elementDestructor(myCustomElement);
}

const handleSetAccount = (accountData:Object) =>{
    (window as any).HashAccount = accountData;
    removeAccountSetterUI();
}