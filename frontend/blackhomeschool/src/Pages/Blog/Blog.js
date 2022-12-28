import { Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import Hero from "../AboutUs/Hero";
import Services from "../AboutUs/Services";
import BlogCard from "./BlogCard";
import ballet from "../../components/assets/ballet.jpg";

import bhcl from "../../images/bhcl.jpeg";

import reading from "../../images/reading.jpeg";
import kids from "../../images/kids.jpeg";
import "./Blog.css"

function Blog() {
  const blogs = [
    {
      title:
        "An exclusive interview with Rasheeda Denning on homeschooling, inclusion, virtual volunteering, and more",
      imagesrc: bhcl,
      mainText:
        "Every year, more families are moving towards homeschooling their children. Surveys show that there are an estimated 2.5 million homeschooled children in the United States alone. Globally, homeschooling is experiencing a steady growth rate of up to 8% every year.",
      datePublished: "February 13, 2021",
      category: "Interviews",
      link: "",
    },

    {
      title: "School Bus Initiative",
      imagesrc: reading,
      mainText:
        "The focus of our last quarter has been working with local groups to improve bus networks. We believe that it is vital to provide transportation options for children living in rural areas. Thanks to our donors we were able to fund 50 buses and 200 cars that transport children to schools all around the globe.",
      datePublished: "February 13, 2021",
      category: "Community Update",
      link: "",
    },

    {
      title: "10,000 Pencils Delivered to Schools",
      imagesrc: kids,
      mainText:
        "This summer, because of the effort of our volunteers and the generous donations from our sponsors, we were able to deliver 10,000 pencils to children in need. We were able to reach the most unprivileged areas and provide local schools with this vital tool for education.",
      datePublished: "February 13, 2021",
      category: "News",
      link: "",
    },
    
  ];
  return (
    <div>
      <div>
        <Hero url={ballet} name={"BLOGS"} />
        <Services />
      </div>
      <Heading margin={10} className="text-blog">LATEST BLOG POST</Heading>
      <SimpleGrid
        margin={10}
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(350px, 2fr))"
      >
        {blogs.map((blog) => {
          return <BlogCard blog={blog}></BlogCard>;
        })}
      </SimpleGrid>
    </div>
  );
}

export default Blog;
