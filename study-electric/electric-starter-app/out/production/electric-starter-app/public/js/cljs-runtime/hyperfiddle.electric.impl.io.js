goog.provide('hyperfiddle.electric.impl.io');
(com.cognitect.transit.types.UUID.prototype.cljs$core$IUUID$ = cljs.core.PROTOCOL_SENTINEL);
hyperfiddle.electric.impl.io.default_write_handler = cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((function (x){
hyperfiddle.electric.impl.io._last_unserializable_for_repl = x;

console.log("Unserializable reference transfer:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(x)], 0)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));

return "_";
}),(function (x){
return null;
}),(function (_){
return "";
}));
/**
 * Builds a minimal, cljc map/bounded-queue cache.
 *   One slot per key (map).
 *   Reaching `size` pops oldest value (bounded-queue).
 */
hyperfiddle.electric.impl.io.__GT_cache = (function hyperfiddle$electric$impl$io$__GT_cache(size){
var G__43341 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(((size * (2)) + (1)));
var arr43342_43678 = G__43341;
(arr43342_43678[(size * (2))] = cljs.core.identity((0)));

return G__43341;
});
hyperfiddle.electric.impl.io.cache_add = (function hyperfiddle$electric$impl$io$cache_add(cache,k,v){
if(cljs.core.truth_((function (){var i = (0);
while(true){
if((i < (cljs.core.count(cache) - (1)))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,hyperfiddle.electric.impl.array_fields.get(cache,i))){
var arr43344_43679 = cache;
(arr43344_43679[(i + (1))] = cljs.core.identity(v));

return true;
} else {
var G__43680 = (i + (2));
i = G__43680;
continue;
}
} else {
return null;
}
break;
}
})())){
return null;
} else {
var widx = hyperfiddle.electric.impl.array_fields.getswap(cache,(cljs.core.count(cache) - (1)),(function (p1__43343_SHARP_){
return cljs.core.mod((p1__43343_SHARP_ + (2)),(cljs.core.count(cache) - (1)));
}));
var arr43345 = cache;
(arr43345[widx] = cljs.core.identity(k));

return (arr43345[(widx + (1))] = cljs.core.identity(v));
}
});
hyperfiddle.electric.impl.io.cache_get = (function hyperfiddle$electric$impl$io$cache_get(cache,k){
var i = (0);
while(true){
if((i < (cljs.core.count(cache) - (1)))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,hyperfiddle.electric.impl.array_fields.get(cache,i))){
return hyperfiddle.electric.impl.array_fields.get(cache,(i + (1)));
} else {
var G__43681 = (i + (2));
i = G__43681;
continue;
}
} else {
return null;
}
break;
}
});
hyperfiddle.electric.impl.io.cache__GT_map = (function hyperfiddle$electric$impl$io$cache__GT_map(cache){
var i = (0);
var ac = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < (cljs.core.count(cache) - (1)))){
var G__43682 = (i + (2));
var G__43683 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ac,hyperfiddle.electric.impl.array_fields.get(cache,i),hyperfiddle.electric.impl.array_fields.get(cache,(i + (1))));
i = G__43682;
ac = G__43683;
continue;
} else {
return cljs.core.persistent_BANG_(ac);
}
break;
}
});
hyperfiddle.electric.impl.io._BANG_ex_cache = hyperfiddle.electric.impl.io.__GT_cache((16));
hyperfiddle.electric.impl.io.save_original_ex_BANG_ = (function hyperfiddle$electric$impl$io$save_original_ex_BANG_(fi){
var id = hyperfiddle.electric.debug.ex_id(fi);
var temp__5808__auto___43684 = cljs.core.ex_cause(fi);
if((temp__5808__auto___43684 == null)){
} else {
var cause_43685 = temp__5808__auto___43684;
if((cause_43685 instanceof hyperfiddle.electric.FailureInfo)){
} else {
hyperfiddle.electric.impl.io.cache_add(hyperfiddle.electric.impl.io._BANG_ex_cache,id,cause_43685);
}
}

return id;
});
hyperfiddle.electric.impl.io.get_original_ex = (function hyperfiddle$electric$impl$io$get_original_ex(id){
return hyperfiddle.electric.impl.io.cache_get(hyperfiddle.electric.impl.io._BANG_ex_cache,id);
});
hyperfiddle.electric.impl.io._STAR_write_handlers_STAR_ = null;
hyperfiddle.electric.impl.io.failure_writer = cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((function (_){
return "failure";
}),(function (x){
var err = x.error;
if((err instanceof missionary.Cancelled)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cancelled","cancelled",488726224)], null);
} else {
if((err instanceof hyperfiddle.electric.Pending)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pending","pending",-220036727)], null);
} else {
if((err instanceof hyperfiddle.electric.Remote)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remote","remote",-1593576576),hyperfiddle.electric.debug.serializable(cljs.core.ex_data(err))], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exception","exception",-335277064),cljs.core.ex_message(err),hyperfiddle.electric.debug.serializable(cljs.core.ex_data(err)),hyperfiddle.electric.impl.io.save_original_ex_BANG_(err)], null);

}
}
}
}));
hyperfiddle.electric.impl.io.write_opts = (function hyperfiddle$electric$impl$io$write_opts(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handlers","handlers",79528781),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hyperfiddle.electric.impl.io._STAR_write_handlers_STAR_,cljs.core.PersistentArrayMap.createAsIfByAssoc([hyperfiddle.electric.Failure,hyperfiddle.electric.impl.io.failure_writer,new cljs.core.Keyword(null,"default","default",-1987822328),hyperfiddle.electric.impl.io.default_write_handler])], 0)),new cljs.core.Keyword(null,"default-handler","default-handler",-1028159207),hyperfiddle.electric.impl.io.default_write_handler], null);
});
hyperfiddle.electric.impl.io._STAR_read_handlers_STAR_ = null;
hyperfiddle.electric.impl.io.failure_reader = cognitect.transit.read_handler((function (p__43354){
var vec__43355 = p__43354;
var seq__43356 = cljs.core.seq(vec__43355);
var first__43357 = cljs.core.first(seq__43356);
var seq__43356__$1 = cljs.core.next(seq__43356);
var tag = first__43357;
var args = seq__43356__$1;
var G__43358 = tag;
var G__43358__$1 = (((G__43358 instanceof cljs.core.Keyword))?G__43358.fqn:null);
switch (G__43358__$1) {
case "exception":
var vec__43359 = args;
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43359,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43359,(1),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43359,(2),null);
return (new hyperfiddle.electric.Failure(hyperfiddle.electric.debug.ex_info_STAR_.cljs$core$IFn$_invoke$arity$4(message,data,id,null)));

break;
case "remote":
var vec__43363 = args;
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43363,(0),null);
return (new hyperfiddle.electric.Failure(hyperfiddle.electric.debug.ex_info_STAR_.cljs$core$IFn$_invoke$arity$2("Remote error",(function (){var or__5045__auto__ = data;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})())));

break;
case "pending":
return (new hyperfiddle.electric.Failure((new hyperfiddle.electric.Pending())));

break;
case "cancelled":
return (new hyperfiddle.electric.Failure((new missionary.Cancelled())));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43358__$1)].join('')));

}
}));
hyperfiddle.electric.impl.io.read_opts = (function hyperfiddle$electric$impl$io$read_opts(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlers","handlers",79528781),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hyperfiddle.electric.impl.io._STAR_read_handlers_STAR_,new cljs.core.PersistentArrayMap(null, 1, ["failure",hyperfiddle.electric.impl.io.failure_reader], null)], 0))], null);
});
hyperfiddle.electric.impl.io.set_ints = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce_kv,(function (r,i,n){
var offset = (i << (2));
var G__43372 = r;
G__43372.setInt32(offset,n);

return G__43372;
}));
/**
 * Encode a control frame to a binary segment.
 */
hyperfiddle.electric.impl.io.encode_numbers = (function hyperfiddle$electric$impl$io$encode_numbers(xs){
var required = (cljs.core.count(xs) << (2));
var G__43374 = (new ArrayBuffer(required));
hyperfiddle.electric.impl.io.set_ints((new DataView(G__43374)),xs);

return G__43374;
});
/**
 * Decode a control frame from a binary segment.
 */
hyperfiddle.electric.impl.io.decode_numbers = (function hyperfiddle$electric$impl$io$decode_numbers(b){
return cljs.core.vec((function (){
if((typeof hyperfiddle !== 'undefined') && (typeof hyperfiddle.electric !== 'undefined') && (typeof hyperfiddle.electric.impl !== 'undefined') && (typeof hyperfiddle.electric.impl.io !== 'undefined') && (typeof hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io43376 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IReduce}
*/
hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io43376 = (function (b,meta43377){
this.b = b;
this.meta43377 = meta43377;
this.cljs$lang$protocol_mask$partition0$ = 917504;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io43376.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43378,meta43377__$1){
var self__ = this;
var _43378__$1 = this;
return (new hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io43376(self__.b,meta43377__$1));
}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io43376.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43378){
var self__ = this;
var _43378__$1 = this;
return self__.meta43377;
}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io43376.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,rf,r){
var self__ = this;
var ___$1 = this;
var l = self__.b.byteLength;
var v = (new DataView(self__.b));
var r__$1 = r;
var i = (0);
while(true){
if((i < l)){
var G__43687 = (function (){var G__43383 = r__$1;
var G__43384 = v.getInt32(i);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__43383,G__43384) : rf.call(null,G__43383,G__43384));
})();
var G__43688 = (i + (4));
r__$1 = G__43687;
i = G__43688;
continue;
} else {
return r__$1;
}
break;
}
}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io43376.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"meta43377","meta43377",-827948397,null)], null);
}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io43376.cljs$lang$type = true);

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io43376.cljs$lang$ctorStr = "hyperfiddle.electric.impl.io/t_hyperfiddle$electric$impl$io43376");

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io43376.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.io/t_hyperfiddle$electric$impl$io43376");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.io/t_hyperfiddle$electric$impl$io43376.
 */
hyperfiddle.electric.impl.io.__GT_t_hyperfiddle$electric$impl$io43376 = (function hyperfiddle$electric$impl$io$decode_numbers_$___GT_t_hyperfiddle$electric$impl$io43376(b__$1,meta43377){
return (new hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io43376(b__$1,meta43377));
});

}

return (new hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io43376(b,cljs.core.PersistentArrayMap.EMPTY));
})()
);
});
var _BANG_cache_43689 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write-handlers","write-handlers",-2097288911),hyperfiddle.electric.impl.io._STAR_write_handlers_STAR_,new cljs.core.Keyword(null,"writer","writer",-277568236),null], null));
hyperfiddle.electric.impl.io.transit_writer = (function hyperfiddle$electric$impl$io$transit_writer(){
return new cljs.core.Keyword(null,"writer","writer",-277568236).cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_cache_43689,(function (p__43388){
var map__43389 = p__43388;
var map__43389__$1 = cljs.core.__destructure_map(map__43389);
var cache = map__43389__$1;
var write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43389__$1,new cljs.core.Keyword(null,"write-handlers","write-handlers",-2097288911));
var writer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43389__$1,new cljs.core.Keyword(null,"writer","writer",-277568236));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(write_handlers,hyperfiddle.electric.impl.io._STAR_write_handlers_STAR_)){
if(cljs.core.truth_(writer)){
return cache;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cache,new cljs.core.Keyword(null,"writer","writer",-277568236),cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"json","json",1279968570),hyperfiddle.electric.impl.io.write_opts()));
}
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write-handlers","write-handlers",-2097288911),hyperfiddle.electric.impl.io._STAR_write_handlers_STAR_,new cljs.core.Keyword(null,"writer","writer",-277568236),cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"json","json",1279968570),hyperfiddle.electric.impl.io.write_opts())], null);
}
})));
});
/**
 * Encode a data frame to transit json
 */
hyperfiddle.electric.impl.io.encode = (function hyperfiddle$electric$impl$io$encode(x){
return cognitect.transit.write(hyperfiddle.electric.impl.io.transit_writer(),x);
});
var _BANG_cache_43690 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-handlers","read-handlers",2109459315),hyperfiddle.electric.impl.io._STAR_read_handlers_STAR_,new cljs.core.Keyword(null,"reader","reader",169660853),null], null));
hyperfiddle.electric.impl.io.transit_reader = (function hyperfiddle$electric$impl$io$transit_reader(){
return new cljs.core.Keyword(null,"reader","reader",169660853).cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_cache_43690,(function (p__43397){
var map__43398 = p__43397;
var map__43398__$1 = cljs.core.__destructure_map(map__43398);
var cache = map__43398__$1;
var read_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43398__$1,new cljs.core.Keyword(null,"read-handlers","read-handlers",2109459315));
var reader = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43398__$1,new cljs.core.Keyword(null,"reader","reader",169660853));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(read_handlers,hyperfiddle.electric.impl.io._STAR_read_handlers_STAR_)){
if(cljs.core.truth_(reader)){
return cache;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cache,new cljs.core.Keyword(null,"reader","reader",169660853),cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"json","json",1279968570),hyperfiddle.electric.impl.io.read_opts()));
}
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-handlers","read-handlers",2109459315),hyperfiddle.electric.impl.io._STAR_read_handlers_STAR_,new cljs.core.Keyword(null,"reader","reader",169660853),cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"json","json",1279968570),hyperfiddle.electric.impl.io.read_opts())], null);
}
})));
});
/**
 * Decode a data frame from transit json
 */
hyperfiddle.electric.impl.io.decode = (function hyperfiddle$electric$impl$io$decode(s){
return cognitect.transit.read(hyperfiddle.electric.impl.io.transit_reader(),s);
});
hyperfiddle.electric.impl.io.decode_str = (function hyperfiddle$electric$impl$io$decode_str(x){
try{var G__43402 = hyperfiddle.electric.impl.io.decode(x);
console.debug("\uD83D\uDD3D",G__43402);

return G__43402;
}catch (e43400){var t = e43400;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("Failed to decode",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),x], null),t);
}});
hyperfiddle.electric.impl.io.chunk_size = ((65536) >> (2));
hyperfiddle.electric.impl.io.message_reader = (function hyperfiddle$electric$impl$io$message_reader(_QMARK_read){

return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr43404_block_4 = (function hyperfiddle$electric$impl$io$message_reader_$_cr43404_block_4(cr43404_state){
try{var cr43404_place_14 = (cr43404_state[(1)]);
var cr43404_place_11 = (cr43404_state[(2)]);
var cr43404_place_15 = hyperfiddle.electric.impl.io.decode_numbers;
var cr43404_place_16 = cr43404_place_11;
var cr43404_place_17 = (function (){var G__43470 = cr43404_place_16;
var fexpr__43469 = cr43404_place_15;
return (fexpr__43469.cljs$core$IFn$_invoke$arity$1 ? fexpr__43469.cljs$core$IFn$_invoke$arity$1(G__43470) : fexpr__43469.call(null,G__43470));
})();
var cr43404_place_18 = cljs.core.reduce;
var cr43404_place_19 = cljs.core.conj_BANG_;
var cr43404_place_20 = cr43404_place_14;
var cr43404_place_21 = cr43404_place_17;
var cr43404_place_22 = (function (){var G__43473 = cr43404_place_19;
var G__43474 = cr43404_place_20;
var G__43475 = cr43404_place_21;
var fexpr__43472 = cr43404_place_18;
return (fexpr__43472.cljs$core$IFn$_invoke$arity$3 ? fexpr__43472.cljs$core$IFn$_invoke$arity$3(G__43473,G__43474,G__43475) : fexpr__43472.call(null,G__43473,G__43474,G__43475));
})();
var cr43404_place_23 = cljs.core.count;
var cr43404_place_24 = cr43404_place_17;
var cr43404_place_25 = (function (){var G__43477 = cr43404_place_24;
var fexpr__43476 = cr43404_place_23;
return (fexpr__43476.cljs$core$IFn$_invoke$arity$1 ? fexpr__43476.cljs$core$IFn$_invoke$arity$1(G__43477) : fexpr__43476.call(null,G__43477));
})();
var cr43404_place_26 = hyperfiddle.electric.impl.io.chunk_size;
var cr43404_place_27 = (cr43404_place_25 < cr43404_place_26);
var cr43404_place_28 = null;
if(cr43404_place_27){
(cr43404_state[(0)] = cr43404_block_7);

(cr43404_state[(1)] = null);

(cr43404_state[(2)] = null);

(cr43404_state[(1)] = cr43404_place_28);

(cr43404_state[(7)] = cr43404_place_22);

return cr43404_state;
} else {
(cr43404_state[(0)] = cr43404_block_5);

(cr43404_state[(7)] = cr43404_place_22);

return cr43404_state;
}
}catch (e43465){var cr43404_exception = e43465;
(cr43404_state[(0)] = null);

(cr43404_state[(1)] = null);

(cr43404_state[(2)] = null);

(cr43404_state[(4)] = null);

(cr43404_state[(5)] = null);

(cr43404_state[(3)] = null);

(cr43404_state[(6)] = null);

throw cr43404_exception;
}});
var cr43404_block_8 = (function hyperfiddle$electric$impl$io$message_reader_$_cr43404_block_8(cr43404_state){
try{var cr43404_place_28 = (cr43404_state[(1)]);
var cr43404_place_10 = (cr43404_state[(4)]);
var cr43404_place_8 = (cr43404_state[(5)]);
var cr43404_place_9 = (cr43404_state[(6)]);
var cr43404_place_35 = (function (){var G__43481 = cr43404_place_10;
var G__43482 = cr43404_place_28;
var fexpr__43480 = cr43404_place_9;
return (fexpr__43480.cljs$core$IFn$_invoke$arity$2 ? fexpr__43480.cljs$core$IFn$_invoke$arity$2(G__43481,G__43482) : fexpr__43480.call(null,G__43481,G__43482));
})();
var cr43404_place_36 = (function (){var G__43484 = cr43404_place_35;
var fexpr__43483 = cr43404_place_8;
return (fexpr__43483.cljs$core$IFn$_invoke$arity$1 ? fexpr__43483.cljs$core$IFn$_invoke$arity$1(G__43484) : fexpr__43483.call(null,G__43484));
})();
(cr43404_state[(0)] = cr43404_block_10);

(cr43404_state[(1)] = null);

(cr43404_state[(4)] = null);

(cr43404_state[(5)] = null);

(cr43404_state[(6)] = null);

(cr43404_state[(3)] = cr43404_place_36);

return cr43404_state;
}catch (e43479){var cr43404_exception = e43479;
(cr43404_state[(0)] = null);

(cr43404_state[(1)] = null);

(cr43404_state[(4)] = null);

(cr43404_state[(5)] = null);

(cr43404_state[(3)] = null);

(cr43404_state[(6)] = null);

throw cr43404_exception;
}});
var cr43404_block_6 = (function hyperfiddle$electric$impl$io$message_reader_$_cr43404_block_6(cr43404_state){
try{var cr43404_place_22 = (cr43404_state[(7)]);
var cr43404_place_30 = missionary.core.unpark();
var cr43404_place_31 = cr43404_place_22;
(cr43404_state[(0)] = cr43404_block_4);

(cr43404_state[(7)] = null);

(cr43404_state[(2)] = cr43404_place_30);

(cr43404_state[(1)] = cr43404_place_31);

return cr43404_state;
}catch (e43485){var cr43404_exception = e43485;
(cr43404_state[(0)] = null);

(cr43404_state[(1)] = null);

(cr43404_state[(2)] = null);

(cr43404_state[(4)] = null);

(cr43404_state[(7)] = null);

(cr43404_state[(5)] = null);

(cr43404_state[(3)] = null);

(cr43404_state[(6)] = null);

throw cr43404_exception;
}});
var cr43404_block_5 = (function hyperfiddle$electric$impl$io$message_reader_$_cr43404_block_5(cr43404_state){
try{var cr43404_place_29 = _QMARK_read;
(cr43404_state[(0)] = cr43404_block_6);

return missionary.core.park(cr43404_place_29);
}catch (e43487){var cr43404_exception = e43487;
(cr43404_state[(0)] = null);

(cr43404_state[(1)] = null);

(cr43404_state[(2)] = null);

(cr43404_state[(4)] = null);

(cr43404_state[(7)] = null);

(cr43404_state[(5)] = null);

(cr43404_state[(3)] = null);

(cr43404_state[(6)] = null);

throw cr43404_exception;
}});
var cr43404_block_1 = (function hyperfiddle$electric$impl$io$message_reader_$_cr43404_block_1(cr43404_state){
try{var cr43404_place_3 = _QMARK_read;
(cr43404_state[(0)] = cr43404_block_2);

return missionary.core.park(cr43404_place_3);
}catch (e43488){var cr43404_exception = e43488;
(cr43404_state[(0)] = null);

(cr43404_state[(1)] = null);

throw cr43404_exception;
}});
var cr43404_block_7 = (function hyperfiddle$electric$impl$io$message_reader_$_cr43404_block_7(cr43404_state){
try{var cr43404_place_22 = (cr43404_state[(7)]);
var cr43404_place_32 = cljs.core.persistent_BANG_;
var cr43404_place_33 = cr43404_place_22;
var cr43404_place_34 = (function (){var G__43491 = cr43404_place_33;
var fexpr__43490 = cr43404_place_32;
return (fexpr__43490.cljs$core$IFn$_invoke$arity$1 ? fexpr__43490.cljs$core$IFn$_invoke$arity$1(G__43491) : fexpr__43490.call(null,G__43491));
})();
(cr43404_state[(0)] = cr43404_block_8);

(cr43404_state[(7)] = null);

(cr43404_state[(1)] = cr43404_place_34);

return cr43404_state;
}catch (e43489){var cr43404_exception = e43489;
(cr43404_state[(0)] = null);

(cr43404_state[(1)] = null);

(cr43404_state[(4)] = null);

(cr43404_state[(7)] = null);

(cr43404_state[(5)] = null);

(cr43404_state[(3)] = null);

(cr43404_state[(6)] = null);

throw cr43404_exception;
}});
var cr43404_block_9 = (function hyperfiddle$electric$impl$io$message_reader_$_cr43404_block_9(cr43404_state){
try{var cr43404_place_2 = (cr43404_state[(1)]);
var cr43404_place_4 = (cr43404_state[(2)]);
var cr43404_place_37 = cljs.core.conj_BANG_;
var cr43404_place_38 = cr43404_place_2;
var cr43404_place_39 = hyperfiddle.electric.impl.io.decode_str;
var cr43404_place_40 = cr43404_place_4;
var cr43404_place_41 = (function (){var G__43494 = cr43404_place_40;
var fexpr__43493 = cr43404_place_39;
return (fexpr__43493.cljs$core$IFn$_invoke$arity$1 ? fexpr__43493.cljs$core$IFn$_invoke$arity$1(G__43494) : fexpr__43493.call(null,G__43494));
})();
var cr43404_place_42 = (function (){var G__43496 = cr43404_place_38;
var G__43497 = cr43404_place_41;
var fexpr__43495 = cr43404_place_37;
return (fexpr__43495.cljs$core$IFn$_invoke$arity$2 ? fexpr__43495.cljs$core$IFn$_invoke$arity$2(G__43496,G__43497) : fexpr__43495.call(null,G__43496,G__43497));
})();
(cr43404_state[(0)] = cr43404_block_1);

(cr43404_state[(2)] = null);

(cr43404_state[(1)] = cr43404_place_42);

return cr43404_state;
}catch (e43492){var cr43404_exception = e43492;
(cr43404_state[(0)] = null);

(cr43404_state[(1)] = null);

(cr43404_state[(2)] = null);

throw cr43404_exception;
}});
var cr43404_block_3 = (function hyperfiddle$electric$impl$io$message_reader_$_cr43404_block_3(cr43404_state){
try{var cr43404_place_2 = (cr43404_state[(1)]);
var cr43404_place_4 = (cr43404_state[(2)]);
var cr43404_place_8 = cljs.core.persistent_BANG_;
var cr43404_place_9 = cljs.core.conj_BANG_;
var cr43404_place_10 = cr43404_place_2;
var cr43404_place_11 = cr43404_place_4;
var cr43404_place_12 = cljs.core.transient$;
var cr43404_place_13 = cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IVector], null));
var cr43404_place_14 = (function (){var G__43500 = cr43404_place_13;
var fexpr__43499 = cr43404_place_12;
return (fexpr__43499.cljs$core$IFn$_invoke$arity$1 ? fexpr__43499.cljs$core$IFn$_invoke$arity$1(G__43500) : fexpr__43499.call(null,G__43500));
})();
(cr43404_state[(0)] = cr43404_block_4);

(cr43404_state[(1)] = null);

(cr43404_state[(2)] = null);

(cr43404_state[(5)] = cr43404_place_8);

(cr43404_state[(6)] = cr43404_place_9);

(cr43404_state[(4)] = cr43404_place_10);

(cr43404_state[(2)] = cr43404_place_11);

(cr43404_state[(1)] = cr43404_place_14);

return cr43404_state;
}catch (e43498){var cr43404_exception = e43498;
(cr43404_state[(0)] = null);

(cr43404_state[(1)] = null);

(cr43404_state[(2)] = null);

(cr43404_state[(3)] = null);

throw cr43404_exception;
}});
var cr43404_block_2 = (function hyperfiddle$electric$impl$io$message_reader_$_cr43404_block_2(cr43404_state){
try{var cr43404_place_4 = missionary.core.unpark();
var cr43404_place_5 = cr43404_place_4;
var cr43404_place_6 = typeof cr43404_place_5 === 'string';
var cr43404_place_7 = null;
if(cr43404_place_6){
(cr43404_state[(0)] = cr43404_block_9);

(cr43404_state[(2)] = cr43404_place_4);

return cr43404_state;
} else {
(cr43404_state[(0)] = cr43404_block_3);

(cr43404_state[(2)] = cr43404_place_4);

(cr43404_state[(3)] = cr43404_place_7);

return cr43404_state;
}
}catch (e43501){var cr43404_exception = e43501;
(cr43404_state[(0)] = null);

(cr43404_state[(1)] = null);

throw cr43404_exception;
}});
var cr43404_block_0 = (function hyperfiddle$electric$impl$io$message_reader_$_cr43404_block_0(cr43404_state){
try{var cr43404_place_0 = cljs.core.transient$;
var cr43404_place_1 = cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IVector], null));
var cr43404_place_2 = (function (){var G__43504 = cr43404_place_1;
var fexpr__43503 = cr43404_place_0;
return (fexpr__43503.cljs$core$IFn$_invoke$arity$1 ? fexpr__43503.cljs$core$IFn$_invoke$arity$1(G__43504) : fexpr__43503.call(null,G__43504));
})();
(cr43404_state[(0)] = cr43404_block_1);

(cr43404_state[(1)] = cr43404_place_2);

return cr43404_state;
}catch (e43502){var cr43404_exception = e43502;
(cr43404_state[(0)] = null);

throw cr43404_exception;
}});
var cr43404_block_10 = (function hyperfiddle$electric$impl$io$message_reader_$_cr43404_block_10(cr43404_state){
try{var cr43404_place_7 = (cr43404_state[(3)]);
(cr43404_state[(0)] = null);

(cr43404_state[(3)] = null);

return cr43404_place_7;
}catch (e43505){var cr43404_exception = e43505;
(cr43404_state[(0)] = null);

(cr43404_state[(3)] = null);

throw cr43404_exception;
}});
return cloroutine.impl.coroutine((function (){var G__43506 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((8));
(G__43506[(0)] = cr43404_block_0);

return G__43506;
})());
})(),missionary.core.sp_run);
});
/**
 * Returns a function taking an Electric message and returning a task writing it as individual frames using provided
 * function. Might cut a message into chunks if its size would exceed the server payload limit.
 * An empty message (0b) is written to notify the end of frame.
 */
hyperfiddle.electric.impl.io.message_writer = (function hyperfiddle$electric$impl$io$message_writer(write){
return (function (p1__43507_SHARP_){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr43508_block_14 = (function hyperfiddle$electric$impl$io$message_writer_$_cr43508_block_14(cr43508_state){
try{var cr43508_place_9 = (cr43508_state[(1)]);
(cr43508_state[(0)] = null);

(cr43508_state[(1)] = null);

return cr43508_place_9;
}catch (e43607){var cr43508_exception = e43607;
(cr43508_state[(0)] = null);

(cr43508_state[(1)] = null);

throw cr43508_exception;
}});
var cr43508_block_1 = (function hyperfiddle$electric$impl$io$message_writer_$_cr43508_block_1(cr43508_state){
try{var cr43508_place_4 = (cr43508_state[(1)]);
var cr43508_place_5 = cr43508_place_4;
var cr43508_place_6 = cr43508_place_5;
var cr43508_place_7 = null;
var cr43508_place_8 = (cr43508_place_6 == cr43508_place_7);
var cr43508_place_9 = null;
if(cr43508_place_8){
(cr43508_state[(0)] = cr43508_block_7);

(cr43508_state[(1)] = null);

(cr43508_state[(1)] = cr43508_place_9);

return cr43508_state;
} else {
(cr43508_state[(0)] = cr43508_block_2);

(cr43508_state[(2)] = cr43508_place_5);

return cr43508_state;
}
}catch (e43608){var cr43508_exception = e43608;
(cr43508_state[(0)] = null);

(cr43508_state[(1)] = null);

throw cr43508_exception;
}});
var cr43508_block_4 = (function hyperfiddle$electric$impl$io$message_writer_$_cr43508_block_4(cr43508_state){
try{var cr43508_place_20 = (cr43508_state[(4)]);
var cr43508_place_26 = (cr43508_state[(5)]);
var cr43508_place_31 = cr43508_place_26;
var cr43508_place_32 = cljs.core.ex_info;
var cr43508_place_33 = "Failed to encode";
var cr43508_place_34 = new cljs.core.Keyword(null,"value","value",305978217);
var cr43508_place_35 = cr43508_place_20;
var cr43508_place_36 = cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([cr43508_place_34,cr43508_place_35]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr43508_place_37 = cr43508_place_31;
var cr43508_place_38 = (function (){var G__43612 = cr43508_place_33;
var G__43613 = cr43508_place_36;
var G__43614 = cr43508_place_37;
var fexpr__43611 = cr43508_place_32;
return (fexpr__43611.cljs$core$IFn$_invoke$arity$3 ? fexpr__43611.cljs$core$IFn$_invoke$arity$3(G__43612,G__43613,G__43614) : fexpr__43611.call(null,G__43612,G__43613,G__43614));
})();
var cr43508_place_39 = (function(){throw cr43508_place_38})();
(cr43508_state[(0)] = null);

(cr43508_state[(2)] = null);

(cr43508_state[(1)] = null);

(cr43508_state[(3)] = null);

(cr43508_state[(4)] = null);

(cr43508_state[(5)] = null);

return null;
}catch (e43610){var cr43508_exception = e43610;
(cr43508_state[(0)] = cr43508_block_5);

(cr43508_state[(4)] = null);

(cr43508_state[(2)] = true);

(cr43508_state[(5)] = cr43508_exception);

return cr43508_state;
}});
var cr43508_block_10 = (function hyperfiddle$electric$impl$io$message_writer_$_cr43508_block_10(cr43508_state){
try{var cr43508_place_61 = missionary.core.unpark();
(cr43508_state[(0)] = cr43508_block_13);

(cr43508_state[(3)] = cr43508_place_61);

return cr43508_state;
}catch (e43615){var cr43508_exception = e43615;
(cr43508_state[(0)] = null);

(cr43508_state[(1)] = null);

(cr43508_state[(3)] = null);

throw cr43508_exception;
}});
var cr43508_block_12 = (function hyperfiddle$electric$impl$io$message_writer_$_cr43508_block_12(cr43508_state){
try{var cr43508_place_48 = (cr43508_state[(2)]);
var cr43508_place_72 = missionary.core.unpark();
var cr43508_place_73 = cljs.core.subvec;
var cr43508_place_74 = cr43508_place_48;
var cr43508_place_75 = hyperfiddle.electric.impl.io.chunk_size;
var cr43508_place_76 = (function (){var G__43618 = cr43508_place_74;
var G__43619 = cr43508_place_75;
var fexpr__43617 = cr43508_place_73;
return (fexpr__43617.cljs$core$IFn$_invoke$arity$2 ? fexpr__43617.cljs$core$IFn$_invoke$arity$2(G__43618,G__43619) : fexpr__43617.call(null,G__43618,G__43619));
})();
(cr43508_state[(0)] = cr43508_block_8);

(cr43508_state[(2)] = cr43508_place_76);

return cr43508_state;
}catch (e43616){var cr43508_exception = e43616;
(cr43508_state[(0)] = null);

(cr43508_state[(2)] = null);

(cr43508_state[(1)] = null);

throw cr43508_exception;
}});
var cr43508_block_8 = (function hyperfiddle$electric$impl$io$message_writer_$_cr43508_block_8(cr43508_state){
try{var cr43508_place_48 = (cr43508_state[(2)]);
var cr43508_place_49 = cljs.core.count;
var cr43508_place_50 = cr43508_place_48;
var cr43508_place_51 = (function (){var G__43622 = cr43508_place_50;
var fexpr__43621 = cr43508_place_49;
return (fexpr__43621.cljs$core$IFn$_invoke$arity$1 ? fexpr__43621.cljs$core$IFn$_invoke$arity$1(G__43622) : fexpr__43621.call(null,G__43622));
})();
var cr43508_place_52 = hyperfiddle.electric.impl.io.chunk_size;
var cr43508_place_53 = (cr43508_place_51 >= cr43508_place_52);
var cr43508_place_54 = null;
if(cr43508_place_53){
(cr43508_state[(0)] = cr43508_block_11);

return cr43508_state;
} else {
(cr43508_state[(0)] = cr43508_block_9);

(cr43508_state[(3)] = cr43508_place_54);

return cr43508_state;
}
}catch (e43620){var cr43508_exception = e43620;
(cr43508_state[(0)] = null);

(cr43508_state[(2)] = null);

(cr43508_state[(1)] = null);

throw cr43508_exception;
}});
var cr43508_block_0 = (function hyperfiddle$electric$impl$io$message_writer_$_cr43508_block_0(cr43508_state){
try{var cr43508_place_0 = cljs.core.seq;
var cr43508_place_1 = cljs.core.pop;
var cr43508_place_2 = p1__43507_SHARP_;
var cr43508_place_3 = (function (){var G__43625 = cr43508_place_2;
var fexpr__43624 = cr43508_place_1;
return (fexpr__43624.cljs$core$IFn$_invoke$arity$1 ? fexpr__43624.cljs$core$IFn$_invoke$arity$1(G__43625) : fexpr__43624.call(null,G__43625));
})();
var cr43508_place_4 = (function (){var G__43627 = cr43508_place_3;
var fexpr__43626 = cr43508_place_0;
return (fexpr__43626.cljs$core$IFn$_invoke$arity$1 ? fexpr__43626.cljs$core$IFn$_invoke$arity$1(G__43627) : fexpr__43626.call(null,G__43627));
})();
(cr43508_state[(0)] = cr43508_block_1);

(cr43508_state[(1)] = cr43508_place_4);

return cr43508_state;
}catch (e43623){var cr43508_exception = e43623;
(cr43508_state[(0)] = null);

throw cr43508_exception;
}});
var cr43508_block_7 = (function hyperfiddle$electric$impl$io$message_writer_$_cr43508_block_7(cr43508_state){
try{var cr43508_place_46 = cljs.core.peek;
var cr43508_place_47 = p1__43507_SHARP_;
var cr43508_place_48 = (function (){var G__43633 = cr43508_place_47;
var fexpr__43632 = cr43508_place_46;
return (fexpr__43632.cljs$core$IFn$_invoke$arity$1 ? fexpr__43632.cljs$core$IFn$_invoke$arity$1(G__43633) : fexpr__43632.call(null,G__43633));
})();
(cr43508_state[(0)] = cr43508_block_8);

(cr43508_state[(2)] = cr43508_place_48);

return cr43508_state;
}catch (e43630){var cr43508_exception = e43630;
(cr43508_state[(0)] = null);

(cr43508_state[(1)] = null);

throw cr43508_exception;
}});
var cr43508_block_6 = (function hyperfiddle$electric$impl$io$message_writer_$_cr43508_block_6(cr43508_state){
try{var cr43508_place_21 = (cr43508_state[(3)]);
var cr43508_place_44 = missionary.core.unpark();
var cr43508_place_45 = cr43508_place_21;
(cr43508_state[(0)] = cr43508_block_1);

(cr43508_state[(3)] = null);

(cr43508_state[(1)] = cr43508_place_45);

return cr43508_state;
}catch (e43634){var cr43508_exception = e43634;
(cr43508_state[(0)] = null);

(cr43508_state[(1)] = null);

(cr43508_state[(3)] = null);

throw cr43508_exception;
}});
var cr43508_block_11 = (function hyperfiddle$electric$impl$io$message_writer_$_cr43508_block_11(cr43508_state){
try{var cr43508_place_48 = (cr43508_state[(2)]);
var cr43508_place_62 = hyperfiddle.electric.impl.io.encode_numbers;
var cr43508_place_63 = cljs.core.subvec;
var cr43508_place_64 = cr43508_place_48;
var cr43508_place_65 = (0);
var cr43508_place_66 = hyperfiddle.electric.impl.io.chunk_size;
var cr43508_place_67 = (function (){var G__43637 = cr43508_place_64;
var G__43638 = cr43508_place_65;
var G__43639 = cr43508_place_66;
var fexpr__43636 = cr43508_place_63;
return (fexpr__43636.cljs$core$IFn$_invoke$arity$3 ? fexpr__43636.cljs$core$IFn$_invoke$arity$3(G__43637,G__43638,G__43639) : fexpr__43636.call(null,G__43637,G__43638,G__43639));
})();
var cr43508_place_68 = (function (){var G__43641 = cr43508_place_67;
var fexpr__43640 = cr43508_place_62;
return (fexpr__43640.cljs$core$IFn$_invoke$arity$1 ? fexpr__43640.cljs$core$IFn$_invoke$arity$1(G__43641) : fexpr__43640.call(null,G__43641));
})();
var cr43508_place_69 = write;
var cr43508_place_70 = cr43508_place_68;
var cr43508_place_71 = (function (){var G__43643 = cr43508_place_70;
var fexpr__43642 = cr43508_place_69;
return (fexpr__43642.cljs$core$IFn$_invoke$arity$1 ? fexpr__43642.cljs$core$IFn$_invoke$arity$1(G__43643) : fexpr__43642.call(null,G__43643));
})();
(cr43508_state[(0)] = cr43508_block_12);

return missionary.core.park(cr43508_place_71);
}catch (e43635){var cr43508_exception = e43635;
(cr43508_state[(0)] = null);

(cr43508_state[(2)] = null);

(cr43508_state[(1)] = null);

throw cr43508_exception;
}});
var cr43508_block_5 = (function hyperfiddle$electric$impl$io$message_writer_$_cr43508_block_5(cr43508_state){
try{var cr43508_place_27 = (cr43508_state[(2)]);
var cr43508_place_26 = (cr43508_state[(5)]);
var cr43508_place_40 = (cljs.core.truth_(cr43508_place_27)?(function(){throw cr43508_place_26})():cr43508_place_26);
var cr43508_place_41 = write;
var cr43508_place_42 = cr43508_place_40;
var cr43508_place_43 = (function (){var G__43646 = cr43508_place_42;
var fexpr__43645 = cr43508_place_41;
return (fexpr__43645.cljs$core$IFn$_invoke$arity$1 ? fexpr__43645.cljs$core$IFn$_invoke$arity$1(G__43646) : fexpr__43645.call(null,G__43646));
})();
(cr43508_state[(0)] = cr43508_block_6);

(cr43508_state[(2)] = null);

(cr43508_state[(5)] = null);

return missionary.core.park(cr43508_place_43);
}catch (e43644){var cr43508_exception = e43644;
(cr43508_state[(0)] = null);

(cr43508_state[(2)] = null);

(cr43508_state[(1)] = null);

(cr43508_state[(3)] = null);

(cr43508_state[(5)] = null);

throw cr43508_exception;
}});
var cr43508_block_9 = (function hyperfiddle$electric$impl$io$message_writer_$_cr43508_block_9(cr43508_state){
try{var cr43508_place_48 = (cr43508_state[(2)]);
var cr43508_place_55 = hyperfiddle.electric.impl.io.encode_numbers;
var cr43508_place_56 = cr43508_place_48;
var cr43508_place_57 = (function (){var G__43649 = cr43508_place_56;
var fexpr__43648 = cr43508_place_55;
return (fexpr__43648.cljs$core$IFn$_invoke$arity$1 ? fexpr__43648.cljs$core$IFn$_invoke$arity$1(G__43649) : fexpr__43648.call(null,G__43649));
})();
var cr43508_place_58 = write;
var cr43508_place_59 = cr43508_place_57;
var cr43508_place_60 = (function (){var G__43651 = cr43508_place_59;
var fexpr__43650 = cr43508_place_58;
return (fexpr__43650.cljs$core$IFn$_invoke$arity$1 ? fexpr__43650.cljs$core$IFn$_invoke$arity$1(G__43651) : fexpr__43650.call(null,G__43651));
})();
(cr43508_state[(0)] = cr43508_block_10);

(cr43508_state[(2)] = null);

return missionary.core.park(cr43508_place_60);
}catch (e43647){var cr43508_exception = e43647;
(cr43508_state[(0)] = null);

(cr43508_state[(2)] = null);

(cr43508_state[(1)] = null);

(cr43508_state[(3)] = null);

throw cr43508_exception;
}});
var cr43508_block_13 = (function hyperfiddle$electric$impl$io$message_writer_$_cr43508_block_13(cr43508_state){
try{var cr43508_place_54 = (cr43508_state[(3)]);
(cr43508_state[(0)] = cr43508_block_14);

(cr43508_state[(3)] = null);

(cr43508_state[(1)] = cr43508_place_54);

return cr43508_state;
}catch (e43652){var cr43508_exception = e43652;
(cr43508_state[(0)] = null);

(cr43508_state[(1)] = null);

(cr43508_state[(3)] = null);

throw cr43508_exception;
}});
var cr43508_block_2 = (function hyperfiddle$electric$impl$io$message_writer_$_cr43508_block_2(cr43508_state){
try{var cr43508_place_5 = (cr43508_state[(2)]);
var cr43508_place_10 = cr43508_place_5;
var cr43508_place_11 = cljs.core.seq;
var cr43508_place_12 = cr43508_place_10;
var cr43508_place_13 = (function (){var G__43655 = cr43508_place_12;
var fexpr__43654 = cr43508_place_11;
return (fexpr__43654.cljs$core$IFn$_invoke$arity$1 ? fexpr__43654.cljs$core$IFn$_invoke$arity$1(G__43655) : fexpr__43654.call(null,G__43655));
})();
var cr43508_place_14 = cljs.core.first;
var cr43508_place_15 = cr43508_place_13;
var cr43508_place_16 = (function (){var G__43658 = cr43508_place_15;
var fexpr__43657 = cr43508_place_14;
return (fexpr__43657.cljs$core$IFn$_invoke$arity$1 ? fexpr__43657.cljs$core$IFn$_invoke$arity$1(G__43658) : fexpr__43657.call(null,G__43658));
})();
var cr43508_place_17 = cljs.core.next;
var cr43508_place_18 = cr43508_place_13;
var cr43508_place_19 = (function (){var G__43661 = cr43508_place_18;
var fexpr__43660 = cr43508_place_17;
return (fexpr__43660.cljs$core$IFn$_invoke$arity$1 ? fexpr__43660.cljs$core$IFn$_invoke$arity$1(G__43661) : fexpr__43660.call(null,G__43661));
})();
var cr43508_place_20 = cr43508_place_16;
var cr43508_place_21 = cr43508_place_19;
var cr43508_place_22 = console.debug;
var cr43508_place_23 = "\uD83D\uDD3C";
var cr43508_place_24 = cr43508_place_20;
var cr43508_place_25 = (function (){var G__43663 = cr43508_place_23;
var G__43664 = cr43508_place_24;
var fexpr__43662 = cr43508_place_22;
return (fexpr__43662.cljs$core$IFn$_invoke$arity$2 ? fexpr__43662.cljs$core$IFn$_invoke$arity$2(G__43663,G__43664) : fexpr__43662.call(null,G__43663,G__43664));
})();
var cr43508_place_26 = null;
var cr43508_place_27 = false;
(cr43508_state[(0)] = cr43508_block_3);

(cr43508_state[(2)] = null);

(cr43508_state[(2)] = cr43508_place_27);

(cr43508_state[(3)] = cr43508_place_21);

(cr43508_state[(4)] = cr43508_place_20);

(cr43508_state[(5)] = cr43508_place_26);

return cr43508_state;
}catch (e43653){var cr43508_exception = e43653;
(cr43508_state[(0)] = null);

(cr43508_state[(1)] = null);

(cr43508_state[(2)] = null);

throw cr43508_exception;
}});
var cr43508_block_3 = (function hyperfiddle$electric$impl$io$message_writer_$_cr43508_block_3(cr43508_state){
try{var cr43508_place_20 = (cr43508_state[(4)]);
var cr43508_place_28 = hyperfiddle.electric.impl.io.encode;
var cr43508_place_29 = cr43508_place_20;
var cr43508_place_30 = (function (){var G__43669 = cr43508_place_29;
var fexpr__43668 = cr43508_place_28;
return (fexpr__43668.cljs$core$IFn$_invoke$arity$1 ? fexpr__43668.cljs$core$IFn$_invoke$arity$1(G__43669) : fexpr__43668.call(null,G__43669));
})();
(cr43508_state[(0)] = cr43508_block_5);

(cr43508_state[(4)] = null);

(cr43508_state[(5)] = cr43508_place_30);

return cr43508_state;
}catch (e43667){var cr43508_exception = e43667;
(cr43508_state[(0)] = cr43508_block_4);

(cr43508_state[(5)] = cr43508_exception);

return cr43508_state;
}});
return cloroutine.impl.coroutine((function (){var G__43670 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((6));
(G__43670[(0)] = cr43508_block_0);

return G__43670;
})());
})(),missionary.core.sp_run);
});
});
/**
 * A transducer partitioning a sequence of network messages into Electric events.
 */
hyperfiddle.electric.impl.io.decoder = (function hyperfiddle$electric$impl$io$decoder(rf){
var data = (function (){var G__43671 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((2));
(G__43671[(0)] = cljs.core.PersistentVector.EMPTY);

(G__43671[(1)] = cljs.core.PersistentVector.EMPTY);

return G__43671;
})();
return (function() {
var G__43706 = null;
var G__43706__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__43706__1 = (function (r){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentVector.EMPTY,(data[(0)]),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(data[(1)])], 0))){
} else {
throw (new Error("Assert failed: (= [] (aget data 0) (aget data 1))"));
}

return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(r) : rf.call(null,r));
});
var G__43706__2 = (function (r,x){
if(typeof x === 'string'){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(data[(1)]))){
} else {
throw (new Error("Assert failed: (= [] (aget data 1))"));
}

(data[(0)] = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((data[(0)]),hyperfiddle.electric.impl.io.decode_str(x)));

return r;
} else {
var xs = hyperfiddle.electric.impl.io.decode_numbers(x);
(data[(1)] = cljs.core.into.cljs$core$IFn$_invoke$arity$2((data[(1)]),xs));

if((cljs.core.count(xs) < hyperfiddle.electric.impl.io.chunk_size)){
var x__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((data[(0)]),(data[(1)]));
(data[(0)] = cljs.core.PersistentVector.EMPTY);

(data[(1)] = cljs.core.PersistentVector.EMPTY);

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(r,x__$1) : rf.call(null,r,x__$1));
} else {
return r;
}
}
});
G__43706 = function(r,x){
switch(arguments.length){
case 0:
return G__43706__0.call(this);
case 1:
return G__43706__1.call(this,r);
case 2:
return G__43706__2.call(this,r,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__43706.cljs$core$IFn$_invoke$arity$0 = G__43706__0;
G__43706.cljs$core$IFn$_invoke$arity$1 = G__43706__1;
G__43706.cljs$core$IFn$_invoke$arity$2 = G__43706__2;
return G__43706;
})()
});
/**
 * A transducer expanding Electric events to a sequence of network messages.
 */
hyperfiddle.electric.impl.io.encoder = (function hyperfiddle$electric$impl$io$encoder(rf){
return (function() {
var G__43707 = null;
var G__43707__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__43707__1 = (function (r){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(r) : rf.call(null,r));
});
var G__43707__2 = (function (r,x){
var r__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,r,cljs.core.eduction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.io.encode),cljs.core.pop(x)], 0)));
var r__$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,r__$1,cljs.core.eduction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.partition_all.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.io.chunk_size),cljs.core.map.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.io.encode_numbers),cljs.core.peek(x)], 0)));
var G__43672 = cljs.core.mod(cljs.core.count(cljs.core.peek(x)),hyperfiddle.electric.impl.io.chunk_size);
switch (G__43672) {
case (0):
var G__43673 = r__$2;
var G__43674 = hyperfiddle.electric.impl.io.encode_numbers(cljs.core.PersistentVector.EMPTY);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__43673,G__43674) : rf.call(null,G__43673,G__43674));

break;
default:
return r__$2;

}
});
G__43707 = function(r,x){
switch(arguments.length){
case 0:
return G__43707__0.call(this);
case 1:
return G__43707__1.call(this,r);
case 2:
return G__43707__2.call(this,r,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__43707.cljs$core$IFn$_invoke$arity$0 = G__43707__0;
G__43707.cljs$core$IFn$_invoke$arity$1 = G__43707__1;
G__43707.cljs$core$IFn$_invoke$arity$2 = G__43707__2;
return G__43707;
})()
});
hyperfiddle.electric.impl.io.foreach = (function hyperfiddle$electric$impl$io$foreach(var_args){
var G__43676 = arguments.length;
switch (G__43676) {
case 1:
return hyperfiddle.electric.impl.io.foreach.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hyperfiddle.electric.impl.io.foreach.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hyperfiddle.electric.impl.io.foreach.cljs$core$IFn$_invoke$arity$1 = (function (r){
return r;
}));

(hyperfiddle.electric.impl.io.foreach.cljs$core$IFn$_invoke$arity$2 = (function (r,x){
(r.cljs$core$IFn$_invoke$arity$1 ? r.cljs$core$IFn$_invoke$arity$1(x) : r.call(null,x));

return r;
}));

(hyperfiddle.electric.impl.io.foreach.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=hyperfiddle.electric.impl.io.js.map
