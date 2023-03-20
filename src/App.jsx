import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css';
import ChatBody from "./components/ChatBody";
import InputForm from './components/InputForm';
import {useMutation} from 'react-query'
import { fetchResponse } from './api';

function App() {

  const [chat, setChat] = useState([])

  const mutation = useMutation({
    mutationFn: () => {
      return fetchResponse(chat);
    },
    onSuccess: (data) => setChat((prev)=> [...prev, {sender: 'ai', message: data.message.replace(/^\n\n/, "")}])
  })

  const sendMessage = async(message) => {
    await Promise.resolve(setChat((prev)=>[...prev, message]))
    mutation.mutate();
  }

  return (
    <div className='relative bg-[#ffffff] px-3 h-screen sm:px-28 text-black overflow-hidden flex flex-col justify-between align-start rounded-2xl max-h-70'>

      <div className='h-[90%] overflow-auto border rounded-lg border w-full max-w-4xl mt-4 min-w-[20rem] py-8 px-4 self-center p-2
      scrollbar-thumb-slate-400 scrollbar-thin scrollbar-track-gray-transparent scrollbar-thumb-border-md '>

        <div className="bg-green-600 opacity-60 rounded w-auto text-left text-white p-3 mb-2 ">
          Welcome to DB (Dev BOT)
        </div>

        <ChatBody className="mb-2 px-3" chat={chat}/>
      </div>

      <div className='w-full max-w-4xl min-w-[20rem] self-center'>
        <InputForm sendMessage={sendMessage}/>
      </div>

      <div className="mt-2 mb-2 text-sm text-green-600">
        Created By: Dev G with ZAINKEEPSCODE
      </div>
    </div>
  )
}

export default App
