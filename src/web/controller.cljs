(ns web.controller)

;; Menu CTRL

(defmulti menu-ctrl (fn [event] event))

(defmethod menu-ctrl :init []
  {:state {:open false}})

(defmethod menu-ctrl :open [_ _ state]
  {:state (assoc state :open true)})

(defmethod menu-ctrl :close [_ _ state]
  {:state (assoc state :open false)})