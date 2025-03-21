import styled from 'styled-components';

export const Container = styled.div`
    section{
        display: flex;
        min-height: 100vh;
        width: 100%;
    }

    .home{
        align-items: center;
        background: #3c6e71;
        flex-direction: column;
        gap: 60px;
        justify-content: center;
        width: 100%;

        h1{
            color: #FFFFFF;
            font-size: 44px;
            @media (min-width: 720px) {
                font-size: 72px;
            }
            @media (orientation: landscape) and (max-width: 1080px){
                font-size: 48px;
            }
        }
        img{
            height: 360px;
            width: 360px;
            @media (min-width: 720px) {
                height: 600px;
                width: 600px;
            }
            @media (orientation: landscape) and (max-width: 1080px){
                height: 400px;
                width: 400px;
            }
        }

        @media (min-width: 720px) {
            flex-direction: row;
        }
        @media (orientation: landscape) and (max-width: 1080px){
            flex-direction: row;
        }
    }
    .services{
        align-items: center;
        background: #d9d9d9;
        flex-direction: column;
        gap: 28px;
        justify-content: center;

        iframe{
            height: 340px;
            width: 440px;
            @media (min-width: 720px) {
                height: 480px;
                width: 800px;
            }
            @media (orientation: landscape) and (max-width: 1080px){
                height: 480px;
                width: 800px;
            }
        }
        a{
            color: #3c6e71;
            font-size: 18px;
            &:visited{
                color: #284b63;
                text-decoration: none;
            }
        }
        
    }
    .about-us{
        align-items: center;
        background: #284b63;
        color: #FFFFFF;
        flex-direction: column;
        gap: 80px;
        justify-content: center;

        h2{
            font-size: 32px;
            text-align: center;
        }
        .content{
            display: flex;
            flex-direction: column;
            justify-content: center;
            
            div{
                padding: 20px;
                width: 100%;
                h3{
                    font-size: 24px;
                }
                p{
                    font-size: 16px;
                }
                @media (min-width: 720px) {
                    width: 45%;
                }
                @media (orientation: landscape) and (max-width: 1080px){
                    width: 45%;
                }
            }
            @media (min-width: 720px) {
                flex-direction: row;
            }
            @media (orientation: landscape) and (max-width: 1080px){
                flex-direction: row;
            }
        }
    }
`;
