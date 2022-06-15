import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ChatPage from './pages/ChatPage';

function App() {
    return (
        <ChakraProvider theme={theme}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/chats" element={<ChatPage />} />
            </Routes>
        </ChakraProvider>
    );
}

export default App;
