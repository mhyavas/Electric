goog.provide('missionary.impl.RaceJoin');

/**
* @constructor
 * @implements {cljs.core.IFn}
*/
missionary.impl.RaceJoin.Process = (function (combinator,joincb,racecb,children,result,join,race){
this.combinator = combinator;
this.joincb = joincb;
this.racecb = racecb;
this.children = children;
this.result = result;
this.join = join;
this.race = race;
this.cljs$lang$protocol_mask$partition0$ = 1;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(missionary.impl.RaceJoin.Process.prototype.call = (function (unused__13632__auto__){
var self__ = this;
var self__ = this;
var G__40517 = (arguments.length - (1));
switch (G__40517) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.RaceJoin.Process.prototype.apply = (function (self__,args40516){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args40516)));
}));

(missionary.impl.RaceJoin.Process.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var j = this;
return (missionary.impl.RaceJoin.cancel.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.RaceJoin.cancel.cljs$core$IFn$_invoke$arity$1(j) : missionary.impl.RaceJoin.cancel.call(null,j));
}));

(missionary.impl.RaceJoin.Process.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"combinator","combinator",-746639828,null),new cljs.core.Symbol(null,"joincb","joincb",-885294516,null),new cljs.core.Symbol(null,"racecb","racecb",-738679350,null),new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),cljs.core.with_meta(new cljs.core.Symbol(null,"join","join",881669637,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"race","race",-1960778897,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null)], null))], null);
}));

(missionary.impl.RaceJoin.Process.cljs$lang$type = true);

(missionary.impl.RaceJoin.Process.cljs$lang$ctorStr = "missionary.impl.RaceJoin/Process");

(missionary.impl.RaceJoin.Process.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"missionary.impl.RaceJoin/Process");
}));

/**
 * Positional factory function for missionary.impl.RaceJoin/Process.
 */
missionary.impl.RaceJoin.__GT_Process = (function missionary$impl$RaceJoin$__GT_Process(combinator,joincb,racecb,children,result,join,race){
return (new missionary.impl.RaceJoin.Process(combinator,joincb,racecb,children,result,join,race));
});

missionary.impl.RaceJoin.cancel = (function missionary$impl$RaceJoin$cancel(j){
var n__5636__auto__ = j.children.length;
var i = (0);
while(true){
if((i < n__5636__auto__)){
var fexpr__40530_40554 = (j.children[i]);
(fexpr__40530_40554.cljs$core$IFn$_invoke$arity$0 ? fexpr__40530_40554.cljs$core$IFn$_invoke$arity$0() : fexpr__40530_40554.call(null));

var G__40555 = (i + (1));
i = G__40555;
continue;
} else {
return null;
}
break;
}
});
missionary.impl.RaceJoin.terminated = (function missionary$impl$RaceJoin$terminated(j){
var n = (j.join + (1));
(j.join = n);

if((n === j.result.length)){
var w = j.race;
if((w < (0))){
try{var G__40540 = j.combinator.apply(null,j.result);
var fexpr__40539 = j.joincb;
return (fexpr__40539.cljs$core$IFn$_invoke$arity$1 ? fexpr__40539.cljs$core$IFn$_invoke$arity$1(G__40540) : fexpr__40539.call(null,G__40540));
}catch (e40537){var e = e40537;
var fexpr__40538 = j.racecb;
return (fexpr__40538.cljs$core$IFn$_invoke$arity$1 ? fexpr__40538.cljs$core$IFn$_invoke$arity$1(e) : fexpr__40538.call(null,e));
}} else {
var G__40542 = (j.result[w]);
var fexpr__40541 = j.racecb;
return (fexpr__40541.cljs$core$IFn$_invoke$arity$1 ? fexpr__40541.cljs$core$IFn$_invoke$arity$1(G__40542) : fexpr__40541.call(null,G__40542));
}
} else {
return null;
}
});
missionary.impl.RaceJoin.run = (function missionary$impl$RaceJoin$run(r,c,ts,s,f){
var n = cljs.core.count(ts);
var i = cljs.core.iter(ts);
var j = missionary.impl.RaceJoin.__GT_Process(c,(cljs.core.truth_(r)?f:s),(cljs.core.truth_(r)?s:f),cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(n),cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(n),(0),(-2));
var index_40556 = (0);
while(true){
var join_40557 = ((function (index_40556,n,i,j){
return (function (x){
(j.result[index_40556] = x);

return missionary.impl.RaceJoin.terminated(j);
});})(index_40556,n,i,j))
;
var race_40558 = ((function (index_40556,join_40557,n,i,j){
return (function (x){
var w_40559 = j.race;
if((w_40559 < (0))){
(j.race = index_40556);

if(((-1) === w_40559)){
missionary.impl.RaceJoin.cancel(j);
} else {
}
} else {
}

return join_40557(x);
});})(index_40556,join_40557,n,i,j))
;
(j.children[index_40556] = (function (){var G__40551 = (cljs.core.truth_(r)?race_40558:join_40557);
var G__40552 = (cljs.core.truth_(r)?join_40557:race_40558);
var fexpr__40550 = i.next();
return (fexpr__40550.cljs$core$IFn$_invoke$arity$2 ? fexpr__40550.cljs$core$IFn$_invoke$arity$2(G__40551,G__40552) : fexpr__40550.call(null,G__40551,G__40552));
})());

if(cljs.core.truth_(i.hasNext())){
var G__40561 = (index_40556 + (1));
index_40556 = G__40561;
continue;
} else {
}
break;
}

if(((-2) === j.race)){
(j.race = (-1));
} else {
missionary.impl.RaceJoin.cancel(j);
}

return j;
});

//# sourceMappingURL=missionary.impl.RaceJoin.js.map
