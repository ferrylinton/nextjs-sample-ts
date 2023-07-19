const posts: PostProp[] = [
    {
        id: "1",
        contentID: "satu",
        contentEN: "one"
    },
    {
        id: "2",
        contentID: "dua",
        contentEN: "two"
    },
    {
        id: "3",
        contentID: "tiga",
        contentEN: "three"
    }
]

export function findAll() {
    return posts;
}

export function findPostByID(postId: string) {
    return posts.find(post => post.id === postId);
}