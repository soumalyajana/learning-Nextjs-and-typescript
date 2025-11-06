// interface -> objects shapes tha =t you expect to extend
// supports declartion merging
// type -> more genaral -> object , unions , intersection, function


interface Box1 {
    width : number
}

interface Box1 {
    hight : number
}

const boxDemo : Box1 = {width : 10 , hight : 10}

