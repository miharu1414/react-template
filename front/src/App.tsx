import * as React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"

import Home from "src/pages/Home"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <BrowserRouter>
      <Routes>
        <Route path={`/`}  element={<Home/>}/>
        <Route path={`/register/`}  />
        <Route path={`/login/`}  />
      </Routes>
    </BrowserRouter>
      </Grid>
    </Box>
  </ChakraProvider>
)
