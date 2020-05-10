(ns web.component.menu
  (:require [citrus.core :as citrus]
            [rum.core :as rum]))

(rum/defc AppBar < rum/reactive
  [r props]
  (let [{:keys [open]} (rum/react (citrus/subscription r [:app/menu]))]
    [:div.nav-bar#appbar
     [:div.nav-container
      [:a.nav-brand {:href "/"}
       [:img.logo {:src "../images/logo.png"
                   :alt ""}]]
      [:div.hamburger.hamburger--collapse
       {:class   (when open "hidden")
        :onClick #(citrus/dispatch! r :app/menu :open)}
       [:div.hamburger-box
        [:div.hamburger-inner]]]]]))

(rum/defc Navigation < rum/reactive
  [r props]
  (let [{:keys [open]} (rum/react (citrus/subscription r [:app/menu]))]
    [:nav.nav#navigation
     {:role  "navigation"
      :class (when open "nav-open")}
     [:div.nav-header
      [:div.hamburger.hamburger--collapse.is-active
       {:onClick #(citrus/dispatch! r :app/menu :close)}
       [:div.hamburger-box
        [:div.hamburger-inner]]]]
     [:ul.nav-menu#menu
      [:li [:a.nav-menu-item {:href ""} "Expeditions"]]
      [:li [:a.nav-menu-item {:href ""} "About"]]
      [:li [:a.nav-menu-item {:href ""} "Gallery"]]
      [:li [:a.nav-menu-item {:href ""} "Contact"]]]
     [:div.grow]
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