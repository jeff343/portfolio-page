import styled from "styled-components";
import { useState } from "react";
import { ArrowRightSquareFill, ArrowLeftSquareFill } from "styled-icons/bootstrap";
import moonPic from "../assets/images/moon-pic.jpg";

const Container = styled.article`
    margin: auto;
    height: 300px;
    position: relative;
    width: 400px;
    overflow: hidden;
`;

const Card = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 1.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transform: ${props => props.showFront ? 'rotateY(0deg)' : 'rotateY(180deg)'};
    `;

const CardFront = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    border-radius: 10px;
    background-image: url(${moonPic});
    backgound-position: center;
    background-size: cover;
    backface-visibility: hidden;
`;

const CardBack = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    height: 100%;
    width: 100%;
    position: absolute;
    border-radius: 10px;
    backface-visibility: hidden;
    transform: rotateY(180deg);
    background: ${props => props.theme.primary};
`;

const Title = styled.h3`
    font-size: 24px;
    text-align: left;
    color: ${props => props.theme.secondary};
`;

const FrontTitle = styled(Title)`
    position: absolute;
    bottom: 5px;
    left: 20px;
`;

const Text = styled.p`
    font-size: ${props => props.size === 'small' ? '12px' : '16px'};
    margin-top: 10px;
`;

const LinkContainer = styled.div`
    display: flex;
    width: 90%;
    justify-content: end;
`;

const LinkButton = styled.button`
    width: 50px;
    height: 30px;
    border: none;
    border-radius: 10px;
    background: ${props => props.theme.dark};
    margin: auto 15px;
    cursor: pointer;
`;

const RightIcon = styled(ArrowRightSquareFill)`
    height: 30px;
    position: absolute;
    right: 5px;
    bottom: 5px;
    color: white;
`;

const LeftIcon = styled(ArrowLeftSquareFill)`
    height: 30px;
    position: absolute;
    bottom: 5px;
    left: 5px;
`;

// will take a project object as props
const ProjectCard = () => {
    const [showFront, setShowFront] = useState(true);

    const flipCard = () => {
        setShowFront(!showFront);
    };

    return (
        <Container>
            <Card showFront={showFront}>
                <CardFront>
                    <FrontTitle>Project Title</FrontTitle>
                    <RightIcon onClick={() => flipCard()} />
                </CardFront>
                <CardBack>
                    <Title>Project Title</Title>
                    <Text size='small'>built with html/css/js</Text>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu mollis mauris. Praesent porta pretium tempor. Praesent vitae mauris odio. Suspendisse vitae augue molestie, iaculis.</Text>
                    <LinkContainer>
                        <LinkButton>live</LinkButton>
                        <LinkButton>code</LinkButton>
                    </LinkContainer>
                    <LeftIcon onClick={() => flipCard()} />
                </CardBack>
            </Card>
        </Container>
    )
};

export default ProjectCard;