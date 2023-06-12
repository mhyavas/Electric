goog.provide('hyperfiddle.electric');
(hyperfiddle.electric.Pending.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL);

(hyperfiddle.electric.Pending.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return (other instanceof hyperfiddle.electric.Pending);
}));
(hyperfiddle.electric.Failure.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL);

(hyperfiddle.electric.Failure.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return (((other instanceof hyperfiddle.electric.Failure)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.error,other.error)));
}));
(hyperfiddle.electric.FailureInfo.prototype.__proto__ = cljs.core.ExceptionInfo.prototype);
(hyperfiddle.electric.FailureInfo.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL);

(hyperfiddle.electric.FailureInfo.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return (((other instanceof hyperfiddle.electric.FailureInfo)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.cause,other.cause)));
}));
/**
 * Takes a resolve map and a program, returns a booting function.
 *   The booting function takes
 *   * as first argument a function Any->Task[Unit] returned task writes the value on the wire.
 *   * as second argument a flow producing the values read on the wire.
 *   and returning a task that runs the local reactor.
 */
hyperfiddle.electric.eval = hyperfiddle.electric.impl.runtime.eval;
hyperfiddle.electric.hook = hyperfiddle.electric.impl.runtime.hook;
hyperfiddle.electric.bind = hyperfiddle.electric.impl.runtime.bind;
hyperfiddle.electric.with$ = hyperfiddle.electric.impl.runtime.with$;
hyperfiddle.electric.pair = (function hyperfiddle$electric$pair(c,s){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr46737_block_0 = (function hyperfiddle$electric$pair_$_cr46737_block_0(cr46737_state){
try{var cr46737_place_0 = missionary.core.dfv;
var cr46737_place_1 = (function (){var fexpr__46801 = cr46737_place_0;
return (fexpr__46801.cljs$core$IFn$_invoke$arity$0 ? fexpr__46801.cljs$core$IFn$_invoke$arity$0() : fexpr__46801.call(null));
})();
var cr46737_place_2 = missionary.core.dfv;
var cr46737_place_3 = (function (){var fexpr__46802 = cr46737_place_2;
return (fexpr__46802.cljs$core$IFn$_invoke$arity$0 ? fexpr__46802.cljs$core$IFn$_invoke$arity$0() : fexpr__46802.call(null));
})();
var cr46737_place_4 = missionary.core.join;
var cr46737_place_5 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr46737_place_6 = (function (x){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr46740_block_0 = (function (cr46740_state){
try{var cr46740_place_0 = cr46737_place_1;
(cr46740_state[(0)] = cr46740_block_1);

return missionary.core.park(cr46740_place_0);
}catch (e46807){var e46746 = e46807;
var cr46740_exception = e46746;
(cr46740_state[(0)] = null);

throw cr46740_exception;
}});
var cr46740_block_1 = (function (cr46740_state){
try{var cr46740_place_1 = missionary.core.unpark();
var cr46740_place_2 = cr46740_place_1;
var cr46740_place_3 = x;
var cr46740_place_4 = (function (){var G__46749 = cr46740_place_3;
var fexpr__46748 = cr46740_place_2;
var G__46810 = G__46749;
var fexpr__46809 = fexpr__46748;
return (fexpr__46809.cljs$core$IFn$_invoke$arity$1 ? fexpr__46809.cljs$core$IFn$_invoke$arity$1(G__46810) : fexpr__46809.call(null,G__46810));
})();
(cr46740_state[(0)] = null);

return cr46740_place_4;
}catch (e46808){var e46747 = e46808;
var cr46740_exception = e46747;
(cr46740_state[(0)] = null);

throw cr46740_exception;
}});
return cloroutine.impl.coroutine((function (){var G__46750 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__46750[(0)] = cr46740_block_0);

return G__46750;
})());
})(),missionary.core.sp_run);
});
var cr46737_place_7 = (function (_BANG_){
var G__46812_46942 = _BANG_;
var fexpr__46811_46943 = cr46737_place_3;
(fexpr__46811_46943.cljs$core$IFn$_invoke$arity$1 ? fexpr__46811_46943.cljs$core$IFn$_invoke$arity$1(G__46812_46942) : fexpr__46811_46943.call(null,G__46812_46942));

return (function (){
return cljs.core.List.EMPTY;
});
});
var cr46737_place_8 = s;
var cr46737_place_9 = cr46737_place_6;
var cr46737_place_10 = cr46737_place_7;
var cr46737_place_11 = (function (){var G__46814 = cr46737_place_9;
var G__46815 = cr46737_place_10;
var fexpr__46813 = cr46737_place_8;
return (fexpr__46813.cljs$core$IFn$_invoke$arity$2 ? fexpr__46813.cljs$core$IFn$_invoke$arity$2(G__46814,G__46815) : fexpr__46813.call(null,G__46814,G__46815));
})();
var cr46737_place_12 = (function (x){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr46754_block_0 = (function (cr46754_state){
try{var cr46754_place_0 = cr46737_place_3;
(cr46754_state[(0)] = cr46754_block_1);

return missionary.core.park(cr46754_place_0);
}catch (e46820){var e46760 = e46820;
var cr46754_exception = e46760;
(cr46754_state[(0)] = null);

throw cr46754_exception;
}});
var cr46754_block_1 = (function (cr46754_state){
try{var cr46754_place_1 = missionary.core.unpark();
var cr46754_place_2 = cr46754_place_1;
var cr46754_place_3 = x;
var cr46754_place_4 = (function (){var G__46763 = cr46754_place_3;
var fexpr__46762 = cr46754_place_2;
var G__46823 = G__46763;
var fexpr__46822 = fexpr__46762;
return (fexpr__46822.cljs$core$IFn$_invoke$arity$1 ? fexpr__46822.cljs$core$IFn$_invoke$arity$1(G__46823) : fexpr__46822.call(null,G__46823));
})();
(cr46754_state[(0)] = null);

return cr46754_place_4;
}catch (e46821){var e46761 = e46821;
var cr46754_exception = e46761;
(cr46754_state[(0)] = null);

throw cr46754_exception;
}});
return cloroutine.impl.coroutine((function (){var G__46764 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__46764[(0)] = cr46754_block_0);

return G__46764;
})());
})(),missionary.core.sp_run);
});
var cr46737_place_13 = (function (_BANG_){
var G__46825_46944 = _BANG_;
var fexpr__46824_46945 = cr46737_place_1;
(fexpr__46824_46945.cljs$core$IFn$_invoke$arity$1 ? fexpr__46824_46945.cljs$core$IFn$_invoke$arity$1(G__46825_46944) : fexpr__46824_46945.call(null,G__46825_46944));

return (function (){
return cljs.core.List.EMPTY;
});
});
var cr46737_place_14 = (function (p1__46736_SHARP_){
throw p1__46736_SHARP_;
});
var cr46737_place_15 = c;
var cr46737_place_16 = cr46737_place_12;
var cr46737_place_17 = cr46737_place_13;
var cr46737_place_18 = cr46737_place_14;
var cr46737_place_19 = (function (){var G__46827 = cr46737_place_16;
var G__46828 = cr46737_place_17;
var G__46829 = cr46737_place_18;
var fexpr__46826 = cr46737_place_15;
return (fexpr__46826.cljs$core$IFn$_invoke$arity$3 ? fexpr__46826.cljs$core$IFn$_invoke$arity$3(G__46827,G__46828,G__46829) : fexpr__46826.call(null,G__46827,G__46828,G__46829));
})();
var cr46737_place_20 = (function (){var G__46831 = cr46737_place_5;
var G__46832 = cr46737_place_11;
var G__46833 = cr46737_place_19;
var fexpr__46830 = cr46737_place_4;
return (fexpr__46830.cljs$core$IFn$_invoke$arity$3 ? fexpr__46830.cljs$core$IFn$_invoke$arity$3(G__46831,G__46832,G__46833) : fexpr__46830.call(null,G__46831,G__46832,G__46833));
})();
(cr46737_state[(0)] = cr46737_block_1);

return missionary.core.park(cr46737_place_20);
}catch (e46800){var cr46737_exception = e46800;
(cr46737_state[(0)] = null);

throw cr46737_exception;
}});
var cr46737_block_1 = (function hyperfiddle$electric$pair_$_cr46737_block_1(cr46737_state){
try{var cr46737_place_21 = missionary.core.unpark();
(cr46737_state[(0)] = null);

return cr46737_place_21;
}catch (e46834){var cr46737_exception = e46834;
(cr46737_state[(0)] = null);

throw cr46737_exception;
}});
return cloroutine.impl.coroutine((function (){var G__46835 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__46835[(0)] = cr46737_block_0);

return G__46835;
})());
})(),missionary.core.sp_run);
});
hyperfiddle.electric.failure_QMARK_ = (function hyperfiddle$electric$failure_QMARK_(x){
return (x instanceof hyperfiddle.electric.Failure);
});
hyperfiddle.electric.task__GT_cp = (function hyperfiddle$electric$task__GT_cp(var_args){
var G__46838 = arguments.length;
switch (G__46838) {
case 1:
return hyperfiddle.electric.task__GT_cp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hyperfiddle.electric.task__GT_cp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hyperfiddle.electric.task__GT_cp.cljs$core$IFn$_invoke$arity$1 = (function (_BANG_x){
return hyperfiddle.electric.task__GT_cp.cljs$core$IFn$_invoke$arity$2(_BANG_x,(new hyperfiddle.electric.Failure((new hyperfiddle.electric.Pending()))));
}));

(hyperfiddle.electric.task__GT_cp.cljs$core$IFn$_invoke$arity$2 = (function (_BANG_x,pending){
return missionary.core.reductions.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,pending,cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr46839_block_0 = (function hyperfiddle$electric$cr46839_block_0(cr46839_state){
try{var cr46839_place_0 = _BANG_x;
(cr46839_state[(0)] = cr46839_block_1);

return missionary.core.park(cr46839_place_0);
}catch (e46842){var cr46839_exception = e46842;
(cr46839_state[(0)] = null);

throw cr46839_exception;
}});
var cr46839_block_1 = (function hyperfiddle$electric$cr46839_block_1(cr46839_state){
try{var cr46839_place_1 = missionary.core.unpark();
(cr46839_state[(0)] = null);

return cr46839_place_1;
}catch (e46843){var cr46839_exception = e46843;
(cr46839_state[(0)] = null);

throw cr46839_exception;
}});
return cloroutine.impl.coroutine((function (){var G__46844 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__46844[(0)] = cr46839_block_0);

return G__46844;
})());
})(),missionary.core.ap_run));
}));

(hyperfiddle.electric.task__GT_cp.cljs$lang$maxFixedArity = 2);


/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
hyperfiddle.electric.Clock = (function (raf,callback,terminator){
this.raf = raf;
this.callback = callback;
this.terminator = terminator;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.Clock.prototype.call = (function (unused__13632__auto__){
var self__ = this;
var self__ = this;
var G__46846 = (arguments.length - (1));
switch (G__46846) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.Clock.prototype.apply = (function (self__,args46845){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args46845)));
}));

(hyperfiddle.electric.Clock.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
if((self__.raf === (0))){
return (self__.callback = null);
} else {
window.cancelAnimationFrame(self__.raf);

return (self__.terminator.cljs$core$IFn$_invoke$arity$0 ? self__.terminator.cljs$core$IFn$_invoke$arity$0() : self__.terminator.call(null));
}
}));

(hyperfiddle.electric.Clock.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if((self__.callback == null)){
(self__.terminator.cljs$core$IFn$_invoke$arity$0 ? self__.terminator.cljs$core$IFn$_invoke$arity$0() : self__.terminator.call(null));
} else {
(self__.raf = window.requestAnimationFrame(self__.callback));
}

return new cljs.core.Keyword("hyperfiddle.electric","tick","hyperfiddle.electric/tick",-1268517293);
}));

(hyperfiddle.electric.Clock.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"raf","raf",345121375,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null),new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"callback","callback",935395299,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"terminator","terminator",-1051388676,null)], null);
}));

(hyperfiddle.electric.Clock.cljs$lang$type = true);

(hyperfiddle.electric.Clock.cljs$lang$ctorStr = "hyperfiddle.electric/Clock");

(hyperfiddle.electric.Clock.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric/Clock");
}));

/**
 * Positional factory function for hyperfiddle.electric/Clock.
 */
hyperfiddle.electric.__GT_Clock = (function hyperfiddle$electric$__GT_Clock(raf,callback,terminator){
return (new hyperfiddle.electric.Clock(raf,callback,terminator));
});

/**
 * lazy & efficient logical clock that schedules no work unless sampled
 */
hyperfiddle.electric._LT_clock = (function hyperfiddle$electric$_LT_clock(n,t){
var cancel = hyperfiddle.electric.__GT_Clock((0),null,t);
(cancel.callback = (function (_){
(cancel.raf = (0));

return (n.cljs$core$IFn$_invoke$arity$0 ? n.cljs$core$IFn$_invoke$arity$0() : n.call(null));
}));

(n.cljs$core$IFn$_invoke$arity$0 ? n.cljs$core$IFn$_invoke$arity$0() : n.call(null));

return cancel;
});
hyperfiddle.electric._get_system_time_ms = (function hyperfiddle$electric$_get_system_time_ms(var_args){
var args__5775__auto__ = [];
var len__5769__auto___46954 = arguments.length;
var i__5770__auto___46955 = (0);
while(true){
if((i__5770__auto___46955 < len__5769__auto___46954)){
args__5775__auto__.push((arguments[i__5770__auto___46955]));

var G__46956 = (i__5770__auto___46955 + (1));
i__5770__auto___46955 = G__46956;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return hyperfiddle.electric._get_system_time_ms.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(hyperfiddle.electric._get_system_time_ms.cljs$core$IFn$_invoke$arity$variadic = (function (p__46848){
var vec__46849 = p__46848;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46849,(0),null);
return Date.now();
}));

(hyperfiddle.electric._get_system_time_ms.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(hyperfiddle.electric._get_system_time_ms.cljs$lang$applyTo = (function (seq46847){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq46847));
}));

hyperfiddle.electric._listen = (function hyperfiddle$electric$_listen(node,typ,f,opts){
node.addEventListener(typ,f,opts);

return (function (){
return node.removeEventListener(typ,f);
});
});
hyperfiddle.electric.event_STAR_ = (function hyperfiddle$electric$event_STAR_(node,typ,f_BANG_,opts){
return missionary.core.relieve(cljs.core.PersistentArrayMap.EMPTY,missionary.core.observe((function (_BANG_){
(_BANG_.cljs$core$IFn$_invoke$arity$1 ? _BANG_.cljs$core$IFn$_invoke$arity$1(null) : _BANG_.call(null,null));

return hyperfiddle.electric._listen(node,typ,(function (p1__46852_SHARP_){
var G__46853 = (f_BANG_.cljs$core$IFn$_invoke$arity$1 ? f_BANG_.cljs$core$IFn$_invoke$arity$1(p1__46852_SHARP_) : f_BANG_.call(null,p1__46852_SHARP_));
return (_BANG_.cljs$core$IFn$_invoke$arity$1 ? _BANG_.cljs$core$IFn$_invoke$arity$1(G__46853) : _BANG_.call(null,G__46853));
}),cljs.core.clj__GT_js(opts));
})));
});
hyperfiddle.electric._LT_dom_visibility_state = missionary.core.latest.cljs$core$IFn$_invoke$arity$variadic((function (_){
return document.visibilityState;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hyperfiddle.electric.event_STAR_(document,"visibilitychange",cljs.core.identity,cljs.core.PersistentArrayMap.EMPTY)], 0));
hyperfiddle.electric._check_fn_arity_BANG_ = (function hyperfiddle$electric$_check_fn_arity_BANG_(name,expected,actual){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(expected,actual)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["You called ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = name;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("hyperfiddle.electric","unnamed-efn","hyperfiddle.electric/unnamed-efn",1016396331)], 0));
}
})()),", a ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected),"-arg e/fn with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual)," arguments."].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name], null));
} else {
return null;
}
});
hyperfiddle.electric.watchable_QMARK_ = (function hyperfiddle$electric$watchable_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition1$ & (2))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IWatchable$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,x);
}
});
hyperfiddle.electric.checked_watch = (function hyperfiddle$electric$checked_watch(_BANG_x){
if(hyperfiddle.electric.watchable_QMARK_(_BANG_x)){
} else {
throw (new Error(["Assert failed: ","Provided argument is not Watchable.","\n","(watchable? !x)"].join('')));
}

return missionary.core.watch(_BANG_x);
});
hyperfiddle.electric._invalid_watch_usage_message = "Invalid e/watch (use from Electric code only, maybe you forgot a e/def?)";
hyperfiddle.electric.debounce_discreet = (function hyperfiddle$electric$debounce_discreet(var_args){
var G__46857 = arguments.length;
switch (G__46857) {
case 2:
return hyperfiddle.electric.debounce_discreet.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hyperfiddle.electric.debounce_discreet.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hyperfiddle.electric.debounce_discreet.cljs$core$IFn$_invoke$arity$2 = (function (delay,flow){
return hyperfiddle.electric.debounce_discreet.cljs$core$IFn$_invoke$arity$3(delay,null,flow);
}));

(hyperfiddle.electric.debounce_discreet.cljs$core$IFn$_invoke$arity$3 = (function (delay,init,flow){
return missionary.core.reductions.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,init,cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr46858_block_5 = (function hyperfiddle$electric$cr46858_block_5(cr46858_state){
try{var cr46858_place_13 = new cljs.core.Keyword(null,"else","else",-1508377146);
var cr46858_place_14 = null;
if(cljs.core.truth_(cr46858_place_13)){
(cr46858_state[(0)] = cr46858_block_7);

(cr46858_state[(2)] = null);

return cr46858_state;
} else {
(cr46858_state[(0)] = cr46858_block_6);

(cr46858_state[(4)] = cr46858_place_14);

return cr46858_state;
}
}catch (e46876){var cr46858_exception = e46876;
(cr46858_state[(0)] = cr46858_block_12);

(cr46858_state[(2)] = null);

(cr46858_state[(3)] = true);

(cr46858_state[(1)] = cr46858_exception);

return cr46858_state;
}});
var cr46858_block_8 = (function hyperfiddle$electric$cr46858_block_8(cr46858_state){
try{var cr46858_place_14 = (cr46858_state[(4)]);
(cr46858_state[(0)] = cr46858_block_11);

(cr46858_state[(4)] = null);

(cr46858_state[(2)] = cr46858_place_14);

return cr46858_state;
}catch (e46877){var cr46858_exception = e46877;
(cr46858_state[(0)] = cr46858_block_12);

(cr46858_state[(2)] = null);

(cr46858_state[(4)] = null);

(cr46858_state[(3)] = true);

(cr46858_state[(1)] = cr46858_exception);

return cr46858_state;
}});
var cr46858_block_11 = (function hyperfiddle$electric$cr46858_block_11(cr46858_state){
try{var cr46858_place_12 = (cr46858_state[(2)]);
(cr46858_state[(0)] = cr46858_block_12);

(cr46858_state[(2)] = null);

(cr46858_state[(1)] = cr46858_place_12);

return cr46858_state;
}catch (e46878){var cr46858_exception = e46878;
(cr46858_state[(0)] = cr46858_block_12);

(cr46858_state[(2)] = null);

(cr46858_state[(3)] = true);

(cr46858_state[(1)] = cr46858_exception);

return cr46858_state;
}});
var cr46858_block_9 = (function hyperfiddle$electric$cr46858_block_9(cr46858_state){
try{var cr46858_place_2 = (cr46858_state[(1)]);
var cr46858_place_18 = cr46858_place_2;
var cr46858_place_19 = (1);
var cr46858_place_20 = missionary.core.none;
(cr46858_state[(0)] = cr46858_block_10);

return missionary.core.fork(cr46858_place_19,cr46858_place_20);
}catch (e46879){var cr46858_exception = e46879;
(cr46858_state[(0)] = cr46858_block_12);

(cr46858_state[(2)] = null);

(cr46858_state[(3)] = true);

(cr46858_state[(1)] = cr46858_exception);

return cr46858_state;
}});
var cr46858_block_1 = (function hyperfiddle$electric$cr46858_block_1(cr46858_state){
try{var cr46858_place_1 = missionary.core.unpark();
var cr46858_place_2 = null;
var cr46858_place_3 = false;
(cr46858_state[(0)] = cr46858_block_2);

(cr46858_state[(2)] = cr46858_place_1);

(cr46858_state[(1)] = cr46858_place_2);

(cr46858_state[(3)] = cr46858_place_3);

return cr46858_state;
}catch (e46880){var cr46858_exception = e46880;
(cr46858_state[(0)] = null);

throw cr46858_exception;
}});
var cr46858_block_4 = (function hyperfiddle$electric$cr46858_block_4(cr46858_state){
try{var cr46858_place_2 = (cr46858_state[(1)]);
var cr46858_place_9 = cr46858_place_2;
var cr46858_place_10 = missionary.Cancelled;
var cr46858_place_11 = (cr46858_place_9 instanceof cr46858_place_10);
var cr46858_place_12 = null;
if(cr46858_place_11){
(cr46858_state[(0)] = cr46858_block_9);

(cr46858_state[(2)] = cr46858_place_12);

return cr46858_state;
} else {
(cr46858_state[(0)] = cr46858_block_5);

(cr46858_state[(2)] = cr46858_place_12);

return cr46858_state;
}
}catch (e46881){var cr46858_exception = e46881;
(cr46858_state[(0)] = cr46858_block_12);

(cr46858_state[(3)] = true);

(cr46858_state[(1)] = cr46858_exception);

return cr46858_state;
}});
var cr46858_block_10 = (function hyperfiddle$electric$cr46858_block_10(cr46858_state){
try{var cr46858_place_21 = missionary.core.unpark();
(cr46858_state[(0)] = cr46858_block_11);

(cr46858_state[(2)] = cr46858_place_21);

return cr46858_state;
}catch (e46882){var cr46858_exception = e46882;
(cr46858_state[(0)] = cr46858_block_12);

(cr46858_state[(2)] = null);

(cr46858_state[(3)] = true);

(cr46858_state[(1)] = cr46858_exception);

return cr46858_state;
}});
var cr46858_block_12 = (function hyperfiddle$electric$cr46858_block_12(cr46858_state){
try{var cr46858_place_2 = (cr46858_state[(1)]);
var cr46858_place_3 = (cr46858_state[(3)]);
var cr46858_place_22 = (cljs.core.truth_(cr46858_place_3)?(function(){throw cr46858_place_2})():cr46858_place_2);
(cr46858_state[(0)] = null);

(cr46858_state[(1)] = null);

(cr46858_state[(3)] = null);

return cr46858_place_22;
}catch (e46883){var cr46858_exception = e46883;
(cr46858_state[(0)] = null);

(cr46858_state[(1)] = null);

(cr46858_state[(3)] = null);

throw cr46858_exception;
}});
var cr46858_block_7 = (function hyperfiddle$electric$cr46858_block_7(cr46858_state){
try{var cr46858_place_2 = (cr46858_state[(1)]);
var cr46858_place_16 = cr46858_place_2;
var cr46858_place_17 = (function(){throw cr46858_place_16})();
(cr46858_state[(0)] = null);

(cr46858_state[(1)] = null);

(cr46858_state[(3)] = null);

return null;
}catch (e46884){var cr46858_exception = e46884;
(cr46858_state[(0)] = cr46858_block_12);

(cr46858_state[(3)] = true);

(cr46858_state[(1)] = cr46858_exception);

return cr46858_state;
}});
var cr46858_block_2 = (function hyperfiddle$electric$cr46858_block_2(cr46858_state){
try{var cr46858_place_1 = (cr46858_state[(2)]);
var cr46858_place_4 = missionary.core.sleep;
var cr46858_place_5 = delay;
var cr46858_place_6 = cr46858_place_1;
var cr46858_place_7 = (function (){var G__46887 = cr46858_place_5;
var G__46888 = cr46858_place_6;
var fexpr__46886 = cr46858_place_4;
return (fexpr__46886.cljs$core$IFn$_invoke$arity$2 ? fexpr__46886.cljs$core$IFn$_invoke$arity$2(G__46887,G__46888) : fexpr__46886.call(null,G__46887,G__46888));
})();
(cr46858_state[(0)] = cr46858_block_3);

(cr46858_state[(2)] = null);

return missionary.core.park(cr46858_place_7);
}catch (e46885){var cr46858_exception = e46885;
(cr46858_state[(0)] = cr46858_block_4);

(cr46858_state[(2)] = null);

(cr46858_state[(1)] = cr46858_exception);

return cr46858_state;
}});
var cr46858_block_6 = (function hyperfiddle$electric$cr46858_block_6(cr46858_state){
try{var cr46858_place_15 = null;
(cr46858_state[(0)] = cr46858_block_8);

(cr46858_state[(4)] = cr46858_place_15);

return cr46858_state;
}catch (e46889){var cr46858_exception = e46889;
(cr46858_state[(0)] = cr46858_block_12);

(cr46858_state[(2)] = null);

(cr46858_state[(4)] = null);

(cr46858_state[(3)] = true);

(cr46858_state[(1)] = cr46858_exception);

return cr46858_state;
}});
var cr46858_block_0 = (function hyperfiddle$electric$cr46858_block_0(cr46858_state){
try{var cr46858_place_0 = flow;
(cr46858_state[(0)] = cr46858_block_1);

return missionary.core.switch$(cr46858_place_0);
}catch (e46890){var cr46858_exception = e46890;
(cr46858_state[(0)] = null);

throw cr46858_exception;
}});
var cr46858_block_3 = (function hyperfiddle$electric$cr46858_block_3(cr46858_state){
try{var cr46858_place_8 = missionary.core.unpark();
(cr46858_state[(0)] = cr46858_block_12);

(cr46858_state[(1)] = cr46858_place_8);

return cr46858_state;
}catch (e46891){var cr46858_exception = e46891;
(cr46858_state[(0)] = cr46858_block_4);

(cr46858_state[(1)] = cr46858_exception);

return cr46858_state;
}});
return cloroutine.impl.coroutine((function (){var G__46892 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((5));
(G__46892[(0)] = cr46858_block_0);

return G__46892;
})());
})(),missionary.core.ap_run));
}));

(hyperfiddle.electric.debounce_discreet.cljs$lang$maxFixedArity = 3);

hyperfiddle.electric.throttle = (function hyperfiddle$electric$throttle(dur,_GT_in){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr46893_block_8 = (function hyperfiddle$electric$throttle_$_cr46893_block_8(cr46893_state){
try{var cr46893_place_14 = (cr46893_state[(2)]);
(cr46893_state[(0)] = null);

(cr46893_state[(2)] = null);

return cr46893_place_14;
}catch (e46914){var cr46893_exception = e46914;
(cr46893_state[(0)] = null);

(cr46893_state[(2)] = null);

throw cr46893_exception;
}});
var cr46893_block_3 = (function hyperfiddle$electric$throttle_$_cr46893_block_3(cr46893_state){
try{var cr46893_place_5 = (cr46893_state[(1)]);
var cr46893_place_15 = cr46893_place_5;
(cr46893_state[(0)] = cr46893_block_8);

(cr46893_state[(1)] = null);

(cr46893_state[(2)] = cr46893_place_15);

return cr46893_state;
}catch (e46915){var cr46893_exception = e46915;
(cr46893_state[(0)] = null);

(cr46893_state[(1)] = null);

(cr46893_state[(2)] = null);

throw cr46893_exception;
}});
var cr46893_block_0 = (function hyperfiddle$electric$throttle_$_cr46893_block_0(cr46893_state){
try{var cr46893_place_0 = (1);
var cr46893_place_1 = missionary.core.relieve;
var cr46893_place_2 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr46893_place_3 = _GT_in;
var cr46893_place_4 = (function (){var G__46918 = cr46893_place_2;
var G__46919 = cr46893_place_3;
var fexpr__46917 = cr46893_place_1;
return (fexpr__46917.cljs$core$IFn$_invoke$arity$2 ? fexpr__46917.cljs$core$IFn$_invoke$arity$2(G__46918,G__46919) : fexpr__46917.call(null,G__46918,G__46919));
})();
(cr46893_state[(0)] = cr46893_block_1);

return missionary.core.fork(cr46893_place_0,cr46893_place_4);
}catch (e46916){var cr46893_exception = e46916;
(cr46893_state[(0)] = null);

throw cr46893_exception;
}});
var cr46893_block_5 = (function hyperfiddle$electric$throttle_$_cr46893_block_5(cr46893_state){
try{var cr46893_place_19 = missionary.core.unpark();
var cr46893_place_20 = (1);
var cr46893_place_21 = missionary.core.none;
(cr46893_state[(0)] = cr46893_block_6);

return missionary.core.fork(cr46893_place_20,cr46893_place_21);
}catch (e46920){var cr46893_exception = e46920;
(cr46893_state[(0)] = null);

(cr46893_state[(2)] = null);

throw cr46893_exception;
}});
var cr46893_block_6 = (function hyperfiddle$electric$throttle_$_cr46893_block_6(cr46893_state){
try{var cr46893_place_22 = missionary.core.unpark();
(cr46893_state[(0)] = cr46893_block_8);

(cr46893_state[(2)] = cr46893_place_22);

return cr46893_state;
}catch (e46921){var cr46893_exception = e46921;
(cr46893_state[(0)] = null);

(cr46893_state[(2)] = null);

throw cr46893_exception;
}});
var cr46893_block_7 = (function hyperfiddle$electric$throttle_$_cr46893_block_7(cr46893_state){
try{var cr46893_place_12 = (cr46893_state[(1)]);
var cr46893_place_23 = "No matching clause: ";
var cr46893_place_24 = cr46893_place_12;
var cr46893_place_25 = [cr46893_place_23,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr46893_place_24)].join('');
var cr46893_place_26 = (new Error(cr46893_place_25));
var cr46893_place_27 = (function(){throw cr46893_place_26})();
(cr46893_state[(0)] = null);

(cr46893_state[(1)] = null);

return null;
}catch (e46922){var cr46893_exception = e46922;
(cr46893_state[(0)] = null);

(cr46893_state[(1)] = null);

throw cr46893_exception;
}});
var cr46893_block_4 = (function hyperfiddle$electric$throttle_$_cr46893_block_4(cr46893_state){
try{var cr46893_place_16 = missionary.core.sleep;
var cr46893_place_17 = dur;
var cr46893_place_18 = (function (){var G__46925 = cr46893_place_17;
var fexpr__46924 = cr46893_place_16;
return (fexpr__46924.cljs$core$IFn$_invoke$arity$1 ? fexpr__46924.cljs$core$IFn$_invoke$arity$1(G__46925) : fexpr__46924.call(null,G__46925));
})();
(cr46893_state[(0)] = cr46893_block_5);

return missionary.core.park(cr46893_place_18);
}catch (e46923){var cr46893_exception = e46923;
(cr46893_state[(0)] = null);

(cr46893_state[(2)] = null);

throw cr46893_exception;
}});
var cr46893_block_2 = (function hyperfiddle$electric$throttle_$_cr46893_block_2(cr46893_state){
try{var cr46893_place_12 = missionary.core.unpark();
var cr46893_place_13 = cr46893_place_12;
var cr46893_place_14 = null;
var G__46927 = cr46893_place_13;
switch (G__46927) {
case (0):
(cr46893_state[(0)] = cr46893_block_3);

(cr46893_state[(2)] = cr46893_place_14);

return cr46893_state;

break;
case (1):
(cr46893_state[(0)] = cr46893_block_4);

(cr46893_state[(1)] = null);

(cr46893_state[(2)] = cr46893_place_14);

return cr46893_state;

break;
default:
(cr46893_state[(0)] = cr46893_block_7);

(cr46893_state[(1)] = null);

(cr46893_state[(1)] = cr46893_place_12);

return cr46893_state;

}
}catch (e46926){var cr46893_exception = e46926;
(cr46893_state[(0)] = null);

(cr46893_state[(1)] = null);

throw cr46893_exception;
}});
var cr46893_block_1 = (function hyperfiddle$electric$throttle_$_cr46893_block_1(cr46893_state){
try{var cr46893_place_5 = missionary.core.unpark();
var cr46893_place_6 = (1);
var cr46893_place_7 = missionary.core.seed;
var cr46893_place_8 = cljs.core.range;
var cr46893_place_9 = (2);
var cr46893_place_10 = (function (){var G__46930 = cr46893_place_9;
var fexpr__46929 = cr46893_place_8;
return (fexpr__46929.cljs$core$IFn$_invoke$arity$1 ? fexpr__46929.cljs$core$IFn$_invoke$arity$1(G__46930) : fexpr__46929.call(null,G__46930));
})();
var cr46893_place_11 = (function (){var G__46932 = cr46893_place_10;
var fexpr__46931 = cr46893_place_7;
return (fexpr__46931.cljs$core$IFn$_invoke$arity$1 ? fexpr__46931.cljs$core$IFn$_invoke$arity$1(G__46932) : fexpr__46931.call(null,G__46932));
})();
(cr46893_state[(0)] = cr46893_block_2);

(cr46893_state[(1)] = cr46893_place_5);

return missionary.core.fork(cr46893_place_6,cr46893_place_11);
}catch (e46928){var cr46893_exception = e46928;
(cr46893_state[(0)] = null);

throw cr46893_exception;
}});
return cloroutine.impl.coroutine((function (){var G__46933 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((3));
(G__46933[(0)] = cr46893_block_0);

return G__46933;
})());
})(),missionary.core.ap_run);
});
/**
 * Bound to the HTTP request of the page in which the current Electric program is running.
 */
hyperfiddle.electric._STAR_http_request_STAR_ = null;

//# sourceMappingURL=hyperfiddle.electric.js.map
