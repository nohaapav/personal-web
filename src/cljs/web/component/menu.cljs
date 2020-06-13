(ns web.component.menu
  (:require [web.mixin :as mixin]
            [web.ui :as ui]
            [citrus.core :as citrus]
            [rum.core :as rum]))

(rum/defc Menu < rum/static
  [r]
  [:ul.nav-menu
   [:li [:a {:href ""} "Upcoming"]]
   [:li [:a {:href ""} "Gallery"]]
   [:li [:a {:href ""} "About"]]])

(rum/defc AppBar < rum/reactive
                   (mixin/scroll
                     (fn [r y _]
                       (if (zero? y)
                         (citrus/dispatch! r :app/menu :elevation-off)
                         (citrus/dispatch! r :app/menu :elevation-on))))
  [r props]
  (let [{:keys [open elevation]} (rum/react (citrus/subscription r [:app/menu]))]
    [:div.nav-bar
     {:class (if elevation "nav-scrolled" "nav-top")}
     [:div.nav-container.container
      {:class (when (false? elevation) "nav-container-stacked")}
      [:span.nav-brand {:href "/"} "nohaphoto.com"]

      ;[:img {:src    "../../img/signature2.png"
      ;       :height 72}]

      [:div.hamburger.hamburger--collapse
       {:class   (when open "hidden")
        :onClick #(citrus/dispatch! r :app/menu :open)}
       [:div.hamburger-box
        [:div.hamburger-inner]]]
      [:div.menu
       (if elevation
         (Menu r)
         (Menu r))]]]))

(rum/defc Navigation < rum/reactive
                       (mixin/resize
                         (fn [r w _]
                           (when (> w ui/lg-screen-breakpoint)
                             (citrus/dispatch! r :app/menu :close))))
  [r props]
  (let [{:keys [open]} (rum/react (citrus/subscription r [:app/menu]))]
    [:nav.nav
     {:role  "navigation"
      :class (when open "nav-open")}
     [:div.nav-header.nav-container.container.nav-container-stacked
      [:div.hamburger.hamburger--collapse.is-active
       {:onClick #(citrus/dispatch! r :app/menu :close)}
       [:div.hamburger-box
        [:div.hamburger-inner]]]]
     (Menu r)
     [:div.nav-footer
      [:div.nav-footer-copyright
       "All rights reserved"
       [:br]
       "Copyright ©2020"
       [:br]
       "Photography by Pavol Noha"]]]))

(rum/defc NavigationOverlay < rum/reactive
  [r props]
  (let [{:keys [open]} (rum/react (citrus/subscription r [:app/menu]))]
    [:div.nav-overlay
     {:class   (when open "nav-overlay-active")
      :onClick #(citrus/dispatch! r :app/menu :close)}]))