(ns web.component.events
  (:require [web.ui :as ui]
            [rum.core :as rum]))

(def responsive
  {:desktop
   {:breakpoint              {:max 3000
                              :min ui/lg-screen-breakpoint}
    :items                   3
    :partialVisibilityGutter 40}
   :tablet
   {:breakpoint              {:max ui/lg-screen-breakpoint
                              :min ui/md-screen-breakpoint}
    :items                   2
    :partialVisibilityGutter 30}
   :mobile
   {:breakpoint              {:max ui/md-screen-breakpoint
                              :min 0}
    :items                   1
    :partialVisibilityGutter 30}})

(def events
  [{:title    "Humpback Swims"
    :location "Vava'u, Tonga"
    :preview  "../../img/preview/tonga.jpeg"
    :date     "30 September 2020"}
   ;{:title    "Baja Safari"
   ; :location "Mexico"
   ; :date     "10 November 2020"
   ; :preview  ""}
   {:title    "Tiger beach & Bimini"
    :location "Bahamas"
    :preview  "../../img/preview/bahamas.jpeg"
    :date     "March 2021"}
   {:title    "Fuvahmulah"
    :location "Maldives"
    :date     "February-April 2021"
    :preview  "../../img/preview/maldives.jpeg"}])

(rum/defc Event < rum/static
  [{:keys [title location preview date]}]
  [:div.event
   [:img.event-image {:src preview}]
   [:div.event-content
    [:h5 title]
    [:span.event-location location]
    [:span.event-date date]]])

(rum/defc Events < rum/static
  []
  (ui/carousel
    {:key           "carousel"
     :arrows        true
     :autoPlay      true
     :autoPlaySpeed 5000
     :className     "event-carousel"
     :draggable     false
     :infinite      true
     :responsive    responsive
     :showDots      false
     :slidesToSlide 1
     :swipeable     true}
    (map-indexed
      (fn [index item]
        (rum/with-key (Event item) (str "event-" index))) events)))