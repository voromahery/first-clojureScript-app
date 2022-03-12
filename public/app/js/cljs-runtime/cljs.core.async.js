goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30575 = arguments.length;
switch (G__30575) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30580 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30580 = (function (f,blockable,meta30581){
this.f = f;
this.blockable = blockable;
this.meta30581 = meta30581;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30580.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30582,meta30581__$1){
var self__ = this;
var _30582__$1 = this;
return (new cljs.core.async.t_cljs$core$async30580(self__.f,self__.blockable,meta30581__$1));
}));

(cljs.core.async.t_cljs$core$async30580.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30582){
var self__ = this;
var _30582__$1 = this;
return self__.meta30581;
}));

(cljs.core.async.t_cljs$core$async30580.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30580.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30580.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async30580.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async30580.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30581","meta30581",-897882760,null)], null);
}));

(cljs.core.async.t_cljs$core$async30580.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30580.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30580");

(cljs.core.async.t_cljs$core$async30580.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async30580");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30580.
 */
cljs.core.async.__GT_t_cljs$core$async30580 = (function cljs$core$async$__GT_t_cljs$core$async30580(f__$1,blockable__$1,meta30581){
return (new cljs.core.async.t_cljs$core$async30580(f__$1,blockable__$1,meta30581));
});

}

return (new cljs.core.async.t_cljs$core$async30580(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__30603 = arguments.length;
switch (G__30603) {
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
var G__30621 = arguments.length;
switch (G__30621) {
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
var G__30629 = arguments.length;
switch (G__30629) {
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
var val_32604 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32604) : fn1.call(null,val_32604));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32604) : fn1.call(null,val_32604));
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
var G__30636 = arguments.length;
switch (G__30636) {
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
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
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
var n__4741__auto___32606 = n;
var x_32607 = (0);
while(true){
if((x_32607 < n__4741__auto___32606)){
(a[x_32607] = x_32607);

var G__32608 = (x_32607 + (1));
x_32607 = G__32608;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30642 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30642 = (function (flag,meta30643){
this.flag = flag;
this.meta30643 = meta30643;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30642.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30644,meta30643__$1){
var self__ = this;
var _30644__$1 = this;
return (new cljs.core.async.t_cljs$core$async30642(self__.flag,meta30643__$1));
}));

(cljs.core.async.t_cljs$core$async30642.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30644){
var self__ = this;
var _30644__$1 = this;
return self__.meta30643;
}));

(cljs.core.async.t_cljs$core$async30642.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30642.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30642.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30642.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async30642.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30643","meta30643",-2123759051,null)], null);
}));

(cljs.core.async.t_cljs$core$async30642.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30642.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30642");

(cljs.core.async.t_cljs$core$async30642.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async30642");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30642.
 */
cljs.core.async.__GT_t_cljs$core$async30642 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30642(flag__$1,meta30643){
return (new cljs.core.async.t_cljs$core$async30642(flag__$1,meta30643));
});

}

return (new cljs.core.async.t_cljs$core$async30642(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30646 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30646 = (function (flag,cb,meta30647){
this.flag = flag;
this.cb = cb;
this.meta30647 = meta30647;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30646.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30648,meta30647__$1){
var self__ = this;
var _30648__$1 = this;
return (new cljs.core.async.t_cljs$core$async30646(self__.flag,self__.cb,meta30647__$1));
}));

(cljs.core.async.t_cljs$core$async30646.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30648){
var self__ = this;
var _30648__$1 = this;
return self__.meta30647;
}));

(cljs.core.async.t_cljs$core$async30646.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30646.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30646.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30646.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async30646.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30647","meta30647",323979582,null)], null);
}));

(cljs.core.async.t_cljs$core$async30646.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30646.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30646");

(cljs.core.async.t_cljs$core$async30646.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async30646");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30646.
 */
cljs.core.async.__GT_t_cljs$core$async30646 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30646(flag__$1,cb__$1,meta30647){
return (new cljs.core.async.t_cljs$core$async30646(flag__$1,cb__$1,meta30647));
});

}

return (new cljs.core.async.t_cljs$core$async30646(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__30659_SHARP_){
var G__30663 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30659_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30663) : fret.call(null,G__30663));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30660_SHARP_){
var G__30665 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30660_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30665) : fret.call(null,G__30665));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4253__auto__ = wport;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32609 = (i + (1));
i = G__32609;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4253__auto__ = ret;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4251__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4251__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
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
var args__4870__auto__ = [];
var len__4864__auto___32610 = arguments.length;
var i__4865__auto___32611 = (0);
while(true){
if((i__4865__auto___32611 < len__4864__auto___32610)){
args__4870__auto__.push((arguments[i__4865__auto___32611]));

var G__32612 = (i__4865__auto___32611 + (1));
i__4865__auto___32611 = G__32612;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30672){
var map__30673 = p__30672;
var map__30673__$1 = cljs.core.__destructure_map(map__30673);
var opts = map__30673__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30670){
var G__30671 = cljs.core.first(seq30670);
var seq30670__$1 = cljs.core.next(seq30670);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30671,seq30670__$1);
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
var G__30677 = arguments.length;
switch (G__30677) {
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
var c__30454__auto___32614 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30460__auto__ = (function (){var switch__30233__auto__ = (function (state_30712){
var state_val_30713 = (state_30712[(1)]);
if((state_val_30713 === (7))){
var inst_30708 = (state_30712[(2)]);
var state_30712__$1 = state_30712;
var statearr_30715_32615 = state_30712__$1;
(statearr_30715_32615[(2)] = inst_30708);

(statearr_30715_32615[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30713 === (1))){
var state_30712__$1 = state_30712;
var statearr_30716_32616 = state_30712__$1;
(statearr_30716_32616[(2)] = null);

(statearr_30716_32616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30713 === (4))){
var inst_30685 = (state_30712[(7)]);
var inst_30685__$1 = (state_30712[(2)]);
var inst_30690 = (inst_30685__$1 == null);
var state_30712__$1 = (function (){var statearr_30723 = state_30712;
(statearr_30723[(7)] = inst_30685__$1);

return statearr_30723;
})();
if(cljs.core.truth_(inst_30690)){
var statearr_30724_32617 = state_30712__$1;
(statearr_30724_32617[(1)] = (5));

} else {
var statearr_30725_32618 = state_30712__$1;
(statearr_30725_32618[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30713 === (13))){
var state_30712__$1 = state_30712;
var statearr_30727_32619 = state_30712__$1;
(statearr_30727_32619[(2)] = null);

(statearr_30727_32619[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30713 === (6))){
var inst_30685 = (state_30712[(7)]);
var state_30712__$1 = state_30712;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30712__$1,(11),to,inst_30685);
} else {
if((state_val_30713 === (3))){
var inst_30710 = (state_30712[(2)]);
var state_30712__$1 = state_30712;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30712__$1,inst_30710);
} else {
if((state_val_30713 === (12))){
var state_30712__$1 = state_30712;
var statearr_30730_32620 = state_30712__$1;
(statearr_30730_32620[(2)] = null);

(statearr_30730_32620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30713 === (2))){
var state_30712__$1 = state_30712;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30712__$1,(4),from);
} else {
if((state_val_30713 === (11))){
var inst_30701 = (state_30712[(2)]);
var state_30712__$1 = state_30712;
if(cljs.core.truth_(inst_30701)){
var statearr_30731_32621 = state_30712__$1;
(statearr_30731_32621[(1)] = (12));

} else {
var statearr_30733_32622 = state_30712__$1;
(statearr_30733_32622[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30713 === (9))){
var state_30712__$1 = state_30712;
var statearr_30735_32623 = state_30712__$1;
(statearr_30735_32623[(2)] = null);

(statearr_30735_32623[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30713 === (5))){
var state_30712__$1 = state_30712;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30736_32624 = state_30712__$1;
(statearr_30736_32624[(1)] = (8));

} else {
var statearr_30737_32625 = state_30712__$1;
(statearr_30737_32625[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30713 === (14))){
var inst_30706 = (state_30712[(2)]);
var state_30712__$1 = state_30712;
var statearr_30738_32626 = state_30712__$1;
(statearr_30738_32626[(2)] = inst_30706);

(statearr_30738_32626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30713 === (10))){
var inst_30697 = (state_30712[(2)]);
var state_30712__$1 = state_30712;
var statearr_30739_32627 = state_30712__$1;
(statearr_30739_32627[(2)] = inst_30697);

(statearr_30739_32627[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30713 === (8))){
var inst_30693 = cljs.core.async.close_BANG_(to);
var state_30712__$1 = state_30712;
var statearr_30740_32628 = state_30712__$1;
(statearr_30740_32628[(2)] = inst_30693);

(statearr_30740_32628[(1)] = (10));


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
var cljs$core$async$state_machine__30234__auto__ = null;
var cljs$core$async$state_machine__30234__auto____0 = (function (){
var statearr_30741 = [null,null,null,null,null,null,null,null];
(statearr_30741[(0)] = cljs$core$async$state_machine__30234__auto__);

(statearr_30741[(1)] = (1));

return statearr_30741;
});
var cljs$core$async$state_machine__30234__auto____1 = (function (state_30712){
while(true){
var ret_value__30235__auto__ = (function (){try{while(true){
var result__30236__auto__ = switch__30233__auto__(state_30712);
if(cljs.core.keyword_identical_QMARK_(result__30236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30236__auto__;
}
break;
}
}catch (e30742){var ex__30237__auto__ = e30742;
var statearr_30743_32629 = state_30712;
(statearr_30743_32629[(2)] = ex__30237__auto__);


if(cljs.core.seq((state_30712[(4)]))){
var statearr_30744_32630 = state_30712;
(statearr_30744_32630[(1)] = cljs.core.first((state_30712[(4)])));

} else {
throw ex__30237__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32631 = state_30712;
state_30712 = G__32631;
continue;
} else {
return ret_value__30235__auto__;
}
break;
}
});
cljs$core$async$state_machine__30234__auto__ = function(state_30712){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30234__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30234__auto____1.call(this,state_30712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30234__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30234__auto____0;
cljs$core$async$state_machine__30234__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30234__auto____1;
return cljs$core$async$state_machine__30234__auto__;
})()
})();
var state__30461__auto__ = (function (){var statearr_30746 = f__30460__auto__();
(statearr_30746[(6)] = c__30454__auto___32614);

return statearr_30746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30461__auto__);
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
var process = (function (p__30749){
var vec__30750 = p__30749;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30750,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30750,(1),null);
var job = vec__30750;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30454__auto___32632 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30460__auto__ = (function (){var switch__30233__auto__ = (function (state_30758){
var state_val_30759 = (state_30758[(1)]);
if((state_val_30759 === (1))){
var state_30758__$1 = state_30758;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30758__$1,(2),res,v);
} else {
if((state_val_30759 === (2))){
var inst_30754 = (state_30758[(2)]);
var inst_30755 = cljs.core.async.close_BANG_(res);
var state_30758__$1 = (function (){var statearr_30760 = state_30758;
(statearr_30760[(7)] = inst_30754);

return statearr_30760;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30758__$1,inst_30755);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30234__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30234__auto____0 = (function (){
var statearr_30761 = [null,null,null,null,null,null,null,null];
(statearr_30761[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30234__auto__);

(statearr_30761[(1)] = (1));

return statearr_30761;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30234__auto____1 = (function (state_30758){
while(true){
var ret_value__30235__auto__ = (function (){try{while(true){
var result__30236__auto__ = switch__30233__auto__(state_30758);
if(cljs.core.keyword_identical_QMARK_(result__30236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30236__auto__;
}
break;
}
}catch (e30762){var ex__30237__auto__ = e30762;
var statearr_30763_32633 = state_30758;
(statearr_30763_32633[(2)] = ex__30237__auto__);


if(cljs.core.seq((state_30758[(4)]))){
var statearr_30766_32634 = state_30758;
(statearr_30766_32634[(1)] = cljs.core.first((state_30758[(4)])));

} else {
throw ex__30237__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32635 = state_30758;
state_30758 = G__32635;
continue;
} else {
return ret_value__30235__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30234__auto__ = function(state_30758){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30234__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30234__auto____1.call(this,state_30758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30234__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30234__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30234__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30234__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30234__auto__;
})()
})();
var state__30461__auto__ = (function (){var statearr_30771 = f__30460__auto__();
(statearr_30771[(6)] = c__30454__auto___32632);

return statearr_30771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30461__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__30772){
var vec__30773 = p__30772;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30773,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30773,(1),null);
var job = vec__30773;
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
var n__4741__auto___32636 = n;
var __32637 = (0);
while(true){
if((__32637 < n__4741__auto___32636)){
var G__30777_32638 = type;
var G__30777_32639__$1 = (((G__30777_32638 instanceof cljs.core.Keyword))?G__30777_32638.fqn:null);
switch (G__30777_32639__$1) {
case "compute":
var c__30454__auto___32641 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32637,c__30454__auto___32641,G__30777_32638,G__30777_32639__$1,n__4741__auto___32636,jobs,results,process,async){
return (function (){
var f__30460__auto__ = (function (){var switch__30233__auto__ = ((function (__32637,c__30454__auto___32641,G__30777_32638,G__30777_32639__$1,n__4741__auto___32636,jobs,results,process,async){
return (function (state_30790){
var state_val_30791 = (state_30790[(1)]);
if((state_val_30791 === (1))){
var state_30790__$1 = state_30790;
var statearr_30792_32642 = state_30790__$1;
(statearr_30792_32642[(2)] = null);

(statearr_30792_32642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30791 === (2))){
var state_30790__$1 = state_30790;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30790__$1,(4),jobs);
} else {
if((state_val_30791 === (3))){
var inst_30788 = (state_30790[(2)]);
var state_30790__$1 = state_30790;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30790__$1,inst_30788);
} else {
if((state_val_30791 === (4))){
var inst_30780 = (state_30790[(2)]);
var inst_30781 = process(inst_30780);
var state_30790__$1 = state_30790;
if(cljs.core.truth_(inst_30781)){
var statearr_30793_32645 = state_30790__$1;
(statearr_30793_32645[(1)] = (5));

} else {
var statearr_30794_32646 = state_30790__$1;
(statearr_30794_32646[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30791 === (5))){
var state_30790__$1 = state_30790;
var statearr_30795_32647 = state_30790__$1;
(statearr_30795_32647[(2)] = null);

(statearr_30795_32647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30791 === (6))){
var state_30790__$1 = state_30790;
var statearr_30796_32648 = state_30790__$1;
(statearr_30796_32648[(2)] = null);

(statearr_30796_32648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30791 === (7))){
var inst_30786 = (state_30790[(2)]);
var state_30790__$1 = state_30790;
var statearr_30797_32649 = state_30790__$1;
(statearr_30797_32649[(2)] = inst_30786);

(statearr_30797_32649[(1)] = (3));


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
});})(__32637,c__30454__auto___32641,G__30777_32638,G__30777_32639__$1,n__4741__auto___32636,jobs,results,process,async))
;
return ((function (__32637,switch__30233__auto__,c__30454__auto___32641,G__30777_32638,G__30777_32639__$1,n__4741__auto___32636,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30234__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30234__auto____0 = (function (){
var statearr_30799 = [null,null,null,null,null,null,null];
(statearr_30799[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30234__auto__);

(statearr_30799[(1)] = (1));

return statearr_30799;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30234__auto____1 = (function (state_30790){
while(true){
var ret_value__30235__auto__ = (function (){try{while(true){
var result__30236__auto__ = switch__30233__auto__(state_30790);
if(cljs.core.keyword_identical_QMARK_(result__30236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30236__auto__;
}
break;
}
}catch (e30800){var ex__30237__auto__ = e30800;
var statearr_30801_32650 = state_30790;
(statearr_30801_32650[(2)] = ex__30237__auto__);


if(cljs.core.seq((state_30790[(4)]))){
var statearr_30802_32651 = state_30790;
(statearr_30802_32651[(1)] = cljs.core.first((state_30790[(4)])));

} else {
throw ex__30237__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32652 = state_30790;
state_30790 = G__32652;
continue;
} else {
return ret_value__30235__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30234__auto__ = function(state_30790){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30234__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30234__auto____1.call(this,state_30790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30234__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30234__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30234__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30234__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30234__auto__;
})()
;})(__32637,switch__30233__auto__,c__30454__auto___32641,G__30777_32638,G__30777_32639__$1,n__4741__auto___32636,jobs,results,process,async))
})();
var state__30461__auto__ = (function (){var statearr_30803 = f__30460__auto__();
(statearr_30803[(6)] = c__30454__auto___32641);

return statearr_30803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30461__auto__);
});})(__32637,c__30454__auto___32641,G__30777_32638,G__30777_32639__$1,n__4741__auto___32636,jobs,results,process,async))
);


break;
case "async":
var c__30454__auto___32653 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32637,c__30454__auto___32653,G__30777_32638,G__30777_32639__$1,n__4741__auto___32636,jobs,results,process,async){
return (function (){
var f__30460__auto__ = (function (){var switch__30233__auto__ = ((function (__32637,c__30454__auto___32653,G__30777_32638,G__30777_32639__$1,n__4741__auto___32636,jobs,results,process,async){
return (function (state_30816){
var state_val_30817 = (state_30816[(1)]);
if((state_val_30817 === (1))){
var state_30816__$1 = state_30816;
var statearr_30818_32654 = state_30816__$1;
(statearr_30818_32654[(2)] = null);

(statearr_30818_32654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30817 === (2))){
var state_30816__$1 = state_30816;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30816__$1,(4),jobs);
} else {
if((state_val_30817 === (3))){
var inst_30814 = (state_30816[(2)]);
var state_30816__$1 = state_30816;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30816__$1,inst_30814);
} else {
if((state_val_30817 === (4))){
var inst_30806 = (state_30816[(2)]);
var inst_30807 = async(inst_30806);
var state_30816__$1 = state_30816;
if(cljs.core.truth_(inst_30807)){
var statearr_30825_32655 = state_30816__$1;
(statearr_30825_32655[(1)] = (5));

} else {
var statearr_30827_32656 = state_30816__$1;
(statearr_30827_32656[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30817 === (5))){
var state_30816__$1 = state_30816;
var statearr_30829_32657 = state_30816__$1;
(statearr_30829_32657[(2)] = null);

(statearr_30829_32657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30817 === (6))){
var state_30816__$1 = state_30816;
var statearr_30832_32658 = state_30816__$1;
(statearr_30832_32658[(2)] = null);

(statearr_30832_32658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30817 === (7))){
var inst_30812 = (state_30816[(2)]);
var state_30816__$1 = state_30816;
var statearr_30833_32659 = state_30816__$1;
(statearr_30833_32659[(2)] = inst_30812);

(statearr_30833_32659[(1)] = (3));


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
});})(__32637,c__30454__auto___32653,G__30777_32638,G__30777_32639__$1,n__4741__auto___32636,jobs,results,process,async))
;
return ((function (__32637,switch__30233__auto__,c__30454__auto___32653,G__30777_32638,G__30777_32639__$1,n__4741__auto___32636,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30234__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30234__auto____0 = (function (){
var statearr_30834 = [null,null,null,null,null,null,null];
(statearr_30834[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30234__auto__);

(statearr_30834[(1)] = (1));

return statearr_30834;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30234__auto____1 = (function (state_30816){
while(true){
var ret_value__30235__auto__ = (function (){try{while(true){
var result__30236__auto__ = switch__30233__auto__(state_30816);
if(cljs.core.keyword_identical_QMARK_(result__30236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30236__auto__;
}
break;
}
}catch (e30836){var ex__30237__auto__ = e30836;
var statearr_30838_32660 = state_30816;
(statearr_30838_32660[(2)] = ex__30237__auto__);


if(cljs.core.seq((state_30816[(4)]))){
var statearr_30839_32661 = state_30816;
(statearr_30839_32661[(1)] = cljs.core.first((state_30816[(4)])));

} else {
throw ex__30237__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32662 = state_30816;
state_30816 = G__32662;
continue;
} else {
return ret_value__30235__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30234__auto__ = function(state_30816){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30234__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30234__auto____1.call(this,state_30816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30234__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30234__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30234__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30234__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30234__auto__;
})()
;})(__32637,switch__30233__auto__,c__30454__auto___32653,G__30777_32638,G__30777_32639__$1,n__4741__auto___32636,jobs,results,process,async))
})();
var state__30461__auto__ = (function (){var statearr_30842 = f__30460__auto__();
(statearr_30842[(6)] = c__30454__auto___32653);

return statearr_30842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30461__auto__);
});})(__32637,c__30454__auto___32653,G__30777_32638,G__30777_32639__$1,n__4741__auto___32636,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30777_32639__$1)].join('')));

}

var G__32663 = (__32637 + (1));
__32637 = G__32663;
continue;
} else {
}
break;
}

var c__30454__auto___32664 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30460__auto__ = (function (){var switch__30233__auto__ = (function (state_30877){
var state_val_30878 = (state_30877[(1)]);
if((state_val_30878 === (7))){
var inst_30872 = (state_30877[(2)]);
var state_30877__$1 = state_30877;
var statearr_30884_32665 = state_30877__$1;
(statearr_30884_32665[(2)] = inst_30872);

(statearr_30884_32665[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30878 === (1))){
var state_30877__$1 = state_30877;
var statearr_30885_32666 = state_30877__$1;
(statearr_30885_32666[(2)] = null);

(statearr_30885_32666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30878 === (4))){
var inst_30848 = (state_30877[(7)]);
var inst_30848__$1 = (state_30877[(2)]);
var inst_30849 = (inst_30848__$1 == null);
var state_30877__$1 = (function (){var statearr_30888 = state_30877;
(statearr_30888[(7)] = inst_30848__$1);

return statearr_30888;
})();
if(cljs.core.truth_(inst_30849)){
var statearr_30889_32667 = state_30877__$1;
(statearr_30889_32667[(1)] = (5));

} else {
var statearr_30890_32668 = state_30877__$1;
(statearr_30890_32668[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30878 === (6))){
var inst_30857 = (state_30877[(8)]);
var inst_30848 = (state_30877[(7)]);
var inst_30857__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_30862 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30863 = [inst_30848,inst_30857__$1];
var inst_30864 = (new cljs.core.PersistentVector(null,2,(5),inst_30862,inst_30863,null));
var state_30877__$1 = (function (){var statearr_30893 = state_30877;
(statearr_30893[(8)] = inst_30857__$1);

return statearr_30893;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30877__$1,(8),jobs,inst_30864);
} else {
if((state_val_30878 === (3))){
var inst_30875 = (state_30877[(2)]);
var state_30877__$1 = state_30877;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30877__$1,inst_30875);
} else {
if((state_val_30878 === (2))){
var state_30877__$1 = state_30877;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30877__$1,(4),from);
} else {
if((state_val_30878 === (9))){
var inst_30869 = (state_30877[(2)]);
var state_30877__$1 = (function (){var statearr_30894 = state_30877;
(statearr_30894[(9)] = inst_30869);

return statearr_30894;
})();
var statearr_30896_32669 = state_30877__$1;
(statearr_30896_32669[(2)] = null);

(statearr_30896_32669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30878 === (5))){
var inst_30851 = cljs.core.async.close_BANG_(jobs);
var state_30877__$1 = state_30877;
var statearr_30902_32670 = state_30877__$1;
(statearr_30902_32670[(2)] = inst_30851);

(statearr_30902_32670[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30878 === (8))){
var inst_30857 = (state_30877[(8)]);
var inst_30866 = (state_30877[(2)]);
var state_30877__$1 = (function (){var statearr_30906 = state_30877;
(statearr_30906[(10)] = inst_30866);

return statearr_30906;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30877__$1,(9),results,inst_30857);
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
var cljs$core$async$pipeline_STAR__$_state_machine__30234__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30234__auto____0 = (function (){
var statearr_30911 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30911[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30234__auto__);

(statearr_30911[(1)] = (1));

return statearr_30911;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30234__auto____1 = (function (state_30877){
while(true){
var ret_value__30235__auto__ = (function (){try{while(true){
var result__30236__auto__ = switch__30233__auto__(state_30877);
if(cljs.core.keyword_identical_QMARK_(result__30236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30236__auto__;
}
break;
}
}catch (e30912){var ex__30237__auto__ = e30912;
var statearr_30913_32671 = state_30877;
(statearr_30913_32671[(2)] = ex__30237__auto__);


if(cljs.core.seq((state_30877[(4)]))){
var statearr_30914_32672 = state_30877;
(statearr_30914_32672[(1)] = cljs.core.first((state_30877[(4)])));

} else {
throw ex__30237__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32673 = state_30877;
state_30877 = G__32673;
continue;
} else {
return ret_value__30235__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30234__auto__ = function(state_30877){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30234__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30234__auto____1.call(this,state_30877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30234__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30234__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30234__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30234__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30234__auto__;
})()
})();
var state__30461__auto__ = (function (){var statearr_30915 = f__30460__auto__();
(statearr_30915[(6)] = c__30454__auto___32664);

return statearr_30915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30461__auto__);
}));


var c__30454__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30460__auto__ = (function (){var switch__30233__auto__ = (function (state_30958){
var state_val_30959 = (state_30958[(1)]);
if((state_val_30959 === (7))){
var inst_30954 = (state_30958[(2)]);
var state_30958__$1 = state_30958;
var statearr_30962_32674 = state_30958__$1;
(statearr_30962_32674[(2)] = inst_30954);

(statearr_30962_32674[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30959 === (20))){
var state_30958__$1 = state_30958;
var statearr_30963_32675 = state_30958__$1;
(statearr_30963_32675[(2)] = null);

(statearr_30963_32675[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30959 === (1))){
var state_30958__$1 = state_30958;
var statearr_30964_32676 = state_30958__$1;
(statearr_30964_32676[(2)] = null);

(statearr_30964_32676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30959 === (4))){
var inst_30919 = (state_30958[(7)]);
var inst_30919__$1 = (state_30958[(2)]);
var inst_30920 = (inst_30919__$1 == null);
var state_30958__$1 = (function (){var statearr_30966 = state_30958;
(statearr_30966[(7)] = inst_30919__$1);

return statearr_30966;
})();
if(cljs.core.truth_(inst_30920)){
var statearr_30967_32677 = state_30958__$1;
(statearr_30967_32677[(1)] = (5));

} else {
var statearr_30968_32679 = state_30958__$1;
(statearr_30968_32679[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30959 === (15))){
var inst_30936 = (state_30958[(8)]);
var state_30958__$1 = state_30958;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30958__$1,(18),to,inst_30936);
} else {
if((state_val_30959 === (21))){
var inst_30949 = (state_30958[(2)]);
var state_30958__$1 = state_30958;
var statearr_30969_32680 = state_30958__$1;
(statearr_30969_32680[(2)] = inst_30949);

(statearr_30969_32680[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30959 === (13))){
var inst_30951 = (state_30958[(2)]);
var state_30958__$1 = (function (){var statearr_30970 = state_30958;
(statearr_30970[(9)] = inst_30951);

return statearr_30970;
})();
var statearr_30971_32681 = state_30958__$1;
(statearr_30971_32681[(2)] = null);

(statearr_30971_32681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30959 === (6))){
var inst_30919 = (state_30958[(7)]);
var state_30958__$1 = state_30958;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30958__$1,(11),inst_30919);
} else {
if((state_val_30959 === (17))){
var inst_30944 = (state_30958[(2)]);
var state_30958__$1 = state_30958;
if(cljs.core.truth_(inst_30944)){
var statearr_30988_32682 = state_30958__$1;
(statearr_30988_32682[(1)] = (19));

} else {
var statearr_30989_32683 = state_30958__$1;
(statearr_30989_32683[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30959 === (3))){
var inst_30956 = (state_30958[(2)]);
var state_30958__$1 = state_30958;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30958__$1,inst_30956);
} else {
if((state_val_30959 === (12))){
var inst_30933 = (state_30958[(10)]);
var state_30958__$1 = state_30958;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30958__$1,(14),inst_30933);
} else {
if((state_val_30959 === (2))){
var state_30958__$1 = state_30958;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30958__$1,(4),results);
} else {
if((state_val_30959 === (19))){
var state_30958__$1 = state_30958;
var statearr_31010_32686 = state_30958__$1;
(statearr_31010_32686[(2)] = null);

(statearr_31010_32686[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30959 === (11))){
var inst_30933 = (state_30958[(2)]);
var state_30958__$1 = (function (){var statearr_31011 = state_30958;
(statearr_31011[(10)] = inst_30933);

return statearr_31011;
})();
var statearr_31012_32687 = state_30958__$1;
(statearr_31012_32687[(2)] = null);

(statearr_31012_32687[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30959 === (9))){
var state_30958__$1 = state_30958;
var statearr_31018_32688 = state_30958__$1;
(statearr_31018_32688[(2)] = null);

(statearr_31018_32688[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30959 === (5))){
var state_30958__$1 = state_30958;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31028_32689 = state_30958__$1;
(statearr_31028_32689[(1)] = (8));

} else {
var statearr_31037_32690 = state_30958__$1;
(statearr_31037_32690[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30959 === (14))){
var inst_30938 = (state_30958[(11)]);
var inst_30936 = (state_30958[(8)]);
var inst_30936__$1 = (state_30958[(2)]);
var inst_30937 = (inst_30936__$1 == null);
var inst_30938__$1 = cljs.core.not(inst_30937);
var state_30958__$1 = (function (){var statearr_31053 = state_30958;
(statearr_31053[(11)] = inst_30938__$1);

(statearr_31053[(8)] = inst_30936__$1);

return statearr_31053;
})();
if(inst_30938__$1){
var statearr_31054_32691 = state_30958__$1;
(statearr_31054_32691[(1)] = (15));

} else {
var statearr_31055_32692 = state_30958__$1;
(statearr_31055_32692[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30959 === (16))){
var inst_30938 = (state_30958[(11)]);
var state_30958__$1 = state_30958;
var statearr_31056_32693 = state_30958__$1;
(statearr_31056_32693[(2)] = inst_30938);

(statearr_31056_32693[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30959 === (10))){
var inst_30926 = (state_30958[(2)]);
var state_30958__$1 = state_30958;
var statearr_31057_32694 = state_30958__$1;
(statearr_31057_32694[(2)] = inst_30926);

(statearr_31057_32694[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30959 === (18))){
var inst_30941 = (state_30958[(2)]);
var state_30958__$1 = state_30958;
var statearr_31058_32695 = state_30958__$1;
(statearr_31058_32695[(2)] = inst_30941);

(statearr_31058_32695[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30959 === (8))){
var inst_30923 = cljs.core.async.close_BANG_(to);
var state_30958__$1 = state_30958;
var statearr_31060_32696 = state_30958__$1;
(statearr_31060_32696[(2)] = inst_30923);

(statearr_31060_32696[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__30234__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30234__auto____0 = (function (){
var statearr_31061 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31061[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30234__auto__);

(statearr_31061[(1)] = (1));

return statearr_31061;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30234__auto____1 = (function (state_30958){
while(true){
var ret_value__30235__auto__ = (function (){try{while(true){
var result__30236__auto__ = switch__30233__auto__(state_30958);
if(cljs.core.keyword_identical_QMARK_(result__30236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30236__auto__;
}
break;
}
}catch (e31062){var ex__30237__auto__ = e31062;
var statearr_31063_32697 = state_30958;
(statearr_31063_32697[(2)] = ex__30237__auto__);


if(cljs.core.seq((state_30958[(4)]))){
var statearr_31064_32698 = state_30958;
(statearr_31064_32698[(1)] = cljs.core.first((state_30958[(4)])));

} else {
throw ex__30237__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32699 = state_30958;
state_30958 = G__32699;
continue;
} else {
return ret_value__30235__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30234__auto__ = function(state_30958){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30234__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30234__auto____1.call(this,state_30958);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30234__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30234__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30234__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30234__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30234__auto__;
})()
})();
var state__30461__auto__ = (function (){var statearr_31065 = f__30460__auto__();
(statearr_31065[(6)] = c__30454__auto__);

return statearr_31065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30461__auto__);
}));

return c__30454__auto__;
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
var G__31071 = arguments.length;
switch (G__31071) {
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
var G__31073 = arguments.length;
switch (G__31073) {
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
var G__31084 = arguments.length;
switch (G__31084) {
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
var c__30454__auto___32705 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30460__auto__ = (function (){var switch__30233__auto__ = (function (state_31113){
var state_val_31114 = (state_31113[(1)]);
if((state_val_31114 === (7))){
var inst_31109 = (state_31113[(2)]);
var state_31113__$1 = state_31113;
var statearr_31119_32706 = state_31113__$1;
(statearr_31119_32706[(2)] = inst_31109);

(statearr_31119_32706[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31114 === (1))){
var state_31113__$1 = state_31113;
var statearr_31120_32708 = state_31113__$1;
(statearr_31120_32708[(2)] = null);

(statearr_31120_32708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31114 === (4))){
var inst_31090 = (state_31113[(7)]);
var inst_31090__$1 = (state_31113[(2)]);
var inst_31091 = (inst_31090__$1 == null);
var state_31113__$1 = (function (){var statearr_31121 = state_31113;
(statearr_31121[(7)] = inst_31090__$1);

return statearr_31121;
})();
if(cljs.core.truth_(inst_31091)){
var statearr_31122_32710 = state_31113__$1;
(statearr_31122_32710[(1)] = (5));

} else {
var statearr_31123_32711 = state_31113__$1;
(statearr_31123_32711[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31114 === (13))){
var state_31113__$1 = state_31113;
var statearr_31124_32712 = state_31113__$1;
(statearr_31124_32712[(2)] = null);

(statearr_31124_32712[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31114 === (6))){
var inst_31090 = (state_31113[(7)]);
var inst_31096 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31090) : p.call(null,inst_31090));
var state_31113__$1 = state_31113;
if(cljs.core.truth_(inst_31096)){
var statearr_31125_32713 = state_31113__$1;
(statearr_31125_32713[(1)] = (9));

} else {
var statearr_31126_32714 = state_31113__$1;
(statearr_31126_32714[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31114 === (3))){
var inst_31111 = (state_31113[(2)]);
var state_31113__$1 = state_31113;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31113__$1,inst_31111);
} else {
if((state_val_31114 === (12))){
var state_31113__$1 = state_31113;
var statearr_31128_32715 = state_31113__$1;
(statearr_31128_32715[(2)] = null);

(statearr_31128_32715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31114 === (2))){
var state_31113__$1 = state_31113;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31113__$1,(4),ch);
} else {
if((state_val_31114 === (11))){
var inst_31090 = (state_31113[(7)]);
var inst_31100 = (state_31113[(2)]);
var state_31113__$1 = state_31113;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31113__$1,(8),inst_31100,inst_31090);
} else {
if((state_val_31114 === (9))){
var state_31113__$1 = state_31113;
var statearr_31129_32716 = state_31113__$1;
(statearr_31129_32716[(2)] = tc);

(statearr_31129_32716[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31114 === (5))){
var inst_31093 = cljs.core.async.close_BANG_(tc);
var inst_31094 = cljs.core.async.close_BANG_(fc);
var state_31113__$1 = (function (){var statearr_31130 = state_31113;
(statearr_31130[(8)] = inst_31093);

return statearr_31130;
})();
var statearr_31131_32717 = state_31113__$1;
(statearr_31131_32717[(2)] = inst_31094);

(statearr_31131_32717[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31114 === (14))){
var inst_31107 = (state_31113[(2)]);
var state_31113__$1 = state_31113;
var statearr_31132_32718 = state_31113__$1;
(statearr_31132_32718[(2)] = inst_31107);

(statearr_31132_32718[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31114 === (10))){
var state_31113__$1 = state_31113;
var statearr_31133_32719 = state_31113__$1;
(statearr_31133_32719[(2)] = fc);

(statearr_31133_32719[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31114 === (8))){
var inst_31102 = (state_31113[(2)]);
var state_31113__$1 = state_31113;
if(cljs.core.truth_(inst_31102)){
var statearr_31135_32720 = state_31113__$1;
(statearr_31135_32720[(1)] = (12));

} else {
var statearr_31136_32721 = state_31113__$1;
(statearr_31136_32721[(1)] = (13));

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
var cljs$core$async$state_machine__30234__auto__ = null;
var cljs$core$async$state_machine__30234__auto____0 = (function (){
var statearr_31137 = [null,null,null,null,null,null,null,null,null];
(statearr_31137[(0)] = cljs$core$async$state_machine__30234__auto__);

(statearr_31137[(1)] = (1));

return statearr_31137;
});
var cljs$core$async$state_machine__30234__auto____1 = (function (state_31113){
while(true){
var ret_value__30235__auto__ = (function (){try{while(true){
var result__30236__auto__ = switch__30233__auto__(state_31113);
if(cljs.core.keyword_identical_QMARK_(result__30236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30236__auto__;
}
break;
}
}catch (e31138){var ex__30237__auto__ = e31138;
var statearr_31139_32722 = state_31113;
(statearr_31139_32722[(2)] = ex__30237__auto__);


if(cljs.core.seq((state_31113[(4)]))){
var statearr_31141_32723 = state_31113;
(statearr_31141_32723[(1)] = cljs.core.first((state_31113[(4)])));

} else {
throw ex__30237__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32724 = state_31113;
state_31113 = G__32724;
continue;
} else {
return ret_value__30235__auto__;
}
break;
}
});
cljs$core$async$state_machine__30234__auto__ = function(state_31113){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30234__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30234__auto____1.call(this,state_31113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30234__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30234__auto____0;
cljs$core$async$state_machine__30234__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30234__auto____1;
return cljs$core$async$state_machine__30234__auto__;
})()
})();
var state__30461__auto__ = (function (){var statearr_31142 = f__30460__auto__();
(statearr_31142[(6)] = c__30454__auto___32705);

return statearr_31142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30461__auto__);
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
var c__30454__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30460__auto__ = (function (){var switch__30233__auto__ = (function (state_31164){
var state_val_31165 = (state_31164[(1)]);
if((state_val_31165 === (7))){
var inst_31160 = (state_31164[(2)]);
var state_31164__$1 = state_31164;
var statearr_31166_32725 = state_31164__$1;
(statearr_31166_32725[(2)] = inst_31160);

(statearr_31166_32725[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31165 === (1))){
var inst_31143 = init;
var inst_31144 = inst_31143;
var state_31164__$1 = (function (){var statearr_31167 = state_31164;
(statearr_31167[(7)] = inst_31144);

return statearr_31167;
})();
var statearr_31168_32726 = state_31164__$1;
(statearr_31168_32726[(2)] = null);

(statearr_31168_32726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31165 === (4))){
var inst_31147 = (state_31164[(8)]);
var inst_31147__$1 = (state_31164[(2)]);
var inst_31148 = (inst_31147__$1 == null);
var state_31164__$1 = (function (){var statearr_31175 = state_31164;
(statearr_31175[(8)] = inst_31147__$1);

return statearr_31175;
})();
if(cljs.core.truth_(inst_31148)){
var statearr_31176_32727 = state_31164__$1;
(statearr_31176_32727[(1)] = (5));

} else {
var statearr_31177_32728 = state_31164__$1;
(statearr_31177_32728[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31165 === (6))){
var inst_31147 = (state_31164[(8)]);
var inst_31144 = (state_31164[(7)]);
var inst_31151 = (state_31164[(9)]);
var inst_31151__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31144,inst_31147) : f.call(null,inst_31144,inst_31147));
var inst_31152 = cljs.core.reduced_QMARK_(inst_31151__$1);
var state_31164__$1 = (function (){var statearr_31178 = state_31164;
(statearr_31178[(9)] = inst_31151__$1);

return statearr_31178;
})();
if(inst_31152){
var statearr_31179_32729 = state_31164__$1;
(statearr_31179_32729[(1)] = (8));

} else {
var statearr_31180_32730 = state_31164__$1;
(statearr_31180_32730[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31165 === (3))){
var inst_31162 = (state_31164[(2)]);
var state_31164__$1 = state_31164;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31164__$1,inst_31162);
} else {
if((state_val_31165 === (2))){
var state_31164__$1 = state_31164;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31164__$1,(4),ch);
} else {
if((state_val_31165 === (9))){
var inst_31151 = (state_31164[(9)]);
var inst_31144 = inst_31151;
var state_31164__$1 = (function (){var statearr_31186 = state_31164;
(statearr_31186[(7)] = inst_31144);

return statearr_31186;
})();
var statearr_31188_32731 = state_31164__$1;
(statearr_31188_32731[(2)] = null);

(statearr_31188_32731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31165 === (5))){
var inst_31144 = (state_31164[(7)]);
var state_31164__$1 = state_31164;
var statearr_31191_32732 = state_31164__$1;
(statearr_31191_32732[(2)] = inst_31144);

(statearr_31191_32732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31165 === (10))){
var inst_31158 = (state_31164[(2)]);
var state_31164__$1 = state_31164;
var statearr_31192_32733 = state_31164__$1;
(statearr_31192_32733[(2)] = inst_31158);

(statearr_31192_32733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31165 === (8))){
var inst_31151 = (state_31164[(9)]);
var inst_31154 = cljs.core.deref(inst_31151);
var state_31164__$1 = state_31164;
var statearr_31193_32734 = state_31164__$1;
(statearr_31193_32734[(2)] = inst_31154);

(statearr_31193_32734[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__30234__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30234__auto____0 = (function (){
var statearr_31194 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31194[(0)] = cljs$core$async$reduce_$_state_machine__30234__auto__);

(statearr_31194[(1)] = (1));

return statearr_31194;
});
var cljs$core$async$reduce_$_state_machine__30234__auto____1 = (function (state_31164){
while(true){
var ret_value__30235__auto__ = (function (){try{while(true){
var result__30236__auto__ = switch__30233__auto__(state_31164);
if(cljs.core.keyword_identical_QMARK_(result__30236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30236__auto__;
}
break;
}
}catch (e31197){var ex__30237__auto__ = e31197;
var statearr_31198_32735 = state_31164;
(statearr_31198_32735[(2)] = ex__30237__auto__);


if(cljs.core.seq((state_31164[(4)]))){
var statearr_31202_32736 = state_31164;
(statearr_31202_32736[(1)] = cljs.core.first((state_31164[(4)])));

} else {
throw ex__30237__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32737 = state_31164;
state_31164 = G__32737;
continue;
} else {
return ret_value__30235__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30234__auto__ = function(state_31164){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30234__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30234__auto____1.call(this,state_31164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30234__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30234__auto____0;
cljs$core$async$reduce_$_state_machine__30234__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30234__auto____1;
return cljs$core$async$reduce_$_state_machine__30234__auto__;
})()
})();
var state__30461__auto__ = (function (){var statearr_31203 = f__30460__auto__();
(statearr_31203[(6)] = c__30454__auto__);

return statearr_31203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30461__auto__);
}));

return c__30454__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30454__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30460__auto__ = (function (){var switch__30233__auto__ = (function (state_31212){
var state_val_31213 = (state_31212[(1)]);
if((state_val_31213 === (1))){
var inst_31207 = cljs.core.async.reduce(f__$1,init,ch);
var state_31212__$1 = state_31212;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31212__$1,(2),inst_31207);
} else {
if((state_val_31213 === (2))){
var inst_31209 = (state_31212[(2)]);
var inst_31210 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31209) : f__$1.call(null,inst_31209));
var state_31212__$1 = state_31212;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31212__$1,inst_31210);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__30234__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30234__auto____0 = (function (){
var statearr_31222 = [null,null,null,null,null,null,null];
(statearr_31222[(0)] = cljs$core$async$transduce_$_state_machine__30234__auto__);

(statearr_31222[(1)] = (1));

return statearr_31222;
});
var cljs$core$async$transduce_$_state_machine__30234__auto____1 = (function (state_31212){
while(true){
var ret_value__30235__auto__ = (function (){try{while(true){
var result__30236__auto__ = switch__30233__auto__(state_31212);
if(cljs.core.keyword_identical_QMARK_(result__30236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30236__auto__;
}
break;
}
}catch (e31223){var ex__30237__auto__ = e31223;
var statearr_31224_32739 = state_31212;
(statearr_31224_32739[(2)] = ex__30237__auto__);


if(cljs.core.seq((state_31212[(4)]))){
var statearr_31225_32740 = state_31212;
(statearr_31225_32740[(1)] = cljs.core.first((state_31212[(4)])));

} else {
throw ex__30237__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32741 = state_31212;
state_31212 = G__32741;
continue;
} else {
return ret_value__30235__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30234__auto__ = function(state_31212){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30234__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30234__auto____1.call(this,state_31212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30234__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30234__auto____0;
cljs$core$async$transduce_$_state_machine__30234__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30234__auto____1;
return cljs$core$async$transduce_$_state_machine__30234__auto__;
})()
})();
var state__30461__auto__ = (function (){var statearr_31228 = f__30460__auto__();
(statearr_31228[(6)] = c__30454__auto__);

return statearr_31228;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30461__auto__);
}));

return c__30454__auto__;
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
var G__31230 = arguments.length;
switch (G__31230) {
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
var c__30454__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30460__auto__ = (function (){var switch__30233__auto__ = (function (state_31255){
var state_val_31256 = (state_31255[(1)]);
if((state_val_31256 === (7))){
var inst_31237 = (state_31255[(2)]);
var state_31255__$1 = state_31255;
var statearr_31258_32744 = state_31255__$1;
(statearr_31258_32744[(2)] = inst_31237);

(statearr_31258_32744[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31256 === (1))){
var inst_31231 = cljs.core.seq(coll);
var inst_31232 = inst_31231;
var state_31255__$1 = (function (){var statearr_31259 = state_31255;
(statearr_31259[(7)] = inst_31232);

return statearr_31259;
})();
var statearr_31260_32745 = state_31255__$1;
(statearr_31260_32745[(2)] = null);

(statearr_31260_32745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31256 === (4))){
var inst_31232 = (state_31255[(7)]);
var inst_31235 = cljs.core.first(inst_31232);
var state_31255__$1 = state_31255;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31255__$1,(7),ch,inst_31235);
} else {
if((state_val_31256 === (13))){
var inst_31249 = (state_31255[(2)]);
var state_31255__$1 = state_31255;
var statearr_31261_32746 = state_31255__$1;
(statearr_31261_32746[(2)] = inst_31249);

(statearr_31261_32746[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31256 === (6))){
var inst_31240 = (state_31255[(2)]);
var state_31255__$1 = state_31255;
if(cljs.core.truth_(inst_31240)){
var statearr_31262_32747 = state_31255__$1;
(statearr_31262_32747[(1)] = (8));

} else {
var statearr_31263_32748 = state_31255__$1;
(statearr_31263_32748[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31256 === (3))){
var inst_31253 = (state_31255[(2)]);
var state_31255__$1 = state_31255;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31255__$1,inst_31253);
} else {
if((state_val_31256 === (12))){
var state_31255__$1 = state_31255;
var statearr_31264_32749 = state_31255__$1;
(statearr_31264_32749[(2)] = null);

(statearr_31264_32749[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31256 === (2))){
var inst_31232 = (state_31255[(7)]);
var state_31255__$1 = state_31255;
if(cljs.core.truth_(inst_31232)){
var statearr_31265_32750 = state_31255__$1;
(statearr_31265_32750[(1)] = (4));

} else {
var statearr_31266_32751 = state_31255__$1;
(statearr_31266_32751[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31256 === (11))){
var inst_31246 = cljs.core.async.close_BANG_(ch);
var state_31255__$1 = state_31255;
var statearr_31272_32752 = state_31255__$1;
(statearr_31272_32752[(2)] = inst_31246);

(statearr_31272_32752[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31256 === (9))){
var state_31255__$1 = state_31255;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31306_32753 = state_31255__$1;
(statearr_31306_32753[(1)] = (11));

} else {
var statearr_31307_32754 = state_31255__$1;
(statearr_31307_32754[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31256 === (5))){
var inst_31232 = (state_31255[(7)]);
var state_31255__$1 = state_31255;
var statearr_31308_32755 = state_31255__$1;
(statearr_31308_32755[(2)] = inst_31232);

(statearr_31308_32755[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31256 === (10))){
var inst_31251 = (state_31255[(2)]);
var state_31255__$1 = state_31255;
var statearr_31309_32756 = state_31255__$1;
(statearr_31309_32756[(2)] = inst_31251);

(statearr_31309_32756[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31256 === (8))){
var inst_31232 = (state_31255[(7)]);
var inst_31242 = cljs.core.next(inst_31232);
var inst_31232__$1 = inst_31242;
var state_31255__$1 = (function (){var statearr_31311 = state_31255;
(statearr_31311[(7)] = inst_31232__$1);

return statearr_31311;
})();
var statearr_31312_32757 = state_31255__$1;
(statearr_31312_32757[(2)] = null);

(statearr_31312_32757[(1)] = (2));


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
var cljs$core$async$state_machine__30234__auto__ = null;
var cljs$core$async$state_machine__30234__auto____0 = (function (){
var statearr_31313 = [null,null,null,null,null,null,null,null];
(statearr_31313[(0)] = cljs$core$async$state_machine__30234__auto__);

(statearr_31313[(1)] = (1));

return statearr_31313;
});
var cljs$core$async$state_machine__30234__auto____1 = (function (state_31255){
while(true){
var ret_value__30235__auto__ = (function (){try{while(true){
var result__30236__auto__ = switch__30233__auto__(state_31255);
if(cljs.core.keyword_identical_QMARK_(result__30236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30236__auto__;
}
break;
}
}catch (e31314){var ex__30237__auto__ = e31314;
var statearr_31315_32758 = state_31255;
(statearr_31315_32758[(2)] = ex__30237__auto__);


if(cljs.core.seq((state_31255[(4)]))){
var statearr_31316_32759 = state_31255;
(statearr_31316_32759[(1)] = cljs.core.first((state_31255[(4)])));

} else {
throw ex__30237__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32760 = state_31255;
state_31255 = G__32760;
continue;
} else {
return ret_value__30235__auto__;
}
break;
}
});
cljs$core$async$state_machine__30234__auto__ = function(state_31255){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30234__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30234__auto____1.call(this,state_31255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30234__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30234__auto____0;
cljs$core$async$state_machine__30234__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30234__auto____1;
return cljs$core$async$state_machine__30234__auto__;
})()
})();
var state__30461__auto__ = (function (){var statearr_31317 = f__30460__auto__();
(statearr_31317[(6)] = c__30454__auto__);

return statearr_31317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30461__auto__);
}));

return c__30454__auto__;
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
var G__31319 = arguments.length;
switch (G__31319) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_32764 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_32764(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_32765 = (function (m,ch,close_QMARK_){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4551__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4549__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_32765(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_32766 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_32766(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_32767 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_32767(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31341 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31341 = (function (ch,cs,meta31342){
this.ch = ch;
this.cs = cs;
this.meta31342 = meta31342;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31341.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31343,meta31342__$1){
var self__ = this;
var _31343__$1 = this;
return (new cljs.core.async.t_cljs$core$async31341(self__.ch,self__.cs,meta31342__$1));
}));

(cljs.core.async.t_cljs$core$async31341.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31343){
var self__ = this;
var _31343__$1 = this;
return self__.meta31342;
}));

(cljs.core.async.t_cljs$core$async31341.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31341.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31341.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31341.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async31341.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async31341.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async31341.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31342","meta31342",2062753375,null)], null);
}));

(cljs.core.async.t_cljs$core$async31341.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31341.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31341");

(cljs.core.async.t_cljs$core$async31341.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async31341");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31341.
 */
cljs.core.async.__GT_t_cljs$core$async31341 = (function cljs$core$async$mult_$___GT_t_cljs$core$async31341(ch__$1,cs__$1,meta31342){
return (new cljs.core.async.t_cljs$core$async31341(ch__$1,cs__$1,meta31342));
});

}

return (new cljs.core.async.t_cljs$core$async31341(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__30454__auto___32768 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30460__auto__ = (function (){var switch__30233__auto__ = (function (state_31499){
var state_val_31500 = (state_31499[(1)]);
if((state_val_31500 === (7))){
var inst_31495 = (state_31499[(2)]);
var state_31499__$1 = state_31499;
var statearr_31501_32769 = state_31499__$1;
(statearr_31501_32769[(2)] = inst_31495);

(statearr_31501_32769[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (20))){
var inst_31390 = (state_31499[(7)]);
var inst_31402 = cljs.core.first(inst_31390);
var inst_31403 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31402,(0),null);
var inst_31404 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31402,(1),null);
var state_31499__$1 = (function (){var statearr_31502 = state_31499;
(statearr_31502[(8)] = inst_31403);

return statearr_31502;
})();
if(cljs.core.truth_(inst_31404)){
var statearr_31503_32770 = state_31499__$1;
(statearr_31503_32770[(1)] = (22));

} else {
var statearr_31504_32771 = state_31499__$1;
(statearr_31504_32771[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (27))){
var inst_31439 = (state_31499[(9)]);
var inst_31434 = (state_31499[(10)]);
var inst_31359 = (state_31499[(11)]);
var inst_31432 = (state_31499[(12)]);
var inst_31439__$1 = cljs.core._nth(inst_31432,inst_31434);
var inst_31440 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31439__$1,inst_31359,done);
var state_31499__$1 = (function (){var statearr_31505 = state_31499;
(statearr_31505[(9)] = inst_31439__$1);

return statearr_31505;
})();
if(cljs.core.truth_(inst_31440)){
var statearr_31506_32772 = state_31499__$1;
(statearr_31506_32772[(1)] = (30));

} else {
var statearr_31507_32774 = state_31499__$1;
(statearr_31507_32774[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (1))){
var state_31499__$1 = state_31499;
var statearr_31508_32775 = state_31499__$1;
(statearr_31508_32775[(2)] = null);

(statearr_31508_32775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (24))){
var inst_31390 = (state_31499[(7)]);
var inst_31409 = (state_31499[(2)]);
var inst_31410 = cljs.core.next(inst_31390);
var inst_31368 = inst_31410;
var inst_31369 = null;
var inst_31370 = (0);
var inst_31371 = (0);
var state_31499__$1 = (function (){var statearr_31509 = state_31499;
(statearr_31509[(13)] = inst_31409);

(statearr_31509[(14)] = inst_31370);

(statearr_31509[(15)] = inst_31371);

(statearr_31509[(16)] = inst_31369);

(statearr_31509[(17)] = inst_31368);

return statearr_31509;
})();
var statearr_31510_32777 = state_31499__$1;
(statearr_31510_32777[(2)] = null);

(statearr_31510_32777[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (39))){
var state_31499__$1 = state_31499;
var statearr_31514_32778 = state_31499__$1;
(statearr_31514_32778[(2)] = null);

(statearr_31514_32778[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (4))){
var inst_31359 = (state_31499[(11)]);
var inst_31359__$1 = (state_31499[(2)]);
var inst_31360 = (inst_31359__$1 == null);
var state_31499__$1 = (function (){var statearr_31515 = state_31499;
(statearr_31515[(11)] = inst_31359__$1);

return statearr_31515;
})();
if(cljs.core.truth_(inst_31360)){
var statearr_31516_32779 = state_31499__$1;
(statearr_31516_32779[(1)] = (5));

} else {
var statearr_31517_32780 = state_31499__$1;
(statearr_31517_32780[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (15))){
var inst_31370 = (state_31499[(14)]);
var inst_31371 = (state_31499[(15)]);
var inst_31369 = (state_31499[(16)]);
var inst_31368 = (state_31499[(17)]);
var inst_31386 = (state_31499[(2)]);
var inst_31387 = (inst_31371 + (1));
var tmp31511 = inst_31370;
var tmp31512 = inst_31369;
var tmp31513 = inst_31368;
var inst_31368__$1 = tmp31513;
var inst_31369__$1 = tmp31512;
var inst_31370__$1 = tmp31511;
var inst_31371__$1 = inst_31387;
var state_31499__$1 = (function (){var statearr_31519 = state_31499;
(statearr_31519[(14)] = inst_31370__$1);

(statearr_31519[(15)] = inst_31371__$1);

(statearr_31519[(16)] = inst_31369__$1);

(statearr_31519[(18)] = inst_31386);

(statearr_31519[(17)] = inst_31368__$1);

return statearr_31519;
})();
var statearr_31520_32781 = state_31499__$1;
(statearr_31520_32781[(2)] = null);

(statearr_31520_32781[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (21))){
var inst_31413 = (state_31499[(2)]);
var state_31499__$1 = state_31499;
var statearr_31524_32782 = state_31499__$1;
(statearr_31524_32782[(2)] = inst_31413);

(statearr_31524_32782[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (31))){
var inst_31439 = (state_31499[(9)]);
var inst_31450 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31439);
var state_31499__$1 = state_31499;
var statearr_31525_32788 = state_31499__$1;
(statearr_31525_32788[(2)] = inst_31450);

(statearr_31525_32788[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (32))){
var inst_31434 = (state_31499[(10)]);
var inst_31433 = (state_31499[(19)]);
var inst_31431 = (state_31499[(20)]);
var inst_31432 = (state_31499[(12)]);
var inst_31453 = (state_31499[(2)]);
var inst_31456 = (inst_31434 + (1));
var tmp31521 = inst_31433;
var tmp31522 = inst_31431;
var tmp31523 = inst_31432;
var inst_31431__$1 = tmp31522;
var inst_31432__$1 = tmp31523;
var inst_31433__$1 = tmp31521;
var inst_31434__$1 = inst_31456;
var state_31499__$1 = (function (){var statearr_31526 = state_31499;
(statearr_31526[(21)] = inst_31453);

(statearr_31526[(10)] = inst_31434__$1);

(statearr_31526[(19)] = inst_31433__$1);

(statearr_31526[(20)] = inst_31431__$1);

(statearr_31526[(12)] = inst_31432__$1);

return statearr_31526;
})();
var statearr_31527_32789 = state_31499__$1;
(statearr_31527_32789[(2)] = null);

(statearr_31527_32789[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (40))){
var inst_31468 = (state_31499[(22)]);
var inst_31472 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31468);
var state_31499__$1 = state_31499;
var statearr_31528_32790 = state_31499__$1;
(statearr_31528_32790[(2)] = inst_31472);

(statearr_31528_32790[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (33))){
var inst_31459 = (state_31499[(23)]);
var inst_31461 = cljs.core.chunked_seq_QMARK_(inst_31459);
var state_31499__$1 = state_31499;
if(inst_31461){
var statearr_31529_32791 = state_31499__$1;
(statearr_31529_32791[(1)] = (36));

} else {
var statearr_31530_32792 = state_31499__$1;
(statearr_31530_32792[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (13))){
var inst_31380 = (state_31499[(24)]);
var inst_31383 = cljs.core.async.close_BANG_(inst_31380);
var state_31499__$1 = state_31499;
var statearr_31532_32795 = state_31499__$1;
(statearr_31532_32795[(2)] = inst_31383);

(statearr_31532_32795[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (22))){
var inst_31403 = (state_31499[(8)]);
var inst_31406 = cljs.core.async.close_BANG_(inst_31403);
var state_31499__$1 = state_31499;
var statearr_31534_32796 = state_31499__$1;
(statearr_31534_32796[(2)] = inst_31406);

(statearr_31534_32796[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (36))){
var inst_31459 = (state_31499[(23)]);
var inst_31463 = cljs.core.chunk_first(inst_31459);
var inst_31464 = cljs.core.chunk_rest(inst_31459);
var inst_31465 = cljs.core.count(inst_31463);
var inst_31431 = inst_31464;
var inst_31432 = inst_31463;
var inst_31433 = inst_31465;
var inst_31434 = (0);
var state_31499__$1 = (function (){var statearr_31535 = state_31499;
(statearr_31535[(10)] = inst_31434);

(statearr_31535[(19)] = inst_31433);

(statearr_31535[(20)] = inst_31431);

(statearr_31535[(12)] = inst_31432);

return statearr_31535;
})();
var statearr_31542_32804 = state_31499__$1;
(statearr_31542_32804[(2)] = null);

(statearr_31542_32804[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (41))){
var inst_31459 = (state_31499[(23)]);
var inst_31474 = (state_31499[(2)]);
var inst_31475 = cljs.core.next(inst_31459);
var inst_31431 = inst_31475;
var inst_31432 = null;
var inst_31433 = (0);
var inst_31434 = (0);
var state_31499__$1 = (function (){var statearr_31545 = state_31499;
(statearr_31545[(25)] = inst_31474);

(statearr_31545[(10)] = inst_31434);

(statearr_31545[(19)] = inst_31433);

(statearr_31545[(20)] = inst_31431);

(statearr_31545[(12)] = inst_31432);

return statearr_31545;
})();
var statearr_31550_32805 = state_31499__$1;
(statearr_31550_32805[(2)] = null);

(statearr_31550_32805[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (43))){
var state_31499__$1 = state_31499;
var statearr_31558_32806 = state_31499__$1;
(statearr_31558_32806[(2)] = null);

(statearr_31558_32806[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (29))){
var inst_31483 = (state_31499[(2)]);
var state_31499__$1 = state_31499;
var statearr_31559_32810 = state_31499__$1;
(statearr_31559_32810[(2)] = inst_31483);

(statearr_31559_32810[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (44))){
var inst_31492 = (state_31499[(2)]);
var state_31499__$1 = (function (){var statearr_31564 = state_31499;
(statearr_31564[(26)] = inst_31492);

return statearr_31564;
})();
var statearr_31567_32811 = state_31499__$1;
(statearr_31567_32811[(2)] = null);

(statearr_31567_32811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (6))){
var inst_31423 = (state_31499[(27)]);
var inst_31422 = cljs.core.deref(cs);
var inst_31423__$1 = cljs.core.keys(inst_31422);
var inst_31424 = cljs.core.count(inst_31423__$1);
var inst_31425 = cljs.core.reset_BANG_(dctr,inst_31424);
var inst_31430 = cljs.core.seq(inst_31423__$1);
var inst_31431 = inst_31430;
var inst_31432 = null;
var inst_31433 = (0);
var inst_31434 = (0);
var state_31499__$1 = (function (){var statearr_31577 = state_31499;
(statearr_31577[(27)] = inst_31423__$1);

(statearr_31577[(10)] = inst_31434);

(statearr_31577[(19)] = inst_31433);

(statearr_31577[(28)] = inst_31425);

(statearr_31577[(20)] = inst_31431);

(statearr_31577[(12)] = inst_31432);

return statearr_31577;
})();
var statearr_31578_32815 = state_31499__$1;
(statearr_31578_32815[(2)] = null);

(statearr_31578_32815[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (28))){
var inst_31431 = (state_31499[(20)]);
var inst_31459 = (state_31499[(23)]);
var inst_31459__$1 = cljs.core.seq(inst_31431);
var state_31499__$1 = (function (){var statearr_31590 = state_31499;
(statearr_31590[(23)] = inst_31459__$1);

return statearr_31590;
})();
if(inst_31459__$1){
var statearr_31591_32819 = state_31499__$1;
(statearr_31591_32819[(1)] = (33));

} else {
var statearr_31592_32827 = state_31499__$1;
(statearr_31592_32827[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (25))){
var inst_31434 = (state_31499[(10)]);
var inst_31433 = (state_31499[(19)]);
var inst_31436 = (inst_31434 < inst_31433);
var inst_31437 = inst_31436;
var state_31499__$1 = state_31499;
if(cljs.core.truth_(inst_31437)){
var statearr_31604_32828 = state_31499__$1;
(statearr_31604_32828[(1)] = (27));

} else {
var statearr_31605_32829 = state_31499__$1;
(statearr_31605_32829[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (34))){
var state_31499__$1 = state_31499;
var statearr_31610_32830 = state_31499__$1;
(statearr_31610_32830[(2)] = null);

(statearr_31610_32830[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (17))){
var state_31499__$1 = state_31499;
var statearr_31615_32831 = state_31499__$1;
(statearr_31615_32831[(2)] = null);

(statearr_31615_32831[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (3))){
var inst_31497 = (state_31499[(2)]);
var state_31499__$1 = state_31499;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31499__$1,inst_31497);
} else {
if((state_val_31500 === (12))){
var inst_31418 = (state_31499[(2)]);
var state_31499__$1 = state_31499;
var statearr_31625_32832 = state_31499__$1;
(statearr_31625_32832[(2)] = inst_31418);

(statearr_31625_32832[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (2))){
var state_31499__$1 = state_31499;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31499__$1,(4),ch);
} else {
if((state_val_31500 === (23))){
var state_31499__$1 = state_31499;
var statearr_31629_32833 = state_31499__$1;
(statearr_31629_32833[(2)] = null);

(statearr_31629_32833[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (35))){
var inst_31481 = (state_31499[(2)]);
var state_31499__$1 = state_31499;
var statearr_31634_32834 = state_31499__$1;
(statearr_31634_32834[(2)] = inst_31481);

(statearr_31634_32834[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (19))){
var inst_31390 = (state_31499[(7)]);
var inst_31394 = cljs.core.chunk_first(inst_31390);
var inst_31395 = cljs.core.chunk_rest(inst_31390);
var inst_31396 = cljs.core.count(inst_31394);
var inst_31368 = inst_31395;
var inst_31369 = inst_31394;
var inst_31370 = inst_31396;
var inst_31371 = (0);
var state_31499__$1 = (function (){var statearr_31635 = state_31499;
(statearr_31635[(14)] = inst_31370);

(statearr_31635[(15)] = inst_31371);

(statearr_31635[(16)] = inst_31369);

(statearr_31635[(17)] = inst_31368);

return statearr_31635;
})();
var statearr_31636_32841 = state_31499__$1;
(statearr_31636_32841[(2)] = null);

(statearr_31636_32841[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (11))){
var inst_31390 = (state_31499[(7)]);
var inst_31368 = (state_31499[(17)]);
var inst_31390__$1 = cljs.core.seq(inst_31368);
var state_31499__$1 = (function (){var statearr_31647 = state_31499;
(statearr_31647[(7)] = inst_31390__$1);

return statearr_31647;
})();
if(inst_31390__$1){
var statearr_31648_32842 = state_31499__$1;
(statearr_31648_32842[(1)] = (16));

} else {
var statearr_31650_32843 = state_31499__$1;
(statearr_31650_32843[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (9))){
var inst_31420 = (state_31499[(2)]);
var state_31499__$1 = state_31499;
var statearr_31655_32844 = state_31499__$1;
(statearr_31655_32844[(2)] = inst_31420);

(statearr_31655_32844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (5))){
var inst_31366 = cljs.core.deref(cs);
var inst_31367 = cljs.core.seq(inst_31366);
var inst_31368 = inst_31367;
var inst_31369 = null;
var inst_31370 = (0);
var inst_31371 = (0);
var state_31499__$1 = (function (){var statearr_31658 = state_31499;
(statearr_31658[(14)] = inst_31370);

(statearr_31658[(15)] = inst_31371);

(statearr_31658[(16)] = inst_31369);

(statearr_31658[(17)] = inst_31368);

return statearr_31658;
})();
var statearr_31659_32848 = state_31499__$1;
(statearr_31659_32848[(2)] = null);

(statearr_31659_32848[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (14))){
var state_31499__$1 = state_31499;
var statearr_31660_32849 = state_31499__$1;
(statearr_31660_32849[(2)] = null);

(statearr_31660_32849[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (45))){
var inst_31489 = (state_31499[(2)]);
var state_31499__$1 = state_31499;
var statearr_31661_32850 = state_31499__$1;
(statearr_31661_32850[(2)] = inst_31489);

(statearr_31661_32850[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (26))){
var inst_31423 = (state_31499[(27)]);
var inst_31485 = (state_31499[(2)]);
var inst_31486 = cljs.core.seq(inst_31423);
var state_31499__$1 = (function (){var statearr_31662 = state_31499;
(statearr_31662[(29)] = inst_31485);

return statearr_31662;
})();
if(inst_31486){
var statearr_31663_32851 = state_31499__$1;
(statearr_31663_32851[(1)] = (42));

} else {
var statearr_31664_32852 = state_31499__$1;
(statearr_31664_32852[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (16))){
var inst_31390 = (state_31499[(7)]);
var inst_31392 = cljs.core.chunked_seq_QMARK_(inst_31390);
var state_31499__$1 = state_31499;
if(inst_31392){
var statearr_31665_32853 = state_31499__$1;
(statearr_31665_32853[(1)] = (19));

} else {
var statearr_31666_32854 = state_31499__$1;
(statearr_31666_32854[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (38))){
var inst_31478 = (state_31499[(2)]);
var state_31499__$1 = state_31499;
var statearr_31667_32856 = state_31499__$1;
(statearr_31667_32856[(2)] = inst_31478);

(statearr_31667_32856[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (30))){
var state_31499__$1 = state_31499;
var statearr_31668_32857 = state_31499__$1;
(statearr_31668_32857[(2)] = null);

(statearr_31668_32857[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (10))){
var inst_31371 = (state_31499[(15)]);
var inst_31369 = (state_31499[(16)]);
var inst_31379 = cljs.core._nth(inst_31369,inst_31371);
var inst_31380 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31379,(0),null);
var inst_31381 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31379,(1),null);
var state_31499__$1 = (function (){var statearr_31669 = state_31499;
(statearr_31669[(24)] = inst_31380);

return statearr_31669;
})();
if(cljs.core.truth_(inst_31381)){
var statearr_31670_32858 = state_31499__$1;
(statearr_31670_32858[(1)] = (13));

} else {
var statearr_31671_32859 = state_31499__$1;
(statearr_31671_32859[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (18))){
var inst_31416 = (state_31499[(2)]);
var state_31499__$1 = state_31499;
var statearr_31672_32861 = state_31499__$1;
(statearr_31672_32861[(2)] = inst_31416);

(statearr_31672_32861[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (42))){
var state_31499__$1 = state_31499;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31499__$1,(45),dchan);
} else {
if((state_val_31500 === (37))){
var inst_31468 = (state_31499[(22)]);
var inst_31459 = (state_31499[(23)]);
var inst_31359 = (state_31499[(11)]);
var inst_31468__$1 = cljs.core.first(inst_31459);
var inst_31469 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31468__$1,inst_31359,done);
var state_31499__$1 = (function (){var statearr_31673 = state_31499;
(statearr_31673[(22)] = inst_31468__$1);

return statearr_31673;
})();
if(cljs.core.truth_(inst_31469)){
var statearr_31674_32866 = state_31499__$1;
(statearr_31674_32866[(1)] = (39));

} else {
var statearr_31675_32867 = state_31499__$1;
(statearr_31675_32867[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (8))){
var inst_31370 = (state_31499[(14)]);
var inst_31371 = (state_31499[(15)]);
var inst_31373 = (inst_31371 < inst_31370);
var inst_31374 = inst_31373;
var state_31499__$1 = state_31499;
if(cljs.core.truth_(inst_31374)){
var statearr_31676_32868 = state_31499__$1;
(statearr_31676_32868[(1)] = (10));

} else {
var statearr_31677_32869 = state_31499__$1;
(statearr_31677_32869[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__30234__auto__ = null;
var cljs$core$async$mult_$_state_machine__30234__auto____0 = (function (){
var statearr_31684 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31684[(0)] = cljs$core$async$mult_$_state_machine__30234__auto__);

(statearr_31684[(1)] = (1));

return statearr_31684;
});
var cljs$core$async$mult_$_state_machine__30234__auto____1 = (function (state_31499){
while(true){
var ret_value__30235__auto__ = (function (){try{while(true){
var result__30236__auto__ = switch__30233__auto__(state_31499);
if(cljs.core.keyword_identical_QMARK_(result__30236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30236__auto__;
}
break;
}
}catch (e31688){var ex__30237__auto__ = e31688;
var statearr_31690_32873 = state_31499;
(statearr_31690_32873[(2)] = ex__30237__auto__);


if(cljs.core.seq((state_31499[(4)]))){
var statearr_31693_32874 = state_31499;
(statearr_31693_32874[(1)] = cljs.core.first((state_31499[(4)])));

} else {
throw ex__30237__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32875 = state_31499;
state_31499 = G__32875;
continue;
} else {
return ret_value__30235__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30234__auto__ = function(state_31499){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30234__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30234__auto____1.call(this,state_31499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30234__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30234__auto____0;
cljs$core$async$mult_$_state_machine__30234__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30234__auto____1;
return cljs$core$async$mult_$_state_machine__30234__auto__;
})()
})();
var state__30461__auto__ = (function (){var statearr_31694 = f__30460__auto__();
(statearr_31694[(6)] = c__30454__auto___32768);

return statearr_31694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30461__auto__);
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
var G__31699 = arguments.length;
switch (G__31699) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_32881 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_32881(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_32882 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_32882(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_32883 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_32883(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_32911 = (function (m,state_map){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4551__auto__.call(null,m,state_map));
} else {
var m__4549__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4549__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_32911(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_32912 = (function (m,mode){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4551__auto__.call(null,m,mode));
} else {
var m__4549__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4549__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_32912(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___32916 = arguments.length;
var i__4865__auto___32917 = (0);
while(true){
if((i__4865__auto___32917 < len__4864__auto___32916)){
args__4870__auto__.push((arguments[i__4865__auto___32917]));

var G__32918 = (i__4865__auto___32917 + (1));
i__4865__auto___32917 = G__32918;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31770){
var map__31772 = p__31770;
var map__31772__$1 = cljs.core.__destructure_map(map__31772);
var opts = map__31772__$1;
var statearr_31774_32919 = state;
(statearr_31774_32919[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31779_32920 = state;
(statearr_31779_32920[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_31784_32921 = state;
(statearr_31784_32921[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31742){
var G__31743 = cljs.core.first(seq31742);
var seq31742__$1 = cljs.core.next(seq31742);
var G__31744 = cljs.core.first(seq31742__$1);
var seq31742__$2 = cljs.core.next(seq31742__$1);
var G__31745 = cljs.core.first(seq31742__$2);
var seq31742__$3 = cljs.core.next(seq31742__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31743,G__31744,G__31745,seq31742__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31786 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31786 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31787){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31787 = meta31787;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31786.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31788,meta31787__$1){
var self__ = this;
var _31788__$1 = this;
return (new cljs.core.async.t_cljs$core$async31786(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31787__$1));
}));

(cljs.core.async.t_cljs$core$async31786.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31788){
var self__ = this;
var _31788__$1 = this;
return self__.meta31787;
}));

(cljs.core.async.t_cljs$core$async31786.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31786.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31786.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31786.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31786.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31786.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31786.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31786.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31786.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31787","meta31787",-286894844,null)], null);
}));

(cljs.core.async.t_cljs$core$async31786.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31786.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31786");

(cljs.core.async.t_cljs$core$async31786.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async31786");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31786.
 */
cljs.core.async.__GT_t_cljs$core$async31786 = (function cljs$core$async$mix_$___GT_t_cljs$core$async31786(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31787){
return (new cljs.core.async.t_cljs$core$async31786(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31787));
});

}

return (new cljs.core.async.t_cljs$core$async31786(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30454__auto___32930 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30460__auto__ = (function (){var switch__30233__auto__ = (function (state_31870){
var state_val_31871 = (state_31870[(1)]);
if((state_val_31871 === (7))){
var inst_31830 = (state_31870[(2)]);
var state_31870__$1 = state_31870;
if(cljs.core.truth_(inst_31830)){
var statearr_31872_32931 = state_31870__$1;
(statearr_31872_32931[(1)] = (8));

} else {
var statearr_31873_32932 = state_31870__$1;
(statearr_31873_32932[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (20))){
var inst_31823 = (state_31870[(7)]);
var state_31870__$1 = state_31870;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31870__$1,(23),out,inst_31823);
} else {
if((state_val_31871 === (1))){
var inst_31806 = calc_state();
var inst_31807 = cljs.core.__destructure_map(inst_31806);
var inst_31808 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31807,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31809 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31807,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31810 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31807,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31811 = inst_31806;
var state_31870__$1 = (function (){var statearr_31874 = state_31870;
(statearr_31874[(8)] = inst_31810);

(statearr_31874[(9)] = inst_31811);

(statearr_31874[(10)] = inst_31809);

(statearr_31874[(11)] = inst_31808);

return statearr_31874;
})();
var statearr_31875_32933 = state_31870__$1;
(statearr_31875_32933[(2)] = null);

(statearr_31875_32933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (24))){
var inst_31814 = (state_31870[(12)]);
var inst_31811 = inst_31814;
var state_31870__$1 = (function (){var statearr_31876 = state_31870;
(statearr_31876[(9)] = inst_31811);

return statearr_31876;
})();
var statearr_31877_32934 = state_31870__$1;
(statearr_31877_32934[(2)] = null);

(statearr_31877_32934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (4))){
var inst_31823 = (state_31870[(7)]);
var inst_31825 = (state_31870[(13)]);
var inst_31822 = (state_31870[(2)]);
var inst_31823__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31822,(0),null);
var inst_31824 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31822,(1),null);
var inst_31825__$1 = (inst_31823__$1 == null);
var state_31870__$1 = (function (){var statearr_31878 = state_31870;
(statearr_31878[(7)] = inst_31823__$1);

(statearr_31878[(13)] = inst_31825__$1);

(statearr_31878[(14)] = inst_31824);

return statearr_31878;
})();
if(cljs.core.truth_(inst_31825__$1)){
var statearr_31879_32935 = state_31870__$1;
(statearr_31879_32935[(1)] = (5));

} else {
var statearr_31880_32936 = state_31870__$1;
(statearr_31880_32936[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (15))){
var inst_31815 = (state_31870[(15)]);
var inst_31844 = (state_31870[(16)]);
var inst_31844__$1 = cljs.core.empty_QMARK_(inst_31815);
var state_31870__$1 = (function (){var statearr_31881 = state_31870;
(statearr_31881[(16)] = inst_31844__$1);

return statearr_31881;
})();
if(inst_31844__$1){
var statearr_31882_32937 = state_31870__$1;
(statearr_31882_32937[(1)] = (17));

} else {
var statearr_31883_32938 = state_31870__$1;
(statearr_31883_32938[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (21))){
var inst_31814 = (state_31870[(12)]);
var inst_31811 = inst_31814;
var state_31870__$1 = (function (){var statearr_31884 = state_31870;
(statearr_31884[(9)] = inst_31811);

return statearr_31884;
})();
var statearr_31885_32939 = state_31870__$1;
(statearr_31885_32939[(2)] = null);

(statearr_31885_32939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (13))){
var inst_31837 = (state_31870[(2)]);
var inst_31838 = calc_state();
var inst_31811 = inst_31838;
var state_31870__$1 = (function (){var statearr_31886 = state_31870;
(statearr_31886[(9)] = inst_31811);

(statearr_31886[(17)] = inst_31837);

return statearr_31886;
})();
var statearr_31887_32946 = state_31870__$1;
(statearr_31887_32946[(2)] = null);

(statearr_31887_32946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (22))){
var inst_31864 = (state_31870[(2)]);
var state_31870__$1 = state_31870;
var statearr_31888_32947 = state_31870__$1;
(statearr_31888_32947[(2)] = inst_31864);

(statearr_31888_32947[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (6))){
var inst_31824 = (state_31870[(14)]);
var inst_31828 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31824,change);
var state_31870__$1 = state_31870;
var statearr_31889_32948 = state_31870__$1;
(statearr_31889_32948[(2)] = inst_31828);

(statearr_31889_32948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (25))){
var state_31870__$1 = state_31870;
var statearr_31890_32949 = state_31870__$1;
(statearr_31890_32949[(2)] = null);

(statearr_31890_32949[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (17))){
var inst_31824 = (state_31870[(14)]);
var inst_31816 = (state_31870[(18)]);
var inst_31846 = (inst_31816.cljs$core$IFn$_invoke$arity$1 ? inst_31816.cljs$core$IFn$_invoke$arity$1(inst_31824) : inst_31816.call(null,inst_31824));
var inst_31847 = cljs.core.not(inst_31846);
var state_31870__$1 = state_31870;
var statearr_31891_32950 = state_31870__$1;
(statearr_31891_32950[(2)] = inst_31847);

(statearr_31891_32950[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (3))){
var inst_31868 = (state_31870[(2)]);
var state_31870__$1 = state_31870;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31870__$1,inst_31868);
} else {
if((state_val_31871 === (12))){
var state_31870__$1 = state_31870;
var statearr_31892_32951 = state_31870__$1;
(statearr_31892_32951[(2)] = null);

(statearr_31892_32951[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (2))){
var inst_31811 = (state_31870[(9)]);
var inst_31814 = (state_31870[(12)]);
var inst_31814__$1 = cljs.core.__destructure_map(inst_31811);
var inst_31815 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31814__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31816 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31814__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31817 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31814__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31870__$1 = (function (){var statearr_31893 = state_31870;
(statearr_31893[(15)] = inst_31815);

(statearr_31893[(12)] = inst_31814__$1);

(statearr_31893[(18)] = inst_31816);

return statearr_31893;
})();
return cljs.core.async.ioc_alts_BANG_(state_31870__$1,(4),inst_31817);
} else {
if((state_val_31871 === (23))){
var inst_31855 = (state_31870[(2)]);
var state_31870__$1 = state_31870;
if(cljs.core.truth_(inst_31855)){
var statearr_31894_32953 = state_31870__$1;
(statearr_31894_32953[(1)] = (24));

} else {
var statearr_31895_32954 = state_31870__$1;
(statearr_31895_32954[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (19))){
var inst_31850 = (state_31870[(2)]);
var state_31870__$1 = state_31870;
var statearr_31896_32955 = state_31870__$1;
(statearr_31896_32955[(2)] = inst_31850);

(statearr_31896_32955[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (11))){
var inst_31824 = (state_31870[(14)]);
var inst_31834 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31824);
var state_31870__$1 = state_31870;
var statearr_31897_32956 = state_31870__$1;
(statearr_31897_32956[(2)] = inst_31834);

(statearr_31897_32956[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (9))){
var inst_31815 = (state_31870[(15)]);
var inst_31824 = (state_31870[(14)]);
var inst_31841 = (state_31870[(19)]);
var inst_31841__$1 = (inst_31815.cljs$core$IFn$_invoke$arity$1 ? inst_31815.cljs$core$IFn$_invoke$arity$1(inst_31824) : inst_31815.call(null,inst_31824));
var state_31870__$1 = (function (){var statearr_31898 = state_31870;
(statearr_31898[(19)] = inst_31841__$1);

return statearr_31898;
})();
if(cljs.core.truth_(inst_31841__$1)){
var statearr_31899_32957 = state_31870__$1;
(statearr_31899_32957[(1)] = (14));

} else {
var statearr_31900_32958 = state_31870__$1;
(statearr_31900_32958[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (5))){
var inst_31825 = (state_31870[(13)]);
var state_31870__$1 = state_31870;
var statearr_31901_32959 = state_31870__$1;
(statearr_31901_32959[(2)] = inst_31825);

(statearr_31901_32959[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (14))){
var inst_31841 = (state_31870[(19)]);
var state_31870__$1 = state_31870;
var statearr_31902_32960 = state_31870__$1;
(statearr_31902_32960[(2)] = inst_31841);

(statearr_31902_32960[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (26))){
var inst_31860 = (state_31870[(2)]);
var state_31870__$1 = state_31870;
var statearr_31903_32961 = state_31870__$1;
(statearr_31903_32961[(2)] = inst_31860);

(statearr_31903_32961[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (16))){
var inst_31852 = (state_31870[(2)]);
var state_31870__$1 = state_31870;
if(cljs.core.truth_(inst_31852)){
var statearr_31904_32963 = state_31870__$1;
(statearr_31904_32963[(1)] = (20));

} else {
var statearr_31905_32964 = state_31870__$1;
(statearr_31905_32964[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (10))){
var inst_31866 = (state_31870[(2)]);
var state_31870__$1 = state_31870;
var statearr_31906_32965 = state_31870__$1;
(statearr_31906_32965[(2)] = inst_31866);

(statearr_31906_32965[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (18))){
var inst_31844 = (state_31870[(16)]);
var state_31870__$1 = state_31870;
var statearr_31907_32966 = state_31870__$1;
(statearr_31907_32966[(2)] = inst_31844);

(statearr_31907_32966[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (8))){
var inst_31823 = (state_31870[(7)]);
var inst_31832 = (inst_31823 == null);
var state_31870__$1 = state_31870;
if(cljs.core.truth_(inst_31832)){
var statearr_31908_32967 = state_31870__$1;
(statearr_31908_32967[(1)] = (11));

} else {
var statearr_31909_32968 = state_31870__$1;
(statearr_31909_32968[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__30234__auto__ = null;
var cljs$core$async$mix_$_state_machine__30234__auto____0 = (function (){
var statearr_31910 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31910[(0)] = cljs$core$async$mix_$_state_machine__30234__auto__);

(statearr_31910[(1)] = (1));

return statearr_31910;
});
var cljs$core$async$mix_$_state_machine__30234__auto____1 = (function (state_31870){
while(true){
var ret_value__30235__auto__ = (function (){try{while(true){
var result__30236__auto__ = switch__30233__auto__(state_31870);
if(cljs.core.keyword_identical_QMARK_(result__30236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30236__auto__;
}
break;
}
}catch (e31911){var ex__30237__auto__ = e31911;
var statearr_31912_32970 = state_31870;
(statearr_31912_32970[(2)] = ex__30237__auto__);


if(cljs.core.seq((state_31870[(4)]))){
var statearr_31913_32971 = state_31870;
(statearr_31913_32971[(1)] = cljs.core.first((state_31870[(4)])));

} else {
throw ex__30237__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32972 = state_31870;
state_31870 = G__32972;
continue;
} else {
return ret_value__30235__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30234__auto__ = function(state_31870){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30234__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30234__auto____1.call(this,state_31870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30234__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30234__auto____0;
cljs$core$async$mix_$_state_machine__30234__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30234__auto____1;
return cljs$core$async$mix_$_state_machine__30234__auto__;
})()
})();
var state__30461__auto__ = (function (){var statearr_31914 = f__30460__auto__();
(statearr_31914[(6)] = c__30454__auto___32930);

return statearr_31914;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30461__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_32973 = (function (p,v,ch,close_QMARK_){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4551__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4549__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_32973(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_32974 = (function (p,v,ch){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4551__auto__.call(null,p,v,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4549__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_32974(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_32975 = (function() {
var G__32976 = null;
var G__32976__1 = (function (p){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4551__auto__.call(null,p));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4549__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__32976__2 = (function (p,v){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4551__auto__.call(null,p,v));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4549__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__32976 = function(p,v){
switch(arguments.length){
case 1:
return G__32976__1.call(this,p);
case 2:
return G__32976__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__32976.cljs$core$IFn$_invoke$arity$1 = G__32976__1;
G__32976.cljs$core$IFn$_invoke$arity$2 = G__32976__2;
return G__32976;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31916 = arguments.length;
switch (G__31916) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_32975(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_32975(p,v);
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
var G__31919 = arguments.length;
switch (G__31919) {
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
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__31917_SHARP_){
if(cljs.core.truth_((p1__31917_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31917_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31917_SHARP_.call(null,topic)))){
return p1__31917_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31917_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31920 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31920 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31921){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31921 = meta31921;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31920.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31922,meta31921__$1){
var self__ = this;
var _31922__$1 = this;
return (new cljs.core.async.t_cljs$core$async31920(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31921__$1));
}));

(cljs.core.async.t_cljs$core$async31920.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31922){
var self__ = this;
var _31922__$1 = this;
return self__.meta31921;
}));

(cljs.core.async.t_cljs$core$async31920.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31920.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31920.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31920.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async31920.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async31920.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async31920.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async31920.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31921","meta31921",799603693,null)], null);
}));

(cljs.core.async.t_cljs$core$async31920.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31920.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31920");

(cljs.core.async.t_cljs$core$async31920.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async31920");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31920.
 */
cljs.core.async.__GT_t_cljs$core$async31920 = (function cljs$core$async$__GT_t_cljs$core$async31920(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31921){
return (new cljs.core.async.t_cljs$core$async31920(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31921));
});

}

return (new cljs.core.async.t_cljs$core$async31920(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30454__auto___32992 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30460__auto__ = (function (){var switch__30233__auto__ = (function (state_31994){
var state_val_31995 = (state_31994[(1)]);
if((state_val_31995 === (7))){
var inst_31990 = (state_31994[(2)]);
var state_31994__$1 = state_31994;
var statearr_31996_32993 = state_31994__$1;
(statearr_31996_32993[(2)] = inst_31990);

(statearr_31996_32993[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31995 === (20))){
var state_31994__$1 = state_31994;
var statearr_31997_32994 = state_31994__$1;
(statearr_31997_32994[(2)] = null);

(statearr_31997_32994[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31995 === (1))){
var state_31994__$1 = state_31994;
var statearr_31998_32995 = state_31994__$1;
(statearr_31998_32995[(2)] = null);

(statearr_31998_32995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31995 === (24))){
var inst_31973 = (state_31994[(7)]);
var inst_31982 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31973);
var state_31994__$1 = state_31994;
var statearr_31999_32996 = state_31994__$1;
(statearr_31999_32996[(2)] = inst_31982);

(statearr_31999_32996[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31995 === (4))){
var inst_31925 = (state_31994[(8)]);
var inst_31925__$1 = (state_31994[(2)]);
var inst_31926 = (inst_31925__$1 == null);
var state_31994__$1 = (function (){var statearr_32000 = state_31994;
(statearr_32000[(8)] = inst_31925__$1);

return statearr_32000;
})();
if(cljs.core.truth_(inst_31926)){
var statearr_32001_32997 = state_31994__$1;
(statearr_32001_32997[(1)] = (5));

} else {
var statearr_32002_32998 = state_31994__$1;
(statearr_32002_32998[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31995 === (15))){
var inst_31967 = (state_31994[(2)]);
var state_31994__$1 = state_31994;
var statearr_32003_32999 = state_31994__$1;
(statearr_32003_32999[(2)] = inst_31967);

(statearr_32003_32999[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31995 === (21))){
var inst_31987 = (state_31994[(2)]);
var state_31994__$1 = (function (){var statearr_32004 = state_31994;
(statearr_32004[(9)] = inst_31987);

return statearr_32004;
})();
var statearr_32005_33000 = state_31994__$1;
(statearr_32005_33000[(2)] = null);

(statearr_32005_33000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31995 === (13))){
var inst_31949 = (state_31994[(10)]);
var inst_31951 = cljs.core.chunked_seq_QMARK_(inst_31949);
var state_31994__$1 = state_31994;
if(inst_31951){
var statearr_32006_33001 = state_31994__$1;
(statearr_32006_33001[(1)] = (16));

} else {
var statearr_32007_33002 = state_31994__$1;
(statearr_32007_33002[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31995 === (22))){
var inst_31979 = (state_31994[(2)]);
var state_31994__$1 = state_31994;
if(cljs.core.truth_(inst_31979)){
var statearr_32008_33003 = state_31994__$1;
(statearr_32008_33003[(1)] = (23));

} else {
var statearr_32009_33004 = state_31994__$1;
(statearr_32009_33004[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31995 === (6))){
var inst_31975 = (state_31994[(11)]);
var inst_31925 = (state_31994[(8)]);
var inst_31973 = (state_31994[(7)]);
var inst_31973__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31925) : topic_fn.call(null,inst_31925));
var inst_31974 = cljs.core.deref(mults);
var inst_31975__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31974,inst_31973__$1);
var state_31994__$1 = (function (){var statearr_32010 = state_31994;
(statearr_32010[(11)] = inst_31975__$1);

(statearr_32010[(7)] = inst_31973__$1);

return statearr_32010;
})();
if(cljs.core.truth_(inst_31975__$1)){
var statearr_32011_33006 = state_31994__$1;
(statearr_32011_33006[(1)] = (19));

} else {
var statearr_32012_33007 = state_31994__$1;
(statearr_32012_33007[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31995 === (25))){
var inst_31984 = (state_31994[(2)]);
var state_31994__$1 = state_31994;
var statearr_32013_33009 = state_31994__$1;
(statearr_32013_33009[(2)] = inst_31984);

(statearr_32013_33009[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31995 === (17))){
var inst_31949 = (state_31994[(10)]);
var inst_31958 = cljs.core.first(inst_31949);
var inst_31959 = cljs.core.async.muxch_STAR_(inst_31958);
var inst_31960 = cljs.core.async.close_BANG_(inst_31959);
var inst_31961 = cljs.core.next(inst_31949);
var inst_31935 = inst_31961;
var inst_31936 = null;
var inst_31937 = (0);
var inst_31938 = (0);
var state_31994__$1 = (function (){var statearr_32014 = state_31994;
(statearr_32014[(12)] = inst_31937);

(statearr_32014[(13)] = inst_31936);

(statearr_32014[(14)] = inst_31960);

(statearr_32014[(15)] = inst_31938);

(statearr_32014[(16)] = inst_31935);

return statearr_32014;
})();
var statearr_32015_33012 = state_31994__$1;
(statearr_32015_33012[(2)] = null);

(statearr_32015_33012[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31995 === (3))){
var inst_31992 = (state_31994[(2)]);
var state_31994__$1 = state_31994;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31994__$1,inst_31992);
} else {
if((state_val_31995 === (12))){
var inst_31969 = (state_31994[(2)]);
var state_31994__$1 = state_31994;
var statearr_32016_33013 = state_31994__$1;
(statearr_32016_33013[(2)] = inst_31969);

(statearr_32016_33013[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31995 === (2))){
var state_31994__$1 = state_31994;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31994__$1,(4),ch);
} else {
if((state_val_31995 === (23))){
var state_31994__$1 = state_31994;
var statearr_32017_33014 = state_31994__$1;
(statearr_32017_33014[(2)] = null);

(statearr_32017_33014[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31995 === (19))){
var inst_31975 = (state_31994[(11)]);
var inst_31925 = (state_31994[(8)]);
var inst_31977 = cljs.core.async.muxch_STAR_(inst_31975);
var state_31994__$1 = state_31994;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31994__$1,(22),inst_31977,inst_31925);
} else {
if((state_val_31995 === (11))){
var inst_31935 = (state_31994[(16)]);
var inst_31949 = (state_31994[(10)]);
var inst_31949__$1 = cljs.core.seq(inst_31935);
var state_31994__$1 = (function (){var statearr_32018 = state_31994;
(statearr_32018[(10)] = inst_31949__$1);

return statearr_32018;
})();
if(inst_31949__$1){
var statearr_32019_33015 = state_31994__$1;
(statearr_32019_33015[(1)] = (13));

} else {
var statearr_32020_33016 = state_31994__$1;
(statearr_32020_33016[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31995 === (9))){
var inst_31971 = (state_31994[(2)]);
var state_31994__$1 = state_31994;
var statearr_32021_33017 = state_31994__$1;
(statearr_32021_33017[(2)] = inst_31971);

(statearr_32021_33017[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31995 === (5))){
var inst_31932 = cljs.core.deref(mults);
var inst_31933 = cljs.core.vals(inst_31932);
var inst_31934 = cljs.core.seq(inst_31933);
var inst_31935 = inst_31934;
var inst_31936 = null;
var inst_31937 = (0);
var inst_31938 = (0);
var state_31994__$1 = (function (){var statearr_32022 = state_31994;
(statearr_32022[(12)] = inst_31937);

(statearr_32022[(13)] = inst_31936);

(statearr_32022[(15)] = inst_31938);

(statearr_32022[(16)] = inst_31935);

return statearr_32022;
})();
var statearr_32023_33018 = state_31994__$1;
(statearr_32023_33018[(2)] = null);

(statearr_32023_33018[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31995 === (14))){
var state_31994__$1 = state_31994;
var statearr_32027_33019 = state_31994__$1;
(statearr_32027_33019[(2)] = null);

(statearr_32027_33019[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31995 === (16))){
var inst_31949 = (state_31994[(10)]);
var inst_31953 = cljs.core.chunk_first(inst_31949);
var inst_31954 = cljs.core.chunk_rest(inst_31949);
var inst_31955 = cljs.core.count(inst_31953);
var inst_31935 = inst_31954;
var inst_31936 = inst_31953;
var inst_31937 = inst_31955;
var inst_31938 = (0);
var state_31994__$1 = (function (){var statearr_32028 = state_31994;
(statearr_32028[(12)] = inst_31937);

(statearr_32028[(13)] = inst_31936);

(statearr_32028[(15)] = inst_31938);

(statearr_32028[(16)] = inst_31935);

return statearr_32028;
})();
var statearr_32029_33020 = state_31994__$1;
(statearr_32029_33020[(2)] = null);

(statearr_32029_33020[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31995 === (10))){
var inst_31937 = (state_31994[(12)]);
var inst_31936 = (state_31994[(13)]);
var inst_31938 = (state_31994[(15)]);
var inst_31935 = (state_31994[(16)]);
var inst_31943 = cljs.core._nth(inst_31936,inst_31938);
var inst_31944 = cljs.core.async.muxch_STAR_(inst_31943);
var inst_31945 = cljs.core.async.close_BANG_(inst_31944);
var inst_31946 = (inst_31938 + (1));
var tmp32024 = inst_31937;
var tmp32025 = inst_31936;
var tmp32026 = inst_31935;
var inst_31935__$1 = tmp32026;
var inst_31936__$1 = tmp32025;
var inst_31937__$1 = tmp32024;
var inst_31938__$1 = inst_31946;
var state_31994__$1 = (function (){var statearr_32030 = state_31994;
(statearr_32030[(12)] = inst_31937__$1);

(statearr_32030[(13)] = inst_31936__$1);

(statearr_32030[(17)] = inst_31945);

(statearr_32030[(15)] = inst_31938__$1);

(statearr_32030[(16)] = inst_31935__$1);

return statearr_32030;
})();
var statearr_32031_33021 = state_31994__$1;
(statearr_32031_33021[(2)] = null);

(statearr_32031_33021[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31995 === (18))){
var inst_31964 = (state_31994[(2)]);
var state_31994__$1 = state_31994;
var statearr_32032_33022 = state_31994__$1;
(statearr_32032_33022[(2)] = inst_31964);

(statearr_32032_33022[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31995 === (8))){
var inst_31937 = (state_31994[(12)]);
var inst_31938 = (state_31994[(15)]);
var inst_31940 = (inst_31938 < inst_31937);
var inst_31941 = inst_31940;
var state_31994__$1 = state_31994;
if(cljs.core.truth_(inst_31941)){
var statearr_32033_33023 = state_31994__$1;
(statearr_32033_33023[(1)] = (10));

} else {
var statearr_32034_33024 = state_31994__$1;
(statearr_32034_33024[(1)] = (11));

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
var cljs$core$async$state_machine__30234__auto__ = null;
var cljs$core$async$state_machine__30234__auto____0 = (function (){
var statearr_32035 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32035[(0)] = cljs$core$async$state_machine__30234__auto__);

(statearr_32035[(1)] = (1));

return statearr_32035;
});
var cljs$core$async$state_machine__30234__auto____1 = (function (state_31994){
while(true){
var ret_value__30235__auto__ = (function (){try{while(true){
var result__30236__auto__ = switch__30233__auto__(state_31994);
if(cljs.core.keyword_identical_QMARK_(result__30236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30236__auto__;
}
break;
}
}catch (e32036){var ex__30237__auto__ = e32036;
var statearr_32037_33027 = state_31994;
(statearr_32037_33027[(2)] = ex__30237__auto__);


if(cljs.core.seq((state_31994[(4)]))){
var statearr_32038_33028 = state_31994;
(statearr_32038_33028[(1)] = cljs.core.first((state_31994[(4)])));

} else {
throw ex__30237__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33029 = state_31994;
state_31994 = G__33029;
continue;
} else {
return ret_value__30235__auto__;
}
break;
}
});
cljs$core$async$state_machine__30234__auto__ = function(state_31994){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30234__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30234__auto____1.call(this,state_31994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30234__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30234__auto____0;
cljs$core$async$state_machine__30234__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30234__auto____1;
return cljs$core$async$state_machine__30234__auto__;
})()
})();
var state__30461__auto__ = (function (){var statearr_32039 = f__30460__auto__();
(statearr_32039[(6)] = c__30454__auto___32992);

return statearr_32039;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30461__auto__);
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
var G__32041 = arguments.length;
switch (G__32041) {
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
var G__32043 = arguments.length;
switch (G__32043) {
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
var G__32045 = arguments.length;
switch (G__32045) {
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
var c__30454__auto___33044 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30460__auto__ = (function (){var switch__30233__auto__ = (function (state_32088){
var state_val_32089 = (state_32088[(1)]);
if((state_val_32089 === (7))){
var state_32088__$1 = state_32088;
var statearr_32090_33045 = state_32088__$1;
(statearr_32090_33045[(2)] = null);

(statearr_32090_33045[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32089 === (1))){
var state_32088__$1 = state_32088;
var statearr_32091_33046 = state_32088__$1;
(statearr_32091_33046[(2)] = null);

(statearr_32091_33046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32089 === (4))){
var inst_32049 = (state_32088[(7)]);
var inst_32048 = (state_32088[(8)]);
var inst_32051 = (inst_32049 < inst_32048);
var state_32088__$1 = state_32088;
if(cljs.core.truth_(inst_32051)){
var statearr_32092_33047 = state_32088__$1;
(statearr_32092_33047[(1)] = (6));

} else {
var statearr_32093_33048 = state_32088__$1;
(statearr_32093_33048[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32089 === (15))){
var inst_32074 = (state_32088[(9)]);
var inst_32079 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32074);
var state_32088__$1 = state_32088;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32088__$1,(17),out,inst_32079);
} else {
if((state_val_32089 === (13))){
var inst_32074 = (state_32088[(9)]);
var inst_32074__$1 = (state_32088[(2)]);
var inst_32075 = cljs.core.some(cljs.core.nil_QMARK_,inst_32074__$1);
var state_32088__$1 = (function (){var statearr_32094 = state_32088;
(statearr_32094[(9)] = inst_32074__$1);

return statearr_32094;
})();
if(cljs.core.truth_(inst_32075)){
var statearr_32095_33049 = state_32088__$1;
(statearr_32095_33049[(1)] = (14));

} else {
var statearr_32096_33050 = state_32088__$1;
(statearr_32096_33050[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32089 === (6))){
var state_32088__$1 = state_32088;
var statearr_32097_33051 = state_32088__$1;
(statearr_32097_33051[(2)] = null);

(statearr_32097_33051[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32089 === (17))){
var inst_32081 = (state_32088[(2)]);
var state_32088__$1 = (function (){var statearr_32099 = state_32088;
(statearr_32099[(10)] = inst_32081);

return statearr_32099;
})();
var statearr_32100_33052 = state_32088__$1;
(statearr_32100_33052[(2)] = null);

(statearr_32100_33052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32089 === (3))){
var inst_32086 = (state_32088[(2)]);
var state_32088__$1 = state_32088;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32088__$1,inst_32086);
} else {
if((state_val_32089 === (12))){
var _ = (function (){var statearr_32101 = state_32088;
(statearr_32101[(4)] = cljs.core.rest((state_32088[(4)])));

return statearr_32101;
})();
var state_32088__$1 = state_32088;
var ex32098 = (state_32088__$1[(2)]);
var statearr_32102_33053 = state_32088__$1;
(statearr_32102_33053[(5)] = ex32098);


if((ex32098 instanceof Object)){
var statearr_32103_33054 = state_32088__$1;
(statearr_32103_33054[(1)] = (11));

(statearr_32103_33054[(5)] = null);

} else {
throw ex32098;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32089 === (2))){
var inst_32047 = cljs.core.reset_BANG_(dctr,cnt);
var inst_32048 = cnt;
var inst_32049 = (0);
var state_32088__$1 = (function (){var statearr_32104 = state_32088;
(statearr_32104[(7)] = inst_32049);

(statearr_32104[(8)] = inst_32048);

(statearr_32104[(11)] = inst_32047);

return statearr_32104;
})();
var statearr_32105_33055 = state_32088__$1;
(statearr_32105_33055[(2)] = null);

(statearr_32105_33055[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32089 === (11))){
var inst_32053 = (state_32088[(2)]);
var inst_32054 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32088__$1 = (function (){var statearr_32106 = state_32088;
(statearr_32106[(12)] = inst_32053);

return statearr_32106;
})();
var statearr_32107_33056 = state_32088__$1;
(statearr_32107_33056[(2)] = inst_32054);

(statearr_32107_33056[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32089 === (9))){
var inst_32049 = (state_32088[(7)]);
var _ = (function (){var statearr_32108 = state_32088;
(statearr_32108[(4)] = cljs.core.cons((12),(state_32088[(4)])));

return statearr_32108;
})();
var inst_32060 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32049) : chs__$1.call(null,inst_32049));
var inst_32061 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32049) : done.call(null,inst_32049));
var inst_32062 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32060,inst_32061);
var ___$1 = (function (){var statearr_32109 = state_32088;
(statearr_32109[(4)] = cljs.core.rest((state_32088[(4)])));

return statearr_32109;
})();
var state_32088__$1 = state_32088;
var statearr_32110_33057 = state_32088__$1;
(statearr_32110_33057[(2)] = inst_32062);

(statearr_32110_33057[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32089 === (5))){
var inst_32072 = (state_32088[(2)]);
var state_32088__$1 = (function (){var statearr_32111 = state_32088;
(statearr_32111[(13)] = inst_32072);

return statearr_32111;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32088__$1,(13),dchan);
} else {
if((state_val_32089 === (14))){
var inst_32077 = cljs.core.async.close_BANG_(out);
var state_32088__$1 = state_32088;
var statearr_32112_33061 = state_32088__$1;
(statearr_32112_33061[(2)] = inst_32077);

(statearr_32112_33061[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32089 === (16))){
var inst_32084 = (state_32088[(2)]);
var state_32088__$1 = state_32088;
var statearr_32113_33062 = state_32088__$1;
(statearr_32113_33062[(2)] = inst_32084);

(statearr_32113_33062[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32089 === (10))){
var inst_32049 = (state_32088[(7)]);
var inst_32065 = (state_32088[(2)]);
var inst_32066 = (inst_32049 + (1));
var inst_32049__$1 = inst_32066;
var state_32088__$1 = (function (){var statearr_32114 = state_32088;
(statearr_32114[(14)] = inst_32065);

(statearr_32114[(7)] = inst_32049__$1);

return statearr_32114;
})();
var statearr_32115_33066 = state_32088__$1;
(statearr_32115_33066[(2)] = null);

(statearr_32115_33066[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32089 === (8))){
var inst_32070 = (state_32088[(2)]);
var state_32088__$1 = state_32088;
var statearr_32116_33067 = state_32088__$1;
(statearr_32116_33067[(2)] = inst_32070);

(statearr_32116_33067[(1)] = (5));


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
var cljs$core$async$state_machine__30234__auto__ = null;
var cljs$core$async$state_machine__30234__auto____0 = (function (){
var statearr_32117 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32117[(0)] = cljs$core$async$state_machine__30234__auto__);

(statearr_32117[(1)] = (1));

return statearr_32117;
});
var cljs$core$async$state_machine__30234__auto____1 = (function (state_32088){
while(true){
var ret_value__30235__auto__ = (function (){try{while(true){
var result__30236__auto__ = switch__30233__auto__(state_32088);
if(cljs.core.keyword_identical_QMARK_(result__30236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30236__auto__;
}
break;
}
}catch (e32118){var ex__30237__auto__ = e32118;
var statearr_32119_33075 = state_32088;
(statearr_32119_33075[(2)] = ex__30237__auto__);


if(cljs.core.seq((state_32088[(4)]))){
var statearr_32120_33076 = state_32088;
(statearr_32120_33076[(1)] = cljs.core.first((state_32088[(4)])));

} else {
throw ex__30237__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33077 = state_32088;
state_32088 = G__33077;
continue;
} else {
return ret_value__30235__auto__;
}
break;
}
});
cljs$core$async$state_machine__30234__auto__ = function(state_32088){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30234__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30234__auto____1.call(this,state_32088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30234__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30234__auto____0;
cljs$core$async$state_machine__30234__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30234__auto____1;
return cljs$core$async$state_machine__30234__auto__;
})()
})();
var state__30461__auto__ = (function (){var statearr_32121 = f__30460__auto__();
(statearr_32121[(6)] = c__30454__auto___33044);

return statearr_32121;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30461__auto__);
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
var G__32124 = arguments.length;
switch (G__32124) {
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
var c__30454__auto___33079 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30460__auto__ = (function (){var switch__30233__auto__ = (function (state_32156){
var state_val_32157 = (state_32156[(1)]);
if((state_val_32157 === (7))){
var inst_32135 = (state_32156[(7)]);
var inst_32136 = (state_32156[(8)]);
var inst_32135__$1 = (state_32156[(2)]);
var inst_32136__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32135__$1,(0),null);
var inst_32137 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32135__$1,(1),null);
var inst_32138 = (inst_32136__$1 == null);
var state_32156__$1 = (function (){var statearr_32158 = state_32156;
(statearr_32158[(9)] = inst_32137);

(statearr_32158[(7)] = inst_32135__$1);

(statearr_32158[(8)] = inst_32136__$1);

return statearr_32158;
})();
if(cljs.core.truth_(inst_32138)){
var statearr_32159_33080 = state_32156__$1;
(statearr_32159_33080[(1)] = (8));

} else {
var statearr_32160_33081 = state_32156__$1;
(statearr_32160_33081[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32157 === (1))){
var inst_32125 = cljs.core.vec(chs);
var inst_32126 = inst_32125;
var state_32156__$1 = (function (){var statearr_32161 = state_32156;
(statearr_32161[(10)] = inst_32126);

return statearr_32161;
})();
var statearr_32162_33082 = state_32156__$1;
(statearr_32162_33082[(2)] = null);

(statearr_32162_33082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32157 === (4))){
var inst_32126 = (state_32156[(10)]);
var state_32156__$1 = state_32156;
return cljs.core.async.ioc_alts_BANG_(state_32156__$1,(7),inst_32126);
} else {
if((state_val_32157 === (6))){
var inst_32152 = (state_32156[(2)]);
var state_32156__$1 = state_32156;
var statearr_32163_33083 = state_32156__$1;
(statearr_32163_33083[(2)] = inst_32152);

(statearr_32163_33083[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32157 === (3))){
var inst_32154 = (state_32156[(2)]);
var state_32156__$1 = state_32156;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32156__$1,inst_32154);
} else {
if((state_val_32157 === (2))){
var inst_32126 = (state_32156[(10)]);
var inst_32128 = cljs.core.count(inst_32126);
var inst_32129 = (inst_32128 > (0));
var state_32156__$1 = state_32156;
if(cljs.core.truth_(inst_32129)){
var statearr_32165_33084 = state_32156__$1;
(statearr_32165_33084[(1)] = (4));

} else {
var statearr_32166_33085 = state_32156__$1;
(statearr_32166_33085[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32157 === (11))){
var inst_32126 = (state_32156[(10)]);
var inst_32145 = (state_32156[(2)]);
var tmp32164 = inst_32126;
var inst_32126__$1 = tmp32164;
var state_32156__$1 = (function (){var statearr_32167 = state_32156;
(statearr_32167[(10)] = inst_32126__$1);

(statearr_32167[(11)] = inst_32145);

return statearr_32167;
})();
var statearr_32168_33088 = state_32156__$1;
(statearr_32168_33088[(2)] = null);

(statearr_32168_33088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32157 === (9))){
var inst_32136 = (state_32156[(8)]);
var state_32156__$1 = state_32156;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32156__$1,(11),out,inst_32136);
} else {
if((state_val_32157 === (5))){
var inst_32150 = cljs.core.async.close_BANG_(out);
var state_32156__$1 = state_32156;
var statearr_32169_33089 = state_32156__$1;
(statearr_32169_33089[(2)] = inst_32150);

(statearr_32169_33089[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32157 === (10))){
var inst_32148 = (state_32156[(2)]);
var state_32156__$1 = state_32156;
var statearr_32170_33090 = state_32156__$1;
(statearr_32170_33090[(2)] = inst_32148);

(statearr_32170_33090[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32157 === (8))){
var inst_32137 = (state_32156[(9)]);
var inst_32126 = (state_32156[(10)]);
var inst_32135 = (state_32156[(7)]);
var inst_32136 = (state_32156[(8)]);
var inst_32140 = (function (){var cs = inst_32126;
var vec__32131 = inst_32135;
var v = inst_32136;
var c = inst_32137;
return (function (p1__32122_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32122_SHARP_);
});
})();
var inst_32141 = cljs.core.filterv(inst_32140,inst_32126);
var inst_32126__$1 = inst_32141;
var state_32156__$1 = (function (){var statearr_32171 = state_32156;
(statearr_32171[(10)] = inst_32126__$1);

return statearr_32171;
})();
var statearr_32172_33091 = state_32156__$1;
(statearr_32172_33091[(2)] = null);

(statearr_32172_33091[(1)] = (2));


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
var cljs$core$async$state_machine__30234__auto__ = null;
var cljs$core$async$state_machine__30234__auto____0 = (function (){
var statearr_32173 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32173[(0)] = cljs$core$async$state_machine__30234__auto__);

(statearr_32173[(1)] = (1));

return statearr_32173;
});
var cljs$core$async$state_machine__30234__auto____1 = (function (state_32156){
while(true){
var ret_value__30235__auto__ = (function (){try{while(true){
var result__30236__auto__ = switch__30233__auto__(state_32156);
if(cljs.core.keyword_identical_QMARK_(result__30236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30236__auto__;
}
break;
}
}catch (e32174){var ex__30237__auto__ = e32174;
var statearr_32175_33092 = state_32156;
(statearr_32175_33092[(2)] = ex__30237__auto__);


if(cljs.core.seq((state_32156[(4)]))){
var statearr_32176_33093 = state_32156;
(statearr_32176_33093[(1)] = cljs.core.first((state_32156[(4)])));

} else {
throw ex__30237__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33094 = state_32156;
state_32156 = G__33094;
continue;
} else {
return ret_value__30235__auto__;
}
break;
}
});
cljs$core$async$state_machine__30234__auto__ = function(state_32156){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30234__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30234__auto____1.call(this,state_32156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30234__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30234__auto____0;
cljs$core$async$state_machine__30234__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30234__auto____1;
return cljs$core$async$state_machine__30234__auto__;
})()
})();
var state__30461__auto__ = (function (){var statearr_32177 = f__30460__auto__();
(statearr_32177[(6)] = c__30454__auto___33079);

return statearr_32177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30461__auto__);
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
var G__32179 = arguments.length;
switch (G__32179) {
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
var c__30454__auto___33096 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30460__auto__ = (function (){var switch__30233__auto__ = (function (state_32203){
var state_val_32204 = (state_32203[(1)]);
if((state_val_32204 === (7))){
var inst_32185 = (state_32203[(7)]);
var inst_32185__$1 = (state_32203[(2)]);
var inst_32186 = (inst_32185__$1 == null);
var inst_32187 = cljs.core.not(inst_32186);
var state_32203__$1 = (function (){var statearr_32205 = state_32203;
(statearr_32205[(7)] = inst_32185__$1);

return statearr_32205;
})();
if(inst_32187){
var statearr_32206_33097 = state_32203__$1;
(statearr_32206_33097[(1)] = (8));

} else {
var statearr_32207_33098 = state_32203__$1;
(statearr_32207_33098[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32204 === (1))){
var inst_32180 = (0);
var state_32203__$1 = (function (){var statearr_32208 = state_32203;
(statearr_32208[(8)] = inst_32180);

return statearr_32208;
})();
var statearr_32209_33099 = state_32203__$1;
(statearr_32209_33099[(2)] = null);

(statearr_32209_33099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32204 === (4))){
var state_32203__$1 = state_32203;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32203__$1,(7),ch);
} else {
if((state_val_32204 === (6))){
var inst_32198 = (state_32203[(2)]);
var state_32203__$1 = state_32203;
var statearr_32210_33100 = state_32203__$1;
(statearr_32210_33100[(2)] = inst_32198);

(statearr_32210_33100[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32204 === (3))){
var inst_32200 = (state_32203[(2)]);
var inst_32201 = cljs.core.async.close_BANG_(out);
var state_32203__$1 = (function (){var statearr_32211 = state_32203;
(statearr_32211[(9)] = inst_32200);

return statearr_32211;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32203__$1,inst_32201);
} else {
if((state_val_32204 === (2))){
var inst_32180 = (state_32203[(8)]);
var inst_32182 = (inst_32180 < n);
var state_32203__$1 = state_32203;
if(cljs.core.truth_(inst_32182)){
var statearr_32212_33107 = state_32203__$1;
(statearr_32212_33107[(1)] = (4));

} else {
var statearr_32213_33108 = state_32203__$1;
(statearr_32213_33108[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32204 === (11))){
var inst_32180 = (state_32203[(8)]);
var inst_32190 = (state_32203[(2)]);
var inst_32191 = (inst_32180 + (1));
var inst_32180__$1 = inst_32191;
var state_32203__$1 = (function (){var statearr_32214 = state_32203;
(statearr_32214[(8)] = inst_32180__$1);

(statearr_32214[(10)] = inst_32190);

return statearr_32214;
})();
var statearr_32215_33109 = state_32203__$1;
(statearr_32215_33109[(2)] = null);

(statearr_32215_33109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32204 === (9))){
var state_32203__$1 = state_32203;
var statearr_32216_33110 = state_32203__$1;
(statearr_32216_33110[(2)] = null);

(statearr_32216_33110[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32204 === (5))){
var state_32203__$1 = state_32203;
var statearr_32217_33111 = state_32203__$1;
(statearr_32217_33111[(2)] = null);

(statearr_32217_33111[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32204 === (10))){
var inst_32195 = (state_32203[(2)]);
var state_32203__$1 = state_32203;
var statearr_32218_33112 = state_32203__$1;
(statearr_32218_33112[(2)] = inst_32195);

(statearr_32218_33112[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32204 === (8))){
var inst_32185 = (state_32203[(7)]);
var state_32203__$1 = state_32203;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32203__$1,(11),out,inst_32185);
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
var cljs$core$async$state_machine__30234__auto__ = null;
var cljs$core$async$state_machine__30234__auto____0 = (function (){
var statearr_32219 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32219[(0)] = cljs$core$async$state_machine__30234__auto__);

(statearr_32219[(1)] = (1));

return statearr_32219;
});
var cljs$core$async$state_machine__30234__auto____1 = (function (state_32203){
while(true){
var ret_value__30235__auto__ = (function (){try{while(true){
var result__30236__auto__ = switch__30233__auto__(state_32203);
if(cljs.core.keyword_identical_QMARK_(result__30236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30236__auto__;
}
break;
}
}catch (e32220){var ex__30237__auto__ = e32220;
var statearr_32221_33113 = state_32203;
(statearr_32221_33113[(2)] = ex__30237__auto__);


if(cljs.core.seq((state_32203[(4)]))){
var statearr_32222_33114 = state_32203;
(statearr_32222_33114[(1)] = cljs.core.first((state_32203[(4)])));

} else {
throw ex__30237__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33115 = state_32203;
state_32203 = G__33115;
continue;
} else {
return ret_value__30235__auto__;
}
break;
}
});
cljs$core$async$state_machine__30234__auto__ = function(state_32203){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30234__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30234__auto____1.call(this,state_32203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30234__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30234__auto____0;
cljs$core$async$state_machine__30234__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30234__auto____1;
return cljs$core$async$state_machine__30234__auto__;
})()
})();
var state__30461__auto__ = (function (){var statearr_32223 = f__30460__auto__();
(statearr_32223[(6)] = c__30454__auto___33096);

return statearr_32223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30461__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32225 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32225 = (function (f,ch,meta32226){
this.f = f;
this.ch = ch;
this.meta32226 = meta32226;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32225.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32227,meta32226__$1){
var self__ = this;
var _32227__$1 = this;
return (new cljs.core.async.t_cljs$core$async32225(self__.f,self__.ch,meta32226__$1));
}));

(cljs.core.async.t_cljs$core$async32225.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32227){
var self__ = this;
var _32227__$1 = this;
return self__.meta32226;
}));

(cljs.core.async.t_cljs$core$async32225.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32225.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32225.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32225.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32225.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32228 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32228 = (function (f,ch,meta32226,_,fn1,meta32229){
this.f = f;
this.ch = ch;
this.meta32226 = meta32226;
this._ = _;
this.fn1 = fn1;
this.meta32229 = meta32229;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32228.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32230,meta32229__$1){
var self__ = this;
var _32230__$1 = this;
return (new cljs.core.async.t_cljs$core$async32228(self__.f,self__.ch,self__.meta32226,self__._,self__.fn1,meta32229__$1));
}));

(cljs.core.async.t_cljs$core$async32228.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32230){
var self__ = this;
var _32230__$1 = this;
return self__.meta32229;
}));

(cljs.core.async.t_cljs$core$async32228.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32228.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async32228.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32228.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__32224_SHARP_){
var G__32231 = (((p1__32224_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32224_SHARP_) : self__.f.call(null,p1__32224_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32231) : f1.call(null,G__32231));
});
}));

(cljs.core.async.t_cljs$core$async32228.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32226","meta32226",1748310203,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32225","cljs.core.async/t_cljs$core$async32225",-565636593,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32229","meta32229",162064575,null)], null);
}));

(cljs.core.async.t_cljs$core$async32228.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32228.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32228");

(cljs.core.async.t_cljs$core$async32228.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32228");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32228.
 */
cljs.core.async.__GT_t_cljs$core$async32228 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32228(f__$1,ch__$1,meta32226__$1,___$2,fn1__$1,meta32229){
return (new cljs.core.async.t_cljs$core$async32228(f__$1,ch__$1,meta32226__$1,___$2,fn1__$1,meta32229));
});

}

return (new cljs.core.async.t_cljs$core$async32228(self__.f,self__.ch,self__.meta32226,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32232 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32232) : self__.f.call(null,G__32232));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async32225.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32225.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async32225.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32226","meta32226",1748310203,null)], null);
}));

(cljs.core.async.t_cljs$core$async32225.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32225.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32225");

(cljs.core.async.t_cljs$core$async32225.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32225");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32225.
 */
cljs.core.async.__GT_t_cljs$core$async32225 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32225(f__$1,ch__$1,meta32226){
return (new cljs.core.async.t_cljs$core$async32225(f__$1,ch__$1,meta32226));
});

}

return (new cljs.core.async.t_cljs$core$async32225(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32233 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32233 = (function (f,ch,meta32234){
this.f = f;
this.ch = ch;
this.meta32234 = meta32234;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32233.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32235,meta32234__$1){
var self__ = this;
var _32235__$1 = this;
return (new cljs.core.async.t_cljs$core$async32233(self__.f,self__.ch,meta32234__$1));
}));

(cljs.core.async.t_cljs$core$async32233.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32235){
var self__ = this;
var _32235__$1 = this;
return self__.meta32234;
}));

(cljs.core.async.t_cljs$core$async32233.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32233.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32233.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32233.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32233.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32233.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async32233.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32234","meta32234",-585006181,null)], null);
}));

(cljs.core.async.t_cljs$core$async32233.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32233.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32233");

(cljs.core.async.t_cljs$core$async32233.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32233");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32233.
 */
cljs.core.async.__GT_t_cljs$core$async32233 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32233(f__$1,ch__$1,meta32234){
return (new cljs.core.async.t_cljs$core$async32233(f__$1,ch__$1,meta32234));
});

}

return (new cljs.core.async.t_cljs$core$async32233(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32236 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32236 = (function (p,ch,meta32237){
this.p = p;
this.ch = ch;
this.meta32237 = meta32237;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32236.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32238,meta32237__$1){
var self__ = this;
var _32238__$1 = this;
return (new cljs.core.async.t_cljs$core$async32236(self__.p,self__.ch,meta32237__$1));
}));

(cljs.core.async.t_cljs$core$async32236.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32238){
var self__ = this;
var _32238__$1 = this;
return self__.meta32237;
}));

(cljs.core.async.t_cljs$core$async32236.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32236.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32236.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32236.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32236.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32236.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32236.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async32236.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32237","meta32237",-1636495605,null)], null);
}));

(cljs.core.async.t_cljs$core$async32236.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32236.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32236");

(cljs.core.async.t_cljs$core$async32236.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32236");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32236.
 */
cljs.core.async.__GT_t_cljs$core$async32236 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32236(p__$1,ch__$1,meta32237){
return (new cljs.core.async.t_cljs$core$async32236(p__$1,ch__$1,meta32237));
});

}

return (new cljs.core.async.t_cljs$core$async32236(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32240 = arguments.length;
switch (G__32240) {
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
var c__30454__auto___33178 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30460__auto__ = (function (){var switch__30233__auto__ = (function (state_32261){
var state_val_32262 = (state_32261[(1)]);
if((state_val_32262 === (7))){
var inst_32257 = (state_32261[(2)]);
var state_32261__$1 = state_32261;
var statearr_32263_33179 = state_32261__$1;
(statearr_32263_33179[(2)] = inst_32257);

(statearr_32263_33179[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32262 === (1))){
var state_32261__$1 = state_32261;
var statearr_32264_33180 = state_32261__$1;
(statearr_32264_33180[(2)] = null);

(statearr_32264_33180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32262 === (4))){
var inst_32243 = (state_32261[(7)]);
var inst_32243__$1 = (state_32261[(2)]);
var inst_32244 = (inst_32243__$1 == null);
var state_32261__$1 = (function (){var statearr_32265 = state_32261;
(statearr_32265[(7)] = inst_32243__$1);

return statearr_32265;
})();
if(cljs.core.truth_(inst_32244)){
var statearr_32266_33181 = state_32261__$1;
(statearr_32266_33181[(1)] = (5));

} else {
var statearr_32267_33182 = state_32261__$1;
(statearr_32267_33182[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32262 === (6))){
var inst_32243 = (state_32261[(7)]);
var inst_32248 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32243) : p.call(null,inst_32243));
var state_32261__$1 = state_32261;
if(cljs.core.truth_(inst_32248)){
var statearr_32268_33183 = state_32261__$1;
(statearr_32268_33183[(1)] = (8));

} else {
var statearr_32269_33184 = state_32261__$1;
(statearr_32269_33184[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32262 === (3))){
var inst_32259 = (state_32261[(2)]);
var state_32261__$1 = state_32261;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32261__$1,inst_32259);
} else {
if((state_val_32262 === (2))){
var state_32261__$1 = state_32261;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32261__$1,(4),ch);
} else {
if((state_val_32262 === (11))){
var inst_32251 = (state_32261[(2)]);
var state_32261__$1 = state_32261;
var statearr_32270_33185 = state_32261__$1;
(statearr_32270_33185[(2)] = inst_32251);

(statearr_32270_33185[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32262 === (9))){
var state_32261__$1 = state_32261;
var statearr_32271_33186 = state_32261__$1;
(statearr_32271_33186[(2)] = null);

(statearr_32271_33186[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32262 === (5))){
var inst_32246 = cljs.core.async.close_BANG_(out);
var state_32261__$1 = state_32261;
var statearr_32272_33187 = state_32261__$1;
(statearr_32272_33187[(2)] = inst_32246);

(statearr_32272_33187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32262 === (10))){
var inst_32254 = (state_32261[(2)]);
var state_32261__$1 = (function (){var statearr_32273 = state_32261;
(statearr_32273[(8)] = inst_32254);

return statearr_32273;
})();
var statearr_32274_33188 = state_32261__$1;
(statearr_32274_33188[(2)] = null);

(statearr_32274_33188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32262 === (8))){
var inst_32243 = (state_32261[(7)]);
var state_32261__$1 = state_32261;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32261__$1,(11),out,inst_32243);
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
var cljs$core$async$state_machine__30234__auto__ = null;
var cljs$core$async$state_machine__30234__auto____0 = (function (){
var statearr_32275 = [null,null,null,null,null,null,null,null,null];
(statearr_32275[(0)] = cljs$core$async$state_machine__30234__auto__);

(statearr_32275[(1)] = (1));

return statearr_32275;
});
var cljs$core$async$state_machine__30234__auto____1 = (function (state_32261){
while(true){
var ret_value__30235__auto__ = (function (){try{while(true){
var result__30236__auto__ = switch__30233__auto__(state_32261);
if(cljs.core.keyword_identical_QMARK_(result__30236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30236__auto__;
}
break;
}
}catch (e32276){var ex__30237__auto__ = e32276;
var statearr_32277_33189 = state_32261;
(statearr_32277_33189[(2)] = ex__30237__auto__);


if(cljs.core.seq((state_32261[(4)]))){
var statearr_32278_33190 = state_32261;
(statearr_32278_33190[(1)] = cljs.core.first((state_32261[(4)])));

} else {
throw ex__30237__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33191 = state_32261;
state_32261 = G__33191;
continue;
} else {
return ret_value__30235__auto__;
}
break;
}
});
cljs$core$async$state_machine__30234__auto__ = function(state_32261){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30234__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30234__auto____1.call(this,state_32261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30234__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30234__auto____0;
cljs$core$async$state_machine__30234__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30234__auto____1;
return cljs$core$async$state_machine__30234__auto__;
})()
})();
var state__30461__auto__ = (function (){var statearr_32279 = f__30460__auto__();
(statearr_32279[(6)] = c__30454__auto___33178);

return statearr_32279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30461__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32281 = arguments.length;
switch (G__32281) {
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
var c__30454__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30460__auto__ = (function (){var switch__30233__auto__ = (function (state_32343){
var state_val_32344 = (state_32343[(1)]);
if((state_val_32344 === (7))){
var inst_32339 = (state_32343[(2)]);
var state_32343__$1 = state_32343;
var statearr_32345_33204 = state_32343__$1;
(statearr_32345_33204[(2)] = inst_32339);

(statearr_32345_33204[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32344 === (20))){
var inst_32309 = (state_32343[(7)]);
var inst_32320 = (state_32343[(2)]);
var inst_32321 = cljs.core.next(inst_32309);
var inst_32295 = inst_32321;
var inst_32296 = null;
var inst_32297 = (0);
var inst_32298 = (0);
var state_32343__$1 = (function (){var statearr_32346 = state_32343;
(statearr_32346[(8)] = inst_32295);

(statearr_32346[(9)] = inst_32297);

(statearr_32346[(10)] = inst_32298);

(statearr_32346[(11)] = inst_32320);

(statearr_32346[(12)] = inst_32296);

return statearr_32346;
})();
var statearr_32347_33205 = state_32343__$1;
(statearr_32347_33205[(2)] = null);

(statearr_32347_33205[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32344 === (1))){
var state_32343__$1 = state_32343;
var statearr_32348_33207 = state_32343__$1;
(statearr_32348_33207[(2)] = null);

(statearr_32348_33207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32344 === (4))){
var inst_32284 = (state_32343[(13)]);
var inst_32284__$1 = (state_32343[(2)]);
var inst_32285 = (inst_32284__$1 == null);
var state_32343__$1 = (function (){var statearr_32349 = state_32343;
(statearr_32349[(13)] = inst_32284__$1);

return statearr_32349;
})();
if(cljs.core.truth_(inst_32285)){
var statearr_32350_33208 = state_32343__$1;
(statearr_32350_33208[(1)] = (5));

} else {
var statearr_32351_33209 = state_32343__$1;
(statearr_32351_33209[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32344 === (15))){
var state_32343__$1 = state_32343;
var statearr_32355_33213 = state_32343__$1;
(statearr_32355_33213[(2)] = null);

(statearr_32355_33213[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32344 === (21))){
var state_32343__$1 = state_32343;
var statearr_32356_33214 = state_32343__$1;
(statearr_32356_33214[(2)] = null);

(statearr_32356_33214[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32344 === (13))){
var inst_32295 = (state_32343[(8)]);
var inst_32297 = (state_32343[(9)]);
var inst_32298 = (state_32343[(10)]);
var inst_32296 = (state_32343[(12)]);
var inst_32305 = (state_32343[(2)]);
var inst_32306 = (inst_32298 + (1));
var tmp32352 = inst_32295;
var tmp32353 = inst_32297;
var tmp32354 = inst_32296;
var inst_32295__$1 = tmp32352;
var inst_32296__$1 = tmp32354;
var inst_32297__$1 = tmp32353;
var inst_32298__$1 = inst_32306;
var state_32343__$1 = (function (){var statearr_32357 = state_32343;
(statearr_32357[(8)] = inst_32295__$1);

(statearr_32357[(9)] = inst_32297__$1);

(statearr_32357[(10)] = inst_32298__$1);

(statearr_32357[(12)] = inst_32296__$1);

(statearr_32357[(14)] = inst_32305);

return statearr_32357;
})();
var statearr_32358_33215 = state_32343__$1;
(statearr_32358_33215[(2)] = null);

(statearr_32358_33215[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32344 === (22))){
var state_32343__$1 = state_32343;
var statearr_32359_33216 = state_32343__$1;
(statearr_32359_33216[(2)] = null);

(statearr_32359_33216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32344 === (6))){
var inst_32284 = (state_32343[(13)]);
var inst_32293 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32284) : f.call(null,inst_32284));
var inst_32294 = cljs.core.seq(inst_32293);
var inst_32295 = inst_32294;
var inst_32296 = null;
var inst_32297 = (0);
var inst_32298 = (0);
var state_32343__$1 = (function (){var statearr_32360 = state_32343;
(statearr_32360[(8)] = inst_32295);

(statearr_32360[(9)] = inst_32297);

(statearr_32360[(10)] = inst_32298);

(statearr_32360[(12)] = inst_32296);

return statearr_32360;
})();
var statearr_32361_33217 = state_32343__$1;
(statearr_32361_33217[(2)] = null);

(statearr_32361_33217[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32344 === (17))){
var inst_32309 = (state_32343[(7)]);
var inst_32313 = cljs.core.chunk_first(inst_32309);
var inst_32314 = cljs.core.chunk_rest(inst_32309);
var inst_32315 = cljs.core.count(inst_32313);
var inst_32295 = inst_32314;
var inst_32296 = inst_32313;
var inst_32297 = inst_32315;
var inst_32298 = (0);
var state_32343__$1 = (function (){var statearr_32362 = state_32343;
(statearr_32362[(8)] = inst_32295);

(statearr_32362[(9)] = inst_32297);

(statearr_32362[(10)] = inst_32298);

(statearr_32362[(12)] = inst_32296);

return statearr_32362;
})();
var statearr_32363_33218 = state_32343__$1;
(statearr_32363_33218[(2)] = null);

(statearr_32363_33218[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32344 === (3))){
var inst_32341 = (state_32343[(2)]);
var state_32343__$1 = state_32343;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32343__$1,inst_32341);
} else {
if((state_val_32344 === (12))){
var inst_32329 = (state_32343[(2)]);
var state_32343__$1 = state_32343;
var statearr_32364_33219 = state_32343__$1;
(statearr_32364_33219[(2)] = inst_32329);

(statearr_32364_33219[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32344 === (2))){
var state_32343__$1 = state_32343;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32343__$1,(4),in$);
} else {
if((state_val_32344 === (23))){
var inst_32337 = (state_32343[(2)]);
var state_32343__$1 = state_32343;
var statearr_32365_33220 = state_32343__$1;
(statearr_32365_33220[(2)] = inst_32337);

(statearr_32365_33220[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32344 === (19))){
var inst_32324 = (state_32343[(2)]);
var state_32343__$1 = state_32343;
var statearr_32366_33222 = state_32343__$1;
(statearr_32366_33222[(2)] = inst_32324);

(statearr_32366_33222[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32344 === (11))){
var inst_32295 = (state_32343[(8)]);
var inst_32309 = (state_32343[(7)]);
var inst_32309__$1 = cljs.core.seq(inst_32295);
var state_32343__$1 = (function (){var statearr_32367 = state_32343;
(statearr_32367[(7)] = inst_32309__$1);

return statearr_32367;
})();
if(inst_32309__$1){
var statearr_32368_33226 = state_32343__$1;
(statearr_32368_33226[(1)] = (14));

} else {
var statearr_32369_33227 = state_32343__$1;
(statearr_32369_33227[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32344 === (9))){
var inst_32331 = (state_32343[(2)]);
var inst_32332 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32343__$1 = (function (){var statearr_32370 = state_32343;
(statearr_32370[(15)] = inst_32331);

return statearr_32370;
})();
if(cljs.core.truth_(inst_32332)){
var statearr_32371_33228 = state_32343__$1;
(statearr_32371_33228[(1)] = (21));

} else {
var statearr_32372_33229 = state_32343__$1;
(statearr_32372_33229[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32344 === (5))){
var inst_32287 = cljs.core.async.close_BANG_(out);
var state_32343__$1 = state_32343;
var statearr_32373_33230 = state_32343__$1;
(statearr_32373_33230[(2)] = inst_32287);

(statearr_32373_33230[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32344 === (14))){
var inst_32309 = (state_32343[(7)]);
var inst_32311 = cljs.core.chunked_seq_QMARK_(inst_32309);
var state_32343__$1 = state_32343;
if(inst_32311){
var statearr_32374_33231 = state_32343__$1;
(statearr_32374_33231[(1)] = (17));

} else {
var statearr_32375_33232 = state_32343__$1;
(statearr_32375_33232[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32344 === (16))){
var inst_32327 = (state_32343[(2)]);
var state_32343__$1 = state_32343;
var statearr_32376_33233 = state_32343__$1;
(statearr_32376_33233[(2)] = inst_32327);

(statearr_32376_33233[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32344 === (10))){
var inst_32298 = (state_32343[(10)]);
var inst_32296 = (state_32343[(12)]);
var inst_32303 = cljs.core._nth(inst_32296,inst_32298);
var state_32343__$1 = state_32343;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32343__$1,(13),out,inst_32303);
} else {
if((state_val_32344 === (18))){
var inst_32309 = (state_32343[(7)]);
var inst_32318 = cljs.core.first(inst_32309);
var state_32343__$1 = state_32343;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32343__$1,(20),out,inst_32318);
} else {
if((state_val_32344 === (8))){
var inst_32297 = (state_32343[(9)]);
var inst_32298 = (state_32343[(10)]);
var inst_32300 = (inst_32298 < inst_32297);
var inst_32301 = inst_32300;
var state_32343__$1 = state_32343;
if(cljs.core.truth_(inst_32301)){
var statearr_32377_33234 = state_32343__$1;
(statearr_32377_33234[(1)] = (10));

} else {
var statearr_32378_33235 = state_32343__$1;
(statearr_32378_33235[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__30234__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30234__auto____0 = (function (){
var statearr_32379 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32379[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30234__auto__);

(statearr_32379[(1)] = (1));

return statearr_32379;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30234__auto____1 = (function (state_32343){
while(true){
var ret_value__30235__auto__ = (function (){try{while(true){
var result__30236__auto__ = switch__30233__auto__(state_32343);
if(cljs.core.keyword_identical_QMARK_(result__30236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30236__auto__;
}
break;
}
}catch (e32380){var ex__30237__auto__ = e32380;
var statearr_32381_33236 = state_32343;
(statearr_32381_33236[(2)] = ex__30237__auto__);


if(cljs.core.seq((state_32343[(4)]))){
var statearr_32382_33237 = state_32343;
(statearr_32382_33237[(1)] = cljs.core.first((state_32343[(4)])));

} else {
throw ex__30237__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33238 = state_32343;
state_32343 = G__33238;
continue;
} else {
return ret_value__30235__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30234__auto__ = function(state_32343){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30234__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30234__auto____1.call(this,state_32343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30234__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30234__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30234__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30234__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30234__auto__;
})()
})();
var state__30461__auto__ = (function (){var statearr_32383 = f__30460__auto__();
(statearr_32383[(6)] = c__30454__auto__);

return statearr_32383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30461__auto__);
}));

return c__30454__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32385 = arguments.length;
switch (G__32385) {
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
var G__32387 = arguments.length;
switch (G__32387) {
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
var G__32389 = arguments.length;
switch (G__32389) {
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
var c__30454__auto___33248 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30460__auto__ = (function (){var switch__30233__auto__ = (function (state_32413){
var state_val_32414 = (state_32413[(1)]);
if((state_val_32414 === (7))){
var inst_32408 = (state_32413[(2)]);
var state_32413__$1 = state_32413;
var statearr_32415_33250 = state_32413__$1;
(statearr_32415_33250[(2)] = inst_32408);

(statearr_32415_33250[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32414 === (1))){
var inst_32390 = null;
var state_32413__$1 = (function (){var statearr_32416 = state_32413;
(statearr_32416[(7)] = inst_32390);

return statearr_32416;
})();
var statearr_32417_33251 = state_32413__$1;
(statearr_32417_33251[(2)] = null);

(statearr_32417_33251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32414 === (4))){
var inst_32393 = (state_32413[(8)]);
var inst_32393__$1 = (state_32413[(2)]);
var inst_32394 = (inst_32393__$1 == null);
var inst_32395 = cljs.core.not(inst_32394);
var state_32413__$1 = (function (){var statearr_32418 = state_32413;
(statearr_32418[(8)] = inst_32393__$1);

return statearr_32418;
})();
if(inst_32395){
var statearr_32419_33252 = state_32413__$1;
(statearr_32419_33252[(1)] = (5));

} else {
var statearr_32420_33253 = state_32413__$1;
(statearr_32420_33253[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32414 === (6))){
var state_32413__$1 = state_32413;
var statearr_32421_33254 = state_32413__$1;
(statearr_32421_33254[(2)] = null);

(statearr_32421_33254[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32414 === (3))){
var inst_32410 = (state_32413[(2)]);
var inst_32411 = cljs.core.async.close_BANG_(out);
var state_32413__$1 = (function (){var statearr_32422 = state_32413;
(statearr_32422[(9)] = inst_32410);

return statearr_32422;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32413__$1,inst_32411);
} else {
if((state_val_32414 === (2))){
var state_32413__$1 = state_32413;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32413__$1,(4),ch);
} else {
if((state_val_32414 === (11))){
var inst_32393 = (state_32413[(8)]);
var inst_32402 = (state_32413[(2)]);
var inst_32390 = inst_32393;
var state_32413__$1 = (function (){var statearr_32423 = state_32413;
(statearr_32423[(7)] = inst_32390);

(statearr_32423[(10)] = inst_32402);

return statearr_32423;
})();
var statearr_32424_33255 = state_32413__$1;
(statearr_32424_33255[(2)] = null);

(statearr_32424_33255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32414 === (9))){
var inst_32393 = (state_32413[(8)]);
var state_32413__$1 = state_32413;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32413__$1,(11),out,inst_32393);
} else {
if((state_val_32414 === (5))){
var inst_32393 = (state_32413[(8)]);
var inst_32390 = (state_32413[(7)]);
var inst_32397 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32393,inst_32390);
var state_32413__$1 = state_32413;
if(inst_32397){
var statearr_32426_33256 = state_32413__$1;
(statearr_32426_33256[(1)] = (8));

} else {
var statearr_32427_33257 = state_32413__$1;
(statearr_32427_33257[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32414 === (10))){
var inst_32405 = (state_32413[(2)]);
var state_32413__$1 = state_32413;
var statearr_32428_33258 = state_32413__$1;
(statearr_32428_33258[(2)] = inst_32405);

(statearr_32428_33258[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32414 === (8))){
var inst_32390 = (state_32413[(7)]);
var tmp32425 = inst_32390;
var inst_32390__$1 = tmp32425;
var state_32413__$1 = (function (){var statearr_32429 = state_32413;
(statearr_32429[(7)] = inst_32390__$1);

return statearr_32429;
})();
var statearr_32430_33259 = state_32413__$1;
(statearr_32430_33259[(2)] = null);

(statearr_32430_33259[(1)] = (2));


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
var cljs$core$async$state_machine__30234__auto__ = null;
var cljs$core$async$state_machine__30234__auto____0 = (function (){
var statearr_32431 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32431[(0)] = cljs$core$async$state_machine__30234__auto__);

(statearr_32431[(1)] = (1));

return statearr_32431;
});
var cljs$core$async$state_machine__30234__auto____1 = (function (state_32413){
while(true){
var ret_value__30235__auto__ = (function (){try{while(true){
var result__30236__auto__ = switch__30233__auto__(state_32413);
if(cljs.core.keyword_identical_QMARK_(result__30236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30236__auto__;
}
break;
}
}catch (e32432){var ex__30237__auto__ = e32432;
var statearr_32433_33260 = state_32413;
(statearr_32433_33260[(2)] = ex__30237__auto__);


if(cljs.core.seq((state_32413[(4)]))){
var statearr_32434_33261 = state_32413;
(statearr_32434_33261[(1)] = cljs.core.first((state_32413[(4)])));

} else {
throw ex__30237__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33262 = state_32413;
state_32413 = G__33262;
continue;
} else {
return ret_value__30235__auto__;
}
break;
}
});
cljs$core$async$state_machine__30234__auto__ = function(state_32413){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30234__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30234__auto____1.call(this,state_32413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30234__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30234__auto____0;
cljs$core$async$state_machine__30234__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30234__auto____1;
return cljs$core$async$state_machine__30234__auto__;
})()
})();
var state__30461__auto__ = (function (){var statearr_32435 = f__30460__auto__();
(statearr_32435[(6)] = c__30454__auto___33248);

return statearr_32435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30461__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32437 = arguments.length;
switch (G__32437) {
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
var c__30454__auto___33264 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30460__auto__ = (function (){var switch__30233__auto__ = (function (state_32475){
var state_val_32476 = (state_32475[(1)]);
if((state_val_32476 === (7))){
var inst_32471 = (state_32475[(2)]);
var state_32475__$1 = state_32475;
var statearr_32477_33265 = state_32475__$1;
(statearr_32477_33265[(2)] = inst_32471);

(statearr_32477_33265[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32476 === (1))){
var inst_32438 = (new Array(n));
var inst_32439 = inst_32438;
var inst_32440 = (0);
var state_32475__$1 = (function (){var statearr_32478 = state_32475;
(statearr_32478[(7)] = inst_32440);

(statearr_32478[(8)] = inst_32439);

return statearr_32478;
})();
var statearr_32479_33266 = state_32475__$1;
(statearr_32479_33266[(2)] = null);

(statearr_32479_33266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32476 === (4))){
var inst_32443 = (state_32475[(9)]);
var inst_32443__$1 = (state_32475[(2)]);
var inst_32444 = (inst_32443__$1 == null);
var inst_32445 = cljs.core.not(inst_32444);
var state_32475__$1 = (function (){var statearr_32480 = state_32475;
(statearr_32480[(9)] = inst_32443__$1);

return statearr_32480;
})();
if(inst_32445){
var statearr_32481_33268 = state_32475__$1;
(statearr_32481_33268[(1)] = (5));

} else {
var statearr_32482_33269 = state_32475__$1;
(statearr_32482_33269[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32476 === (15))){
var inst_32465 = (state_32475[(2)]);
var state_32475__$1 = state_32475;
var statearr_32483_33270 = state_32475__$1;
(statearr_32483_33270[(2)] = inst_32465);

(statearr_32483_33270[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32476 === (13))){
var state_32475__$1 = state_32475;
var statearr_32484_33271 = state_32475__$1;
(statearr_32484_33271[(2)] = null);

(statearr_32484_33271[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32476 === (6))){
var inst_32440 = (state_32475[(7)]);
var inst_32461 = (inst_32440 > (0));
var state_32475__$1 = state_32475;
if(cljs.core.truth_(inst_32461)){
var statearr_32485_33272 = state_32475__$1;
(statearr_32485_33272[(1)] = (12));

} else {
var statearr_32486_33273 = state_32475__$1;
(statearr_32486_33273[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32476 === (3))){
var inst_32473 = (state_32475[(2)]);
var state_32475__$1 = state_32475;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32475__$1,inst_32473);
} else {
if((state_val_32476 === (12))){
var inst_32439 = (state_32475[(8)]);
var inst_32463 = cljs.core.vec(inst_32439);
var state_32475__$1 = state_32475;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32475__$1,(15),out,inst_32463);
} else {
if((state_val_32476 === (2))){
var state_32475__$1 = state_32475;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32475__$1,(4),ch);
} else {
if((state_val_32476 === (11))){
var inst_32455 = (state_32475[(2)]);
var inst_32456 = (new Array(n));
var inst_32439 = inst_32456;
var inst_32440 = (0);
var state_32475__$1 = (function (){var statearr_32487 = state_32475;
(statearr_32487[(7)] = inst_32440);

(statearr_32487[(8)] = inst_32439);

(statearr_32487[(10)] = inst_32455);

return statearr_32487;
})();
var statearr_32488_33274 = state_32475__$1;
(statearr_32488_33274[(2)] = null);

(statearr_32488_33274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32476 === (9))){
var inst_32439 = (state_32475[(8)]);
var inst_32453 = cljs.core.vec(inst_32439);
var state_32475__$1 = state_32475;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32475__$1,(11),out,inst_32453);
} else {
if((state_val_32476 === (5))){
var inst_32448 = (state_32475[(11)]);
var inst_32440 = (state_32475[(7)]);
var inst_32439 = (state_32475[(8)]);
var inst_32443 = (state_32475[(9)]);
var inst_32447 = (inst_32439[inst_32440] = inst_32443);
var inst_32448__$1 = (inst_32440 + (1));
var inst_32449 = (inst_32448__$1 < n);
var state_32475__$1 = (function (){var statearr_32489 = state_32475;
(statearr_32489[(11)] = inst_32448__$1);

(statearr_32489[(12)] = inst_32447);

return statearr_32489;
})();
if(cljs.core.truth_(inst_32449)){
var statearr_32490_33278 = state_32475__$1;
(statearr_32490_33278[(1)] = (8));

} else {
var statearr_32491_33279 = state_32475__$1;
(statearr_32491_33279[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32476 === (14))){
var inst_32468 = (state_32475[(2)]);
var inst_32469 = cljs.core.async.close_BANG_(out);
var state_32475__$1 = (function (){var statearr_32493 = state_32475;
(statearr_32493[(13)] = inst_32468);

return statearr_32493;
})();
var statearr_32494_33280 = state_32475__$1;
(statearr_32494_33280[(2)] = inst_32469);

(statearr_32494_33280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32476 === (10))){
var inst_32459 = (state_32475[(2)]);
var state_32475__$1 = state_32475;
var statearr_32495_33281 = state_32475__$1;
(statearr_32495_33281[(2)] = inst_32459);

(statearr_32495_33281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32476 === (8))){
var inst_32448 = (state_32475[(11)]);
var inst_32439 = (state_32475[(8)]);
var tmp32492 = inst_32439;
var inst_32439__$1 = tmp32492;
var inst_32440 = inst_32448;
var state_32475__$1 = (function (){var statearr_32496 = state_32475;
(statearr_32496[(7)] = inst_32440);

(statearr_32496[(8)] = inst_32439__$1);

return statearr_32496;
})();
var statearr_32497_33282 = state_32475__$1;
(statearr_32497_33282[(2)] = null);

(statearr_32497_33282[(1)] = (2));


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
var cljs$core$async$state_machine__30234__auto__ = null;
var cljs$core$async$state_machine__30234__auto____0 = (function (){
var statearr_32498 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32498[(0)] = cljs$core$async$state_machine__30234__auto__);

(statearr_32498[(1)] = (1));

return statearr_32498;
});
var cljs$core$async$state_machine__30234__auto____1 = (function (state_32475){
while(true){
var ret_value__30235__auto__ = (function (){try{while(true){
var result__30236__auto__ = switch__30233__auto__(state_32475);
if(cljs.core.keyword_identical_QMARK_(result__30236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30236__auto__;
}
break;
}
}catch (e32499){var ex__30237__auto__ = e32499;
var statearr_32500_33283 = state_32475;
(statearr_32500_33283[(2)] = ex__30237__auto__);


if(cljs.core.seq((state_32475[(4)]))){
var statearr_32501_33284 = state_32475;
(statearr_32501_33284[(1)] = cljs.core.first((state_32475[(4)])));

} else {
throw ex__30237__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33285 = state_32475;
state_32475 = G__33285;
continue;
} else {
return ret_value__30235__auto__;
}
break;
}
});
cljs$core$async$state_machine__30234__auto__ = function(state_32475){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30234__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30234__auto____1.call(this,state_32475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30234__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30234__auto____0;
cljs$core$async$state_machine__30234__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30234__auto____1;
return cljs$core$async$state_machine__30234__auto__;
})()
})();
var state__30461__auto__ = (function (){var statearr_32502 = f__30460__auto__();
(statearr_32502[(6)] = c__30454__auto___33264);

return statearr_32502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30461__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32504 = arguments.length;
switch (G__32504) {
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
var c__30454__auto___33287 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30460__auto__ = (function (){var switch__30233__auto__ = (function (state_32549){
var state_val_32550 = (state_32549[(1)]);
if((state_val_32550 === (7))){
var inst_32545 = (state_32549[(2)]);
var state_32549__$1 = state_32549;
var statearr_32551_33288 = state_32549__$1;
(statearr_32551_33288[(2)] = inst_32545);

(statearr_32551_33288[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32550 === (1))){
var inst_32505 = [];
var inst_32506 = inst_32505;
var inst_32507 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32549__$1 = (function (){var statearr_32552 = state_32549;
(statearr_32552[(7)] = inst_32506);

(statearr_32552[(8)] = inst_32507);

return statearr_32552;
})();
var statearr_32553_33289 = state_32549__$1;
(statearr_32553_33289[(2)] = null);

(statearr_32553_33289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32550 === (4))){
var inst_32510 = (state_32549[(9)]);
var inst_32510__$1 = (state_32549[(2)]);
var inst_32511 = (inst_32510__$1 == null);
var inst_32512 = cljs.core.not(inst_32511);
var state_32549__$1 = (function (){var statearr_32554 = state_32549;
(statearr_32554[(9)] = inst_32510__$1);

return statearr_32554;
})();
if(inst_32512){
var statearr_32555_33290 = state_32549__$1;
(statearr_32555_33290[(1)] = (5));

} else {
var statearr_32556_33291 = state_32549__$1;
(statearr_32556_33291[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32550 === (15))){
var inst_32506 = (state_32549[(7)]);
var inst_32537 = cljs.core.vec(inst_32506);
var state_32549__$1 = state_32549;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32549__$1,(18),out,inst_32537);
} else {
if((state_val_32550 === (13))){
var inst_32532 = (state_32549[(2)]);
var state_32549__$1 = state_32549;
var statearr_32557_33292 = state_32549__$1;
(statearr_32557_33292[(2)] = inst_32532);

(statearr_32557_33292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32550 === (6))){
var inst_32506 = (state_32549[(7)]);
var inst_32534 = inst_32506.length;
var inst_32535 = (inst_32534 > (0));
var state_32549__$1 = state_32549;
if(cljs.core.truth_(inst_32535)){
var statearr_32558_33293 = state_32549__$1;
(statearr_32558_33293[(1)] = (15));

} else {
var statearr_32559_33294 = state_32549__$1;
(statearr_32559_33294[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32550 === (17))){
var inst_32542 = (state_32549[(2)]);
var inst_32543 = cljs.core.async.close_BANG_(out);
var state_32549__$1 = (function (){var statearr_32560 = state_32549;
(statearr_32560[(10)] = inst_32542);

return statearr_32560;
})();
var statearr_32561_33295 = state_32549__$1;
(statearr_32561_33295[(2)] = inst_32543);

(statearr_32561_33295[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32550 === (3))){
var inst_32547 = (state_32549[(2)]);
var state_32549__$1 = state_32549;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32549__$1,inst_32547);
} else {
if((state_val_32550 === (12))){
var inst_32506 = (state_32549[(7)]);
var inst_32525 = cljs.core.vec(inst_32506);
var state_32549__$1 = state_32549;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32549__$1,(14),out,inst_32525);
} else {
if((state_val_32550 === (2))){
var state_32549__$1 = state_32549;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32549__$1,(4),ch);
} else {
if((state_val_32550 === (11))){
var inst_32514 = (state_32549[(11)]);
var inst_32506 = (state_32549[(7)]);
var inst_32510 = (state_32549[(9)]);
var inst_32522 = inst_32506.push(inst_32510);
var tmp32562 = inst_32506;
var inst_32506__$1 = tmp32562;
var inst_32507 = inst_32514;
var state_32549__$1 = (function (){var statearr_32563 = state_32549;
(statearr_32563[(12)] = inst_32522);

(statearr_32563[(7)] = inst_32506__$1);

(statearr_32563[(8)] = inst_32507);

return statearr_32563;
})();
var statearr_32564_33296 = state_32549__$1;
(statearr_32564_33296[(2)] = null);

(statearr_32564_33296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32550 === (9))){
var inst_32507 = (state_32549[(8)]);
var inst_32518 = cljs.core.keyword_identical_QMARK_(inst_32507,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_32549__$1 = state_32549;
var statearr_32565_33297 = state_32549__$1;
(statearr_32565_33297[(2)] = inst_32518);

(statearr_32565_33297[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32550 === (5))){
var inst_32515 = (state_32549[(13)]);
var inst_32514 = (state_32549[(11)]);
var inst_32507 = (state_32549[(8)]);
var inst_32510 = (state_32549[(9)]);
var inst_32514__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32510) : f.call(null,inst_32510));
var inst_32515__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32514__$1,inst_32507);
var state_32549__$1 = (function (){var statearr_32566 = state_32549;
(statearr_32566[(13)] = inst_32515__$1);

(statearr_32566[(11)] = inst_32514__$1);

return statearr_32566;
})();
if(inst_32515__$1){
var statearr_32567_33298 = state_32549__$1;
(statearr_32567_33298[(1)] = (8));

} else {
var statearr_32568_33299 = state_32549__$1;
(statearr_32568_33299[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32550 === (14))){
var inst_32514 = (state_32549[(11)]);
var inst_32510 = (state_32549[(9)]);
var inst_32527 = (state_32549[(2)]);
var inst_32528 = [];
var inst_32529 = inst_32528.push(inst_32510);
var inst_32506 = inst_32528;
var inst_32507 = inst_32514;
var state_32549__$1 = (function (){var statearr_32569 = state_32549;
(statearr_32569[(14)] = inst_32527);

(statearr_32569[(7)] = inst_32506);

(statearr_32569[(8)] = inst_32507);

(statearr_32569[(15)] = inst_32529);

return statearr_32569;
})();
var statearr_32570_33300 = state_32549__$1;
(statearr_32570_33300[(2)] = null);

(statearr_32570_33300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32550 === (16))){
var state_32549__$1 = state_32549;
var statearr_32571_33301 = state_32549__$1;
(statearr_32571_33301[(2)] = null);

(statearr_32571_33301[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32550 === (10))){
var inst_32520 = (state_32549[(2)]);
var state_32549__$1 = state_32549;
if(cljs.core.truth_(inst_32520)){
var statearr_32572_33302 = state_32549__$1;
(statearr_32572_33302[(1)] = (11));

} else {
var statearr_32573_33303 = state_32549__$1;
(statearr_32573_33303[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32550 === (18))){
var inst_32539 = (state_32549[(2)]);
var state_32549__$1 = state_32549;
var statearr_32574_33304 = state_32549__$1;
(statearr_32574_33304[(2)] = inst_32539);

(statearr_32574_33304[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32550 === (8))){
var inst_32515 = (state_32549[(13)]);
var state_32549__$1 = state_32549;
var statearr_32575_33305 = state_32549__$1;
(statearr_32575_33305[(2)] = inst_32515);

(statearr_32575_33305[(1)] = (10));


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
var cljs$core$async$state_machine__30234__auto__ = null;
var cljs$core$async$state_machine__30234__auto____0 = (function (){
var statearr_32576 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32576[(0)] = cljs$core$async$state_machine__30234__auto__);

(statearr_32576[(1)] = (1));

return statearr_32576;
});
var cljs$core$async$state_machine__30234__auto____1 = (function (state_32549){
while(true){
var ret_value__30235__auto__ = (function (){try{while(true){
var result__30236__auto__ = switch__30233__auto__(state_32549);
if(cljs.core.keyword_identical_QMARK_(result__30236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30236__auto__;
}
break;
}
}catch (e32577){var ex__30237__auto__ = e32577;
var statearr_32578_33306 = state_32549;
(statearr_32578_33306[(2)] = ex__30237__auto__);


if(cljs.core.seq((state_32549[(4)]))){
var statearr_32579_33307 = state_32549;
(statearr_32579_33307[(1)] = cljs.core.first((state_32549[(4)])));

} else {
throw ex__30237__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33308 = state_32549;
state_32549 = G__33308;
continue;
} else {
return ret_value__30235__auto__;
}
break;
}
});
cljs$core$async$state_machine__30234__auto__ = function(state_32549){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30234__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30234__auto____1.call(this,state_32549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30234__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30234__auto____0;
cljs$core$async$state_machine__30234__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30234__auto____1;
return cljs$core$async$state_machine__30234__auto__;
})()
})();
var state__30461__auto__ = (function (){var statearr_32580 = f__30460__auto__();
(statearr_32580[(6)] = c__30454__auto___33287);

return statearr_32580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30461__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
