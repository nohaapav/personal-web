(ns web.component.home
  (:require [web.ui :as ui]
            [rum.core :as rum]
            [sablono.core :refer-macros [html]]))

(def bahamas-photos
  [{:src    "../../img/bahamas/P3050639.jpeg"
    :width  4
    :height 3}
   {:src    "../../img/bahamas/P3050676.jpeg"
    :width  4
    :height 3}
   {:src    "../../img/bahamas/P3060820.jpeg"
    :width  4
    :height 3}
   {:src    "../../img/bahamas/P3060838.jpeg"
    :width  4
    :height 3}
   {:src    "../../img/bahamas/P3060840.jpeg"
    :width  4
    :height 3}
   {:src    "../../img/bahamas/P3060840_bw.jpeg"
    :width  4
    :height 3}
   {:src    "../../img/bahamas/P3060861.jpeg"
    :width  4
    :height 3}
   {:src    "../../img/bahamas/P3091013.jpeg"
    :width  4
    :height 3}
   {:src    "../../img/bahamas/P3101133.jpeg"
    :width  4
    :height 3}
   {:src    "../../img/bahamas/P3101202.jpeg"
    :width  4
    :height 3}
   {:src    "../../img/bahamas/P3101273.jpeg"
    :width  4
    :height 3}])

(def photos
  (concat bahamas-photos))

(defn columns [container-width]
  (cond
    (>= container-width 1500) 4
    (>= container-width 900) 3
    (>= container-width 500) 2
    :else 1))

(rum/defc Gallery < rum/static
  []
  (ui/gallery
    {:photos    photos
     :direction "row"}))

(rum/defc Section < rum/static
  [name]
  [:div.section
   [:h2 name]])

(rum/defc Countdown < rum/static
  []
  [:div#timer
   [:div.countdown-row
    [:div.countdown-section
     [:div.countdown-amount#timer-days "00"]
     [:div.countdown-period "days"]]
    [:div.countdown-section
     [:div.countdown-amount#timer-hr "00"]
     [:div.countdown-period "hr"]]
    [:div.countdown-section
     [:div.countdown-amount#timer-min "00"]
     [:div.countdown-period "min"]]
    [:div.countdown-section
     [:div.countdown-amount#timer-sec "00"]
     [:div.countdown-period "sec"]]]])

(def events [{:title    "Tiger beach & Bimini 1"
              :location "Bahamas"
              :date     "3 - 11 March"
              :details  "Greatest shark diving location in the world!"}
             {:title    "Tiger beach & Bimini 2"
              :location "Bahamas"
              :date     "3 - 11 March"
              :details  "Greatest shark diving location in the world!"}
             {:title    "Tiger beach & Bimini 3"
              :location "Bahamas"
              :date     "3 - 11 March"
              :details  "Greatest shark diving location in the world!"}
             {:title    "Tiger beach & Bimini 4"
              :location "Bahamas"
              :date     "3 - 11 March"
              :details  "Greatest shark diving location in the world!"}
             {:title    "Tiger beach & Bimini 5"
              :location "Bahamas"
              :date     "3 - 11 March"
              :details  "Greatest shark diving location in the world!"}
             {:title    "Tiger beach & Bimini 6"
              :location "Bahamas"
              :date     "3 - 11 March"
              :details  "Greatest shark diving location in the world!"}])

(rum/defc Event < rum/static
  [{:keys [title location date details]}]
  [:div.event {:key title}
   [:div.event-image]
   [:div.event-content
    [:div.event-header date]
    [:div
     [:h5 title]]
    [:div.event-footer location]]])

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

(rum/defc Events < rum/static
  []
  (ui/carousel
    {:additionalTransfrom      0
     :arrows                   true
     :autoPlaySpeed            3000
     :centerMode               false
     :className                "event-carousel"
     :containerClass           ""
     :dotListClass             ""
     :draggable                true
     :focusOnSelect            false
     :infinite                 true
     :itemClass                ""
     :keyBoardControl          true
     :minimumTouchDrag         80
     :renderButtonGroupOutside false
     :renderDotsOutside        false
     :responsive               responsive
     :showDots                 false
     :sliderClass              ""
     :slidesToSlide            1
     :swipeable                true}
    (map #(Event %) events)))

(rum/defc Home < rum/static
  [r props]
  [:main.container
   (Section "Upcomming")
   (Events)
   (Section "Gallery")
   (Gallery)])