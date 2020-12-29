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


module.exports = {
    dummy,
    totalLikes,
    favoriteBlog
}