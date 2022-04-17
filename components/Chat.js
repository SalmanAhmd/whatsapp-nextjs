import { Avatar } from "@mui/material"
import { useRouter } from "next/router"
import { useAuthState } from "react-firebase-hooks/auth"
import { useCollection } from "react-firebase-hooks/firestore"
import styled from "styled-components"
import { auth, db } from "../firebase"
import getRecipientEmail from "../utils/getRecipientEmail"

function Chat({ id, users }) {

  const [user] = useAuthState(auth)
  const router = useRouter()

  const recipientEmail = getRecipientEmail(users, user)
  const [recipientSnapShot] = useCollection(db.collection('users').where('email', '==', recipientEmail))
  const recipient = recipientSnapShot?.docs?.[0]?.data()

  const enterChat = () => {
    router.push(`/chat/${id}`)
  }

  return (
    <Container onClick={enterChat}>
      {/* <UserAvatar src={recipient ? recipient?.photoURL : recipientEmail[0]} /> */}
      {recipient ?
        <UserAvatar src={recipient?.photoURL} />
        :
        <UserAvatar>{recipientEmail[0]}</UserAvatar>
      }
      <p>{recipientEmail}</p>
    </Container>
  )
}

export default Chat

const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 15px;
  word-break: break-word;
  :hover {
    background-color: #e9e9eb;
  }
`

const UserAvatar = styled(Avatar)`
  cursor: pointer;
  margin: 5px;
  margin-right: 15px;
`
