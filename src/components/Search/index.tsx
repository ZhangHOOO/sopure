import React, { useEffect, useState } from "react";
import { useStores } from "store/usestore";
import styled from "styled-components";
import { Input, Select } from "antd";
import { useResponsive } from "ahooks";

const { Option } = Select;

function App() {
  const { commonStore } = useStores();
  const { language } = commonStore;
  const [question, setQuestion] = useState("");
  const [searchType, setSearchType] = useState("");
  const responsive = useResponsive();

  useEffect(() => {}, []);

  const jumpUrl = () => {
    switch (searchType) {
      case "Google":
        window.open(`https://www.google.com.hk/search?q=${question}`);
        break;
      case "知乎":
        window.open(`https://www.zhihu.com/search?type=content&q=${question}`);
        break;
      default:
        window.open(`https://www.google.com.hk/search?q=${question}`);
        break;
    }
  };

  return (
    <Main id="search">
      <Input.Group compact className="search" size="large">
        <Select
          defaultValue="Google"
          size="large"
          onChange={(e) => {
            console.log("App ~ e", e);

            setSearchType(e);
          }}
        >
          <Option value="Google">Google</Option>
          <Option value="知乎">知乎</Option>
        </Select>
        <Input
          style={{ width: responsive.lg ? "30%" : "80%" }}
          // style={{ width: "30%" }}
          defaultValue=""
          onPressEnter={jumpUrl}
          onChange={(val) => {
            // console.log("App ~ val", val.target.value);
            setQuestion(val.target.value);
          }}
        />
      </Input.Group>

      {/*  */}
    </Main>
  );
}

const Main = styled.div`
  margin: 0 auto;
  margin-top: 60px;
  @media screen and (max-width: 380px) {
    margin-top: 30px;
  }

  .search {
    display: flex;
    justify-content: center;
  }
`;

export default App;
