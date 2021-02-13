import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";

import SEO from "../components/seo";
import HeroSection from "../components/Reuseable/HeroSection";
import Infoblock from "../components/Reuseable/Infoblock";
import Dualinfoblock from "../components/Reuseable/Dualinfoblock";
import Coursecart from "../components/Cart/Coursecart";
import Contact from "../components/Contact/Contact";
const ServicePage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection
      img={data.img.childImageSharp.fluid}
      title="Our Services"
      subtitle="Educating the people"
      heroclass="services-background"
    />
    <Infoblock heading="Services" />
    <Coursecart courses={data.courses} />

    <Dualinfoblock
      heading="Our Team"
      image="https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
    />
    <Contact />
  </Layout>
);
export const query = graphql`
  {
    img: file(relativePath: { eq: "heromain.jpg" }) {
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

export default ServicePage;
