(ns web.component.menu
  (:require [web.mixin :as mixin]
            [citrus.core :as citrus]
            [rum.core :as rum]))

(rum/defc AppBar < rum/reactive
  [r props]
  (let [{:keys [open]} (rum/react (citrus/subscription r [:app/menu]))]
    [:div.nav-bar
     [:div.nav-container.container
      [:span.nav-brand {:href "/"} "nohaphoto.com"]
      [:div.hamburger.hamburger--collapse
       {:class   (when open "hidden")
        :onClick #(citrus/dispatch! r :app/menu :open)}
       [:div.hamburger-box
        [:div.hamburger-inner]]]
      [:div.menu
       [:ul.nav-menu
        [:li [:a.nav-menu-item {:href ""} "Upcoming"]]
        [:li [:a.nav-menu-item {:href ""} "Below"]]
        [:li [:a.nav-menu-item {:href ""} "Shirts"]]
        [:li [:a.nav-menu-item {:href ""} "About"]]]]

      ]]))

(rum/defc Navigation < rum/reactive
                       (mixin/resize)
  [r props]
  (let [{:keys [open]} (rum/react (citrus/subscription r [:app/menu]))]
    [:nav.nav
     {:role  "navigation"
      :class (when open "nav-open")}
     [:div.nav-header
      [:div.hamburger.hamburger--collapse.is-active
       {:onClick #(citrus/dispatch! r :app/menu :close)}
       [:div.hamburger-box
        [:div.hamburger-inner]]]]
     [:ul.nav-menu
      [:li [:a.nav-menu-item {:href ""} "Upcoming"]]
      [:li [:a.nav-menu-item {:href ""} "Below"]]
      [:li [:a.nav-menu-item {:href ""} "Shirts"]]
      [:li [:a.nav-menu-item {:href ""} "About"]]]
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