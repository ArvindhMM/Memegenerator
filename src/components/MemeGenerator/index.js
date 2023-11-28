import {Component} from 'react'

import {
  Heading,
  MemeFormContainer,
  CustomContainer,
  CustomLabel,
  InputContainer,
  CustomInput,
  CustomSelect,
  CustomOption,
  GenerateButton,
  Meme,
  Paragraph,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    ImageUrlInput: '',
    TopTextInput: '',
    BottomTextInput: '',
    FontSizeInput: fontSizesOptionsList[0].optionId,
    ImageUrlValue: '',
    TopTextValue: '',
    BottomTextValue: '',
    FontSizeValue: '',
  }

  onChangeImageUrl = event => {
    this.setState({ImageUrlInput: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({TopTextInput: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({BottomTextInput: event.target.value})
  }

  onChangeOption = event => {
    this.setState({FontSizeInput: event.target.value})
  }

  OnGenerateMeme = event => {
    event.preventDefault()
    const {
      ImageUrlInput,
      TopTextInput,
      BottomTextInput,
      FontSizeInput,
    } = this.state
    this.setState({
      ImageUrlValue: ImageUrlInput,
      TopTextValue: TopTextInput,
      BottomTextValue: BottomTextInput,
      FontSizeValue: FontSizeInput,
    })
  }

  renderMeme = () => {
    const {
      ImageUrlValue,
      TopTextValue,
      BottomTextValue,
      FontSizeValue,
    } = this.state
    return (
      <Meme data-testid="meme" bgImage={ImageUrlValue}>
        <Paragraph fontSize={FontSizeValue}>{TopTextValue}</Paragraph>
        <Paragraph fontSize={FontSizeValue}>{BottomTextValue}</Paragraph>
      </Meme>
    )
  }

  render() {
    const {
      ImageUrlInput,
      TopTextInput,
      BottomTextInput,
      FontSizeInput,
    } = this.state

    return (
      <CustomContainer>
        <MemeFormContainer onSubmit={this.OnGenerateMeme}>
          <Heading>Meme Generator</Heading>
          <InputContainer>
            <CustomLabel htmlFor="ImageUrl">Image URL</CustomLabel>
            <CustomInput
              id="ImageUrl"
              type="text"
              value={ImageUrlInput}
              placeholder="Enter the image URL"
              onChange={this.onChangeImageUrl}
            />
          </InputContainer>
          <InputContainer>
            <CustomLabel htmlFor="ImageUrl">Top Text</CustomLabel>
            <CustomInput
              id="TopText"
              type="text"
              value={TopTextInput}
              placeholder="Enter the Top Text"
              onChange={this.onChangeTopText}
            />
          </InputContainer>
          <InputContainer>
            <CustomLabel htmlFor="ImageUrl">Bottom Text</CustomLabel>
            <CustomInput
              id="bottomtext"
              type="text"
              value={BottomTextInput}
              placeholder="Enter the Bottom Text"
              onChange={this.onChangeBottomText}
            />
          </InputContainer>
          <InputContainer>
            <CustomLabel htmlFor="select">Font Size</CustomLabel>
            <CustomSelect
              value={FontSizeInput}
              id="select"
              onChange={this.onChangeOption}
            >
              {fontSizesOptionsList.map(eachOption => (
                <CustomOption
                  key={eachOption.optionId}
                  value={eachOption.optionId}
                >
                  {eachOption.displayText}
                </CustomOption>
              ))}
            </CustomSelect>
          </InputContainer>
          <GenerateButton type="submit">Generate</GenerateButton>
        </MemeFormContainer>
        {this.renderMeme()}
      </CustomContainer>
    )
  }
}

export default MemeGenerator
