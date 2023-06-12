goog.provide('hyperfiddle.electric_client');
/**
 * @define {string}
 */
hyperfiddle.electric_client.VERSION = goog.define("hyperfiddle.electric_client.VERSION","");
hyperfiddle.electric_client.server_url = (function hyperfiddle$electric_client$server_url(){
var url = (new URL(window.location));
var proto = url.protocol;
(url.protocol = (function (){var G__43867 = proto;
switch (G__43867) {
case "http:":
return "ws:";

break;
case "https:":
return "wss:";

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unexpected protocol",proto);

}
})());

url.searchParams.set("HYPERFIDDLE_ELECTRIC_CLIENT_VERSION",hyperfiddle.electric_client.VERSION);

return url.toString();
});
hyperfiddle.electric_client._STAR_ws_server_url_STAR_ = hyperfiddle.electric_client.server_url();
hyperfiddle.electric_client.remove_listeners = (function hyperfiddle$electric_client$remove_listeners(ws){
(ws.onopen = null);

return (ws.onclose = null);
});
hyperfiddle.electric_client.connect = (function hyperfiddle$electric_client$connect(url){
return (function (s,f){
try{var ws = (new WebSocket(url));
(ws.binaryType = "arraybuffer");

(ws.onopen = (function (_){
hyperfiddle.electric_client.remove_listeners(ws);

return (s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1(ws) : s.call(null,ws));
}));

(ws.onclose = (function (_){
hyperfiddle.electric_client.remove_listeners(ws);

return (s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1(null) : s.call(null,null));
}));

return (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(WebSocket.CONNECTING,ws.readyState)){
return ws.close();
} else {
return null;
}
});
}catch (e43871){var e = e43871;
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(e) : f.call(null,e));

return (function (){
return cljs.core.List.EMPTY;
});
}});
});
hyperfiddle.electric_client.wait_for_flush = (function hyperfiddle$electric_client$wait_for_flush(ws){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr43882_block_0 = (function hyperfiddle$electric_client$wait_for_flush_$_cr43882_block_0(cr43882_state){
try{(cr43882_state[(0)] = cr43882_block_1);

return cr43882_state;
}catch (e43911){var cr43882_exception = e43911;
(cr43882_state[(0)] = null);

throw cr43882_exception;
}});
var cr43882_block_1 = (function hyperfiddle$electric_client$wait_for_flush_$_cr43882_block_1(cr43882_state){
try{var cr43882_place_0 = (4096);
var cr43882_place_1 = ws;
var cr43882_place_2 = cr43882_place_1.bufferedAmount;
var cr43882_place_3 = (cr43882_place_0 < cr43882_place_2);
var cr43882_place_4 = null;
if(cr43882_place_3){
(cr43882_state[(0)] = cr43882_block_3);

return cr43882_state;
} else {
(cr43882_state[(0)] = cr43882_block_2);

(cr43882_state[(1)] = cr43882_place_4);

return cr43882_state;
}
}catch (e43912){var cr43882_exception = e43912;
(cr43882_state[(0)] = null);

throw cr43882_exception;
}});
var cr43882_block_2 = (function hyperfiddle$electric_client$wait_for_flush_$_cr43882_block_2(cr43882_state){
try{var cr43882_place_5 = null;
(cr43882_state[(0)] = cr43882_block_5);

(cr43882_state[(1)] = cr43882_place_5);

return cr43882_state;
}catch (e43913){var cr43882_exception = e43913;
(cr43882_state[(0)] = null);

(cr43882_state[(1)] = null);

throw cr43882_exception;
}});
var cr43882_block_3 = (function hyperfiddle$electric_client$wait_for_flush_$_cr43882_block_3(cr43882_state){
try{var cr43882_place_6 = missionary.core.sleep;
var cr43882_place_7 = (50);
var cr43882_place_8 = (function (){var G__43917 = cr43882_place_7;
var fexpr__43916 = cr43882_place_6;
return (fexpr__43916.cljs$core$IFn$_invoke$arity$1 ? fexpr__43916.cljs$core$IFn$_invoke$arity$1(G__43917) : fexpr__43916.call(null,G__43917));
})();
(cr43882_state[(0)] = cr43882_block_4);

return missionary.core.park(cr43882_place_8);
}catch (e43914){var cr43882_exception = e43914;
(cr43882_state[(0)] = null);

throw cr43882_exception;
}});
var cr43882_block_4 = (function hyperfiddle$electric_client$wait_for_flush_$_cr43882_block_4(cr43882_state){
try{var cr43882_place_9 = missionary.core.unpark();
(cr43882_state[(0)] = cr43882_block_1);

return cr43882_state;
}catch (e43919){var cr43882_exception = e43919;
(cr43882_state[(0)] = null);

throw cr43882_exception;
}});
var cr43882_block_5 = (function hyperfiddle$electric_client$wait_for_flush_$_cr43882_block_5(cr43882_state){
try{var cr43882_place_4 = (cr43882_state[(1)]);
(cr43882_state[(0)] = null);

(cr43882_state[(1)] = null);

return cr43882_place_4;
}catch (e43926){var cr43882_exception = e43926;
(cr43882_state[(0)] = null);

(cr43882_state[(1)] = null);

throw cr43882_exception;
}});
return cloroutine.impl.coroutine((function (){var G__43929 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((2));
(G__43929[(0)] = cr43882_block_0);

return G__43929;
})());
})(),missionary.core.sp_run);
});
hyperfiddle.electric_client.wait_for_close = (function hyperfiddle$electric_client$wait_for_close(ws){
return (function (s,f){
(ws.onclose = (function (e){
(ws.onclose = null);

var G__43936 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code","code",1586293142),e.code,new cljs.core.Keyword(null,"reason","reason",-2070751759),e.reason], null);
return (s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1(G__43936) : s.call(null,G__43936));
}));

return (function (){
if((ws.onclose == null)){
return null;
} else {
(ws.onclose = null);

var G__43937 = (new missionary.Cancelled());
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__43937) : f.call(null,G__43937));
}
});
});
});
hyperfiddle.electric_client.payload = (function hyperfiddle$electric_client$payload(x){
return x.data;
});
hyperfiddle.electric_client.send_BANG_ = (function hyperfiddle$electric_client$send_BANG_(ws,msg){
var G__43941 = ws;
G__43941.send(msg);

return G__43941;
});
hyperfiddle.electric_client.send_all = (function hyperfiddle$electric_client$send_all(ws,msgs){
return missionary.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,null,cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr43942_block_0 = (function hyperfiddle$electric_client$send_all_$_cr43942_block_0(cr43942_state){
try{var cr43942_place_0 = hyperfiddle.electric_client.wait_for_flush;
var cr43942_place_1 = hyperfiddle.electric_client.send_BANG_;
var cr43942_place_2 = ws;
var cr43942_place_3 = hyperfiddle.electric.impl.io.encode;
var cr43942_place_4 = (1);
var cr43942_place_5 = msgs;
(cr43942_state[(0)] = cr43942_block_1);

(cr43942_state[(4)] = cr43942_place_0);

(cr43942_state[(3)] = cr43942_place_1);

(cr43942_state[(1)] = cr43942_place_2);

(cr43942_state[(2)] = cr43942_place_3);

return missionary.core.fork(cr43942_place_4,cr43942_place_5);
}catch (e43981){var cr43942_exception = e43981;
(cr43942_state[(0)] = null);

throw cr43942_exception;
}});
var cr43942_block_1 = (function hyperfiddle$electric_client$send_all_$_cr43942_block_1(cr43942_state){
try{var cr43942_place_2 = (cr43942_state[(1)]);
var cr43942_place_3 = (cr43942_state[(2)]);
var cr43942_place_1 = (cr43942_state[(3)]);
var cr43942_place_0 = (cr43942_state[(4)]);
var cr43942_place_6 = missionary.core.unpark();
var cr43942_place_7 = (function (){var G__43994 = cr43942_place_6;
var fexpr__43993 = cr43942_place_3;
return (fexpr__43993.cljs$core$IFn$_invoke$arity$1 ? fexpr__43993.cljs$core$IFn$_invoke$arity$1(G__43994) : fexpr__43993.call(null,G__43994));
})();
var cr43942_place_8 = (function (){var G__43996 = cr43942_place_2;
var G__43997 = cr43942_place_7;
var fexpr__43995 = cr43942_place_1;
return (fexpr__43995.cljs$core$IFn$_invoke$arity$2 ? fexpr__43995.cljs$core$IFn$_invoke$arity$2(G__43996,G__43997) : fexpr__43995.call(null,G__43996,G__43997));
})();
var cr43942_place_9 = (function (){var G__44000 = cr43942_place_8;
var fexpr__43999 = cr43942_place_0;
return (fexpr__43999.cljs$core$IFn$_invoke$arity$1 ? fexpr__43999.cljs$core$IFn$_invoke$arity$1(G__44000) : fexpr__43999.call(null,G__44000));
})();
(cr43942_state[(0)] = cr43942_block_2);

(cr43942_state[(1)] = null);

(cr43942_state[(2)] = null);

(cr43942_state[(3)] = null);

(cr43942_state[(4)] = null);

return missionary.core.park(cr43942_place_9);
}catch (e43987){var cr43942_exception = e43987;
(cr43942_state[(0)] = null);

(cr43942_state[(1)] = null);

(cr43942_state[(2)] = null);

(cr43942_state[(3)] = null);

(cr43942_state[(4)] = null);

throw cr43942_exception;
}});
var cr43942_block_2 = (function hyperfiddle$electric_client$send_all_$_cr43942_block_2(cr43942_state){
try{var cr43942_place_10 = missionary.core.unpark();
(cr43942_state[(0)] = null);

return cr43942_place_10;
}catch (e44005){var cr43942_exception = e44005;
(cr43942_state[(0)] = null);

throw cr43942_exception;
}});
return cloroutine.impl.coroutine((function (){var G__44010 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((5));
(G__44010[(0)] = cr43942_block_0);

return G__44010;
})());
})(),missionary.core.ap_run));
});
/**
 * 
 * server : the server part of the program
 * cb : the callback for incoming messages.
 * msgs : the discrete flow of messages to send, spawned when websocket is connected, cancelled on websocket close.
 * Returns a task producing nil or failing if the websocket was closed before end of reduction.
 */
hyperfiddle.electric_client.connector = (function hyperfiddle$electric_client$connector(server){
return (function (cb,msgs){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr44018_block_0 = (function hyperfiddle$electric_client$connector_$_cr44018_block_0(cr44018_state){
try{var cr44018_place_0 = hyperfiddle.electric_client.connect;
var cr44018_place_1 = hyperfiddle.electric_client._STAR_ws_server_url_STAR_;
var cr44018_place_2 = (function (){var G__44131 = cr44018_place_1;
var fexpr__44130 = cr44018_place_0;
return (fexpr__44130.cljs$core$IFn$_invoke$arity$1 ? fexpr__44130.cljs$core$IFn$_invoke$arity$1(G__44131) : fexpr__44130.call(null,G__44131));
})();
(cr44018_state[(0)] = cr44018_block_1);

return missionary.core.park(cr44018_place_2);
}catch (e44129){var cr44018_exception = e44129;
(cr44018_state[(0)] = null);

throw cr44018_exception;
}});
var cr44018_block_8 = (function hyperfiddle$electric_client$connector_$_cr44018_block_8(cr44018_state){
try{var cr44018_place_48 = missionary.core.unpark();
(cr44018_state[(0)] = cr44018_block_10);

(cr44018_state[(5)] = cr44018_place_48);

return cr44018_state;
}catch (e44137){var cr44018_exception = e44137;
(cr44018_state[(0)] = null);

(cr44018_state[(2)] = null);

(cr44018_state[(4)] = null);

(cr44018_state[(1)] = null);

(cr44018_state[(5)] = null);

throw cr44018_exception;
}});
var cr44018_block_11 = (function hyperfiddle$electric_client$connector_$_cr44018_block_11(cr44018_state){
try{var cr44018_place_51 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
(cr44018_state[(0)] = cr44018_block_12);

(cr44018_state[(1)] = cr44018_place_51);

return cr44018_state;
}catch (e44138){var cr44018_exception = e44138;
(cr44018_state[(0)] = null);

(cr44018_state[(1)] = null);

throw cr44018_exception;
}});
var cr44018_block_3 = (function hyperfiddle$electric_client$connector_$_cr44018_block_3(cr44018_state){
try{var cr44018_place_8 = (cr44018_state[(3)]);
var cr44018_place_11 = hyperfiddle.electric_client.send_BANG_;
var cr44018_place_12 = cr44018_place_8;
var cr44018_place_13 = hyperfiddle.electric.impl.io.encode;
var cr44018_place_14 = server;
var cr44018_place_15 = (function (){var G__44142 = cr44018_place_14;
var fexpr__44141 = cr44018_place_13;
return (fexpr__44141.cljs$core$IFn$_invoke$arity$1 ? fexpr__44141.cljs$core$IFn$_invoke$arity$1(G__44142) : fexpr__44141.call(null,G__44142));
})();
var cr44018_place_16 = (function (){var G__44144 = cr44018_place_12;
var G__44145 = cr44018_place_15;
var fexpr__44143 = cr44018_place_11;
return (fexpr__44143.cljs$core$IFn$_invoke$arity$2 ? fexpr__44143.cljs$core$IFn$_invoke$arity$2(G__44144,G__44145) : fexpr__44143.call(null,G__44144,G__44145));
})();
var cr44018_place_17 = cr44018_place_8;
var cr44018_place_18 = cljs.core.comp;
var cr44018_place_19 = cb;
var cr44018_place_20 = hyperfiddle.electric.impl.io.decode;
var cr44018_place_21 = hyperfiddle.electric_client.payload;
var cr44018_place_22 = (function (){var G__44148 = cr44018_place_19;
var G__44149 = cr44018_place_20;
var G__44150 = cr44018_place_21;
var fexpr__44147 = cr44018_place_18;
return (fexpr__44147.cljs$core$IFn$_invoke$arity$3 ? fexpr__44147.cljs$core$IFn$_invoke$arity$3(G__44148,G__44149,G__44150) : fexpr__44147.call(null,G__44148,G__44149,G__44150));
})();
var cr44018_place_23 = (cr44018_place_17.onmessage = cr44018_place_22);
var cr44018_place_24 = missionary.core.race;
var cr44018_place_25 = hyperfiddle.electric_client.send_all;
var cr44018_place_26 = cr44018_place_8;
var cr44018_place_27 = msgs;
var cr44018_place_28 = (function (){var G__44154 = cr44018_place_26;
var G__44155 = cr44018_place_27;
var fexpr__44153 = cr44018_place_25;
return (fexpr__44153.cljs$core$IFn$_invoke$arity$2 ? fexpr__44153.cljs$core$IFn$_invoke$arity$2(G__44154,G__44155) : fexpr__44153.call(null,G__44154,G__44155));
})();
var cr44018_place_29 = hyperfiddle.electric_client.wait_for_close;
var cr44018_place_30 = cr44018_place_8;
var cr44018_place_31 = (function (){var G__44157 = cr44018_place_30;
var fexpr__44156 = cr44018_place_29;
return (fexpr__44156.cljs$core$IFn$_invoke$arity$1 ? fexpr__44156.cljs$core$IFn$_invoke$arity$1(G__44157) : fexpr__44156.call(null,G__44157));
})();
var cr44018_place_32 = (function (){var G__44159 = cr44018_place_28;
var G__44160 = cr44018_place_31;
var fexpr__44158 = cr44018_place_24;
return (fexpr__44158.cljs$core$IFn$_invoke$arity$2 ? fexpr__44158.cljs$core$IFn$_invoke$arity$2(G__44159,G__44160) : fexpr__44158.call(null,G__44159,G__44160));
})();
(cr44018_state[(0)] = cr44018_block_4);

return missionary.core.park(cr44018_place_32);
}catch (e44139){var cr44018_exception = e44139;
(cr44018_state[(0)] = cr44018_block_5);

(cr44018_state[(4)] = cr44018_exception);

return cr44018_state;
}});
var cr44018_block_7 = (function hyperfiddle$electric_client$connector_$_cr44018_block_7(cr44018_state){
try{var cr44018_place_8 = (cr44018_state[(3)]);
var cr44018_place_43 = cr44018_place_8;
var cr44018_place_44 = cr44018_place_43.close();
var cr44018_place_45 = missionary.core.compel;
var cr44018_place_46 = hyperfiddle.electric_client.wait_for_close;
var cr44018_place_47 = (function (){var G__44166 = cr44018_place_46;
var fexpr__44165 = cr44018_place_45;
return (fexpr__44165.cljs$core$IFn$_invoke$arity$1 ? fexpr__44165.cljs$core$IFn$_invoke$arity$1(G__44166) : fexpr__44165.call(null,G__44166));
})();
(cr44018_state[(0)] = cr44018_block_8);

(cr44018_state[(3)] = null);

return missionary.core.park(cr44018_place_47);
}catch (e44164){var cr44018_exception = e44164;
(cr44018_state[(0)] = null);

(cr44018_state[(2)] = null);

(cr44018_state[(3)] = null);

(cr44018_state[(4)] = null);

(cr44018_state[(1)] = null);

(cr44018_state[(5)] = null);

throw cr44018_exception;
}});
var cr44018_block_6 = (function hyperfiddle$electric_client$connector_$_cr44018_block_6(cr44018_state){
try{var cr44018_place_8 = (cr44018_state[(3)]);
var cr44018_place_36 = cljs.core._EQ_;
var cr44018_place_37 = WebSocket;
var cr44018_place_38 = cr44018_place_37.CLOSED;
var cr44018_place_39 = cr44018_place_8;
var cr44018_place_40 = cr44018_place_39.readyState;
var cr44018_place_41 = (function (){var G__44172 = cr44018_place_38;
var G__44173 = cr44018_place_40;
var fexpr__44171 = cr44018_place_36;
return (fexpr__44171.cljs$core$IFn$_invoke$arity$2 ? fexpr__44171.cljs$core$IFn$_invoke$arity$2(G__44172,G__44173) : fexpr__44171.call(null,G__44172,G__44173));
})();
var cr44018_place_42 = null;
if(cljs.core.truth_(cr44018_place_41)){
(cr44018_state[(0)] = cr44018_block_9);

(cr44018_state[(3)] = null);

(cr44018_state[(5)] = cr44018_place_42);

return cr44018_state;
} else {
(cr44018_state[(0)] = cr44018_block_7);

(cr44018_state[(5)] = cr44018_place_42);

return cr44018_state;
}
}catch (e44170){var cr44018_exception = e44170;
(cr44018_state[(0)] = null);

(cr44018_state[(2)] = null);

(cr44018_state[(3)] = null);

(cr44018_state[(4)] = null);

(cr44018_state[(1)] = null);

throw cr44018_exception;
}});
var cr44018_block_9 = (function hyperfiddle$electric_client$connector_$_cr44018_block_9(cr44018_state){
try{var cr44018_place_49 = null;
(cr44018_state[(0)] = cr44018_block_10);

(cr44018_state[(5)] = cr44018_place_49);

return cr44018_state;
}catch (e44174){var cr44018_exception = e44174;
(cr44018_state[(0)] = null);

(cr44018_state[(2)] = null);

(cr44018_state[(4)] = null);

(cr44018_state[(1)] = null);

(cr44018_state[(5)] = null);

throw cr44018_exception;
}});
var cr44018_block_4 = (function hyperfiddle$electric_client$connector_$_cr44018_block_4(cr44018_state){
try{var cr44018_place_33 = missionary.core.unpark();
(cr44018_state[(0)] = cr44018_block_6);

(cr44018_state[(4)] = cr44018_place_33);

return cr44018_state;
}catch (e44175){var cr44018_exception = e44175;
(cr44018_state[(0)] = cr44018_block_5);

(cr44018_state[(4)] = cr44018_exception);

return cr44018_state;
}});
var cr44018_block_12 = (function hyperfiddle$electric_client$connector_$_cr44018_block_12(cr44018_state){
try{var cr44018_place_7 = (cr44018_state[(1)]);
(cr44018_state[(0)] = null);

(cr44018_state[(1)] = null);

return cr44018_place_7;
}catch (e44177){var cr44018_exception = e44177;
(cr44018_state[(0)] = null);

(cr44018_state[(1)] = null);

throw cr44018_exception;
}});
var cr44018_block_5 = (function hyperfiddle$electric_client$connector_$_cr44018_block_5(cr44018_state){
try{var cr44018_place_9 = (cr44018_state[(4)]);
var cr44018_place_34 = cr44018_place_9;
var cr44018_place_35 = (function(){throw cr44018_place_34})();
(cr44018_state[(0)] = null);

(cr44018_state[(2)] = null);

(cr44018_state[(3)] = null);

(cr44018_state[(4)] = null);

(cr44018_state[(1)] = null);

return null;
}catch (e44178){var cr44018_exception = e44178;
(cr44018_state[(0)] = cr44018_block_6);

(cr44018_state[(2)] = true);

(cr44018_state[(4)] = cr44018_exception);

return cr44018_state;
}});
var cr44018_block_10 = (function hyperfiddle$electric_client$connector_$_cr44018_block_10(cr44018_state){
try{var cr44018_place_10 = (cr44018_state[(2)]);
var cr44018_place_9 = (cr44018_state[(4)]);
var cr44018_place_42 = (cr44018_state[(5)]);
var cr44018_place_50 = (cljs.core.truth_(cr44018_place_10)?(function(){throw cr44018_place_9})():cr44018_place_9);
(cr44018_state[(0)] = cr44018_block_12);

(cr44018_state[(2)] = null);

(cr44018_state[(4)] = null);

(cr44018_state[(5)] = null);

(cr44018_state[(1)] = cr44018_place_50);

return cr44018_state;
}catch (e44179){var cr44018_exception = e44179;
(cr44018_state[(0)] = null);

(cr44018_state[(2)] = null);

(cr44018_state[(4)] = null);

(cr44018_state[(1)] = null);

(cr44018_state[(5)] = null);

throw cr44018_exception;
}});
var cr44018_block_1 = (function hyperfiddle$electric_client$connector_$_cr44018_block_1(cr44018_state){
try{var cr44018_place_3 = missionary.core.unpark();
var cr44018_place_4 = cr44018_place_3;
var cr44018_place_5 = null;
var cr44018_place_6 = (cr44018_place_4 == cr44018_place_5);
var cr44018_place_7 = null;
if(cr44018_place_6){
(cr44018_state[(0)] = cr44018_block_11);

(cr44018_state[(1)] = cr44018_place_7);

return cr44018_state;
} else {
(cr44018_state[(0)] = cr44018_block_2);

(cr44018_state[(2)] = cr44018_place_3);

(cr44018_state[(1)] = cr44018_place_7);

return cr44018_state;
}
}catch (e44180){var cr44018_exception = e44180;
(cr44018_state[(0)] = null);

throw cr44018_exception;
}});
var cr44018_block_2 = (function hyperfiddle$electric_client$connector_$_cr44018_block_2(cr44018_state){
try{var cr44018_place_3 = (cr44018_state[(2)]);
var cr44018_place_8 = cr44018_place_3;
var cr44018_place_9 = null;
var cr44018_place_10 = false;
(cr44018_state[(0)] = cr44018_block_3);

(cr44018_state[(2)] = null);

(cr44018_state[(3)] = cr44018_place_8);

(cr44018_state[(4)] = cr44018_place_9);

(cr44018_state[(2)] = cr44018_place_10);

return cr44018_state;
}catch (e44182){var cr44018_exception = e44182;
(cr44018_state[(0)] = null);

(cr44018_state[(1)] = null);

(cr44018_state[(2)] = null);

throw cr44018_exception;
}});
return cloroutine.impl.coroutine((function (){var G__44184 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((6));
(G__44184[(0)] = cr44018_block_0);

return G__44184;
})());
})(),missionary.core.sp_run);
});
});
hyperfiddle.electric_client.fib_iter = (function hyperfiddle$electric_client$fib_iter(p__44185){
var vec__44186 = p__44185;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44186,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44186,(1),null);
var G__44189 = b;
switch (G__44189) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,(a + b)], null);

}
});
hyperfiddle.electric_client.fib = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.iterate(hyperfiddle.electric_client.fib_iter,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)));
hyperfiddle.electric_client.retry_delays = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,(100)),hyperfiddle.electric_client.fib);
hyperfiddle.electric_client.boot_with_retry = (function hyperfiddle$electric_client$boot_with_retry(client,conn){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr44193_block_5 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44193_block_5(cr44193_state){
try{var cr44193_place_13 = (cr44193_state[(4)]);
var cr44193_place_8 = (cr44193_state[(5)]);
var cr44193_place_12 = (cr44193_state[(6)]);
var cr44193_place_54 = cr44193_place_8;
var cr44193_place_55 = (hyperfiddle.electric_client._STAR_ws_server_url_STAR_ = cr44193_place_54);
var cr44193_place_56 = (cljs.core.truth_(cr44193_place_13)?(function(){throw cr44193_place_12})():cr44193_place_12);
var cr44193_place_57 = cr44193_place_56;
var cr44193_place_58 = null;
var cr44193_place_59 = (cr44193_place_57 == cr44193_place_58);
var cr44193_place_60 = null;
if(cr44193_place_59){
(cr44193_state[(0)] = cr44193_block_14);

(cr44193_state[(4)] = null);

(cr44193_state[(5)] = null);

(cr44193_state[(6)] = null);

(cr44193_state[(4)] = cr44193_place_60);

return cr44193_state;
} else {
(cr44193_state[(0)] = cr44193_block_6);

(cr44193_state[(4)] = null);

(cr44193_state[(5)] = null);

(cr44193_state[(6)] = null);

(cr44193_state[(3)] = cr44193_place_56);

(cr44193_state[(4)] = cr44193_place_60);

return cr44193_state;
}
}catch (e44538){var cr44193_exception = e44538;
(cr44193_state[(0)] = null);

(cr44193_state[(4)] = null);

(cr44193_state[(5)] = null);

(cr44193_state[(1)] = null);

(cr44193_state[(2)] = null);

(cr44193_state[(6)] = null);

throw cr44193_exception;
}});
var cr44193_block_0 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44193_block_0(cr44193_state){
try{var cr44193_place_0 = hyperfiddle.electric_client._STAR_ws_server_url_STAR_;
var cr44193_place_1 = hyperfiddle.electric_client.retry_delays;
(cr44193_state[(0)] = cr44193_block_1);

(cr44193_state[(2)] = cr44193_place_0);

(cr44193_state[(1)] = cr44193_place_1);

return cr44193_state;
}catch (e44539){var cr44193_exception = e44539;
(cr44193_state[(0)] = null);

throw cr44193_exception;
}});
var cr44193_block_12 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44193_block_12(cr44193_state){
try{var cr44193_place_1 = (cr44193_state[(1)]);
var cr44193_place_97 = console;
var cr44193_place_98 = "Failed to connect.";
var cr44193_place_99 = cr44193_place_97.log(cr44193_place_98);
var cr44193_place_100 = cr44193_place_1;
(cr44193_state[(0)] = cr44193_block_13);

(cr44193_state[(5)] = cr44193_place_100);

return cr44193_state;
}catch (e44540){var cr44193_exception = e44540;
(cr44193_state[(0)] = null);

(cr44193_state[(1)] = null);

(cr44193_state[(4)] = null);

(cr44193_state[(5)] = null);

(cr44193_state[(2)] = null);

throw cr44193_exception;
}});
var cr44193_block_11 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44193_block_11(cr44193_state){
try{var cr44193_place_72 = (cr44193_state[(3)]);
(cr44193_state[(0)] = cr44193_block_13);

(cr44193_state[(3)] = null);

(cr44193_state[(5)] = cr44193_place_72);

return cr44193_state;
}catch (e44541){var cr44193_exception = e44541;
(cr44193_state[(0)] = null);

(cr44193_state[(3)] = null);

(cr44193_state[(1)] = null);

(cr44193_state[(4)] = null);

(cr44193_state[(5)] = null);

(cr44193_state[(2)] = null);

throw cr44193_exception;
}});
var cr44193_block_10 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44193_block_10(cr44193_state){
try{var cr44193_place_69 = (cr44193_state[(1)]);
var cr44193_place_61 = (cr44193_state[(6)]);
var cr44193_place_86 = cljs.core.ex_info;
var cr44193_place_87 = "Remote error - ";
var cr44193_place_88 = cr44193_place_69;
var cr44193_place_89 = " ";
var cr44193_place_90 = new cljs.core.Keyword(null,"reason","reason",-2070751759);
var cr44193_place_91 = cr44193_place_61;
var cr44193_place_92 = cr44193_place_90.cljs$core$IFn$_invoke$arity$1(cr44193_place_91);
var cr44193_place_93 = [cr44193_place_87,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr44193_place_88),cr44193_place_89,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr44193_place_92)].join('');
var cr44193_place_94 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr44193_place_95 = (function (){var G__44544 = cr44193_place_93;
var G__44545 = cr44193_place_94;
var fexpr__44543 = cr44193_place_86;
return (fexpr__44543.cljs$core$IFn$_invoke$arity$2 ? fexpr__44543.cljs$core$IFn$_invoke$arity$2(G__44544,G__44545) : fexpr__44543.call(null,G__44544,G__44545));
})();
var cr44193_place_96 = (function(){throw cr44193_place_95})();
(cr44193_state[(0)] = null);

(cr44193_state[(1)] = null);

(cr44193_state[(6)] = null);

return null;
}catch (e44542){var cr44193_exception = e44542;
(cr44193_state[(0)] = null);

(cr44193_state[(1)] = null);

(cr44193_state[(6)] = null);

throw cr44193_exception;
}});
var cr44193_block_9 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44193_block_9(cr44193_state){
try{var cr44193_place_79 = cljs.core.ex_info;
var cr44193_place_80 = "Stale client";
var cr44193_place_81 = new cljs.core.Keyword("hyperfiddle.electric","type","hyperfiddle.electric/type",1565804079);
var cr44193_place_82 = new cljs.core.Keyword("hyperfiddle.electric-client","stale-client","hyperfiddle.electric-client/stale-client",-343425405);
var cr44193_place_83 = cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([cr44193_place_81,cr44193_place_82]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr44193_place_84 = (function (){var G__44548 = cr44193_place_80;
var G__44549 = cr44193_place_83;
var fexpr__44547 = cr44193_place_79;
return (fexpr__44547.cljs$core$IFn$_invoke$arity$2 ? fexpr__44547.cljs$core$IFn$_invoke$arity$2(G__44548,G__44549) : fexpr__44547.call(null,G__44548,G__44549));
})();
var cr44193_place_85 = (function(){throw cr44193_place_84})();
(cr44193_state[(0)] = null);

return null;
}catch (e44546){var cr44193_exception = e44546;
(cr44193_state[(0)] = null);

throw cr44193_exception;
}});
var cr44193_block_18 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44193_block_18(cr44193_state){
try{var cr44193_place_131 = null;
(cr44193_state[(0)] = cr44193_block_19);

(cr44193_state[(1)] = cr44193_place_131);

return cr44193_state;
}catch (e44550){var cr44193_exception = e44550;
(cr44193_state[(0)] = null);

(cr44193_state[(1)] = null);

throw cr44193_exception;
}});
var cr44193_block_14 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44193_block_14(cr44193_state){
try{var cr44193_place_101 = null;
(cr44193_state[(0)] = cr44193_block_15);

(cr44193_state[(4)] = cr44193_place_101);

return cr44193_state;
}catch (e44551){var cr44193_exception = e44551;
(cr44193_state[(0)] = null);

(cr44193_state[(1)] = null);

(cr44193_state[(4)] = null);

(cr44193_state[(2)] = null);

throw cr44193_exception;
}});
var cr44193_block_8 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44193_block_8(cr44193_state){
try{var cr44193_place_73 = console;
var cr44193_place_74 = "Connection lost.";
var cr44193_place_75 = cr44193_place_73.log(cr44193_place_74);
var cr44193_place_76 = cljs.core.seq;
var cr44193_place_77 = hyperfiddle.electric_client.retry_delays;
var cr44193_place_78 = (function (){var G__44554 = cr44193_place_77;
var fexpr__44553 = cr44193_place_76;
return (fexpr__44553.cljs$core$IFn$_invoke$arity$1 ? fexpr__44553.cljs$core$IFn$_invoke$arity$1(G__44554) : fexpr__44553.call(null,G__44554));
})();
(cr44193_state[(0)] = cr44193_block_11);

(cr44193_state[(3)] = cr44193_place_78);

return cr44193_state;
}catch (e44552){var cr44193_exception = e44552;
(cr44193_state[(0)] = null);

(cr44193_state[(3)] = null);

(cr44193_state[(1)] = null);

(cr44193_state[(4)] = null);

(cr44193_state[(5)] = null);

(cr44193_state[(2)] = null);

throw cr44193_exception;
}});
var cr44193_block_6 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44193_block_6(cr44193_state){
try{var cr44193_place_56 = (cr44193_state[(3)]);
var cr44193_place_61 = cr44193_place_56;
var cr44193_place_62 = new cljs.core.Keyword(null,"code","code",1586293142);
var cr44193_place_63 = cr44193_place_61;
var cr44193_place_64 = cr44193_place_62.cljs$core$IFn$_invoke$arity$1(cr44193_place_63);
var cr44193_place_65 = cr44193_place_64;
var cr44193_place_66 = null;
var cr44193_place_67 = (cr44193_place_65 == cr44193_place_66);
var cr44193_place_68 = null;
if(cr44193_place_67){
(cr44193_state[(0)] = cr44193_block_12);

(cr44193_state[(3)] = null);

(cr44193_state[(5)] = cr44193_place_68);

return cr44193_state;
} else {
(cr44193_state[(0)] = cr44193_block_7);

(cr44193_state[(3)] = null);

(cr44193_state[(6)] = cr44193_place_61);

(cr44193_state[(3)] = cr44193_place_64);

(cr44193_state[(5)] = cr44193_place_68);

return cr44193_state;
}
}catch (e44555){var cr44193_exception = e44555;
(cr44193_state[(0)] = null);

(cr44193_state[(3)] = null);

(cr44193_state[(1)] = null);

(cr44193_state[(4)] = null);

(cr44193_state[(2)] = null);

throw cr44193_exception;
}});
var cr44193_block_19 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44193_block_19(cr44193_state){
try{var cr44193_place_105 = (cr44193_state[(1)]);
(cr44193_state[(0)] = null);

(cr44193_state[(1)] = null);

return cr44193_place_105;
}catch (e44556){var cr44193_exception = e44556;
(cr44193_state[(0)] = null);

(cr44193_state[(1)] = null);

throw cr44193_exception;
}});
var cr44193_block_13 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44193_block_13(cr44193_state){
try{var cr44193_place_68 = (cr44193_state[(5)]);
(cr44193_state[(0)] = cr44193_block_15);

(cr44193_state[(5)] = null);

(cr44193_state[(4)] = cr44193_place_68);

return cr44193_state;
}catch (e44557){var cr44193_exception = e44557;
(cr44193_state[(0)] = null);

(cr44193_state[(1)] = null);

(cr44193_state[(4)] = null);

(cr44193_state[(5)] = null);

(cr44193_state[(2)] = null);

throw cr44193_exception;
}});
var cr44193_block_7 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44193_block_7(cr44193_state){
try{var cr44193_place_64 = (cr44193_state[(3)]);
var cr44193_place_69 = cr44193_place_64;
var cr44193_place_70 = cr44193_place_69;
var cr44193_place_71 = cr44193_place_70;
var cr44193_place_72 = null;
var G__44559 = cr44193_place_71;
switch (G__44559) {
case (1005):
case (1006):
(cr44193_state[(0)] = cr44193_block_8);

(cr44193_state[(3)] = null);

(cr44193_state[(6)] = null);

(cr44193_state[(3)] = cr44193_place_72);

return cr44193_state;

break;
case (1008):
(cr44193_state[(0)] = cr44193_block_9);

(cr44193_state[(1)] = null);

(cr44193_state[(4)] = null);

(cr44193_state[(3)] = null);

(cr44193_state[(5)] = null);

(cr44193_state[(2)] = null);

(cr44193_state[(6)] = null);

return cr44193_state;

break;
default:
(cr44193_state[(0)] = cr44193_block_10);

(cr44193_state[(1)] = null);

(cr44193_state[(4)] = null);

(cr44193_state[(3)] = null);

(cr44193_state[(5)] = null);

(cr44193_state[(2)] = null);

(cr44193_state[(1)] = cr44193_place_69);

return cr44193_state;

}
}catch (e44558){var cr44193_exception = e44558;
(cr44193_state[(0)] = null);

(cr44193_state[(1)] = null);

(cr44193_state[(4)] = null);

(cr44193_state[(3)] = null);

(cr44193_state[(5)] = null);

(cr44193_state[(2)] = null);

(cr44193_state[(6)] = null);

throw cr44193_exception;
}});
var cr44193_block_15 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44193_block_15(cr44193_state){
try{var cr44193_place_60 = (cr44193_state[(4)]);
var cr44193_place_102 = cr44193_place_60;
var cr44193_place_103 = null;
var cr44193_place_104 = (cr44193_place_102 == cr44193_place_103);
var cr44193_place_105 = null;
if(cr44193_place_104){
(cr44193_state[(0)] = cr44193_block_18);

(cr44193_state[(1)] = null);

(cr44193_state[(4)] = null);

(cr44193_state[(2)] = null);

(cr44193_state[(1)] = cr44193_place_105);

return cr44193_state;
} else {
(cr44193_state[(0)] = cr44193_block_16);

return cr44193_state;
}
}catch (e44560){var cr44193_exception = e44560;
(cr44193_state[(0)] = null);

(cr44193_state[(1)] = null);

(cr44193_state[(4)] = null);

(cr44193_state[(2)] = null);

throw cr44193_exception;
}});
var cr44193_block_1 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44193_block_1(cr44193_state){
try{var cr44193_place_0 = (cr44193_state[(2)]);
var cr44193_place_2 = cljs.core.object_array;
var cr44193_place_3 = (1);
var cr44193_place_4 = (function (){var G__44563 = cr44193_place_3;
var fexpr__44562 = cr44193_place_2;
return (fexpr__44562.cljs$core$IFn$_invoke$arity$1 ? fexpr__44562.cljs$core$IFn$_invoke$arity$1(G__44563) : fexpr__44562.call(null,G__44563));
})();
var cr44193_place_5 = console;
var cr44193_place_6 = "Connecting...";
var cr44193_place_7 = cr44193_place_5.log(cr44193_place_6);
var cr44193_place_8 = hyperfiddle.electric_client._STAR_ws_server_url_STAR_;
var cr44193_place_9 = cr44193_place_0;
var cr44193_place_10 = cr44193_place_9;
var cr44193_place_11 = (hyperfiddle.electric_client._STAR_ws_server_url_STAR_ = cr44193_place_10);
var cr44193_place_12 = null;
var cr44193_place_13 = false;
(cr44193_state[(0)] = cr44193_block_2);

(cr44193_state[(3)] = cr44193_place_4);

(cr44193_state[(4)] = cr44193_place_13);

(cr44193_state[(5)] = cr44193_place_8);

(cr44193_state[(6)] = cr44193_place_12);

return cr44193_state;
}catch (e44561){var cr44193_exception = e44561;
(cr44193_state[(0)] = null);

(cr44193_state[(1)] = null);

(cr44193_state[(2)] = null);

throw cr44193_exception;
}});
var cr44193_block_17 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44193_block_17(cr44193_state){
try{var cr44193_place_130 = missionary.core.unpark();
(cr44193_state[(0)] = cr44193_block_1);

(cr44193_state[(1)] = cr44193_place_130);

return cr44193_state;
}catch (e44564){var cr44193_exception = e44564;
(cr44193_state[(0)] = null);

(cr44193_state[(1)] = null);

(cr44193_state[(2)] = null);

throw cr44193_exception;
}});
var cr44193_block_3 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44193_block_3(cr44193_state){
try{var cr44193_place_51 = missionary.core.unpark();
(cr44193_state[(0)] = cr44193_block_5);

(cr44193_state[(6)] = cr44193_place_51);

return cr44193_state;
}catch (e44565){var cr44193_exception = e44565;
(cr44193_state[(0)] = cr44193_block_4);

(cr44193_state[(6)] = cr44193_exception);

return cr44193_state;
}});
var cr44193_block_4 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44193_block_4(cr44193_state){
try{var cr44193_place_12 = (cr44193_state[(6)]);
var cr44193_place_52 = cr44193_place_12;
var cr44193_place_53 = (function(){throw cr44193_place_52})();
(cr44193_state[(0)] = null);

(cr44193_state[(4)] = null);

(cr44193_state[(5)] = null);

(cr44193_state[(1)] = null);

(cr44193_state[(2)] = null);

(cr44193_state[(6)] = null);

return null;
}catch (e44566){var cr44193_exception = e44566;
(cr44193_state[(0)] = cr44193_block_5);

(cr44193_state[(4)] = true);

(cr44193_state[(6)] = cr44193_exception);

return cr44193_state;
}});
var cr44193_block_16 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44193_block_16(cr44193_state){
try{var cr44193_place_60 = (cr44193_state[(4)]);
var cr44193_place_106 = cr44193_place_60;
var cr44193_place_107 = cljs.core.seq;
var cr44193_place_108 = cr44193_place_106;
var cr44193_place_109 = (function (){var G__44569 = cr44193_place_108;
var fexpr__44568 = cr44193_place_107;
return (fexpr__44568.cljs$core$IFn$_invoke$arity$1 ? fexpr__44568.cljs$core$IFn$_invoke$arity$1(G__44569) : fexpr__44568.call(null,G__44569));
})();
var cr44193_place_110 = cljs.core.first;
var cr44193_place_111 = cr44193_place_109;
var cr44193_place_112 = (function (){var G__44571 = cr44193_place_111;
var fexpr__44570 = cr44193_place_110;
return (fexpr__44570.cljs$core$IFn$_invoke$arity$1 ? fexpr__44570.cljs$core$IFn$_invoke$arity$1(G__44571) : fexpr__44570.call(null,G__44571));
})();
var cr44193_place_113 = cljs.core.next;
var cr44193_place_114 = cr44193_place_109;
var cr44193_place_115 = (function (){var G__44573 = cr44193_place_114;
var fexpr__44572 = cr44193_place_113;
return (fexpr__44572.cljs$core$IFn$_invoke$arity$1 ? fexpr__44572.cljs$core$IFn$_invoke$arity$1(G__44573) : fexpr__44572.call(null,G__44573));
})();
var cr44193_place_116 = cr44193_place_112;
var cr44193_place_117 = cr44193_place_115;
var cr44193_place_118 = console;
var cr44193_place_119 = "Next attempt in ";
var cr44193_place_120 = cr44193_place_116;
var cr44193_place_121 = (1000);
var cr44193_place_122 = (cr44193_place_120 / cr44193_place_121);
var cr44193_place_123 = " seconds.";
var cr44193_place_124 = [cr44193_place_119,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr44193_place_122),cr44193_place_123].join('');
var cr44193_place_125 = cr44193_place_118.log(cr44193_place_124);
var cr44193_place_126 = missionary.core.sleep;
var cr44193_place_127 = cr44193_place_116;
var cr44193_place_128 = cr44193_place_117;
var cr44193_place_129 = (function (){var G__44575 = cr44193_place_127;
var G__44576 = cr44193_place_128;
var fexpr__44574 = cr44193_place_126;
return (fexpr__44574.cljs$core$IFn$_invoke$arity$2 ? fexpr__44574.cljs$core$IFn$_invoke$arity$2(G__44575,G__44576) : fexpr__44574.call(null,G__44575,G__44576));
})();
(cr44193_state[(0)] = cr44193_block_17);

(cr44193_state[(4)] = null);

return missionary.core.park(cr44193_place_129);
}catch (e44567){var cr44193_exception = e44567;
(cr44193_state[(0)] = null);

(cr44193_state[(1)] = null);

(cr44193_state[(4)] = null);

(cr44193_state[(2)] = null);

throw cr44193_exception;
}});
var cr44193_block_2 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44193_block_2(cr44193_state){
try{var cr44193_place_4 = (cr44193_state[(3)]);
var cr44193_place_14 = (function (x){
var fexpr__44331 = (cr44193_place_4[(0)]);
var G__44579 = x;
var fexpr__44578 = fexpr__44331;
return (fexpr__44578.cljs$core$IFn$_invoke$arity$1 ? fexpr__44578.cljs$core$IFn$_invoke$arity$1(G__44579) : fexpr__44578.call(null,G__44579));
});
var cr44193_place_15 = cljs.core.partial;
var cr44193_place_34 = (function (cr44332_state){
try{var cr44332_place_13 = (cr44332_state[(2)]);
(cr44332_state[(0)] = null);

(cr44332_state[(2)] = null);

return cr44332_place_13;
}catch (e44616){var e44408 = e44616;
var cr44332_exception = e44408;
(cr44332_state[(0)] = null);

(cr44332_state[(2)] = null);

throw cr44332_exception;
}});
var cr44193_place_17 = (function (cr44332_state){
try{var cr44332_place_11 = missionary.core.unpark();
var cr44332_place_12 = cr44332_place_11;
var cr44332_place_13 = null;
var G__44375 = cr44332_place_12;
var G__44618 = G__44375;
switch (G__44618) {
case (0):
(cr44332_state[(0)] = cr44193_place_30);

(cr44332_state[(2)] = cr44332_place_13);

return cr44332_state;

break;
case (1):
(cr44332_state[(0)] = cr44193_place_32);

(cr44332_state[(2)] = cr44332_place_13);

return cr44332_state;

break;
default:
(cr44332_state[(0)] = cr44193_place_24);

(cr44332_state[(1)] = null);

(cr44332_state[(1)] = cr44332_place_11);

return cr44332_state;

}
}catch (e44617){var e44374 = e44617;
var cr44332_exception = e44374;
(cr44332_state[(0)] = null);

(cr44332_state[(1)] = null);

throw cr44332_exception;
}});
var cr44193_place_23 = (function (cr44332_state){
try{var cr44332_place_51 = missionary.core.unpark();
(cr44332_state[(0)] = cr44193_place_31);

(cr44332_state[(3)] = cr44332_place_51);

return cr44332_state;
}catch (e44619){var e44385 = e44619;
var cr44332_exception = e44385;
(cr44332_state[(0)] = null);

(cr44332_state[(3)] = null);

(cr44332_state[(2)] = null);

throw cr44332_exception;
}});
var cr44193_place_16 = (function (cr44332_state){
try{var cr44332_place_33 = (cr44332_state[(4)]);
var cr44332_place_43 = cr44332_place_33;
(cr44332_state[(0)] = cr44193_place_21);

(cr44332_state[(4)] = null);

(cr44332_state[(1)] = cr44332_place_43);

return cr44332_state;
}catch (e44620){var e44373 = e44620;
var cr44332_exception = e44373;
(cr44332_state[(0)] = null);

(cr44332_state[(3)] = null);

(cr44332_state[(2)] = null);

(cr44332_state[(4)] = null);

(cr44332_state[(1)] = null);

throw cr44332_exception;
}});
var cr44193_place_25 = (function (cr44332_state){
try{var cr44332_place_40 = missionary.core.unpark();
var cr44332_place_41 = cr44332_place_40;
var cr44332_place_42 = null;
var G__44388 = cr44332_place_41;
var G__44622 = G__44388;
switch (G__44622) {
case (0):
(cr44332_state[(0)] = cr44193_place_16);

(cr44332_state[(1)] = null);

(cr44332_state[(1)] = cr44332_place_42);

return cr44332_state;

break;
case (1):
(cr44332_state[(0)] = cr44193_place_27);

(cr44332_state[(3)] = null);

(cr44332_state[(4)] = null);

return cr44332_state;

break;
default:
(cr44332_state[(0)] = cr44193_place_29);

(cr44332_state[(1)] = null);

(cr44332_state[(3)] = null);

(cr44332_state[(2)] = null);

(cr44332_state[(4)] = null);

(cr44332_state[(1)] = cr44332_place_40);

return cr44332_state;

}
}catch (e44621){var e44387 = e44621;
var cr44332_exception = e44387;
(cr44332_state[(0)] = null);

(cr44332_state[(1)] = null);

(cr44332_state[(3)] = null);

(cr44332_state[(2)] = null);

(cr44332_state[(4)] = null);

throw cr44332_exception;
}});
var cr44193_place_21 = (function (cr44332_state){
try{var cr44332_place_42 = (cr44332_state[(1)]);
(cr44332_state[(0)] = cr44193_place_31);

(cr44332_state[(1)] = null);

(cr44332_state[(3)] = cr44332_place_42);

return cr44332_state;
}catch (e44623){var e44383 = e44623;
var cr44332_exception = e44383;
(cr44332_state[(0)] = null);

(cr44332_state[(3)] = null);

(cr44332_state[(2)] = null);

(cr44332_state[(1)] = null);

throw cr44332_exception;
}});
var cr44193_place_18 = (function (cr44332_state){
try{var cr44332_place_23 = missionary.core.unpark();
var cr44332_place_24 = (1);
var cr44332_place_25 = missionary.core.none;
(cr44332_state[(0)] = cr44193_place_22);

return missionary.core.fork(cr44332_place_24,cr44332_place_25);
}catch (e44624){var e44376 = e44624;
var cr44332_exception = e44376;
(cr44332_state[(0)] = null);

(cr44332_state[(2)] = null);

throw cr44332_exception;
}});
var cr44193_place_26 = (function (cr44332_state){
try{var cr44332_place_4 = (cr44332_state[(1)]);
var cr44332_place_27 = cr44332_place_4;
(cr44332_state[(0)] = cr44193_place_20);

return missionary.core.park(cr44332_place_27);
}catch (e44625){var e44389 = e44625;
var cr44332_exception = e44389;
(cr44332_state[(0)] = null);

(cr44332_state[(1)] = null);

(cr44332_state[(2)] = null);

throw cr44332_exception;
}});
var cr44193_place_28 = (function (cr44332_state){
try{var cr44332_place_49 = (1);
var cr44332_place_50 = missionary.core.none;
(cr44332_state[(0)] = cr44193_place_23);

return missionary.core.fork(cr44332_place_49,cr44332_place_50);
}catch (e44626){var e44391 = e44626;
var cr44332_exception = e44391;
(cr44332_state[(0)] = null);

(cr44332_state[(3)] = null);

(cr44332_state[(2)] = null);

throw cr44332_exception;
}});
var cr44193_place_24 = (function (cr44332_state){
try{var cr44332_place_11 = (cr44332_state[(1)]);
var cr44332_place_52 = "No matching clause: ";
var cr44332_place_53 = cr44332_place_11;
var cr44332_place_54 = [cr44332_place_52,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr44332_place_53)].join('');
var cr44332_place_55 = (new Error(cr44332_place_54));
var cr44332_place_56 = (function(){throw cr44332_place_55})();
(cr44332_state[(0)] = null);

(cr44332_state[(1)] = null);

return null;
}catch (e44627){var e44386 = e44627;
var cr44332_exception = e44386;
(cr44332_state[(0)] = null);

(cr44332_state[(1)] = null);

throw cr44332_exception;
}});
var cr44193_place_22 = (function (cr44332_state){
try{var cr44332_place_26 = missionary.core.unpark();
(cr44332_state[(0)] = cr44193_place_34);

(cr44332_state[(2)] = cr44332_place_26);

return cr44332_state;
}catch (e44628){var e44384 = e44628;
var cr44332_exception = e44384;
(cr44332_state[(0)] = null);

(cr44332_state[(2)] = null);

throw cr44332_exception;
}});
var cr44193_place_29 = (function (cr44332_state){
try{var cr44332_place_40 = (cr44332_state[(1)]);
var cr44332_place_44 = "No matching clause: ";
var cr44332_place_45 = cr44332_place_40;
var cr44332_place_46 = [cr44332_place_44,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr44332_place_45)].join('');
var cr44332_place_47 = (new Error(cr44332_place_46));
var cr44332_place_48 = (function(){throw cr44332_place_47})();
(cr44332_state[(0)] = null);

(cr44332_state[(1)] = null);

return null;
}catch (e44629){var e44392 = e44629;
var cr44332_exception = e44392;
(cr44332_state[(0)] = null);

(cr44332_state[(1)] = null);

throw cr44332_exception;
}});
var cr44193_place_32 = (function (cr44332_state){
try{(cr44332_state[(0)] = cr44193_place_26);

return cr44332_state;
}catch (e44630){var e44401 = e44630;
var cr44332_exception = e44401;
(cr44332_state[(0)] = null);

(cr44332_state[(1)] = null);

(cr44332_state[(2)] = null);

throw cr44332_exception;
}});
var cr44193_place_27 = (function (cr44332_state){
try{(cr44332_state[(0)] = cr44193_place_26);

return cr44332_state;
}catch (e44631){var e44390 = e44631;
var cr44332_exception = e44390;
(cr44332_state[(0)] = null);

(cr44332_state[(1)] = null);

(cr44332_state[(2)] = null);

throw cr44332_exception;
}});
var cr44193_place_31 = (function (cr44332_state){
try{var cr44332_place_32 = (cr44332_state[(3)]);
(cr44332_state[(0)] = cr44193_place_34);

(cr44332_state[(3)] = null);

(cr44332_state[(2)] = cr44332_place_32);

return cr44332_state;
}catch (e44632){var e44400 = e44632;
var cr44332_exception = e44400;
(cr44332_state[(0)] = null);

(cr44332_state[(3)] = null);

(cr44332_state[(2)] = null);

throw cr44332_exception;
}});
var cr44193_place_19 = (function (cr44332_state){
try{var cr44332_place_28 = (cr44332_state[(4)]);
var cr44332_place_33 = cr44332_place_28;
var cr44332_place_34 = (1);
var cr44332_place_35 = missionary.core.seed;
var cr44332_place_36 = cljs.core.range;
var cr44332_place_37 = (2);
var cr44332_place_38 = (function (){var G__44379 = cr44332_place_37;
var fexpr__44378 = cr44332_place_36;
var G__44635 = G__44379;
var fexpr__44634 = fexpr__44378;
return (fexpr__44634.cljs$core$IFn$_invoke$arity$1 ? fexpr__44634.cljs$core$IFn$_invoke$arity$1(G__44635) : fexpr__44634.call(null,G__44635));
})();
var cr44332_place_39 = (function (){var G__44381 = cr44332_place_38;
var fexpr__44380 = cr44332_place_35;
var G__44637 = G__44381;
var fexpr__44636 = fexpr__44380;
return (fexpr__44636.cljs$core$IFn$_invoke$arity$1 ? fexpr__44636.cljs$core$IFn$_invoke$arity$1(G__44637) : fexpr__44636.call(null,G__44637));
})();
(cr44332_state[(0)] = cr44193_place_25);

(cr44332_state[(4)] = null);

(cr44332_state[(4)] = cr44332_place_33);

return missionary.core.fork(cr44332_place_34,cr44332_place_39);
}catch (e44633){var e44377 = e44633;
var cr44332_exception = e44377;
(cr44332_state[(0)] = null);

(cr44332_state[(1)] = null);

(cr44332_state[(3)] = null);

(cr44332_state[(2)] = null);

(cr44332_state[(4)] = null);

throw cr44332_exception;
}});
var cr44193_place_20 = (function (cr44332_state){
try{var cr44332_place_28 = missionary.core.unpark();
var cr44332_place_29 = cr44332_place_28;
var cr44332_place_30 = null;
var cr44332_place_31 = (cr44332_place_29 == cr44332_place_30);
var cr44332_place_32 = null;
if(cr44332_place_31){
(cr44332_state[(0)] = cr44193_place_28);

(cr44332_state[(1)] = null);

(cr44332_state[(3)] = cr44332_place_32);

return cr44332_state;
} else {
(cr44332_state[(0)] = cr44193_place_19);

(cr44332_state[(4)] = cr44332_place_28);

(cr44332_state[(3)] = cr44332_place_32);

return cr44332_state;
}
}catch (e44638){var e44382 = e44638;
var cr44332_exception = e44382;
(cr44332_state[(0)] = null);

(cr44332_state[(1)] = null);

(cr44332_state[(2)] = null);

throw cr44332_exception;
}});
var cr44193_place_33 = (function (cr44332_state){
try{var cr44332_place_0 = console;
var cr44332_place_1 = "Connected.";
var cr44332_place_2 = cr44332_place_0.log(cr44332_place_1);
var cr44332_place_3 = missionary.core.rdv;
var cr44332_place_4 = (function (){var fexpr__44403 = cr44332_place_3;
var fexpr__44640 = fexpr__44403;
return (fexpr__44640.cljs$core$IFn$_invoke$arity$0 ? fexpr__44640.cljs$core$IFn$_invoke$arity$0() : fexpr__44640.call(null));
})();
var cr44332_place_5 = (2);
var cr44332_place_6 = missionary.core.seed;
var cr44332_place_7 = cljs.core.range;
var cr44332_place_8 = (2);
var cr44332_place_9 = (function (){var G__44405 = cr44332_place_8;
var fexpr__44404 = cr44332_place_7;
var G__44642 = G__44405;
var fexpr__44641 = fexpr__44404;
return (fexpr__44641.cljs$core$IFn$_invoke$arity$1 ? fexpr__44641.cljs$core$IFn$_invoke$arity$1(G__44642) : fexpr__44641.call(null,G__44642));
})();
var cr44332_place_10 = (function (){var G__44407 = cr44332_place_9;
var fexpr__44406 = cr44332_place_6;
var G__44644 = G__44407;
var fexpr__44643 = fexpr__44406;
return (fexpr__44643.cljs$core$IFn$_invoke$arity$1 ? fexpr__44643.cljs$core$IFn$_invoke$arity$1(G__44644) : fexpr__44643.call(null,G__44644));
})();
(cr44332_state[(0)] = cr44193_place_17);

(cr44332_state[(1)] = cr44332_place_4);

return missionary.core.fork(cr44332_place_5,cr44332_place_10);
}catch (e44639){var e44402 = e44639;
var cr44332_exception = e44402;
(cr44332_state[(0)] = null);

throw cr44332_exception;
}});
var cr44193_place_30 = (function (cr44332_state){
try{var cr44332_place_4 = (cr44332_state[(1)]);
var cr44332_place_14 = cr44332_place_4;
var cr44332_place_15 = hyperfiddle.electric.impl.runtime.subject_at;
var cr44332_place_16 = cr44193_place_4;
var cr44332_place_17 = (0);
var cr44332_place_18 = (function (){var G__44395 = cr44332_place_16;
var G__44396 = cr44332_place_17;
var fexpr__44394 = cr44332_place_15;
var G__44647 = G__44395;
var G__44648 = G__44396;
var fexpr__44646 = fexpr__44394;
return (fexpr__44646.cljs$core$IFn$_invoke$arity$2 ? fexpr__44646.cljs$core$IFn$_invoke$arity$2(G__44647,G__44648) : fexpr__44646.call(null,G__44647,G__44648));
})();
var cr44332_place_19 = client;
var cr44332_place_20 = cr44332_place_14;
var cr44332_place_21 = cr44332_place_18;
var cr44332_place_22 = (function (){var G__44398 = cr44332_place_20;
var G__44399 = cr44332_place_21;
var fexpr__44397 = cr44332_place_19;
var G__44650 = G__44398;
var G__44651 = G__44399;
var fexpr__44649 = fexpr__44397;
return (fexpr__44649.cljs$core$IFn$_invoke$arity$2 ? fexpr__44649.cljs$core$IFn$_invoke$arity$2(G__44650,G__44651) : fexpr__44649.call(null,G__44650,G__44651));
})();
(cr44332_state[(0)] = cr44193_place_18);

(cr44332_state[(1)] = null);

return missionary.core.park(cr44332_place_22);
}catch (e44645){var e44393 = e44645;
var cr44332_exception = e44393;
(cr44332_state[(0)] = null);

(cr44332_state[(1)] = null);

(cr44332_state[(2)] = null);

throw cr44332_exception;
}});
var cr44193_place_35 = cloroutine.impl.coroutine;
var cr44193_place_36 = cljs.core.object_array;
var cr44193_place_37 = (5);
var cr44193_place_38 = (function (){var G__44653 = cr44193_place_37;
var fexpr__44652 = cr44193_place_36;
return (fexpr__44652.cljs$core$IFn$_invoke$arity$1 ? fexpr__44652.cljs$core$IFn$_invoke$arity$1(G__44653) : fexpr__44652.call(null,G__44653));
})();
var cr44193_place_39 = cr44193_place_38;
var cr44193_place_40 = (0);
var cr44193_place_41 = cr44193_place_33;
var cr44193_place_42 = (cr44193_place_39[cr44193_place_40] = cr44193_place_41);
var cr44193_place_43 = cr44193_place_38;
var cr44193_place_44 = (function (){var G__44655 = cr44193_place_43;
var fexpr__44654 = cr44193_place_35;
return (fexpr__44654.cljs$core$IFn$_invoke$arity$1 ? fexpr__44654.cljs$core$IFn$_invoke$arity$1(G__44655) : fexpr__44654.call(null,G__44655));
})();
var cr44193_place_45 = missionary.core.ap_run;
var cr44193_place_46 = (function (){var G__44657 = cr44193_place_44;
var G__44658 = cr44193_place_45;
var fexpr__44656 = cr44193_place_15;
return (fexpr__44656.cljs$core$IFn$_invoke$arity$2 ? fexpr__44656.cljs$core$IFn$_invoke$arity$2(G__44657,G__44658) : fexpr__44656.call(null,G__44657,G__44658));
})();
var cr44193_place_47 = conn;
var cr44193_place_48 = cr44193_place_14;
var cr44193_place_49 = cr44193_place_46;
var cr44193_place_50 = (function (){var G__44660 = cr44193_place_48;
var G__44661 = cr44193_place_49;
var fexpr__44659 = cr44193_place_47;
return (fexpr__44659.cljs$core$IFn$_invoke$arity$2 ? fexpr__44659.cljs$core$IFn$_invoke$arity$2(G__44660,G__44661) : fexpr__44659.call(null,G__44660,G__44661));
})();
(cr44193_state[(0)] = cr44193_block_3);

(cr44193_state[(3)] = null);

return missionary.core.park(cr44193_place_50);
}catch (e44577){var cr44193_exception = e44577;
(cr44193_state[(0)] = cr44193_block_4);

(cr44193_state[(3)] = null);

(cr44193_state[(6)] = cr44193_exception);

return cr44193_state;
}});
return cloroutine.impl.coroutine((function (){var G__44662 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((7));
(G__44662[(0)] = cr44193_block_0);

return G__44662;
})());
})(),missionary.core.sp_run);
});
hyperfiddle.electric_client.reload_when_stale = (function hyperfiddle$electric_client$reload_when_stale(task){
return (function (s,f){
var G__44663 = s;
var G__44664 = (function (error){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hyperfiddle.electric-client","stale-client","hyperfiddle.electric-client/stale-client",-343425405),new cljs.core.Keyword("hyperfiddle.electric","type","hyperfiddle.electric/type",1565804079).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(error)))){
console.log("Server and client version mismatch. Refreshing page.");

window.location.reload();
} else {
}

return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(error) : f.call(null,error));
});
return (task.cljs$core$IFn$_invoke$arity$2 ? task.cljs$core$IFn$_invoke$arity$2(G__44663,G__44664) : task.call(null,G__44663,G__44664));
});
});

//# sourceMappingURL=hyperfiddle.electric_client.js.map
