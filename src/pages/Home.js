import { MainTitle, HeroDescription, HeroSection, HeroContainer, Item, List, Description, Container } from "./Home.styled.js";
import { Text, Title, Suptitle, Section } from "components/CommonStyles";
import Button from "components/Button/Button";
import { useNavigate } from "react-router-dom";

import aboutMe from '../images/about-me-one.jpg';
import aboutMeTwo from '../images/about-me-two.jpg'

export default function Home() {
    const navigate = useNavigate();

    const currentURL = window.location.protocol + "//" + window.location.hostname + window.location.pathname + "api/";
console.log("Current URL:", currentURL);

console.log(window.location.protocol);
console.log(window.location.hostname);
console.log(window.location.pathname);
    
    return (
        <>
    <HeroSection>
        <HeroContainer>
            <Suptitle >Your favorite tattoo artist</Suptitle>
            <MainTitle>Ivenko Alina</MainTitle>
            <HeroDescription>Embrace the art of transformation. Don't hesitate, schedule your tattoo appointment right now.
            </HeroDescription>
        </HeroContainer>
    </HeroSection>
    <Section primary={"primary"}>
       <Container>
        <List>
           <Item><img src={aboutMe} alt="about-me-one" width={270}/></Item>
           <Item><img src={aboutMeTwo} alt="about-me-two" width={270}/></Item>
        </List>

          <Description>
          <Suptitle primary={"primary"}>About me</Suptitle>
          <Title>Your favorite tattoo artist</Title>
          <Text primary={"primary"} main={"main"}>You have chosen a tattoo artist who goes beyond the ordinary. By coming here, you are stepping into a world of transformation and artistic magic. I am about energy, change and a new way. On this site you can explore my portfolio and schedule the most convenient time for our meeting. Welcome! With each step, you are drawing closer to embracing a new reality tailored specifically for you.</Text>
          <Button onClick={()=>navigate('/booking/service')}>Online-Booking</Button>
          </Description>
       </Container>
    </Section>
    </>
    );
}