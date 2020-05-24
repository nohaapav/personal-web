(ns web.mixin)

(defn resize [callback]
  {:did-mount
   (fn [{[r] :rum/args :as state}]
     (.addEventListener
       js/window
       "resize"
       (fn []
         (let [width (-> js/window .-innerWidth)
               height (-> js/window .-innerHeight)]
           (callback r width height)))) state)})

(defn scroll [callback]
  {:did-mount
   (fn [{[r] :rum/args :as state}]
     (.addEventListener
       js/window
       "scroll"
       (fn [_]
         (let [scroll-y (-> js/window .-scrollY)
               scroll-x (-> js/window .-scrollX)]
           (callback r scroll-y scroll-x)))) state)})