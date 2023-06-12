goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__33012 = arguments.length;
switch (G__33012) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33017 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33017 = (function (f,blockable,meta33018){
this.f = f;
this.blockable = blockable;
this.meta33018 = meta33018;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33017.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33019,meta33018__$1){
var self__ = this;
var _33019__$1 = this;
return (new cljs.core.async.t_cljs$core$async33017(self__.f,self__.blockable,meta33018__$1));
}));

(cljs.core.async.t_cljs$core$async33017.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33019){
var self__ = this;
var _33019__$1 = this;
return self__.meta33018;
}));

(cljs.core.async.t_cljs$core$async33017.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33017.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33017.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async33017.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async33017.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33018","meta33018",-1043711785,null)], null);
}));

(cljs.core.async.t_cljs$core$async33017.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33017.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33017");

(cljs.core.async.t_cljs$core$async33017.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33017");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33017.
 */
cljs.core.async.__GT_t_cljs$core$async33017 = (function cljs$core$async$__GT_t_cljs$core$async33017(f__$1,blockable__$1,meta33018){
return (new cljs.core.async.t_cljs$core$async33017(f__$1,blockable__$1,meta33018));
});

}

return (new cljs.core.async.t_cljs$core$async33017(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__33024 = arguments.length;
switch (G__33024) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__33030 = arguments.length;
switch (G__33030) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__33036 = arguments.length;
switch (G__33036) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_35272 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35272) : fn1.call(null,val_35272));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35272) : fn1.call(null,val_35272));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__33053 = arguments.length;
switch (G__33053) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___35276 = n;
var x_35277 = (0);
while(true){
if((x_35277 < n__5636__auto___35276)){
(a[x_35277] = x_35277);

var G__35278 = (x_35277 + (1));
x_35277 = G__35278;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33062 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33062 = (function (flag,meta33063){
this.flag = flag;
this.meta33063 = meta33063;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33062.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33064,meta33063__$1){
var self__ = this;
var _33064__$1 = this;
return (new cljs.core.async.t_cljs$core$async33062(self__.flag,meta33063__$1));
}));

(cljs.core.async.t_cljs$core$async33062.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33064){
var self__ = this;
var _33064__$1 = this;
return self__.meta33063;
}));

(cljs.core.async.t_cljs$core$async33062.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33062.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33062.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33062.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async33062.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33063","meta33063",-677460145,null)], null);
}));

(cljs.core.async.t_cljs$core$async33062.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33062.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33062");

(cljs.core.async.t_cljs$core$async33062.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33062");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33062.
 */
cljs.core.async.__GT_t_cljs$core$async33062 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33062(flag__$1,meta33063){
return (new cljs.core.async.t_cljs$core$async33062(flag__$1,meta33063));
});

}

return (new cljs.core.async.t_cljs$core$async33062(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33068 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33068 = (function (flag,cb,meta33069){
this.flag = flag;
this.cb = cb;
this.meta33069 = meta33069;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33068.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33070,meta33069__$1){
var self__ = this;
var _33070__$1 = this;
return (new cljs.core.async.t_cljs$core$async33068(self__.flag,self__.cb,meta33069__$1));
}));

(cljs.core.async.t_cljs$core$async33068.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33070){
var self__ = this;
var _33070__$1 = this;
return self__.meta33069;
}));

(cljs.core.async.t_cljs$core$async33068.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33068.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33068.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33068.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async33068.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33069","meta33069",-574687806,null)], null);
}));

(cljs.core.async.t_cljs$core$async33068.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33068.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33068");

(cljs.core.async.t_cljs$core$async33068.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33068");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33068.
 */
cljs.core.async.__GT_t_cljs$core$async33068 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33068(flag__$1,cb__$1,meta33069){
return (new cljs.core.async.t_cljs$core$async33068(flag__$1,cb__$1,meta33069));
});

}

return (new cljs.core.async.t_cljs$core$async33068(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33071_SHARP_){
var G__33073 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33071_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33073) : fret.call(null,G__33073));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33072_SHARP_){
var G__33074 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33072_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33074) : fret.call(null,G__33074));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__35281 = (i + (1));
i = G__35281;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___35285 = arguments.length;
var i__5770__auto___35286 = (0);
while(true){
if((i__5770__auto___35286 < len__5769__auto___35285)){
args__5775__auto__.push((arguments[i__5770__auto___35286]));

var G__35287 = (i__5770__auto___35286 + (1));
i__5770__auto___35286 = G__35287;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33078){
var map__33079 = p__33078;
var map__33079__$1 = cljs.core.__destructure_map(map__33079);
var opts = map__33079__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33076){
var G__33077 = cljs.core.first(seq33076);
var seq33076__$1 = cljs.core.next(seq33076);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33077,seq33076__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__33086 = arguments.length;
switch (G__33086) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__32926__auto___35292 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32927__auto__ = (function (){var switch__32645__auto__ = (function (state_33148){
var state_val_33151 = (state_33148[(1)]);
if((state_val_33151 === (7))){
var inst_33122 = (state_33148[(2)]);
var state_33148__$1 = state_33148;
var statearr_33160_35293 = state_33148__$1;
(statearr_33160_35293[(2)] = inst_33122);

(statearr_33160_35293[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33151 === (1))){
var state_33148__$1 = state_33148;
var statearr_33163_35294 = state_33148__$1;
(statearr_33163_35294[(2)] = null);

(statearr_33163_35294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33151 === (4))){
var inst_33105 = (state_33148[(7)]);
var inst_33105__$1 = (state_33148[(2)]);
var inst_33106 = (inst_33105__$1 == null);
var state_33148__$1 = (function (){var statearr_33166 = state_33148;
(statearr_33166[(7)] = inst_33105__$1);

return statearr_33166;
})();
if(cljs.core.truth_(inst_33106)){
var statearr_33167_35295 = state_33148__$1;
(statearr_33167_35295[(1)] = (5));

} else {
var statearr_33168_35296 = state_33148__$1;
(statearr_33168_35296[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33151 === (13))){
var state_33148__$1 = state_33148;
var statearr_33169_35297 = state_33148__$1;
(statearr_33169_35297[(2)] = null);

(statearr_33169_35297[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33151 === (6))){
var inst_33105 = (state_33148[(7)]);
var state_33148__$1 = state_33148;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33148__$1,(11),to,inst_33105);
} else {
if((state_val_33151 === (3))){
var inst_33124 = (state_33148[(2)]);
var state_33148__$1 = state_33148;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33148__$1,inst_33124);
} else {
if((state_val_33151 === (12))){
var state_33148__$1 = state_33148;
var statearr_33184_35300 = state_33148__$1;
(statearr_33184_35300[(2)] = null);

(statearr_33184_35300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33151 === (2))){
var state_33148__$1 = state_33148;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33148__$1,(4),from);
} else {
if((state_val_33151 === (11))){
var inst_33115 = (state_33148[(2)]);
var state_33148__$1 = state_33148;
if(cljs.core.truth_(inst_33115)){
var statearr_33191_35307 = state_33148__$1;
(statearr_33191_35307[(1)] = (12));

} else {
var statearr_33192_35311 = state_33148__$1;
(statearr_33192_35311[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33151 === (9))){
var state_33148__$1 = state_33148;
var statearr_33198_35312 = state_33148__$1;
(statearr_33198_35312[(2)] = null);

(statearr_33198_35312[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33151 === (5))){
var state_33148__$1 = state_33148;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33199_35313 = state_33148__$1;
(statearr_33199_35313[(1)] = (8));

} else {
var statearr_33200_35314 = state_33148__$1;
(statearr_33200_35314[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33151 === (14))){
var inst_33120 = (state_33148[(2)]);
var state_33148__$1 = state_33148;
var statearr_33201_35315 = state_33148__$1;
(statearr_33201_35315[(2)] = inst_33120);

(statearr_33201_35315[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33151 === (10))){
var inst_33112 = (state_33148[(2)]);
var state_33148__$1 = state_33148;
var statearr_33202_35318 = state_33148__$1;
(statearr_33202_35318[(2)] = inst_33112);

(statearr_33202_35318[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33151 === (8))){
var inst_33109 = cljs.core.async.close_BANG_(to);
var state_33148__$1 = state_33148;
var statearr_33210_35319 = state_33148__$1;
(statearr_33210_35319[(2)] = inst_33109);

(statearr_33210_35319[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32646__auto__ = null;
var cljs$core$async$state_machine__32646__auto____0 = (function (){
var statearr_33233 = [null,null,null,null,null,null,null,null];
(statearr_33233[(0)] = cljs$core$async$state_machine__32646__auto__);

(statearr_33233[(1)] = (1));

return statearr_33233;
});
var cljs$core$async$state_machine__32646__auto____1 = (function (state_33148){
while(true){
var ret_value__32647__auto__ = (function (){try{while(true){
var result__32648__auto__ = switch__32645__auto__(state_33148);
if(cljs.core.keyword_identical_QMARK_(result__32648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32648__auto__;
}
break;
}
}catch (e33234){var ex__32649__auto__ = e33234;
var statearr_33239_35320 = state_33148;
(statearr_33239_35320[(2)] = ex__32649__auto__);


if(cljs.core.seq((state_33148[(4)]))){
var statearr_33240_35321 = state_33148;
(statearr_33240_35321[(1)] = cljs.core.first((state_33148[(4)])));

} else {
throw ex__32649__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35322 = state_33148;
state_33148 = G__35322;
continue;
} else {
return ret_value__32647__auto__;
}
break;
}
});
cljs$core$async$state_machine__32646__auto__ = function(state_33148){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32646__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32646__auto____1.call(this,state_33148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32646__auto____0;
cljs$core$async$state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32646__auto____1;
return cljs$core$async$state_machine__32646__auto__;
})()
})();
var state__32928__auto__ = (function (){var statearr_33258 = f__32927__auto__();
(statearr_33258[(6)] = c__32926__auto___35292);

return statearr_33258;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32928__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__33262){
var vec__33264 = p__33262;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33264,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33264,(1),null);
var job = vec__33264;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__32926__auto___35324 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32927__auto__ = (function (){var switch__32645__auto__ = (function (state_33273){
var state_val_33274 = (state_33273[(1)]);
if((state_val_33274 === (1))){
var state_33273__$1 = state_33273;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33273__$1,(2),res,v);
} else {
if((state_val_33274 === (2))){
var inst_33270 = (state_33273[(2)]);
var inst_33271 = cljs.core.async.close_BANG_(res);
var state_33273__$1 = (function (){var statearr_33275 = state_33273;
(statearr_33275[(7)] = inst_33270);

return statearr_33275;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33273__$1,inst_33271);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32646__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32646__auto____0 = (function (){
var statearr_33280 = [null,null,null,null,null,null,null,null];
(statearr_33280[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32646__auto__);

(statearr_33280[(1)] = (1));

return statearr_33280;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32646__auto____1 = (function (state_33273){
while(true){
var ret_value__32647__auto__ = (function (){try{while(true){
var result__32648__auto__ = switch__32645__auto__(state_33273);
if(cljs.core.keyword_identical_QMARK_(result__32648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32648__auto__;
}
break;
}
}catch (e33281){var ex__32649__auto__ = e33281;
var statearr_33282_35327 = state_33273;
(statearr_33282_35327[(2)] = ex__32649__auto__);


if(cljs.core.seq((state_33273[(4)]))){
var statearr_33287_35328 = state_33273;
(statearr_33287_35328[(1)] = cljs.core.first((state_33273[(4)])));

} else {
throw ex__32649__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35329 = state_33273;
state_33273 = G__35329;
continue;
} else {
return ret_value__32647__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32646__auto__ = function(state_33273){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32646__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32646__auto____1.call(this,state_33273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32646__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32646__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32646__auto__;
})()
})();
var state__32928__auto__ = (function (){var statearr_33296 = f__32927__auto__();
(statearr_33296[(6)] = c__32926__auto___35324);

return statearr_33296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32928__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__33303){
var vec__33306 = p__33303;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33306,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33306,(1),null);
var job = vec__33306;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___35330 = n;
var __35331 = (0);
while(true){
if((__35331 < n__5636__auto___35330)){
var G__33310_35332 = type;
var G__33310_35333__$1 = (((G__33310_35332 instanceof cljs.core.Keyword))?G__33310_35332.fqn:null);
switch (G__33310_35333__$1) {
case "compute":
var c__32926__auto___35335 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35331,c__32926__auto___35335,G__33310_35332,G__33310_35333__$1,n__5636__auto___35330,jobs,results,process__$1,async){
return (function (){
var f__32927__auto__ = (function (){var switch__32645__auto__ = ((function (__35331,c__32926__auto___35335,G__33310_35332,G__33310_35333__$1,n__5636__auto___35330,jobs,results,process__$1,async){
return (function (state_33323){
var state_val_33324 = (state_33323[(1)]);
if((state_val_33324 === (1))){
var state_33323__$1 = state_33323;
var statearr_33326_35336 = state_33323__$1;
(statearr_33326_35336[(2)] = null);

(statearr_33326_35336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (2))){
var state_33323__$1 = state_33323;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33323__$1,(4),jobs);
} else {
if((state_val_33324 === (3))){
var inst_33321 = (state_33323[(2)]);
var state_33323__$1 = state_33323;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33323__$1,inst_33321);
} else {
if((state_val_33324 === (4))){
var inst_33313 = (state_33323[(2)]);
var inst_33314 = process__$1(inst_33313);
var state_33323__$1 = state_33323;
if(cljs.core.truth_(inst_33314)){
var statearr_33328_35337 = state_33323__$1;
(statearr_33328_35337[(1)] = (5));

} else {
var statearr_33330_35338 = state_33323__$1;
(statearr_33330_35338[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (5))){
var state_33323__$1 = state_33323;
var statearr_33332_35339 = state_33323__$1;
(statearr_33332_35339[(2)] = null);

(statearr_33332_35339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (6))){
var state_33323__$1 = state_33323;
var statearr_33334_35340 = state_33323__$1;
(statearr_33334_35340[(2)] = null);

(statearr_33334_35340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33324 === (7))){
var inst_33319 = (state_33323[(2)]);
var state_33323__$1 = state_33323;
var statearr_33335_35341 = state_33323__$1;
(statearr_33335_35341[(2)] = inst_33319);

(statearr_33335_35341[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__35331,c__32926__auto___35335,G__33310_35332,G__33310_35333__$1,n__5636__auto___35330,jobs,results,process__$1,async))
;
return ((function (__35331,switch__32645__auto__,c__32926__auto___35335,G__33310_35332,G__33310_35333__$1,n__5636__auto___35330,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32646__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32646__auto____0 = (function (){
var statearr_33336 = [null,null,null,null,null,null,null];
(statearr_33336[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32646__auto__);

(statearr_33336[(1)] = (1));

return statearr_33336;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32646__auto____1 = (function (state_33323){
while(true){
var ret_value__32647__auto__ = (function (){try{while(true){
var result__32648__auto__ = switch__32645__auto__(state_33323);
if(cljs.core.keyword_identical_QMARK_(result__32648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32648__auto__;
}
break;
}
}catch (e33338){var ex__32649__auto__ = e33338;
var statearr_33339_35342 = state_33323;
(statearr_33339_35342[(2)] = ex__32649__auto__);


if(cljs.core.seq((state_33323[(4)]))){
var statearr_33340_35343 = state_33323;
(statearr_33340_35343[(1)] = cljs.core.first((state_33323[(4)])));

} else {
throw ex__32649__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35346 = state_33323;
state_33323 = G__35346;
continue;
} else {
return ret_value__32647__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32646__auto__ = function(state_33323){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32646__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32646__auto____1.call(this,state_33323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32646__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32646__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32646__auto__;
})()
;})(__35331,switch__32645__auto__,c__32926__auto___35335,G__33310_35332,G__33310_35333__$1,n__5636__auto___35330,jobs,results,process__$1,async))
})();
var state__32928__auto__ = (function (){var statearr_33341 = f__32927__auto__();
(statearr_33341[(6)] = c__32926__auto___35335);

return statearr_33341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32928__auto__);
});})(__35331,c__32926__auto___35335,G__33310_35332,G__33310_35333__$1,n__5636__auto___35330,jobs,results,process__$1,async))
);


break;
case "async":
var c__32926__auto___35347 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35331,c__32926__auto___35347,G__33310_35332,G__33310_35333__$1,n__5636__auto___35330,jobs,results,process__$1,async){
return (function (){
var f__32927__auto__ = (function (){var switch__32645__auto__ = ((function (__35331,c__32926__auto___35347,G__33310_35332,G__33310_35333__$1,n__5636__auto___35330,jobs,results,process__$1,async){
return (function (state_33355){
var state_val_33356 = (state_33355[(1)]);
if((state_val_33356 === (1))){
var state_33355__$1 = state_33355;
var statearr_33361_35349 = state_33355__$1;
(statearr_33361_35349[(2)] = null);

(statearr_33361_35349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33356 === (2))){
var state_33355__$1 = state_33355;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33355__$1,(4),jobs);
} else {
if((state_val_33356 === (3))){
var inst_33353 = (state_33355[(2)]);
var state_33355__$1 = state_33355;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33355__$1,inst_33353);
} else {
if((state_val_33356 === (4))){
var inst_33345 = (state_33355[(2)]);
var inst_33346 = async(inst_33345);
var state_33355__$1 = state_33355;
if(cljs.core.truth_(inst_33346)){
var statearr_33374_35351 = state_33355__$1;
(statearr_33374_35351[(1)] = (5));

} else {
var statearr_33375_35352 = state_33355__$1;
(statearr_33375_35352[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33356 === (5))){
var state_33355__$1 = state_33355;
var statearr_33384_35353 = state_33355__$1;
(statearr_33384_35353[(2)] = null);

(statearr_33384_35353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33356 === (6))){
var state_33355__$1 = state_33355;
var statearr_33385_35354 = state_33355__$1;
(statearr_33385_35354[(2)] = null);

(statearr_33385_35354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33356 === (7))){
var inst_33351 = (state_33355[(2)]);
var state_33355__$1 = state_33355;
var statearr_33386_35356 = state_33355__$1;
(statearr_33386_35356[(2)] = inst_33351);

(statearr_33386_35356[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__35331,c__32926__auto___35347,G__33310_35332,G__33310_35333__$1,n__5636__auto___35330,jobs,results,process__$1,async))
;
return ((function (__35331,switch__32645__auto__,c__32926__auto___35347,G__33310_35332,G__33310_35333__$1,n__5636__auto___35330,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32646__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32646__auto____0 = (function (){
var statearr_33388 = [null,null,null,null,null,null,null];
(statearr_33388[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32646__auto__);

(statearr_33388[(1)] = (1));

return statearr_33388;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32646__auto____1 = (function (state_33355){
while(true){
var ret_value__32647__auto__ = (function (){try{while(true){
var result__32648__auto__ = switch__32645__auto__(state_33355);
if(cljs.core.keyword_identical_QMARK_(result__32648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32648__auto__;
}
break;
}
}catch (e33389){var ex__32649__auto__ = e33389;
var statearr_33390_35358 = state_33355;
(statearr_33390_35358[(2)] = ex__32649__auto__);


if(cljs.core.seq((state_33355[(4)]))){
var statearr_33391_35359 = state_33355;
(statearr_33391_35359[(1)] = cljs.core.first((state_33355[(4)])));

} else {
throw ex__32649__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35360 = state_33355;
state_33355 = G__35360;
continue;
} else {
return ret_value__32647__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32646__auto__ = function(state_33355){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32646__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32646__auto____1.call(this,state_33355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32646__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32646__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32646__auto__;
})()
;})(__35331,switch__32645__auto__,c__32926__auto___35347,G__33310_35332,G__33310_35333__$1,n__5636__auto___35330,jobs,results,process__$1,async))
})();
var state__32928__auto__ = (function (){var statearr_33392 = f__32927__auto__();
(statearr_33392[(6)] = c__32926__auto___35347);

return statearr_33392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32928__auto__);
});})(__35331,c__32926__auto___35347,G__33310_35332,G__33310_35333__$1,n__5636__auto___35330,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33310_35333__$1)].join('')));

}

var G__35361 = (__35331 + (1));
__35331 = G__35361;
continue;
} else {
}
break;
}

var c__32926__auto___35362 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32927__auto__ = (function (){var switch__32645__auto__ = (function (state_33415){
var state_val_33416 = (state_33415[(1)]);
if((state_val_33416 === (7))){
var inst_33411 = (state_33415[(2)]);
var state_33415__$1 = state_33415;
var statearr_33417_35363 = state_33415__$1;
(statearr_33417_35363[(2)] = inst_33411);

(statearr_33417_35363[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (1))){
var state_33415__$1 = state_33415;
var statearr_33418_35364 = state_33415__$1;
(statearr_33418_35364[(2)] = null);

(statearr_33418_35364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (4))){
var inst_33395 = (state_33415[(7)]);
var inst_33395__$1 = (state_33415[(2)]);
var inst_33396 = (inst_33395__$1 == null);
var state_33415__$1 = (function (){var statearr_33420 = state_33415;
(statearr_33420[(7)] = inst_33395__$1);

return statearr_33420;
})();
if(cljs.core.truth_(inst_33396)){
var statearr_33421_35365 = state_33415__$1;
(statearr_33421_35365[(1)] = (5));

} else {
var statearr_33422_35366 = state_33415__$1;
(statearr_33422_35366[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (6))){
var inst_33400 = (state_33415[(8)]);
var inst_33395 = (state_33415[(7)]);
var inst_33400__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_33402 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33403 = [inst_33395,inst_33400__$1];
var inst_33404 = (new cljs.core.PersistentVector(null,2,(5),inst_33402,inst_33403,null));
var state_33415__$1 = (function (){var statearr_33423 = state_33415;
(statearr_33423[(8)] = inst_33400__$1);

return statearr_33423;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33415__$1,(8),jobs,inst_33404);
} else {
if((state_val_33416 === (3))){
var inst_33413 = (state_33415[(2)]);
var state_33415__$1 = state_33415;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33415__$1,inst_33413);
} else {
if((state_val_33416 === (2))){
var state_33415__$1 = state_33415;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33415__$1,(4),from);
} else {
if((state_val_33416 === (9))){
var inst_33408 = (state_33415[(2)]);
var state_33415__$1 = (function (){var statearr_33444 = state_33415;
(statearr_33444[(9)] = inst_33408);

return statearr_33444;
})();
var statearr_33445_35367 = state_33415__$1;
(statearr_33445_35367[(2)] = null);

(statearr_33445_35367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (5))){
var inst_33398 = cljs.core.async.close_BANG_(jobs);
var state_33415__$1 = state_33415;
var statearr_33447_35369 = state_33415__$1;
(statearr_33447_35369[(2)] = inst_33398);

(statearr_33447_35369[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (8))){
var inst_33400 = (state_33415[(8)]);
var inst_33406 = (state_33415[(2)]);
var state_33415__$1 = (function (){var statearr_33448 = state_33415;
(statearr_33448[(10)] = inst_33406);

return statearr_33448;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33415__$1,(9),results,inst_33400);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32646__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32646__auto____0 = (function (){
var statearr_33449 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33449[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32646__auto__);

(statearr_33449[(1)] = (1));

return statearr_33449;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32646__auto____1 = (function (state_33415){
while(true){
var ret_value__32647__auto__ = (function (){try{while(true){
var result__32648__auto__ = switch__32645__auto__(state_33415);
if(cljs.core.keyword_identical_QMARK_(result__32648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32648__auto__;
}
break;
}
}catch (e33450){var ex__32649__auto__ = e33450;
var statearr_33451_35371 = state_33415;
(statearr_33451_35371[(2)] = ex__32649__auto__);


if(cljs.core.seq((state_33415[(4)]))){
var statearr_33452_35372 = state_33415;
(statearr_33452_35372[(1)] = cljs.core.first((state_33415[(4)])));

} else {
throw ex__32649__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35373 = state_33415;
state_33415 = G__35373;
continue;
} else {
return ret_value__32647__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32646__auto__ = function(state_33415){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32646__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32646__auto____1.call(this,state_33415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32646__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32646__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32646__auto__;
})()
})();
var state__32928__auto__ = (function (){var statearr_33453 = f__32927__auto__();
(statearr_33453[(6)] = c__32926__auto___35362);

return statearr_33453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32928__auto__);
}));


var c__32926__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32927__auto__ = (function (){var switch__32645__auto__ = (function (state_33492){
var state_val_33493 = (state_33492[(1)]);
if((state_val_33493 === (7))){
var inst_33488 = (state_33492[(2)]);
var state_33492__$1 = state_33492;
var statearr_33494_35374 = state_33492__$1;
(statearr_33494_35374[(2)] = inst_33488);

(statearr_33494_35374[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33493 === (20))){
var state_33492__$1 = state_33492;
var statearr_33496_35375 = state_33492__$1;
(statearr_33496_35375[(2)] = null);

(statearr_33496_35375[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33493 === (1))){
var state_33492__$1 = state_33492;
var statearr_33497_35376 = state_33492__$1;
(statearr_33497_35376[(2)] = null);

(statearr_33497_35376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33493 === (4))){
var inst_33457 = (state_33492[(7)]);
var inst_33457__$1 = (state_33492[(2)]);
var inst_33458 = (inst_33457__$1 == null);
var state_33492__$1 = (function (){var statearr_33498 = state_33492;
(statearr_33498[(7)] = inst_33457__$1);

return statearr_33498;
})();
if(cljs.core.truth_(inst_33458)){
var statearr_33499_35377 = state_33492__$1;
(statearr_33499_35377[(1)] = (5));

} else {
var statearr_33500_35378 = state_33492__$1;
(statearr_33500_35378[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33493 === (15))){
var inst_33470 = (state_33492[(8)]);
var state_33492__$1 = state_33492;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33492__$1,(18),to,inst_33470);
} else {
if((state_val_33493 === (21))){
var inst_33483 = (state_33492[(2)]);
var state_33492__$1 = state_33492;
var statearr_33501_35379 = state_33492__$1;
(statearr_33501_35379[(2)] = inst_33483);

(statearr_33501_35379[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33493 === (13))){
var inst_33485 = (state_33492[(2)]);
var state_33492__$1 = (function (){var statearr_33502 = state_33492;
(statearr_33502[(9)] = inst_33485);

return statearr_33502;
})();
var statearr_33503_35380 = state_33492__$1;
(statearr_33503_35380[(2)] = null);

(statearr_33503_35380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33493 === (6))){
var inst_33457 = (state_33492[(7)]);
var state_33492__$1 = state_33492;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33492__$1,(11),inst_33457);
} else {
if((state_val_33493 === (17))){
var inst_33478 = (state_33492[(2)]);
var state_33492__$1 = state_33492;
if(cljs.core.truth_(inst_33478)){
var statearr_33505_35381 = state_33492__$1;
(statearr_33505_35381[(1)] = (19));

} else {
var statearr_33506_35382 = state_33492__$1;
(statearr_33506_35382[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33493 === (3))){
var inst_33490 = (state_33492[(2)]);
var state_33492__$1 = state_33492;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33492__$1,inst_33490);
} else {
if((state_val_33493 === (12))){
var inst_33467 = (state_33492[(10)]);
var state_33492__$1 = state_33492;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33492__$1,(14),inst_33467);
} else {
if((state_val_33493 === (2))){
var state_33492__$1 = state_33492;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33492__$1,(4),results);
} else {
if((state_val_33493 === (19))){
var state_33492__$1 = state_33492;
var statearr_33507_35383 = state_33492__$1;
(statearr_33507_35383[(2)] = null);

(statearr_33507_35383[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33493 === (11))){
var inst_33467 = (state_33492[(2)]);
var state_33492__$1 = (function (){var statearr_33508 = state_33492;
(statearr_33508[(10)] = inst_33467);

return statearr_33508;
})();
var statearr_33509_35392 = state_33492__$1;
(statearr_33509_35392[(2)] = null);

(statearr_33509_35392[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33493 === (9))){
var state_33492__$1 = state_33492;
var statearr_33510_35393 = state_33492__$1;
(statearr_33510_35393[(2)] = null);

(statearr_33510_35393[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33493 === (5))){
var state_33492__$1 = state_33492;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33511_35394 = state_33492__$1;
(statearr_33511_35394[(1)] = (8));

} else {
var statearr_33512_35395 = state_33492__$1;
(statearr_33512_35395[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33493 === (14))){
var inst_33472 = (state_33492[(11)]);
var inst_33470 = (state_33492[(8)]);
var inst_33470__$1 = (state_33492[(2)]);
var inst_33471 = (inst_33470__$1 == null);
var inst_33472__$1 = cljs.core.not(inst_33471);
var state_33492__$1 = (function (){var statearr_33514 = state_33492;
(statearr_33514[(11)] = inst_33472__$1);

(statearr_33514[(8)] = inst_33470__$1);

return statearr_33514;
})();
if(inst_33472__$1){
var statearr_33515_35397 = state_33492__$1;
(statearr_33515_35397[(1)] = (15));

} else {
var statearr_33516_35398 = state_33492__$1;
(statearr_33516_35398[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33493 === (16))){
var inst_33472 = (state_33492[(11)]);
var state_33492__$1 = state_33492;
var statearr_33517_35399 = state_33492__$1;
(statearr_33517_35399[(2)] = inst_33472);

(statearr_33517_35399[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33493 === (10))){
var inst_33464 = (state_33492[(2)]);
var state_33492__$1 = state_33492;
var statearr_33518_35400 = state_33492__$1;
(statearr_33518_35400[(2)] = inst_33464);

(statearr_33518_35400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33493 === (18))){
var inst_33475 = (state_33492[(2)]);
var state_33492__$1 = state_33492;
var statearr_33519_35401 = state_33492__$1;
(statearr_33519_35401[(2)] = inst_33475);

(statearr_33519_35401[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33493 === (8))){
var inst_33461 = cljs.core.async.close_BANG_(to);
var state_33492__$1 = state_33492;
var statearr_33520_35402 = state_33492__$1;
(statearr_33520_35402[(2)] = inst_33461);

(statearr_33520_35402[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32646__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32646__auto____0 = (function (){
var statearr_33522 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33522[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32646__auto__);

(statearr_33522[(1)] = (1));

return statearr_33522;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32646__auto____1 = (function (state_33492){
while(true){
var ret_value__32647__auto__ = (function (){try{while(true){
var result__32648__auto__ = switch__32645__auto__(state_33492);
if(cljs.core.keyword_identical_QMARK_(result__32648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32648__auto__;
}
break;
}
}catch (e33523){var ex__32649__auto__ = e33523;
var statearr_33524_35412 = state_33492;
(statearr_33524_35412[(2)] = ex__32649__auto__);


if(cljs.core.seq((state_33492[(4)]))){
var statearr_33525_35413 = state_33492;
(statearr_33525_35413[(1)] = cljs.core.first((state_33492[(4)])));

} else {
throw ex__32649__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35414 = state_33492;
state_33492 = G__35414;
continue;
} else {
return ret_value__32647__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32646__auto__ = function(state_33492){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32646__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32646__auto____1.call(this,state_33492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32646__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32646__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32646__auto__;
})()
})();
var state__32928__auto__ = (function (){var statearr_33526 = f__32927__auto__();
(statearr_33526[(6)] = c__32926__auto__);

return statearr_33526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32928__auto__);
}));

return c__32926__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__33529 = arguments.length;
switch (G__33529) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__33532 = arguments.length;
switch (G__33532) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__33535 = arguments.length;
switch (G__33535) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__32926__auto___35434 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32927__auto__ = (function (){var switch__32645__auto__ = (function (state_33562){
var state_val_33563 = (state_33562[(1)]);
if((state_val_33563 === (7))){
var inst_33558 = (state_33562[(2)]);
var state_33562__$1 = state_33562;
var statearr_33564_35435 = state_33562__$1;
(statearr_33564_35435[(2)] = inst_33558);

(statearr_33564_35435[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33563 === (1))){
var state_33562__$1 = state_33562;
var statearr_33565_35436 = state_33562__$1;
(statearr_33565_35436[(2)] = null);

(statearr_33565_35436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33563 === (4))){
var inst_33538 = (state_33562[(7)]);
var inst_33538__$1 = (state_33562[(2)]);
var inst_33539 = (inst_33538__$1 == null);
var state_33562__$1 = (function (){var statearr_33567 = state_33562;
(statearr_33567[(7)] = inst_33538__$1);

return statearr_33567;
})();
if(cljs.core.truth_(inst_33539)){
var statearr_33568_35437 = state_33562__$1;
(statearr_33568_35437[(1)] = (5));

} else {
var statearr_33569_35438 = state_33562__$1;
(statearr_33569_35438[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33563 === (13))){
var state_33562__$1 = state_33562;
var statearr_33570_35439 = state_33562__$1;
(statearr_33570_35439[(2)] = null);

(statearr_33570_35439[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33563 === (6))){
var inst_33538 = (state_33562[(7)]);
var inst_33545 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33538) : p.call(null,inst_33538));
var state_33562__$1 = state_33562;
if(cljs.core.truth_(inst_33545)){
var statearr_33571_35442 = state_33562__$1;
(statearr_33571_35442[(1)] = (9));

} else {
var statearr_33572_35443 = state_33562__$1;
(statearr_33572_35443[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33563 === (3))){
var inst_33560 = (state_33562[(2)]);
var state_33562__$1 = state_33562;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33562__$1,inst_33560);
} else {
if((state_val_33563 === (12))){
var state_33562__$1 = state_33562;
var statearr_33573_35444 = state_33562__$1;
(statearr_33573_35444[(2)] = null);

(statearr_33573_35444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33563 === (2))){
var state_33562__$1 = state_33562;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33562__$1,(4),ch);
} else {
if((state_val_33563 === (11))){
var inst_33538 = (state_33562[(7)]);
var inst_33549 = (state_33562[(2)]);
var state_33562__$1 = state_33562;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33562__$1,(8),inst_33549,inst_33538);
} else {
if((state_val_33563 === (9))){
var state_33562__$1 = state_33562;
var statearr_33574_35448 = state_33562__$1;
(statearr_33574_35448[(2)] = tc);

(statearr_33574_35448[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33563 === (5))){
var inst_33541 = cljs.core.async.close_BANG_(tc);
var inst_33542 = cljs.core.async.close_BANG_(fc);
var state_33562__$1 = (function (){var statearr_33575 = state_33562;
(statearr_33575[(8)] = inst_33541);

return statearr_33575;
})();
var statearr_33577_35451 = state_33562__$1;
(statearr_33577_35451[(2)] = inst_33542);

(statearr_33577_35451[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33563 === (14))){
var inst_33556 = (state_33562[(2)]);
var state_33562__$1 = state_33562;
var statearr_33578_35452 = state_33562__$1;
(statearr_33578_35452[(2)] = inst_33556);

(statearr_33578_35452[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33563 === (10))){
var state_33562__$1 = state_33562;
var statearr_33579_35453 = state_33562__$1;
(statearr_33579_35453[(2)] = fc);

(statearr_33579_35453[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33563 === (8))){
var inst_33551 = (state_33562[(2)]);
var state_33562__$1 = state_33562;
if(cljs.core.truth_(inst_33551)){
var statearr_33580_35455 = state_33562__$1;
(statearr_33580_35455[(1)] = (12));

} else {
var statearr_33581_35456 = state_33562__$1;
(statearr_33581_35456[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32646__auto__ = null;
var cljs$core$async$state_machine__32646__auto____0 = (function (){
var statearr_33582 = [null,null,null,null,null,null,null,null,null];
(statearr_33582[(0)] = cljs$core$async$state_machine__32646__auto__);

(statearr_33582[(1)] = (1));

return statearr_33582;
});
var cljs$core$async$state_machine__32646__auto____1 = (function (state_33562){
while(true){
var ret_value__32647__auto__ = (function (){try{while(true){
var result__32648__auto__ = switch__32645__auto__(state_33562);
if(cljs.core.keyword_identical_QMARK_(result__32648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32648__auto__;
}
break;
}
}catch (e33583){var ex__32649__auto__ = e33583;
var statearr_33584_35458 = state_33562;
(statearr_33584_35458[(2)] = ex__32649__auto__);


if(cljs.core.seq((state_33562[(4)]))){
var statearr_33585_35459 = state_33562;
(statearr_33585_35459[(1)] = cljs.core.first((state_33562[(4)])));

} else {
throw ex__32649__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35461 = state_33562;
state_33562 = G__35461;
continue;
} else {
return ret_value__32647__auto__;
}
break;
}
});
cljs$core$async$state_machine__32646__auto__ = function(state_33562){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32646__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32646__auto____1.call(this,state_33562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32646__auto____0;
cljs$core$async$state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32646__auto____1;
return cljs$core$async$state_machine__32646__auto__;
})()
})();
var state__32928__auto__ = (function (){var statearr_33586 = f__32927__auto__();
(statearr_33586[(6)] = c__32926__auto___35434);

return statearr_33586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32928__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__32926__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32927__auto__ = (function (){var switch__32645__auto__ = (function (state_33609){
var state_val_33610 = (state_33609[(1)]);
if((state_val_33610 === (7))){
var inst_33605 = (state_33609[(2)]);
var state_33609__$1 = state_33609;
var statearr_33612_35465 = state_33609__$1;
(statearr_33612_35465[(2)] = inst_33605);

(statearr_33612_35465[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33610 === (1))){
var inst_33588 = init;
var inst_33589 = inst_33588;
var state_33609__$1 = (function (){var statearr_33613 = state_33609;
(statearr_33613[(7)] = inst_33589);

return statearr_33613;
})();
var statearr_33614_35467 = state_33609__$1;
(statearr_33614_35467[(2)] = null);

(statearr_33614_35467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33610 === (4))){
var inst_33592 = (state_33609[(8)]);
var inst_33592__$1 = (state_33609[(2)]);
var inst_33593 = (inst_33592__$1 == null);
var state_33609__$1 = (function (){var statearr_33615 = state_33609;
(statearr_33615[(8)] = inst_33592__$1);

return statearr_33615;
})();
if(cljs.core.truth_(inst_33593)){
var statearr_33616_35468 = state_33609__$1;
(statearr_33616_35468[(1)] = (5));

} else {
var statearr_33617_35469 = state_33609__$1;
(statearr_33617_35469[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33610 === (6))){
var inst_33596 = (state_33609[(9)]);
var inst_33589 = (state_33609[(7)]);
var inst_33592 = (state_33609[(8)]);
var inst_33596__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_33589,inst_33592) : f.call(null,inst_33589,inst_33592));
var inst_33597 = cljs.core.reduced_QMARK_(inst_33596__$1);
var state_33609__$1 = (function (){var statearr_33618 = state_33609;
(statearr_33618[(9)] = inst_33596__$1);

return statearr_33618;
})();
if(inst_33597){
var statearr_33619_35470 = state_33609__$1;
(statearr_33619_35470[(1)] = (8));

} else {
var statearr_33620_35471 = state_33609__$1;
(statearr_33620_35471[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33610 === (3))){
var inst_33607 = (state_33609[(2)]);
var state_33609__$1 = state_33609;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33609__$1,inst_33607);
} else {
if((state_val_33610 === (2))){
var state_33609__$1 = state_33609;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33609__$1,(4),ch);
} else {
if((state_val_33610 === (9))){
var inst_33596 = (state_33609[(9)]);
var inst_33589 = inst_33596;
var state_33609__$1 = (function (){var statearr_33622 = state_33609;
(statearr_33622[(7)] = inst_33589);

return statearr_33622;
})();
var statearr_33623_35472 = state_33609__$1;
(statearr_33623_35472[(2)] = null);

(statearr_33623_35472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33610 === (5))){
var inst_33589 = (state_33609[(7)]);
var state_33609__$1 = state_33609;
var statearr_33624_35473 = state_33609__$1;
(statearr_33624_35473[(2)] = inst_33589);

(statearr_33624_35473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33610 === (10))){
var inst_33603 = (state_33609[(2)]);
var state_33609__$1 = state_33609;
var statearr_33625_35478 = state_33609__$1;
(statearr_33625_35478[(2)] = inst_33603);

(statearr_33625_35478[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33610 === (8))){
var inst_33596 = (state_33609[(9)]);
var inst_33599 = cljs.core.deref(inst_33596);
var state_33609__$1 = state_33609;
var statearr_33626_35479 = state_33609__$1;
(statearr_33626_35479[(2)] = inst_33599);

(statearr_33626_35479[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__32646__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32646__auto____0 = (function (){
var statearr_33627 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33627[(0)] = cljs$core$async$reduce_$_state_machine__32646__auto__);

(statearr_33627[(1)] = (1));

return statearr_33627;
});
var cljs$core$async$reduce_$_state_machine__32646__auto____1 = (function (state_33609){
while(true){
var ret_value__32647__auto__ = (function (){try{while(true){
var result__32648__auto__ = switch__32645__auto__(state_33609);
if(cljs.core.keyword_identical_QMARK_(result__32648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32648__auto__;
}
break;
}
}catch (e33629){var ex__32649__auto__ = e33629;
var statearr_33630_35484 = state_33609;
(statearr_33630_35484[(2)] = ex__32649__auto__);


if(cljs.core.seq((state_33609[(4)]))){
var statearr_33631_35485 = state_33609;
(statearr_33631_35485[(1)] = cljs.core.first((state_33609[(4)])));

} else {
throw ex__32649__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35486 = state_33609;
state_33609 = G__35486;
continue;
} else {
return ret_value__32647__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32646__auto__ = function(state_33609){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32646__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32646__auto____1.call(this,state_33609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32646__auto____0;
cljs$core$async$reduce_$_state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32646__auto____1;
return cljs$core$async$reduce_$_state_machine__32646__auto__;
})()
})();
var state__32928__auto__ = (function (){var statearr_33632 = f__32927__auto__();
(statearr_33632[(6)] = c__32926__auto__);

return statearr_33632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32928__auto__);
}));

return c__32926__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__32926__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32927__auto__ = (function (){var switch__32645__auto__ = (function (state_33638){
var state_val_33639 = (state_33638[(1)]);
if((state_val_33639 === (1))){
var inst_33633 = cljs.core.async.reduce(f__$1,init,ch);
var state_33638__$1 = state_33638;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33638__$1,(2),inst_33633);
} else {
if((state_val_33639 === (2))){
var inst_33635 = (state_33638[(2)]);
var inst_33636 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_33635) : f__$1.call(null,inst_33635));
var state_33638__$1 = state_33638;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33638__$1,inst_33636);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__32646__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32646__auto____0 = (function (){
var statearr_33641 = [null,null,null,null,null,null,null];
(statearr_33641[(0)] = cljs$core$async$transduce_$_state_machine__32646__auto__);

(statearr_33641[(1)] = (1));

return statearr_33641;
});
var cljs$core$async$transduce_$_state_machine__32646__auto____1 = (function (state_33638){
while(true){
var ret_value__32647__auto__ = (function (){try{while(true){
var result__32648__auto__ = switch__32645__auto__(state_33638);
if(cljs.core.keyword_identical_QMARK_(result__32648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32648__auto__;
}
break;
}
}catch (e33642){var ex__32649__auto__ = e33642;
var statearr_33643_35501 = state_33638;
(statearr_33643_35501[(2)] = ex__32649__auto__);


if(cljs.core.seq((state_33638[(4)]))){
var statearr_33644_35502 = state_33638;
(statearr_33644_35502[(1)] = cljs.core.first((state_33638[(4)])));

} else {
throw ex__32649__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35506 = state_33638;
state_33638 = G__35506;
continue;
} else {
return ret_value__32647__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32646__auto__ = function(state_33638){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32646__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32646__auto____1.call(this,state_33638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32646__auto____0;
cljs$core$async$transduce_$_state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32646__auto____1;
return cljs$core$async$transduce_$_state_machine__32646__auto__;
})()
})();
var state__32928__auto__ = (function (){var statearr_33645 = f__32927__auto__();
(statearr_33645[(6)] = c__32926__auto__);

return statearr_33645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32928__auto__);
}));

return c__32926__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__33648 = arguments.length;
switch (G__33648) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__32926__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32927__auto__ = (function (){var switch__32645__auto__ = (function (state_33673){
var state_val_33674 = (state_33673[(1)]);
if((state_val_33674 === (7))){
var inst_33655 = (state_33673[(2)]);
var state_33673__$1 = state_33673;
var statearr_33676_35514 = state_33673__$1;
(statearr_33676_35514[(2)] = inst_33655);

(statearr_33676_35514[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33674 === (1))){
var inst_33649 = cljs.core.seq(coll);
var inst_33650 = inst_33649;
var state_33673__$1 = (function (){var statearr_33677 = state_33673;
(statearr_33677[(7)] = inst_33650);

return statearr_33677;
})();
var statearr_33678_35518 = state_33673__$1;
(statearr_33678_35518[(2)] = null);

(statearr_33678_35518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33674 === (4))){
var inst_33650 = (state_33673[(7)]);
var inst_33653 = cljs.core.first(inst_33650);
var state_33673__$1 = state_33673;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33673__$1,(7),ch,inst_33653);
} else {
if((state_val_33674 === (13))){
var inst_33667 = (state_33673[(2)]);
var state_33673__$1 = state_33673;
var statearr_33679_35519 = state_33673__$1;
(statearr_33679_35519[(2)] = inst_33667);

(statearr_33679_35519[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33674 === (6))){
var inst_33658 = (state_33673[(2)]);
var state_33673__$1 = state_33673;
if(cljs.core.truth_(inst_33658)){
var statearr_33680_35520 = state_33673__$1;
(statearr_33680_35520[(1)] = (8));

} else {
var statearr_33681_35523 = state_33673__$1;
(statearr_33681_35523[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33674 === (3))){
var inst_33671 = (state_33673[(2)]);
var state_33673__$1 = state_33673;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33673__$1,inst_33671);
} else {
if((state_val_33674 === (12))){
var state_33673__$1 = state_33673;
var statearr_33683_35524 = state_33673__$1;
(statearr_33683_35524[(2)] = null);

(statearr_33683_35524[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33674 === (2))){
var inst_33650 = (state_33673[(7)]);
var state_33673__$1 = state_33673;
if(cljs.core.truth_(inst_33650)){
var statearr_33684_35525 = state_33673__$1;
(statearr_33684_35525[(1)] = (4));

} else {
var statearr_33685_35529 = state_33673__$1;
(statearr_33685_35529[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33674 === (11))){
var inst_33664 = cljs.core.async.close_BANG_(ch);
var state_33673__$1 = state_33673;
var statearr_33686_35530 = state_33673__$1;
(statearr_33686_35530[(2)] = inst_33664);

(statearr_33686_35530[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33674 === (9))){
var state_33673__$1 = state_33673;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33687_35531 = state_33673__$1;
(statearr_33687_35531[(1)] = (11));

} else {
var statearr_33688_35532 = state_33673__$1;
(statearr_33688_35532[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33674 === (5))){
var inst_33650 = (state_33673[(7)]);
var state_33673__$1 = state_33673;
var statearr_33690_35533 = state_33673__$1;
(statearr_33690_35533[(2)] = inst_33650);

(statearr_33690_35533[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33674 === (10))){
var inst_33669 = (state_33673[(2)]);
var state_33673__$1 = state_33673;
var statearr_33691_35534 = state_33673__$1;
(statearr_33691_35534[(2)] = inst_33669);

(statearr_33691_35534[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33674 === (8))){
var inst_33650 = (state_33673[(7)]);
var inst_33660 = cljs.core.next(inst_33650);
var inst_33650__$1 = inst_33660;
var state_33673__$1 = (function (){var statearr_33692 = state_33673;
(statearr_33692[(7)] = inst_33650__$1);

return statearr_33692;
})();
var statearr_33693_35535 = state_33673__$1;
(statearr_33693_35535[(2)] = null);

(statearr_33693_35535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32646__auto__ = null;
var cljs$core$async$state_machine__32646__auto____0 = (function (){
var statearr_33694 = [null,null,null,null,null,null,null,null];
(statearr_33694[(0)] = cljs$core$async$state_machine__32646__auto__);

(statearr_33694[(1)] = (1));

return statearr_33694;
});
var cljs$core$async$state_machine__32646__auto____1 = (function (state_33673){
while(true){
var ret_value__32647__auto__ = (function (){try{while(true){
var result__32648__auto__ = switch__32645__auto__(state_33673);
if(cljs.core.keyword_identical_QMARK_(result__32648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32648__auto__;
}
break;
}
}catch (e33695){var ex__32649__auto__ = e33695;
var statearr_33696_35540 = state_33673;
(statearr_33696_35540[(2)] = ex__32649__auto__);


if(cljs.core.seq((state_33673[(4)]))){
var statearr_33697_35541 = state_33673;
(statearr_33697_35541[(1)] = cljs.core.first((state_33673[(4)])));

} else {
throw ex__32649__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35542 = state_33673;
state_33673 = G__35542;
continue;
} else {
return ret_value__32647__auto__;
}
break;
}
});
cljs$core$async$state_machine__32646__auto__ = function(state_33673){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32646__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32646__auto____1.call(this,state_33673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32646__auto____0;
cljs$core$async$state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32646__auto____1;
return cljs$core$async$state_machine__32646__auto__;
})()
})();
var state__32928__auto__ = (function (){var statearr_33699 = f__32927__auto__();
(statearr_33699[(6)] = c__32926__auto__);

return statearr_33699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32928__auto__);
}));

return c__32926__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__33701 = arguments.length;
switch (G__33701) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_35548 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_35548(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_35549 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_35549(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_35551 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_35551(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_35552 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_35552(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33706 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33706 = (function (ch,cs,meta33707){
this.ch = ch;
this.cs = cs;
this.meta33707 = meta33707;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33706.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33708,meta33707__$1){
var self__ = this;
var _33708__$1 = this;
return (new cljs.core.async.t_cljs$core$async33706(self__.ch,self__.cs,meta33707__$1));
}));

(cljs.core.async.t_cljs$core$async33706.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33708){
var self__ = this;
var _33708__$1 = this;
return self__.meta33707;
}));

(cljs.core.async.t_cljs$core$async33706.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33706.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33706.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33706.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async33706.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async33706.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async33706.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33707","meta33707",1457494071,null)], null);
}));

(cljs.core.async.t_cljs$core$async33706.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33706.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33706");

(cljs.core.async.t_cljs$core$async33706.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33706");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33706.
 */
cljs.core.async.__GT_t_cljs$core$async33706 = (function cljs$core$async$mult_$___GT_t_cljs$core$async33706(ch__$1,cs__$1,meta33707){
return (new cljs.core.async.t_cljs$core$async33706(ch__$1,cs__$1,meta33707));
});

}

return (new cljs.core.async.t_cljs$core$async33706(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__32926__auto___35558 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32927__auto__ = (function (){var switch__32645__auto__ = (function (state_33845){
var state_val_33846 = (state_33845[(1)]);
if((state_val_33846 === (7))){
var inst_33840 = (state_33845[(2)]);
var state_33845__$1 = state_33845;
var statearr_33847_35559 = state_33845__$1;
(statearr_33847_35559[(2)] = inst_33840);

(statearr_33847_35559[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33846 === (20))){
var inst_33744 = (state_33845[(7)]);
var inst_33756 = cljs.core.first(inst_33744);
var inst_33757 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33756,(0),null);
var inst_33758 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33756,(1),null);
var state_33845__$1 = (function (){var statearr_33848 = state_33845;
(statearr_33848[(8)] = inst_33757);

return statearr_33848;
})();
if(cljs.core.truth_(inst_33758)){
var statearr_33849_35566 = state_33845__$1;
(statearr_33849_35566[(1)] = (22));

} else {
var statearr_33850_35567 = state_33845__$1;
(statearr_33850_35567[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33846 === (27))){
var inst_33713 = (state_33845[(9)]);
var inst_33787 = (state_33845[(10)]);
var inst_33794 = (state_33845[(11)]);
var inst_33789 = (state_33845[(12)]);
var inst_33794__$1 = cljs.core._nth(inst_33787,inst_33789);
var inst_33795 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33794__$1,inst_33713,done);
var state_33845__$1 = (function (){var statearr_33852 = state_33845;
(statearr_33852[(11)] = inst_33794__$1);

return statearr_33852;
})();
if(cljs.core.truth_(inst_33795)){
var statearr_33853_35568 = state_33845__$1;
(statearr_33853_35568[(1)] = (30));

} else {
var statearr_33854_35572 = state_33845__$1;
(statearr_33854_35572[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33846 === (1))){
var state_33845__$1 = state_33845;
var statearr_33855_35573 = state_33845__$1;
(statearr_33855_35573[(2)] = null);

(statearr_33855_35573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33846 === (24))){
var inst_33744 = (state_33845[(7)]);
var inst_33763 = (state_33845[(2)]);
var inst_33764 = cljs.core.next(inst_33744);
var inst_33722 = inst_33764;
var inst_33723 = null;
var inst_33724 = (0);
var inst_33725 = (0);
var state_33845__$1 = (function (){var statearr_33856 = state_33845;
(statearr_33856[(13)] = inst_33722);

(statearr_33856[(14)] = inst_33763);

(statearr_33856[(15)] = inst_33723);

(statearr_33856[(16)] = inst_33725);

(statearr_33856[(17)] = inst_33724);

return statearr_33856;
})();
var statearr_33857_35574 = state_33845__$1;
(statearr_33857_35574[(2)] = null);

(statearr_33857_35574[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33846 === (39))){
var state_33845__$1 = state_33845;
var statearr_33862_35575 = state_33845__$1;
(statearr_33862_35575[(2)] = null);

(statearr_33862_35575[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33846 === (4))){
var inst_33713 = (state_33845[(9)]);
var inst_33713__$1 = (state_33845[(2)]);
var inst_33714 = (inst_33713__$1 == null);
var state_33845__$1 = (function (){var statearr_33863 = state_33845;
(statearr_33863[(9)] = inst_33713__$1);

return statearr_33863;
})();
if(cljs.core.truth_(inst_33714)){
var statearr_33864_35580 = state_33845__$1;
(statearr_33864_35580[(1)] = (5));

} else {
var statearr_33865_35581 = state_33845__$1;
(statearr_33865_35581[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33846 === (15))){
var inst_33722 = (state_33845[(13)]);
var inst_33723 = (state_33845[(15)]);
var inst_33725 = (state_33845[(16)]);
var inst_33724 = (state_33845[(17)]);
var inst_33740 = (state_33845[(2)]);
var inst_33741 = (inst_33725 + (1));
var tmp33859 = inst_33722;
var tmp33860 = inst_33723;
var tmp33861 = inst_33724;
var inst_33722__$1 = tmp33859;
var inst_33723__$1 = tmp33860;
var inst_33724__$1 = tmp33861;
var inst_33725__$1 = inst_33741;
var state_33845__$1 = (function (){var statearr_33866 = state_33845;
(statearr_33866[(13)] = inst_33722__$1);

(statearr_33866[(15)] = inst_33723__$1);

(statearr_33866[(16)] = inst_33725__$1);

(statearr_33866[(17)] = inst_33724__$1);

(statearr_33866[(18)] = inst_33740);

return statearr_33866;
})();
var statearr_33867_35582 = state_33845__$1;
(statearr_33867_35582[(2)] = null);

(statearr_33867_35582[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33846 === (21))){
var inst_33767 = (state_33845[(2)]);
var state_33845__$1 = state_33845;
var statearr_33872_35583 = state_33845__$1;
(statearr_33872_35583[(2)] = inst_33767);

(statearr_33872_35583[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33846 === (31))){
var inst_33794 = (state_33845[(11)]);
var inst_33798 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33794);
var state_33845__$1 = state_33845;
var statearr_33873_35584 = state_33845__$1;
(statearr_33873_35584[(2)] = inst_33798);

(statearr_33873_35584[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33846 === (32))){
var inst_33786 = (state_33845[(19)]);
var inst_33787 = (state_33845[(10)]);
var inst_33788 = (state_33845[(20)]);
var inst_33789 = (state_33845[(12)]);
var inst_33800 = (state_33845[(2)]);
var inst_33801 = (inst_33789 + (1));
var tmp33868 = inst_33786;
var tmp33869 = inst_33787;
var tmp33870 = inst_33788;
var inst_33786__$1 = tmp33868;
var inst_33787__$1 = tmp33869;
var inst_33788__$1 = tmp33870;
var inst_33789__$1 = inst_33801;
var state_33845__$1 = (function (){var statearr_33874 = state_33845;
(statearr_33874[(19)] = inst_33786__$1);

(statearr_33874[(10)] = inst_33787__$1);

(statearr_33874[(20)] = inst_33788__$1);

(statearr_33874[(21)] = inst_33800);

(statearr_33874[(12)] = inst_33789__$1);

return statearr_33874;
})();
var statearr_33875_35586 = state_33845__$1;
(statearr_33875_35586[(2)] = null);

(statearr_33875_35586[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33846 === (40))){
var inst_33813 = (state_33845[(22)]);
var inst_33817 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33813);
var state_33845__$1 = state_33845;
var statearr_33876_35593 = state_33845__$1;
(statearr_33876_35593[(2)] = inst_33817);

(statearr_33876_35593[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33846 === (33))){
var inst_33804 = (state_33845[(23)]);
var inst_33806 = cljs.core.chunked_seq_QMARK_(inst_33804);
var state_33845__$1 = state_33845;
if(inst_33806){
var statearr_33878_35595 = state_33845__$1;
(statearr_33878_35595[(1)] = (36));

} else {
var statearr_33879_35596 = state_33845__$1;
(statearr_33879_35596[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33846 === (13))){
var inst_33734 = (state_33845[(24)]);
var inst_33737 = cljs.core.async.close_BANG_(inst_33734);
var state_33845__$1 = state_33845;
var statearr_33880_35597 = state_33845__$1;
(statearr_33880_35597[(2)] = inst_33737);

(statearr_33880_35597[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33846 === (22))){
var inst_33757 = (state_33845[(8)]);
var inst_33760 = cljs.core.async.close_BANG_(inst_33757);
var state_33845__$1 = state_33845;
var statearr_33881_35601 = state_33845__$1;
(statearr_33881_35601[(2)] = inst_33760);

(statearr_33881_35601[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33846 === (36))){
var inst_33804 = (state_33845[(23)]);
var inst_33808 = cljs.core.chunk_first(inst_33804);
var inst_33809 = cljs.core.chunk_rest(inst_33804);
var inst_33810 = cljs.core.count(inst_33808);
var inst_33786 = inst_33809;
var inst_33787 = inst_33808;
var inst_33788 = inst_33810;
var inst_33789 = (0);
var state_33845__$1 = (function (){var statearr_33882 = state_33845;
(statearr_33882[(19)] = inst_33786);

(statearr_33882[(10)] = inst_33787);

(statearr_33882[(20)] = inst_33788);

(statearr_33882[(12)] = inst_33789);

return statearr_33882;
})();
var statearr_33883_35602 = state_33845__$1;
(statearr_33883_35602[(2)] = null);

(statearr_33883_35602[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33846 === (41))){
var inst_33804 = (state_33845[(23)]);
var inst_33819 = (state_33845[(2)]);
var inst_33820 = cljs.core.next(inst_33804);
var inst_33786 = inst_33820;
var inst_33787 = null;
var inst_33788 = (0);
var inst_33789 = (0);
var state_33845__$1 = (function (){var statearr_33884 = state_33845;
(statearr_33884[(19)] = inst_33786);

(statearr_33884[(10)] = inst_33787);

(statearr_33884[(20)] = inst_33788);

(statearr_33884[(25)] = inst_33819);

(statearr_33884[(12)] = inst_33789);

return statearr_33884;
})();
var statearr_33885_35610 = state_33845__$1;
(statearr_33885_35610[(2)] = null);

(statearr_33885_35610[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33846 === (43))){
var state_33845__$1 = state_33845;
var statearr_33887_35611 = state_33845__$1;
(statearr_33887_35611[(2)] = null);

(statearr_33887_35611[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33846 === (29))){
var inst_33828 = (state_33845[(2)]);
var state_33845__$1 = state_33845;
var statearr_33888_35612 = state_33845__$1;
(statearr_33888_35612[(2)] = inst_33828);

(statearr_33888_35612[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33846 === (44))){
var inst_33837 = (state_33845[(2)]);
var state_33845__$1 = (function (){var statearr_33889 = state_33845;
(statearr_33889[(26)] = inst_33837);

return statearr_33889;
})();
var statearr_33890_35613 = state_33845__$1;
(statearr_33890_35613[(2)] = null);

(statearr_33890_35613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33846 === (6))){
var inst_33777 = (state_33845[(27)]);
var inst_33776 = cljs.core.deref(cs);
var inst_33777__$1 = cljs.core.keys(inst_33776);
var inst_33779 = cljs.core.count(inst_33777__$1);
var inst_33780 = cljs.core.reset_BANG_(dctr,inst_33779);
var inst_33785 = cljs.core.seq(inst_33777__$1);
var inst_33786 = inst_33785;
var inst_33787 = null;
var inst_33788 = (0);
var inst_33789 = (0);
var state_33845__$1 = (function (){var statearr_33891 = state_33845;
(statearr_33891[(28)] = inst_33780);

(statearr_33891[(19)] = inst_33786);

(statearr_33891[(10)] = inst_33787);

(statearr_33891[(20)] = inst_33788);

(statearr_33891[(12)] = inst_33789);

(statearr_33891[(27)] = inst_33777__$1);

return statearr_33891;
})();
var statearr_33892_35617 = state_33845__$1;
(statearr_33892_35617[(2)] = null);

(statearr_33892_35617[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33846 === (28))){
var inst_33786 = (state_33845[(19)]);
var inst_33804 = (state_33845[(23)]);
var inst_33804__$1 = cljs.core.seq(inst_33786);
var state_33845__$1 = (function (){var statearr_33893 = state_33845;
(statearr_33893[(23)] = inst_33804__$1);

return statearr_33893;
})();
if(inst_33804__$1){
var statearr_33895_35619 = state_33845__$1;
(statearr_33895_35619[(1)] = (33));

} else {
var statearr_33896_35620 = state_33845__$1;
(statearr_33896_35620[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33846 === (25))){
var inst_33788 = (state_33845[(20)]);
var inst_33789 = (state_33845[(12)]);
var inst_33791 = (inst_33789 < inst_33788);
var inst_33792 = inst_33791;
var state_33845__$1 = state_33845;
if(cljs.core.truth_(inst_33792)){
var statearr_33897_35621 = state_33845__$1;
(statearr_33897_35621[(1)] = (27));

} else {
var statearr_33898_35622 = state_33845__$1;
(statearr_33898_35622[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33846 === (34))){
var state_33845__$1 = state_33845;
var statearr_33899_35623 = state_33845__$1;
(statearr_33899_35623[(2)] = null);

(statearr_33899_35623[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33846 === (17))){
var state_33845__$1 = state_33845;
var statearr_33900_35624 = state_33845__$1;
(statearr_33900_35624[(2)] = null);

(statearr_33900_35624[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33846 === (3))){
var inst_33842 = (state_33845[(2)]);
var state_33845__$1 = state_33845;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33845__$1,inst_33842);
} else {
if((state_val_33846 === (12))){
var inst_33772 = (state_33845[(2)]);
var state_33845__$1 = state_33845;
var statearr_33901_35630 = state_33845__$1;
(statearr_33901_35630[(2)] = inst_33772);

(statearr_33901_35630[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33846 === (2))){
var state_33845__$1 = state_33845;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33845__$1,(4),ch);
} else {
if((state_val_33846 === (23))){
var state_33845__$1 = state_33845;
var statearr_33903_35631 = state_33845__$1;
(statearr_33903_35631[(2)] = null);

(statearr_33903_35631[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33846 === (35))){
var inst_33826 = (state_33845[(2)]);
var state_33845__$1 = state_33845;
var statearr_33904_35632 = state_33845__$1;
(statearr_33904_35632[(2)] = inst_33826);

(statearr_33904_35632[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33846 === (19))){
var inst_33744 = (state_33845[(7)]);
var inst_33748 = cljs.core.chunk_first(inst_33744);
var inst_33749 = cljs.core.chunk_rest(inst_33744);
var inst_33750 = cljs.core.count(inst_33748);
var inst_33722 = inst_33749;
var inst_33723 = inst_33748;
var inst_33724 = inst_33750;
var inst_33725 = (0);
var state_33845__$1 = (function (){var statearr_33905 = state_33845;
(statearr_33905[(13)] = inst_33722);

(statearr_33905[(15)] = inst_33723);

(statearr_33905[(16)] = inst_33725);

(statearr_33905[(17)] = inst_33724);

return statearr_33905;
})();
var statearr_33906_35638 = state_33845__$1;
(statearr_33906_35638[(2)] = null);

(statearr_33906_35638[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33846 === (11))){
var inst_33722 = (state_33845[(13)]);
var inst_33744 = (state_33845[(7)]);
var inst_33744__$1 = cljs.core.seq(inst_33722);
var state_33845__$1 = (function (){var statearr_33907 = state_33845;
(statearr_33907[(7)] = inst_33744__$1);

return statearr_33907;
})();
if(inst_33744__$1){
var statearr_33908_35640 = state_33845__$1;
(statearr_33908_35640[(1)] = (16));

} else {
var statearr_33909_35641 = state_33845__$1;
(statearr_33909_35641[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33846 === (9))){
var inst_33774 = (state_33845[(2)]);
var state_33845__$1 = state_33845;
var statearr_33910_35645 = state_33845__$1;
(statearr_33910_35645[(2)] = inst_33774);

(statearr_33910_35645[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33846 === (5))){
var inst_33720 = cljs.core.deref(cs);
var inst_33721 = cljs.core.seq(inst_33720);
var inst_33722 = inst_33721;
var inst_33723 = null;
var inst_33724 = (0);
var inst_33725 = (0);
var state_33845__$1 = (function (){var statearr_33912 = state_33845;
(statearr_33912[(13)] = inst_33722);

(statearr_33912[(15)] = inst_33723);

(statearr_33912[(16)] = inst_33725);

(statearr_33912[(17)] = inst_33724);

return statearr_33912;
})();
var statearr_33914_35646 = state_33845__$1;
(statearr_33914_35646[(2)] = null);

(statearr_33914_35646[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33846 === (14))){
var state_33845__$1 = state_33845;
var statearr_33915_35651 = state_33845__$1;
(statearr_33915_35651[(2)] = null);

(statearr_33915_35651[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33846 === (45))){
var inst_33834 = (state_33845[(2)]);
var state_33845__$1 = state_33845;
var statearr_33916_35653 = state_33845__$1;
(statearr_33916_35653[(2)] = inst_33834);

(statearr_33916_35653[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33846 === (26))){
var inst_33777 = (state_33845[(27)]);
var inst_33830 = (state_33845[(2)]);
var inst_33831 = cljs.core.seq(inst_33777);
var state_33845__$1 = (function (){var statearr_33917 = state_33845;
(statearr_33917[(29)] = inst_33830);

return statearr_33917;
})();
if(inst_33831){
var statearr_33918_35654 = state_33845__$1;
(statearr_33918_35654[(1)] = (42));

} else {
var statearr_33919_35655 = state_33845__$1;
(statearr_33919_35655[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33846 === (16))){
var inst_33744 = (state_33845[(7)]);
var inst_33746 = cljs.core.chunked_seq_QMARK_(inst_33744);
var state_33845__$1 = state_33845;
if(inst_33746){
var statearr_33920_35656 = state_33845__$1;
(statearr_33920_35656[(1)] = (19));

} else {
var statearr_33921_35657 = state_33845__$1;
(statearr_33921_35657[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33846 === (38))){
var inst_33823 = (state_33845[(2)]);
var state_33845__$1 = state_33845;
var statearr_33922_35659 = state_33845__$1;
(statearr_33922_35659[(2)] = inst_33823);

(statearr_33922_35659[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33846 === (30))){
var state_33845__$1 = state_33845;
var statearr_33923_35663 = state_33845__$1;
(statearr_33923_35663[(2)] = null);

(statearr_33923_35663[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33846 === (10))){
var inst_33723 = (state_33845[(15)]);
var inst_33725 = (state_33845[(16)]);
var inst_33733 = cljs.core._nth(inst_33723,inst_33725);
var inst_33734 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33733,(0),null);
var inst_33735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33733,(1),null);
var state_33845__$1 = (function (){var statearr_33924 = state_33845;
(statearr_33924[(24)] = inst_33734);

return statearr_33924;
})();
if(cljs.core.truth_(inst_33735)){
var statearr_33925_35668 = state_33845__$1;
(statearr_33925_35668[(1)] = (13));

} else {
var statearr_33928_35669 = state_33845__$1;
(statearr_33928_35669[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33846 === (18))){
var inst_33770 = (state_33845[(2)]);
var state_33845__$1 = state_33845;
var statearr_33929_35676 = state_33845__$1;
(statearr_33929_35676[(2)] = inst_33770);

(statearr_33929_35676[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33846 === (42))){
var state_33845__$1 = state_33845;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33845__$1,(45),dchan);
} else {
if((state_val_33846 === (37))){
var inst_33813 = (state_33845[(22)]);
var inst_33713 = (state_33845[(9)]);
var inst_33804 = (state_33845[(23)]);
var inst_33813__$1 = cljs.core.first(inst_33804);
var inst_33814 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33813__$1,inst_33713,done);
var state_33845__$1 = (function (){var statearr_33930 = state_33845;
(statearr_33930[(22)] = inst_33813__$1);

return statearr_33930;
})();
if(cljs.core.truth_(inst_33814)){
var statearr_33931_35682 = state_33845__$1;
(statearr_33931_35682[(1)] = (39));

} else {
var statearr_33932_35683 = state_33845__$1;
(statearr_33932_35683[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33846 === (8))){
var inst_33725 = (state_33845[(16)]);
var inst_33724 = (state_33845[(17)]);
var inst_33727 = (inst_33725 < inst_33724);
var inst_33728 = inst_33727;
var state_33845__$1 = state_33845;
if(cljs.core.truth_(inst_33728)){
var statearr_33933_35684 = state_33845__$1;
(statearr_33933_35684[(1)] = (10));

} else {
var statearr_33934_35685 = state_33845__$1;
(statearr_33934_35685[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__32646__auto__ = null;
var cljs$core$async$mult_$_state_machine__32646__auto____0 = (function (){
var statearr_33935 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33935[(0)] = cljs$core$async$mult_$_state_machine__32646__auto__);

(statearr_33935[(1)] = (1));

return statearr_33935;
});
var cljs$core$async$mult_$_state_machine__32646__auto____1 = (function (state_33845){
while(true){
var ret_value__32647__auto__ = (function (){try{while(true){
var result__32648__auto__ = switch__32645__auto__(state_33845);
if(cljs.core.keyword_identical_QMARK_(result__32648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32648__auto__;
}
break;
}
}catch (e33936){var ex__32649__auto__ = e33936;
var statearr_33937_35686 = state_33845;
(statearr_33937_35686[(2)] = ex__32649__auto__);


if(cljs.core.seq((state_33845[(4)]))){
var statearr_33938_35687 = state_33845;
(statearr_33938_35687[(1)] = cljs.core.first((state_33845[(4)])));

} else {
throw ex__32649__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35688 = state_33845;
state_33845 = G__35688;
continue;
} else {
return ret_value__32647__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32646__auto__ = function(state_33845){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32646__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32646__auto____1.call(this,state_33845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32646__auto____0;
cljs$core$async$mult_$_state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32646__auto____1;
return cljs$core$async$mult_$_state_machine__32646__auto__;
})()
})();
var state__32928__auto__ = (function (){var statearr_33939 = f__32927__auto__();
(statearr_33939[(6)] = c__32926__auto___35558);

return statearr_33939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32928__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__33942 = arguments.length;
switch (G__33942) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_35696 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_35696(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_35701 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_35701(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_35702 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_35702(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_35703 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_35703(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_35704 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_35704(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___35718 = arguments.length;
var i__5770__auto___35719 = (0);
while(true){
if((i__5770__auto___35719 < len__5769__auto___35718)){
args__5775__auto__.push((arguments[i__5770__auto___35719]));

var G__35723 = (i__5770__auto___35719 + (1));
i__5770__auto___35719 = G__35723;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33990){
var map__33991 = p__33990;
var map__33991__$1 = cljs.core.__destructure_map(map__33991);
var opts = map__33991__$1;
var statearr_33992_35724 = state;
(statearr_33992_35724[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_33996_35725 = state;
(statearr_33996_35725[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_33998_35726 = state;
(statearr_33998_35726[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33981){
var G__33982 = cljs.core.first(seq33981);
var seq33981__$1 = cljs.core.next(seq33981);
var G__33983 = cljs.core.first(seq33981__$1);
var seq33981__$2 = cljs.core.next(seq33981__$1);
var G__33984 = cljs.core.first(seq33981__$2);
var seq33981__$3 = cljs.core.next(seq33981__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33982,G__33983,G__33984,seq33981__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34018 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34018 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34019){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta34019 = meta34019;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34018.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34020,meta34019__$1){
var self__ = this;
var _34020__$1 = this;
return (new cljs.core.async.t_cljs$core$async34018(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta34019__$1));
}));

(cljs.core.async.t_cljs$core$async34018.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34020){
var self__ = this;
var _34020__$1 = this;
return self__.meta34019;
}));

(cljs.core.async.t_cljs$core$async34018.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34018.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async34018.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34018.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34018.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34018.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34018.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34018.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34018.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta34019","meta34019",-275528376,null)], null);
}));

(cljs.core.async.t_cljs$core$async34018.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34018.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34018");

(cljs.core.async.t_cljs$core$async34018.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34018");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34018.
 */
cljs.core.async.__GT_t_cljs$core$async34018 = (function cljs$core$async$mix_$___GT_t_cljs$core$async34018(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34019){
return (new cljs.core.async.t_cljs$core$async34018(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34019));
});

}

return (new cljs.core.async.t_cljs$core$async34018(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32926__auto___35736 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32927__auto__ = (function (){var switch__32645__auto__ = (function (state_34125){
var state_val_34126 = (state_34125[(1)]);
if((state_val_34126 === (7))){
var inst_34081 = (state_34125[(2)]);
var state_34125__$1 = state_34125;
if(cljs.core.truth_(inst_34081)){
var statearr_34134_35737 = state_34125__$1;
(statearr_34134_35737[(1)] = (8));

} else {
var statearr_34135_35738 = state_34125__$1;
(statearr_34135_35738[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (20))){
var inst_34073 = (state_34125[(7)]);
var state_34125__$1 = state_34125;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34125__$1,(23),out,inst_34073);
} else {
if((state_val_34126 === (1))){
var inst_34052 = calc_state();
var inst_34053 = cljs.core.__destructure_map(inst_34052);
var inst_34054 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34053,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34055 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34053,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34056 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34053,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34057 = inst_34052;
var state_34125__$1 = (function (){var statearr_34139 = state_34125;
(statearr_34139[(8)] = inst_34055);

(statearr_34139[(9)] = inst_34054);

(statearr_34139[(10)] = inst_34057);

(statearr_34139[(11)] = inst_34056);

return statearr_34139;
})();
var statearr_34140_35739 = state_34125__$1;
(statearr_34140_35739[(2)] = null);

(statearr_34140_35739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (24))){
var inst_34062 = (state_34125[(12)]);
var inst_34057 = inst_34062;
var state_34125__$1 = (function (){var statearr_34141 = state_34125;
(statearr_34141[(10)] = inst_34057);

return statearr_34141;
})();
var statearr_34142_35740 = state_34125__$1;
(statearr_34142_35740[(2)] = null);

(statearr_34142_35740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (4))){
var inst_34075 = (state_34125[(13)]);
var inst_34073 = (state_34125[(7)]);
var inst_34072 = (state_34125[(2)]);
var inst_34073__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34072,(0),null);
var inst_34074 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34072,(1),null);
var inst_34075__$1 = (inst_34073__$1 == null);
var state_34125__$1 = (function (){var statearr_34145 = state_34125;
(statearr_34145[(13)] = inst_34075__$1);

(statearr_34145[(14)] = inst_34074);

(statearr_34145[(7)] = inst_34073__$1);

return statearr_34145;
})();
if(cljs.core.truth_(inst_34075__$1)){
var statearr_34148_35741 = state_34125__$1;
(statearr_34148_35741[(1)] = (5));

} else {
var statearr_34149_35742 = state_34125__$1;
(statearr_34149_35742[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (15))){
var inst_34063 = (state_34125[(15)]);
var inst_34097 = (state_34125[(16)]);
var inst_34097__$1 = cljs.core.empty_QMARK_(inst_34063);
var state_34125__$1 = (function (){var statearr_34153 = state_34125;
(statearr_34153[(16)] = inst_34097__$1);

return statearr_34153;
})();
if(inst_34097__$1){
var statearr_34157_35743 = state_34125__$1;
(statearr_34157_35743[(1)] = (17));

} else {
var statearr_34158_35744 = state_34125__$1;
(statearr_34158_35744[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (21))){
var inst_34062 = (state_34125[(12)]);
var inst_34057 = inst_34062;
var state_34125__$1 = (function (){var statearr_34160 = state_34125;
(statearr_34160[(10)] = inst_34057);

return statearr_34160;
})();
var statearr_34161_35745 = state_34125__$1;
(statearr_34161_35745[(2)] = null);

(statearr_34161_35745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (13))){
var inst_34088 = (state_34125[(2)]);
var inst_34089 = calc_state();
var inst_34057 = inst_34089;
var state_34125__$1 = (function (){var statearr_34165 = state_34125;
(statearr_34165[(17)] = inst_34088);

(statearr_34165[(10)] = inst_34057);

return statearr_34165;
})();
var statearr_34166_35746 = state_34125__$1;
(statearr_34166_35746[(2)] = null);

(statearr_34166_35746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (22))){
var inst_34118 = (state_34125[(2)]);
var state_34125__$1 = state_34125;
var statearr_34170_35747 = state_34125__$1;
(statearr_34170_35747[(2)] = inst_34118);

(statearr_34170_35747[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (6))){
var inst_34074 = (state_34125[(14)]);
var inst_34079 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34074,change);
var state_34125__$1 = state_34125;
var statearr_34173_35748 = state_34125__$1;
(statearr_34173_35748[(2)] = inst_34079);

(statearr_34173_35748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (25))){
var state_34125__$1 = state_34125;
var statearr_34174_35749 = state_34125__$1;
(statearr_34174_35749[(2)] = null);

(statearr_34174_35749[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (17))){
var inst_34074 = (state_34125[(14)]);
var inst_34065 = (state_34125[(18)]);
var inst_34099 = (inst_34065.cljs$core$IFn$_invoke$arity$1 ? inst_34065.cljs$core$IFn$_invoke$arity$1(inst_34074) : inst_34065.call(null,inst_34074));
var inst_34100 = cljs.core.not(inst_34099);
var state_34125__$1 = state_34125;
var statearr_34178_35750 = state_34125__$1;
(statearr_34178_35750[(2)] = inst_34100);

(statearr_34178_35750[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (3))){
var inst_34122 = (state_34125[(2)]);
var state_34125__$1 = state_34125;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34125__$1,inst_34122);
} else {
if((state_val_34126 === (12))){
var state_34125__$1 = state_34125;
var statearr_34183_35752 = state_34125__$1;
(statearr_34183_35752[(2)] = null);

(statearr_34183_35752[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (2))){
var inst_34062 = (state_34125[(12)]);
var inst_34057 = (state_34125[(10)]);
var inst_34062__$1 = cljs.core.__destructure_map(inst_34057);
var inst_34063 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34062__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34065 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34062__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34066 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34062__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34125__$1 = (function (){var statearr_34186 = state_34125;
(statearr_34186[(15)] = inst_34063);

(statearr_34186[(12)] = inst_34062__$1);

(statearr_34186[(18)] = inst_34065);

return statearr_34186;
})();
return cljs.core.async.ioc_alts_BANG_(state_34125__$1,(4),inst_34066);
} else {
if((state_val_34126 === (23))){
var inst_34109 = (state_34125[(2)]);
var state_34125__$1 = state_34125;
if(cljs.core.truth_(inst_34109)){
var statearr_34190_35757 = state_34125__$1;
(statearr_34190_35757[(1)] = (24));

} else {
var statearr_34191_35758 = state_34125__$1;
(statearr_34191_35758[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (19))){
var inst_34104 = (state_34125[(2)]);
var state_34125__$1 = state_34125;
var statearr_34195_35759 = state_34125__$1;
(statearr_34195_35759[(2)] = inst_34104);

(statearr_34195_35759[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (11))){
var inst_34074 = (state_34125[(14)]);
var inst_34085 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_34074);
var state_34125__$1 = state_34125;
var statearr_34197_35760 = state_34125__$1;
(statearr_34197_35760[(2)] = inst_34085);

(statearr_34197_35760[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (9))){
var inst_34063 = (state_34125[(15)]);
var inst_34074 = (state_34125[(14)]);
var inst_34092 = (state_34125[(19)]);
var inst_34092__$1 = (inst_34063.cljs$core$IFn$_invoke$arity$1 ? inst_34063.cljs$core$IFn$_invoke$arity$1(inst_34074) : inst_34063.call(null,inst_34074));
var state_34125__$1 = (function (){var statearr_34201 = state_34125;
(statearr_34201[(19)] = inst_34092__$1);

return statearr_34201;
})();
if(cljs.core.truth_(inst_34092__$1)){
var statearr_34202_35761 = state_34125__$1;
(statearr_34202_35761[(1)] = (14));

} else {
var statearr_34204_35762 = state_34125__$1;
(statearr_34204_35762[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (5))){
var inst_34075 = (state_34125[(13)]);
var state_34125__$1 = state_34125;
var statearr_34205_35763 = state_34125__$1;
(statearr_34205_35763[(2)] = inst_34075);

(statearr_34205_35763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (14))){
var inst_34092 = (state_34125[(19)]);
var state_34125__$1 = state_34125;
var statearr_34210_35764 = state_34125__$1;
(statearr_34210_35764[(2)] = inst_34092);

(statearr_34210_35764[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (26))){
var inst_34114 = (state_34125[(2)]);
var state_34125__$1 = state_34125;
var statearr_34213_35765 = state_34125__$1;
(statearr_34213_35765[(2)] = inst_34114);

(statearr_34213_35765[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (16))){
var inst_34106 = (state_34125[(2)]);
var state_34125__$1 = state_34125;
if(cljs.core.truth_(inst_34106)){
var statearr_34217_35766 = state_34125__$1;
(statearr_34217_35766[(1)] = (20));

} else {
var statearr_34218_35767 = state_34125__$1;
(statearr_34218_35767[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (10))){
var inst_34120 = (state_34125[(2)]);
var state_34125__$1 = state_34125;
var statearr_34222_35768 = state_34125__$1;
(statearr_34222_35768[(2)] = inst_34120);

(statearr_34222_35768[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (18))){
var inst_34097 = (state_34125[(16)]);
var state_34125__$1 = state_34125;
var statearr_34224_35769 = state_34125__$1;
(statearr_34224_35769[(2)] = inst_34097);

(statearr_34224_35769[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (8))){
var inst_34073 = (state_34125[(7)]);
var inst_34083 = (inst_34073 == null);
var state_34125__$1 = state_34125;
if(cljs.core.truth_(inst_34083)){
var statearr_34226_35770 = state_34125__$1;
(statearr_34226_35770[(1)] = (11));

} else {
var statearr_34227_35771 = state_34125__$1;
(statearr_34227_35771[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__32646__auto__ = null;
var cljs$core$async$mix_$_state_machine__32646__auto____0 = (function (){
var statearr_34231 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34231[(0)] = cljs$core$async$mix_$_state_machine__32646__auto__);

(statearr_34231[(1)] = (1));

return statearr_34231;
});
var cljs$core$async$mix_$_state_machine__32646__auto____1 = (function (state_34125){
while(true){
var ret_value__32647__auto__ = (function (){try{while(true){
var result__32648__auto__ = switch__32645__auto__(state_34125);
if(cljs.core.keyword_identical_QMARK_(result__32648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32648__auto__;
}
break;
}
}catch (e34233){var ex__32649__auto__ = e34233;
var statearr_34234_35772 = state_34125;
(statearr_34234_35772[(2)] = ex__32649__auto__);


if(cljs.core.seq((state_34125[(4)]))){
var statearr_34235_35773 = state_34125;
(statearr_34235_35773[(1)] = cljs.core.first((state_34125[(4)])));

} else {
throw ex__32649__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35775 = state_34125;
state_34125 = G__35775;
continue;
} else {
return ret_value__32647__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32646__auto__ = function(state_34125){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32646__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32646__auto____1.call(this,state_34125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32646__auto____0;
cljs$core$async$mix_$_state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32646__auto____1;
return cljs$core$async$mix_$_state_machine__32646__auto__;
})()
})();
var state__32928__auto__ = (function (){var statearr_34240 = f__32927__auto__();
(statearr_34240[(6)] = c__32926__auto___35736);

return statearr_34240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32928__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_35777 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_35777(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_35779 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_35779(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_35781 = (function() {
var G__35783 = null;
var G__35783__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__35783__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__35783 = function(p,v){
switch(arguments.length){
case 1:
return G__35783__1.call(this,p);
case 2:
return G__35783__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35783.cljs$core$IFn$_invoke$arity$1 = G__35783__1;
G__35783.cljs$core$IFn$_invoke$arity$2 = G__35783__2;
return G__35783;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__34267 = arguments.length;
switch (G__34267) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35781(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35781(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__34286 = arguments.length;
switch (G__34286) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__34280_SHARP_){
if(cljs.core.truth_((p1__34280_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__34280_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__34280_SHARP_.call(null,topic)))){
return p1__34280_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__34280_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34292 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34292 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34293){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34293 = meta34293;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34292.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34294,meta34293__$1){
var self__ = this;
var _34294__$1 = this;
return (new cljs.core.async.t_cljs$core$async34292(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34293__$1));
}));

(cljs.core.async.t_cljs$core$async34292.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34294){
var self__ = this;
var _34294__$1 = this;
return self__.meta34293;
}));

(cljs.core.async.t_cljs$core$async34292.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34292.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34292.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34292.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async34292.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async34292.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async34292.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async34292.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34293","meta34293",-23757907,null)], null);
}));

(cljs.core.async.t_cljs$core$async34292.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34292.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34292");

(cljs.core.async.t_cljs$core$async34292.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34292");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34292.
 */
cljs.core.async.__GT_t_cljs$core$async34292 = (function cljs$core$async$__GT_t_cljs$core$async34292(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34293){
return (new cljs.core.async.t_cljs$core$async34292(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34293));
});

}

return (new cljs.core.async.t_cljs$core$async34292(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32926__auto___35794 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32927__auto__ = (function (){var switch__32645__auto__ = (function (state_34395){
var state_val_34396 = (state_34395[(1)]);
if((state_val_34396 === (7))){
var inst_34391 = (state_34395[(2)]);
var state_34395__$1 = state_34395;
var statearr_34401_35795 = state_34395__$1;
(statearr_34401_35795[(2)] = inst_34391);

(statearr_34401_35795[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34396 === (20))){
var state_34395__$1 = state_34395;
var statearr_34402_35796 = state_34395__$1;
(statearr_34402_35796[(2)] = null);

(statearr_34402_35796[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34396 === (1))){
var state_34395__$1 = state_34395;
var statearr_34407_35797 = state_34395__$1;
(statearr_34407_35797[(2)] = null);

(statearr_34407_35797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34396 === (24))){
var inst_34373 = (state_34395[(7)]);
var inst_34383 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_34373);
var state_34395__$1 = state_34395;
var statearr_34408_35798 = state_34395__$1;
(statearr_34408_35798[(2)] = inst_34383);

(statearr_34408_35798[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34396 === (4))){
var inst_34317 = (state_34395[(8)]);
var inst_34317__$1 = (state_34395[(2)]);
var inst_34319 = (inst_34317__$1 == null);
var state_34395__$1 = (function (){var statearr_34409 = state_34395;
(statearr_34409[(8)] = inst_34317__$1);

return statearr_34409;
})();
if(cljs.core.truth_(inst_34319)){
var statearr_34413_35799 = state_34395__$1;
(statearr_34413_35799[(1)] = (5));

} else {
var statearr_34414_35800 = state_34395__$1;
(statearr_34414_35800[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34396 === (15))){
var inst_34364 = (state_34395[(2)]);
var state_34395__$1 = state_34395;
var statearr_34416_35801 = state_34395__$1;
(statearr_34416_35801[(2)] = inst_34364);

(statearr_34416_35801[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34396 === (21))){
var inst_34388 = (state_34395[(2)]);
var state_34395__$1 = (function (){var statearr_34417 = state_34395;
(statearr_34417[(9)] = inst_34388);

return statearr_34417;
})();
var statearr_34418_35802 = state_34395__$1;
(statearr_34418_35802[(2)] = null);

(statearr_34418_35802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34396 === (13))){
var inst_34342 = (state_34395[(10)]);
var inst_34344 = cljs.core.chunked_seq_QMARK_(inst_34342);
var state_34395__$1 = state_34395;
if(inst_34344){
var statearr_34419_35803 = state_34395__$1;
(statearr_34419_35803[(1)] = (16));

} else {
var statearr_34421_35804 = state_34395__$1;
(statearr_34421_35804[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34396 === (22))){
var inst_34380 = (state_34395[(2)]);
var state_34395__$1 = state_34395;
if(cljs.core.truth_(inst_34380)){
var statearr_34422_35805 = state_34395__$1;
(statearr_34422_35805[(1)] = (23));

} else {
var statearr_34423_35806 = state_34395__$1;
(statearr_34423_35806[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34396 === (6))){
var inst_34317 = (state_34395[(8)]);
var inst_34376 = (state_34395[(11)]);
var inst_34373 = (state_34395[(7)]);
var inst_34373__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_34317) : topic_fn.call(null,inst_34317));
var inst_34375 = cljs.core.deref(mults);
var inst_34376__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34375,inst_34373__$1);
var state_34395__$1 = (function (){var statearr_34424 = state_34395;
(statearr_34424[(11)] = inst_34376__$1);

(statearr_34424[(7)] = inst_34373__$1);

return statearr_34424;
})();
if(cljs.core.truth_(inst_34376__$1)){
var statearr_34425_35807 = state_34395__$1;
(statearr_34425_35807[(1)] = (19));

} else {
var statearr_34430_35808 = state_34395__$1;
(statearr_34430_35808[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34396 === (25))){
var inst_34385 = (state_34395[(2)]);
var state_34395__$1 = state_34395;
var statearr_34434_35809 = state_34395__$1;
(statearr_34434_35809[(2)] = inst_34385);

(statearr_34434_35809[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34396 === (17))){
var inst_34342 = (state_34395[(10)]);
var inst_34355 = cljs.core.first(inst_34342);
var inst_34356 = cljs.core.async.muxch_STAR_(inst_34355);
var inst_34357 = cljs.core.async.close_BANG_(inst_34356);
var inst_34358 = cljs.core.next(inst_34342);
var inst_34328 = inst_34358;
var inst_34329 = null;
var inst_34330 = (0);
var inst_34331 = (0);
var state_34395__$1 = (function (){var statearr_34436 = state_34395;
(statearr_34436[(12)] = inst_34328);

(statearr_34436[(13)] = inst_34357);

(statearr_34436[(14)] = inst_34330);

(statearr_34436[(15)] = inst_34329);

(statearr_34436[(16)] = inst_34331);

return statearr_34436;
})();
var statearr_34437_35811 = state_34395__$1;
(statearr_34437_35811[(2)] = null);

(statearr_34437_35811[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34396 === (3))){
var inst_34393 = (state_34395[(2)]);
var state_34395__$1 = state_34395;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34395__$1,inst_34393);
} else {
if((state_val_34396 === (12))){
var inst_34369 = (state_34395[(2)]);
var state_34395__$1 = state_34395;
var statearr_34441_35812 = state_34395__$1;
(statearr_34441_35812[(2)] = inst_34369);

(statearr_34441_35812[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34396 === (2))){
var state_34395__$1 = state_34395;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34395__$1,(4),ch);
} else {
if((state_val_34396 === (23))){
var state_34395__$1 = state_34395;
var statearr_34443_35813 = state_34395__$1;
(statearr_34443_35813[(2)] = null);

(statearr_34443_35813[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34396 === (19))){
var inst_34317 = (state_34395[(8)]);
var inst_34376 = (state_34395[(11)]);
var inst_34378 = cljs.core.async.muxch_STAR_(inst_34376);
var state_34395__$1 = state_34395;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34395__$1,(22),inst_34378,inst_34317);
} else {
if((state_val_34396 === (11))){
var inst_34328 = (state_34395[(12)]);
var inst_34342 = (state_34395[(10)]);
var inst_34342__$1 = cljs.core.seq(inst_34328);
var state_34395__$1 = (function (){var statearr_34448 = state_34395;
(statearr_34448[(10)] = inst_34342__$1);

return statearr_34448;
})();
if(inst_34342__$1){
var statearr_34449_35814 = state_34395__$1;
(statearr_34449_35814[(1)] = (13));

} else {
var statearr_34450_35815 = state_34395__$1;
(statearr_34450_35815[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34396 === (9))){
var inst_34371 = (state_34395[(2)]);
var state_34395__$1 = state_34395;
var statearr_34451_35816 = state_34395__$1;
(statearr_34451_35816[(2)] = inst_34371);

(statearr_34451_35816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34396 === (5))){
var inst_34325 = cljs.core.deref(mults);
var inst_34326 = cljs.core.vals(inst_34325);
var inst_34327 = cljs.core.seq(inst_34326);
var inst_34328 = inst_34327;
var inst_34329 = null;
var inst_34330 = (0);
var inst_34331 = (0);
var state_34395__$1 = (function (){var statearr_34456 = state_34395;
(statearr_34456[(12)] = inst_34328);

(statearr_34456[(14)] = inst_34330);

(statearr_34456[(15)] = inst_34329);

(statearr_34456[(16)] = inst_34331);

return statearr_34456;
})();
var statearr_34457_35817 = state_34395__$1;
(statearr_34457_35817[(2)] = null);

(statearr_34457_35817[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34396 === (14))){
var state_34395__$1 = state_34395;
var statearr_34461_35818 = state_34395__$1;
(statearr_34461_35818[(2)] = null);

(statearr_34461_35818[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34396 === (16))){
var inst_34342 = (state_34395[(10)]);
var inst_34346 = cljs.core.chunk_first(inst_34342);
var inst_34347 = cljs.core.chunk_rest(inst_34342);
var inst_34349 = cljs.core.count(inst_34346);
var inst_34328 = inst_34347;
var inst_34329 = inst_34346;
var inst_34330 = inst_34349;
var inst_34331 = (0);
var state_34395__$1 = (function (){var statearr_34462 = state_34395;
(statearr_34462[(12)] = inst_34328);

(statearr_34462[(14)] = inst_34330);

(statearr_34462[(15)] = inst_34329);

(statearr_34462[(16)] = inst_34331);

return statearr_34462;
})();
var statearr_34463_35823 = state_34395__$1;
(statearr_34463_35823[(2)] = null);

(statearr_34463_35823[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34396 === (10))){
var inst_34328 = (state_34395[(12)]);
var inst_34330 = (state_34395[(14)]);
var inst_34329 = (state_34395[(15)]);
var inst_34331 = (state_34395[(16)]);
var inst_34336 = cljs.core._nth(inst_34329,inst_34331);
var inst_34337 = cljs.core.async.muxch_STAR_(inst_34336);
var inst_34338 = cljs.core.async.close_BANG_(inst_34337);
var inst_34339 = (inst_34331 + (1));
var tmp34458 = inst_34328;
var tmp34459 = inst_34330;
var tmp34460 = inst_34329;
var inst_34328__$1 = tmp34458;
var inst_34329__$1 = tmp34460;
var inst_34330__$1 = tmp34459;
var inst_34331__$1 = inst_34339;
var state_34395__$1 = (function (){var statearr_34464 = state_34395;
(statearr_34464[(17)] = inst_34338);

(statearr_34464[(12)] = inst_34328__$1);

(statearr_34464[(14)] = inst_34330__$1);

(statearr_34464[(15)] = inst_34329__$1);

(statearr_34464[(16)] = inst_34331__$1);

return statearr_34464;
})();
var statearr_34465_35825 = state_34395__$1;
(statearr_34465_35825[(2)] = null);

(statearr_34465_35825[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34396 === (18))){
var inst_34361 = (state_34395[(2)]);
var state_34395__$1 = state_34395;
var statearr_34466_35826 = state_34395__$1;
(statearr_34466_35826[(2)] = inst_34361);

(statearr_34466_35826[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34396 === (8))){
var inst_34330 = (state_34395[(14)]);
var inst_34331 = (state_34395[(16)]);
var inst_34333 = (inst_34331 < inst_34330);
var inst_34334 = inst_34333;
var state_34395__$1 = state_34395;
if(cljs.core.truth_(inst_34334)){
var statearr_34471_35831 = state_34395__$1;
(statearr_34471_35831[(1)] = (10));

} else {
var statearr_34472_35832 = state_34395__$1;
(statearr_34472_35832[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32646__auto__ = null;
var cljs$core$async$state_machine__32646__auto____0 = (function (){
var statearr_34473 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34473[(0)] = cljs$core$async$state_machine__32646__auto__);

(statearr_34473[(1)] = (1));

return statearr_34473;
});
var cljs$core$async$state_machine__32646__auto____1 = (function (state_34395){
while(true){
var ret_value__32647__auto__ = (function (){try{while(true){
var result__32648__auto__ = switch__32645__auto__(state_34395);
if(cljs.core.keyword_identical_QMARK_(result__32648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32648__auto__;
}
break;
}
}catch (e34475){var ex__32649__auto__ = e34475;
var statearr_34476_35833 = state_34395;
(statearr_34476_35833[(2)] = ex__32649__auto__);


if(cljs.core.seq((state_34395[(4)]))){
var statearr_34477_35838 = state_34395;
(statearr_34477_35838[(1)] = cljs.core.first((state_34395[(4)])));

} else {
throw ex__32649__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35839 = state_34395;
state_34395 = G__35839;
continue;
} else {
return ret_value__32647__auto__;
}
break;
}
});
cljs$core$async$state_machine__32646__auto__ = function(state_34395){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32646__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32646__auto____1.call(this,state_34395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32646__auto____0;
cljs$core$async$state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32646__auto____1;
return cljs$core$async$state_machine__32646__auto__;
})()
})();
var state__32928__auto__ = (function (){var statearr_34478 = f__32927__auto__();
(statearr_34478[(6)] = c__32926__auto___35794);

return statearr_34478;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32928__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__34480 = arguments.length;
switch (G__34480) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__34484 = arguments.length;
switch (G__34484) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__34486 = arguments.length;
switch (G__34486) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__32926__auto___35843 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32927__auto__ = (function (){var switch__32645__auto__ = (function (state_34529){
var state_val_34530 = (state_34529[(1)]);
if((state_val_34530 === (7))){
var state_34529__$1 = state_34529;
var statearr_34531_35844 = state_34529__$1;
(statearr_34531_35844[(2)] = null);

(statearr_34531_35844[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34530 === (1))){
var state_34529__$1 = state_34529;
var statearr_34532_35845 = state_34529__$1;
(statearr_34532_35845[(2)] = null);

(statearr_34532_35845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34530 === (4))){
var inst_34490 = (state_34529[(7)]);
var inst_34489 = (state_34529[(8)]);
var inst_34492 = (inst_34490 < inst_34489);
var state_34529__$1 = state_34529;
if(cljs.core.truth_(inst_34492)){
var statearr_34534_35846 = state_34529__$1;
(statearr_34534_35846[(1)] = (6));

} else {
var statearr_34536_35847 = state_34529__$1;
(statearr_34536_35847[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34530 === (15))){
var inst_34515 = (state_34529[(9)]);
var inst_34520 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_34515);
var state_34529__$1 = state_34529;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34529__$1,(17),out,inst_34520);
} else {
if((state_val_34530 === (13))){
var inst_34515 = (state_34529[(9)]);
var inst_34515__$1 = (state_34529[(2)]);
var inst_34516 = cljs.core.some(cljs.core.nil_QMARK_,inst_34515__$1);
var state_34529__$1 = (function (){var statearr_34537 = state_34529;
(statearr_34537[(9)] = inst_34515__$1);

return statearr_34537;
})();
if(cljs.core.truth_(inst_34516)){
var statearr_34538_35849 = state_34529__$1;
(statearr_34538_35849[(1)] = (14));

} else {
var statearr_34539_35850 = state_34529__$1;
(statearr_34539_35850[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34530 === (6))){
var state_34529__$1 = state_34529;
var statearr_34540_35852 = state_34529__$1;
(statearr_34540_35852[(2)] = null);

(statearr_34540_35852[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34530 === (17))){
var inst_34522 = (state_34529[(2)]);
var state_34529__$1 = (function (){var statearr_34543 = state_34529;
(statearr_34543[(10)] = inst_34522);

return statearr_34543;
})();
var statearr_34545_35857 = state_34529__$1;
(statearr_34545_35857[(2)] = null);

(statearr_34545_35857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34530 === (3))){
var inst_34527 = (state_34529[(2)]);
var state_34529__$1 = state_34529;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34529__$1,inst_34527);
} else {
if((state_val_34530 === (12))){
var _ = (function (){var statearr_34546 = state_34529;
(statearr_34546[(4)] = cljs.core.rest((state_34529[(4)])));

return statearr_34546;
})();
var state_34529__$1 = state_34529;
var ex34541 = (state_34529__$1[(2)]);
var statearr_34547_35861 = state_34529__$1;
(statearr_34547_35861[(5)] = ex34541);


if((ex34541 instanceof Object)){
var statearr_34548_35862 = state_34529__$1;
(statearr_34548_35862[(1)] = (11));

(statearr_34548_35862[(5)] = null);

} else {
throw ex34541;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34530 === (2))){
var inst_34488 = cljs.core.reset_BANG_(dctr,cnt);
var inst_34489 = cnt;
var inst_34490 = (0);
var state_34529__$1 = (function (){var statearr_34551 = state_34529;
(statearr_34551[(7)] = inst_34490);

(statearr_34551[(11)] = inst_34488);

(statearr_34551[(8)] = inst_34489);

return statearr_34551;
})();
var statearr_34552_35863 = state_34529__$1;
(statearr_34552_35863[(2)] = null);

(statearr_34552_35863[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34530 === (11))){
var inst_34494 = (state_34529[(2)]);
var inst_34495 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_34529__$1 = (function (){var statearr_34553 = state_34529;
(statearr_34553[(12)] = inst_34494);

return statearr_34553;
})();
var statearr_34554_35867 = state_34529__$1;
(statearr_34554_35867[(2)] = inst_34495);

(statearr_34554_35867[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34530 === (9))){
var inst_34490 = (state_34529[(7)]);
var _ = (function (){var statearr_34555 = state_34529;
(statearr_34555[(4)] = cljs.core.cons((12),(state_34529[(4)])));

return statearr_34555;
})();
var inst_34501 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_34490) : chs__$1.call(null,inst_34490));
var inst_34502 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_34490) : done.call(null,inst_34490));
var inst_34503 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_34501,inst_34502);
var ___$1 = (function (){var statearr_34556 = state_34529;
(statearr_34556[(4)] = cljs.core.rest((state_34529[(4)])));

return statearr_34556;
})();
var state_34529__$1 = state_34529;
var statearr_34557_35871 = state_34529__$1;
(statearr_34557_35871[(2)] = inst_34503);

(statearr_34557_35871[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34530 === (5))){
var inst_34513 = (state_34529[(2)]);
var state_34529__$1 = (function (){var statearr_34558 = state_34529;
(statearr_34558[(13)] = inst_34513);

return statearr_34558;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34529__$1,(13),dchan);
} else {
if((state_val_34530 === (14))){
var inst_34518 = cljs.core.async.close_BANG_(out);
var state_34529__$1 = state_34529;
var statearr_34559_35872 = state_34529__$1;
(statearr_34559_35872[(2)] = inst_34518);

(statearr_34559_35872[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34530 === (16))){
var inst_34525 = (state_34529[(2)]);
var state_34529__$1 = state_34529;
var statearr_34560_35876 = state_34529__$1;
(statearr_34560_35876[(2)] = inst_34525);

(statearr_34560_35876[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34530 === (10))){
var inst_34490 = (state_34529[(7)]);
var inst_34506 = (state_34529[(2)]);
var inst_34507 = (inst_34490 + (1));
var inst_34490__$1 = inst_34507;
var state_34529__$1 = (function (){var statearr_34561 = state_34529;
(statearr_34561[(14)] = inst_34506);

(statearr_34561[(7)] = inst_34490__$1);

return statearr_34561;
})();
var statearr_34562_35877 = state_34529__$1;
(statearr_34562_35877[(2)] = null);

(statearr_34562_35877[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34530 === (8))){
var inst_34511 = (state_34529[(2)]);
var state_34529__$1 = state_34529;
var statearr_34563_35879 = state_34529__$1;
(statearr_34563_35879[(2)] = inst_34511);

(statearr_34563_35879[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32646__auto__ = null;
var cljs$core$async$state_machine__32646__auto____0 = (function (){
var statearr_34564 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34564[(0)] = cljs$core$async$state_machine__32646__auto__);

(statearr_34564[(1)] = (1));

return statearr_34564;
});
var cljs$core$async$state_machine__32646__auto____1 = (function (state_34529){
while(true){
var ret_value__32647__auto__ = (function (){try{while(true){
var result__32648__auto__ = switch__32645__auto__(state_34529);
if(cljs.core.keyword_identical_QMARK_(result__32648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32648__auto__;
}
break;
}
}catch (e34565){var ex__32649__auto__ = e34565;
var statearr_34566_35883 = state_34529;
(statearr_34566_35883[(2)] = ex__32649__auto__);


if(cljs.core.seq((state_34529[(4)]))){
var statearr_34567_35884 = state_34529;
(statearr_34567_35884[(1)] = cljs.core.first((state_34529[(4)])));

} else {
throw ex__32649__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35885 = state_34529;
state_34529 = G__35885;
continue;
} else {
return ret_value__32647__auto__;
}
break;
}
});
cljs$core$async$state_machine__32646__auto__ = function(state_34529){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32646__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32646__auto____1.call(this,state_34529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32646__auto____0;
cljs$core$async$state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32646__auto____1;
return cljs$core$async$state_machine__32646__auto__;
})()
})();
var state__32928__auto__ = (function (){var statearr_34568 = f__32927__auto__();
(statearr_34568[(6)] = c__32926__auto___35843);

return statearr_34568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32928__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__34573 = arguments.length;
switch (G__34573) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32926__auto___35887 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32927__auto__ = (function (){var switch__32645__auto__ = (function (state_34611){
var state_val_34612 = (state_34611[(1)]);
if((state_val_34612 === (7))){
var inst_34588 = (state_34611[(7)]);
var inst_34589 = (state_34611[(8)]);
var inst_34588__$1 = (state_34611[(2)]);
var inst_34589__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34588__$1,(0),null);
var inst_34590 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34588__$1,(1),null);
var inst_34591 = (inst_34589__$1 == null);
var state_34611__$1 = (function (){var statearr_34616 = state_34611;
(statearr_34616[(7)] = inst_34588__$1);

(statearr_34616[(9)] = inst_34590);

(statearr_34616[(8)] = inst_34589__$1);

return statearr_34616;
})();
if(cljs.core.truth_(inst_34591)){
var statearr_34617_35888 = state_34611__$1;
(statearr_34617_35888[(1)] = (8));

} else {
var statearr_34618_35889 = state_34611__$1;
(statearr_34618_35889[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (1))){
var inst_34578 = cljs.core.vec(chs);
var inst_34579 = inst_34578;
var state_34611__$1 = (function (){var statearr_34619 = state_34611;
(statearr_34619[(10)] = inst_34579);

return statearr_34619;
})();
var statearr_34620_35891 = state_34611__$1;
(statearr_34620_35891[(2)] = null);

(statearr_34620_35891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (4))){
var inst_34579 = (state_34611[(10)]);
var state_34611__$1 = state_34611;
return cljs.core.async.ioc_alts_BANG_(state_34611__$1,(7),inst_34579);
} else {
if((state_val_34612 === (6))){
var inst_34606 = (state_34611[(2)]);
var state_34611__$1 = state_34611;
var statearr_34624_35893 = state_34611__$1;
(statearr_34624_35893[(2)] = inst_34606);

(statearr_34624_35893[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (3))){
var inst_34608 = (state_34611[(2)]);
var state_34611__$1 = state_34611;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34611__$1,inst_34608);
} else {
if((state_val_34612 === (2))){
var inst_34579 = (state_34611[(10)]);
var inst_34581 = cljs.core.count(inst_34579);
var inst_34582 = (inst_34581 > (0));
var state_34611__$1 = state_34611;
if(cljs.core.truth_(inst_34582)){
var statearr_34626_35894 = state_34611__$1;
(statearr_34626_35894[(1)] = (4));

} else {
var statearr_34627_35895 = state_34611__$1;
(statearr_34627_35895[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (11))){
var inst_34579 = (state_34611[(10)]);
var inst_34599 = (state_34611[(2)]);
var tmp34625 = inst_34579;
var inst_34579__$1 = tmp34625;
var state_34611__$1 = (function (){var statearr_34628 = state_34611;
(statearr_34628[(10)] = inst_34579__$1);

(statearr_34628[(11)] = inst_34599);

return statearr_34628;
})();
var statearr_34629_35896 = state_34611__$1;
(statearr_34629_35896[(2)] = null);

(statearr_34629_35896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (9))){
var inst_34589 = (state_34611[(8)]);
var state_34611__$1 = state_34611;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34611__$1,(11),out,inst_34589);
} else {
if((state_val_34612 === (5))){
var inst_34604 = cljs.core.async.close_BANG_(out);
var state_34611__$1 = state_34611;
var statearr_34630_35897 = state_34611__$1;
(statearr_34630_35897[(2)] = inst_34604);

(statearr_34630_35897[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (10))){
var inst_34602 = (state_34611[(2)]);
var state_34611__$1 = state_34611;
var statearr_34637_35898 = state_34611__$1;
(statearr_34637_35898[(2)] = inst_34602);

(statearr_34637_35898[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (8))){
var inst_34588 = (state_34611[(7)]);
var inst_34579 = (state_34611[(10)]);
var inst_34590 = (state_34611[(9)]);
var inst_34589 = (state_34611[(8)]);
var inst_34594 = (function (){var cs = inst_34579;
var vec__34584 = inst_34588;
var v = inst_34589;
var c = inst_34590;
return (function (p1__34571_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__34571_SHARP_);
});
})();
var inst_34595 = cljs.core.filterv(inst_34594,inst_34579);
var inst_34579__$1 = inst_34595;
var state_34611__$1 = (function (){var statearr_34651 = state_34611;
(statearr_34651[(10)] = inst_34579__$1);

return statearr_34651;
})();
var statearr_34652_35903 = state_34611__$1;
(statearr_34652_35903[(2)] = null);

(statearr_34652_35903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32646__auto__ = null;
var cljs$core$async$state_machine__32646__auto____0 = (function (){
var statearr_34653 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34653[(0)] = cljs$core$async$state_machine__32646__auto__);

(statearr_34653[(1)] = (1));

return statearr_34653;
});
var cljs$core$async$state_machine__32646__auto____1 = (function (state_34611){
while(true){
var ret_value__32647__auto__ = (function (){try{while(true){
var result__32648__auto__ = switch__32645__auto__(state_34611);
if(cljs.core.keyword_identical_QMARK_(result__32648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32648__auto__;
}
break;
}
}catch (e34654){var ex__32649__auto__ = e34654;
var statearr_34655_35904 = state_34611;
(statearr_34655_35904[(2)] = ex__32649__auto__);


if(cljs.core.seq((state_34611[(4)]))){
var statearr_34656_35905 = state_34611;
(statearr_34656_35905[(1)] = cljs.core.first((state_34611[(4)])));

} else {
throw ex__32649__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35906 = state_34611;
state_34611 = G__35906;
continue;
} else {
return ret_value__32647__auto__;
}
break;
}
});
cljs$core$async$state_machine__32646__auto__ = function(state_34611){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32646__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32646__auto____1.call(this,state_34611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32646__auto____0;
cljs$core$async$state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32646__auto____1;
return cljs$core$async$state_machine__32646__auto__;
})()
})();
var state__32928__auto__ = (function (){var statearr_34664 = f__32927__auto__();
(statearr_34664[(6)] = c__32926__auto___35887);

return statearr_34664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32928__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__34672 = arguments.length;
switch (G__34672) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32926__auto___35911 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32927__auto__ = (function (){var switch__32645__auto__ = (function (state_34700){
var state_val_34701 = (state_34700[(1)]);
if((state_val_34701 === (7))){
var inst_34678 = (state_34700[(7)]);
var inst_34678__$1 = (state_34700[(2)]);
var inst_34679 = (inst_34678__$1 == null);
var inst_34680 = cljs.core.not(inst_34679);
var state_34700__$1 = (function (){var statearr_34702 = state_34700;
(statearr_34702[(7)] = inst_34678__$1);

return statearr_34702;
})();
if(inst_34680){
var statearr_34703_35912 = state_34700__$1;
(statearr_34703_35912[(1)] = (8));

} else {
var statearr_34704_35913 = state_34700__$1;
(statearr_34704_35913[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34701 === (1))){
var inst_34673 = (0);
var state_34700__$1 = (function (){var statearr_34705 = state_34700;
(statearr_34705[(8)] = inst_34673);

return statearr_34705;
})();
var statearr_34706_35914 = state_34700__$1;
(statearr_34706_35914[(2)] = null);

(statearr_34706_35914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34701 === (4))){
var state_34700__$1 = state_34700;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34700__$1,(7),ch);
} else {
if((state_val_34701 === (6))){
var inst_34692 = (state_34700[(2)]);
var state_34700__$1 = state_34700;
var statearr_34707_35915 = state_34700__$1;
(statearr_34707_35915[(2)] = inst_34692);

(statearr_34707_35915[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34701 === (3))){
var inst_34694 = (state_34700[(2)]);
var inst_34695 = cljs.core.async.close_BANG_(out);
var state_34700__$1 = (function (){var statearr_34708 = state_34700;
(statearr_34708[(9)] = inst_34694);

return statearr_34708;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34700__$1,inst_34695);
} else {
if((state_val_34701 === (2))){
var inst_34673 = (state_34700[(8)]);
var inst_34675 = (inst_34673 < n);
var state_34700__$1 = state_34700;
if(cljs.core.truth_(inst_34675)){
var statearr_34709_35916 = state_34700__$1;
(statearr_34709_35916[(1)] = (4));

} else {
var statearr_34714_35917 = state_34700__$1;
(statearr_34714_35917[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34701 === (11))){
var inst_34673 = (state_34700[(8)]);
var inst_34683 = (state_34700[(2)]);
var inst_34684 = (inst_34673 + (1));
var inst_34673__$1 = inst_34684;
var state_34700__$1 = (function (){var statearr_34715 = state_34700;
(statearr_34715[(10)] = inst_34683);

(statearr_34715[(8)] = inst_34673__$1);

return statearr_34715;
})();
var statearr_34716_35918 = state_34700__$1;
(statearr_34716_35918[(2)] = null);

(statearr_34716_35918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34701 === (9))){
var state_34700__$1 = state_34700;
var statearr_34717_35919 = state_34700__$1;
(statearr_34717_35919[(2)] = null);

(statearr_34717_35919[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34701 === (5))){
var state_34700__$1 = state_34700;
var statearr_34720_35920 = state_34700__$1;
(statearr_34720_35920[(2)] = null);

(statearr_34720_35920[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34701 === (10))){
var inst_34689 = (state_34700[(2)]);
var state_34700__$1 = state_34700;
var statearr_34721_35921 = state_34700__$1;
(statearr_34721_35921[(2)] = inst_34689);

(statearr_34721_35921[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34701 === (8))){
var inst_34678 = (state_34700[(7)]);
var state_34700__$1 = state_34700;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34700__$1,(11),out,inst_34678);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32646__auto__ = null;
var cljs$core$async$state_machine__32646__auto____0 = (function (){
var statearr_34723 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34723[(0)] = cljs$core$async$state_machine__32646__auto__);

(statearr_34723[(1)] = (1));

return statearr_34723;
});
var cljs$core$async$state_machine__32646__auto____1 = (function (state_34700){
while(true){
var ret_value__32647__auto__ = (function (){try{while(true){
var result__32648__auto__ = switch__32645__auto__(state_34700);
if(cljs.core.keyword_identical_QMARK_(result__32648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32648__auto__;
}
break;
}
}catch (e34725){var ex__32649__auto__ = e34725;
var statearr_34726_35922 = state_34700;
(statearr_34726_35922[(2)] = ex__32649__auto__);


if(cljs.core.seq((state_34700[(4)]))){
var statearr_34727_35923 = state_34700;
(statearr_34727_35923[(1)] = cljs.core.first((state_34700[(4)])));

} else {
throw ex__32649__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35924 = state_34700;
state_34700 = G__35924;
continue;
} else {
return ret_value__32647__auto__;
}
break;
}
});
cljs$core$async$state_machine__32646__auto__ = function(state_34700){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32646__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32646__auto____1.call(this,state_34700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32646__auto____0;
cljs$core$async$state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32646__auto____1;
return cljs$core$async$state_machine__32646__auto__;
})()
})();
var state__32928__auto__ = (function (){var statearr_34728 = f__32927__auto__();
(statearr_34728[(6)] = c__32926__auto___35911);

return statearr_34728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32928__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34730 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34730 = (function (f,ch,meta34731){
this.f = f;
this.ch = ch;
this.meta34731 = meta34731;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34730.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34732,meta34731__$1){
var self__ = this;
var _34732__$1 = this;
return (new cljs.core.async.t_cljs$core$async34730(self__.f,self__.ch,meta34731__$1));
}));

(cljs.core.async.t_cljs$core$async34730.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34732){
var self__ = this;
var _34732__$1 = this;
return self__.meta34731;
}));

(cljs.core.async.t_cljs$core$async34730.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34730.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34730.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34730.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34730.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34736 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34736 = (function (f,ch,meta34731,_,fn1,meta34737){
this.f = f;
this.ch = ch;
this.meta34731 = meta34731;
this._ = _;
this.fn1 = fn1;
this.meta34737 = meta34737;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34736.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34738,meta34737__$1){
var self__ = this;
var _34738__$1 = this;
return (new cljs.core.async.t_cljs$core$async34736(self__.f,self__.ch,self__.meta34731,self__._,self__.fn1,meta34737__$1));
}));

(cljs.core.async.t_cljs$core$async34736.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34738){
var self__ = this;
var _34738__$1 = this;
return self__.meta34737;
}));

(cljs.core.async.t_cljs$core$async34736.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34736.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async34736.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34736.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__34729_SHARP_){
var G__34743 = (((p1__34729_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__34729_SHARP_) : self__.f.call(null,p1__34729_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__34743) : f1.call(null,G__34743));
});
}));

(cljs.core.async.t_cljs$core$async34736.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34731","meta34731",-543862215,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34730","cljs.core.async/t_cljs$core$async34730",-220904077,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34737","meta34737",876031124,null)], null);
}));

(cljs.core.async.t_cljs$core$async34736.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34736.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34736");

(cljs.core.async.t_cljs$core$async34736.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34736");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34736.
 */
cljs.core.async.__GT_t_cljs$core$async34736 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34736(f__$1,ch__$1,meta34731__$1,___$2,fn1__$1,meta34737){
return (new cljs.core.async.t_cljs$core$async34736(f__$1,ch__$1,meta34731__$1,___$2,fn1__$1,meta34737));
});

}

return (new cljs.core.async.t_cljs$core$async34736(self__.f,self__.ch,self__.meta34731,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__34744 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34744) : self__.f.call(null,G__34744));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async34730.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34730.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async34730.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34731","meta34731",-543862215,null)], null);
}));

(cljs.core.async.t_cljs$core$async34730.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34730.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34730");

(cljs.core.async.t_cljs$core$async34730.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34730");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34730.
 */
cljs.core.async.__GT_t_cljs$core$async34730 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34730(f__$1,ch__$1,meta34731){
return (new cljs.core.async.t_cljs$core$async34730(f__$1,ch__$1,meta34731));
});

}

return (new cljs.core.async.t_cljs$core$async34730(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34752 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34752 = (function (f,ch,meta34753){
this.f = f;
this.ch = ch;
this.meta34753 = meta34753;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34752.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34754,meta34753__$1){
var self__ = this;
var _34754__$1 = this;
return (new cljs.core.async.t_cljs$core$async34752(self__.f,self__.ch,meta34753__$1));
}));

(cljs.core.async.t_cljs$core$async34752.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34754){
var self__ = this;
var _34754__$1 = this;
return self__.meta34753;
}));

(cljs.core.async.t_cljs$core$async34752.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34752.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34752.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34752.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34752.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34752.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async34752.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34753","meta34753",-1589338998,null)], null);
}));

(cljs.core.async.t_cljs$core$async34752.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34752.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34752");

(cljs.core.async.t_cljs$core$async34752.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34752");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34752.
 */
cljs.core.async.__GT_t_cljs$core$async34752 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34752(f__$1,ch__$1,meta34753){
return (new cljs.core.async.t_cljs$core$async34752(f__$1,ch__$1,meta34753));
});

}

return (new cljs.core.async.t_cljs$core$async34752(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34760 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34760 = (function (p,ch,meta34761){
this.p = p;
this.ch = ch;
this.meta34761 = meta34761;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34760.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34762,meta34761__$1){
var self__ = this;
var _34762__$1 = this;
return (new cljs.core.async.t_cljs$core$async34760(self__.p,self__.ch,meta34761__$1));
}));

(cljs.core.async.t_cljs$core$async34760.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34762){
var self__ = this;
var _34762__$1 = this;
return self__.meta34761;
}));

(cljs.core.async.t_cljs$core$async34760.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34760.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34760.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34760.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34760.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34760.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34760.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async34760.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34761","meta34761",-1018244246,null)], null);
}));

(cljs.core.async.t_cljs$core$async34760.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34760.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34760");

(cljs.core.async.t_cljs$core$async34760.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34760");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34760.
 */
cljs.core.async.__GT_t_cljs$core$async34760 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34760(p__$1,ch__$1,meta34761){
return (new cljs.core.async.t_cljs$core$async34760(p__$1,ch__$1,meta34761));
});

}

return (new cljs.core.async.t_cljs$core$async34760(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__34772 = arguments.length;
switch (G__34772) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32926__auto___35944 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32927__auto__ = (function (){var switch__32645__auto__ = (function (state_34795){
var state_val_34796 = (state_34795[(1)]);
if((state_val_34796 === (7))){
var inst_34790 = (state_34795[(2)]);
var state_34795__$1 = state_34795;
var statearr_34797_35945 = state_34795__$1;
(statearr_34797_35945[(2)] = inst_34790);

(statearr_34797_35945[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34796 === (1))){
var state_34795__$1 = state_34795;
var statearr_34798_35946 = state_34795__$1;
(statearr_34798_35946[(2)] = null);

(statearr_34798_35946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34796 === (4))){
var inst_34775 = (state_34795[(7)]);
var inst_34775__$1 = (state_34795[(2)]);
var inst_34777 = (inst_34775__$1 == null);
var state_34795__$1 = (function (){var statearr_34799 = state_34795;
(statearr_34799[(7)] = inst_34775__$1);

return statearr_34799;
})();
if(cljs.core.truth_(inst_34777)){
var statearr_34800_35947 = state_34795__$1;
(statearr_34800_35947[(1)] = (5));

} else {
var statearr_34801_35948 = state_34795__$1;
(statearr_34801_35948[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34796 === (6))){
var inst_34775 = (state_34795[(7)]);
var inst_34781 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34775) : p.call(null,inst_34775));
var state_34795__$1 = state_34795;
if(cljs.core.truth_(inst_34781)){
var statearr_34805_35949 = state_34795__$1;
(statearr_34805_35949[(1)] = (8));

} else {
var statearr_34806_35950 = state_34795__$1;
(statearr_34806_35950[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34796 === (3))){
var inst_34792 = (state_34795[(2)]);
var state_34795__$1 = state_34795;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34795__$1,inst_34792);
} else {
if((state_val_34796 === (2))){
var state_34795__$1 = state_34795;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34795__$1,(4),ch);
} else {
if((state_val_34796 === (11))){
var inst_34784 = (state_34795[(2)]);
var state_34795__$1 = state_34795;
var statearr_34807_35951 = state_34795__$1;
(statearr_34807_35951[(2)] = inst_34784);

(statearr_34807_35951[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34796 === (9))){
var state_34795__$1 = state_34795;
var statearr_34808_35952 = state_34795__$1;
(statearr_34808_35952[(2)] = null);

(statearr_34808_35952[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34796 === (5))){
var inst_34779 = cljs.core.async.close_BANG_(out);
var state_34795__$1 = state_34795;
var statearr_34809_35953 = state_34795__$1;
(statearr_34809_35953[(2)] = inst_34779);

(statearr_34809_35953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34796 === (10))){
var inst_34787 = (state_34795[(2)]);
var state_34795__$1 = (function (){var statearr_34810 = state_34795;
(statearr_34810[(8)] = inst_34787);

return statearr_34810;
})();
var statearr_34811_35954 = state_34795__$1;
(statearr_34811_35954[(2)] = null);

(statearr_34811_35954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34796 === (8))){
var inst_34775 = (state_34795[(7)]);
var state_34795__$1 = state_34795;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34795__$1,(11),out,inst_34775);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32646__auto__ = null;
var cljs$core$async$state_machine__32646__auto____0 = (function (){
var statearr_34812 = [null,null,null,null,null,null,null,null,null];
(statearr_34812[(0)] = cljs$core$async$state_machine__32646__auto__);

(statearr_34812[(1)] = (1));

return statearr_34812;
});
var cljs$core$async$state_machine__32646__auto____1 = (function (state_34795){
while(true){
var ret_value__32647__auto__ = (function (){try{while(true){
var result__32648__auto__ = switch__32645__auto__(state_34795);
if(cljs.core.keyword_identical_QMARK_(result__32648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32648__auto__;
}
break;
}
}catch (e34813){var ex__32649__auto__ = e34813;
var statearr_34814_35955 = state_34795;
(statearr_34814_35955[(2)] = ex__32649__auto__);


if(cljs.core.seq((state_34795[(4)]))){
var statearr_34815_35956 = state_34795;
(statearr_34815_35956[(1)] = cljs.core.first((state_34795[(4)])));

} else {
throw ex__32649__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35957 = state_34795;
state_34795 = G__35957;
continue;
} else {
return ret_value__32647__auto__;
}
break;
}
});
cljs$core$async$state_machine__32646__auto__ = function(state_34795){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32646__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32646__auto____1.call(this,state_34795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32646__auto____0;
cljs$core$async$state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32646__auto____1;
return cljs$core$async$state_machine__32646__auto__;
})()
})();
var state__32928__auto__ = (function (){var statearr_34816 = f__32927__auto__();
(statearr_34816[(6)] = c__32926__auto___35944);

return statearr_34816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32928__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34818 = arguments.length;
switch (G__34818) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__32926__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32927__auto__ = (function (){var switch__32645__auto__ = (function (state_34880){
var state_val_34881 = (state_34880[(1)]);
if((state_val_34881 === (7))){
var inst_34876 = (state_34880[(2)]);
var state_34880__$1 = state_34880;
var statearr_34882_35961 = state_34880__$1;
(statearr_34882_35961[(2)] = inst_34876);

(statearr_34882_35961[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34881 === (20))){
var inst_34846 = (state_34880[(7)]);
var inst_34857 = (state_34880[(2)]);
var inst_34858 = cljs.core.next(inst_34846);
var inst_34832 = inst_34858;
var inst_34833 = null;
var inst_34834 = (0);
var inst_34835 = (0);
var state_34880__$1 = (function (){var statearr_34883 = state_34880;
(statearr_34883[(8)] = inst_34857);

(statearr_34883[(9)] = inst_34835);

(statearr_34883[(10)] = inst_34833);

(statearr_34883[(11)] = inst_34834);

(statearr_34883[(12)] = inst_34832);

return statearr_34883;
})();
var statearr_34884_35963 = state_34880__$1;
(statearr_34884_35963[(2)] = null);

(statearr_34884_35963[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34881 === (1))){
var state_34880__$1 = state_34880;
var statearr_34885_35965 = state_34880__$1;
(statearr_34885_35965[(2)] = null);

(statearr_34885_35965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34881 === (4))){
var inst_34821 = (state_34880[(13)]);
var inst_34821__$1 = (state_34880[(2)]);
var inst_34822 = (inst_34821__$1 == null);
var state_34880__$1 = (function (){var statearr_34886 = state_34880;
(statearr_34886[(13)] = inst_34821__$1);

return statearr_34886;
})();
if(cljs.core.truth_(inst_34822)){
var statearr_34887_35966 = state_34880__$1;
(statearr_34887_35966[(1)] = (5));

} else {
var statearr_34888_35967 = state_34880__$1;
(statearr_34888_35967[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34881 === (15))){
var state_34880__$1 = state_34880;
var statearr_34892_35971 = state_34880__$1;
(statearr_34892_35971[(2)] = null);

(statearr_34892_35971[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34881 === (21))){
var state_34880__$1 = state_34880;
var statearr_34893_35972 = state_34880__$1;
(statearr_34893_35972[(2)] = null);

(statearr_34893_35972[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34881 === (13))){
var inst_34835 = (state_34880[(9)]);
var inst_34833 = (state_34880[(10)]);
var inst_34834 = (state_34880[(11)]);
var inst_34832 = (state_34880[(12)]);
var inst_34842 = (state_34880[(2)]);
var inst_34843 = (inst_34835 + (1));
var tmp34889 = inst_34833;
var tmp34890 = inst_34834;
var tmp34891 = inst_34832;
var inst_34832__$1 = tmp34891;
var inst_34833__$1 = tmp34889;
var inst_34834__$1 = tmp34890;
var inst_34835__$1 = inst_34843;
var state_34880__$1 = (function (){var statearr_34895 = state_34880;
(statearr_34895[(9)] = inst_34835__$1);

(statearr_34895[(10)] = inst_34833__$1);

(statearr_34895[(11)] = inst_34834__$1);

(statearr_34895[(12)] = inst_34832__$1);

(statearr_34895[(14)] = inst_34842);

return statearr_34895;
})();
var statearr_34896_35973 = state_34880__$1;
(statearr_34896_35973[(2)] = null);

(statearr_34896_35973[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34881 === (22))){
var state_34880__$1 = state_34880;
var statearr_34897_35974 = state_34880__$1;
(statearr_34897_35974[(2)] = null);

(statearr_34897_35974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34881 === (6))){
var inst_34821 = (state_34880[(13)]);
var inst_34830 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34821) : f.call(null,inst_34821));
var inst_34831 = cljs.core.seq(inst_34830);
var inst_34832 = inst_34831;
var inst_34833 = null;
var inst_34834 = (0);
var inst_34835 = (0);
var state_34880__$1 = (function (){var statearr_34898 = state_34880;
(statearr_34898[(9)] = inst_34835);

(statearr_34898[(10)] = inst_34833);

(statearr_34898[(11)] = inst_34834);

(statearr_34898[(12)] = inst_34832);

return statearr_34898;
})();
var statearr_34899_35975 = state_34880__$1;
(statearr_34899_35975[(2)] = null);

(statearr_34899_35975[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34881 === (17))){
var inst_34846 = (state_34880[(7)]);
var inst_34850 = cljs.core.chunk_first(inst_34846);
var inst_34851 = cljs.core.chunk_rest(inst_34846);
var inst_34852 = cljs.core.count(inst_34850);
var inst_34832 = inst_34851;
var inst_34833 = inst_34850;
var inst_34834 = inst_34852;
var inst_34835 = (0);
var state_34880__$1 = (function (){var statearr_34900 = state_34880;
(statearr_34900[(9)] = inst_34835);

(statearr_34900[(10)] = inst_34833);

(statearr_34900[(11)] = inst_34834);

(statearr_34900[(12)] = inst_34832);

return statearr_34900;
})();
var statearr_34901_35976 = state_34880__$1;
(statearr_34901_35976[(2)] = null);

(statearr_34901_35976[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34881 === (3))){
var inst_34878 = (state_34880[(2)]);
var state_34880__$1 = state_34880;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34880__$1,inst_34878);
} else {
if((state_val_34881 === (12))){
var inst_34866 = (state_34880[(2)]);
var state_34880__$1 = state_34880;
var statearr_34902_35977 = state_34880__$1;
(statearr_34902_35977[(2)] = inst_34866);

(statearr_34902_35977[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34881 === (2))){
var state_34880__$1 = state_34880;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34880__$1,(4),in$);
} else {
if((state_val_34881 === (23))){
var inst_34874 = (state_34880[(2)]);
var state_34880__$1 = state_34880;
var statearr_34906_35978 = state_34880__$1;
(statearr_34906_35978[(2)] = inst_34874);

(statearr_34906_35978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34881 === (19))){
var inst_34861 = (state_34880[(2)]);
var state_34880__$1 = state_34880;
var statearr_34907_35979 = state_34880__$1;
(statearr_34907_35979[(2)] = inst_34861);

(statearr_34907_35979[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34881 === (11))){
var inst_34846 = (state_34880[(7)]);
var inst_34832 = (state_34880[(12)]);
var inst_34846__$1 = cljs.core.seq(inst_34832);
var state_34880__$1 = (function (){var statearr_34908 = state_34880;
(statearr_34908[(7)] = inst_34846__$1);

return statearr_34908;
})();
if(inst_34846__$1){
var statearr_34909_35980 = state_34880__$1;
(statearr_34909_35980[(1)] = (14));

} else {
var statearr_34910_35981 = state_34880__$1;
(statearr_34910_35981[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34881 === (9))){
var inst_34868 = (state_34880[(2)]);
var inst_34869 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34880__$1 = (function (){var statearr_34911 = state_34880;
(statearr_34911[(15)] = inst_34868);

return statearr_34911;
})();
if(cljs.core.truth_(inst_34869)){
var statearr_34912_35982 = state_34880__$1;
(statearr_34912_35982[(1)] = (21));

} else {
var statearr_34913_35984 = state_34880__$1;
(statearr_34913_35984[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34881 === (5))){
var inst_34824 = cljs.core.async.close_BANG_(out);
var state_34880__$1 = state_34880;
var statearr_34914_35985 = state_34880__$1;
(statearr_34914_35985[(2)] = inst_34824);

(statearr_34914_35985[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34881 === (14))){
var inst_34846 = (state_34880[(7)]);
var inst_34848 = cljs.core.chunked_seq_QMARK_(inst_34846);
var state_34880__$1 = state_34880;
if(inst_34848){
var statearr_34915_35986 = state_34880__$1;
(statearr_34915_35986[(1)] = (17));

} else {
var statearr_34916_35987 = state_34880__$1;
(statearr_34916_35987[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34881 === (16))){
var inst_34864 = (state_34880[(2)]);
var state_34880__$1 = state_34880;
var statearr_34921_35988 = state_34880__$1;
(statearr_34921_35988[(2)] = inst_34864);

(statearr_34921_35988[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34881 === (10))){
var inst_34835 = (state_34880[(9)]);
var inst_34833 = (state_34880[(10)]);
var inst_34840 = cljs.core._nth(inst_34833,inst_34835);
var state_34880__$1 = state_34880;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34880__$1,(13),out,inst_34840);
} else {
if((state_val_34881 === (18))){
var inst_34846 = (state_34880[(7)]);
var inst_34855 = cljs.core.first(inst_34846);
var state_34880__$1 = state_34880;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34880__$1,(20),out,inst_34855);
} else {
if((state_val_34881 === (8))){
var inst_34835 = (state_34880[(9)]);
var inst_34834 = (state_34880[(11)]);
var inst_34837 = (inst_34835 < inst_34834);
var inst_34838 = inst_34837;
var state_34880__$1 = state_34880;
if(cljs.core.truth_(inst_34838)){
var statearr_34922_35989 = state_34880__$1;
(statearr_34922_35989[(1)] = (10));

} else {
var statearr_34923_35990 = state_34880__$1;
(statearr_34923_35990[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32646__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32646__auto____0 = (function (){
var statearr_34924 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34924[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32646__auto__);

(statearr_34924[(1)] = (1));

return statearr_34924;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32646__auto____1 = (function (state_34880){
while(true){
var ret_value__32647__auto__ = (function (){try{while(true){
var result__32648__auto__ = switch__32645__auto__(state_34880);
if(cljs.core.keyword_identical_QMARK_(result__32648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32648__auto__;
}
break;
}
}catch (e34925){var ex__32649__auto__ = e34925;
var statearr_34926_35991 = state_34880;
(statearr_34926_35991[(2)] = ex__32649__auto__);


if(cljs.core.seq((state_34880[(4)]))){
var statearr_34927_35992 = state_34880;
(statearr_34927_35992[(1)] = cljs.core.first((state_34880[(4)])));

} else {
throw ex__32649__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35993 = state_34880;
state_34880 = G__35993;
continue;
} else {
return ret_value__32647__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32646__auto__ = function(state_34880){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32646__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32646__auto____1.call(this,state_34880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32646__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32646__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32646__auto__;
})()
})();
var state__32928__auto__ = (function (){var statearr_34928 = f__32927__auto__();
(statearr_34928[(6)] = c__32926__auto__);

return statearr_34928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32928__auto__);
}));

return c__32926__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34930 = arguments.length;
switch (G__34930) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__34952 = arguments.length;
switch (G__34952) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__34974 = arguments.length;
switch (G__34974) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32926__auto___36011 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32927__auto__ = (function (){var switch__32645__auto__ = (function (state_35001){
var state_val_35002 = (state_35001[(1)]);
if((state_val_35002 === (7))){
var inst_34996 = (state_35001[(2)]);
var state_35001__$1 = state_35001;
var statearr_35003_36012 = state_35001__$1;
(statearr_35003_36012[(2)] = inst_34996);

(statearr_35003_36012[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35002 === (1))){
var inst_34978 = null;
var state_35001__$1 = (function (){var statearr_35004 = state_35001;
(statearr_35004[(7)] = inst_34978);

return statearr_35004;
})();
var statearr_35005_36013 = state_35001__$1;
(statearr_35005_36013[(2)] = null);

(statearr_35005_36013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35002 === (4))){
var inst_34981 = (state_35001[(8)]);
var inst_34981__$1 = (state_35001[(2)]);
var inst_34982 = (inst_34981__$1 == null);
var inst_34983 = cljs.core.not(inst_34982);
var state_35001__$1 = (function (){var statearr_35009 = state_35001;
(statearr_35009[(8)] = inst_34981__$1);

return statearr_35009;
})();
if(inst_34983){
var statearr_35010_36015 = state_35001__$1;
(statearr_35010_36015[(1)] = (5));

} else {
var statearr_35011_36016 = state_35001__$1;
(statearr_35011_36016[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35002 === (6))){
var state_35001__$1 = state_35001;
var statearr_35012_36020 = state_35001__$1;
(statearr_35012_36020[(2)] = null);

(statearr_35012_36020[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35002 === (3))){
var inst_34998 = (state_35001[(2)]);
var inst_34999 = cljs.core.async.close_BANG_(out);
var state_35001__$1 = (function (){var statearr_35013 = state_35001;
(statearr_35013[(9)] = inst_34998);

return statearr_35013;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35001__$1,inst_34999);
} else {
if((state_val_35002 === (2))){
var state_35001__$1 = state_35001;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35001__$1,(4),ch);
} else {
if((state_val_35002 === (11))){
var inst_34981 = (state_35001[(8)]);
var inst_34990 = (state_35001[(2)]);
var inst_34978 = inst_34981;
var state_35001__$1 = (function (){var statearr_35014 = state_35001;
(statearr_35014[(10)] = inst_34990);

(statearr_35014[(7)] = inst_34978);

return statearr_35014;
})();
var statearr_35015_36021 = state_35001__$1;
(statearr_35015_36021[(2)] = null);

(statearr_35015_36021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35002 === (9))){
var inst_34981 = (state_35001[(8)]);
var state_35001__$1 = state_35001;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35001__$1,(11),out,inst_34981);
} else {
if((state_val_35002 === (5))){
var inst_34981 = (state_35001[(8)]);
var inst_34978 = (state_35001[(7)]);
var inst_34985 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34981,inst_34978);
var state_35001__$1 = state_35001;
if(inst_34985){
var statearr_35017_36022 = state_35001__$1;
(statearr_35017_36022[(1)] = (8));

} else {
var statearr_35018_36023 = state_35001__$1;
(statearr_35018_36023[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35002 === (10))){
var inst_34993 = (state_35001[(2)]);
var state_35001__$1 = state_35001;
var statearr_35019_36024 = state_35001__$1;
(statearr_35019_36024[(2)] = inst_34993);

(statearr_35019_36024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35002 === (8))){
var inst_34978 = (state_35001[(7)]);
var tmp35016 = inst_34978;
var inst_34978__$1 = tmp35016;
var state_35001__$1 = (function (){var statearr_35020 = state_35001;
(statearr_35020[(7)] = inst_34978__$1);

return statearr_35020;
})();
var statearr_35021_36025 = state_35001__$1;
(statearr_35021_36025[(2)] = null);

(statearr_35021_36025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32646__auto__ = null;
var cljs$core$async$state_machine__32646__auto____0 = (function (){
var statearr_35022 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35022[(0)] = cljs$core$async$state_machine__32646__auto__);

(statearr_35022[(1)] = (1));

return statearr_35022;
});
var cljs$core$async$state_machine__32646__auto____1 = (function (state_35001){
while(true){
var ret_value__32647__auto__ = (function (){try{while(true){
var result__32648__auto__ = switch__32645__auto__(state_35001);
if(cljs.core.keyword_identical_QMARK_(result__32648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32648__auto__;
}
break;
}
}catch (e35023){var ex__32649__auto__ = e35023;
var statearr_35024_36026 = state_35001;
(statearr_35024_36026[(2)] = ex__32649__auto__);


if(cljs.core.seq((state_35001[(4)]))){
var statearr_35025_36027 = state_35001;
(statearr_35025_36027[(1)] = cljs.core.first((state_35001[(4)])));

} else {
throw ex__32649__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36028 = state_35001;
state_35001 = G__36028;
continue;
} else {
return ret_value__32647__auto__;
}
break;
}
});
cljs$core$async$state_machine__32646__auto__ = function(state_35001){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32646__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32646__auto____1.call(this,state_35001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32646__auto____0;
cljs$core$async$state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32646__auto____1;
return cljs$core$async$state_machine__32646__auto__;
})()
})();
var state__32928__auto__ = (function (){var statearr_35026 = f__32927__auto__();
(statearr_35026[(6)] = c__32926__auto___36011);

return statearr_35026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32928__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__35028 = arguments.length;
switch (G__35028) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32926__auto___36030 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32927__auto__ = (function (){var switch__32645__auto__ = (function (state_35066){
var state_val_35067 = (state_35066[(1)]);
if((state_val_35067 === (7))){
var inst_35062 = (state_35066[(2)]);
var state_35066__$1 = state_35066;
var statearr_35068_36031 = state_35066__$1;
(statearr_35068_36031[(2)] = inst_35062);

(statearr_35068_36031[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35067 === (1))){
var inst_35029 = (new Array(n));
var inst_35030 = inst_35029;
var inst_35031 = (0);
var state_35066__$1 = (function (){var statearr_35069 = state_35066;
(statearr_35069[(7)] = inst_35030);

(statearr_35069[(8)] = inst_35031);

return statearr_35069;
})();
var statearr_35070_36033 = state_35066__$1;
(statearr_35070_36033[(2)] = null);

(statearr_35070_36033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35067 === (4))){
var inst_35034 = (state_35066[(9)]);
var inst_35034__$1 = (state_35066[(2)]);
var inst_35035 = (inst_35034__$1 == null);
var inst_35036 = cljs.core.not(inst_35035);
var state_35066__$1 = (function (){var statearr_35071 = state_35066;
(statearr_35071[(9)] = inst_35034__$1);

return statearr_35071;
})();
if(inst_35036){
var statearr_35072_36035 = state_35066__$1;
(statearr_35072_36035[(1)] = (5));

} else {
var statearr_35073_36036 = state_35066__$1;
(statearr_35073_36036[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35067 === (15))){
var inst_35056 = (state_35066[(2)]);
var state_35066__$1 = state_35066;
var statearr_35082_36037 = state_35066__$1;
(statearr_35082_36037[(2)] = inst_35056);

(statearr_35082_36037[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35067 === (13))){
var state_35066__$1 = state_35066;
var statearr_35083_36038 = state_35066__$1;
(statearr_35083_36038[(2)] = null);

(statearr_35083_36038[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35067 === (6))){
var inst_35031 = (state_35066[(8)]);
var inst_35052 = (inst_35031 > (0));
var state_35066__$1 = state_35066;
if(cljs.core.truth_(inst_35052)){
var statearr_35087_36039 = state_35066__$1;
(statearr_35087_36039[(1)] = (12));

} else {
var statearr_35088_36040 = state_35066__$1;
(statearr_35088_36040[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35067 === (3))){
var inst_35064 = (state_35066[(2)]);
var state_35066__$1 = state_35066;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35066__$1,inst_35064);
} else {
if((state_val_35067 === (12))){
var inst_35030 = (state_35066[(7)]);
var inst_35054 = cljs.core.vec(inst_35030);
var state_35066__$1 = state_35066;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35066__$1,(15),out,inst_35054);
} else {
if((state_val_35067 === (2))){
var state_35066__$1 = state_35066;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35066__$1,(4),ch);
} else {
if((state_val_35067 === (11))){
var inst_35046 = (state_35066[(2)]);
var inst_35047 = (new Array(n));
var inst_35030 = inst_35047;
var inst_35031 = (0);
var state_35066__$1 = (function (){var statearr_35089 = state_35066;
(statearr_35089[(7)] = inst_35030);

(statearr_35089[(10)] = inst_35046);

(statearr_35089[(8)] = inst_35031);

return statearr_35089;
})();
var statearr_35090_36045 = state_35066__$1;
(statearr_35090_36045[(2)] = null);

(statearr_35090_36045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35067 === (9))){
var inst_35030 = (state_35066[(7)]);
var inst_35044 = cljs.core.vec(inst_35030);
var state_35066__$1 = state_35066;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35066__$1,(11),out,inst_35044);
} else {
if((state_val_35067 === (5))){
var inst_35039 = (state_35066[(11)]);
var inst_35034 = (state_35066[(9)]);
var inst_35030 = (state_35066[(7)]);
var inst_35031 = (state_35066[(8)]);
var inst_35038 = (inst_35030[inst_35031] = inst_35034);
var inst_35039__$1 = (inst_35031 + (1));
var inst_35040 = (inst_35039__$1 < n);
var state_35066__$1 = (function (){var statearr_35091 = state_35066;
(statearr_35091[(11)] = inst_35039__$1);

(statearr_35091[(12)] = inst_35038);

return statearr_35091;
})();
if(cljs.core.truth_(inst_35040)){
var statearr_35092_36048 = state_35066__$1;
(statearr_35092_36048[(1)] = (8));

} else {
var statearr_35093_36049 = state_35066__$1;
(statearr_35093_36049[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35067 === (14))){
var inst_35059 = (state_35066[(2)]);
var inst_35060 = cljs.core.async.close_BANG_(out);
var state_35066__$1 = (function (){var statearr_35095 = state_35066;
(statearr_35095[(13)] = inst_35059);

return statearr_35095;
})();
var statearr_35096_36051 = state_35066__$1;
(statearr_35096_36051[(2)] = inst_35060);

(statearr_35096_36051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35067 === (10))){
var inst_35050 = (state_35066[(2)]);
var state_35066__$1 = state_35066;
var statearr_35097_36055 = state_35066__$1;
(statearr_35097_36055[(2)] = inst_35050);

(statearr_35097_36055[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35067 === (8))){
var inst_35039 = (state_35066[(11)]);
var inst_35030 = (state_35066[(7)]);
var tmp35094 = inst_35030;
var inst_35030__$1 = tmp35094;
var inst_35031 = inst_35039;
var state_35066__$1 = (function (){var statearr_35098 = state_35066;
(statearr_35098[(7)] = inst_35030__$1);

(statearr_35098[(8)] = inst_35031);

return statearr_35098;
})();
var statearr_35099_36057 = state_35066__$1;
(statearr_35099_36057[(2)] = null);

(statearr_35099_36057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32646__auto__ = null;
var cljs$core$async$state_machine__32646__auto____0 = (function (){
var statearr_35100 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35100[(0)] = cljs$core$async$state_machine__32646__auto__);

(statearr_35100[(1)] = (1));

return statearr_35100;
});
var cljs$core$async$state_machine__32646__auto____1 = (function (state_35066){
while(true){
var ret_value__32647__auto__ = (function (){try{while(true){
var result__32648__auto__ = switch__32645__auto__(state_35066);
if(cljs.core.keyword_identical_QMARK_(result__32648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32648__auto__;
}
break;
}
}catch (e35101){var ex__32649__auto__ = e35101;
var statearr_35102_36058 = state_35066;
(statearr_35102_36058[(2)] = ex__32649__auto__);


if(cljs.core.seq((state_35066[(4)]))){
var statearr_35103_36060 = state_35066;
(statearr_35103_36060[(1)] = cljs.core.first((state_35066[(4)])));

} else {
throw ex__32649__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36065 = state_35066;
state_35066 = G__36065;
continue;
} else {
return ret_value__32647__auto__;
}
break;
}
});
cljs$core$async$state_machine__32646__auto__ = function(state_35066){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32646__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32646__auto____1.call(this,state_35066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32646__auto____0;
cljs$core$async$state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32646__auto____1;
return cljs$core$async$state_machine__32646__auto__;
})()
})();
var state__32928__auto__ = (function (){var statearr_35104 = f__32927__auto__();
(statearr_35104[(6)] = c__32926__auto___36030);

return statearr_35104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32928__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__35108 = arguments.length;
switch (G__35108) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32926__auto___36072 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32927__auto__ = (function (){var switch__32645__auto__ = (function (state_35157){
var state_val_35158 = (state_35157[(1)]);
if((state_val_35158 === (7))){
var inst_35153 = (state_35157[(2)]);
var state_35157__$1 = state_35157;
var statearr_35161_36074 = state_35157__$1;
(statearr_35161_36074[(2)] = inst_35153);

(statearr_35161_36074[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35158 === (1))){
var inst_35112 = [];
var inst_35113 = inst_35112;
var inst_35114 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35157__$1 = (function (){var statearr_35162 = state_35157;
(statearr_35162[(7)] = inst_35113);

(statearr_35162[(8)] = inst_35114);

return statearr_35162;
})();
var statearr_35163_36079 = state_35157__$1;
(statearr_35163_36079[(2)] = null);

(statearr_35163_36079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35158 === (4))){
var inst_35117 = (state_35157[(9)]);
var inst_35117__$1 = (state_35157[(2)]);
var inst_35119 = (inst_35117__$1 == null);
var inst_35120 = cljs.core.not(inst_35119);
var state_35157__$1 = (function (){var statearr_35164 = state_35157;
(statearr_35164[(9)] = inst_35117__$1);

return statearr_35164;
})();
if(inst_35120){
var statearr_35165_36080 = state_35157__$1;
(statearr_35165_36080[(1)] = (5));

} else {
var statearr_35166_36082 = state_35157__$1;
(statearr_35166_36082[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35158 === (15))){
var inst_35113 = (state_35157[(7)]);
var inst_35145 = cljs.core.vec(inst_35113);
var state_35157__$1 = state_35157;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35157__$1,(18),out,inst_35145);
} else {
if((state_val_35158 === (13))){
var inst_35140 = (state_35157[(2)]);
var state_35157__$1 = state_35157;
var statearr_35167_36083 = state_35157__$1;
(statearr_35167_36083[(2)] = inst_35140);

(statearr_35167_36083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35158 === (6))){
var inst_35113 = (state_35157[(7)]);
var inst_35142 = inst_35113.length;
var inst_35143 = (inst_35142 > (0));
var state_35157__$1 = state_35157;
if(cljs.core.truth_(inst_35143)){
var statearr_35168_36088 = state_35157__$1;
(statearr_35168_36088[(1)] = (15));

} else {
var statearr_35169_36089 = state_35157__$1;
(statearr_35169_36089[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35158 === (17))){
var inst_35150 = (state_35157[(2)]);
var inst_35151 = cljs.core.async.close_BANG_(out);
var state_35157__$1 = (function (){var statearr_35170 = state_35157;
(statearr_35170[(10)] = inst_35150);

return statearr_35170;
})();
var statearr_35171_36090 = state_35157__$1;
(statearr_35171_36090[(2)] = inst_35151);

(statearr_35171_36090[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35158 === (3))){
var inst_35155 = (state_35157[(2)]);
var state_35157__$1 = state_35157;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35157__$1,inst_35155);
} else {
if((state_val_35158 === (12))){
var inst_35113 = (state_35157[(7)]);
var inst_35133 = cljs.core.vec(inst_35113);
var state_35157__$1 = state_35157;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35157__$1,(14),out,inst_35133);
} else {
if((state_val_35158 === (2))){
var state_35157__$1 = state_35157;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35157__$1,(4),ch);
} else {
if((state_val_35158 === (11))){
var inst_35122 = (state_35157[(11)]);
var inst_35113 = (state_35157[(7)]);
var inst_35117 = (state_35157[(9)]);
var inst_35130 = inst_35113.push(inst_35117);
var tmp35172 = inst_35113;
var inst_35113__$1 = tmp35172;
var inst_35114 = inst_35122;
var state_35157__$1 = (function (){var statearr_35173 = state_35157;
(statearr_35173[(12)] = inst_35130);

(statearr_35173[(7)] = inst_35113__$1);

(statearr_35173[(8)] = inst_35114);

return statearr_35173;
})();
var statearr_35174_36096 = state_35157__$1;
(statearr_35174_36096[(2)] = null);

(statearr_35174_36096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35158 === (9))){
var inst_35114 = (state_35157[(8)]);
var inst_35126 = cljs.core.keyword_identical_QMARK_(inst_35114,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_35157__$1 = state_35157;
var statearr_35178_36097 = state_35157__$1;
(statearr_35178_36097[(2)] = inst_35126);

(statearr_35178_36097[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35158 === (5))){
var inst_35122 = (state_35157[(11)]);
var inst_35123 = (state_35157[(13)]);
var inst_35117 = (state_35157[(9)]);
var inst_35114 = (state_35157[(8)]);
var inst_35122__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_35117) : f.call(null,inst_35117));
var inst_35123__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35122__$1,inst_35114);
var state_35157__$1 = (function (){var statearr_35179 = state_35157;
(statearr_35179[(11)] = inst_35122__$1);

(statearr_35179[(13)] = inst_35123__$1);

return statearr_35179;
})();
if(inst_35123__$1){
var statearr_35180_36098 = state_35157__$1;
(statearr_35180_36098[(1)] = (8));

} else {
var statearr_35181_36099 = state_35157__$1;
(statearr_35181_36099[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35158 === (14))){
var inst_35122 = (state_35157[(11)]);
var inst_35117 = (state_35157[(9)]);
var inst_35135 = (state_35157[(2)]);
var inst_35136 = [];
var inst_35137 = inst_35136.push(inst_35117);
var inst_35113 = inst_35136;
var inst_35114 = inst_35122;
var state_35157__$1 = (function (){var statearr_35182 = state_35157;
(statearr_35182[(7)] = inst_35113);

(statearr_35182[(14)] = inst_35135);

(statearr_35182[(15)] = inst_35137);

(statearr_35182[(8)] = inst_35114);

return statearr_35182;
})();
var statearr_35183_36100 = state_35157__$1;
(statearr_35183_36100[(2)] = null);

(statearr_35183_36100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35158 === (16))){
var state_35157__$1 = state_35157;
var statearr_35184_36103 = state_35157__$1;
(statearr_35184_36103[(2)] = null);

(statearr_35184_36103[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35158 === (10))){
var inst_35128 = (state_35157[(2)]);
var state_35157__$1 = state_35157;
if(cljs.core.truth_(inst_35128)){
var statearr_35185_36108 = state_35157__$1;
(statearr_35185_36108[(1)] = (11));

} else {
var statearr_35186_36109 = state_35157__$1;
(statearr_35186_36109[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35158 === (18))){
var inst_35147 = (state_35157[(2)]);
var state_35157__$1 = state_35157;
var statearr_35187_36110 = state_35157__$1;
(statearr_35187_36110[(2)] = inst_35147);

(statearr_35187_36110[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35158 === (8))){
var inst_35123 = (state_35157[(13)]);
var state_35157__$1 = state_35157;
var statearr_35188_36111 = state_35157__$1;
(statearr_35188_36111[(2)] = inst_35123);

(statearr_35188_36111[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32646__auto__ = null;
var cljs$core$async$state_machine__32646__auto____0 = (function (){
var statearr_35196 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35196[(0)] = cljs$core$async$state_machine__32646__auto__);

(statearr_35196[(1)] = (1));

return statearr_35196;
});
var cljs$core$async$state_machine__32646__auto____1 = (function (state_35157){
while(true){
var ret_value__32647__auto__ = (function (){try{while(true){
var result__32648__auto__ = switch__32645__auto__(state_35157);
if(cljs.core.keyword_identical_QMARK_(result__32648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32648__auto__;
}
break;
}
}catch (e35200){var ex__32649__auto__ = e35200;
var statearr_35201_36113 = state_35157;
(statearr_35201_36113[(2)] = ex__32649__auto__);


if(cljs.core.seq((state_35157[(4)]))){
var statearr_35202_36114 = state_35157;
(statearr_35202_36114[(1)] = cljs.core.first((state_35157[(4)])));

} else {
throw ex__32649__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36115 = state_35157;
state_35157 = G__36115;
continue;
} else {
return ret_value__32647__auto__;
}
break;
}
});
cljs$core$async$state_machine__32646__auto__ = function(state_35157){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32646__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32646__auto____1.call(this,state_35157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32646__auto____0;
cljs$core$async$state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32646__auto____1;
return cljs$core$async$state_machine__32646__auto__;
})()
})();
var state__32928__auto__ = (function (){var statearr_35206 = f__32927__auto__();
(statearr_35206[(6)] = c__32926__auto___36072);

return statearr_35206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32928__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
