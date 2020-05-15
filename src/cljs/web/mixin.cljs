(ns web.mixin
  (:require [citrus.core :as citrus]))

(defn resize []
  {:did-mount
   (fn [{[r] :rum/args :as state}]
     (.addEventListener
       js/window
       "resize"
       (fn []
         (let [width (-> js/window .-innerWidth)
               height (-> js/window .-innerHeight)]
           (when (> width 992)
             (citrus/dispatch! r :app/menu :close))))) state)})