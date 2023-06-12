goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__33080,res){
var map__33081 = p__33080;
var map__33081__$1 = cljs.core.__destructure_map(map__33081);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33081__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33081__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__33082 = res;
var G__33082__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33082,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__33082);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33082__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__33082__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__33085 = arguments.length;
switch (G__33085) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__33087,msg,handlers,timeout_after_ms){
var map__33088 = p__33087;
var map__33088__$1 = cljs.core.__destructure_map(map__33088);
var runtime = map__33088__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33088__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33358 = arguments.length;
var i__5770__auto___33359 = (0);
while(true){
if((i__5770__auto___33359 < len__5769__auto___33358)){
args__5775__auto__.push((arguments[i__5770__auto___33359]));

var G__33360 = (i__5770__auto___33359 + (1));
i__5770__auto___33359 = G__33360;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__33093,ev,args){
var map__33094 = p__33093;
var map__33094__$1 = cljs.core.__destructure_map(map__33094);
var runtime = map__33094__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33094__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__33096 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__33099 = null;
var count__33100 = (0);
var i__33101 = (0);
while(true){
if((i__33101 < count__33100)){
var ext = chunk__33099.cljs$core$IIndexed$_nth$arity$2(null,i__33101);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__33362 = seq__33096;
var G__33363 = chunk__33099;
var G__33364 = count__33100;
var G__33365 = (i__33101 + (1));
seq__33096 = G__33362;
chunk__33099 = G__33363;
count__33100 = G__33364;
i__33101 = G__33365;
continue;
} else {
var G__33366 = seq__33096;
var G__33367 = chunk__33099;
var G__33368 = count__33100;
var G__33369 = (i__33101 + (1));
seq__33096 = G__33366;
chunk__33099 = G__33367;
count__33100 = G__33368;
i__33101 = G__33369;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33096);
if(temp__5804__auto__){
var seq__33096__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33096__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33096__$1);
var G__33370 = cljs.core.chunk_rest(seq__33096__$1);
var G__33371 = c__5568__auto__;
var G__33372 = cljs.core.count(c__5568__auto__);
var G__33373 = (0);
seq__33096 = G__33370;
chunk__33099 = G__33371;
count__33100 = G__33372;
i__33101 = G__33373;
continue;
} else {
var ext = cljs.core.first(seq__33096__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__33376 = cljs.core.next(seq__33096__$1);
var G__33377 = null;
var G__33378 = (0);
var G__33379 = (0);
seq__33096 = G__33376;
chunk__33099 = G__33377;
count__33100 = G__33378;
i__33101 = G__33379;
continue;
} else {
var G__33380 = cljs.core.next(seq__33096__$1);
var G__33381 = null;
var G__33382 = (0);
var G__33383 = (0);
seq__33096 = G__33380;
chunk__33099 = G__33381;
count__33100 = G__33382;
i__33101 = G__33383;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq33090){
var G__33091 = cljs.core.first(seq33090);
var seq33090__$1 = cljs.core.next(seq33090);
var G__33092 = cljs.core.first(seq33090__$1);
var seq33090__$2 = cljs.core.next(seq33090__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33091,G__33092,seq33090__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__33131,p__33132){
var map__33138 = p__33131;
var map__33138__$1 = cljs.core.__destructure_map(map__33138);
var runtime = map__33138__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33138__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__33139 = p__33132;
var map__33139__$1 = cljs.core.__destructure_map(map__33139);
var msg = map__33139__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33139__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__33156 = cljs.core.deref(state_ref);
var map__33156__$1 = cljs.core.__destructure_map(map__33156);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33156__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33156__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__33157){
var map__33159 = p__33157;
var map__33159__$1 = cljs.core.__destructure_map(map__33159);
var runtime = map__33159__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33159__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__33164,msg){
var map__33165 = p__33164;
var map__33165__$1 = cljs.core.__destructure_map(map__33165);
var runtime = map__33165__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33165__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__33181,key,p__33182){
var map__33183 = p__33181;
var map__33183__$1 = cljs.core.__destructure_map(map__33183);
var state = map__33183__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33183__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__33185 = p__33182;
var map__33185__$1 = cljs.core.__destructure_map(map__33185);
var spec = map__33185__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33185__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__33203,key,spec){
var map__33208 = p__33203;
var map__33208__$1 = cljs.core.__destructure_map(map__33208);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33208__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__33222_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__33222_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__33223_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__33223_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__33224_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__33224_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__33225_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__33225_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__33227_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__33227_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__33259,key){
var map__33260 = p__33259;
var map__33260__$1 = cljs.core.__destructure_map(map__33260);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33260__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__33267,msg){
var map__33268 = p__33267;
var map__33268__$1 = cljs.core.__destructure_map(map__33268);
var runtime = map__33268__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33268__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__33276,p__33277){
var map__33278 = p__33276;
var map__33278__$1 = cljs.core.__destructure_map(map__33278);
var runtime = map__33278__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33278__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__33279 = p__33277;
var map__33279__$1 = cljs.core.__destructure_map(map__33279);
var msg = map__33279__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33279__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33279__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__33297 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__33299 = null;
var count__33300 = (0);
var i__33301 = (0);
while(true){
if((i__33301 < count__33300)){
var map__33327 = chunk__33299.cljs$core$IIndexed$_nth$arity$2(null,i__33301);
var map__33327__$1 = cljs.core.__destructure_map(map__33327);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33327__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__33424 = seq__33297;
var G__33425 = chunk__33299;
var G__33426 = count__33300;
var G__33427 = (i__33301 + (1));
seq__33297 = G__33424;
chunk__33299 = G__33425;
count__33300 = G__33426;
i__33301 = G__33427;
continue;
} else {
var G__33428 = seq__33297;
var G__33429 = chunk__33299;
var G__33430 = count__33300;
var G__33431 = (i__33301 + (1));
seq__33297 = G__33428;
chunk__33299 = G__33429;
count__33300 = G__33430;
i__33301 = G__33431;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33297);
if(temp__5804__auto__){
var seq__33297__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33297__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33297__$1);
var G__33432 = cljs.core.chunk_rest(seq__33297__$1);
var G__33433 = c__5568__auto__;
var G__33434 = cljs.core.count(c__5568__auto__);
var G__33435 = (0);
seq__33297 = G__33432;
chunk__33299 = G__33433;
count__33300 = G__33434;
i__33301 = G__33435;
continue;
} else {
var map__33331 = cljs.core.first(seq__33297__$1);
var map__33331__$1 = cljs.core.__destructure_map(map__33331);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33331__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__33436 = cljs.core.next(seq__33297__$1);
var G__33437 = null;
var G__33438 = (0);
var G__33439 = (0);
seq__33297 = G__33436;
chunk__33299 = G__33437;
count__33300 = G__33438;
i__33301 = G__33439;
continue;
} else {
var G__33440 = cljs.core.next(seq__33297__$1);
var G__33441 = null;
var G__33442 = (0);
var G__33443 = (0);
seq__33297 = G__33440;
chunk__33299 = G__33441;
count__33300 = G__33442;
i__33301 = G__33443;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
