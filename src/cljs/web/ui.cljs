(ns web.ui
  (:require [react-photo-gallery]))

(defn create-element [comp opts & children]
  (apply js/React.createElement comp (clj->js opts) children))

(def gallery (partial create-element react-photo-gallery))