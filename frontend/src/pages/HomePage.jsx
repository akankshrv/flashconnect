import Login from "@/assets/authentication/Login";
import Signup from "@/assets/authentication/Signup";
import { Box, Center, Container, Icon, Tabs, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { FcFlashOn } from "react-icons/fc";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) {
      history.push("/chats");
    }
  }, [history]);

  return (
    <Container maxW="xl" centerContent>
      <Box
        flex="1"
        justifyContent="center"
        p={3}
        bg={"white"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text
          as="span"
          fontSize="4xl"
          color="green.400"
          fontFamily="Work sans"
          fontWeight="bold"
        >
          <Center as="span">
            <Icon>
              <FcFlashOn />
            </Icon>
            flashconnect
          </Center>
        </Text>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <Tabs.Root
          variant="enclosed"
          maxW="md"
          fitted
          defaultValue={"login"}
          borderWidth="0px"
        >
          <Tabs.List bg="white">
            <Tabs.Trigger
              value="login"
              color="green.400"
              fontSize="medium"
              fontFamily="Work Sans"
              fontWeight="bold"
            >
              Login
            </Tabs.Trigger>
            <Tabs.Trigger
              value="sign-up"
              color="green.400"
              fontSize="medium"
              fontFamily="Work Sans"
              fontWeight="bold"
            >
              Sign up
            </Tabs.Trigger>
            <Tabs.Indicator rounded="l2" />
          </Tabs.List>
          <Tabs.Content value="login" color="black">
            <Login />
          </Tabs.Content>
          <Tabs.Content value="sign-up" color="black">
            <Signup />
          </Tabs.Content>
        </Tabs.Root>
      </Box>
    </Container>
  );
};

export default HomePage;
