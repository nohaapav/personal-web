(ns web.controller)

;; Menu CTRL

(defmulti menu-ctrl (fn [event] event))

(defmethod menu-ctrl :init []
  {:state {:open false}})

(defmethod menu-ctrl :open [_ _ state]
  {:state (assoc state :open true)})

(defmethod menu-ctrl :close [_ _ state]
  {:state (assoc state :open false)})

;; Video CTRL

(defmulti video-ctrl (fn [event] event))

(defmethod video-ctrl :init []
  {:state {:playing true
           :ref     nil}})

(defmethod video-ctrl :setup [_ [ref] state]
  {:state (assoc state :ref ref)})

(defmethod video-ctrl :play [_ _ state]
  (.play (:ref state))
  {:state (assoc state :playing true)})

(defmethod video-ctrl :stop [_ _ state]
  (.pause (:ref state))
  {:state (assoc state :playing false)})