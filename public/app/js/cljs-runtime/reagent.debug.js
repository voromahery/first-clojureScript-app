goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__26650__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__26650 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26651__i = 0, G__26651__a = new Array(arguments.length -  0);
while (G__26651__i < G__26651__a.length) {G__26651__a[G__26651__i] = arguments[G__26651__i + 0]; ++G__26651__i;}
  args = new cljs.core.IndexedSeq(G__26651__a,0,null);
} 
return G__26650__delegate.call(this,args);};
G__26650.cljs$lang$maxFixedArity = 0;
G__26650.cljs$lang$applyTo = (function (arglist__26652){
var args = cljs.core.seq(arglist__26652);
return G__26650__delegate(args);
});
G__26650.cljs$core$IFn$_invoke$arity$variadic = G__26650__delegate;
return G__26650;
})()
);

(o.error = (function() { 
var G__26653__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__26653 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26654__i = 0, G__26654__a = new Array(arguments.length -  0);
while (G__26654__i < G__26654__a.length) {G__26654__a[G__26654__i] = arguments[G__26654__i + 0]; ++G__26654__i;}
  args = new cljs.core.IndexedSeq(G__26654__a,0,null);
} 
return G__26653__delegate.call(this,args);};
G__26653.cljs$lang$maxFixedArity = 0;
G__26653.cljs$lang$applyTo = (function (arglist__26655){
var args = cljs.core.seq(arglist__26655);
return G__26653__delegate(args);
});
G__26653.cljs$core$IFn$_invoke$arity$variadic = G__26653__delegate;
return G__26653;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
