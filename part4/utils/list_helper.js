const _ = require("lodash")

const dummy = (blogs) => {
    return !blogs || 1  // Added to be compliant to ESlint
}

const totalLikes = (blogs) => {
    const sumLikes = (acc, cur) => {
        return (cur.likes != undefined && (typeof(cur.likes) === "number"))
            ? acc + cur.likes
            : "Error in blog object format"
        
    }

    const sumOfLikes = blogs.reduce(sumLikes, 0)

    return sumOfLikes
}

const favoriteBlog = (blogs) => {
    let favorite = blogs[0]

    const findMax = (article) => {
        if (article.likes > favorite.likes) {
            favorite = {
                title: article.title,
                author: article.author,
                likes: article.likes
            }
        }
    }

    blogs.forEach(article => findMax(article))

    return (blogs.length > 0)
        ? favorite
        : "Error: Blogs array is empty"
}

const mostBlogs = (blogs) => {
    const result = _(blogs)  // Adapted from https://stackoverflow.com/questions/38774763/using-lodash-to-sum-values-by-key
        .groupBy("author")
        .map((obj, key) => ({
            author: key,
            blogs: obj.length
        }))
        .value()

    return (blogs.length > 0)
        ? _.orderBy(result, ["blogs"], ["desc"])[0]
        : "Error: Blogs array is empty"
}

const mostLikes = (blogs) => {
    const result = _(blogs)  // Adapted from https://stackoverflow.com/questions/38774763/using-lodash-to-sum-values-by-key
        .groupBy("author")
        .map((obj, key) => ({
            author: key,
            likes: _.sumBy(obj, "likes"),
        }))
        .value()

    return (blogs.length > 0)
        ? _.orderBy(result, ["likes"], ["desc"])[0]
        : "Error: Blogs array is empty"
}


module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs,
    mostLikes
}