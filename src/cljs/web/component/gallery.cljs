(ns web.component.gallery
  (:require [web.ui :as ui]
            [rum.core :as rum]))

(def bahamas-photos
  [{:src    "../../img/bahamas/P3050639.jpeg"
    :width  4
    :height 3}
   {:src    "../../img/bahamas/P3050676.jpeg"
    :width  4
    :height 3}
   {:src    "../../img/bahamas/P3060820.jpeg"
    :width  4
    :height 3}
   {:src    "../../img/bahamas/P3060838.jpeg"
    :width  4
    :height 3}
   {:src    "../../img/bahamas/P3060840.jpeg"
    :width  4
    :height 3}
   {:src    "../../img/bahamas/P3060840_bw.jpeg"
    :width  4
    :height 3}
   {:src    "../../img/bahamas/P3060861.jpeg"
    :width  4
    :height 3}
   {:src    "../../img/bahamas/P3091013.jpeg"
    :width  4
    :height 3}
   {:src    "../../img/bahamas/P3101133.jpeg"
    :width  4
    :height 3}
   {:src    "../../img/bahamas/P3101202.jpeg"
    :width  4
    :height 3}
   {:src    "../../img/bahamas/P3101273.jpeg"
    :width  4
    :height 3}])

(def photos
  (concat bahamas-photos))

(defn columns [container-width]
  (cond
    (>= container-width 1500) 4
    (>= container-width 900) 3
    (>= container-width 500) 2
    :else 1))

(rum/defc Gallery < rum/static
  []
  (ui/gallery
    {:photos    photos
     :direction "row"}))