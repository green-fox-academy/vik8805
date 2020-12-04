'use strict';
import { BlogPost } from '../../day-03/Data-structures/blog-post';

// Reuse your BlogPost class
// Create a Blog class which can
//  - store a list of BlogPosts
//  - add BlogPosts to the list
//  - delete(int) one item at given index
//  - update(int, BlogPost) one item at the given index and update it with another BlogPost

class Blog {
  private _listOfBlogPosts: BlogPost[] = [];

  public get listOfBlogPosts(): BlogPost[] {
    return this._listOfBlogPosts;
  }

  public delete(indexOfBlogpost: number) {
    this._listOfBlogPosts.splice(indexOfBlogpost, 1);
  }

  public update(indexOfBlogpost: number, BlogPost: BlogPost) {
    this._listOfBlogPosts.splice(indexOfBlogpost, 1, BlogPost);
  }

  public addToList(blogpostToAdd: BlogPost) {
    this._listOfBlogPosts.push(blogpostToAdd);
  }
}

let myBlog = new Blog();
let blogFirst = new BlogPost(
  'Lorem Ipsum',
  'John Doe',
  '2000.05.04.',
  'Lorem ipsum dolor sit amet.'
);
let blogSecond = new BlogPost(
  'Wait but why',
  'Tim Urban',
  '2010.10.10.',
  'A popular long-form, stick-figure-illustrated blog about almost everything.'
);
let blogThird = new BlogPost(
  'One Engineer Is Trying to Get IBM to Reckon With Trump',
  'William Turton',
  '2017.03.28.',
  'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.'
);

console.log(myBlog);

myBlog.addToList(blogFirst);
myBlog.addToList(blogSecond);
myBlog.addToList(blogThird);

console.log(myBlog);

myBlog.update(2, blogFirst);

console.log(myBlog);

myBlog.delete(2);

console.log(myBlog);
