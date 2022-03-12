(ns counter.app
  (:require [reagent.core :as r])
  (:require [reagent.dom :as dom]))

(defn init []
  (println "Code reloaded")
  (println "HI KANEKI")
  (println "App initialization"))

(println (map vector (range) [:a :b :c :d]))


(defonce current-count (r/atom 0))

(defonce counters (r/atom []))

(defn vec-delete [v i]
  (into (subvec v 0 i) (subvec v (inc i))))
(println (vec-delete [:a :b :c] 1))

(defn Counter [i counter]
  [:div {:key (str i)}
   counter
   " "
   [:button
    {:onClick (fn [] (swap! counters update i inc))}
    "+1"]
   [:button
    {:onClick (fn [] (swap! counters update i dec))}
    "-1"]
   [:button
    {:onClick (fn [] (swap! counters vec-delete i))}
    "X"]])

(defn Application []
  [:div
   [:h1 "Counter"]
   (doall
    (for [[i counter] (map vector (range) @counters)]
^{:key (str i)} [Counter i counter]))
   [:button {:onClick (fn [] (swap! counters conj 0))} "Add counter"]])
   



(dom/render [Application] (js/document.getElementById "app"))