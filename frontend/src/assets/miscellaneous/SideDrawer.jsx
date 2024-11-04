import { Tooltip } from "@/components/ui/tooltip";
import { Box, Button, Flex, Icon, Separator, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaSearchengin } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { Avatar } from "@/components/ui/avatar";
import { ChatState } from "@/context/ChatProvider";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import {
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const SideDrawer = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const history = useHistory();
  const handleMenuItemClick = (value) => {
    if (value === "profile") {
      setIsDialogOpen(true);
    }
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    history.push("/");
  };

  const { user } = ChatState();
  return (
    <>
      <Box
        justifyContent="space-between"
        alignItems="center"
        bg="whitesmoke"
        w="100%"
        p="5px 10px 5px 10px"
        borderWidth="1px"
      >
        <Flex>
          <Box w="40%">
            <Tooltip
              content="Search Users to chat"
              showArrow
              positioning={{ placement: "right-end" }}
            >
              <DrawerActionTrigger>
                <Button colorPalette="gray" variant="plain">
                  <Icon color="black">
                    <FaSearchengin />
                  </Icon>
                  <Text d={{ base: "none", md: "flex" }} color="black" px={4}>
                    Search User
                  </Text>
                </Button>
              </DrawerActionTrigger>
            </Tooltip>
          </Box>
          <Box w="60%">
            <Text
              fontSize="2xl"
              fontFamily="Work sans"
              color="green.400"
              fontWeight="bold"
            >
              flashconnect
            </Text>
          </Box>
          <Box gap="4">
            <MenuRoot>
              <MenuTrigger>
                <Icon color="black" size="xl" pt="3px">
                  <IoIosNotifications />
                </Icon>
              </MenuTrigger>
            </MenuRoot>
          </Box>
          <Box alignItems="flex-end">
            <MenuRoot>
              <MenuTrigger asChild>
                <Button>
                  <Avatar size="sm" cursor="pointer" name={user.name} />
                </Button>
              </MenuTrigger>
              <MenuContent>
                <MenuItem value="profile">Profile</MenuItem>
                <Separator />
                <MenuItem value="logout" onClick={logoutHandler}>
                  Logout
                </MenuItem>
              </MenuContent>
            </MenuRoot>
          </Box>
        </Flex>
      </Box>

      <DrawerRoot placement="start">
        <DrawerBackdrop />

        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Drawer Title</DrawerTitle>
          </DrawerHeader>
          <DrawerBody>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </DrawerBody>
          <DrawerFooter>
            <DrawerActionTrigger asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerActionTrigger>
            <Button>Save</Button>
          </DrawerFooter>
          <DrawerCloseTrigger />
        </DrawerContent>
      </DrawerRoot>
    </>
  );
};

export default SideDrawer;
