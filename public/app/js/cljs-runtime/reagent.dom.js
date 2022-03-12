goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__26986 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__26987 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__26987);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__26995 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__26996 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__26996);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__26995);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__26986);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__27007 = arguments.length;
switch (G__27007) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__27020 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27020,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27020,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__27027_27049 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__27028_27050 = null;
var count__27029_27051 = (0);
var i__27030_27052 = (0);
while(true){
if((i__27030_27052 < count__27029_27051)){
var vec__27037_27054 = chunk__27028_27050.cljs$core$IIndexed$_nth$arity$2(null,i__27030_27052);
var container_27055 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27037_27054,(0),null);
var comp_27056 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27037_27054,(1),null);
reagent.dom.re_render_component(comp_27056,container_27055);


var G__27057 = seq__27027_27049;
var G__27058 = chunk__27028_27050;
var G__27059 = count__27029_27051;
var G__27060 = (i__27030_27052 + (1));
seq__27027_27049 = G__27057;
chunk__27028_27050 = G__27058;
count__27029_27051 = G__27059;
i__27030_27052 = G__27060;
continue;
} else {
var temp__5753__auto___27061 = cljs.core.seq(seq__27027_27049);
if(temp__5753__auto___27061){
var seq__27027_27062__$1 = temp__5753__auto___27061;
if(cljs.core.chunked_seq_QMARK_(seq__27027_27062__$1)){
var c__4679__auto___27063 = cljs.core.chunk_first(seq__27027_27062__$1);
var G__27064 = cljs.core.chunk_rest(seq__27027_27062__$1);
var G__27065 = c__4679__auto___27063;
var G__27066 = cljs.core.count(c__4679__auto___27063);
var G__27067 = (0);
seq__27027_27049 = G__27064;
chunk__27028_27050 = G__27065;
count__27029_27051 = G__27066;
i__27030_27052 = G__27067;
continue;
} else {
var vec__27040_27068 = cljs.core.first(seq__27027_27062__$1);
var container_27069 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27040_27068,(0),null);
var comp_27070 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27040_27068,(1),null);
reagent.dom.re_render_component(comp_27070,container_27069);


var G__27071 = cljs.core.next(seq__27027_27062__$1);
var G__27072 = null;
var G__27073 = (0);
var G__27074 = (0);
seq__27027_27049 = G__27071;
chunk__27028_27050 = G__27072;
count__27029_27051 = G__27073;
i__27030_27052 = G__27074;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
