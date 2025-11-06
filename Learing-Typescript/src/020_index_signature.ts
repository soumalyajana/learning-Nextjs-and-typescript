type NumberDicts = {[K : string] : number};

const counters : NumberDicts= {}

counters['Likes'] = 1
counters['Comments'] = 2
counters['shares'] = 3

type mattrics = Record<'likes' | 'view' | 'shres' , number>

const mm : mattrics = {likes : 1, view : 2 , shres :3}


type LooseMap = Record <string , number | undefined>
const lm : LooseMap = {}
lm["c"] = undefined
lm["x"] = 1