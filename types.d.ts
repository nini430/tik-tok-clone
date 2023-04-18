export interface Video {
    caption:string;
    _id: string;
    video:{
        asset: {
            url:string;
            _id:string;
        }
    };
    userId: string;
    likes:{
        _key:string;
        _ref:string;
        _type:string;
    }[];
    postedBy:{
        _id:string;
        image:string;
        username:string;
    }
    comments:{
        comment:string;
        _key:string;
        postedBy:{
            _id:string;
            image:string;
            username:string;
        }
    }[]

}