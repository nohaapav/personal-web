(ns web.component.home
  (:require [rum.core :as rum]
            [react-photo-gallery]))

(rum/defc Home < rum/static
  [r props]
  [:div
   "It works"])