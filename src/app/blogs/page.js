'use client'
import { sectionObserver, visibilityObserver } from "@/utils/observer";
import { useContext, useEffect } from "react";
import "./globals.css";
import {allBlogs} from "/.contentlayer/generated";
import BlogsHomeCover from "@/components/blog/blogs_home_cover/BlogsHomeCover";
import { ThemeContext } from "../theme-provider";
import FeaturedBlogs from "@/components/blog/featured_blogs/FeaturedBlogs";
import { sortBlogs } from "@/utils";
import RecentPosts from "@/components/blog/recent_posts/RecentPosts";

export default function Blog() {
  const { darkMode } = useContext(ThemeContext);
  useEffect(() => {
    setTimeout(() => {
      const sections = document.querySelectorAll('section');
      const sectionMark = document.querySelectorAll('.current-section');
      visibilityObserver(sections, 0.2);
      sectionObserver(sectionMark);
    }, 1000);
  });

  const sortedBlogs = sortBlogs(allBlogs);
  return (
    <section className="flex-center" id={darkMode ? 'dark' : 'light'}>
      <main className="container flex-center flex-col">
        <span className="current-section" id="current-section-blog" />
        <BlogsHomeCover blog={sortedBlogs[1]} />
        <FeaturedBlogs blogs={sortedBlogs} />
        <RecentPosts blogs={sortedBlogs} />
      </main>
    </section>
  )
}
