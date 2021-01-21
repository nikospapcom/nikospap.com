import React from 'react';
import PropTypes from 'prop-types';
import {
  IconGithub,
  IconLinkedin,
  IconCodepen,
  IconInstagram,
  IconTwitter,
} from '@components/icons';
import { socialMedia } from '@config';
import styled from 'styled-components';
import { theme, mixins, media } from '@styles';
const { colors, fontSizes, fonts } = theme;

const FooterContainer = styled.footer`
  ${mixins.flexCenter};
  flex-direction: column;
  padding: 15px;
  background-color: ${colors.darkNavy};
  color: ${colors.slate};
  text-align: center;
  height: auto;
  min-height: 70px;
`;
const SocialContainer = styled.div`
  color: ${colors.lightSlate};
  width: 100%;
  max-width: 270px;
  margin: 0 auto 10px;
  display: none;
  ${media.tablet`display: block;`};
`;
const SocialItemList = styled.ul`
  ${mixins.flexBetween};
`;
const SocialLink = styled.a`
  padding: 10px;
  svg {
    width: 20px;
    height: 20px;
  }
`;
const Copy = styled.div`
  margin: 10px 0;
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.xsmall};
  line-height: 1;
`;
const CopyThanks = styled.div`
  margin: 10px 0;
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.xxsmall};
  line-height: 1;
`;
const GithubLink = styled.a`
  color: ${colors.slate};
  margin: 0 10px;
`;

const Footer = () => (
  <FooterContainer>
    <SocialContainer>
      <SocialItemList>
        {socialMedia &&
          socialMedia.map(({ name, url }, i) => (
            <li key={i}>
              <SocialLink
                href={url}
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label={name}>
                {name === 'Github' ? (
                  <IconGithub />
                ) : name === 'Linkedin' ? (
                  <IconLinkedin />
                ) : name === 'Codepen' ? (
                  <IconCodepen />
                ) : name === 'Instagram' ? (
                  <IconInstagram />
                ) : name === 'Twitter' ? (
                  <IconTwitter />
                ) : (
                  <IconGithub />
                )}
              </SocialLink>
            </li>
          ))}
      </SocialItemList>
    </SocialContainer>
    <Copy>Nikos Papageorgiou</Copy>
    <CopyThanks>
      Special thanks to
      <GithubLink
        href="https://github.com/bchiang7/v4"
        target="_blank"
        rel="nofollow noopener noreferrer">
        <div> Brittany Chiang </div>
      </GithubLink>
      for gatsby theme
    </CopyThanks>
    <script async defer data-domain="nikospap.com" src="https://plausible.io/js/plausible.js"></script>
  </FooterContainer>
);

Footer.propTypes = {
  githubInfo: PropTypes.object,
};

export default Footer;
