import React from 'react';
import styled from 'styled-components';
import Content from '../helpers/Content';
import Fb, { Ig } from '../svg/social';

const Divider = styled.hr`
  background: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 1px;
  background: linear-gradient(
    to right,
    transparent,
    ${({ theme }) => theme.colors.white},
    transparent
  );
  margin: 20px auto;
`;
const FooterContent = styled.div`
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const SocialPages = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  max-width: 70px;
`;
const Footer = () => {
    return (
        <Content bcolor="#373737" padding="2rem 2rem" margin="2rem 0 0 0">
            <FooterContent>
        Copyright © Łukasz Borkowski 2019
                <SocialPages>
                    <Fb />
                    <Ig />
                </SocialPages>
            </FooterContent>
        </Content>
    );
};

export default Footer;