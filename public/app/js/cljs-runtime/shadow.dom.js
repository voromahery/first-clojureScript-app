goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_33393 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_33393(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_33394 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_33394(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__32643 = coll;
var G__32644 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__32643,G__32644) : shadow.dom.lazy_native_coll_seq.call(null,G__32643,G__32644));
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
var or__4253__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
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

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.dom/NativeColl");
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
var G__32685 = arguments.length;
switch (G__32685) {
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
var G__32703 = arguments.length;
switch (G__32703) {
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
var G__32709 = arguments.length;
switch (G__32709) {
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
var G__32742 = arguments.length;
switch (G__32742) {
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
var G__32763 = arguments.length;
switch (G__32763) {
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
var G__32776 = arguments.length;
switch (G__32776) {
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

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e32783){if((e32783 instanceof Object)){
var e = e32783;
return console.log("didnt support attachEvent",el,e);
} else {
throw e32783;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__32784 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__32785 = null;
var count__32786 = (0);
var i__32787 = (0);
while(true){
if((i__32787 < count__32786)){
var el = chunk__32785.cljs$core$IIndexed$_nth$arity$2(null,i__32787);
var handler_33401__$1 = ((function (seq__32784,chunk__32785,count__32786,i__32787,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32784,chunk__32785,count__32786,i__32787,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33401__$1);


var G__33402 = seq__32784;
var G__33403 = chunk__32785;
var G__33404 = count__32786;
var G__33405 = (i__32787 + (1));
seq__32784 = G__33402;
chunk__32785 = G__33403;
count__32786 = G__33404;
i__32787 = G__33405;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32784);
if(temp__5753__auto__){
var seq__32784__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32784__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__32784__$1);
var G__33406 = cljs.core.chunk_rest(seq__32784__$1);
var G__33407 = c__4679__auto__;
var G__33408 = cljs.core.count(c__4679__auto__);
var G__33409 = (0);
seq__32784 = G__33406;
chunk__32785 = G__33407;
count__32786 = G__33408;
i__32787 = G__33409;
continue;
} else {
var el = cljs.core.first(seq__32784__$1);
var handler_33410__$1 = ((function (seq__32784,chunk__32785,count__32786,i__32787,el,seq__32784__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32784,chunk__32785,count__32786,i__32787,el,seq__32784__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33410__$1);


var G__33411 = cljs.core.next(seq__32784__$1);
var G__33412 = null;
var G__33413 = (0);
var G__33414 = (0);
seq__32784 = G__33411;
chunk__32785 = G__33412;
count__32786 = G__33413;
i__32787 = G__33414;
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
var G__32794 = arguments.length;
switch (G__32794) {
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
var seq__32797 = cljs.core.seq(events);
var chunk__32798 = null;
var count__32799 = (0);
var i__32800 = (0);
while(true){
if((i__32800 < count__32799)){
var vec__32812 = chunk__32798.cljs$core$IIndexed$_nth$arity$2(null,i__32800);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32812,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32812,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33416 = seq__32797;
var G__33417 = chunk__32798;
var G__33418 = count__32799;
var G__33419 = (i__32800 + (1));
seq__32797 = G__33416;
chunk__32798 = G__33417;
count__32799 = G__33418;
i__32800 = G__33419;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32797);
if(temp__5753__auto__){
var seq__32797__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32797__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__32797__$1);
var G__33420 = cljs.core.chunk_rest(seq__32797__$1);
var G__33421 = c__4679__auto__;
var G__33422 = cljs.core.count(c__4679__auto__);
var G__33423 = (0);
seq__32797 = G__33420;
chunk__32798 = G__33421;
count__32799 = G__33422;
i__32800 = G__33423;
continue;
} else {
var vec__32816 = cljs.core.first(seq__32797__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32816,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32816,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33424 = cljs.core.next(seq__32797__$1);
var G__33425 = null;
var G__33426 = (0);
var G__33427 = (0);
seq__32797 = G__33424;
chunk__32798 = G__33425;
count__32799 = G__33426;
i__32800 = G__33427;
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
var seq__32820 = cljs.core.seq(styles);
var chunk__32821 = null;
var count__32822 = (0);
var i__32823 = (0);
while(true){
if((i__32823 < count__32822)){
var vec__32838 = chunk__32821.cljs$core$IIndexed$_nth$arity$2(null,i__32823);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32838,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32838,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33428 = seq__32820;
var G__33429 = chunk__32821;
var G__33430 = count__32822;
var G__33431 = (i__32823 + (1));
seq__32820 = G__33428;
chunk__32821 = G__33429;
count__32822 = G__33430;
i__32823 = G__33431;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32820);
if(temp__5753__auto__){
var seq__32820__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32820__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__32820__$1);
var G__33432 = cljs.core.chunk_rest(seq__32820__$1);
var G__33433 = c__4679__auto__;
var G__33434 = cljs.core.count(c__4679__auto__);
var G__33435 = (0);
seq__32820 = G__33432;
chunk__32821 = G__33433;
count__32822 = G__33434;
i__32823 = G__33435;
continue;
} else {
var vec__32845 = cljs.core.first(seq__32820__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32845,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32845,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33436 = cljs.core.next(seq__32820__$1);
var G__33437 = null;
var G__33438 = (0);
var G__33439 = (0);
seq__32820 = G__33436;
chunk__32821 = G__33437;
count__32822 = G__33438;
i__32823 = G__33439;
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
var G__32855_33440 = key;
var G__32855_33441__$1 = (((G__32855_33440 instanceof cljs.core.Keyword))?G__32855_33440.fqn:null);
switch (G__32855_33441__$1) {
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
var ks_33443 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_33443,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_33443,"aria-");
}
})())){
el.setAttribute(ks_33443,value);
} else {
(el[ks_33443] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__32860){
var map__32862 = p__32860;
var map__32862__$1 = cljs.core.__destructure_map(map__32862);
var props = map__32862__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32862__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__32863 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32863,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32863,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32863,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__32870 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__32870,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__32870;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__32872 = arguments.length;
switch (G__32872) {
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
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
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
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__32876){
var vec__32877 = p__32876;
var seq__32878 = cljs.core.seq(vec__32877);
var first__32879 = cljs.core.first(seq__32878);
var seq__32878__$1 = cljs.core.next(seq__32878);
var nn = first__32879;
var first__32879__$1 = cljs.core.first(seq__32878__$1);
var seq__32878__$2 = cljs.core.next(seq__32878__$1);
var np = first__32879__$1;
var nc = seq__32878__$2;
var node = vec__32877;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32884 = nn;
var G__32885 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32884,G__32885) : create_fn.call(null,G__32884,G__32885));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32886 = nn;
var G__32887 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32886,G__32887) : create_fn.call(null,G__32886,G__32887));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__32888 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32888,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32888,(1),null);
var seq__32891_33445 = cljs.core.seq(node_children);
var chunk__32892_33446 = null;
var count__32893_33447 = (0);
var i__32894_33448 = (0);
while(true){
if((i__32894_33448 < count__32893_33447)){
var child_struct_33449 = chunk__32892_33446.cljs$core$IIndexed$_nth$arity$2(null,i__32894_33448);
var children_33450 = shadow.dom.dom_node(child_struct_33449);
if(cljs.core.seq_QMARK_(children_33450)){
var seq__32924_33451 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33450));
var chunk__32926_33452 = null;
var count__32927_33453 = (0);
var i__32928_33454 = (0);
while(true){
if((i__32928_33454 < count__32927_33453)){
var child_33456 = chunk__32926_33452.cljs$core$IIndexed$_nth$arity$2(null,i__32928_33454);
if(cljs.core.truth_(child_33456)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33456);


var G__33457 = seq__32924_33451;
var G__33458 = chunk__32926_33452;
var G__33459 = count__32927_33453;
var G__33460 = (i__32928_33454 + (1));
seq__32924_33451 = G__33457;
chunk__32926_33452 = G__33458;
count__32927_33453 = G__33459;
i__32928_33454 = G__33460;
continue;
} else {
var G__33461 = seq__32924_33451;
var G__33462 = chunk__32926_33452;
var G__33463 = count__32927_33453;
var G__33464 = (i__32928_33454 + (1));
seq__32924_33451 = G__33461;
chunk__32926_33452 = G__33462;
count__32927_33453 = G__33463;
i__32928_33454 = G__33464;
continue;
}
} else {
var temp__5753__auto___33465 = cljs.core.seq(seq__32924_33451);
if(temp__5753__auto___33465){
var seq__32924_33466__$1 = temp__5753__auto___33465;
if(cljs.core.chunked_seq_QMARK_(seq__32924_33466__$1)){
var c__4679__auto___33467 = cljs.core.chunk_first(seq__32924_33466__$1);
var G__33468 = cljs.core.chunk_rest(seq__32924_33466__$1);
var G__33469 = c__4679__auto___33467;
var G__33470 = cljs.core.count(c__4679__auto___33467);
var G__33471 = (0);
seq__32924_33451 = G__33468;
chunk__32926_33452 = G__33469;
count__32927_33453 = G__33470;
i__32928_33454 = G__33471;
continue;
} else {
var child_33472 = cljs.core.first(seq__32924_33466__$1);
if(cljs.core.truth_(child_33472)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33472);


var G__33473 = cljs.core.next(seq__32924_33466__$1);
var G__33474 = null;
var G__33475 = (0);
var G__33476 = (0);
seq__32924_33451 = G__33473;
chunk__32926_33452 = G__33474;
count__32927_33453 = G__33475;
i__32928_33454 = G__33476;
continue;
} else {
var G__33478 = cljs.core.next(seq__32924_33466__$1);
var G__33479 = null;
var G__33480 = (0);
var G__33481 = (0);
seq__32924_33451 = G__33478;
chunk__32926_33452 = G__33479;
count__32927_33453 = G__33480;
i__32928_33454 = G__33481;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33450);
}


var G__33482 = seq__32891_33445;
var G__33483 = chunk__32892_33446;
var G__33484 = count__32893_33447;
var G__33485 = (i__32894_33448 + (1));
seq__32891_33445 = G__33482;
chunk__32892_33446 = G__33483;
count__32893_33447 = G__33484;
i__32894_33448 = G__33485;
continue;
} else {
var temp__5753__auto___33486 = cljs.core.seq(seq__32891_33445);
if(temp__5753__auto___33486){
var seq__32891_33487__$1 = temp__5753__auto___33486;
if(cljs.core.chunked_seq_QMARK_(seq__32891_33487__$1)){
var c__4679__auto___33488 = cljs.core.chunk_first(seq__32891_33487__$1);
var G__33489 = cljs.core.chunk_rest(seq__32891_33487__$1);
var G__33490 = c__4679__auto___33488;
var G__33491 = cljs.core.count(c__4679__auto___33488);
var G__33492 = (0);
seq__32891_33445 = G__33489;
chunk__32892_33446 = G__33490;
count__32893_33447 = G__33491;
i__32894_33448 = G__33492;
continue;
} else {
var child_struct_33493 = cljs.core.first(seq__32891_33487__$1);
var children_33494 = shadow.dom.dom_node(child_struct_33493);
if(cljs.core.seq_QMARK_(children_33494)){
var seq__32940_33495 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33494));
var chunk__32942_33496 = null;
var count__32943_33497 = (0);
var i__32944_33498 = (0);
while(true){
if((i__32944_33498 < count__32943_33497)){
var child_33499 = chunk__32942_33496.cljs$core$IIndexed$_nth$arity$2(null,i__32944_33498);
if(cljs.core.truth_(child_33499)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33499);


var G__33500 = seq__32940_33495;
var G__33501 = chunk__32942_33496;
var G__33502 = count__32943_33497;
var G__33503 = (i__32944_33498 + (1));
seq__32940_33495 = G__33500;
chunk__32942_33496 = G__33501;
count__32943_33497 = G__33502;
i__32944_33498 = G__33503;
continue;
} else {
var G__33504 = seq__32940_33495;
var G__33505 = chunk__32942_33496;
var G__33506 = count__32943_33497;
var G__33507 = (i__32944_33498 + (1));
seq__32940_33495 = G__33504;
chunk__32942_33496 = G__33505;
count__32943_33497 = G__33506;
i__32944_33498 = G__33507;
continue;
}
} else {
var temp__5753__auto___33508__$1 = cljs.core.seq(seq__32940_33495);
if(temp__5753__auto___33508__$1){
var seq__32940_33509__$1 = temp__5753__auto___33508__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32940_33509__$1)){
var c__4679__auto___33510 = cljs.core.chunk_first(seq__32940_33509__$1);
var G__33511 = cljs.core.chunk_rest(seq__32940_33509__$1);
var G__33512 = c__4679__auto___33510;
var G__33513 = cljs.core.count(c__4679__auto___33510);
var G__33514 = (0);
seq__32940_33495 = G__33511;
chunk__32942_33496 = G__33512;
count__32943_33497 = G__33513;
i__32944_33498 = G__33514;
continue;
} else {
var child_33515 = cljs.core.first(seq__32940_33509__$1);
if(cljs.core.truth_(child_33515)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33515);


var G__33516 = cljs.core.next(seq__32940_33509__$1);
var G__33517 = null;
var G__33518 = (0);
var G__33519 = (0);
seq__32940_33495 = G__33516;
chunk__32942_33496 = G__33517;
count__32943_33497 = G__33518;
i__32944_33498 = G__33519;
continue;
} else {
var G__33520 = cljs.core.next(seq__32940_33509__$1);
var G__33521 = null;
var G__33522 = (0);
var G__33523 = (0);
seq__32940_33495 = G__33520;
chunk__32942_33496 = G__33521;
count__32943_33497 = G__33522;
i__32944_33498 = G__33523;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33494);
}


var G__33524 = cljs.core.next(seq__32891_33487__$1);
var G__33525 = null;
var G__33526 = (0);
var G__33527 = (0);
seq__32891_33445 = G__33524;
chunk__32892_33446 = G__33525;
count__32893_33447 = G__33526;
i__32894_33448 = G__33527;
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
var seq__32978 = cljs.core.seq(node);
var chunk__32979 = null;
var count__32980 = (0);
var i__32981 = (0);
while(true){
if((i__32981 < count__32980)){
var n = chunk__32979.cljs$core$IIndexed$_nth$arity$2(null,i__32981);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33528 = seq__32978;
var G__33529 = chunk__32979;
var G__33530 = count__32980;
var G__33531 = (i__32981 + (1));
seq__32978 = G__33528;
chunk__32979 = G__33529;
count__32980 = G__33530;
i__32981 = G__33531;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32978);
if(temp__5753__auto__){
var seq__32978__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32978__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__32978__$1);
var G__33532 = cljs.core.chunk_rest(seq__32978__$1);
var G__33533 = c__4679__auto__;
var G__33534 = cljs.core.count(c__4679__auto__);
var G__33535 = (0);
seq__32978 = G__33532;
chunk__32979 = G__33533;
count__32980 = G__33534;
i__32981 = G__33535;
continue;
} else {
var n = cljs.core.first(seq__32978__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33536 = cljs.core.next(seq__32978__$1);
var G__33537 = null;
var G__33538 = (0);
var G__33539 = (0);
seq__32978 = G__33536;
chunk__32979 = G__33537;
count__32980 = G__33538;
i__32981 = G__33539;
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
var G__32988 = arguments.length;
switch (G__32988) {
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
var G__32990 = arguments.length;
switch (G__32990) {
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
var G__33008 = arguments.length;
switch (G__33008) {
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
var or__4253__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
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
var args__4870__auto__ = [];
var len__4864__auto___33543 = arguments.length;
var i__4865__auto___33544 = (0);
while(true){
if((i__4865__auto___33544 < len__4864__auto___33543)){
args__4870__auto__.push((arguments[i__4865__auto___33544]));

var G__33545 = (i__4865__auto___33544 + (1));
i__4865__auto___33544 = G__33545;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__33031_33546 = cljs.core.seq(nodes);
var chunk__33032_33547 = null;
var count__33033_33548 = (0);
var i__33034_33549 = (0);
while(true){
if((i__33034_33549 < count__33033_33548)){
var node_33550 = chunk__33032_33547.cljs$core$IIndexed$_nth$arity$2(null,i__33034_33549);
fragment.appendChild(shadow.dom._to_dom(node_33550));


var G__33551 = seq__33031_33546;
var G__33552 = chunk__33032_33547;
var G__33553 = count__33033_33548;
var G__33554 = (i__33034_33549 + (1));
seq__33031_33546 = G__33551;
chunk__33032_33547 = G__33552;
count__33033_33548 = G__33553;
i__33034_33549 = G__33554;
continue;
} else {
var temp__5753__auto___33555 = cljs.core.seq(seq__33031_33546);
if(temp__5753__auto___33555){
var seq__33031_33556__$1 = temp__5753__auto___33555;
if(cljs.core.chunked_seq_QMARK_(seq__33031_33556__$1)){
var c__4679__auto___33557 = cljs.core.chunk_first(seq__33031_33556__$1);
var G__33558 = cljs.core.chunk_rest(seq__33031_33556__$1);
var G__33559 = c__4679__auto___33557;
var G__33560 = cljs.core.count(c__4679__auto___33557);
var G__33561 = (0);
seq__33031_33546 = G__33558;
chunk__33032_33547 = G__33559;
count__33033_33548 = G__33560;
i__33034_33549 = G__33561;
continue;
} else {
var node_33562 = cljs.core.first(seq__33031_33556__$1);
fragment.appendChild(shadow.dom._to_dom(node_33562));


var G__33563 = cljs.core.next(seq__33031_33556__$1);
var G__33564 = null;
var G__33565 = (0);
var G__33566 = (0);
seq__33031_33546 = G__33563;
chunk__33032_33547 = G__33564;
count__33033_33548 = G__33565;
i__33034_33549 = G__33566;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq33026){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33026));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33037_33567 = cljs.core.seq(scripts);
var chunk__33038_33568 = null;
var count__33039_33569 = (0);
var i__33040_33570 = (0);
while(true){
if((i__33040_33570 < count__33039_33569)){
var vec__33063_33571 = chunk__33038_33568.cljs$core$IIndexed$_nth$arity$2(null,i__33040_33570);
var script_tag_33572 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33063_33571,(0),null);
var script_body_33573 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33063_33571,(1),null);
eval(script_body_33573);


var G__33574 = seq__33037_33567;
var G__33575 = chunk__33038_33568;
var G__33576 = count__33039_33569;
var G__33577 = (i__33040_33570 + (1));
seq__33037_33567 = G__33574;
chunk__33038_33568 = G__33575;
count__33039_33569 = G__33576;
i__33040_33570 = G__33577;
continue;
} else {
var temp__5753__auto___33578 = cljs.core.seq(seq__33037_33567);
if(temp__5753__auto___33578){
var seq__33037_33580__$1 = temp__5753__auto___33578;
if(cljs.core.chunked_seq_QMARK_(seq__33037_33580__$1)){
var c__4679__auto___33581 = cljs.core.chunk_first(seq__33037_33580__$1);
var G__33582 = cljs.core.chunk_rest(seq__33037_33580__$1);
var G__33583 = c__4679__auto___33581;
var G__33584 = cljs.core.count(c__4679__auto___33581);
var G__33585 = (0);
seq__33037_33567 = G__33582;
chunk__33038_33568 = G__33583;
count__33039_33569 = G__33584;
i__33040_33570 = G__33585;
continue;
} else {
var vec__33068_33586 = cljs.core.first(seq__33037_33580__$1);
var script_tag_33587 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33068_33586,(0),null);
var script_body_33588 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33068_33586,(1),null);
eval(script_body_33588);


var G__33589 = cljs.core.next(seq__33037_33580__$1);
var G__33590 = null;
var G__33591 = (0);
var G__33592 = (0);
seq__33037_33567 = G__33589;
chunk__33038_33568 = G__33590;
count__33039_33569 = G__33591;
i__33040_33570 = G__33592;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__33071){
var vec__33072 = p__33071;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33072,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33072,(1),null);
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
var G__33087 = arguments.length;
switch (G__33087) {
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
var seq__33147 = cljs.core.seq(style_keys);
var chunk__33148 = null;
var count__33149 = (0);
var i__33150 = (0);
while(true){
if((i__33150 < count__33149)){
var it = chunk__33148.cljs$core$IIndexed$_nth$arity$2(null,i__33150);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33595 = seq__33147;
var G__33596 = chunk__33148;
var G__33597 = count__33149;
var G__33598 = (i__33150 + (1));
seq__33147 = G__33595;
chunk__33148 = G__33596;
count__33149 = G__33597;
i__33150 = G__33598;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33147);
if(temp__5753__auto__){
var seq__33147__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33147__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__33147__$1);
var G__33599 = cljs.core.chunk_rest(seq__33147__$1);
var G__33600 = c__4679__auto__;
var G__33601 = cljs.core.count(c__4679__auto__);
var G__33602 = (0);
seq__33147 = G__33599;
chunk__33148 = G__33600;
count__33149 = G__33601;
i__33150 = G__33602;
continue;
} else {
var it = cljs.core.first(seq__33147__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33603 = cljs.core.next(seq__33147__$1);
var G__33604 = null;
var G__33605 = (0);
var G__33606 = (0);
seq__33147 = G__33603;
chunk__33148 = G__33604;
count__33149 = G__33605;
i__33150 = G__33606;
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
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k33162,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__33177 = k33162;
var G__33177__$1 = (((G__33177 instanceof cljs.core.Keyword))?G__33177.fqn:null);
switch (G__33177__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33162,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__33193){
var vec__33194 = p__33193;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33194,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33194,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33161){
var self__ = this;
var G__33161__$1 = this;
return (new cljs.core.RecordIter((0),G__33161__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33163,other33164){
var self__ = this;
var this33163__$1 = this;
return (((!((other33164 == null)))) && ((((this33163__$1.constructor === other33164.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33163__$1.x,other33164.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33163__$1.y,other33164.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33163__$1.__extmap,other33164.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k33162){
var self__ = this;
var this__4509__auto____$1 = this;
var G__33221 = k33162;
var G__33221__$1 = (((G__33221 instanceof cljs.core.Keyword))?G__33221.fqn:null);
switch (G__33221__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k33162);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__33161){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__33223 = cljs.core.keyword_identical_QMARK_;
var expr__33224 = k__4511__auto__;
if(cljs.core.truth_((pred__33223.cljs$core$IFn$_invoke$arity$2 ? pred__33223.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__33224) : pred__33223.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__33224)))){
return (new shadow.dom.Coordinate(G__33161,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33223.cljs$core$IFn$_invoke$arity$2 ? pred__33223.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__33224) : pred__33223.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__33224)))){
return (new shadow.dom.Coordinate(self__.x,G__33161,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__33161),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__33161){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33161,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Coordinate");
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33167){
var extmap__4542__auto__ = (function (){var G__33239 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33167,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33167)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33239);
} else {
return G__33239;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33167),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33167),null,cljs.core.not_empty(extmap__4542__auto__),null));
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
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k33243,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__33249 = k33243;
var G__33249__$1 = (((G__33249 instanceof cljs.core.Keyword))?G__33249.fqn:null);
switch (G__33249__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33243,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__33267){
var vec__33275 = p__33267;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33275,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33275,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Size{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33242){
var self__ = this;
var G__33242__$1 = this;
return (new cljs.core.RecordIter((0),G__33242__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33244,other33245){
var self__ = this;
var this33244__$1 = this;
return (((!((other33245 == null)))) && ((((this33244__$1.constructor === other33245.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33244__$1.w,other33245.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33244__$1.h,other33245.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33244__$1.__extmap,other33245.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k33243){
var self__ = this;
var this__4509__auto____$1 = this;
var G__33309 = k33243;
var G__33309__$1 = (((G__33309 instanceof cljs.core.Keyword))?G__33309.fqn:null);
switch (G__33309__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k33243);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__33242){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__33310 = cljs.core.keyword_identical_QMARK_;
var expr__33311 = k__4511__auto__;
if(cljs.core.truth_((pred__33310.cljs$core$IFn$_invoke$arity$2 ? pred__33310.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__33311) : pred__33310.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__33311)))){
return (new shadow.dom.Size(G__33242,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33310.cljs$core$IFn$_invoke$arity$2 ? pred__33310.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__33311) : pred__33310.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__33311)))){
return (new shadow.dom.Size(self__.w,G__33242,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__33242),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__33242){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33242,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Size");
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33247){
var extmap__4542__auto__ = (function (){var G__33313 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33247,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33247)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33313);
} else {
return G__33313;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33247),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33247),null,cljs.core.not_empty(extmap__4542__auto__),null));
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
var a__4738__auto__ = opts;
var l__4739__auto__ = a__4738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4739__auto__)){
var G__33615 = (i + (1));
var G__33616 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__33615;
ret = G__33616;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33318){
var vec__33319 = p__33318;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33319,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33319,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33323 = arguments.length;
switch (G__33323) {
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
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
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
var G__33619 = ps;
var G__33620 = (i + (1));
el__$1 = G__33619;
i = G__33620;
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
var vec__33324 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33324,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33324,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33324,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33327_33621 = cljs.core.seq(props);
var chunk__33328_33622 = null;
var count__33329_33623 = (0);
var i__33330_33624 = (0);
while(true){
if((i__33330_33624 < count__33329_33623)){
var vec__33337_33625 = chunk__33328_33622.cljs$core$IIndexed$_nth$arity$2(null,i__33330_33624);
var k_33626 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33337_33625,(0),null);
var v_33627 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33337_33625,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_33626);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33626),v_33627);


var G__33628 = seq__33327_33621;
var G__33629 = chunk__33328_33622;
var G__33630 = count__33329_33623;
var G__33631 = (i__33330_33624 + (1));
seq__33327_33621 = G__33628;
chunk__33328_33622 = G__33629;
count__33329_33623 = G__33630;
i__33330_33624 = G__33631;
continue;
} else {
var temp__5753__auto___33632 = cljs.core.seq(seq__33327_33621);
if(temp__5753__auto___33632){
var seq__33327_33633__$1 = temp__5753__auto___33632;
if(cljs.core.chunked_seq_QMARK_(seq__33327_33633__$1)){
var c__4679__auto___33634 = cljs.core.chunk_first(seq__33327_33633__$1);
var G__33635 = cljs.core.chunk_rest(seq__33327_33633__$1);
var G__33636 = c__4679__auto___33634;
var G__33637 = cljs.core.count(c__4679__auto___33634);
var G__33638 = (0);
seq__33327_33621 = G__33635;
chunk__33328_33622 = G__33636;
count__33329_33623 = G__33637;
i__33330_33624 = G__33638;
continue;
} else {
var vec__33340_33639 = cljs.core.first(seq__33327_33633__$1);
var k_33640 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33340_33639,(0),null);
var v_33641 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33340_33639,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_33640);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33640),v_33641);


var G__33642 = cljs.core.next(seq__33327_33633__$1);
var G__33643 = null;
var G__33644 = (0);
var G__33645 = (0);
seq__33327_33621 = G__33642;
chunk__33328_33622 = G__33643;
count__33329_33623 = G__33644;
i__33330_33624 = G__33645;
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
var vec__33344 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33344,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33344,(1),null);
var seq__33347_33646 = cljs.core.seq(node_children);
var chunk__33349_33647 = null;
var count__33350_33648 = (0);
var i__33351_33649 = (0);
while(true){
if((i__33351_33649 < count__33350_33648)){
var child_struct_33650 = chunk__33349_33647.cljs$core$IIndexed$_nth$arity$2(null,i__33351_33649);
if((!((child_struct_33650 == null)))){
if(typeof child_struct_33650 === 'string'){
var text_33651 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33651),child_struct_33650].join(''));
} else {
var children_33652 = shadow.dom.svg_node(child_struct_33650);
if(cljs.core.seq_QMARK_(children_33652)){
var seq__33365_33653 = cljs.core.seq(children_33652);
var chunk__33367_33654 = null;
var count__33368_33655 = (0);
var i__33369_33656 = (0);
while(true){
if((i__33369_33656 < count__33368_33655)){
var child_33657 = chunk__33367_33654.cljs$core$IIndexed$_nth$arity$2(null,i__33369_33656);
if(cljs.core.truth_(child_33657)){
node.appendChild(child_33657);


var G__33658 = seq__33365_33653;
var G__33659 = chunk__33367_33654;
var G__33660 = count__33368_33655;
var G__33661 = (i__33369_33656 + (1));
seq__33365_33653 = G__33658;
chunk__33367_33654 = G__33659;
count__33368_33655 = G__33660;
i__33369_33656 = G__33661;
continue;
} else {
var G__33662 = seq__33365_33653;
var G__33663 = chunk__33367_33654;
var G__33664 = count__33368_33655;
var G__33665 = (i__33369_33656 + (1));
seq__33365_33653 = G__33662;
chunk__33367_33654 = G__33663;
count__33368_33655 = G__33664;
i__33369_33656 = G__33665;
continue;
}
} else {
var temp__5753__auto___33666 = cljs.core.seq(seq__33365_33653);
if(temp__5753__auto___33666){
var seq__33365_33667__$1 = temp__5753__auto___33666;
if(cljs.core.chunked_seq_QMARK_(seq__33365_33667__$1)){
var c__4679__auto___33668 = cljs.core.chunk_first(seq__33365_33667__$1);
var G__33669 = cljs.core.chunk_rest(seq__33365_33667__$1);
var G__33670 = c__4679__auto___33668;
var G__33671 = cljs.core.count(c__4679__auto___33668);
var G__33672 = (0);
seq__33365_33653 = G__33669;
chunk__33367_33654 = G__33670;
count__33368_33655 = G__33671;
i__33369_33656 = G__33672;
continue;
} else {
var child_33673 = cljs.core.first(seq__33365_33667__$1);
if(cljs.core.truth_(child_33673)){
node.appendChild(child_33673);


var G__33674 = cljs.core.next(seq__33365_33667__$1);
var G__33675 = null;
var G__33676 = (0);
var G__33677 = (0);
seq__33365_33653 = G__33674;
chunk__33367_33654 = G__33675;
count__33368_33655 = G__33676;
i__33369_33656 = G__33677;
continue;
} else {
var G__33678 = cljs.core.next(seq__33365_33667__$1);
var G__33679 = null;
var G__33680 = (0);
var G__33681 = (0);
seq__33365_33653 = G__33678;
chunk__33367_33654 = G__33679;
count__33368_33655 = G__33680;
i__33369_33656 = G__33681;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33652);
}
}


var G__33682 = seq__33347_33646;
var G__33683 = chunk__33349_33647;
var G__33684 = count__33350_33648;
var G__33685 = (i__33351_33649 + (1));
seq__33347_33646 = G__33682;
chunk__33349_33647 = G__33683;
count__33350_33648 = G__33684;
i__33351_33649 = G__33685;
continue;
} else {
var G__33686 = seq__33347_33646;
var G__33687 = chunk__33349_33647;
var G__33688 = count__33350_33648;
var G__33689 = (i__33351_33649 + (1));
seq__33347_33646 = G__33686;
chunk__33349_33647 = G__33687;
count__33350_33648 = G__33688;
i__33351_33649 = G__33689;
continue;
}
} else {
var temp__5753__auto___33690 = cljs.core.seq(seq__33347_33646);
if(temp__5753__auto___33690){
var seq__33347_33691__$1 = temp__5753__auto___33690;
if(cljs.core.chunked_seq_QMARK_(seq__33347_33691__$1)){
var c__4679__auto___33692 = cljs.core.chunk_first(seq__33347_33691__$1);
var G__33693 = cljs.core.chunk_rest(seq__33347_33691__$1);
var G__33694 = c__4679__auto___33692;
var G__33695 = cljs.core.count(c__4679__auto___33692);
var G__33696 = (0);
seq__33347_33646 = G__33693;
chunk__33349_33647 = G__33694;
count__33350_33648 = G__33695;
i__33351_33649 = G__33696;
continue;
} else {
var child_struct_33697 = cljs.core.first(seq__33347_33691__$1);
if((!((child_struct_33697 == null)))){
if(typeof child_struct_33697 === 'string'){
var text_33698 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33698),child_struct_33697].join(''));
} else {
var children_33699 = shadow.dom.svg_node(child_struct_33697);
if(cljs.core.seq_QMARK_(children_33699)){
var seq__33371_33700 = cljs.core.seq(children_33699);
var chunk__33373_33701 = null;
var count__33374_33702 = (0);
var i__33375_33703 = (0);
while(true){
if((i__33375_33703 < count__33374_33702)){
var child_33705 = chunk__33373_33701.cljs$core$IIndexed$_nth$arity$2(null,i__33375_33703);
if(cljs.core.truth_(child_33705)){
node.appendChild(child_33705);


var G__33706 = seq__33371_33700;
var G__33707 = chunk__33373_33701;
var G__33708 = count__33374_33702;
var G__33709 = (i__33375_33703 + (1));
seq__33371_33700 = G__33706;
chunk__33373_33701 = G__33707;
count__33374_33702 = G__33708;
i__33375_33703 = G__33709;
continue;
} else {
var G__33711 = seq__33371_33700;
var G__33712 = chunk__33373_33701;
var G__33713 = count__33374_33702;
var G__33714 = (i__33375_33703 + (1));
seq__33371_33700 = G__33711;
chunk__33373_33701 = G__33712;
count__33374_33702 = G__33713;
i__33375_33703 = G__33714;
continue;
}
} else {
var temp__5753__auto___33715__$1 = cljs.core.seq(seq__33371_33700);
if(temp__5753__auto___33715__$1){
var seq__33371_33716__$1 = temp__5753__auto___33715__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33371_33716__$1)){
var c__4679__auto___33717 = cljs.core.chunk_first(seq__33371_33716__$1);
var G__33718 = cljs.core.chunk_rest(seq__33371_33716__$1);
var G__33719 = c__4679__auto___33717;
var G__33720 = cljs.core.count(c__4679__auto___33717);
var G__33721 = (0);
seq__33371_33700 = G__33718;
chunk__33373_33701 = G__33719;
count__33374_33702 = G__33720;
i__33375_33703 = G__33721;
continue;
} else {
var child_33722 = cljs.core.first(seq__33371_33716__$1);
if(cljs.core.truth_(child_33722)){
node.appendChild(child_33722);


var G__33723 = cljs.core.next(seq__33371_33716__$1);
var G__33724 = null;
var G__33725 = (0);
var G__33726 = (0);
seq__33371_33700 = G__33723;
chunk__33373_33701 = G__33724;
count__33374_33702 = G__33725;
i__33375_33703 = G__33726;
continue;
} else {
var G__33728 = cljs.core.next(seq__33371_33716__$1);
var G__33729 = null;
var G__33730 = (0);
var G__33731 = (0);
seq__33371_33700 = G__33728;
chunk__33373_33701 = G__33729;
count__33374_33702 = G__33730;
i__33375_33703 = G__33731;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33699);
}
}


var G__33732 = cljs.core.next(seq__33347_33691__$1);
var G__33733 = null;
var G__33734 = (0);
var G__33735 = (0);
seq__33347_33646 = G__33732;
chunk__33349_33647 = G__33733;
count__33350_33648 = G__33734;
i__33351_33649 = G__33735;
continue;
} else {
var G__33736 = cljs.core.next(seq__33347_33691__$1);
var G__33737 = null;
var G__33738 = (0);
var G__33739 = (0);
seq__33347_33646 = G__33736;
chunk__33349_33647 = G__33737;
count__33350_33648 = G__33738;
i__33351_33649 = G__33739;
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
var args__4870__auto__ = [];
var len__4864__auto___33742 = arguments.length;
var i__4865__auto___33743 = (0);
while(true){
if((i__4865__auto___33743 < len__4864__auto___33742)){
args__4870__auto__.push((arguments[i__4865__auto___33743]));

var G__33744 = (i__4865__auto___33743 + (1));
i__4865__auto___33743 = G__33744;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq33377){
var G__33378 = cljs.core.first(seq33377);
var seq33377__$1 = cljs.core.next(seq33377);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33378,seq33377__$1);
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
var G__33380 = arguments.length;
switch (G__33380) {
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

if(cljs.core.truth_((function (){var and__4251__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4251__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4251__auto__;
}
})())){
var c__30454__auto___33746 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30460__auto__ = (function (){var switch__30233__auto__ = (function (state_33385){
var state_val_33386 = (state_33385[(1)]);
if((state_val_33386 === (1))){
var state_33385__$1 = state_33385;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33385__$1,(2),once_or_cleanup);
} else {
if((state_val_33386 === (2))){
var inst_33382 = (state_33385[(2)]);
var inst_33383 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33385__$1 = (function (){var statearr_33387 = state_33385;
(statearr_33387[(7)] = inst_33382);

return statearr_33387;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33385__$1,inst_33383);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__30234__auto__ = null;
var shadow$dom$state_machine__30234__auto____0 = (function (){
var statearr_33388 = [null,null,null,null,null,null,null,null];
(statearr_33388[(0)] = shadow$dom$state_machine__30234__auto__);

(statearr_33388[(1)] = (1));

return statearr_33388;
});
var shadow$dom$state_machine__30234__auto____1 = (function (state_33385){
while(true){
var ret_value__30235__auto__ = (function (){try{while(true){
var result__30236__auto__ = switch__30233__auto__(state_33385);
if(cljs.core.keyword_identical_QMARK_(result__30236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30236__auto__;
}
break;
}
}catch (e33389){var ex__30237__auto__ = e33389;
var statearr_33390_33747 = state_33385;
(statearr_33390_33747[(2)] = ex__30237__auto__);


if(cljs.core.seq((state_33385[(4)]))){
var statearr_33391_33748 = state_33385;
(statearr_33391_33748[(1)] = cljs.core.first((state_33385[(4)])));

} else {
throw ex__30237__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33749 = state_33385;
state_33385 = G__33749;
continue;
} else {
return ret_value__30235__auto__;
}
break;
}
});
shadow$dom$state_machine__30234__auto__ = function(state_33385){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__30234__auto____0.call(this);
case 1:
return shadow$dom$state_machine__30234__auto____1.call(this,state_33385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__30234__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__30234__auto____0;
shadow$dom$state_machine__30234__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__30234__auto____1;
return shadow$dom$state_machine__30234__auto__;
})()
})();
var state__30461__auto__ = (function (){var statearr_33392 = f__30460__auto__();
(statearr_33392[(6)] = c__30454__auto___33746);

return statearr_33392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30461__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
