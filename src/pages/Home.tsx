import { Image, Text, View } from "react-native";
import { Container, ImageBox, LoginBox, LoginButton, LoginText, Slogan, SloganBox, Title, TitleBox, TitleImage } from "../styles/home";
import construcaoImg from '../assets/construcao.png'

export default function Home() {
    return (
        <Container>
            <ImageBox>
                <TitleImage source={construcaoImg} />
            </ImageBox>
                <TitleBox>
                    <Title>
                        4Match
                    </Title>
                    <SloganBox>
                        <Slogan>
                            Ache o profissional perfeito!
                        </Slogan>
                    </SloganBox>
                    
                </TitleBox>
                
                <LoginButton>
                    <LoginText>
                        Google Login
                    </LoginText>
                </LoginButton>
        </Container>
    )
}