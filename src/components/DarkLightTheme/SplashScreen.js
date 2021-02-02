import styled from "styled-components"
import {CgSun} from "react-icons/cg";
import {HiMoon} from "react-icons/hi"

const Toggle = styled.button`
    cursor: pointer;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    border: none;
    background-color: ${props => props.theme.titleColor};
    color: 4{props => props.theme.pageBackground};
    &:focus {
        outline: none;
    }
    transition: all .5s ease;
`;


const Page = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    height: 800vh;
    width: 100%;
    margin: 0 auto;
    background-color: ${props => props.theme.pageBackground};
    transition: all .5s ease;
`;

const Container = styled.div`

    margin: 1vh 1vw 0 auto;
    display: flex;
    position: fixed;
    flex-direction: column;
    align-items: center;
`;

// const Title = styled.h1`
//     color: ${props => props.theme.titleColor};
//     transition: all .5s ease;
// `;

// const TagLine = styled.span`
//     color: ${props => props.theme.tagLineColor};
//     font-size: 18px;
//     transitwion: all .5s ease;
// `;




function Splash(props){
    function changeTheme() {
        if (props.theme === "light") {
            props.setTheme("dark");
        } else {
            props.setTheme("light");
        }
    };

    const icon = props.theme === "light" ? <HiMoon size={40} /> : <CgSun size={40} />;

    return (
        <Page>
            <Container>
                <Toggle onClick={changeTheme}>
                    {icon}
                </Toggle>
                {/* <Title>this is a title</Title> */}
                {/* <TagLine>Level up</TagLine> */}
            </Container>
        </Page>
    );
}

export default Splash;