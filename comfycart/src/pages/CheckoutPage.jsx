import React from "react";
import { PageHero } from "../components";
import styled from 'styled-components';

const CheckoutPage = ({ title }) => {
  return (
    <main>
      <PageHero title="checkout" />
      <Wrapper className="page">

      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .empty {
    text-align: center;
  
`;
export default CheckoutPage;
