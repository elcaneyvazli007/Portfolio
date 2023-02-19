import React from "react";
import Blogcard from "../components/blogcard";

const blog = () => {
  const blogsData = [
    {
      id: 1,
      title: "Create a Wordpress theme from Scractch",
      category: ["Business", "Idea", "Story"],
      image: "img/blogpost1.jpg",
      text1:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit massa vel mauris Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      text2:
        "Morbi ac nulla felis. Vestibulum maximus, mi eget finibus commodo,tellus ligula ultrices mauris, at condimentum erat risus id ante. Nullam pulvinar lorem eget luctus vestibulum. Vestibulum volutpat malesuada ante, eget tempor massa. Quisque maximus sagittis suscipit. Vivamus placerat, magna eget pulvinar sodales, sem nibh elementum justo, ac elementum ipsum lacus non tellus. In hac habitasse platea dictumst. Proin magna dolor, vestibulum vitae orci dapibus, commodo eleifend  nulla. Integer tincidunt dictum neque ac tempus. Aliquam in laoreet nisi. Ut nec libero dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas gravida, lorem et sagittis ullamcorper, erat est rutrum lacus, in mollis risus  mauris a nisi. Nullam non nisi nec ligula elementum cursus pulvinar nec libero.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas gravida,lorem et sagittis ullamcorper, erat est rutrum lacus, in mollis risus mauris a nisi. Nullam non nisi nec ligula elementum cursus pulvinar nec libero.",
    },
    {
      id: 2,
      title: "Create a Wordpress theme from Scractch",
      category: ["Business", "Idea", "Story"],
      image: "img/blogpost2.jpg",
      text1:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit massa vel mauris Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      text2:
        "Morbi ac nulla felis. Vestibulum maximus, mi eget finibus commodo,tellus ligula ultrices mauris, at condimentum erat risus id ante. Nullam pulvinar lorem eget luctus vestibulum. Vestibulum volutpat malesuada ante, eget tempor massa. Quisque maximus sagittis suscipit. Vivamus placerat, magna eget pulvinar sodales, sem nibh elementum justo, ac elementum ipsum lacus non tellus. In hac habitasse platea dictumst. Proin magna dolor, vestibulum vitae orci dapibus, commodo eleifend  nulla. Integer tincidunt dictum neque ac tempus. Aliquam in laoreet nisi. Ut nec libero dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas gravida, lorem et sagittis ullamcorper, erat est rutrum lacus, in mollis risus  mauris a nisi. Nullam non nisi nec ligula elementum cursus pulvinar nec libero.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas gravida,lorem et sagittis ullamcorper, erat est rutrum lacus, in mollis risus mauris a nisi. Nullam non nisi nec ligula elementum cursus pulvinar nec libero.",
    },
    {
      id: 3,
      title: "Create a Wordpress theme from Scractch",
      category: ["Business", "Idea", "Story"],
      image: "img/blogpost3.jpg",
      text1:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit massa vel mauris Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      text2:
        "Morbi ac nulla felis. Vestibulum maximus, mi eget finibus commodo,tellus ligula ultrices mauris, at condimentum erat risus id ante. Nullam pulvinar lorem eget luctus vestibulum. Vestibulum volutpat malesuada ante, eget tempor massa. Quisque maximus sagittis suscipit. Vivamus placerat, magna eget pulvinar sodales, sem nibh elementum justo, ac elementum ipsum lacus non tellus. In hac habitasse platea dictumst. Proin magna dolor, vestibulum vitae orci dapibus, commodo eleifend  nulla. Integer tincidunt dictum neque ac tempus. Aliquam in laoreet nisi. Ut nec libero dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas gravida, lorem et sagittis ullamcorper, erat est rutrum lacus, in mollis risus  mauris a nisi. Nullam non nisi nec ligula elementum cursus pulvinar nec libero.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas gravida,lorem et sagittis ullamcorper, erat est rutrum lacus, in mollis risus mauris a nisi. Nullam non nisi nec ligula elementum cursus pulvinar nec libero.",
    },
    {
      id: 4,
      title: "Create a Wordpress theme from Scractch",
      category: ["Business", "Idea", "Story"],
      image: "img/blogpost4.jpg",
      text1:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit massa vel mauris Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      text2:
        "Morbi ac nulla felis. Vestibulum maximus, mi eget finibus commodo,tellus ligula ultrices mauris, at condimentum erat risus id ante. Nullam pulvinar lorem eget luctus vestibulum. Vestibulum volutpat malesuada ante, eget tempor massa. Quisque maximus sagittis suscipit. Vivamus placerat, magna eget pulvinar sodales, sem nibh elementum justo, ac elementum ipsum lacus non tellus. In hac habitasse platea dictumst. Proin magna dolor, vestibulum vitae orci dapibus, commodo eleifend  nulla. Integer tincidunt dictum neque ac tempus. Aliquam in laoreet nisi. Ut nec libero dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas gravida, lorem et sagittis ullamcorper, erat est rutrum lacus, in mollis risus  mauris a nisi. Nullam non nisi nec ligula elementum cursus pulvinar nec libero.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas gravida,lorem et sagittis ullamcorper, erat est rutrum lacus, in mollis risus mauris a nisi. Nullam non nisi nec ligula elementum cursus pulvinar nec libero.",
    },
    {
      id: 5,
      title: "Create a Wordpress theme from Scractch",
      category: ["Business", "Idea", "Story"],
      image: "img/blogpost5.jpg",
      text1:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit massa vel mauris Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      text2:
        "Morbi ac nulla felis. Vestibulum maximus, mi eget finibus commodo,tellus ligula ultrices mauris, at condimentum erat risus id ante. Nullam pulvinar lorem eget luctus vestibulum. Vestibulum volutpat malesuada ante, eget tempor massa. Quisque maximus sagittis suscipit. Vivamus placerat, magna eget pulvinar sodales, sem nibh elementum justo, ac elementum ipsum lacus non tellus. In hac habitasse platea dictumst. Proin magna dolor, vestibulum vitae orci dapibus, commodo eleifend  nulla. Integer tincidunt dictum neque ac tempus. Aliquam in laoreet nisi. Ut nec libero dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas gravida, lorem et sagittis ullamcorper, erat est rutrum lacus, in mollis risus  mauris a nisi. Nullam non nisi nec ligula elementum cursus pulvinar nec libero.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas gravida,lorem et sagittis ullamcorper, erat est rutrum lacus, in mollis risus mauris a nisi. Nullam non nisi nec ligula elementum cursus pulvinar nec libero.",
    },
  ];

  return (
    <div className="container mx-auto mb-[5rem]">
      <div className="flex flex-col gap-[1rem]">
        <h1 className="text-[4rem] md:text-[6rem] mt-[10rem] md:mt-[0rem] text-center font-black text-white">
          My <span className="text-primary">Blog Post</span>
        </h1>
        <p className="text-[1.6rem] md:text-[2rem] text-white font-normal text-center">
          TIPS, INSIGHTS, AND BEST PRACTICES ABOUT WEB DESIGN AND DEVELOPPMENT
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem]">
          <Blogcard blogsData={blogsData} />
        </div>
      </div>
    </div>
  );
};

export default blog;
