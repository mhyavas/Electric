goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36032){
var map__36034 = p__36032;
var map__36034__$1 = cljs.core.__destructure_map(map__36034);
var m = map__36034__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36034__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36034__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36041_36340 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36042_36341 = null;
var count__36043_36342 = (0);
var i__36044_36343 = (0);
while(true){
if((i__36044_36343 < count__36043_36342)){
var f_36344 = chunk__36042_36341.cljs$core$IIndexed$_nth$arity$2(null,i__36044_36343);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36344], 0));


var G__36345 = seq__36041_36340;
var G__36346 = chunk__36042_36341;
var G__36347 = count__36043_36342;
var G__36348 = (i__36044_36343 + (1));
seq__36041_36340 = G__36345;
chunk__36042_36341 = G__36346;
count__36043_36342 = G__36347;
i__36044_36343 = G__36348;
continue;
} else {
var temp__5804__auto___36349 = cljs.core.seq(seq__36041_36340);
if(temp__5804__auto___36349){
var seq__36041_36350__$1 = temp__5804__auto___36349;
if(cljs.core.chunked_seq_QMARK_(seq__36041_36350__$1)){
var c__5568__auto___36351 = cljs.core.chunk_first(seq__36041_36350__$1);
var G__36352 = cljs.core.chunk_rest(seq__36041_36350__$1);
var G__36353 = c__5568__auto___36351;
var G__36354 = cljs.core.count(c__5568__auto___36351);
var G__36355 = (0);
seq__36041_36340 = G__36352;
chunk__36042_36341 = G__36353;
count__36043_36342 = G__36354;
i__36044_36343 = G__36355;
continue;
} else {
var f_36356 = cljs.core.first(seq__36041_36350__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36356], 0));


var G__36357 = cljs.core.next(seq__36041_36350__$1);
var G__36358 = null;
var G__36359 = (0);
var G__36360 = (0);
seq__36041_36340 = G__36357;
chunk__36042_36341 = G__36358;
count__36043_36342 = G__36359;
i__36044_36343 = G__36360;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36361 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_36361], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_36361)))?cljs.core.second(arglists_36361):arglists_36361)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36061_36362 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36062_36363 = null;
var count__36063_36364 = (0);
var i__36064_36365 = (0);
while(true){
if((i__36064_36365 < count__36063_36364)){
var vec__36084_36366 = chunk__36062_36363.cljs$core$IIndexed$_nth$arity$2(null,i__36064_36365);
var name_36367 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36084_36366,(0),null);
var map__36087_36368 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36084_36366,(1),null);
var map__36087_36369__$1 = cljs.core.__destructure_map(map__36087_36368);
var doc_36370 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36087_36369__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36371 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36087_36369__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36367], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36371], 0));

if(cljs.core.truth_(doc_36370)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36370], 0));
} else {
}


var G__36379 = seq__36061_36362;
var G__36380 = chunk__36062_36363;
var G__36381 = count__36063_36364;
var G__36382 = (i__36064_36365 + (1));
seq__36061_36362 = G__36379;
chunk__36062_36363 = G__36380;
count__36063_36364 = G__36381;
i__36064_36365 = G__36382;
continue;
} else {
var temp__5804__auto___36383 = cljs.core.seq(seq__36061_36362);
if(temp__5804__auto___36383){
var seq__36061_36384__$1 = temp__5804__auto___36383;
if(cljs.core.chunked_seq_QMARK_(seq__36061_36384__$1)){
var c__5568__auto___36385 = cljs.core.chunk_first(seq__36061_36384__$1);
var G__36386 = cljs.core.chunk_rest(seq__36061_36384__$1);
var G__36387 = c__5568__auto___36385;
var G__36388 = cljs.core.count(c__5568__auto___36385);
var G__36389 = (0);
seq__36061_36362 = G__36386;
chunk__36062_36363 = G__36387;
count__36063_36364 = G__36388;
i__36064_36365 = G__36389;
continue;
} else {
var vec__36092_36390 = cljs.core.first(seq__36061_36384__$1);
var name_36391 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36092_36390,(0),null);
var map__36095_36392 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36092_36390,(1),null);
var map__36095_36393__$1 = cljs.core.__destructure_map(map__36095_36392);
var doc_36394 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36095_36393__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36395 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36095_36393__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36391], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36395], 0));

if(cljs.core.truth_(doc_36394)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36394], 0));
} else {
}


var G__36396 = cljs.core.next(seq__36061_36384__$1);
var G__36397 = null;
var G__36398 = (0);
var G__36399 = (0);
seq__36061_36362 = G__36396;
chunk__36062_36363 = G__36397;
count__36063_36364 = G__36398;
i__36064_36365 = G__36399;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__36104 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36105 = null;
var count__36106 = (0);
var i__36107 = (0);
while(true){
if((i__36107 < count__36106)){
var role = chunk__36105.cljs$core$IIndexed$_nth$arity$2(null,i__36107);
var temp__5804__auto___36400__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___36400__$1)){
var spec_36401 = temp__5804__auto___36400__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36401)], 0));
} else {
}


var G__36402 = seq__36104;
var G__36403 = chunk__36105;
var G__36404 = count__36106;
var G__36405 = (i__36107 + (1));
seq__36104 = G__36402;
chunk__36105 = G__36403;
count__36106 = G__36404;
i__36107 = G__36405;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__36104);
if(temp__5804__auto____$1){
var seq__36104__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__36104__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36104__$1);
var G__36406 = cljs.core.chunk_rest(seq__36104__$1);
var G__36407 = c__5568__auto__;
var G__36408 = cljs.core.count(c__5568__auto__);
var G__36409 = (0);
seq__36104 = G__36406;
chunk__36105 = G__36407;
count__36106 = G__36408;
i__36107 = G__36409;
continue;
} else {
var role = cljs.core.first(seq__36104__$1);
var temp__5804__auto___36410__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___36410__$2)){
var spec_36415 = temp__5804__auto___36410__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36415)], 0));
} else {
}


var G__36416 = cljs.core.next(seq__36104__$1);
var G__36417 = null;
var G__36418 = (0);
var G__36419 = (0);
seq__36104 = G__36416;
chunk__36105 = G__36417;
count__36106 = G__36418;
i__36107 = G__36419;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__36427 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__36428 = cljs.core.ex_cause(t);
via = G__36427;
t = G__36428;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__36225 = datafied_throwable;
var map__36225__$1 = cljs.core.__destructure_map(map__36225);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36225__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36225__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36225__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__36226 = cljs.core.last(via);
var map__36226__$1 = cljs.core.__destructure_map(map__36226);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36226__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36226__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36226__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__36227 = data;
var map__36227__$1 = cljs.core.__destructure_map(map__36227);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36227__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36227__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36227__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__36228 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__36228__$1 = cljs.core.__destructure_map(map__36228);
var top_data = map__36228__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36228__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__36229 = phase;
var G__36229__$1 = (((G__36229 instanceof cljs.core.Keyword))?G__36229.fqn:null);
switch (G__36229__$1) {
case "read-source":
var map__36231 = data;
var map__36231__$1 = cljs.core.__destructure_map(map__36231);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36231__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36231__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__36232 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__36232__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36232,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36232);
var G__36232__$2 = (cljs.core.truth_((function (){var fexpr__36240 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36240.cljs$core$IFn$_invoke$arity$1 ? fexpr__36240.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36240.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36232__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36232__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36232__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36232__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__36241 = top_data;
var G__36241__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36241,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36241);
var G__36241__$2 = (cljs.core.truth_((function (){var fexpr__36246 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36246.cljs$core$IFn$_invoke$arity$1 ? fexpr__36246.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36246.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36241__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36241__$1);
var G__36241__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36241__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36241__$2);
var G__36241__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36241__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36241__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36241__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36241__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__36250 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36250,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36250,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36250,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36250,(3),null);
var G__36253 = top_data;
var G__36253__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36253,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__36253);
var G__36253__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36253__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__36253__$1);
var G__36253__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36253__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__36253__$2);
var G__36253__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36253__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36253__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36253__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36253__$4;
}

break;
case "execution":
var vec__36257 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36257,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36257,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36257,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36257,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__36224_SHARP_){
var or__5045__auto__ = (p1__36224_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__36260 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36260.cljs$core$IFn$_invoke$arity$1 ? fexpr__36260.cljs$core$IFn$_invoke$arity$1(p1__36224_SHARP_) : fexpr__36260.call(null,p1__36224_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__36264 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__36264__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36264,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__36264);
var G__36264__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36264__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36264__$1);
var G__36264__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36264__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__36264__$2);
var G__36264__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36264__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__36264__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36264__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36264__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36229__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__36271){
var map__36272 = p__36271;
var map__36272__$1 = cljs.core.__destructure_map(map__36272);
var triage_data = map__36272__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36272__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36272__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36272__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36272__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36272__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36272__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36272__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36272__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__36283 = phase;
var G__36283__$1 = (((G__36283 instanceof cljs.core.Keyword))?G__36283.fqn:null);
switch (G__36283__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__36290 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__36291 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36292 = loc;
var G__36293 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36294_36447 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36295_36448 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36296_36449 = true;
var _STAR_print_fn_STAR__temp_val__36297_36450 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36296_36449);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36297_36450);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36268_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36268_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36295_36448);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36294_36447);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36290,G__36291,G__36292,G__36293) : format.call(null,G__36290,G__36291,G__36292,G__36293));

break;
case "macroexpansion":
var G__36298 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__36299 = cause_type;
var G__36300 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36301 = loc;
var G__36302 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36298,G__36299,G__36300,G__36301,G__36302) : format.call(null,G__36298,G__36299,G__36300,G__36301,G__36302));

break;
case "compile-syntax-check":
var G__36303 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__36304 = cause_type;
var G__36305 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36306 = loc;
var G__36307 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36303,G__36304,G__36305,G__36306,G__36307) : format.call(null,G__36303,G__36304,G__36305,G__36306,G__36307));

break;
case "compilation":
var G__36308 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__36309 = cause_type;
var G__36310 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36311 = loc;
var G__36312 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36308,G__36309,G__36310,G__36311,G__36312) : format.call(null,G__36308,G__36309,G__36310,G__36311,G__36312));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__36313 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__36314 = symbol;
var G__36315 = loc;
var G__36316 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36321_36452 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36322_36453 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36323_36454 = true;
var _STAR_print_fn_STAR__temp_val__36324_36455 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36323_36454);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36324_36455);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36270_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36270_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36322_36453);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36321_36452);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36313,G__36314,G__36315,G__36316) : format.call(null,G__36313,G__36314,G__36315,G__36316));
} else {
var G__36335 = "Execution error%s at %s(%s).\n%s\n";
var G__36336 = cause_type;
var G__36337 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36338 = loc;
var G__36339 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36335,G__36336,G__36337,G__36338,G__36339) : format.call(null,G__36335,G__36336,G__36337,G__36338,G__36339));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36283__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
