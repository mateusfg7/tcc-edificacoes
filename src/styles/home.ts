import styled from 'styled-components/native'

export const Container = styled.View`
    align-items: center;
    background: #003459;
    flex: 1;
    padding: 10px;
`

export const LoginBox = styled.View`
    width: max-content;
    gap: 100px;

    justify-content: space-between;
    align-items: center;
`

export const TitleBox = styled.View`
    align-items: center;
    margin-bottom: 80px;
    margin-top: 20px;
`

export const Title = styled.Text`
    color: white;
    font-size: 4rem;
`

export const SloganBox = styled.View`
    align-items: center;
`

export const Slogan = styled.Text`
    color: white;
    font-size: 1.5rem;
`

export const TitleImage = styled.Image`
    width: 350px;
    height: 350px;
`

export const ImageBox = styled.View``

export const LoginButton = styled.TouchableOpacity`
    background: rgba(255, 100, 100, 1);
    width: max-content;
    padding: 20px;
    margin: 0 auto;
    border-radius: 50px;
`

export const LoginText = styled.Text`
    color: white;
    font-size: 1.5rem;
`