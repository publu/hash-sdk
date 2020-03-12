import { theme } from '../../constants/style';

const t = theme['default'];

 
export const cardStyle = `
    .card-container{
        padding:18px 12px;
        font-family:inherit;
        margin:25px 18px;
        border-radius:6px;
        flex:1;
        display:flex;
        flex-direction:column;
        align-items:center;
        box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.3);
        -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.3);
        -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.3);
        text-align:center;min-width: 100px;
        transition: all 0.2s ease;
    }

    .card-container:hover{
        background:rgb(35, 234, 181);
        color:${t.white};
        transform: scale(1.05);
    }

    middleware-card .card-img{
        width:60px;
        height:auto;
    }

    middleware-card .card-title{
        margin-top: 8px;
        font-size: 18px;
    }

    middleware-card .card-desc{
        margin-top: 6px;
        font-size: 12px;
        color:rgba(0,0,0,0.6);
        font-style:italic;
    }

    middleware-card .card-recommended{
        margin-top: 6px;
        font-size: 12px;
        color:rgb(234, 92, 110,0.7);
    }
`

