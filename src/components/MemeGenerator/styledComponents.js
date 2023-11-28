// Style your components here
import styled from 'styled-components'

export const Heading = styled.h1`
  color: #35469c;
  font-size: 54px;
`

export const CustomContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding: 10px;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
`

export const CustomLabel = styled.label`
  color: #7e858e;
  font-size: 12px;
`

export const CustomInput = styled.input`
  padding: 5px;
`

export const MemeFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 35vw;
  height: 50vh;
  padding: 15px;
`
export const CustomSelect = styled.select`
  padding: 5px;
`
export const CustomOption = styled.option`
  color: #d7dfe9;
`
export const GenerateButton = styled.button`
  color: white;
  background-color: #0b69ff;
  padding: 10px;
  border-radius: 5px;
  width: 100px;
  border-style: none;
`

export const Meme = styled.div`
  background-image: url(${props => props.bgImage});
  background-size: cover;
  width: 35vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  color: white;
`
export const Paragraph = styled.p`
  color: white;
  font-size: ${props => props.fontSize}px;
`
