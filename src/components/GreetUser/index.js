import {useState} from 'react'
import {
  MainContainer,
  NameInput,
  MsgContent,
  NameText,
} from './styledComponents'

const GreetUser = () => {
  const [name, steName] = useState('')// while rerendering this statement will also run but name will contain the prev state value not empty string or default you passed in usestate
  const onChangeHandler = event => steName(event.target.value)
  console.log("component rerendered")
  console.log(name)

  return (
    <MainContainer>
      <NameInput type="text" placeholder="Your name" value={name} onChange={(event)=>steName(event.target.value)}/>
      <MsgContent>
        Hello <NameText>{name}</NameText>
      </MsgContent>
    </MainContainer>
  )
}

export default GreetUser
