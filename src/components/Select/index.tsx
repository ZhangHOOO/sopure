import React, { useEffect } from "react";
import { useStores } from "store/usestore";
import styled from "styled-components";

function App() {
  const { commonStore } = useStores();
  const { language } = commonStore;

  useEffect(() => {}, []);

  return (
    <Select>
      <Option value="Google">Google</Option>
      <Option value="知乎">知乎</Option>
    </Select>
  );
}

const Select = styled.select`
  /* text-indent: 10px; */
  width: 8rem;
  height: 4rem !important ;
  border: none;
  font-size: 1.4rem;
  box-shadow: 0.3rem 0.3rem 0.6rem var(--greyLight-2),
    -0.2rem -0.2rem 0.5rem var(--white);
  background: none;
  font-family: inherit;
  color: var(--greyDark);
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none !important;
  border: none !important;

  &::placeholder {
    color: var(--greyLight-3);
  }
  &:focus {
    border: none !important;
    outline: none !important;
    box-shadow: 0.3rem 0.3rem 0.6rem var(--greyLight-2),
      -0.2rem -0.2rem 0.5rem var(--white);
  }
`;

const Option = styled.option``;

export default App;
