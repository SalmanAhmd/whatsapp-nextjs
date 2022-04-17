import { AttachFile, InsertEmoticon, Mic, MoreVert } from "@mui/icons-material"
import { Avatar, IconButton } from "@mui/material"
import { useRouter } from "next/router"
import { useRef, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { useCollection } from "react-firebase-hooks/firestore"
import styled from "styled-components"
import { auth, db } from "../firebase"
import getRecipientEmail from "../utils/getRecipientEmail"
import Message from "./Message"
import firebase from "firebase/compat/app"
import TimeAgo from "javascript-time-ago";
import en from 'javascript-time-ago/locale/en'  //This is because we want our display in english format

const Time = (time) => {
  TimeAgo.addLocale(en);
  // Create a new instance
  const timeAgo = new TimeAgo("en-US");
  const inSeconds = new Date(time).getTime();
  const minutesAgo = timeAgo.format(inSeconds - 60 * 1000);
  return (minutesAgo)
}

function ChatScreen({ messages, chat }) {

  const [user] = useAuthState(auth)
  const [input, setInput] = useState('')
  const router = useRouter()

  const refEndOfMessage = useRef(null);

  const recipientEmail = getRecipientEmail(chat.users, user)
  const [recipientSnapShot] = useCollection(db.collection('users').where('email', '==', recipientEmail))
  const recipient = recipientSnapShot?.docs?.[0]?.data()

  const [messageSnapShot] = useCollection(db.collection('chats')
    .doc(router.query.id)
    .collection('messages')
    .orderBy('timestamp', 'asc')
  )

  const ScrollToBottom = () => {
    refEndOfMessage.current.scrollIntoView({
      behaviour: 'smooth',
      block: 'start'
    })
  }

  const showMessage = () => {
    if (messageSnapShot) {
      return messageSnapShot.docs.map(message => (
        <Message
          key={message.id}
          user={message.data().user}
          message={{
            ...message.data(),
            timestamp: message.data().timestamp?.toDate().getTime()
          }}
        />
      ))
    } else {
      return JSON.parse(messages).map(message => (
        <Message
          key={message.id}
          user={message.user}
          message={message}
        />
      ))
    }
  }

  const sendMessage = (e) => {
    e.preventDefault()
    // update last seen
    db.collection('users').doc(user.uid).set({
      lastSeen: firebase.firestore.FieldValue.serverTimestamp()
    }, { merge: true })

    db.collection('chats').doc(router.query.id).collection('messages').add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      messages: input,
      user: user.email,
      photoURL: user.photoURL
    })

    setInput('')
    ScrollToBottom()
  }


  return (
    <Container>
      <Header>
        {recipient ?
          <Avatar src={recipient?.photoURL} />
          :
          <Avatar>{recipientEmail[0]}</Avatar>
        }

        <HeaderInformation>
          <h3>{recipientEmail}</h3>
          {recipientSnapShot ? (
            <p>Last active: {' '}
              {recipient?.lastSeen.toDate() ? Time(recipient?.lastSeen.toDate()) : 'Unavailable'}
            </p>
          ) : 'Loading Last Active'}
        </HeaderInformation>
        <IconButton>
          <AttachFile />
        </IconButton>
        <IconButton>
          <MoreVert />
        </IconButton>
      </Header>

      <MessageContainer>
        {showMessage()}
        <EndOfTheMessage ref={refEndOfMessage} />
      </MessageContainer>

      <InputContainer>
        <InsertEmoticon />
        <Input value={input} onChange={e => setInput(e.target.value)} />
        <button type='submit' onClick={sendMessage}>Send Message</button>
        <Mic />
      </InputContainer>


    </Container>
  )
}

export default ChatScreen

const Container = styled.div`
`

const Header = styled.div`
  position: sticky;
  background-color: white;
  z-index: 100;
  top: 0;
  display: flex;
  padding: 11px;
  height: 80px;
  align-items: center;
  border-bottom: 1px solid whitesmoke;
`

const HeaderInformation = styled.div`
  margin-left: 15px;
  flex: 1;
  > h3 {
    margin-bottom: 3px;
  }
  > p {
    font-size: 14px;
    color: gray;
  }
`

const MessageContainer = styled.div`
  padding: 30px;
  background-color: #e5ded8;
  min-height: 90vh;
`

const EndOfTheMessage = styled.div`
margin-bottom: 50px;
`

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  position: sticky;
  bottom: 0;
  background-color: white;
  z-index: 100;
`

const Input = styled.input`
  flex: 1;
  align-items: center;
  padding: 10px;
  position: sticky;
  bottom: 0;
  background-color: whitesmoke;
  z-index: 100;
`
