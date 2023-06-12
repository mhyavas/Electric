goog.provide('hyperfiddle.electric.impl.gather');
hyperfiddle.electric.impl.gather.done_BANG_ = (function hyperfiddle$electric$impl$gather$done_BANG_(main,terminator){
if(((main[((6) | (0))] = ((main[((6) | (0))]) - (1))) === (0))){
return (terminator.cljs$core$IFn$_invoke$arity$0 ? terminator.cljs$core$IFn$_invoke$arity$0() : terminator.call(null));
} else {
return null;
}
});
hyperfiddle.electric.impl.gather.cancel_BANG_ = (function hyperfiddle$electric$impl$gather$cancel_BANG_(main){
var temp__5808__auto__ = (main[((2) | (0))]);
if((temp__5808__auto__ == null)){
return null;
} else {
var item = temp__5808__auto__;
var item_41013__$1 = item;
while(true){
if((item_41013__$1 === main)){
} else {
var n_41014 = (item_41013__$1[((2) | (0))]);
(item_41013__$1[((1) | (0))] = null);

(item_41013__$1[((2) | (0))] = null);

var fexpr__40955_41015 = (item_41013__$1[((0) | (0))]);
(fexpr__40955_41015.cljs$core$IFn$_invoke$arity$0 ? fexpr__40955_41015.cljs$core$IFn$_invoke$arity$0() : fexpr__40955_41015.call(null));

var G__41016 = n_41014;
item_41013__$1 = G__41016;
continue;
}
break;
}

(main[((1) | (0))] = null);

(main[((2) | (0))] = null);

var fexpr__40957 = (main[((0) | (0))]);
return (fexpr__40957.cljs$core$IFn$_invoke$arity$0 ? fexpr__40957.cljs$core$IFn$_invoke$arity$0() : fexpr__40957.call(null));
}
});
hyperfiddle.electric.impl.gather.flush_BANG_ = (function hyperfiddle$electric$impl$gather$flush_BANG_(item){
var item__$1 = item;
while(true){
if((!((item__$1 == null)))){
var next = (function (){var a__40837__auto__ = item__$1;
var i__40838__auto__ = ((3) | (0));
var x__40839__auto__ = (a__40837__auto__[i__40838__auto__]);
(a__40837__auto__[i__40838__auto__] = null);

return x__40839__auto__;
})();
try{cljs.core.deref((item__$1[((0) | (0))]));
}catch (e40960){var __41017 = e40960;
}
var G__41018 = next;
item__$1 = G__41018;
continue;
} else {
return null;
}
break;
}
});
hyperfiddle.electric.impl.gather.fail_BANG_ = (function hyperfiddle$electric$impl$gather$fail_BANG_(main,item,error){
hyperfiddle.electric.impl.gather.cancel_BANG_(main);

hyperfiddle.electric.impl.gather.flush_BANG_((function (){var a__40837__auto__ = main;
var i__40838__auto__ = ((3) | (0));
var x__40839__auto__ = (a__40837__auto__[i__40838__auto__]);
(a__40837__auto__[i__40838__auto__] = null);

return x__40839__auto__;
})());

hyperfiddle.electric.impl.gather.flush_BANG_(item);

throw error;
});
hyperfiddle.electric.impl.gather.sample_BANG_ = (function hyperfiddle$electric$impl$gather$sample_BANG_(main,rf,notifier){
var idle = (function (){var a__40837__auto__ = main;
var i__40838__auto__ = ((5) | (0));
var x__40839__auto__ = (a__40837__auto__[i__40838__auto__]);
(a__40837__auto__[i__40838__auto__] = false);

return x__40839__auto__;
})();
var head = (function (){var a__40837__auto__ = main;
var i__40838__auto__ = ((3) | (0));
var x__40839__auto__ = (a__40837__auto__[i__40838__auto__]);
(a__40837__auto__[i__40838__auto__] = null);

return x__40839__auto__;
})();
var item = (function (){var a__40837__auto__ = head;
var i__40838__auto__ = ((3) | (0));
var x__40839__auto__ = (a__40837__auto__[i__40838__auto__]);
(a__40837__auto__[i__40838__auto__] = null);

return x__40839__auto__;
})();
var r = (function (){try{return cljs.core.deref((head[((0) | (0))]));
}catch (e40974){var e = e40974;
return hyperfiddle.electric.impl.gather.fail_BANG_(main,item,e);
}})();
while(true){
if((item == null)){
if(cljs.core.truth_((main[((5) | (0))]))){
if(idle){
(notifier.cljs$core$IFn$_invoke$arity$0 ? notifier.cljs$core$IFn$_invoke$arity$0() : notifier.call(null));
} else {
}
} else {
(main[((5) | (0))] = idle);
}

return r;
} else {
var next = (function (){var a__40837__auto__ = item;
var i__40838__auto__ = ((3) | (0));
var x__40839__auto__ = (a__40837__auto__[i__40838__auto__]);
(a__40837__auto__[i__40838__auto__] = null);

return x__40839__auto__;
})();
var G__41020 = next;
var G__41021 = (function (){try{var G__40976 = r;
var G__40977 = cljs.core.deref((item[((0) | (0))]));
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__40976,G__40977) : rf.call(null,G__40976,G__40977));
}catch (e40975){var e = e40975;
return hyperfiddle.electric.impl.gather.fail_BANG_(main,next,e);
}})();
item = G__41020;
r = G__41021;
continue;
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
hyperfiddle.electric.impl.gather.It = (function (main,rf,notifier,terminator){
this.main = main;
this.rf = rf;
this.notifier = notifier;
this.terminator = terminator;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.gather.It.prototype.call = (function (unused__13632__auto__){
var self__ = this;
var self__ = this;
var G__40981 = (arguments.length - (1));
switch (G__40981) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.gather.It.prototype.apply = (function (self__,args40980){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args40980)));
}));

(hyperfiddle.electric.impl.gather.It.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var it = this;
return hyperfiddle.electric.impl.gather.cancel_BANG_(self__.main);
}));

(hyperfiddle.electric.impl.gather.It.prototype.cljs$core$IDeref$_deref$arity$1 = (function (it){
var self__ = this;
var it__$1 = this;
return hyperfiddle.electric.impl.gather.sample_BANG_(self__.main,self__.rf,self__.notifier);
}));

(hyperfiddle.electric.impl.gather.It.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"main","main",-477271134,null),new cljs.core.Symbol(null,"rf","rf",-651557526,null),new cljs.core.Symbol(null,"notifier","notifier",1670358652,null),new cljs.core.Symbol(null,"terminator","terminator",-1051388676,null)], null);
}));

(hyperfiddle.electric.impl.gather.It.cljs$lang$type = true);

(hyperfiddle.electric.impl.gather.It.cljs$lang$ctorStr = "hyperfiddle.electric.impl.gather/It");

(hyperfiddle.electric.impl.gather.It.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.gather/It");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.gather/It.
 */
hyperfiddle.electric.impl.gather.__GT_It = (function hyperfiddle$electric$impl$gather$__GT_It(main,rf,notifier,terminator){
return (new hyperfiddle.electric.impl.gather.It(main,rf,notifier,terminator));
});

hyperfiddle.electric.impl.gather.transfer_BANG_ = (function hyperfiddle$electric$impl$gather$transfer_BANG_(it){
var main = it.main;
while(true){
if(cljs.core.truth_((main[((4) | (0))] = cljs.core.not((main[((4) | (0))]))))){
var temp__5806__auto___41027 = (main[((1) | (0))]);
if((temp__5806__auto___41027 == null)){
try{cljs.core.deref((main[((0) | (0))]));
}catch (e40992){var __41028 = e40992;
}} else {
var prev_41029 = temp__5806__auto___41027;
var item_41030 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(((4) | (0)));
var idle_41031 = (function (){var a__40837__auto__ = main;
var i__40838__auto__ = ((5) | (0));
var x__40839__auto__ = (a__40837__auto__[i__40838__auto__]);
(a__40837__auto__[i__40838__auto__] = false);

return x__40839__auto__;
})();
(main[((6) | (0))] = ((main[((6) | (0))]) + (1)));

(item_41030[((1) | (0))] = prev_41029);

(prev_41029[((2) | (0))] = item_41030);

(main[((1) | (0))] = item_41030);

(item_41030[((2) | (0))] = main);

var n_41032 = ((function (item_41030,idle_41031,prev_41029,temp__5806__auto___41027,main){
return (function (){
if(((item_41030[((1) | (0))]) == null)){
try{return cljs.core.deref((item_41030[((0) | (0))]));
}catch (e40996){var _ = e40996;
return null;
}} else {
var temp__5806__auto____$1 = (function (){var a__40837__auto__ = main;
var i__40838__auto__ = ((3) | (0));
var x__40839__auto__ = (a__40837__auto__[i__40838__auto__]);
(a__40837__auto__[i__40838__auto__] = item_41030);

return x__40839__auto__;
})();
if((temp__5806__auto____$1 == null)){
if(cljs.core.truth_((main[((5) | (0))]))){
var fexpr__40997 = it.notifier;
return (fexpr__40997.cljs$core$IFn$_invoke$arity$0 ? fexpr__40997.cljs$core$IFn$_invoke$arity$0() : fexpr__40997.call(null));
} else {
return (main[((5) | (0))] = true);
}
} else {
var curr = temp__5806__auto____$1;
return (item_41030[((3) | (0))] = curr);
}
}
});})(item_41030,idle_41031,prev_41029,temp__5806__auto___41027,main))
;
var t_41033 = ((function (n_41032,item_41030,idle_41031,prev_41029,temp__5806__auto___41027,main){
return (function (){
var temp__5808__auto___41034 = (item_41030[((1) | (0))]);
if((temp__5808__auto___41034 == null)){
} else {
var prev_41035__$1 = temp__5808__auto___41034;
var next_41036 = (item_41030[((2) | (0))]);
(next_41036[((1) | (0))] = prev_41035__$1);

(prev_41035__$1[((2) | (0))] = next_41036);

(item_41030[((1) | (0))] = null);

(item_41030[((2) | (0))] = null);
}

return hyperfiddle.electric.impl.gather.done_BANG_(main,it.terminator);
});})(n_41032,item_41030,idle_41031,prev_41029,temp__5806__auto___41027,main))
;
(item_41030[((0) | (0))] = (function (){try{var fexpr__41000 = cljs.core.deref((main[((0) | (0))]));
return (fexpr__41000.cljs$core$IFn$_invoke$arity$2 ? fexpr__41000.cljs$core$IFn$_invoke$arity$2(n_41032,t_41033) : fexpr__41000.call(null,n_41032,t_41033));
}catch (e40999){var e = e40999;
return hyperfiddle.electric.impl.failer.run(e,n_41032,t_41033);
}})());

if(cljs.core.truth_((main[((5) | (0))]))){
if(idle_41031){
var fexpr__41001_41037 = it.notifier;
(fexpr__41001_41037.cljs$core$IFn$_invoke$arity$0 ? fexpr__41001_41037.cljs$core$IFn$_invoke$arity$0() : fexpr__41001_41037.call(null));
} else {
}
} else {
(main[((5) | (0))] = idle_41031);
}
}

continue;
} else {
return null;
}
break;
}
});
/**
 * 
 * Given a commutative function and a flow of flows, returns a flow concurrently running the flow with flows produced by
 * this flow and producing values produced by nested flows, reduced by the function if more than one can be transferred
 * simultaneously.
 */
hyperfiddle.electric.impl.gather.gather = (function hyperfiddle$electric$impl$gather$gather(rf,_GT__GT_x){
return (function (n,t){
var main = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(((7) | (0)));
var it = hyperfiddle.electric.impl.gather.__GT_It(main,rf,n,t);
var G__41003_41038 = main;
(G__41003_41038[((1) | (0))] = main);

(G__41003_41038[((2) | (0))] = main);

(G__41003_41038[((4) | (0))] = true);

(G__41003_41038[((5) | (0))] = true);

(G__41003_41038[((6) | (0))] = (1));


(main[((0) | (0))] = (function (){var G__41004 = (function (){
return hyperfiddle.electric.impl.gather.transfer_BANG_(it);
});
var G__41005 = (function (){
return hyperfiddle.electric.impl.gather.done_BANG_(main,t);
});
return (_GT__GT_x.cljs$core$IFn$_invoke$arity$2 ? _GT__GT_x.cljs$core$IFn$_invoke$arity$2(G__41004,G__41005) : _GT__GT_x.call(null,G__41004,G__41005));
})());

hyperfiddle.electric.impl.gather.transfer_BANG_(it);

return it;
});
});

//# sourceMappingURL=hyperfiddle.electric.impl.gather.js.map
