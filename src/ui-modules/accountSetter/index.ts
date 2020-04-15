import {
    customElementInjector,
    elementDestructor,
    internalStyleDestructor
} from '../../ui-utils/index';
import { accountStyle } from '../styles/accountStyle';
import {helper} from '../../helper';

interface INetwork{
    id:string,
    title:string,
    value:string
}

interface ITabDetails{
    id:string,
    title:string
}

const myCustomElement = 'account-setter';
const customElementModalTitle = 'Set account';
const tabs:Array<ITabDetails> = [
    {
        id:"t1",
        title:'Private Key'
    },
    // {
    //     id:"t2",
    //     title:'Mnemonics'
    // }
];
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
];

var selectedTab = 't1';

export const renderAccountSetterUI =(cb?:Function)=> {

    try{

        // Element creation.
        const parentDiv = document.createElement(myCustomElement);
        const modalContainer = document.createElement('div');
        const modalHeader = document.createElement('div');
        const modalBody = document.createElement('div');
        const modalBodyTabRow = document.createElement('div');
        const modalBodyWrapper = document.createElement('div');
        const modalFooter = document.createElement('div');
        const closeButton = document.createElement('span');
        const modalTitle = document.createElement('span');

       

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
        modalBodyTabRow.setAttribute('class','modal-tab-row');
        modalBodyWrapper.setAttribute('class','modal-body-wrapper');
        modalTitle.setAttribute('class','modal-title');
        closeButton.setAttribute('class','close-btn');

        cancelButton.setAttribute('class','cancel-btn');
        confirmButton.setAttribute('class','confirm-btn');

        // Fetching dynamic variables
        closeButton.innerHTML="&#x2715";

        modalTitle.innerHTML=`${customElementModalTitle}`;
        cancelButton.innerHTML = 'CANCEL';
        confirmButton.innerHTML = 'VALIDATE & SET';

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
            // @TODO Based on tab do the required operation
            handleConfirmButtonClick();
        }
 
        // Element Merging and Finalization
        modalHeader.appendChild(modalTitle);
        modalHeader.appendChild(closeButton);
        modalContainer.appendChild(modalHeader);
        modalBody.appendChild(modalBodyTabRow);
        modalBody.appendChild(modalBodyWrapper);
        modalContainer.appendChild(modalBody);
        modalFooter.appendChild(cancelButton);
        modalFooter.appendChild(confirmButton);        
        modalContainer.appendChild(modalFooter);
        parentDiv.appendChild(modalContainer);
        customElementInjector(parentDiv);

        renderTabRow();
        renderTabContent();
            
    }catch(e){
        console.error('Error in renderMiddlewareSelectorUI:::',e);
        cb && cb(e);
    }

}

const handleConfirmButtonClick = async() =>{
    const network = (document.querySelector('.network-input') as HTMLInputElement).value;
    const accountId = (document.querySelector('.account-input') as HTMLInputElement).value;
    let accountData = {
        accountId : accountId,
        network,
        keys : {
            privateKey:''
        }
    };
    switch(selectedTab){
        case 't1':
            accountData.keys.privateKey = (document.querySelector('.privatekey-input') as HTMLInputElement).value;
            break;
        
        case 't2':
            const mnemonics = (document.querySelector('.phrase-input') as HTMLInputElement).value;
            if(mnemonics){
                accountData.keys = await helper.generateKeysFromMnemonics(mnemonics);
            }
            break;
        
        case 't3':
            // @TODO handle keystore
            break;
    }
    
    handleSetAccount(accountData);
}

const renderTabRow =()=>{
    const tabRow :any= document.querySelector('.modal-tab-row');
    tabRow.innerHTML="";
    tabs.forEach((t,i)=>{
        const tabItem = document.createElement('div');
        tabItem.setAttribute('id',`tab-${i}`);
        tabItem.setAttribute('class',`tab-item ${t.id === selectedTab?'active':''}`);
        tabItem.innerHTML = t.title;
        tabItem.onclick=function(){
            selectedTab = t.id;
            renderTabRow();
            renderTabContent();
        }
        tabRow.appendChild(tabItem);
    });
    
}

const renderTabContent = () =>{
    const parent :any= document.querySelector('.modal-body-wrapper');
    parent.innerHTML = "";
    const networkInput = document.createElement('select');
    const accountIdInput = document.createElement('input');

    networkInput.setAttribute('class','network-input');
    accountIdInput.setAttribute('class','account-input');
 
    accountIdInput.placeholder = ' 0.0.1234(Account Id)';
   
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
    

    renderLabeledWrappedUI('Network',networkInput,parent);
    renderLabeledWrappedUI('Account Id',accountIdInput,parent);

    if(selectedTab === 't1'){
        const privateInput = document.createElement('input');
        privateInput.setAttribute('class','privatekey-input');
        privateInput.placeholder = ' Private Key';
        renderLabeledWrappedUI('Private Key',privateInput,parent);
    }else if(selectedTab === 't2'){
        const phraseInput = document.createElement('textarea');
        phraseInput.setAttribute('class','phrase-input');
        phraseInput.rows = 4;
        phraseInput.placeholder = ' Private Key';
        renderLabeledWrappedUI('Mnemonics',phraseInput,parent);
    }

   

}

const renderLabeledWrappedUI = (labelText:string,inputElement:HTMLElement,targetElement:HTMLElement) =>{
    const inputWrapper = document.createElement('div');
    const label = document.createElement('div');

    inputWrapper.setAttribute('class','input-wrapper');
    label.setAttribute('class','label-input');

    label.innerHTML = labelText;
    inputElement.classList.add('input-ele');
    inputWrapper.appendChild(label);
    inputWrapper.appendChild(inputElement);
    targetElement.appendChild(inputWrapper); 
}

const removeAccountSetterUI =()=> {
    internalStyleDestructor('hash-sdk-style');
    elementDestructor(myCustomElement);
}

const handleSetAccount = (accountData:Object) =>{
    (window as any).HashAccount = accountData;
    removeAccountSetterUI();
}