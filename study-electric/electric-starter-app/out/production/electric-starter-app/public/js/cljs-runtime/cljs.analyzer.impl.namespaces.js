goog.provide('cljs.analyzer.impl.namespaces');
/**
 * Given a libspec return a map of :as-alias alias, if was present. Return the
 * libspec with :as-alias elided. If the libspec was *only* :as-alias do not
 * return it.
 */
cljs.analyzer.impl.namespaces.check_and_remove_as_alias = (function cljs$analyzer$impl$namespaces$check_and_remove_as_alias(libspec){
if((((libspec instanceof cljs.core.Symbol)) || ((libspec instanceof cljs.core.Keyword)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec], null);
} else {
var vec__38860 = libspec;
var seq__38861 = cljs.core.seq(vec__38860);
var first__38862 = cljs.core.first(seq__38861);
var seq__38861__$1 = cljs.core.next(seq__38861);
var lib = first__38862;
var spec = seq__38861__$1;
var libspec__$1 = vec__38860;
var vec__38863 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38863,(0),null);
var vec__38866 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38863,(1),null);
var seq__38867 = cljs.core.seq(vec__38866);
var first__38868 = cljs.core.first(seq__38867);
var seq__38867__$1 = cljs.core.next(seq__38867);
var _ = first__38868;
var first__38868__$1 = cljs.core.first(seq__38867__$1);
var seq__38867__$2 = cljs.core.next(seq__38867__$1);
var alias = first__38868__$1;
var post_spec = seq__38867__$2;
var post = vec__38866;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__38881 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38881,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__38881;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__38890 = cljs.core.seq(new_as_aliases);
var chunk__38891 = null;
var count__38892 = (0);
var i__38893 = (0);
while(true){
if((i__38893 < count__38892)){
var vec__38931 = chunk__38891.cljs$core$IIndexed$_nth$arity$2(null,i__38893);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38931,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38931,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__39044 = seq__38890;
var G__39045 = chunk__38891;
var G__39046 = count__38892;
var G__39047 = (i__38893 + (1));
seq__38890 = G__39044;
chunk__38891 = G__39045;
count__38892 = G__39046;
i__38893 = G__39047;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__38890);
if(temp__5804__auto__){
var seq__38890__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38890__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38890__$1);
var G__39049 = cljs.core.chunk_rest(seq__38890__$1);
var G__39050 = c__5568__auto__;
var G__39051 = cljs.core.count(c__5568__auto__);
var G__39052 = (0);
seq__38890 = G__39049;
chunk__38891 = G__39050;
count__38892 = G__39051;
i__38893 = G__39052;
continue;
} else {
var vec__38957 = cljs.core.first(seq__38890__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38957,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38957,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__39057 = cljs.core.next(seq__38890__$1);
var G__39058 = null;
var G__39059 = (0);
var G__39060 = (0);
seq__38890 = G__39057;
chunk__38891 = G__39058;
count__38892 = G__39059;
i__38893 = G__39060;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Given libspecs, elide all :as-alias. Return a map of :libspecs (filtered)
 * and :as-aliases.
 */
cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_libspecs(var_args){
var G__38968 = arguments.length;
switch (G__38968) {
case 1:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1 = (function (libspecs){
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2 = (function (libspecs,as_aliases){
var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),as_aliases,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__$1,libspec){
var map__38996 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__38996__$1 = cljs.core.__destructure_map(map__38996);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38996__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38996__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates(new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__38999 = ret__$1;
var G__38999__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__38999,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__38999);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__38999__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__38999__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__39021,p__39022){
var map__39025 = p__39021;
var map__39025__$1 = cljs.core.__destructure_map(map__39025);
var ret__$1 = map__39025__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39025__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__39026 = p__39022;
var seq__39027 = cljs.core.seq(vec__39026);
var first__39028 = cljs.core.first(seq__39027);
var seq__39027__$1 = cljs.core.next(seq__39027);
var spec_key = first__39028;
var libspecs = seq__39027__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__39032 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__39032__$1 = cljs.core.__destructure_map(map__39032);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39032__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39032__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__39034 = ret__$1;
var G__39034__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__39034,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__39034);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__39034__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__39034__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=cljs.analyzer.impl.namespaces.js.map
