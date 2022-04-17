import moment from "moment"
import { useAuthState } from "react-firebase-hooks/auth"
import styled from "styled-components"
import { auth } from "../firebase"

function Message({ user, message }) {

  const [userLoggedIn] = useAuthState(auth)

  const TypeOfMessage = user === userLoggedIn?.email ? Sender : Reciever

  return (
    <Container>
      <TypeOfMessage>{message.messages}
      <TimeStamp>
        {message.timestamp ? moment(message.timestamp).format('LT') : '...'}
        
      </TimeStamp>
      </TypeOfMessage>
    </Container>
  )
}

export default Message

const Container = styled.div`
`

const MessageElement = styled.p`
  width: fit-content;
  padding: 15px;
  border-radius: 8px;
  margin: 18px;
  min-width: 120px;
  padding-bottom: 10px;
  position: relative;
  text-align: left;
`
const Sender = styled(MessageElement)`
  background-color: #dcf8c6;
  margin-left: auto;
`

const Reciever = styled(MessageElement)`
  background-color: whitesmoke;
`
const TimeStamp = styled.div`
  font-size: 11px;
  color: gray;
  text-align: right;
  padding-top: 4px;
`
