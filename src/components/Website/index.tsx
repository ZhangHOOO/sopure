import React from "react";
import styled from "styled-components";

import { useResponsive } from "ahooks";
import { Anchor, Col, Row, Tooltip } from "antd";

import data from "./data";
const { Link } = Anchor;
function App() {
  const responsive = useResponsive();
  console.log("App ~ responsive", responsive);

  const Card = (data, type) => {
    return (
      <div className="main">
        <h2 className="type">{type}</h2>
        <Row gutter={[40, 40]}>
          {data.map((item) => {
            const { title, url, description } = item;
            return (
              <Col xs={{ span: 24 }} lg={{ span: 6 }}>
                <Tooltip placement="top" title={description}>
                  <div className="card">
                    <a
                      className="card-description"
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {title}
                    </a>
                  </div>
                </Tooltip>
              </Col>
            );
          })}
        </Row>
      </div>
    );
  };

  return (
    <Main>
      <Left targetOffset={20}>
        <Link
          href="#search"
          title={
            <span style={{ color: "#9baacf", fontWeight: "bold" }}>搜索</span>
          }
        />
        {data.map((el) => {
          return (
            <Link
              href={`#${el.type}`}
              title={
                <span style={{ color: "#9baacf", fontWeight: "bold" }}>
                  {el.type}
                </span>
              }
            />
          );
        })}
      </Left>

      <Right>
        {data.map((el) => {
          return <div id={el.type}> {Card(el.data, el.type)}</div>;
        })}
      </Right>
    </Main>
  );
}

const Main = styled.div`
  margin: 0 auto;
  margin-top: 60px;
  @media screen and (max-width: 380px) {
    margin-top: 30px;
  }
  display: flex;

  /* Layout Styles */
  html,
  body {
    width: 100%;
    height: 100%;
    margin: 0;
    font-size: 16px;
    font-family: sans-serif;
  }
  .main {
    margin-bottom: 50px;
  }

  .type {
    /* padding: 0 50px; */
    margin-bottom: 40px;
    color: #6d5dfc;
    font-weight: bold;
  }

  .card-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 0px 0px;
    text-align: center;
  }

  .card {
    font-size: 1rem;
    text-decoration: none;
    box-shadow: 0.3rem 0.3rem 0.6rem var(--greyLight-2),
      -0.2rem -0.2rem 0.5rem var(--white);
    transition: transform 0.1s ease-in-out, box-shadow 0.1s;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card:hover {
    transform: translateY(-0.5rem) scale(1.03);
    box-shadow: 0.3rem 0.3rem 0.6rem var(--greyLight-2),
      -0.2rem -0.2rem 0.5rem var(--white);
  }

  .card-description {
    width: 100%;
    height: 100%;
    text-align: center;
    display: block;
    padding: 1em 0.5em;
    color: #515151;
    font-size: large;
    font-weight: 600;
    text-decoration: none;
    color: var(--greyDark);
    &:hover {
      color: var(--primary);
    }
    &:active {
      box-shadow: $inner-shadow;
    }
  }

  .card-description > h2 {
    margin: 0 0 0.5em;
  }

  .card-description > p {
    margin: 0;
  }
`;

const Right = styled.div`
  padding-left: 100px;
  @media screen and (max-width: 380px) {
    padding-left: 30px;
  }
`;

const Left = styled(Anchor)`
  color: red !important;
`;

export default App;
