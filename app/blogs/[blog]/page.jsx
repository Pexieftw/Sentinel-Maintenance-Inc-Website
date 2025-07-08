"use client";

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Calendar, 
  Clock, 
  Tag, 
  ArrowLeft,
  User,
  Share2,
  Bookmark,
  ChevronRight
} from 'lucide-react';
import { cleaningBlogs } from "../../utils/data";
import { notFound } from 'next/navigation';

function titleToSlug(title) {
  return title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
}

export default function BlogPost() {
  const params = useParams();
  const { blog } = params;
  
  const blogPost = cleaningBlogs.find(post => titleToSlug(post.title) === blog);

  if (!blogPost) {
    return notFound();
  }

  const relatedPosts = blogPost.relatedPosts 
    ? blogPost.relatedPosts.map(id => cleaningBlogs.find(post => post.id === id)).filter(Boolean)
    : [];

  return (
    <div className="pb-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-0 py-12">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link href="/blogs" className="text-primary-300 hover:text-primary-400 hover:underline transition-colors flex items-center text-sm font-medium">
            <ArrowLeft size={16} className="mr-2" /> Back to all articles
          </Link>
        </div>
        
        {/* Blog Header - Modern Style */}
        <div className="mb-12">
          {blogPost.category && (
            <span className="inline-block bg-primary-300 text-white text-md uppercase tracking-wider px-3 py-1 font-semibold mb-4">
              {blogPost.category}
            </span>
          )}
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
            {blogPost.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 mb-8">
            {/* Author section with rounded profile */}
            {blogPost.author && (
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden border-2 border-white shadow">
                  {blogPost.author.avatar.test ? (
                    <Image 
                      src={blogPost.author.avatar} 
                      alt={blogPost.author.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-primary-300 flex items-center justify-center">
                      <User size={24} className="text-white" />
                    </div>
                  )}
                </div>
                <div>
                  <p className="font-medium text-gray-900">{blogPost.author.name}</p>
                  <p className="text-sm text-gray-500">{blogPost.author.title}</p>
                </div>
              </div>
            )}
            
            {/* Article metadata */}
            <div className="flex items-center gap-4 text-sm text-gray-500 md:ml-auto">
              {blogPost.date && (
                  <div className="flex items-center gap-1">
                    <Calendar size={16} className="text-primary-300" />
                    <span>{blogPost.date}</span>
                  </div>
                )}
                
                {blogPost.readTime && (
                  <div className="flex items-center gap-1">
                    <Clock size={16} className="text-primary-300" />
                    <span>{blogPost.readTime} min read</span>
                  </div>
                )}
            </div>
          </div>
          
          {/* Featured Image with subtle rounded corners */}
          <div className="overflow-hidden shadow-xl mb-10">
            <div className="relative h-80 md:h-96 lg:h-112 w-full">
              <Image 
                src={blogPost.image} 
                alt={blogPost.title} 
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          
          {/* Tags in a more modern style */}
          {blogPost.tags && blogPost.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {blogPost.tags.map(tag => (
                <Link 
                  href={`/blogs?tag=${tag}`} 
                  key={tag}
                  className="text-sm bg-white border border-gray-200 text-gray-700 px-4 py-1 flex items-center hover:bg-primary-300 hover:border-primary-300 hover:text-white transition-colors"
                >
                  <Tag size={14} className="mr-1" />
                  {tag}
                </Link>
              ))}
            </div>
          )}
        </div>
        
        {/* Blog Content - With modern styling */}
        <div className="bg-white shadow-lg p-6 md:p-10 mb-12">
          {/* Introduction with larger font */}
          {blogPost.excerpt && (
            <div className="border-l-4 border-primary-300 pl-4 mb-10">
              <p className="text-xl text-gray-700 font-light italic">{blogPost.excerpt}</p>
            </div>
          )}
          
          <div className="prose prose-lg max-w-none">
            {/* Display sections if available */}
            {blogPost.sections && blogPost.sections.map((section, index) => (
              <div key={index} className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="inline-block w-8 h-1 bg-primary-300 mr-3"></span>
                  {section.heading}
                </h2>
                
                <p className="text-gray-700 mb-8">{section.content}</p>
                
                {section.imageUrl && (
                  <div className="my-8 overflow-hidden shadow-md">
                    <Image 
                      src={section.imageUrl} 
                      alt={section.heading}
                      width={800}
                      height={450}
                      className="w-full"
                    />
                  </div>
                )}
                
                {section.stats && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                    {section.stats.map((stat, idx) => (
                      <div key={idx} className="bg-primary-300 p-6 text-center shadow-sm border text-white">
                        <p className="text-4xl font-bold mb-1">{stat.value}</p>
                        <p>{stat.label}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {/* FAQs */}
            {blogPost.faqs && (
              <div className="text-center md:text-left mt-12 p-6 bg-primary-300">
                <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {blogPost.faqs.map((faq, idx) => (
                    <div key={idx} className="bg-white p-6 shadow-sm">
                      <h3 className="hidden md:flex text-lg font-bold text-gray-900 mb-3 items-center">
                        <span className="flex items-center justify-center bg-primary-300 text-white px-2 py-1 text-sm mr-3">Q</span>
                        {faq.question}
                      </h3>
                      <p className="pl-0 md:pl-9 text-gray-700">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Call to action */}
        <div className="bg-gradient-to-r from-primary-100 to-primary-300 p-8 text-white text-center mb-12 shadow-lg">
          <h2 className="text-2xl font-bold mb-3">Ready to experience our cleaning services?</h2>
          <p className="mb-6 text-green-50">Professional solutions tailored to your specific needs</p>
          <Link 
            href="/contact-us"
            className="inline-block bg-white text-gray-800 font-semibold px-6 py-3 hover:bg-gray-100 transition-colors shadow-md"
          >
            Contact Us
          </Link>
        </div>
        
        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-8 text-gray-900 flex items-center">
              <span className="inline-block w-6 h-1 bg-primary-300 mr-3"></span>
              Related Articles
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {relatedPosts.map(post => (
                <Link 
                  href={`/blogs/${titleToSlug(post.title)}`} 
                  key={post.id}
                  className="group"
                >
                  <div className="bg-white overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col border border-gray-100 transform group-hover:-translate-y-1">
                    <div className="relative h-48 w-full">
                      <Image 
                        src={post.image} 
                        alt={post.title} 
                        fill
                        className="object-cover"
                      />
                      {post.category && (
                        <div className="absolute top-3 left-3">
                          <span className="bg-primary-300 bg-opacity-90 text-white text-xs px-3 py-1">
                            {post.category}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-5 flex flex-col flex-grow">
                      <h3 className="font-bold text-lg mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                      
                      {post.excerpt && (
                        <p className="text-sm text-gray-600 mb-4 line-clamp-2 flex-grow">{post.excerpt}</p>
                      )}
                      
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                        {post.date && post.readTime && (
                          <p className="text-xs text-gray-500">
                            {post.date} • {post.readTime} min read
                          </p>
                        )}
                        <span className="text-primary-300 flex items-center text-sm font-medium">
                          Read More <ChevronRight size={16} className="ml-1" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}