goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_36483 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_36483(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_36484 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_36484(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__35279 = coll;
var G__35280 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__35279,G__35280) : shadow.dom.lazy_native_coll_seq.call(null,G__35279,G__35280));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__35290 = arguments.length;
switch (G__35290) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__35299 = arguments.length;
switch (G__35299) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__35317 = arguments.length;
switch (G__35317) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__35325 = arguments.length;
switch (G__35325) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__35350 = arguments.length;
switch (G__35350) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__35370 = arguments.length;
switch (G__35370) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e35385){if((e35385 instanceof Object)){
var e = e35385;
return console.log("didnt support attachEvent",el,e);
} else {
throw e35385;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__35416 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__35417 = null;
var count__35418 = (0);
var i__35419 = (0);
while(true){
if((i__35419 < count__35418)){
var el = chunk__35417.cljs$core$IIndexed$_nth$arity$2(null,i__35419);
var handler_36503__$1 = ((function (seq__35416,chunk__35417,count__35418,i__35419,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35416,chunk__35417,count__35418,i__35419,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_36503__$1);


var G__36504 = seq__35416;
var G__36505 = chunk__35417;
var G__36506 = count__35418;
var G__36507 = (i__35419 + (1));
seq__35416 = G__36504;
chunk__35417 = G__36505;
count__35418 = G__36506;
i__35419 = G__36507;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__35416);
if(temp__5804__auto__){
var seq__35416__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35416__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__35416__$1);
var G__36510 = cljs.core.chunk_rest(seq__35416__$1);
var G__36511 = c__5568__auto__;
var G__36512 = cljs.core.count(c__5568__auto__);
var G__36513 = (0);
seq__35416 = G__36510;
chunk__35417 = G__36511;
count__35418 = G__36512;
i__35419 = G__36513;
continue;
} else {
var el = cljs.core.first(seq__35416__$1);
var handler_36514__$1 = ((function (seq__35416,chunk__35417,count__35418,i__35419,el,seq__35416__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35416,chunk__35417,count__35418,i__35419,el,seq__35416__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_36514__$1);


var G__36516 = cljs.core.next(seq__35416__$1);
var G__36517 = null;
var G__36518 = (0);
var G__36519 = (0);
seq__35416 = G__36516;
chunk__35417 = G__36517;
count__35418 = G__36518;
i__35419 = G__36519;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__35457 = arguments.length;
switch (G__35457) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__35474 = cljs.core.seq(events);
var chunk__35475 = null;
var count__35476 = (0);
var i__35477 = (0);
while(true){
if((i__35477 < count__35476)){
var vec__35497 = chunk__35475.cljs$core$IIndexed$_nth$arity$2(null,i__35477);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35497,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35497,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__36522 = seq__35474;
var G__36523 = chunk__35475;
var G__36524 = count__35476;
var G__36525 = (i__35477 + (1));
seq__35474 = G__36522;
chunk__35475 = G__36523;
count__35476 = G__36524;
i__35477 = G__36525;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__35474);
if(temp__5804__auto__){
var seq__35474__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35474__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__35474__$1);
var G__36526 = cljs.core.chunk_rest(seq__35474__$1);
var G__36527 = c__5568__auto__;
var G__36528 = cljs.core.count(c__5568__auto__);
var G__36529 = (0);
seq__35474 = G__36526;
chunk__35475 = G__36527;
count__35476 = G__36528;
i__35477 = G__36529;
continue;
} else {
var vec__35503 = cljs.core.first(seq__35474__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35503,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35503,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__36530 = cljs.core.next(seq__35474__$1);
var G__36531 = null;
var G__36532 = (0);
var G__36533 = (0);
seq__35474 = G__36530;
chunk__35475 = G__36531;
count__35476 = G__36532;
i__35477 = G__36533;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__35508 = cljs.core.seq(styles);
var chunk__35509 = null;
var count__35510 = (0);
var i__35511 = (0);
while(true){
if((i__35511 < count__35510)){
var vec__35536 = chunk__35509.cljs$core$IIndexed$_nth$arity$2(null,i__35511);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35536,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35536,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__36534 = seq__35508;
var G__36535 = chunk__35509;
var G__36536 = count__35510;
var G__36537 = (i__35511 + (1));
seq__35508 = G__36534;
chunk__35509 = G__36535;
count__35510 = G__36536;
i__35511 = G__36537;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__35508);
if(temp__5804__auto__){
var seq__35508__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35508__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__35508__$1);
var G__36538 = cljs.core.chunk_rest(seq__35508__$1);
var G__36539 = c__5568__auto__;
var G__36540 = cljs.core.count(c__5568__auto__);
var G__36541 = (0);
seq__35508 = G__36538;
chunk__35509 = G__36539;
count__35510 = G__36540;
i__35511 = G__36541;
continue;
} else {
var vec__35544 = cljs.core.first(seq__35508__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35544,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35544,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__36543 = cljs.core.next(seq__35508__$1);
var G__36544 = null;
var G__36545 = (0);
var G__36546 = (0);
seq__35508 = G__36543;
chunk__35509 = G__36544;
count__35510 = G__36545;
i__35511 = G__36546;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__35550_36548 = key;
var G__35550_36549__$1 = (((G__35550_36548 instanceof cljs.core.Keyword))?G__35550_36548.fqn:null);
switch (G__35550_36549__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_36556 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_36556,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_36556,"aria-");
}
})())){
el.setAttribute(ks_36556,value);
} else {
(el[ks_36556] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__35592){
var map__35594 = p__35592;
var map__35594__$1 = cljs.core.__destructure_map(map__35594);
var props = map__35594__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35594__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__35598 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35598,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35598,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35598,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__35609 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__35609,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__35609;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__35616 = arguments.length;
switch (G__35616) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__35639){
var vec__35642 = p__35639;
var seq__35643 = cljs.core.seq(vec__35642);
var first__35644 = cljs.core.first(seq__35643);
var seq__35643__$1 = cljs.core.next(seq__35643);
var nn = first__35644;
var first__35644__$1 = cljs.core.first(seq__35643__$1);
var seq__35643__$2 = cljs.core.next(seq__35643__$1);
var np = first__35644__$1;
var nc = seq__35643__$2;
var node = vec__35642;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35647 = nn;
var G__35648 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35647,G__35648) : create_fn.call(null,G__35647,G__35648));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35649 = nn;
var G__35650 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35649,G__35650) : create_fn.call(null,G__35649,G__35650));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__35660 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35660,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35660,(1),null);
var seq__35664_36569 = cljs.core.seq(node_children);
var chunk__35665_36570 = null;
var count__35666_36571 = (0);
var i__35667_36572 = (0);
while(true){
if((i__35667_36572 < count__35666_36571)){
var child_struct_36575 = chunk__35665_36570.cljs$core$IIndexed$_nth$arity$2(null,i__35667_36572);
var children_36576 = shadow.dom.dom_node(child_struct_36575);
if(cljs.core.seq_QMARK_(children_36576)){
var seq__35712_36581 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_36576));
var chunk__35714_36582 = null;
var count__35715_36583 = (0);
var i__35716_36584 = (0);
while(true){
if((i__35716_36584 < count__35715_36583)){
var child_36585 = chunk__35714_36582.cljs$core$IIndexed$_nth$arity$2(null,i__35716_36584);
if(cljs.core.truth_(child_36585)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36585);


var G__36586 = seq__35712_36581;
var G__36587 = chunk__35714_36582;
var G__36588 = count__35715_36583;
var G__36589 = (i__35716_36584 + (1));
seq__35712_36581 = G__36586;
chunk__35714_36582 = G__36587;
count__35715_36583 = G__36588;
i__35716_36584 = G__36589;
continue;
} else {
var G__36590 = seq__35712_36581;
var G__36591 = chunk__35714_36582;
var G__36592 = count__35715_36583;
var G__36593 = (i__35716_36584 + (1));
seq__35712_36581 = G__36590;
chunk__35714_36582 = G__36591;
count__35715_36583 = G__36592;
i__35716_36584 = G__36593;
continue;
}
} else {
var temp__5804__auto___36594 = cljs.core.seq(seq__35712_36581);
if(temp__5804__auto___36594){
var seq__35712_36597__$1 = temp__5804__auto___36594;
if(cljs.core.chunked_seq_QMARK_(seq__35712_36597__$1)){
var c__5568__auto___36598 = cljs.core.chunk_first(seq__35712_36597__$1);
var G__36599 = cljs.core.chunk_rest(seq__35712_36597__$1);
var G__36600 = c__5568__auto___36598;
var G__36601 = cljs.core.count(c__5568__auto___36598);
var G__36602 = (0);
seq__35712_36581 = G__36599;
chunk__35714_36582 = G__36600;
count__35715_36583 = G__36601;
i__35716_36584 = G__36602;
continue;
} else {
var child_36603 = cljs.core.first(seq__35712_36597__$1);
if(cljs.core.truth_(child_36603)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36603);


var G__36604 = cljs.core.next(seq__35712_36597__$1);
var G__36605 = null;
var G__36606 = (0);
var G__36607 = (0);
seq__35712_36581 = G__36604;
chunk__35714_36582 = G__36605;
count__35715_36583 = G__36606;
i__35716_36584 = G__36607;
continue;
} else {
var G__36608 = cljs.core.next(seq__35712_36597__$1);
var G__36609 = null;
var G__36610 = (0);
var G__36611 = (0);
seq__35712_36581 = G__36608;
chunk__35714_36582 = G__36609;
count__35715_36583 = G__36610;
i__35716_36584 = G__36611;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_36576);
}


var G__36612 = seq__35664_36569;
var G__36613 = chunk__35665_36570;
var G__36614 = count__35666_36571;
var G__36615 = (i__35667_36572 + (1));
seq__35664_36569 = G__36612;
chunk__35665_36570 = G__36613;
count__35666_36571 = G__36614;
i__35667_36572 = G__36615;
continue;
} else {
var temp__5804__auto___36616 = cljs.core.seq(seq__35664_36569);
if(temp__5804__auto___36616){
var seq__35664_36617__$1 = temp__5804__auto___36616;
if(cljs.core.chunked_seq_QMARK_(seq__35664_36617__$1)){
var c__5568__auto___36618 = cljs.core.chunk_first(seq__35664_36617__$1);
var G__36619 = cljs.core.chunk_rest(seq__35664_36617__$1);
var G__36620 = c__5568__auto___36618;
var G__36621 = cljs.core.count(c__5568__auto___36618);
var G__36622 = (0);
seq__35664_36569 = G__36619;
chunk__35665_36570 = G__36620;
count__35666_36571 = G__36621;
i__35667_36572 = G__36622;
continue;
} else {
var child_struct_36623 = cljs.core.first(seq__35664_36617__$1);
var children_36624 = shadow.dom.dom_node(child_struct_36623);
if(cljs.core.seq_QMARK_(children_36624)){
var seq__35727_36625 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_36624));
var chunk__35729_36626 = null;
var count__35730_36627 = (0);
var i__35731_36628 = (0);
while(true){
if((i__35731_36628 < count__35730_36627)){
var child_36629 = chunk__35729_36626.cljs$core$IIndexed$_nth$arity$2(null,i__35731_36628);
if(cljs.core.truth_(child_36629)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36629);


var G__36633 = seq__35727_36625;
var G__36634 = chunk__35729_36626;
var G__36635 = count__35730_36627;
var G__36636 = (i__35731_36628 + (1));
seq__35727_36625 = G__36633;
chunk__35729_36626 = G__36634;
count__35730_36627 = G__36635;
i__35731_36628 = G__36636;
continue;
} else {
var G__36637 = seq__35727_36625;
var G__36638 = chunk__35729_36626;
var G__36639 = count__35730_36627;
var G__36640 = (i__35731_36628 + (1));
seq__35727_36625 = G__36637;
chunk__35729_36626 = G__36638;
count__35730_36627 = G__36639;
i__35731_36628 = G__36640;
continue;
}
} else {
var temp__5804__auto___36642__$1 = cljs.core.seq(seq__35727_36625);
if(temp__5804__auto___36642__$1){
var seq__35727_36644__$1 = temp__5804__auto___36642__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35727_36644__$1)){
var c__5568__auto___36645 = cljs.core.chunk_first(seq__35727_36644__$1);
var G__36646 = cljs.core.chunk_rest(seq__35727_36644__$1);
var G__36647 = c__5568__auto___36645;
var G__36648 = cljs.core.count(c__5568__auto___36645);
var G__36649 = (0);
seq__35727_36625 = G__36646;
chunk__35729_36626 = G__36647;
count__35730_36627 = G__36648;
i__35731_36628 = G__36649;
continue;
} else {
var child_36650 = cljs.core.first(seq__35727_36644__$1);
if(cljs.core.truth_(child_36650)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36650);


var G__36651 = cljs.core.next(seq__35727_36644__$1);
var G__36652 = null;
var G__36653 = (0);
var G__36654 = (0);
seq__35727_36625 = G__36651;
chunk__35729_36626 = G__36652;
count__35730_36627 = G__36653;
i__35731_36628 = G__36654;
continue;
} else {
var G__36655 = cljs.core.next(seq__35727_36644__$1);
var G__36656 = null;
var G__36657 = (0);
var G__36658 = (0);
seq__35727_36625 = G__36655;
chunk__35729_36626 = G__36656;
count__35730_36627 = G__36657;
i__35731_36628 = G__36658;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_36624);
}


var G__36660 = cljs.core.next(seq__35664_36617__$1);
var G__36661 = null;
var G__36662 = (0);
var G__36663 = (0);
seq__35664_36569 = G__36660;
chunk__35665_36570 = G__36661;
count__35666_36571 = G__36662;
i__35667_36572 = G__36663;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__35753 = cljs.core.seq(node);
var chunk__35754 = null;
var count__35755 = (0);
var i__35756 = (0);
while(true){
if((i__35756 < count__35755)){
var n = chunk__35754.cljs$core$IIndexed$_nth$arity$2(null,i__35756);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36670 = seq__35753;
var G__36671 = chunk__35754;
var G__36672 = count__35755;
var G__36673 = (i__35756 + (1));
seq__35753 = G__36670;
chunk__35754 = G__36671;
count__35755 = G__36672;
i__35756 = G__36673;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__35753);
if(temp__5804__auto__){
var seq__35753__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35753__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__35753__$1);
var G__36674 = cljs.core.chunk_rest(seq__35753__$1);
var G__36675 = c__5568__auto__;
var G__36676 = cljs.core.count(c__5568__auto__);
var G__36677 = (0);
seq__35753 = G__36674;
chunk__35754 = G__36675;
count__35755 = G__36676;
i__35756 = G__36677;
continue;
} else {
var n = cljs.core.first(seq__35753__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36678 = cljs.core.next(seq__35753__$1);
var G__36679 = null;
var G__36680 = (0);
var G__36681 = (0);
seq__35753 = G__36678;
chunk__35754 = G__36679;
count__35755 = G__36680;
i__35756 = G__36681;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__35776 = arguments.length;
switch (G__35776) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__35782 = arguments.length;
switch (G__35782) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__35793 = arguments.length;
switch (G__35793) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___36698 = arguments.length;
var i__5770__auto___36699 = (0);
while(true){
if((i__5770__auto___36699 < len__5769__auto___36698)){
args__5775__auto__.push((arguments[i__5770__auto___36699]));

var G__36700 = (i__5770__auto___36699 + (1));
i__5770__auto___36699 = G__36700;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__35834_36701 = cljs.core.seq(nodes);
var chunk__35835_36702 = null;
var count__35836_36703 = (0);
var i__35837_36704 = (0);
while(true){
if((i__35837_36704 < count__35836_36703)){
var node_36705 = chunk__35835_36702.cljs$core$IIndexed$_nth$arity$2(null,i__35837_36704);
fragment.appendChild(shadow.dom._to_dom(node_36705));


var G__36706 = seq__35834_36701;
var G__36707 = chunk__35835_36702;
var G__36708 = count__35836_36703;
var G__36709 = (i__35837_36704 + (1));
seq__35834_36701 = G__36706;
chunk__35835_36702 = G__36707;
count__35836_36703 = G__36708;
i__35837_36704 = G__36709;
continue;
} else {
var temp__5804__auto___36710 = cljs.core.seq(seq__35834_36701);
if(temp__5804__auto___36710){
var seq__35834_36711__$1 = temp__5804__auto___36710;
if(cljs.core.chunked_seq_QMARK_(seq__35834_36711__$1)){
var c__5568__auto___36712 = cljs.core.chunk_first(seq__35834_36711__$1);
var G__36713 = cljs.core.chunk_rest(seq__35834_36711__$1);
var G__36714 = c__5568__auto___36712;
var G__36715 = cljs.core.count(c__5568__auto___36712);
var G__36716 = (0);
seq__35834_36701 = G__36713;
chunk__35835_36702 = G__36714;
count__35836_36703 = G__36715;
i__35837_36704 = G__36716;
continue;
} else {
var node_36717 = cljs.core.first(seq__35834_36711__$1);
fragment.appendChild(shadow.dom._to_dom(node_36717));


var G__36718 = cljs.core.next(seq__35834_36711__$1);
var G__36719 = null;
var G__36720 = (0);
var G__36721 = (0);
seq__35834_36701 = G__36718;
chunk__35835_36702 = G__36719;
count__35836_36703 = G__36720;
i__35837_36704 = G__36721;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq35824){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35824));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__35853_36726 = cljs.core.seq(scripts);
var chunk__35854_36727 = null;
var count__35855_36728 = (0);
var i__35856_36729 = (0);
while(true){
if((i__35856_36729 < count__35855_36728)){
var vec__35868_36730 = chunk__35854_36727.cljs$core$IIndexed$_nth$arity$2(null,i__35856_36729);
var script_tag_36731 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35868_36730,(0),null);
var script_body_36732 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35868_36730,(1),null);
eval(script_body_36732);


var G__36733 = seq__35853_36726;
var G__36734 = chunk__35854_36727;
var G__36735 = count__35855_36728;
var G__36736 = (i__35856_36729 + (1));
seq__35853_36726 = G__36733;
chunk__35854_36727 = G__36734;
count__35855_36728 = G__36735;
i__35856_36729 = G__36736;
continue;
} else {
var temp__5804__auto___36737 = cljs.core.seq(seq__35853_36726);
if(temp__5804__auto___36737){
var seq__35853_36738__$1 = temp__5804__auto___36737;
if(cljs.core.chunked_seq_QMARK_(seq__35853_36738__$1)){
var c__5568__auto___36739 = cljs.core.chunk_first(seq__35853_36738__$1);
var G__36740 = cljs.core.chunk_rest(seq__35853_36738__$1);
var G__36741 = c__5568__auto___36739;
var G__36742 = cljs.core.count(c__5568__auto___36739);
var G__36743 = (0);
seq__35853_36726 = G__36740;
chunk__35854_36727 = G__36741;
count__35855_36728 = G__36742;
i__35856_36729 = G__36743;
continue;
} else {
var vec__35873_36744 = cljs.core.first(seq__35853_36738__$1);
var script_tag_36745 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35873_36744,(0),null);
var script_body_36746 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35873_36744,(1),null);
eval(script_body_36746);


var G__36747 = cljs.core.next(seq__35853_36738__$1);
var G__36748 = null;
var G__36749 = (0);
var G__36750 = (0);
seq__35853_36726 = G__36747;
chunk__35854_36727 = G__36748;
count__35855_36728 = G__36749;
i__35856_36729 = G__36750;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__35878){
var vec__35880 = p__35878;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35880,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35880,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__35892 = arguments.length;
switch (G__35892) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__35925 = cljs.core.seq(style_keys);
var chunk__35926 = null;
var count__35927 = (0);
var i__35928 = (0);
while(true){
if((i__35928 < count__35927)){
var it = chunk__35926.cljs$core$IIndexed$_nth$arity$2(null,i__35928);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36752 = seq__35925;
var G__36753 = chunk__35926;
var G__36754 = count__35927;
var G__36755 = (i__35928 + (1));
seq__35925 = G__36752;
chunk__35926 = G__36753;
count__35927 = G__36754;
i__35928 = G__36755;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__35925);
if(temp__5804__auto__){
var seq__35925__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35925__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__35925__$1);
var G__36756 = cljs.core.chunk_rest(seq__35925__$1);
var G__36757 = c__5568__auto__;
var G__36758 = cljs.core.count(c__5568__auto__);
var G__36759 = (0);
seq__35925 = G__36756;
chunk__35926 = G__36757;
count__35927 = G__36758;
i__35928 = G__36759;
continue;
} else {
var it = cljs.core.first(seq__35925__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36760 = cljs.core.next(seq__35925__$1);
var G__36761 = null;
var G__36762 = (0);
var G__36763 = (0);
seq__35925 = G__36760;
chunk__35926 = G__36761;
count__35927 = G__36762;
i__35928 = G__36763;
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
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k35931,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__35938 = k35931;
var G__35938__$1 = (((G__35938 instanceof cljs.core.Keyword))?G__35938.fqn:null);
switch (G__35938__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35931,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__35939){
var vec__35940 = p__35939;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35940,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35940,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35930){
var self__ = this;
var G__35930__$1 = this;
return (new cljs.core.RecordIter((0),G__35930__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35932,other35933){
var self__ = this;
var this35932__$1 = this;
return (((!((other35933 == null)))) && ((((this35932__$1.constructor === other35933.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35932__$1.x,other35933.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35932__$1.y,other35933.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35932__$1.__extmap,other35933.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k35931){
var self__ = this;
var this__5350__auto____$1 = this;
var G__35964 = k35931;
var G__35964__$1 = (((G__35964 instanceof cljs.core.Keyword))?G__35964.fqn:null);
switch (G__35964__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35931);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__35930){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__35968 = cljs.core.keyword_identical_QMARK_;
var expr__35969 = k__5352__auto__;
if(cljs.core.truth_((pred__35968.cljs$core$IFn$_invoke$arity$2 ? pred__35968.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__35969) : pred__35968.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__35969)))){
return (new shadow.dom.Coordinate(G__35930,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35968.cljs$core$IFn$_invoke$arity$2 ? pred__35968.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__35969) : pred__35968.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__35969)))){
return (new shadow.dom.Coordinate(self__.x,G__35930,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__35930),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__35930){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__35930,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__35934){
var extmap__5385__auto__ = (function (){var G__35983 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35934,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__35934)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35983);
} else {
return G__35983;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__35934),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__35934),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k35995,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__36010 = k35995;
var G__36010__$1 = (((G__36010 instanceof cljs.core.Keyword))?G__36010.fqn:null);
switch (G__36010__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35995,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__36014){
var vec__36017 = p__36014;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36017,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36017,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35994){
var self__ = this;
var G__35994__$1 = this;
return (new cljs.core.RecordIter((0),G__35994__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35996,other35997){
var self__ = this;
var this35996__$1 = this;
return (((!((other35997 == null)))) && ((((this35996__$1.constructor === other35997.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35996__$1.w,other35997.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35996__$1.h,other35997.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35996__$1.__extmap,other35997.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k35995){
var self__ = this;
var this__5350__auto____$1 = this;
var G__36047 = k35995;
var G__36047__$1 = (((G__36047 instanceof cljs.core.Keyword))?G__36047.fqn:null);
switch (G__36047__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35995);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__35994){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__36052 = cljs.core.keyword_identical_QMARK_;
var expr__36053 = k__5352__auto__;
if(cljs.core.truth_((pred__36052.cljs$core$IFn$_invoke$arity$2 ? pred__36052.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__36053) : pred__36052.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__36053)))){
return (new shadow.dom.Size(G__35994,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__36052.cljs$core$IFn$_invoke$arity$2 ? pred__36052.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__36053) : pred__36052.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__36053)))){
return (new shadow.dom.Size(self__.w,G__35994,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__35994),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__35994){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__35994,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__35999){
var extmap__5385__auto__ = (function (){var G__36091 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35999,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__35999)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__36091);
} else {
return G__36091;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__35999),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__35999),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__36799 = (i + (1));
var G__36800 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__36799;
ret = G__36800;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__36191){
var vec__36192 = p__36191;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36192,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36192,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__36210 = arguments.length;
switch (G__36210) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__36806 = ps;
var G__36807 = (i + (1));
el__$1 = G__36806;
i = G__36807;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__36237 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36237,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36237,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36237,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__36242_36817 = cljs.core.seq(props);
var chunk__36243_36818 = null;
var count__36244_36819 = (0);
var i__36245_36820 = (0);
while(true){
if((i__36245_36820 < count__36244_36819)){
var vec__36261_36821 = chunk__36243_36818.cljs$core$IIndexed$_nth$arity$2(null,i__36245_36820);
var k_36822 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36261_36821,(0),null);
var v_36823 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36261_36821,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_36822);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36822),v_36823);


var G__36824 = seq__36242_36817;
var G__36825 = chunk__36243_36818;
var G__36826 = count__36244_36819;
var G__36827 = (i__36245_36820 + (1));
seq__36242_36817 = G__36824;
chunk__36243_36818 = G__36825;
count__36244_36819 = G__36826;
i__36245_36820 = G__36827;
continue;
} else {
var temp__5804__auto___36828 = cljs.core.seq(seq__36242_36817);
if(temp__5804__auto___36828){
var seq__36242_36829__$1 = temp__5804__auto___36828;
if(cljs.core.chunked_seq_QMARK_(seq__36242_36829__$1)){
var c__5568__auto___36830 = cljs.core.chunk_first(seq__36242_36829__$1);
var G__36831 = cljs.core.chunk_rest(seq__36242_36829__$1);
var G__36832 = c__5568__auto___36830;
var G__36833 = cljs.core.count(c__5568__auto___36830);
var G__36834 = (0);
seq__36242_36817 = G__36831;
chunk__36243_36818 = G__36832;
count__36244_36819 = G__36833;
i__36245_36820 = G__36834;
continue;
} else {
var vec__36265_36835 = cljs.core.first(seq__36242_36829__$1);
var k_36836 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36265_36835,(0),null);
var v_36837 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36265_36835,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_36836);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36836),v_36837);


var G__36838 = cljs.core.next(seq__36242_36829__$1);
var G__36839 = null;
var G__36840 = (0);
var G__36841 = (0);
seq__36242_36817 = G__36838;
chunk__36243_36818 = G__36839;
count__36244_36819 = G__36840;
i__36245_36820 = G__36841;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__36273 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36273,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36273,(1),null);
var seq__36276_36842 = cljs.core.seq(node_children);
var chunk__36278_36843 = null;
var count__36279_36844 = (0);
var i__36280_36845 = (0);
while(true){
if((i__36280_36845 < count__36279_36844)){
var child_struct_36846 = chunk__36278_36843.cljs$core$IIndexed$_nth$arity$2(null,i__36280_36845);
if((!((child_struct_36846 == null)))){
if(typeof child_struct_36846 === 'string'){
var text_36847 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36847),child_struct_36846].join(''));
} else {
var children_36848 = shadow.dom.svg_node(child_struct_36846);
if(cljs.core.seq_QMARK_(children_36848)){
var seq__36372_36849 = cljs.core.seq(children_36848);
var chunk__36374_36850 = null;
var count__36375_36851 = (0);
var i__36376_36852 = (0);
while(true){
if((i__36376_36852 < count__36375_36851)){
var child_36853 = chunk__36374_36850.cljs$core$IIndexed$_nth$arity$2(null,i__36376_36852);
if(cljs.core.truth_(child_36853)){
node.appendChild(child_36853);


var G__36854 = seq__36372_36849;
var G__36855 = chunk__36374_36850;
var G__36856 = count__36375_36851;
var G__36857 = (i__36376_36852 + (1));
seq__36372_36849 = G__36854;
chunk__36374_36850 = G__36855;
count__36375_36851 = G__36856;
i__36376_36852 = G__36857;
continue;
} else {
var G__36858 = seq__36372_36849;
var G__36859 = chunk__36374_36850;
var G__36860 = count__36375_36851;
var G__36861 = (i__36376_36852 + (1));
seq__36372_36849 = G__36858;
chunk__36374_36850 = G__36859;
count__36375_36851 = G__36860;
i__36376_36852 = G__36861;
continue;
}
} else {
var temp__5804__auto___36862 = cljs.core.seq(seq__36372_36849);
if(temp__5804__auto___36862){
var seq__36372_36863__$1 = temp__5804__auto___36862;
if(cljs.core.chunked_seq_QMARK_(seq__36372_36863__$1)){
var c__5568__auto___36864 = cljs.core.chunk_first(seq__36372_36863__$1);
var G__36865 = cljs.core.chunk_rest(seq__36372_36863__$1);
var G__36866 = c__5568__auto___36864;
var G__36867 = cljs.core.count(c__5568__auto___36864);
var G__36868 = (0);
seq__36372_36849 = G__36865;
chunk__36374_36850 = G__36866;
count__36375_36851 = G__36867;
i__36376_36852 = G__36868;
continue;
} else {
var child_36869 = cljs.core.first(seq__36372_36863__$1);
if(cljs.core.truth_(child_36869)){
node.appendChild(child_36869);


var G__36870 = cljs.core.next(seq__36372_36863__$1);
var G__36871 = null;
var G__36872 = (0);
var G__36873 = (0);
seq__36372_36849 = G__36870;
chunk__36374_36850 = G__36871;
count__36375_36851 = G__36872;
i__36376_36852 = G__36873;
continue;
} else {
var G__36874 = cljs.core.next(seq__36372_36863__$1);
var G__36875 = null;
var G__36876 = (0);
var G__36877 = (0);
seq__36372_36849 = G__36874;
chunk__36374_36850 = G__36875;
count__36375_36851 = G__36876;
i__36376_36852 = G__36877;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36848);
}
}


var G__36878 = seq__36276_36842;
var G__36879 = chunk__36278_36843;
var G__36880 = count__36279_36844;
var G__36881 = (i__36280_36845 + (1));
seq__36276_36842 = G__36878;
chunk__36278_36843 = G__36879;
count__36279_36844 = G__36880;
i__36280_36845 = G__36881;
continue;
} else {
var G__36882 = seq__36276_36842;
var G__36883 = chunk__36278_36843;
var G__36884 = count__36279_36844;
var G__36885 = (i__36280_36845 + (1));
seq__36276_36842 = G__36882;
chunk__36278_36843 = G__36883;
count__36279_36844 = G__36884;
i__36280_36845 = G__36885;
continue;
}
} else {
var temp__5804__auto___36886 = cljs.core.seq(seq__36276_36842);
if(temp__5804__auto___36886){
var seq__36276_36887__$1 = temp__5804__auto___36886;
if(cljs.core.chunked_seq_QMARK_(seq__36276_36887__$1)){
var c__5568__auto___36888 = cljs.core.chunk_first(seq__36276_36887__$1);
var G__36889 = cljs.core.chunk_rest(seq__36276_36887__$1);
var G__36890 = c__5568__auto___36888;
var G__36891 = cljs.core.count(c__5568__auto___36888);
var G__36892 = (0);
seq__36276_36842 = G__36889;
chunk__36278_36843 = G__36890;
count__36279_36844 = G__36891;
i__36280_36845 = G__36892;
continue;
} else {
var child_struct_36893 = cljs.core.first(seq__36276_36887__$1);
if((!((child_struct_36893 == null)))){
if(typeof child_struct_36893 === 'string'){
var text_36894 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36894),child_struct_36893].join(''));
} else {
var children_36895 = shadow.dom.svg_node(child_struct_36893);
if(cljs.core.seq_QMARK_(children_36895)){
var seq__36421_36896 = cljs.core.seq(children_36895);
var chunk__36423_36897 = null;
var count__36424_36898 = (0);
var i__36425_36899 = (0);
while(true){
if((i__36425_36899 < count__36424_36898)){
var child_36900 = chunk__36423_36897.cljs$core$IIndexed$_nth$arity$2(null,i__36425_36899);
if(cljs.core.truth_(child_36900)){
node.appendChild(child_36900);


var G__36901 = seq__36421_36896;
var G__36902 = chunk__36423_36897;
var G__36903 = count__36424_36898;
var G__36904 = (i__36425_36899 + (1));
seq__36421_36896 = G__36901;
chunk__36423_36897 = G__36902;
count__36424_36898 = G__36903;
i__36425_36899 = G__36904;
continue;
} else {
var G__36905 = seq__36421_36896;
var G__36906 = chunk__36423_36897;
var G__36907 = count__36424_36898;
var G__36908 = (i__36425_36899 + (1));
seq__36421_36896 = G__36905;
chunk__36423_36897 = G__36906;
count__36424_36898 = G__36907;
i__36425_36899 = G__36908;
continue;
}
} else {
var temp__5804__auto___36909__$1 = cljs.core.seq(seq__36421_36896);
if(temp__5804__auto___36909__$1){
var seq__36421_36910__$1 = temp__5804__auto___36909__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36421_36910__$1)){
var c__5568__auto___36911 = cljs.core.chunk_first(seq__36421_36910__$1);
var G__36912 = cljs.core.chunk_rest(seq__36421_36910__$1);
var G__36913 = c__5568__auto___36911;
var G__36914 = cljs.core.count(c__5568__auto___36911);
var G__36915 = (0);
seq__36421_36896 = G__36912;
chunk__36423_36897 = G__36913;
count__36424_36898 = G__36914;
i__36425_36899 = G__36915;
continue;
} else {
var child_36916 = cljs.core.first(seq__36421_36910__$1);
if(cljs.core.truth_(child_36916)){
node.appendChild(child_36916);


var G__36917 = cljs.core.next(seq__36421_36910__$1);
var G__36918 = null;
var G__36919 = (0);
var G__36920 = (0);
seq__36421_36896 = G__36917;
chunk__36423_36897 = G__36918;
count__36424_36898 = G__36919;
i__36425_36899 = G__36920;
continue;
} else {
var G__36921 = cljs.core.next(seq__36421_36910__$1);
var G__36922 = null;
var G__36923 = (0);
var G__36924 = (0);
seq__36421_36896 = G__36921;
chunk__36423_36897 = G__36922;
count__36424_36898 = G__36923;
i__36425_36899 = G__36924;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36895);
}
}


var G__36925 = cljs.core.next(seq__36276_36887__$1);
var G__36926 = null;
var G__36927 = (0);
var G__36928 = (0);
seq__36276_36842 = G__36925;
chunk__36278_36843 = G__36926;
count__36279_36844 = G__36927;
i__36280_36845 = G__36928;
continue;
} else {
var G__36929 = cljs.core.next(seq__36276_36887__$1);
var G__36930 = null;
var G__36931 = (0);
var G__36932 = (0);
seq__36276_36842 = G__36929;
chunk__36278_36843 = G__36930;
count__36279_36844 = G__36931;
i__36280_36845 = G__36932;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___36935 = arguments.length;
var i__5770__auto___36936 = (0);
while(true){
if((i__5770__auto___36936 < len__5769__auto___36935)){
args__5775__auto__.push((arguments[i__5770__auto___36936]));

var G__36939 = (i__5770__auto___36936 + (1));
i__5770__auto___36936 = G__36939;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq36457){
var G__36458 = cljs.core.first(seq36457);
var seq36457__$1 = cljs.core.next(seq36457);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36458,seq36457__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__36469 = arguments.length;
switch (G__36469) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__32926__auto___36944 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32927__auto__ = (function (){var switch__32645__auto__ = (function (state_36474){
var state_val_36475 = (state_36474[(1)]);
if((state_val_36475 === (1))){
var state_36474__$1 = state_36474;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36474__$1,(2),once_or_cleanup);
} else {
if((state_val_36475 === (2))){
var inst_36471 = (state_36474[(2)]);
var inst_36472 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_36474__$1 = (function (){var statearr_36476 = state_36474;
(statearr_36476[(7)] = inst_36471);

return statearr_36476;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36474__$1,inst_36472);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__32646__auto__ = null;
var shadow$dom$state_machine__32646__auto____0 = (function (){
var statearr_36477 = [null,null,null,null,null,null,null,null];
(statearr_36477[(0)] = shadow$dom$state_machine__32646__auto__);

(statearr_36477[(1)] = (1));

return statearr_36477;
});
var shadow$dom$state_machine__32646__auto____1 = (function (state_36474){
while(true){
var ret_value__32647__auto__ = (function (){try{while(true){
var result__32648__auto__ = switch__32645__auto__(state_36474);
if(cljs.core.keyword_identical_QMARK_(result__32648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32648__auto__;
}
break;
}
}catch (e36478){var ex__32649__auto__ = e36478;
var statearr_36479_36950 = state_36474;
(statearr_36479_36950[(2)] = ex__32649__auto__);


if(cljs.core.seq((state_36474[(4)]))){
var statearr_36480_36951 = state_36474;
(statearr_36480_36951[(1)] = cljs.core.first((state_36474[(4)])));

} else {
throw ex__32649__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36953 = state_36474;
state_36474 = G__36953;
continue;
} else {
return ret_value__32647__auto__;
}
break;
}
});
shadow$dom$state_machine__32646__auto__ = function(state_36474){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__32646__auto____0.call(this);
case 1:
return shadow$dom$state_machine__32646__auto____1.call(this,state_36474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__32646__auto____0;
shadow$dom$state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__32646__auto____1;
return shadow$dom$state_machine__32646__auto__;
})()
})();
var state__32928__auto__ = (function (){var statearr_36481 = f__32927__auto__();
(statearr_36481[(6)] = c__32926__auto___36944);

return statearr_36481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32928__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
