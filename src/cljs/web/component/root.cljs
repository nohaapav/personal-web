(ns web.component.root
  (:require [rum.core :as rum]
            [web.component.menu :as menu]))

(rum/defc Root < rum/static
  [r {:keys [route] :as props} child]
  [(rum/with-key (menu/AppBar r props) "appbar")
   (rum/with-key (menu/Navigation r props) "navigation")
   (rum/with-key (menu/NavigationOverlay r props) "navigation-overlay")
   (rum/with-key (child r props) (name route))])