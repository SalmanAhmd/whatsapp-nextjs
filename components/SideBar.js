import { Avatar, Button, IconButton } from "@mui/material"
import styled from "styled-components"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChatIcon from '@mui/icons-material/Chat';
import SearchIcon from '@mui/icons-material/Search';
import * as EmailValidator from 'email-validator'
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import Chat from "./Chat";

function SideBar() {

  const [user] = useAuthState(auth)
  const userChatRef = db.collection('chats').where('users', 'array-contains', user.email)
  const [chatsSnapshot] = useCollection(userChatRef)

  const createChart = () => {
    const input = prompt('Please enter an email address for the user ypu wish to chat with')

    const emailUsed = chatAlreadyExist(input)
    if (input && EmailValidator.validate(input) && !emailUsed) {

      if (input === user.email) {
        alert('Its your email')
        return
      }

      db.collection('chats').add({
        users: [user.email, input],
      })
    } else if (emailUsed) {
      alert('already in use')
    } else {
      alert('wrong email ')

    }
  }

  const chatAlreadyExist = (recipientEMail) => (
    !!chatsSnapshot?.docs
      .find(chat => chat.data().users
        .find(user => user === recipientEMail)?.length > 0)
  )

  return (
    <Container>
      <Header>
        <UserAvatar src={user.photoURL} onClick={() => auth.signOut()} />

        <IconsContainer>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </IconsContainer>
      </Header>

      <Search>
        <SearchIcon />
        <SearchInput
          placeholder="Search in chats"
        />
      </Search>

      <SideBarButton onClick={createChart}>
        start a new chat
      </SideBarButton>

      {/* List of chats */}
      {chatsSnapshot?.docs.map(chat => (
        <Chat key={chat.id} id={chat.id}
          users={chat.data().users} />
      ))}

    </Container>
  )
}

export default SideBar

const Container = styled.div`
  flex: 0.45;
  border-right: 1px solid whitesmoke;
  height: 100vh;
  min-width: 280px;
  max-width: 350px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`

const SideBarButton = styled(Button)`
  width: 100%;
  color: black;
  &&& {
    border-top: 1px solid whitesmoke;
    border-bottom: 1px solid whitesmoke;
    
  }
`

const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 2px;
`

const SearchInput = styled.input`
  outline-width: 0;
  border: none;
  flex: 1;
`

const Header = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 80px;
  border-bottom: 1px solid whitesmoke;
`

const UserAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`

const IconsContainer = styled.div``
