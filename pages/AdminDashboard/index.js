// pages/index.js
import { Flex } from "@chakra-ui/react";
import Sidebar from "../../src/components/app/AdminDashboard/Sidebar";
import Navbar from "../../src/components/app/AdminDashboard/Navbar";
import Dashboard from "../../src/components/app/AdminDashboard/Dashboard";
export default function Home() {
  return (
    <Flex>
      <Sidebar />
      <Flex flexDir="column" flex="1">
        <Navbar/>
        <Dashboard />
      </Flex>
    </Flex>
  );
}
