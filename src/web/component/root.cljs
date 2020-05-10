(ns web.component.root
  (:require [rum.core :as rum]
            [web.component.menu :as menu]))

(rum/defc Root < rum/static
  [props child]
  [(rum/with-key (menu/AppBar props) "appbar")
   (rum/with-key (menu/Navigation props) "navigation")
   (rum/with-key (menu/NavigationOverlay props) "navigation-overlay")
   (rum/with-key (child props) "child")])