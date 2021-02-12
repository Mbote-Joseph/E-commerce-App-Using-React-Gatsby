import React, { Component } from "react";
import Heading from "../Reuseable/Heading";
import Img from "gatsby-image";
const getCategory = items => {
  let holdItems = items.map(item => {
    return item.node.category;
  });
  let holdCategories = new Set(holdItems);
  let categories = Array.from(holdCategories);
  categories = ["All", ...categories];
  return categories;
};
export default class Coursecart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      courses: props.courses.edges,
      myCourses: props.courses.edges,
      myCategories: getCategory(props.courses.edges),
    };
  }

  categoryClicked = category => {
    let keepItSafe = [...this.state.courses];

    if (category === "All") {
      this.setState(() => {
        return { myCourses: keepItSafe };
      });
    } else {
      let showCourses = keepItSafe.filter(
        ({ node }) => node.category === category
      );
      this.setState(() => {
        return { myCourses: showCourses };
      });
    }
  };
  render() {
    //console.log(this.state.courses);
    return (
      <section className="py-5">
        <div className="container">
          <Heading title="Courses" />
          <div className="row my-3">
            <div className="col-10 mx-auto text-center">
              {this.state.myCategories.map((category, index) => {
                return (
                  <button
                    type="button"
                    className="btn btn-info m-3 px-3 btn-warning"
                    key={index}
                    onClick={() => {
                      this.categoryClicked(category);
                    }}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="row course-card">
            {this.state.myCourses.map(({ node }) => {
              return (
                <div
                  key={node.id}
                  className="col-11 col-md-6 d-flex my-3 mx-auto"
                >
                  <Img fixed={node.image.fixed} />
                  <br />
                  <div className="flex-grow-1 px-3">
                    <div className="d-flex ">
                      <h6 className="mb-0">{node.title}</h6>
                      <h6 className="mb-0 text-success ml-3">$ {node.price}</h6>
                    </div>
                    <p className="text-muted">
                      <small>{node.description.description}</small>
                    </p>
                    <button
                      data-item-id={node.id}
                      data-item-name={node.title}
                      data-item-price={node.price}
                      data-item-url="https://joseph-courses.netlify.app/"
                      data-item-image={node.image.fixed.scr}
                      className="btn btn-warning snipcart-add-item"
                    >
                      Purchase
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}
