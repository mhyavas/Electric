goog.provide('missionary.impl.Sample');

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
missionary.impl.Sample.Process = (function (combinator,notifier,terminator,args,inputs,busy,done,alive){
this.combinator = combinator;
this.notifier = notifier;
this.terminator = terminator;
this.args = args;
this.inputs = inputs;
this.busy = busy;
this.done = done;
this.alive = alive;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(missionary.impl.Sample.Process.prototype.call = (function (unused__13632__auto__){
var self__ = this;
var self__ = this;
var G__40094 = (arguments.length - (1));
switch (G__40094) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.Sample.Process.prototype.apply = (function (self__,args40093){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args40093)));
}));

(missionary.impl.Sample.Process.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
var fexpr__40104 = (self__.inputs[(self__.inputs.length - (1))]);
return (fexpr__40104.cljs$core$IFn$_invoke$arity$0 ? fexpr__40104.cljs$core$IFn$_invoke$arity$0() : fexpr__40104.call(null));
}));

(missionary.impl.Sample.Process.prototype.cljs$core$IDeref$_deref$arity$1 = (function (p){
var self__ = this;
var p__$1 = this;
return (missionary.impl.Sample.transfer.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.Sample.transfer.cljs$core$IFn$_invoke$arity$1(p__$1) : missionary.impl.Sample.transfer.call(null,p__$1));
}));

(missionary.impl.Sample.Process.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"combinator","combinator",-746639828,null),new cljs.core.Symbol(null,"notifier","notifier",1670358652,null),new cljs.core.Symbol(null,"terminator","terminator",-1051388676,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),cljs.core.with_meta(new cljs.core.Symbol(null,"busy","busy",1312244726,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"done","done",750687339,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"alive","alive",-1229505839,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null)], null))], null);
}));

(missionary.impl.Sample.Process.cljs$lang$type = true);

(missionary.impl.Sample.Process.cljs$lang$ctorStr = "missionary.impl.Sample/Process");

(missionary.impl.Sample.Process.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"missionary.impl.Sample/Process");
}));

/**
 * Positional factory function for missionary.impl.Sample/Process.
 */
missionary.impl.Sample.__GT_Process = (function missionary$impl$Sample$__GT_Process(combinator,notifier,terminator,args,inputs,busy,done,alive){
return (new missionary.impl.Sample.Process(combinator,notifier,terminator,args,inputs,busy,done,alive));
});

missionary.impl.Sample.ready = (function missionary$impl$Sample$ready(ps){
var args = ps.args;
var inputs = ps.inputs;
var sampled = (inputs.length - (1));
var cb = null;
while(true){
if(cljs.core.truth_((ps.busy = cljs.core.not(ps.busy)))){
if(cljs.core.truth_(ps.done)){
var n__5636__auto___40178 = sampled;
var i_40179 = (0);
while(true){
if((i_40179 < n__5636__auto___40178)){
var input_40180 = (inputs[i_40179]);
(input_40180.cljs$core$IFn$_invoke$arity$0 ? input_40180.cljs$core$IFn$_invoke$arity$0() : input_40180.call(null));

if(((args[i_40179]) === args)){
try{cljs.core.deref(input_40180);
}catch (e40113){var __40181 = e40113;
}} else {
(args[i_40179] = args);
}

var G__40182 = (i_40179 + (1));
i_40179 = G__40182;
continue;
} else {
}
break;
}

if(((ps.alive = (ps.alive - (1))) === (0))){
return ps.terminator;
} else {
return null;
}
} else {
if(((args[sampled]) === args)){
try{cljs.core.deref((inputs[sampled]));
}catch (e40114){var __40183 = e40114;
}
var G__40184 = cb;
cb = G__40184;
continue;
} else {
return ps.notifier;
}
}
} else {
return cb;
}
break;
}
});
missionary.impl.Sample.transfer = (function missionary$impl$Sample$transfer(ps){
var c = ps.combinator;
var args = ps.args;
var inputs = ps.inputs;
var sampled = (inputs.length - (1));
var sampler = (inputs[sampled]);
var x = (function (){try{try{if((c == null)){
throw (new Error("Undefined continuous flow."));
} else {
}

var n__5636__auto___40185 = sampled;
var i_40186 = (0);
while(true){
if((i_40186 < n__5636__auto___40185)){
if(((args[i_40186]) === args)){
var input_40187 = (inputs[i_40186]);
while(true){
(args[i_40186] = null);

var x_40188 = cljs.core.deref(input_40187);
if(((args[i_40186]) === args)){
continue;
} else {
(args[i_40186] = x_40188);
}
break;
}
} else {
}

var G__40189 = (i_40186 + (1));
i_40186 = G__40189;
continue;
} else {
}
break;
}
}catch (e40123){var e_40191 = e40123;
try{cljs.core.deref(sampler);
}catch (e40124){var __40192 = e40124;
}
throw e_40191;
}
(args[sampled] = cljs.core.deref(sampler));

return c.apply(null,args);
}catch (e40122){var e = e40122;
(ps.notifier = null);

(sampler.cljs$core$IFn$_invoke$arity$0 ? sampler.cljs$core$IFn$_invoke$arity$0() : sampler.call(null));

(args[sampled] = args);

return e;
}})();
var temp__5808__auto___40194 = missionary.impl.Sample.ready(ps);
if((temp__5808__auto___40194 == null)){
} else {
var cb_40195 = temp__5808__auto___40194;
(cb_40195.cljs$core$IFn$_invoke$arity$0 ? cb_40195.cljs$core$IFn$_invoke$arity$0() : cb_40195.call(null));
}

if((ps.notifier == null)){
throw x;
} else {
return x;
}
});
missionary.impl.Sample.dirty = (function missionary$impl$Sample$dirty(p,i){
var args = p.args;
if(((args[i]) === args)){
try{return cljs.core.deref((p.inputs[i]));
}catch (e40166){var _ = e40166;
return null;
}} else {
return (args[i] = args);
}
});
missionary.impl.Sample.run = (function missionary$impl$Sample$run(c,f,fs,n,t){
var it = cljs.core.iter(fs);
var arity = (cljs.core.count(fs) + (1));
var args = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(arity);
var inputs = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(arity);
var ps = missionary.impl.Sample.__GT_Process(c,n,t,args,inputs,false,false,arity);
var done = (function (){
if(((ps.alive = (ps.alive - (1))) === (0))){
var fexpr__40171 = ps.terminator;
return (fexpr__40171.cljs$core$IFn$_invoke$arity$0 ? fexpr__40171.cljs$core$IFn$_invoke$arity$0() : fexpr__40171.call(null));
} else {
return null;
}
});
var index_40197 = (0);
var flow_40198 = f;
while(true){
if(cljs.core.truth_(it.hasNext())){
(inputs[index_40197] = (function (){var G__40172 = ((function (index_40197,flow_40198,it,arity,args,inputs,ps,done){
return (function (){
return missionary.impl.Sample.dirty(ps,index_40197);
});})(index_40197,flow_40198,it,arity,args,inputs,ps,done))
;
var G__40173 = done;
return (flow_40198.cljs$core$IFn$_invoke$arity$2 ? flow_40198.cljs$core$IFn$_invoke$arity$2(G__40172,G__40173) : flow_40198.call(null,G__40172,G__40173));
})());

if(((args[index_40197]) == null)){
(ps.combinator = null);
} else {
}

var G__40202 = (index_40197 + (1));
var G__40203 = it.next();
index_40197 = G__40202;
flow_40198 = G__40203;
continue;
} else {
(inputs[index_40197] = (function (){var G__40174 = ((function (index_40197,flow_40198,it,arity,args,inputs,ps,done){
return (function (){
var temp__5808__auto__ = missionary.impl.Sample.ready(ps);
if((temp__5808__auto__ == null)){
return null;
} else {
var cb = temp__5808__auto__;
return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
}
});})(index_40197,flow_40198,it,arity,args,inputs,ps,done))
;
var G__40175 = ((function (index_40197,flow_40198,G__40174,it,arity,args,inputs,ps,done){
return (function (){
(ps.done = true);

var temp__5808__auto__ = missionary.impl.Sample.ready(ps);
if((temp__5808__auto__ == null)){
return null;
} else {
var cb = temp__5808__auto__;
return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
}
});})(index_40197,flow_40198,G__40174,it,arity,args,inputs,ps,done))
;
return (flow_40198.cljs$core$IFn$_invoke$arity$2 ? flow_40198.cljs$core$IFn$_invoke$arity$2(G__40174,G__40175) : flow_40198.call(null,G__40174,G__40175));
})());
}
break;
}

return ps;
});

//# sourceMappingURL=missionary.impl.Sample.js.map
