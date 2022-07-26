import React, { useEffect, useState } from "react";
import { useStores } from "store/usestore";
import styled from "styled-components";

import Search from "components/Search";
import Website from "components/Website";

function App() {
  return (
    <Main>
      <Search></Search>
      <Website></Website>
    </Main>
  );
}

const Main = styled.div`
  margin: 0 auto;
`;

export default App;
