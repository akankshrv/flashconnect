import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Button } from "@chakra-ui/react";
import { ChatState } from "@/context/ChatProvider";
import SideDrawer from "../assets/miscellaneous/SideDrawer";
import MyChats from "@/assets/MyChats";
import ChatBox from "@/assets/ChatBox";

const ChatPage = () => {
  const { user } = ChatState();

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box d="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && <MyChats />}
        {user && <ChatBox />}
      </Box>
    </div>
  );
};

export default ChatPage;
