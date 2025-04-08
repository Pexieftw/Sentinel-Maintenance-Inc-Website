"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Tag, Calendar, Clock, ChevronRight, ChevronLeft, Filter, TrendingUp, Award } from 'lucide-react';

import blogImage1 from "@/public/about1.jpg";
import { cleaningBlogs } from "../utils/data";


const categories = [...new Set(cleaningBlogs.map(blog => blog.category))];
const tags = [...new Set(cleaningBlogs.flatMap(blog => blog.tags))];

const readTimeBuckets = [
  { label: "Quick reads (< 5 min)", value: "short", filter: blog => blog.readTime < 5 },
  { label: "Medium reads (5-8 min)", value: "medium", filter: blog => blog.readTime >= 5 && blog.readTime <= 8 },
  { label: "Long reads (> 8 min)", value: "long", filter: blog => blog.readTime > 8 }
];

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState({ category: '', tag: '', search: '', readTime: '' });
  const [sortBy, setSortBy] = useState('latest');
  const [openFilter, setOpenFilter] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const [showAll, setShowAll] = useState(false);
  const visibleTags = showAll ? tags : tags.slice(0, 10);

  useEffect(() => {
    setIsClient(true);
  }, []);
  
  const blogsPerPage = 5;
  
  // Apply filters and sorting
  const filteredBlogs = cleaningBlogs.filter(blog => {
    const readTimeFilter = filter.readTime 
      ? (readTimeBuckets.find(bucket => bucket.value === filter.readTime)?.filter(blog) ?? true)
      : true;
      
    return (
      (filter.category ? blog.category === filter.category : true) &&
      (filter.tag ? blog.tags.includes(filter.tag) : true) &&
      readTimeFilter &&
      (filter.search 
        ? blog.title.toLowerCase().includes(filter.search.toLowerCase()) || 
          blog.excerpt.toLowerCase().includes(filter.search.toLowerCase())
        : true)
    );
  }).sort((a, b) => {
    if (sortBy === 'latest') {
      return new Date(b.date) - new Date(a.date);
    } else if (sortBy === 'oldest') {
      return new Date(a.date) - new Date(b.date);
    } else if (sortBy === 'readTime_asc') {
      return a.readTime - b.readTime;
    } else if (sortBy === 'readTime_desc') {
      return b.readTime - a.readTime;
    }
    return 0;
  });
  
  // Pagination
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  
  // When filters change, reset to page 1
  useEffect(() => {
    setCurrentPage(1);
  }, [filter, sortBy]);
  
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const resetFilters = () => {
    setFilter({ category: '', tag: '', search: '', readTime: '' });
    setSortBy('latest');
  };
  
  // Don't render until client-side to avoid hydration mismatch with Next.js Image
  if (!isClient) {
    return null;
  }
  
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4 lg:px-0 py-12">
        {/* Hero section */}
        <div className="z-0 bg-gradient-to-r from-primary-100 to-primary-300 text-white p-8 mb-12 shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Image 
              src={blogImage1} 
              alt="Cleaning service background" 
              fill 
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
          <div className="text-center md:text-left relative z-10">
            <h1 className="text-4xl font-bold mb-4">SMI Cleaning Services Blog</h1>
            <p className="text-lg max-w-2xl">
              Expert insights, tips, and industry news about commercial cleaning, 
              specialized services, and property maintenance across the GTA.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/" className="bg-white text-gray-800 px-5 py-2 w-full md:w-auto font-medium hover:bg-gray-200 transition-colors">
                Overview
              </Link>
              <Link href="/services" className="bg-transparent border border-white w-full md:w-auto text-white px-5 py-2  font-medium hover:bg-white hover:text-gray-800 transition-colors">
                Our Services
              </Link>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Main content */}
          <div id="blogs" className="w-full md:w-2/3">
            {/* Active filters */}
            {(filter.category || filter.tag || filter.readTime || filter.search) && (
              <div className="bg-white p-4  shadow-sm mb-6 flex flex-wrap items-center gap-2">
                <span className="text-gray-700 font-medium">Active filters:</span>
                
                {filter.category && (
                  <span className="bg-primary-300 text-white px-3 py-1  text-sm font-medium flex items-center gap-1">
                    {filter.category}
                    <button 
                      onClick={() => setFilter({...filter, category: ''})}
                      className="ml-1 text-white cursor-pointer hover:text-gray-200"
                    >
                      ✕
                    </button>
                  </span>
                )}
                
                {filter.tag && (
                  <span className="bg-primary-300 text-white px-3 py-1  text-sm font-medium flex items-center gap-1">
                    {filter.tag}
                    <button 
                      onClick={() => setFilter({...filter, tag: ''})}
                      className="ml-1 text-white cursor-pointer hover:text-gray-200"
                    >
                      ✕
                    </button>
                  </span>
                )}
                
                {filter.readTime && (
                  <span className="bg-primary-300 text-white px-3 py-1  text-sm font-medium flex items-center gap-1">
                    {readTimeBuckets.find(b => b.value === filter.readTime)?.label}
                    <button 
                      onClick={() => setFilter({...filter, readTime: ''})}
                      className="ml-1 text-white cursor-pointer hover:text-gray-200"
                    >
                      ✕
                    </button>
                  </span>
                )}
                
                {filter.search && (
                  <span className="bg-primary-300 text-white px-3 py-1  text-sm font-medium flex items-center gap-1">
                    Search: "{filter.search}"
                    <button 
                      onClick={() => setFilter({...filter, search: ''})}
                      className="ml-1 text-white cursor-pointer hover:text-gray-200"
                    >
                      ✕
                    </button>
                  </span>
                )}
                
                <button 
                  onClick={resetFilters}
                  className="ml-auto text-sm text-primary-300 hover:text-primary-400 hover:underline cursor-pointer"
                >
                  Clear all
                </button>
              </div>
            )}
            
            {/* Featured article */}
            {currentPage === 1 && filteredBlogs.find(blog => blog.featured) && !filter.category && !filter.tag && !filter.readTime && !filter.search && (
              <div className="bg-white  shadow-md overflow-hidden mb-10 transition-transform hover:shadow-lg hover:-translate-y-1">
                <div className="relative h-72">
                  <Image 
                    src={blogImage1} 
                    alt="Featured blog post" 
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, 66vw"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFeAJFuZzDCQAAAABJRU5ErkJggg=="
                    priority
                  />
                  <div className="absolute top-4 left-4 bg-primary-300 text-white px-3 py-1  text-sm font-medium">
                    Featured
                  </div>
                </div>
                <div className="p-6">

                  <div className="flex flex-col md:flex-row gap-2 items-start text-sm text-gray-500 mb-2">
                    <span className="bg-primary-300 text-white text-xs px-2 py-1 font-medium">
                      Commercial
                    </span>
                    <div className='flex'>
                      <div className='flex gap-1'>
                        <Calendar size={16} />
                        <span className="mr-4">April 3, 2025</span>
                      </div>
                      <div className='flex gap-1'>
                        <Clock size={16} />
                        <span>6 min read</span>
                      </div>
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold mb-3 text-gray-800">
                    <Link href={`/blogs/${"The Complete Guide to Commercial Janitorial Cleaning".toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')}`}>
                      The Complete Guide to Commercial Janitorial Cleaning
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Discover the essential practices for maintaining pristine commercial spaces. Learn how professional janitorial services can enhance your business environment and employee productivity.
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <Link href={`/blogs/${"The Complete Guide to Commercial Janitorial Cleaning".toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')}`} className="hover:underline inline-flex items-center text-primary-300 font-medium hover:text-primary-400 transition-colors">
                      Read more <ChevronRight size={16} className="ml-1" />
                    </Link>
                    <div className="flex flex-wrap gap-1">
                      {cleaningBlogs[0].tags.map(tag => (
                        <span 
                          key={tag} 
                          className="text-xs bg-gray-100 text-gray-600 px-2 py-1 cursor-pointer hover:bg-gray-200"
                          onClick={() => setFilter({...filter, tag})}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Sort options */}
            <div className="hidden md:flex justify-between items-center mb-6">
              <div className="text-gray-700">
                <span className="font-medium">{filteredBlogs.length}</span> Articles found
              </div>
              <div className="flex items-center">
                <span className="text-gray-600 mr-2">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-white border border-gray-300 text-gray-700 px-3 py-1.5  focus:outline-none focus:ring-2 focus:ring-primary-300"
                >
                  <option value="latest">Newest first</option>
                  <option value="oldest">Oldest first</option>
                  <option value="readTime_asc">Reading time (shortest first)</option>
                  <option value="readTime_desc">Reading time (longest first)</option>
                </select>
              </div>
            </div>
            
            {/* Blogs list */}
            <div className="space-y-8">
              {currentBlogs.length > 0 ? (
                currentBlogs.map((blog) => (
                  <div key={blog.id} className="bg-white  shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1">
                    <div className="md:flex">
                      <div className="md:w-1/3 relative">
                        <div className="h-48 md:h-full w-full relative">
                          <Image 
                            src={blog.image} 
                            alt={blog.title} 
                            fill
                            style={{ objectFit: 'cover' }}
                            sizes="(max-width: 768px) 100vw, 33vw"
                            placeholder="blur"
                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFeAJFuZzDCQAAAABJRU5ErkJggg=="
                          />
                          {blog.popular && (
                            <div className="absolute top-2 left-2 bg-primary-300 text-white px-2 py-0.5  text-xs font-medium flex items-center">
                              <TrendingUp size={12} className="mr-1" /> Popular
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="p-6 md:w-2/3">
                        <div className="flex flex-col md:flex-row gap-2 items-start text-sm text-gray-500 mb-2">
                          <span 
                            onClick={() => setFilter({...filter, category: blog.category})}
                            className="bg-primary-300 text-white text-xs px-2 py-1 font-medium cursor-pointer hover:bg-primary-400"
                          >
                            {blog.category}
                          </span>
                          
                          <div className="flex gap-4">
                            <div className="flex items-center gap-1">
                              <Calendar size={16} />
                              <span>{blog.date}</span>
                            </div>
                            
                            <div className="flex items-center gap-1">
                              <Clock size={16} />
                              <span 
                                onClick={() => {
                                  const bucket = readTimeBuckets.find(b => b.filter(blog));
                                  if (bucket) setFilter({...filter, readTime: bucket.value});
                                }}
                                className="cursor-pointer hover:text-primary-300"
                              >
                                {blog.readTime} min read
                              </span>
                            </div>
                          </div>
                        </div>

                        <h2 className="text-xl font-bold mb-2 text-gray-800transition-colors">
                          <Link href={`/blogs/${blog.title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')}`}>
                            {blog.title}
                          </Link>
                        </h2>
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {blog.excerpt}
                        </p>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                          <Link href={`/blogs/${blog.title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')}`} className="hover:underline inline-flex items-center text-primary-300 font-medium hover:text-primray-400 transition-colors">
                            Read more <ChevronRight size={16} className="ml-1" />
                          </Link>
                          <div className="flex flex-wrap gap-1">
                            {blog.tags.slice(0, 2).map(tag => (
                              <span 
                                key={tag} 
                                className="text-xs bg-gray-100 text-gray-600 px-2 py-1 cursor-pointer hover:bg-gray-200"
                                onClick={() => setFilter({...filter, tag})}
                              >
                                {tag}
                              </span>
                            ))}
                            {blog.tags.length > 2 && (
                              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1">
                                +{blog.tags.length - 2}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-16 bg-white  shadow-sm">
                  <h3 className="text-xl font-medium text-gray-800 mb-2">No blog posts found</h3>
                  <p className="text-gray-600 mb-4">Try adjusting your filters or search query</p>
                  <button 
                    onClick={resetFilters}
                    className="px-4 py-2 bg-primary-300 text-white  hover:bg-primary-400 transition-colors"
                  >
                    Reset filters
                  </button>
                </div>
              )}
            </div>
            
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-12">
                <div className="flex items-center space-x-1">
                  <button 
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-3 py-2 cursor-pointer  ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-200'}`}
                    aria-label="Previous page"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  
                  {Array.from({ length: totalPages }).map((_, index) => {
                    const pageNumber = index + 1;
                    
                    if (
                      pageNumber === 1 ||
                      pageNumber === totalPages ||
                      Math.abs(pageNumber - currentPage) <= 1
                    ) {
                      return (
                        <button
                          key={index}
                          onClick={() => handlePageChange(pageNumber)}
                          className={`px-4 py-2 cursor-pointer ${currentPage === pageNumber ? 'bg-primary-300 text-white' : 'text-gray-700 hover:bg-gray-200'}`}
                          aria-label={`Page ${pageNumber}`}
                          aria-current={currentPage === pageNumber ? 'page' : undefined}
                        >
                          {pageNumber}
                        </button>
                      );
                    }
                    
                    // Show ellipsis
                    if (
                      (pageNumber === 2 && currentPage > 3) ||
                      (pageNumber === totalPages - 1 && currentPage < totalPages - 2)
                    ) {
                      return <span key={index} className="px-2">...</span>;
                    }
                    
                    return null;
                  })}
                  
                  <button 
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-3 py-2 cursor-pointer  ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-200'}`}
                    aria-label="Next page"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            )}
          </div>
          
          {/* Sidebar */}
          <div className="w-full md:w-1/3">
            <div className="lg:sticky lg:top-6 space-y-6">
              {/* Search */}
              <div className="bg-white p-6  shadow-md">
                <h3 className="text-lg font-bold mb-4 text-gray-800">Search</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search blog posts..."
                    value={filter.search}
                    onChange={(e) => setFilter({...filter, search: e.target.value})}
                    className="w-full px-4 py-2 pl-10 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-transparent"
                  />
                  <Search size={18} className="absolute left-3 top-2.5 text-gray-400" />
                </div>
              </div>

              {/* Popular Posts */}
              <div className="bg-white p-6  shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-800">Popular Posts</h3>
                  <Award size={18} className="text-primary-300" />
                </div>
                <div className="space-y-4">
                  {cleaningBlogs.filter(blog => blog.popular).slice(0, 3).map(blog => (
                    <Link href={`/blogs/${blog.title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')}`} key={blog.id} className="flex gap-3 group hover:bg-gray-100">
                      <div className="relative w-20 h-20  overflow-hidden flex-shrink-0">
                        <Image 
                          src={blog.image} 
                          alt={blog.title} 
                          fill
                          style={{ objectFit: 'cover' }}
                          sizes="80px"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800transition-colors line-clamp-2">
                          {blog.title}
                        </h4>
                        <div className="flex items-center text-xs text-gray-500 mt-1">
                          <Clock size={12} className="mr-1" />
                          <span>{blog.readTime} min read</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white p-6  shadow-md">
                <h3 className="text-lg font-bold mb-4 text-gray-800">Categories</h3>
                <div className="space-y-2">
                  {categories.map(category => (
                    <div 
                      key={category}
                      onClick={() => setFilter({...filter, category: filter.category === category ? '' : category})}
                      className={`cursor-pointer px-3 py-2  flex justify-between items-center transition-colors ${filter.category === category ? 'bg-primary-300 hover:bg-primary-400 text-white' : 'hover:bg-gray-100'}`}
                    >
                      <span>{category}</span>
                      <span className={`text-sm ${filter.category === category ? ' text-white' : 'text-gray-600'}`}>
                        {cleaningBlogs.filter(blog => blog.category === category).length}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Reading Time Filter */}
              <div className="bg-white p-6  shadow-md">
                <h3 className="text-lg font-bold mb-4 text-gray-800">Reading Time</h3>
                <div className="space-y-2">
                  {readTimeBuckets.map(bucket => (
                    <div 
                      key={bucket.value}
                      onClick={() => setFilter({...filter, readTime: filter.readTime === bucket.value ? '' : bucket.value})}
                      className={`cursor-pointer px-3 py-2  flex justify-between items-center transition-colors ${filter.readTime === bucket.value ? 'bg-primary-300 text-white' : 'hover:bg-gray-100'}`}
                    >
                      <span>{bucket.label}</span>
                      <span className={`text-smpx-2 ${filter.readTime === bucket.value ? ' text-white' : 'text-gray-600'}`}>
                        {cleaningBlogs.filter(blog => bucket.filter(blog)).length}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Tags */}
              <div className="bg-white p-6 shadow-md">
                <h3 className="text-lg font-bold mb-4 text-gray-800">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {visibleTags.map(tag => (
                    <span 
                      key={tag}
                      onClick={() => setFilter({...filter, tag: filter.tag === tag ? '' : tag})}
                      className={`cursor-pointer inline-flex items-center px-3 py-1 text-sm font-medium transition-colors ${filter.tag === tag ? 'bg-primary-300 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                    >
                      <Tag size={14} className="mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
                {tags.length > 10 && (
                  <div className=" mt-4 text-sm">
                    <button
                      onClick={() => setShowAll(!showAll)}
                      className="cursor-pointer text-primary-300 text-primary-600 hover:underline transition-all font-medium"
                    >
                      {showAll ? 'Show less' : 'Show more'}
                    </button>
                  </div>
                )}
              </div>
              
              {/* Services CTA */}
              <div className="bg-white p-6  shadow-md border-l-4 border-primary-300">
                <h3 className="text-lg font-bold mb-2 text-gray-800">Need Cleaning Services?</h3>
                <p className="text-gray-600 mb-4">Contact SMI today for a free quote on our professional cleaning services throughout the GTA.</p>
                <Link href="/contact-us" className="inline-block bg-primary-300 text-white font-medium px-4 py-2  hover:bg-primary-400 transition-colors">
                  Contact Us Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile filter button */}
      <div className="md:hidden fixed bottom-6 right-6">
        <button 
          onClick={() => setOpenFilter(!openFilter)}
          className="bg-primary-300 text-white p-4  shadow-lg flex items-center justify-center"
        >
          <Filter size={24} />
        </button>
        
        {openFilter && (
          <div className="absolute bottom-16 right-0 bg-white  shadow-xl p-4 w-72 z-2000">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold">Filters</h3>
              <button onClick={() => setOpenFilter(false)} className="text-gray-500">
                Close
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Categories</h4>
                <select 
                  value={filter.category}
                  onChange={(e) => setFilter({...filter, category: e.target.value})}
                  className="w-full p-2 border "
                >
                  <option value="">All Categories</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Tags</h4>
                <select 
                  value={filter.tag}
                  onChange={(e) => setFilter({...filter, tag: e.target.value})}
                  className="w-full p-2 border "
                >
                  <option value="">All Tags</option>
                  {tags.map(tag => (
                    <option key={tag} value={tag}>{tag}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Sort By</h4>
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full p-2 border "
                >
                  <option value="latest">Latest</option>
                  <option value="oldest">Oldest</option>
                </select>
              </div>
              
              <button 
                onClick={resetFilters}
                className="w-full bg-gray-100 text-gray-800 p-2 "
              >
                Reset Filters
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}