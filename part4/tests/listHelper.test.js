const listHelper = require("../utils/list_helper")

test("dummy returns one", () => {
    const emptyBlogs = []

    const result = listHelper.dummy(emptyBlogs)
    expect(result).toBe(1)
})

// Array of different blog articles
const blogs = [
    { 
        _id: "5a422a851b54a676234d17f7",
        title: "React patterns",
        author: "Michael Chan",
        url: "https://reactpatterns.com/",
        likes: 7,
        __v: 0 
    },
    {
        _id: "5a422aa71b54a676234d17f8",
        title: "Go To Statement Considered Harmful",
        author: "Edsger W. Dijkstra",
        url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
        likes: 5,
        __v: 0
    },
    {
        _id: "5a422b3a1b54a676234d17f9",
        title: "Canonical string reduction",
        author: "Edsger W. Dijkstra",
        url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
        likes: 12,
        __v: 0
    },
    {
        _id: "5a422b891b54a676234d17fa",
        title: "First class tests",
        author: "Robert C. Martin",
        url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
        likes: 10,
        __v: 0
    },
    {
        _id: "5a422ba71b54a676234d17fb",
        title: "TDD harms architecture",
        author: "Robert C. Martin",
        url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
        likes: 0,
        __v: 0
    },
    {
        _id: "5a422bc61b54a676234d17fc",
        title: "Type wars",
        author: "Robert C. Martin",
        url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
        likes: 2,
        __v: 0
    },
    {
        _id: "5a422bc61b54a676234d17fc",
        title: "Solid Relevance",
        author: "Michael Chan",
        url: "http://blog.cleancoder.com/uncle-bob/2020/10/18/Solid-Relevance.html",
        likes: 12,
        __v: 0
    }
]

const blogsErrors = [
    { 
        _id: "5a422a851b54a676234d17f7",
        title: "React patterns",
        author: "Michael Chan",
        url: "https://reactpatterns.com/",
        __v: 0 
    },
    {
        _id: "5a422aa71b54a676234d17f8",
        title: "Go To Statement Considered Harmful",
        author: "Edsger W. Dijkstra",
        url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
        likes: "error",
        __v: 0
    }
]

describe("totalLikes calculates", () => {

    test("zero input", () => {
        const result = listHelper.totalLikes([])

        expect(result).toBe(0)
    })

    test("calculates array of one (with 7 likes) correctly", () => {
        const result = listHelper.totalLikes([blogs[0]])

        expect(result).toBe(7)
    })

    test("calculates an array of many (total 36) correctly", () => {
        const result = listHelper.totalLikes(blogs)

        expect(result).toBe(48)
    })

    test("rejects array with missing 'likes' property", () => {
        const result = listHelper.totalLikes(blogsErrors)

        expect(result).toBe("Error in blog object format")
    })
})

describe("favoriteBlog calculates", () => {
    const targetFavorite = {
        title: "Canonical string reduction",
        author: "Edsger W. Dijkstra",
        likes: 12
    }

    test("zero input", () => {
        const result = listHelper.favoriteBlog([])

        expect(result).toBe("Error: Blogs array is empty")
    })

    test("favorite blog correctly in a list of one", () => {
        const result = listHelper.favoriteBlog([blogs[0]])

        expect(result).toEqual(blogs[0])
    })

    test("favorite blog correctly out of a blog list", () => {
        const result = listHelper.favoriteBlog(blogs)

        expect(result).toEqual(targetFavorite)
    })
})

describe("mostBlogs calculates", () => {
    const mostBlogAuthor = {
        author: "Robert C. Martin",
        blogs: 3
    }

    test("zero input", () => {
        const result = listHelper.mostBlogs([])

        expect(result).toBe("Error: Blogs array is empty")
    })

    test("calculates author with most blogs", () => {
        const result = listHelper.mostBlogs(blogs)

        expect(result).toEqual(mostBlogAuthor)
    })
})

describe("mostLikes calculates", () => {
    const mostLikedAuthor = {
        author: "Michael Chan",
        likes: 19
    }

    test("zero input", () => {
        const result = listHelper.mostLikes([])

        expect(result).toBe("Error: Blogs array is empty")
    })

    test("calculates author with most likes", () => {
        const result = listHelper.mostLikes(blogs)

        expect(result).toEqual(mostLikedAuthor)
    })

})
