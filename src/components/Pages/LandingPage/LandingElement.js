import styled from 'styled-components'

export const LandingContainer = styled.div`
background: #0c0c0c;
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 70vh;
position: relative;
z-index: 1;

:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0.3) 0%, 
    rgba(0,0,0,0.6) 100%), linear-gradient(180deg, rgba(0,0,0,0.1) 0%, transparent 100%);
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

export const ImageBg = styled.video`
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
font-size: 68px;
text-align: center;

@media scren and (max-width: 768px){
    font-size: 40px;
}

@media scren and (max-width: 480){
    font-size: 32px;
}
`

export const LandingP = styled.p`
margin-top: 24px;
color: #fff;
font-weight: 200;

font-size: 24px;
text-align: center;
max-width: 600px;

@media scren and (max-width: 768px){
    font-size: 24px;
}

@media scren and (max-width: 480){
    font-size: 18px;
}
`