(ns web.ui
  (:require [react-photo-gallery]
            [react-multi-carousel]))

(defonce xl-screen-breakpoint 1200)

(defonce lg-screen-breakpoint 992)

(defonce md-screen-breakpoint 768)

(defonce sm-screen-breakpoint 576)

(defn create-element [comp opts & children]
  (apply js/React.createElement comp (clj->js opts) children))

(def gallery (partial create-element react-photo-gallery))

(def carousel (partial create-element react-multi-carousel))