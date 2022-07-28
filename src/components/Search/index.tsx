import { useResponsive } from "ahooks";
import { Input, Select } from "antd";
import React, { useEffect, useState } from "react";
import { useStores } from "store/usestore";
import styled from "styled-components";

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
      <div className="search1">
        <input type="text" className="search__input" placeholder="Search..." />
        <div className="search__icon">
          {/* <ion-icon name="search"></ion-icon> */}
        </div>
      </div>

      <Input.Group compact className="search" size="large">
        <Select
          // bordered={false}
          defaultOpen={true}
          defaultValue="Google"
          className="select"
          dropdownClassName="dropdownClassName"
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
          className="input"
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
  /* background-color: #e4ebf5; */
  @media screen and (max-width: 380px) {
    margin-top: 30px;
  }

  .input {
    width: 20.4rem;
    height: 4rem;
    border: none;
    /* border-radius: 1rem !important; */
    font-size: 1.4rem;
    padding-left: 3.8rem;
    box-shadow: inset 0.2rem 0.2rem 0.5rem var(--greyLight-2),
      inset -0.2rem -0.2rem 0.5rem var(--white);
    background: none;
    font-family: inherit;
    color: var(--greyDark);
    &::placeholder {
      color: var(--greyLight-3);
    }
    &:focus {
      outline: none;
      box-shadow: 0.3rem 0.3rem 0.6rem var(--greyLight-2),
        -0.2rem -0.2rem 0.5rem var(--white);
    }
  }

  .select {
    .ant-select-selector {
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
    }
  }
  .dropdownClassName {
    .ant-select-dropdown-menu-item {
      color: #fff !important;
    }
  }

  .search {
    display: flex;
    justify-content: center;
  }

  /*  */
  /*  SEARCH  */
  .search1 {
    grid-column: 3 / 4;
    grid-row: 2 / 3;
    position: relative;
    display: flex;
    align-items: center;
  }

  .search__input {
    width: 20.4rem;
    height: 4rem;
    border: none;
    border-radius: 1rem;
    font-size: 1.4rem;
    padding-left: 3.8rem;
    box-shadow: inset 0.2rem 0.2rem 0.5rem var(--greyLight-2),
      inset -0.2rem -0.2rem 0.5rem var(--white);
    background: none;
    font-family: inherit;
    color: var(--greyDark);
  }

  .search__input::placeholder {
    color: var(--greyLight-3);
  }

  .search__input:focus {
    outline: none;
    box-shadow: 0.3rem 0.3rem 0.6rem var(--greyLight-2),
      -0.2rem -0.2rem 0.5rem var(--white);
  }

  .search__input:focus + .search__icon {
    color: var(--primary);
  }

  .search__icon {
    height: 2rem;
    position: absolute;
    font-size: 2rem;
    padding: 0 1rem;
    display: flex;
    color: var(--greyDark);
    transition: 0.3s ease;
  }
`;

export default App;
