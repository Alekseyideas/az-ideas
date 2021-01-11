import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

export const querySkills = graphql`
  query {
    jsHtmlCss: file(relativePath: { eq: "js_html_css.png" }) {
      childImageSharp {
        fluid(maxWidth: 1109, maxHeight: 432) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    illustrator: file(relativePath: { eq: "illustrator.png" }) {
      childImageSharp {
        fluid(maxWidth: 1024, maxHeight: 998) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    typescript: file(relativePath: { eq: "typescript.png" }) {
      childImageSharp {
        fluid(maxWidth: 1024, maxHeight: 998) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
