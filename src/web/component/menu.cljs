(ns web.component.menu
  (:require [rum.core :as rum]))

(rum/defc AppBar < rum/static
  [props]
  [:div.nav-bar#appbar
   [:div.nav-container
    [:a.nav-brand {:href "/"}
     [:img.logo {:src "../images/logo.png"
                 :alt ""}]]
    [:div.hamburger.hamburger--collapse#hamburger
     [:div.hamburger-box
      [:div.hamburger-inner]]]]])

(rum/defc Navigation < rum/static
  [props]
  [:nav.nav#navigation {:role "navigation"}
   [:div.nav-header
    [:div.hamburger.hamburger--collapse.is-active#hamburger-close
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
     "Photography by Pavol Noha"]]])

(rum/defc NavigationOverlay < rum/static
  [props]
  [:div.nav-overlay#navigation-overlay])