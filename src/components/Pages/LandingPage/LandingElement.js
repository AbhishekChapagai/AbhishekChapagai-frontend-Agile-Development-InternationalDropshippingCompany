import styled from 'styled-components'

export const LandingContainer = styled.div`
background: #0c0c0c;
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 80vh;
position: relative;
z-index: 1;

:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(114,14,207,0.3) 0%, 
    rgba(114,14,207,0.3) 100%), linear-gradient(180deg, rgba(114,14,207,0.3) 0%, transparent 100%);
    z-index: 2;
`

export const LandingBg = styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
`

export const ImageBg = styled.img`
width: 100%;
height: 100%;
-o-object-fit: cover;
object-fit: fill;
background: #232a34;
`
export const LandingContent = styled.div`
z-index: 3;
max-width: 1200px;
position: absolute;
padding: 8px 24px;
display: flex;
flex-direction: column;
align-items: center;
`

export const LandingH1 = styled.h1`
color: #fff;
font-size: 80px;
text-align: center;
font-family: 'Roboto', sans-serif;


@media screen and (max-width: 768px){
    font-size: 40px;
}

@media screen and (max-width: 480px){
    font-size: 35px;
    font-weight: bold;
}
`

export const LandingP = styled.p`
margin-top: 18px;
color: #fff;
font-weight: 200;
font-size: 20px;
text-align: center;
max-width: 600px;

@media screen and (max-width: 768px){
    font-size: 24px;
}

@media screen and (max-width: 480px){
    font-size: 16px;
}
`