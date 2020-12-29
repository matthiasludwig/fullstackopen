const dummy = (blogs) => {
    return !blogs || 1  // Added to be compliant to ESlint
}

const totalLikes = (posts) => {
    const sumLikes = (acc, cur) => {
        return (cur.likes != undefined && (typeof(cur.likes) === "number"))
            ? acc + cur.likes
            : "Error in blog object format"
        
    }

    const sumOfLikes = posts.reduce(sumLikes, 0)

    return sumOfLikes
}


module.exports = {
    dummy,
    totalLikes
}