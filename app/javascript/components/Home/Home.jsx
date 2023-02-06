import React from "react";
import { Layout } from "antd";
import Cards from "../Cards";

const { Content } = Layout;

export default () => (
  <Layout className="layout">
    <Content className="rock-paper-scissors-wrapper">
      <h1>Rock - Paper - Scissors</h1>
      <div className="game-description">
        Rock Paper Scissors is a zero sum game that is usually played by two people
        using their hands and no tools. The idea is to make shapes with an outstretched 
        hand where each shape will have a certain degree of power and will lead to an outcome.
      </div>
      <Cards />
    </Content>
  </Layout>
);