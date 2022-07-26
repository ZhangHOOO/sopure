import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { Col, Row, Anchor } from "antd";
import { useResponsive } from "ahooks";

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
            const { title, url } = item;
            return (
              <Col xs={{ span: 24 }} lg={{ span: 6 }}>
                <div className="card">
                  <a
                    className="card-description"
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h4>{title}</h4>
                  </a>
                </div>
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
        <Link href="#search" title="搜索" />
        {data.map((el) => {
          return <Link href={`#${el.type}`} title={el.type} />;
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
    -webkit-box-shadow: 2px -1px 13px 0px rgba(50, 50, 50, 0.43);
    -moz-box-shadow: 2px -1px 13px 0px rgba(50, 50, 50, 0.43);
    box-shadow: 2px -1px 13px 0px rgba(50, 50, 50, 0.43);
    transition: transform 0.1s ease-in-out, box-shadow 0.1s;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card:hover {
    transform: translateY(-0.5rem) scale(1.0125);
    box-shadow: 0 0.5em 3rem -1rem rgba(0, 0, 0, 0.5);
  }

  .card-description {
    display: block;
    padding: 1em 0.5em;
    color: #515151;
    font-size: large;
    font-weight: 600;
    text-decoration: none;
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

const Left = styled(Anchor)``;

export default App;
