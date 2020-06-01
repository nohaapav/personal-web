(ns web.app
  (:require [cljs.core.async :as async :refer [<! go-loop]]
            [goog.dom :refer [getElement]]
            [web.router :as router]
            [web.controller :as ctrl]
            [web.component.root :refer [Root]]
            [web.pages.home :refer [Home]]
            [citrus.core :as citrus]
            [rum.core :as rum]))

(enable-console-print!)

(defonce app-state (atom {}))

(def route->component
  {:index Home})

(defonce reconciler
         (citrus/reconciler
           {:state       app-state
            :controllers {:app/menu  ctrl/menu-ctrl
                          :app/video ctrl/video-ctrl}}))

(defn render-route [root-el {:keys [app/route app/route-params app/query-params]}]
  (let [Comp (get route->component route)
        props {:route        route
               :route-params route-params
               :query-params query-params}]
    (rum/mount (Root reconciler props Comp) root-el)))

(defn handle-route-change [root-el route-ch]
  (go-loop []
           (let [route (<! route-ch)]
             (swap! app-state merge route)
             (render-route root-el route)
             (recur))))

(defn init []
  (let [route-ch (async/chan)
        root-el (getElement "app")]
    (handle-route-change root-el route-ch)
    (citrus/broadcast-sync! reconciler :init)
    (router/init! route-ch)))

(set! (-> js/document .-documentElement .-className) "light")

(init)