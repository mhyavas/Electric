(ns ;^:dev/always ; force rebuild here? We don't understand why
  demo.demo-index
  (:require [hyperfiddle.electric :as e]
            [hyperfiddle.electric-dom2 :as dom]
            [hyperfiddle.history :as router])) ; for link only

(def pages
  [`demo.demo-two-clocks/TwoClocks
   `demo.demo-toggle/Toggle
   `demo.demo-system-properties/SystemProperties
   `demo.demo-chat/Chat
   `demo.demo-chat-extended/ChatExtended
   `demo.demo-webview/Webview
   `demo.demo-todos-simple/TodoList
   `demo.demo-todomvc/TodoMVC
   `demo.demo-todomvc-branched/TodoMVCBranched
   `demo.demo-todomvc-composed/TodoMVC-composed
   `demo.demo-explorer/DirectoryExplorer
   `demo.demo-virtual-scroll/VirtualScroll
   `demo.tutorial-blinker/Blinker
   `demo.demo-color/Color
   `demo.demo-svg/SVG
   `demo.demo-tic-tac-toe/TicTacToe
   `demo.demo-student/Student
   `demo.demo-student2/Student2
   `demo.demo-studentDatomic/TodoMVC
   `demo.demo-datomic-browser/DatomicBrowser
   #_`demo.demo-reagent-interop/ReagentInterop])

(def seven-guis
  [`demo.tutorial-7guis-1-counter/Counter
   `demo.tutorial-7guis-2-temperature/TemperatureConverter
   `demo.tutorial-7guis-4-timer/Timer
   `demo.tutorial-7guis-5-crud/CRUD])

(def secret-pages
  [;`demo.demo-10k-dom/Dom-10k-Elements
   `wip.tag-picker/TagPicker
   `wip.demo-custom-types/CustomTypes
   `wip.tracing/TracingDemo

   ; need extra deps alias
   ;::dennis-exception-leak
   #_`wip.demo-stage-ui4/CrudForm
   #_`wip.datomic-browser/DatomicBrowser])

(e/defn Demos []
  (e/client
    (dom/h1 (dom/text "Demos — Electric Clojure"))
    (dom/p (dom/text "See source code in src-docs."))
    (e/for [k pages]
      (dom/div (router/link [k] (dom/text (name k)))))

    (dom/h2 (dom/text "7 GUIs"))
    (e/for [k seven-guis]
      (dom/div (router/link [k] (dom/text (name k)))))

    (dom/div (dom/style {:opacity 0})
      (router/link [`Secrets] (dom/text "secret-hyperfiddle-demos")))))

(e/defn Secrets []
  (e/client
    (dom/h1 (dom/text "Wip unpublished demos (unstable/wip)")
      (dom/comment_ "ssh" "it's a secret"))
    (dom/p "Some require a database connection and are often broken.")
    (e/for [k secret-pages]
      (dom/div (router/link [k] (dom/text (name k)))))))
