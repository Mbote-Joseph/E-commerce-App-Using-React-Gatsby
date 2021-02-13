import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";

import SEO from "../components/seo";
import HeroSection from "../components/Reuseable/HeroSection";
import Infoblock from "../components/Reuseable/Infoblock";
import Dualinfoblock from "../components/Reuseable/Dualinfoblock";
import TeamPhotoSection from "../components/About/TeamPhotoSection";
import Coursecart from "../components/Cart/Coursecart";
import Contact from "../components/Contact/Contact";
const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection
      img={data.img.childImageSharp.fluid}
      title="About Us"
      subtitle="https://mbote-joseph@netlify.app"
      heroclass="about-background"
    />
    <Infoblock heading="About Us" />
    <Dualinfoblock
      heading="Our Team"
      image="https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
    />
    <TeamPhotoSection />
    <Coursecart courses={data.courses} />
    <Contact />
  </Layout>
);
export const query = graphql`
  {
    img: file(relativePath: { eq: "about.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    courses: allContentfulCourses {
      edges {
        node {
          id
          title
          price
          category
          description {
            description
          }
          image {
            fixed(width: 200, height: 120) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`;

export default AboutPage;
