import styled from 'styled-components';

export const Container = styled.div`
    section{
        height: 100vh;
        width: 100%;
    }

    .home{
        align-items: center;
        background: #3c6e71;
        display: flex;
        gap: 60px;
        justify-content: center;
        width: 100%;

        h1{
            color: #FFFFFF;
            font-size: 72px;
        }
        img{
            height: 600px;
            width: 600px;
        }
    }
    .services{
        align-items: center;
        background: #d9d9d9;
        display: flex;
        flex-direction: column;
        gap: 28px;
        justify-content: center;

        iframe{
            height: 480px;
            width: 800px;
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
        display: flex;
        flex-direction: column;
        gap: 80px;
        justify-content: center;

        h2{
            font-size: 32px;
            text-align: center;
        }
        .content{
            display: flex;
            justify-content: center;
            
            div{
                padding: 20px;
                width: 45%;
                h3{
                    font-size: 24px;
                }
                p{
                    font-size: 16px;
                }
            }
        }
    }
`;