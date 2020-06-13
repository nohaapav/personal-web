(ns web.pages.home
  (:require [rum.core :as rum]
            [web.component.events :refer [Events]]
            [web.component.gallery :refer [Gallery]]
            [web.carousel :as carousel]))

(rum/defc Section < rum/static
  [{:keys [name text class]} & childs]
  [:div.section {:class class}
   [:h2 name]
   [:div.section-info text]
   childs])

(rum/defc Header < rum/static
  ;{:did-mount
  ; (fn [state]
  ;   (carousel/setup) state)
  ; }
  []
  ;[:header
  ; [:div.carousel-text
  ;  [:h2 "WILDLIFE EXPEDITIONS"]
  ;
  ;  [:a {:href  ""
  ;       :class "button"} "See Upcoming Trips"]
  ;
  ;  ]
  ; [:div.carousel
  ;  [:ul.carousel-slides
  ;   [:li.carousel-slide]
  ;   [:li.carousel-slide]
  ;   [:li.carousel-slide]
  ;   [:li.carousel-slide]]]]


  [:header.intro
   [:div.intro-layout
    [:div.intro-overlay
     [:h2 "EXPLORE"]
     [:h1 [:span.fff "THE "] [:span "WILDLIFE"]]
     [:a {:href  ""
          :class "button"} "See Upcoming Trips"]]
    ]]

  )

(rum/defc Main < rum/static
  []
  [:main.container
   (Section
     {:name "Upcoming"
      :text "upcomming"}
     (rum/with-key (Events) "events"))
   ;(Section
   ;  {:name "Gallery"
   ;   :text "gallery"}
   ;  (rum/with-key (Gallery) "gallery"))

   ])

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
  [(rum/with-key (Header) "header")
   (rum/with-key (Main) "main")



   (rum/with-key (Footer) "footer")])