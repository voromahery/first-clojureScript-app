goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35334){
var map__35335 = p__35334;
var map__35335__$1 = cljs.core.__destructure_map(map__35335);
var m = map__35335__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35335__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35335__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35336_35553 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35337_35554 = null;
var count__35338_35555 = (0);
var i__35339_35556 = (0);
while(true){
if((i__35339_35556 < count__35338_35555)){
var f_35559 = chunk__35337_35554.cljs$core$IIndexed$_nth$arity$2(null,i__35339_35556);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35559], 0));


var G__35560 = seq__35336_35553;
var G__35561 = chunk__35337_35554;
var G__35562 = count__35338_35555;
var G__35563 = (i__35339_35556 + (1));
seq__35336_35553 = G__35560;
chunk__35337_35554 = G__35561;
count__35338_35555 = G__35562;
i__35339_35556 = G__35563;
continue;
} else {
var temp__5753__auto___35566 = cljs.core.seq(seq__35336_35553);
if(temp__5753__auto___35566){
var seq__35336_35567__$1 = temp__5753__auto___35566;
if(cljs.core.chunked_seq_QMARK_(seq__35336_35567__$1)){
var c__4679__auto___35568 = cljs.core.chunk_first(seq__35336_35567__$1);
var G__35569 = cljs.core.chunk_rest(seq__35336_35567__$1);
var G__35570 = c__4679__auto___35568;
var G__35571 = cljs.core.count(c__4679__auto___35568);
var G__35572 = (0);
seq__35336_35553 = G__35569;
chunk__35337_35554 = G__35570;
count__35338_35555 = G__35571;
i__35339_35556 = G__35572;
continue;
} else {
var f_35573 = cljs.core.first(seq__35336_35567__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35573], 0));


var G__35574 = cljs.core.next(seq__35336_35567__$1);
var G__35575 = null;
var G__35576 = (0);
var G__35577 = (0);
seq__35336_35553 = G__35574;
chunk__35337_35554 = G__35575;
count__35338_35555 = G__35576;
i__35339_35556 = G__35577;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35578 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_35578], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_35578)))?cljs.core.second(arglists_35578):arglists_35578)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35347_35579 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35348_35580 = null;
var count__35349_35581 = (0);
var i__35350_35582 = (0);
while(true){
if((i__35350_35582 < count__35349_35581)){
var vec__35362_35583 = chunk__35348_35580.cljs$core$IIndexed$_nth$arity$2(null,i__35350_35582);
var name_35584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35362_35583,(0),null);
var map__35365_35585 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35362_35583,(1),null);
var map__35365_35586__$1 = cljs.core.__destructure_map(map__35365_35585);
var doc_35587 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35365_35586__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35588 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35365_35586__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35584], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35588], 0));

if(cljs.core.truth_(doc_35587)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35587], 0));
} else {
}


var G__35589 = seq__35347_35579;
var G__35590 = chunk__35348_35580;
var G__35591 = count__35349_35581;
var G__35592 = (i__35350_35582 + (1));
seq__35347_35579 = G__35589;
chunk__35348_35580 = G__35590;
count__35349_35581 = G__35591;
i__35350_35582 = G__35592;
continue;
} else {
var temp__5753__auto___35593 = cljs.core.seq(seq__35347_35579);
if(temp__5753__auto___35593){
var seq__35347_35594__$1 = temp__5753__auto___35593;
if(cljs.core.chunked_seq_QMARK_(seq__35347_35594__$1)){
var c__4679__auto___35595 = cljs.core.chunk_first(seq__35347_35594__$1);
var G__35596 = cljs.core.chunk_rest(seq__35347_35594__$1);
var G__35597 = c__4679__auto___35595;
var G__35598 = cljs.core.count(c__4679__auto___35595);
var G__35599 = (0);
seq__35347_35579 = G__35596;
chunk__35348_35580 = G__35597;
count__35349_35581 = G__35598;
i__35350_35582 = G__35599;
continue;
} else {
var vec__35366_35600 = cljs.core.first(seq__35347_35594__$1);
var name_35601 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35366_35600,(0),null);
var map__35369_35602 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35366_35600,(1),null);
var map__35369_35603__$1 = cljs.core.__destructure_map(map__35369_35602);
var doc_35604 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35369_35603__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35605 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35369_35603__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35601], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35605], 0));

if(cljs.core.truth_(doc_35604)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35604], 0));
} else {
}


var G__35606 = cljs.core.next(seq__35347_35594__$1);
var G__35607 = null;
var G__35608 = (0);
var G__35609 = (0);
seq__35347_35579 = G__35606;
chunk__35348_35580 = G__35607;
count__35349_35581 = G__35608;
i__35350_35582 = G__35609;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__35371 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35372 = null;
var count__35373 = (0);
var i__35374 = (0);
while(true){
if((i__35374 < count__35373)){
var role = chunk__35372.cljs$core$IIndexed$_nth$arity$2(null,i__35374);
var temp__5753__auto___35610__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___35610__$1)){
var spec_35611 = temp__5753__auto___35610__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35611)], 0));
} else {
}


var G__35612 = seq__35371;
var G__35613 = chunk__35372;
var G__35614 = count__35373;
var G__35615 = (i__35374 + (1));
seq__35371 = G__35612;
chunk__35372 = G__35613;
count__35373 = G__35614;
i__35374 = G__35615;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__35371);
if(temp__5753__auto____$1){
var seq__35371__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__35371__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35371__$1);
var G__35616 = cljs.core.chunk_rest(seq__35371__$1);
var G__35617 = c__4679__auto__;
var G__35618 = cljs.core.count(c__4679__auto__);
var G__35619 = (0);
seq__35371 = G__35616;
chunk__35372 = G__35617;
count__35373 = G__35618;
i__35374 = G__35619;
continue;
} else {
var role = cljs.core.first(seq__35371__$1);
var temp__5753__auto___35620__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___35620__$2)){
var spec_35621 = temp__5753__auto___35620__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35621)], 0));
} else {
}


var G__35622 = cljs.core.next(seq__35371__$1);
var G__35623 = null;
var G__35624 = (0);
var G__35625 = (0);
seq__35371 = G__35622;
chunk__35372 = G__35623;
count__35373 = G__35624;
i__35374 = G__35625;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__35626 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__35627 = cljs.core.ex_cause(t);
via = G__35626;
t = G__35627;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__35469 = datafied_throwable;
var map__35469__$1 = cljs.core.__destructure_map(map__35469);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35469__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35469__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35469__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__35470 = cljs.core.last(via);
var map__35470__$1 = cljs.core.__destructure_map(map__35470);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35470__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35470__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35470__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__35471 = data;
var map__35471__$1 = cljs.core.__destructure_map(map__35471);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35471__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35471__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35471__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__35472 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__35472__$1 = cljs.core.__destructure_map(map__35472);
var top_data = map__35472__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35472__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__35477 = phase;
var G__35477__$1 = (((G__35477 instanceof cljs.core.Keyword))?G__35477.fqn:null);
switch (G__35477__$1) {
case "read-source":
var map__35478 = data;
var map__35478__$1 = cljs.core.__destructure_map(map__35478);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35478__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35478__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__35479 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__35479__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35479,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35479);
var G__35479__$2 = (cljs.core.truth_((function (){var fexpr__35480 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35480.cljs$core$IFn$_invoke$arity$1 ? fexpr__35480.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35480.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35479__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35479__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35479__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35479__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__35481 = top_data;
var G__35481__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35481,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35481);
var G__35481__$2 = (cljs.core.truth_((function (){var fexpr__35482 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35482.cljs$core$IFn$_invoke$arity$1 ? fexpr__35482.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35482.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35481__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35481__$1);
var G__35481__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35481__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35481__$2);
var G__35481__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35481__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35481__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35481__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35481__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__35483 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35483,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35483,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35483,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35483,(3),null);
var G__35486 = top_data;
var G__35486__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35486,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__35486);
var G__35486__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35486__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__35486__$1);
var G__35486__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35486__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__35486__$2);
var G__35486__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35486__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35486__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35486__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35486__$4;
}

break;
case "execution":
var vec__35487 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35487,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35487,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35487,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35487,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__35460_SHARP_){
var or__4253__auto__ = (p1__35460_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var fexpr__35490 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35490.cljs$core$IFn$_invoke$arity$1 ? fexpr__35490.cljs$core$IFn$_invoke$arity$1(p1__35460_SHARP_) : fexpr__35490.call(null,p1__35460_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__35492 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__35492__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35492,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__35492);
var G__35492__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35492__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35492__$1);
var G__35492__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35492__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__35492__$2);
var G__35492__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35492__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__35492__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35492__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35492__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35477__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__35496){
var map__35497 = p__35496;
var map__35497__$1 = cljs.core.__destructure_map(map__35497);
var triage_data = map__35497__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35497__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35497__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35497__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35497__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35497__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35497__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35497__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35497__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = source;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = line;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4253__auto__ = class$;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__35498 = phase;
var G__35498__$1 = (((G__35498 instanceof cljs.core.Keyword))?G__35498.fqn:null);
switch (G__35498__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__35500 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__35501 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35502 = loc;
var G__35503 = (cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35504_35636 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35505_35637 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35506_35638 = true;
var _STAR_print_fn_STAR__temp_val__35507_35639 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35506_35638);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35507_35639);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35494_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35494_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35505_35637);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35504_35636);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35500,G__35501,G__35502,G__35503) : format.call(null,G__35500,G__35501,G__35502,G__35503));

break;
case "macroexpansion":
var G__35508 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__35509 = cause_type;
var G__35510 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35511 = loc;
var G__35512 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35508,G__35509,G__35510,G__35511,G__35512) : format.call(null,G__35508,G__35509,G__35510,G__35511,G__35512));

break;
case "compile-syntax-check":
var G__35514 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__35515 = cause_type;
var G__35516 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35517 = loc;
var G__35518 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35514,G__35515,G__35516,G__35517,G__35518) : format.call(null,G__35514,G__35515,G__35516,G__35517,G__35518));

break;
case "compilation":
var G__35519 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__35520 = cause_type;
var G__35521 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35522 = loc;
var G__35523 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35519,G__35520,G__35521,G__35522,G__35523) : format.call(null,G__35519,G__35520,G__35521,G__35522,G__35523));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__35524 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__35525 = symbol;
var G__35526 = loc;
var G__35527 = (function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35528_35640 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35529_35641 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35530_35642 = true;
var _STAR_print_fn_STAR__temp_val__35531_35643 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35530_35642);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35531_35643);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35495_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35495_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35529_35641);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35528_35640);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35524,G__35525,G__35526,G__35527) : format.call(null,G__35524,G__35525,G__35526,G__35527));
} else {
var G__35533 = "Execution error%s at %s(%s).\n%s\n";
var G__35534 = cause_type;
var G__35535 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35536 = loc;
var G__35537 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35533,G__35534,G__35535,G__35536,G__35537) : format.call(null,G__35533,G__35534,G__35535,G__35536,G__35537));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35498__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
