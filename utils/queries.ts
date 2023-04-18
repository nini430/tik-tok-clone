export const getAllPosts=()=>{
    const query=`*[_type=='post'] | order(_createdAt desc) {
        _id,
        caption,
        video {
            asset->{
                _id,
                url
            }
        },
        userId,
        postedBy->{
            _id,
            image,
            username,
        },
        likes,
        comments[]{
            comment,
            _key,
            postedBy->{
                username,
                image,
                _id
            }
        }
    }`

    return query;
}