import React, { useEffect } from "react";
import {
  Container,
  Box,
  Text,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";

import Login from "../Componenets/Authentication/Login";
import Signup from "../Componenets/Authentication/Signup";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const HomePage = () => {

   const history = useHistory();

   useEffect(() => {
     const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    //  setUser(userInfo);

     if (!userInfo) history.push("/chats");
     // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [history]);
  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        textAlign={"center"}
        p={3}
        bg={"white"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="4xl" fontFamily={"work sans"} color={"black"}>
          Chat Box
        </Text>
      </Box>

      <Box
        bg={"white"}
        w="100%"
        p={4}
        color={"black"}
        borderRadius={"lg"}
        borderWidth={"1px"}
      >
        <Tabs variant="soft-rounded" colorScheme="blue">
          <TabList mb={"1em"}>
            <Tab w={"50%"}>Login</Tab>
            <Tab w={"50%"}>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default HomePage;
