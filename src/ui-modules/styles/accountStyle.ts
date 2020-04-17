import { theme } from '../../constants/style';

const t = theme['default'];

 
export const accountStyle = `
    .modal-parent{
        position:fixed;
        display:flex;
        font-family:inherit;
        align-items: center;
        justify-content:center;
        width:100%;height:100%;
        left:0;
        top:0;
        overflow:hidden;
        z-index:${t.modalZindex};
        background:${t.modalOverlayColor};
    }

    account-setter .modal-container{
        position:relative;
        width:100%;
        max-width:600px;
        max-height:800px;
        margin:15px;
        background:${t.white};
        border-radius:${t.modalRadius};
    }

    account-setter .modal-header{
        display: flex;
        justify-content: 
        space-between;
        background:${t.primaryColor};
        padding: 14px 16px;
        border-top-left-radius: ${t.modalRadius};
        border-top-right-radius: ${t.modalRadius};
        color: ${t.white};
    }

    account-setter .close-btn{
        cursor:pointer;
        font-size:20px;
    }

    account-setter .modal-body{
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    account-setter .modal-tab-row{
        display: flex;
        background: #ececec;
    }

    .modal-tab-row .tab-item{
        padding: 10px 20px;
        background: #d0cece;
        cursor:pointer;
    }

    .modal-tab-row .tab-item.active{
        background: #fff;
        cursor:default;
    }

    account-setter .modal-body-wrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-wrap:wrap;
        flex: 1;
        margin: 15px 20px;
    }

    .modal-body-wrapper .phrase-input .input-ele{
        height: 68px;
    }


    account-setter .input-wrapper{
        width: 100%;
        margin:10px 0px;
    }

    account-setter .input-ele{
        width: calc(100% - 20px);
        padding:0px 10px;
        height: 36px;
        border-radius: 4px;
        font-size: 14px;
        background: rgba(255,255,255,1);
        border: 1px solid rgba(0,0,0,0.2);
    }

    account-setter .phrase-input.input-ele{
        height: 80px;
    }

    select.input-ele{
        width: 100%;
    }

    account-setter .label-input{
        font-size: 14px;
        opacity:0.8;
    }

    account-setter .modal-title{
        font-size:20px;
    }

    account-setter .close-button{
        font-size:20px;
        cursor:pointer;
    }

    account-setter button{
        border-radius: 5px;
        border: none;
        font-size: 15px;
        padding: 10px 20px;
        margin:10px;
        cursor:pointer;
        opacity:0.8;
        transition:all 0.2s ease;
    }

    account-setter button:hover{
        opacity:1;
        transform:scale(1.02);
    }

    account-setter .modal-footer{
        display:flex;
        justify-content:center;
    }

    .cancel-btn{
        background: rgba(0,0,0,0.05);
    }

    .confirm-btn{
        background: ${t.secondaryColor};
    }
`

