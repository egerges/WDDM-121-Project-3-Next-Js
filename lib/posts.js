"use client"
// Dummy DB
const posts = [
    { id: 1, title: 'An Island nowhere', url: '/images/posts/1.jpg', alt: 'An Island nowhere', description: 'An Island nowhere, a pretty island where you can enjoy the sunrise', slug: '1' },
    { id: 2, title: 'Another Island nowhere', url: '/images/posts/2.jpg', alt: 'Another Island nowhere', description: 'Another Island nowhere, a pretty island where you can enjoy the sunset', slug: '2' },
    { id: 3, title: 'The Bird', url: '/images/posts/3.jpg', alt: 'The Bird', description: 'A Bird flying over us in the sky.', slug: '3' },
    { id: 4, title: 'The River', url: '/images/posts/4.jpg', alt: 'The River', description: 'A silent river passing throw the city.', slug: '4' },
    { id: 5, title: 'The Girl in White', url: '/images/posts/5.jpg', alt: 'The Girl in White', description: 'A girl in white, on the greens of the earth.', slug: '5' },
    { id: 6, title: 'The Girl in White, pt. 2', url: '/images/posts/6.jpg', alt: 'The Girl in White, pt. 2', description: 'Brightness of her dress brings joy to the eyes.', slug: '6' },
    { id: 7, title: 'Freedom!', url: '/images/posts/7.jpg', alt: 'Freedom', description: 'The fences that seperate us from the outside world.', slug: '7' },
    { id: 8, title: 'A Silhouette', url: '/images/posts/8.jpg', alt: 'A Silhouette', description: 'Reflection of her body praising the setting sun.', slug: '8' },
    { id: 9, title: 'A Flower...', url: '/images/posts/9.jpg', alt: 'A Flower...', description: 'An amazing Flower... The smell of a vibrant night.', slug: '9' },
    { id: 10, title: 'The Sky of Greatness', url: '/images/posts/10.jpg', alt: 'The Sky of Greatness', description: 'The Sky up high a greatness untouched.', slug: '10' },
    { id: 11, title: 'Behind the House', url: '/images/posts/11.jpg', alt: 'Behind the House', description: 'Around the corner a beautiful lady with a smile of joy.', slug: '11' },
    { id: 12, title: 'The Olive Tree', url: '/images/posts/12.jpg', alt: 'The Olive Tree', description: 'The girl in the olive tree from the guy behind the lens.', slug: '12' },
    { id: 13, title: 'That Look...', url: '/images/posts/13.jpg', alt: 'That Look...', description: 'Where is she looking? What is she smiling about?', slug: '13' },
    { id: 14, title: 'A New Dawn', url: '/images/posts/14.jpg', alt: 'A New Dawn', description: 'A dawn of a new day, a dawn of a new era...', slug: '14' }
];

// Returns all Posts
export function getAllPosts() {
    return posts;
}

// Returns all slugs
export function getAllSlugs() {
    const slugs = [];
    getAllPosts()
    .map(post => {
        slugs.push('/posts/' + post.slug);
    })
    return slugs;
}

// Return post by slug
export function getPostBySlug(slug) {
    let post = null;
    getAllPosts()
    .map(p => {
        if(p.slug == slug) {
            post = p;
            return ;
        }
    })
    return post;
}