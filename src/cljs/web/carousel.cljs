(ns web.carousel)

(defonce active-slide-index (atom 0))

(defn next-slide-index
  [slides]
  (if (= @active-slide-index (dec (count slides)))
    0
    (inc @active-slide-index)))

(defn change-slide
  [slides next-slide-index]
  (let [slides-count (count slides)
        active-slide (get slides @active-slide-index)
        next-slide (get slides next-slide-index)]
    (if (and (= @active-slide-index (dec slides-count))
             (zero? next-slide-index))
      (do
        (.forEach
          slides
          (fn [e _]
            (set! (-> e .-style .-transition) nil)
            (set! (-> e .-style .-opacity) 0)))
        (set! (-> active-slide .-style .-transition) "opacity 1s ease-in-out")
        (set! (-> active-slide .-style .-opacity) 0)
        (set! (-> next-slide .-style .-transition) nil)
        (set! (-> next-slide .-style .-opacity) 1))
      (do
        (set! (-> next-slide .-style .-transition) "opacity 1s ease-in-out")
        (set! (-> next-slide .-style .-opacity) 1)))
    (reset! active-slide-index next-slide-index)))

(defn setup []
  (let [slides (.from js/Array (.getElementsByClassName js/document "carousel-slide"))]
    (.forEach
      slides
      (fn [e i]
        (if (zero? i)
          (set! (-> e .-style .-opacity) 1)
          (set! (-> e .-style .-opacity) 0))))
    (js/setInterval
      (fn []
        (let [next-slide (next-slide-index slides)]
          (change-slide slides next-slide)))
      9000)))