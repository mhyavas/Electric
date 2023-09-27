(ns user-main
  (:require contrib.uri ; data_readers
            contrib.ednish
            [hyperfiddle.api :as hf]
            [hyperfiddle.electric :as e]
            [hyperfiddle.electric-dom2 :as dom]
            [hyperfiddle.history :as history]
            [demo.demo-index :as demos]

            demo.demo-studentDatomic
            demo.demo-student2
            demo.demo-student
            demo.demo-two-clocks
            demo.demo-toggle
            demo.demo-system-properties
            demo.demo-chat
            demo.demo-chat-extended
            demo.demo-webview
            demo.demo-todomvc
            demo.demo-todomvc-branched
            demo.demo-todomvc-composed

            demo.demo-explorer
            demo.demo-10k-dom
            demo.demo-svg
            demo.demo-todos-simple
            wip.demo-todos-advanced-old
            wip.demo-todos-advanced
            demo.tutorial-7guis-1-counter
            demo.tutorial-7guis-2-temperature
            demo.tutorial-7guis-4-timer
            demo.tutorial-7guis-5-crud
            demo.demo-virtual-scroll
            demo.demo-color
            demo.demo-tic-tac-toe
            demo.tutorial-blinker
            wip.tag-picker
            wip.demo-custom-types
            wip.tracing
            demo.demo-datomic-browser

            ; this demo require `npm install`
            #_demo.demo-reagent-interop

            ; these demos require extra deps alias
            #_wip.dennis-exception-leak
            #_wip.demo-stage-ui4
            #_wip.datomic-browser))


(e/defn NotFoundPage []
  (e/client (dom/h1 (dom/text "Page not found"))))

; todo: macro to auto-install demos by attaching clj metadata to e/defn vars?

(e/defn Pages [page]
  (e/server
    (case page
      `demo.demo-index/Demos demo.demo-index/Demos
      `demo.demo-index/Secrets demo.demo-index/Secrets
      `demo.demo-two-clocks/TwoClocks demo.demo-two-clocks/TwoClocks
      `demo.demo-explorer/DirectoryExplorer demo.demo-explorer/DirectoryExplorer
      ;demo.demo-10k-dom/Dom-10k-Elements demo.demo-10k-dom/Dom-10k-Elements ; todo too slow to unmount, crashes
      `wip.tag-picker/TagPicker wip.tag-picker/TagPicker
      `demo.demo-toggle/Toggle demo.demo-toggle/Toggle
      `wip.demo-custom-types/CustomTypes wip.demo-custom-types/CustomTypes
      `demo.demo-system-properties/SystemProperties demo.demo-system-properties/SystemProperties
      `demo.demo-chat/Chat demo.demo-chat/Chat
      `demo.demo-chat-extended/ChatExtended demo.demo-chat-extended/ChatExtended
      `demo.demo-webview/Webview demo.demo-webview/Webview
      `demo.demo-todos-simple/TodoList demo.demo-todos-simple/TodoList ; css fixes
      `demo.demo-todomvc/TodoMVC demo.demo-todomvc/TodoMVC
      `demo.demo-todomvc-branched/TodoMVCBranched demo.demo-todomvc-branched/TodoMVCBranched
      `demo.demo-todomvc-composed/TodoMVC-composed demo.demo-todomvc-composed/TodoMVC-composed
      `demo.demo-color/Color demo.demo-color/Color
      `demo.demo-virtual-scroll/VirtualScroll demo.demo-virtual-scroll/VirtualScroll
      `demo.tutorial-7guis-1-counter/Counter demo.tutorial-7guis-1-counter/Counter
      `demo.tutorial-7guis-2-temperature/TemperatureConverter demo.tutorial-7guis-2-temperature/TemperatureConverter
      `demo.tutorial-7guis-4-timer/Timer demo.tutorial-7guis-4-timer/Timer
      `demo.tutorial-7guis-5-crud/CRUD demo.tutorial-7guis-5-crud/CRUD
      `demo.demo-tic-tac-toe/TicTacToe demo.demo-tic-tac-toe/TicTacToe
      `demo.demo-studentDatomic/TodoMVC demo.demo-studentDatomic/TodoMVC
      `demo.demo-student2/Student2 demo.demo-student2/Student2
      `demo.demo-student/Student demo.demo-student/Student
      `demo.demo-svg/SVG demo.demo-svg/SVG
      `demo.tutorial-blinker/Blinker demo.tutorial-blinker/Blinker
      `wip.tracing/TracingDemo wip.tracing/TracingDemo
      `demo.demo-datomic-browser/DatomicBrowser demo.demo-datomic-browser/DatomicBrowser

      ;`demo.demo-reagent-interop/ReagentInterop (when react-available demo.demo-reagent-interop/ReagentInterop)
      ;::demos/dennis-exception-leak wip.dennis-exception-leak/App2
      ;`wip.demo-stage-ui4/CrudForm wip.demo-stage-ui4/CrudForm
      ;`wip.datomic-browser/DatomicBrowser wip.datomic-browser/DatomicBrowser
      NotFoundPage)))

(e/defn Main []
  (binding [history/encode contrib.ednish/encode-uri
            history/decode #(or (contrib.ednish/decode-path % hf/read-edn-str)
                               [`demo.demo-index/Demos])]
    (history/router (history/HTML5-History.)
      (set! (.-title js/document) (str (clojure.string/capitalize (name (first history/route))) " - Hyperfiddle"))
      (binding [dom/node js/document.body]
        (dom/pre (dom/text (contrib.str/pprint-str history/route)))
        (let [[page & args] history/route]
          (e/server (new (Pages. page #_args))))))))
