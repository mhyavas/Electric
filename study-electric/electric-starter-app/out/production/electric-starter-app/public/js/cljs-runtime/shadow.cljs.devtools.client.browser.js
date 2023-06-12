goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39456 = arguments.length;
var i__5770__auto___39457 = (0);
while(true){
if((i__5770__auto___39457 < len__5769__auto___39456)){
args__5775__auto__.push((arguments[i__5770__auto___39457]));

var G__39463 = (i__5770__auto___39457 + (1));
i__5770__auto___39457 = G__39463;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq38791){
var G__38792 = cljs.core.first(seq38791);
var seq38791__$1 = cljs.core.next(seq38791);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38792,seq38791__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__38806 = cljs.core.seq(sources);
var chunk__38807 = null;
var count__38808 = (0);
var i__38809 = (0);
while(true){
if((i__38809 < count__38808)){
var map__38828 = chunk__38807.cljs$core$IIndexed$_nth$arity$2(null,i__38809);
var map__38828__$1 = cljs.core.__destructure_map(map__38828);
var src = map__38828__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38828__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38828__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38828__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38828__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e38830){var e_39465 = e38830;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_39465);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_39465.message)].join('')));
}

var G__39466 = seq__38806;
var G__39467 = chunk__38807;
var G__39468 = count__38808;
var G__39469 = (i__38809 + (1));
seq__38806 = G__39466;
chunk__38807 = G__39467;
count__38808 = G__39468;
i__38809 = G__39469;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__38806);
if(temp__5804__auto__){
var seq__38806__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38806__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38806__$1);
var G__39471 = cljs.core.chunk_rest(seq__38806__$1);
var G__39472 = c__5568__auto__;
var G__39473 = cljs.core.count(c__5568__auto__);
var G__39474 = (0);
seq__38806 = G__39471;
chunk__38807 = G__39472;
count__38808 = G__39473;
i__38809 = G__39474;
continue;
} else {
var map__38834 = cljs.core.first(seq__38806__$1);
var map__38834__$1 = cljs.core.__destructure_map(map__38834);
var src = map__38834__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38834__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38834__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38834__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38834__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e38839){var e_39476 = e38839;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_39476);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_39476.message)].join('')));
}

var G__39477 = cljs.core.next(seq__38806__$1);
var G__39478 = null;
var G__39479 = (0);
var G__39480 = (0);
seq__38806 = G__39477;
chunk__38807 = G__39478;
count__38808 = G__39479;
i__38809 = G__39480;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__38855 = cljs.core.seq(js_requires);
var chunk__38856 = null;
var count__38857 = (0);
var i__38858 = (0);
while(true){
if((i__38858 < count__38857)){
var js_ns = chunk__38856.cljs$core$IIndexed$_nth$arity$2(null,i__38858);
var require_str_39481 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_39481);


var G__39482 = seq__38855;
var G__39483 = chunk__38856;
var G__39484 = count__38857;
var G__39485 = (i__38858 + (1));
seq__38855 = G__39482;
chunk__38856 = G__39483;
count__38857 = G__39484;
i__38858 = G__39485;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__38855);
if(temp__5804__auto__){
var seq__38855__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38855__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38855__$1);
var G__39486 = cljs.core.chunk_rest(seq__38855__$1);
var G__39487 = c__5568__auto__;
var G__39488 = cljs.core.count(c__5568__auto__);
var G__39489 = (0);
seq__38855 = G__39486;
chunk__38856 = G__39487;
count__38857 = G__39488;
i__38858 = G__39489;
continue;
} else {
var js_ns = cljs.core.first(seq__38855__$1);
var require_str_39491 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_39491);


var G__39492 = cljs.core.next(seq__38855__$1);
var G__39493 = null;
var G__39494 = (0);
var G__39495 = (0);
seq__38855 = G__39492;
chunk__38856 = G__39493;
count__38857 = G__39494;
i__38858 = G__39495;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__38873){
var map__38874 = p__38873;
var map__38874__$1 = cljs.core.__destructure_map(map__38874);
var msg = map__38874__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38874__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38874__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38875(s__38876){
return (new cljs.core.LazySeq(null,(function (){
var s__38876__$1 = s__38876;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__38876__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__38882 = cljs.core.first(xs__6360__auto__);
var map__38882__$1 = cljs.core.__destructure_map(map__38882);
var src = map__38882__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38882__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38882__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__38876__$1,map__38882,map__38882__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__38874,map__38874__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38875_$_iter__38877(s__38878){
return (new cljs.core.LazySeq(null,((function (s__38876__$1,map__38882,map__38882__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__38874,map__38874__$1,msg,info,reload_info){
return (function (){
var s__38878__$1 = s__38878;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__38878__$1);
if(temp__5804__auto____$1){
var s__38878__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__38878__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__38878__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__38880 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__38879 = (0);
while(true){
if((i__38879 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__38879);
cljs.core.chunk_append(b__38880,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__39497 = (i__38879 + (1));
i__38879 = G__39497;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38880),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38875_$_iter__38877(cljs.core.chunk_rest(s__38878__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38880),null);
}
} else {
var warning = cljs.core.first(s__38878__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38875_$_iter__38877(cljs.core.rest(s__38878__$2)));
}
} else {
return null;
}
break;
}
});})(s__38876__$1,map__38882,map__38882__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__38874,map__38874__$1,msg,info,reload_info))
,null,null));
});})(s__38876__$1,map__38882,map__38882__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__38874,map__38874__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38875(cljs.core.rest(s__38876__$1)));
} else {
var G__39502 = cljs.core.rest(s__38876__$1);
s__38876__$1 = G__39502;
continue;
}
} else {
var G__39503 = cljs.core.rest(s__38876__$1);
s__38876__$1 = G__39503;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__38896_39504 = cljs.core.seq(warnings);
var chunk__38897_39505 = null;
var count__38898_39506 = (0);
var i__38899_39507 = (0);
while(true){
if((i__38899_39507 < count__38898_39506)){
var map__38947_39508 = chunk__38897_39505.cljs$core$IIndexed$_nth$arity$2(null,i__38899_39507);
var map__38947_39509__$1 = cljs.core.__destructure_map(map__38947_39508);
var w_39510 = map__38947_39509__$1;
var msg_39511__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38947_39509__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_39512 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38947_39509__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39513 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38947_39509__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_39514 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38947_39509__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_39514)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_39512),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_39513),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_39511__$1)].join(''));


var G__39517 = seq__38896_39504;
var G__39518 = chunk__38897_39505;
var G__39519 = count__38898_39506;
var G__39520 = (i__38899_39507 + (1));
seq__38896_39504 = G__39517;
chunk__38897_39505 = G__39518;
count__38898_39506 = G__39519;
i__38899_39507 = G__39520;
continue;
} else {
var temp__5804__auto___39523 = cljs.core.seq(seq__38896_39504);
if(temp__5804__auto___39523){
var seq__38896_39525__$1 = temp__5804__auto___39523;
if(cljs.core.chunked_seq_QMARK_(seq__38896_39525__$1)){
var c__5568__auto___39527 = cljs.core.chunk_first(seq__38896_39525__$1);
var G__39528 = cljs.core.chunk_rest(seq__38896_39525__$1);
var G__39529 = c__5568__auto___39527;
var G__39530 = cljs.core.count(c__5568__auto___39527);
var G__39531 = (0);
seq__38896_39504 = G__39528;
chunk__38897_39505 = G__39529;
count__38898_39506 = G__39530;
i__38899_39507 = G__39531;
continue;
} else {
var map__38954_39532 = cljs.core.first(seq__38896_39525__$1);
var map__38954_39533__$1 = cljs.core.__destructure_map(map__38954_39532);
var w_39534 = map__38954_39533__$1;
var msg_39535__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38954_39533__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_39536 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38954_39533__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39537 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38954_39533__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_39538 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38954_39533__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_39538)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_39536),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_39537),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_39535__$1)].join(''));


var G__39541 = cljs.core.next(seq__38896_39525__$1);
var G__39542 = null;
var G__39543 = (0);
var G__39544 = (0);
seq__38896_39504 = G__39541;
chunk__38897_39505 = G__39542;
count__38898_39506 = G__39543;
i__38899_39507 = G__39544;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__38872_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__38872_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__38966){
var map__38967 = p__38966;
var map__38967__$1 = cljs.core.__destructure_map(map__38967);
var msg = map__38967__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38967__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38967__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__38970 = cljs.core.seq(updates);
var chunk__38972 = null;
var count__38973 = (0);
var i__38974 = (0);
while(true){
if((i__38974 < count__38973)){
var path = chunk__38972.cljs$core$IIndexed$_nth$arity$2(null,i__38974);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__39204_39549 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__39208_39550 = null;
var count__39209_39551 = (0);
var i__39210_39552 = (0);
while(true){
if((i__39210_39552 < count__39209_39551)){
var node_39553 = chunk__39208_39550.cljs$core$IIndexed$_nth$arity$2(null,i__39210_39552);
if(cljs.core.not(node_39553.shadow$old)){
var path_match_39554 = shadow.cljs.devtools.client.browser.match_paths(node_39553.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39554)){
var new_link_39555 = (function (){var G__39261 = node_39553.cloneNode(true);
G__39261.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39554),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39261;
})();
(node_39553.shadow$old = true);

(new_link_39555.onload = ((function (seq__39204_39549,chunk__39208_39550,count__39209_39551,i__39210_39552,seq__38970,chunk__38972,count__38973,i__38974,new_link_39555,path_match_39554,node_39553,path,map__38967,map__38967__$1,msg,updates,reload_info){
return (function (e){
var seq__39265_39557 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__39267_39558 = null;
var count__39268_39559 = (0);
var i__39269_39560 = (0);
while(true){
if((i__39269_39560 < count__39268_39559)){
var map__39280_39562 = chunk__39267_39558.cljs$core$IIndexed$_nth$arity$2(null,i__39269_39560);
var map__39280_39563__$1 = cljs.core.__destructure_map(map__39280_39562);
var task_39564 = map__39280_39563__$1;
var fn_str_39565 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39280_39563__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39566 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39280_39563__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39567 = goog.getObjectByName(fn_str_39565,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39566)].join(''));

(fn_obj_39567.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39567.cljs$core$IFn$_invoke$arity$2(path,new_link_39555) : fn_obj_39567.call(null,path,new_link_39555));


var G__39568 = seq__39265_39557;
var G__39569 = chunk__39267_39558;
var G__39570 = count__39268_39559;
var G__39571 = (i__39269_39560 + (1));
seq__39265_39557 = G__39568;
chunk__39267_39558 = G__39569;
count__39268_39559 = G__39570;
i__39269_39560 = G__39571;
continue;
} else {
var temp__5804__auto___39572 = cljs.core.seq(seq__39265_39557);
if(temp__5804__auto___39572){
var seq__39265_39573__$1 = temp__5804__auto___39572;
if(cljs.core.chunked_seq_QMARK_(seq__39265_39573__$1)){
var c__5568__auto___39574 = cljs.core.chunk_first(seq__39265_39573__$1);
var G__39575 = cljs.core.chunk_rest(seq__39265_39573__$1);
var G__39576 = c__5568__auto___39574;
var G__39577 = cljs.core.count(c__5568__auto___39574);
var G__39578 = (0);
seq__39265_39557 = G__39575;
chunk__39267_39558 = G__39576;
count__39268_39559 = G__39577;
i__39269_39560 = G__39578;
continue;
} else {
var map__39284_39579 = cljs.core.first(seq__39265_39573__$1);
var map__39284_39580__$1 = cljs.core.__destructure_map(map__39284_39579);
var task_39581 = map__39284_39580__$1;
var fn_str_39582 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39284_39580__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39583 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39284_39580__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39585 = goog.getObjectByName(fn_str_39582,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39583)].join(''));

(fn_obj_39585.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39585.cljs$core$IFn$_invoke$arity$2(path,new_link_39555) : fn_obj_39585.call(null,path,new_link_39555));


var G__39587 = cljs.core.next(seq__39265_39573__$1);
var G__39588 = null;
var G__39589 = (0);
var G__39590 = (0);
seq__39265_39557 = G__39587;
chunk__39267_39558 = G__39588;
count__39268_39559 = G__39589;
i__39269_39560 = G__39590;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_39553);
});})(seq__39204_39549,chunk__39208_39550,count__39209_39551,i__39210_39552,seq__38970,chunk__38972,count__38973,i__38974,new_link_39555,path_match_39554,node_39553,path,map__38967,map__38967__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39554], 0));

goog.dom.insertSiblingAfter(new_link_39555,node_39553);


var G__39593 = seq__39204_39549;
var G__39594 = chunk__39208_39550;
var G__39595 = count__39209_39551;
var G__39596 = (i__39210_39552 + (1));
seq__39204_39549 = G__39593;
chunk__39208_39550 = G__39594;
count__39209_39551 = G__39595;
i__39210_39552 = G__39596;
continue;
} else {
var G__39597 = seq__39204_39549;
var G__39598 = chunk__39208_39550;
var G__39599 = count__39209_39551;
var G__39600 = (i__39210_39552 + (1));
seq__39204_39549 = G__39597;
chunk__39208_39550 = G__39598;
count__39209_39551 = G__39599;
i__39210_39552 = G__39600;
continue;
}
} else {
var G__39601 = seq__39204_39549;
var G__39602 = chunk__39208_39550;
var G__39603 = count__39209_39551;
var G__39604 = (i__39210_39552 + (1));
seq__39204_39549 = G__39601;
chunk__39208_39550 = G__39602;
count__39209_39551 = G__39603;
i__39210_39552 = G__39604;
continue;
}
} else {
var temp__5804__auto___39605 = cljs.core.seq(seq__39204_39549);
if(temp__5804__auto___39605){
var seq__39204_39606__$1 = temp__5804__auto___39605;
if(cljs.core.chunked_seq_QMARK_(seq__39204_39606__$1)){
var c__5568__auto___39607 = cljs.core.chunk_first(seq__39204_39606__$1);
var G__39608 = cljs.core.chunk_rest(seq__39204_39606__$1);
var G__39609 = c__5568__auto___39607;
var G__39610 = cljs.core.count(c__5568__auto___39607);
var G__39611 = (0);
seq__39204_39549 = G__39608;
chunk__39208_39550 = G__39609;
count__39209_39551 = G__39610;
i__39210_39552 = G__39611;
continue;
} else {
var node_39612 = cljs.core.first(seq__39204_39606__$1);
if(cljs.core.not(node_39612.shadow$old)){
var path_match_39613 = shadow.cljs.devtools.client.browser.match_paths(node_39612.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39613)){
var new_link_39614 = (function (){var G__39287 = node_39612.cloneNode(true);
G__39287.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39613),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39287;
})();
(node_39612.shadow$old = true);

(new_link_39614.onload = ((function (seq__39204_39549,chunk__39208_39550,count__39209_39551,i__39210_39552,seq__38970,chunk__38972,count__38973,i__38974,new_link_39614,path_match_39613,node_39612,seq__39204_39606__$1,temp__5804__auto___39605,path,map__38967,map__38967__$1,msg,updates,reload_info){
return (function (e){
var seq__39289_39616 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__39291_39617 = null;
var count__39292_39618 = (0);
var i__39293_39619 = (0);
while(true){
if((i__39293_39619 < count__39292_39618)){
var map__39301_39620 = chunk__39291_39617.cljs$core$IIndexed$_nth$arity$2(null,i__39293_39619);
var map__39301_39621__$1 = cljs.core.__destructure_map(map__39301_39620);
var task_39622 = map__39301_39621__$1;
var fn_str_39623 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39301_39621__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39624 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39301_39621__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39626 = goog.getObjectByName(fn_str_39623,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39624)].join(''));

(fn_obj_39626.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39626.cljs$core$IFn$_invoke$arity$2(path,new_link_39614) : fn_obj_39626.call(null,path,new_link_39614));


var G__39627 = seq__39289_39616;
var G__39628 = chunk__39291_39617;
var G__39629 = count__39292_39618;
var G__39630 = (i__39293_39619 + (1));
seq__39289_39616 = G__39627;
chunk__39291_39617 = G__39628;
count__39292_39618 = G__39629;
i__39293_39619 = G__39630;
continue;
} else {
var temp__5804__auto___39631__$1 = cljs.core.seq(seq__39289_39616);
if(temp__5804__auto___39631__$1){
var seq__39289_39632__$1 = temp__5804__auto___39631__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39289_39632__$1)){
var c__5568__auto___39634 = cljs.core.chunk_first(seq__39289_39632__$1);
var G__39635 = cljs.core.chunk_rest(seq__39289_39632__$1);
var G__39636 = c__5568__auto___39634;
var G__39637 = cljs.core.count(c__5568__auto___39634);
var G__39638 = (0);
seq__39289_39616 = G__39635;
chunk__39291_39617 = G__39636;
count__39292_39618 = G__39637;
i__39293_39619 = G__39638;
continue;
} else {
var map__39307_39639 = cljs.core.first(seq__39289_39632__$1);
var map__39307_39640__$1 = cljs.core.__destructure_map(map__39307_39639);
var task_39641 = map__39307_39640__$1;
var fn_str_39642 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39307_39640__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39643 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39307_39640__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39644 = goog.getObjectByName(fn_str_39642,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39643)].join(''));

(fn_obj_39644.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39644.cljs$core$IFn$_invoke$arity$2(path,new_link_39614) : fn_obj_39644.call(null,path,new_link_39614));


var G__39645 = cljs.core.next(seq__39289_39632__$1);
var G__39646 = null;
var G__39647 = (0);
var G__39648 = (0);
seq__39289_39616 = G__39645;
chunk__39291_39617 = G__39646;
count__39292_39618 = G__39647;
i__39293_39619 = G__39648;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_39612);
});})(seq__39204_39549,chunk__39208_39550,count__39209_39551,i__39210_39552,seq__38970,chunk__38972,count__38973,i__38974,new_link_39614,path_match_39613,node_39612,seq__39204_39606__$1,temp__5804__auto___39605,path,map__38967,map__38967__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39613], 0));

goog.dom.insertSiblingAfter(new_link_39614,node_39612);


var G__39649 = cljs.core.next(seq__39204_39606__$1);
var G__39650 = null;
var G__39651 = (0);
var G__39652 = (0);
seq__39204_39549 = G__39649;
chunk__39208_39550 = G__39650;
count__39209_39551 = G__39651;
i__39210_39552 = G__39652;
continue;
} else {
var G__39653 = cljs.core.next(seq__39204_39606__$1);
var G__39654 = null;
var G__39655 = (0);
var G__39656 = (0);
seq__39204_39549 = G__39653;
chunk__39208_39550 = G__39654;
count__39209_39551 = G__39655;
i__39210_39552 = G__39656;
continue;
}
} else {
var G__39657 = cljs.core.next(seq__39204_39606__$1);
var G__39658 = null;
var G__39659 = (0);
var G__39660 = (0);
seq__39204_39549 = G__39657;
chunk__39208_39550 = G__39658;
count__39209_39551 = G__39659;
i__39210_39552 = G__39660;
continue;
}
}
} else {
}
}
break;
}


var G__39661 = seq__38970;
var G__39662 = chunk__38972;
var G__39663 = count__38973;
var G__39664 = (i__38974 + (1));
seq__38970 = G__39661;
chunk__38972 = G__39662;
count__38973 = G__39663;
i__38974 = G__39664;
continue;
} else {
var G__39665 = seq__38970;
var G__39666 = chunk__38972;
var G__39667 = count__38973;
var G__39668 = (i__38974 + (1));
seq__38970 = G__39665;
chunk__38972 = G__39666;
count__38973 = G__39667;
i__38974 = G__39668;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__38970);
if(temp__5804__auto__){
var seq__38970__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38970__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38970__$1);
var G__39670 = cljs.core.chunk_rest(seq__38970__$1);
var G__39671 = c__5568__auto__;
var G__39672 = cljs.core.count(c__5568__auto__);
var G__39673 = (0);
seq__38970 = G__39670;
chunk__38972 = G__39671;
count__38973 = G__39672;
i__38974 = G__39673;
continue;
} else {
var path = cljs.core.first(seq__38970__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__39313_39674 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__39317_39675 = null;
var count__39318_39676 = (0);
var i__39319_39677 = (0);
while(true){
if((i__39319_39677 < count__39318_39676)){
var node_39679 = chunk__39317_39675.cljs$core$IIndexed$_nth$arity$2(null,i__39319_39677);
if(cljs.core.not(node_39679.shadow$old)){
var path_match_39680 = shadow.cljs.devtools.client.browser.match_paths(node_39679.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39680)){
var new_link_39681 = (function (){var G__39367 = node_39679.cloneNode(true);
G__39367.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39680),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39367;
})();
(node_39679.shadow$old = true);

(new_link_39681.onload = ((function (seq__39313_39674,chunk__39317_39675,count__39318_39676,i__39319_39677,seq__38970,chunk__38972,count__38973,i__38974,new_link_39681,path_match_39680,node_39679,path,seq__38970__$1,temp__5804__auto__,map__38967,map__38967__$1,msg,updates,reload_info){
return (function (e){
var seq__39368_39682 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__39370_39683 = null;
var count__39371_39684 = (0);
var i__39372_39685 = (0);
while(true){
if((i__39372_39685 < count__39371_39684)){
var map__39381_39686 = chunk__39370_39683.cljs$core$IIndexed$_nth$arity$2(null,i__39372_39685);
var map__39381_39687__$1 = cljs.core.__destructure_map(map__39381_39686);
var task_39688 = map__39381_39687__$1;
var fn_str_39689 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39381_39687__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39690 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39381_39687__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39691 = goog.getObjectByName(fn_str_39689,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39690)].join(''));

(fn_obj_39691.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39691.cljs$core$IFn$_invoke$arity$2(path,new_link_39681) : fn_obj_39691.call(null,path,new_link_39681));


var G__39692 = seq__39368_39682;
var G__39693 = chunk__39370_39683;
var G__39694 = count__39371_39684;
var G__39695 = (i__39372_39685 + (1));
seq__39368_39682 = G__39692;
chunk__39370_39683 = G__39693;
count__39371_39684 = G__39694;
i__39372_39685 = G__39695;
continue;
} else {
var temp__5804__auto___39696__$1 = cljs.core.seq(seq__39368_39682);
if(temp__5804__auto___39696__$1){
var seq__39368_39698__$1 = temp__5804__auto___39696__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39368_39698__$1)){
var c__5568__auto___39699 = cljs.core.chunk_first(seq__39368_39698__$1);
var G__39700 = cljs.core.chunk_rest(seq__39368_39698__$1);
var G__39701 = c__5568__auto___39699;
var G__39702 = cljs.core.count(c__5568__auto___39699);
var G__39703 = (0);
seq__39368_39682 = G__39700;
chunk__39370_39683 = G__39701;
count__39371_39684 = G__39702;
i__39372_39685 = G__39703;
continue;
} else {
var map__39386_39704 = cljs.core.first(seq__39368_39698__$1);
var map__39386_39705__$1 = cljs.core.__destructure_map(map__39386_39704);
var task_39706 = map__39386_39705__$1;
var fn_str_39707 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39386_39705__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39708 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39386_39705__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39710 = goog.getObjectByName(fn_str_39707,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39708)].join(''));

(fn_obj_39710.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39710.cljs$core$IFn$_invoke$arity$2(path,new_link_39681) : fn_obj_39710.call(null,path,new_link_39681));


var G__39711 = cljs.core.next(seq__39368_39698__$1);
var G__39712 = null;
var G__39713 = (0);
var G__39714 = (0);
seq__39368_39682 = G__39711;
chunk__39370_39683 = G__39712;
count__39371_39684 = G__39713;
i__39372_39685 = G__39714;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_39679);
});})(seq__39313_39674,chunk__39317_39675,count__39318_39676,i__39319_39677,seq__38970,chunk__38972,count__38973,i__38974,new_link_39681,path_match_39680,node_39679,path,seq__38970__$1,temp__5804__auto__,map__38967,map__38967__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39680], 0));

goog.dom.insertSiblingAfter(new_link_39681,node_39679);


var G__39715 = seq__39313_39674;
var G__39716 = chunk__39317_39675;
var G__39717 = count__39318_39676;
var G__39718 = (i__39319_39677 + (1));
seq__39313_39674 = G__39715;
chunk__39317_39675 = G__39716;
count__39318_39676 = G__39717;
i__39319_39677 = G__39718;
continue;
} else {
var G__39719 = seq__39313_39674;
var G__39720 = chunk__39317_39675;
var G__39721 = count__39318_39676;
var G__39722 = (i__39319_39677 + (1));
seq__39313_39674 = G__39719;
chunk__39317_39675 = G__39720;
count__39318_39676 = G__39721;
i__39319_39677 = G__39722;
continue;
}
} else {
var G__39723 = seq__39313_39674;
var G__39724 = chunk__39317_39675;
var G__39725 = count__39318_39676;
var G__39726 = (i__39319_39677 + (1));
seq__39313_39674 = G__39723;
chunk__39317_39675 = G__39724;
count__39318_39676 = G__39725;
i__39319_39677 = G__39726;
continue;
}
} else {
var temp__5804__auto___39727__$1 = cljs.core.seq(seq__39313_39674);
if(temp__5804__auto___39727__$1){
var seq__39313_39728__$1 = temp__5804__auto___39727__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39313_39728__$1)){
var c__5568__auto___39729 = cljs.core.chunk_first(seq__39313_39728__$1);
var G__39730 = cljs.core.chunk_rest(seq__39313_39728__$1);
var G__39731 = c__5568__auto___39729;
var G__39732 = cljs.core.count(c__5568__auto___39729);
var G__39733 = (0);
seq__39313_39674 = G__39730;
chunk__39317_39675 = G__39731;
count__39318_39676 = G__39732;
i__39319_39677 = G__39733;
continue;
} else {
var node_39734 = cljs.core.first(seq__39313_39728__$1);
if(cljs.core.not(node_39734.shadow$old)){
var path_match_39735 = shadow.cljs.devtools.client.browser.match_paths(node_39734.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39735)){
var new_link_39737 = (function (){var G__39395 = node_39734.cloneNode(true);
G__39395.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39735),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39395;
})();
(node_39734.shadow$old = true);

(new_link_39737.onload = ((function (seq__39313_39674,chunk__39317_39675,count__39318_39676,i__39319_39677,seq__38970,chunk__38972,count__38973,i__38974,new_link_39737,path_match_39735,node_39734,seq__39313_39728__$1,temp__5804__auto___39727__$1,path,seq__38970__$1,temp__5804__auto__,map__38967,map__38967__$1,msg,updates,reload_info){
return (function (e){
var seq__39396_39748 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__39398_39749 = null;
var count__39399_39750 = (0);
var i__39400_39751 = (0);
while(true){
if((i__39400_39751 < count__39399_39750)){
var map__39406_39752 = chunk__39398_39749.cljs$core$IIndexed$_nth$arity$2(null,i__39400_39751);
var map__39406_39753__$1 = cljs.core.__destructure_map(map__39406_39752);
var task_39754 = map__39406_39753__$1;
var fn_str_39755 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39406_39753__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39756 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39406_39753__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39757 = goog.getObjectByName(fn_str_39755,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39756)].join(''));

(fn_obj_39757.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39757.cljs$core$IFn$_invoke$arity$2(path,new_link_39737) : fn_obj_39757.call(null,path,new_link_39737));


var G__39759 = seq__39396_39748;
var G__39760 = chunk__39398_39749;
var G__39761 = count__39399_39750;
var G__39762 = (i__39400_39751 + (1));
seq__39396_39748 = G__39759;
chunk__39398_39749 = G__39760;
count__39399_39750 = G__39761;
i__39400_39751 = G__39762;
continue;
} else {
var temp__5804__auto___39763__$2 = cljs.core.seq(seq__39396_39748);
if(temp__5804__auto___39763__$2){
var seq__39396_39764__$1 = temp__5804__auto___39763__$2;
if(cljs.core.chunked_seq_QMARK_(seq__39396_39764__$1)){
var c__5568__auto___39765 = cljs.core.chunk_first(seq__39396_39764__$1);
var G__39766 = cljs.core.chunk_rest(seq__39396_39764__$1);
var G__39767 = c__5568__auto___39765;
var G__39768 = cljs.core.count(c__5568__auto___39765);
var G__39769 = (0);
seq__39396_39748 = G__39766;
chunk__39398_39749 = G__39767;
count__39399_39750 = G__39768;
i__39400_39751 = G__39769;
continue;
} else {
var map__39408_39770 = cljs.core.first(seq__39396_39764__$1);
var map__39408_39771__$1 = cljs.core.__destructure_map(map__39408_39770);
var task_39772 = map__39408_39771__$1;
var fn_str_39773 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39408_39771__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39774 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39408_39771__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39775 = goog.getObjectByName(fn_str_39773,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39774)].join(''));

(fn_obj_39775.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39775.cljs$core$IFn$_invoke$arity$2(path,new_link_39737) : fn_obj_39775.call(null,path,new_link_39737));


var G__39776 = cljs.core.next(seq__39396_39764__$1);
var G__39777 = null;
var G__39778 = (0);
var G__39779 = (0);
seq__39396_39748 = G__39776;
chunk__39398_39749 = G__39777;
count__39399_39750 = G__39778;
i__39400_39751 = G__39779;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_39734);
});})(seq__39313_39674,chunk__39317_39675,count__39318_39676,i__39319_39677,seq__38970,chunk__38972,count__38973,i__38974,new_link_39737,path_match_39735,node_39734,seq__39313_39728__$1,temp__5804__auto___39727__$1,path,seq__38970__$1,temp__5804__auto__,map__38967,map__38967__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39735], 0));

goog.dom.insertSiblingAfter(new_link_39737,node_39734);


var G__39780 = cljs.core.next(seq__39313_39728__$1);
var G__39781 = null;
var G__39782 = (0);
var G__39783 = (0);
seq__39313_39674 = G__39780;
chunk__39317_39675 = G__39781;
count__39318_39676 = G__39782;
i__39319_39677 = G__39783;
continue;
} else {
var G__39784 = cljs.core.next(seq__39313_39728__$1);
var G__39785 = null;
var G__39786 = (0);
var G__39787 = (0);
seq__39313_39674 = G__39784;
chunk__39317_39675 = G__39785;
count__39318_39676 = G__39786;
i__39319_39677 = G__39787;
continue;
}
} else {
var G__39788 = cljs.core.next(seq__39313_39728__$1);
var G__39789 = null;
var G__39790 = (0);
var G__39791 = (0);
seq__39313_39674 = G__39788;
chunk__39317_39675 = G__39789;
count__39318_39676 = G__39790;
i__39319_39677 = G__39791;
continue;
}
}
} else {
}
}
break;
}


var G__39792 = cljs.core.next(seq__38970__$1);
var G__39793 = null;
var G__39794 = (0);
var G__39795 = (0);
seq__38970 = G__39792;
chunk__38972 = G__39793;
count__38973 = G__39794;
i__38974 = G__39795;
continue;
} else {
var G__39796 = cljs.core.next(seq__38970__$1);
var G__39797 = null;
var G__39798 = (0);
var G__39799 = (0);
seq__38970 = G__39796;
chunk__38972 = G__39797;
count__38973 = G__39798;
i__38974 = G__39799;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__39413){
var map__39414 = p__39413;
var map__39414__$1 = cljs.core.__destructure_map(map__39414);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39414__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__39418){
var map__39420 = p__39418;
var map__39420__$1 = cljs.core.__destructure_map(map__39420);
var _ = map__39420__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39420__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__39427,done,error){
var map__39428 = p__39427;
var map__39428__$1 = cljs.core.__destructure_map(map__39428);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39428__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__39429,done,error){
var map__39430 = p__39429;
var map__39430__$1 = cljs.core.__destructure_map(map__39430);
var msg = map__39430__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39430__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39430__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39430__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__39431){
var map__39432 = p__39431;
var map__39432__$1 = cljs.core.__destructure_map(map__39432);
var src = map__39432__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39432__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__39433 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__39433) : done.call(null,G__39433));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__39434){
var map__39435 = p__39434;
var map__39435__$1 = cljs.core.__destructure_map(map__39435);
var msg__$1 = map__39435__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39435__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e39439){var ex = e39439;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__39441){
var map__39442 = p__39441;
var map__39442__$1 = cljs.core.__destructure_map(map__39442);
var env = map__39442__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39442__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__39448){
var map__39449 = p__39448;
var map__39449__$1 = cljs.core.__destructure_map(map__39449);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39449__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39449__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__39450){
var map__39451 = p__39450;
var map__39451__$1 = cljs.core.__destructure_map(map__39451);
var svc = map__39451__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39451__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
