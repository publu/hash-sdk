import { theme } from '../../constants/style';

const t = theme['default'];

 
export const stylesMain = `
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

    middleware-selector .modal-container{
        position:relative;
        width:100%;
        max-width:600px;
        max-height:800px;
        margin:15px;
        background:${t.white};
        border-radius:${t.modalRadius};
    }

    middleware-selector .modal-header{
        display: flex;
        justify-content: 
        space-between;
        background:${t.primaryColor};
        padding: 14px 16px;
        border-top-left-radius: ${t.modalRadius};
        border-top-right-radius: ${t.modalRadius};
        color: ${t.white};
    }

    middleware-selector .modal-body{
        display:flex;
        flex-wrap:wrap;
    }

    middleware-selector .modal-title{
        font-size:20px;
    }

    middleware-selector .cancel-button{
        font-size:20px;
        cursor:pointer;
    }
`

