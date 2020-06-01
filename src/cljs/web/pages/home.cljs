(ns web.pages.home
  (:require [rum.core :as rum]
            [web.component.events :refer [Events]]
            [web.component.gallery :refer [Gallery]]))

(rum/defc Section < rum/static
  [{:keys [name text class]} & childs]
  [:div.section {:class class}
   [:h2 name]
   [:div.section-info text]
   childs])

(rum/defc Header < rum/static
  []
  ;[:header
  ; [:div.container.h-100
  ;  [:div.intro
  ;   [:h1 "Pavol Noha"]
  ;   [:p "Diver / Photographer"]]]]

  [:header]
  )

(rum/defc Main < rum/static
  []
  [:main.container
   (Section
     {:name "Upcoming"
      :text "upcomming"}
     (rum/with-key (Events) "events"))
   (Section
     {:name "Gallery"
      :text "gallery"}
     (rum/with-key (Gallery) "gallery"))])

(rum/defc About < rum/static
  []
  [:div
   [:div.container
    "© 2020 Pavol Noha. All rights reserved."]])

(rum/defc Footer < rum/static
  []
  [:footer
   [:div.container
    "© 2020 Pavol Noha. All rights reserved."]])

(rum/defc Home < rum/static
  [r props]
  ;[:div.intro
  ; [:div.intro-overlay
  ;  [:div.intro-layout
  ;   [:div.intro-left
  ;    [:div.intro-quote
  ;     [:h3 "There is no better high than discovery"]
  ;     [:p "E. O. Wilson"]
  ;     ;[:h3 "Having respect for animals makes us better humans."]
  ;     ;[:p "Jane Goodall"]
  ;
  ;     ]]
  ;   [:div.intro-right
  ;    [:div.intro-brand "pavolfoolsaround.com"]
  ;    [:div.intro-content
  ;     [:h1 "Pavol Noha"]
  ;     [:div.intro-detail "Wildlife Expeditions"]
  ;     [:ul.intro-navigation
  ;      [:li [:a {:href ""} "Upcoming"]]
  ;      [:li [:a {:href ""} "Gallery"]]
  ;      [:li [:a {:href ""} "About"]]]]
  ;    [:div "nejakej footer"]
  ;
  ;    ]
  ;
  ;   ]]
  ; ]

  [(rum/with-key (Header) "header")
   (rum/with-key (Main) "main")
   (rum/with-key (Footer) "footer")]

  )